import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function ThankYou() {
  const [downloadLink] = useState('/Sweet_Dreams_Baby_Sleep_Guide.pdf')

  useEffect(() => {
    // In a real app, you'd verify the payment here
    // and trigger email delivery of the PDF
    console.log('Payment successful. Email sent with download link.')
  }, [])

  return (
    <div className="pt-20">
      {/* Success Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center">
            <div className="text-6xl mb-6">✓</div>
            
            <h1 className="text-5xl font-bold text-slate-900 mb-4">Thank You!</h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Your purchase is complete. Your PDF download link and delivery instructions have been sent to your email.
            </p>

            <div className="bg-white rounded-xl shadow-md p-8 mb-8 border-2 border-green-200">
              <p className="text-green-700 font-semibold mb-4">✓ Payment received</p>
              <p className="text-slate-700 mb-6">
                Check your inbox (and spam folder, just in case) for an email with your download link and a welcome letter with tips for getting the most out of the guide.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-slate-600 mb-3">
                  <strong>📧 Didn't receive the email?</strong>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Sometimes our email takes a few minutes or goes to spam. Try:
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Checking your spam/promotions folder</li>
                  <li>• Waiting a few minutes and refreshing</li>
                  <li>• Contacting us at hello@sweetdreams.co.za with your order details</li>
                </ul>
              </div>

              <a
                href={downloadLink}
                download
                className="inline-block px-8 py-3 rounded-lg font-bold text-white bg-green-600 hover:bg-green-700 transition-colors mb-4"
              >
                Download Your Guide
              </a>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">Next Steps</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-white rounded-lg p-4 text-left">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Download & Open</h3>
                    <p className="text-slate-600 text-sm">Download the PDF and open it in your favorite PDF reader. Start with the introduction to get the most out of it.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 text-left">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Read the Relevant Chapter</h3>
                    <p className="text-slate-600 text-sm">Start with the chapter that matches your baby's current age. You don't need to read sequentially.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 text-left">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Print & Customize</h3>
                    <p className="text-slate-600 text-sm">Print the sleep log and reference cards. Feel free to annotate and personalize — make it your own.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 text-left">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Share with Your Partner</h3>
                    <p className="text-slate-600 text-sm">Many couples find reading it together helpful. Being on the same page (literally!) makes a big difference.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-8 mb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Need Support?</h3>
              <p className="text-slate-600 mb-4">
                Have questions while reading? Found a typo? Want to share your success story?
              </p>
              <a
                href="mailto:hello@sweetdreams.co.za"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                📧 Get in touch
              </a>
            </div>

            <Link
              to="/"
              className="inline-block px-8 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-slate-900 to-blue-600 hover:shadow-lg transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Join Thousands of Happy Parents</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">2,500+</div>
              <p className="text-slate-600">Guides downloaded</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-yellow-500 mb-2">4.9★</div>
              <p className="text-slate-600">Average rating</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">92%</div>
              <p className="text-slate-600">Would recommend</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
