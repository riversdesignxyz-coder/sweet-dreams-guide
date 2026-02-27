import crypto from 'crypto';

/**
 * PayFast Integration Utilities
 * Handles secure payment processing with PayFast
 */

export interface PayFastConfig {
  merchantId: string;
  merchantKey: string;
  passPhrase: string;
  sandbox: boolean;
}

export interface PaymentData {
  amount: number;
  itemName: string;
  itemDescription: string;
  emailAddress: string;
  mItemId: string;
}

/**
 * Generate PayFast signature for payment form
 */
export function generatePayFastSignature(
  data: Record<string, string | number>,
  passPhrase: string
): string {
  // Create query string from data
  let queryString = '';
  
  Object.keys(data)
    .sort()
    .forEach((key) => {
      if (data[key] !== '') {
        queryString += `${key}=${encodeURIComponent(String(data[key]))}&`;
      }
    });

  // Remove trailing ampersand
  queryString = queryString.slice(0, -1);

  // Add passphrase if provided
  if (passPhrase) {
    queryString += `&passphrase=${encodeURIComponent(passPhrase)}`;
  }

  // Generate MD5 hash
  const signature = crypto.createHash('md5').update(queryString).digest('hex');
  
  return signature;
}

/**
 * Validate PayFast ITN (Instant Transaction Notification) signature
 */
export function validateITNSignature(
  data: Record<string, string>,
  passPhrase: string
): boolean {
  const { signature, ...dataWithoutSignature } = data;

  // Recreate the signature
  const expectedSignature = generatePayFastSignature(dataWithoutSignature, passPhrase);

  return signature === expectedSignature;
}

/**
 * Build PayFast payment form data
 */
export function buildPaymentFormData(
  config: PayFastConfig,
  payment: PaymentData,
  returnUrl: string,
  cancelUrl: string,
  notifyUrl: string
): Record<string, string | number> {
  const timestamp = Math.floor(Date.now() / 1000);
  
  const formData: Record<string, string | number> = {
    merchant_id: config.merchantId,
    merchant_key: config.merchantKey,
    return_url: returnUrl,
    cancel_url: cancelUrl,
    notify_url: notifyUrl,
    amount: payment.amount,
    item_name: payment.itemName,
    item_description: payment.itemDescription,
    email_address: payment.emailAddress,
    m_item_id: payment.mItemId,
    custom_int1: timestamp,
  };

  // Generate signature
  const signature = generatePayFastSignature(formData, config.passPhrase);
  formData.signature = signature;

  return formData;
}

/**
 * Get PayFast endpoint URL
 */
export function getPayFastEndpoint(sandbox: boolean): string {
  return sandbox
    ? 'https://sandbox.payfast.co.za/eng/process'
    : 'https://www.payfast.co.za/eng/process';
}

/**
 * PayFast ITN response codes
 */
export const ITN_RESPONSES = {
  COMPLETE: '00',
  INCOMPLETE: '01',
  UNKNOWN: '02',
  SUSPICIOUS: '03',
  FAILED: '04',
  DUPLICATE: '05',
  CANCELLED: '06',
  PENDING: '07',
  FRAUD: '08',
};
