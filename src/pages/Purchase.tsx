import { useState } from 'react'

export default function Purchase() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (!email) {
        setError('Please enter your email address')
        setLoading(false)
        return
      }

      // Call backend API to generate secure payment form
      const apiUrl = ((import.meta as any).env.VITE_API_URL as string | undefined) || window.location.origin
      const response = await fetch(`${apiUrl}/api/payfast-process?action=form`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: 99.00,
          email: email,
          itemId: 'sweet-dreams-guide',
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate payment form')
      }

      const { formData, endpoint } = await response.json()

      // Create and submit form to PayFast
      const form = document.createElement('form')
      form.method = 'POST'
      form.action = endpoint

      Object.entries(formData).forEach(([key, value]) => {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = key
        input.value = String(value)
        form.appendChild(input)
      })

      document.body.appendChild(form)
      form.submit()
    } catch (err) {
      console.error('Checkout error:', err)
      setError(err instanceof Error ? err.message : 'Checkout failed. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="text-sm font-bold text-blue-600 tracking-wider mb-4 uppercase">Secure Checkout</p>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">Get Your Copy of Sweet Dreams</h1>
            <p className="text-xl text-slate-600">Instant PDF download after payment. Start reading in minutes.</p>
          </div>
        </div>
      </section>

      {/* Purchase Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Payment Card */}
            <div>
              <div className="bg-white border-2 border-blue-200 rounded-xl p-8">
                <div className="text-center mb-6">
                  <div className="text-sm text-slate-600 mb-2">Complete Guide</div>
                  <div className="text-5xl font-bold text-slate-900">
                    <span className="text-2xl">R</span>99
                  </div>
                  <div className="text-sm text-slate-600 mt-2">Once-off payment • No subscription</div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-700">40-page professionally designed PDF guide</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-700">10 comprehensive chapters (newborn to 24 months)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-700">5 sleep training methods compared</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-700">Age-specific sample schedules</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-700">Environment optimization checklist</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-700">Troubleshooting guide for common issues</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-700">Printable weekly sleep log template</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-700">Age-by-age quick reference cards</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-700">8 sleep myths debunked</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-700">Bonus FAQ section</span>
                  </li>
                </ul>

                {/* PayFast Form */}
                <form action="https://sandbox.payfast.co.za/eng/process" method="POST" className="mb-6">
                  {/* Merchant Details — SANDBOX MODE */}
                  <input type="hidden" name="merchant_id" value="10000100" />
                  <input type="hidden" name="merchant_key" value="46f0cd694581a" />

                  {/* URLs */}
                  <input type="hidden" name="return_url" value={`${window.location.origin}/thank-you`} />
                  <input type="hidden" name="cancel_url" value={`${window.location.origin}/purchase`} />
                  <input type="hidden" name="notify_url" value="https://yoursite.com/api/payfast-notify" />

                  {/* Transaction Details */}
                  <input type="hidden" name="amount" value="99.00" />
                  <input type="hidden" name="item_name" value="Sweet Dreams: Baby Sleep Guide (PDF)" />
                  <input type="hidden" name="item_description" value="40-page evidence-based baby sleep guide, 0-24 months" />
                  <input type="hidden" name="email_address" value={email} />

                {/* Email input */}
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    onClick={handleCheckout}
                    disabled={loading}
                    className="w-full py-4 rounded-lg font-bold text-white bg-gradient-to-r from-slate-900 to-blue-600 hover:shadow-lg transition-all text-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? '🔄 Processing...' : '🔒 Pay Securely with PayFast — R99'}
                  </button>
                </form>

                {/* Payment Methods */}
                <div className="text-center">
                  <div className="flex flex-wrap justify-center items-center gap-2 mb-2">
                    <span className="text-xs text-slate-600">Accepted:</span>
                    <span className="font-semibold text-slate-900">Visa</span>
                    <span className="text-blue-300">•</span>
                    <span className="font-semibold text-slate-900">Mastercard</span>
                    <span className="text-blue-300">•</span>
                    <span className="font-semibold text-slate-900">EFT</span>
                    <span className="text-blue-300">•</span>
                    <span className="font-semibold text-slate-900">SnapScan</span>
                    <span className="text-blue-300">•</span>
                    <span className="font-semibold text-slate-900">Zapper</span>
                  </div>
                  <p className="text-xs text-slate-600">256-bit SSL encrypted • Processed by PayFast (South Africa)</p>
                </div>

                {/* Sandbox Notice */}
                <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 mt-6">
                  <p className="text-sm text-yellow-900">
                    <strong>⚠️ Sandbox Mode:</strong> This form uses PayFast's test environment. To go live, contact PayFast to activate your merchant account.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why parents love this guide</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-2xl">
                    🧠
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Evidence-based, not opinion-based</h4>
                    <p className="text-slate-600 text-sm">Every strategy is backed by published research from leading pediatric journals. We cite our sources.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center text-2xl">
                    ⚖️
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">No judgment, all options</h4>
                    <p className="text-slate-600 text-sm">We present 5 approaches from gentle to structured. You choose what's right for your family.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-2xl">
                    📅
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Grows with your baby</h4>
                    <p className="text-slate-600 text-sm">Covers every stage from newborn to 24 months. One guide for the entire journey.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Instant access</h4>
                    <p className="text-slate-600 text-sm">Download immediately after payment. Start reading in minutes — even at 3 AM.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-2xl">
                    🖨️
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Printable tools included</h4>
                    <p className="text-slate-600 text-sm">Sleep log, environment checklist, and age-by-age reference cards you can stick on the fridge.</p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-orange-50 rounded-lg p-6 mt-8">
                <div className="text-yellow-500 mb-3">★★★★★</div>
                <p className="text-slate-700 italic text-sm leading-relaxed mb-4">
                  "I've read three baby sleep books and none of them gave me what this 40-page guide did: a clear, honest comparison of methods so I could make an informed choice. My 7-month-old now sleeps through the night."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-200 flex items-center justify-center font-bold text-slate-900 text-xs">
                    TK
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Thandi K.</div>
                    <div className="text-xs text-slate-600">Mom of a 9-month-old, Pretoria</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
