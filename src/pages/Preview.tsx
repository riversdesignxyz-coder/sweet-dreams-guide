import { Link } from 'react-router-dom'

export default function Preview() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-bold text-blue-600 tracking-wider mb-4 uppercase">Free Preview</p>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Read Before You Buy</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Get a taste of what's inside the Sweet Dreams guide. This free preview includes the introduction, an overview of sleep science, and our newborn sleep chapter.
            </p>
          </div>
        </div>
      </section>

      {/* Sample Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Chapter 1 Preview: The Science of Baby Sleep</h2>
            
            <div className="prose prose-sm md:prose max-w-none text-slate-700 space-y-4">
              <p>
                Before we dive into strategies, let's understand what's actually happening when your baby sleeps. Most of the anxiety around baby sleep comes from not knowing what's normal — and once you understand the science, so much of parenting becomes clearer.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-8">Sleep Cycles</h3>
              <p>
                Babies don't sleep the same way adults do. While you might sleep in one long, predictable block, babies cycle between deep sleep and lighter sleep stages roughly every 45–60 minutes (compared to our 90 minutes). This is why your newborn might wake frequently — they're completing natural sleep cycles, not failing at sleep.
              </p>

              <div className="bg-green-50 border-l-4 border-green-600 p-4 my-6">
                <p className="font-semibold text-green-900 mb-2">💡 Key Point</p>
                <p className="text-green-800">Short wake-ups between sleep cycles are completely normal. Your baby isn't broken; their nervous system is still maturing.</p>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mt-8">Circadian Rhythms</h3>
              <p>
                Your baby's internal clock — their circadian rhythm — doesn't fully develop until around 3–4 months old. This is why newborns can't tell day from night. They're not being difficult; their brains literally haven't wired up the ability to distinguish. By understanding this timeline, you can adjust your expectations and reduce frustration.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-8">Wake Windows</h3>
              <p>
                One of the most game-changing concepts in this guide is understanding "wake windows" — the amount of time your baby can comfortably stay awake before needing sleep again. It's not about forcing your baby to nap at exact times; it's about working with their biological tired window.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
                <p className="font-semibold text-blue-900 mb-2">📊 Age-Based Wake Windows</p>
                <div className="text-blue-800 space-y-1 text-sm">
                  <p><strong>0–6 weeks:</strong> 45–60 minutes</p>
                  <p><strong>6–12 weeks:</strong> 60–90 minutes</p>
                  <p><strong>3–6 months:</strong> 90–120 minutes</p>
                  <p><strong>6–12 months:</strong> 2–3 hours</p>
                  <p><strong>12–24 months:</strong> 3–4 hours</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mt-8">Sleepy Cues vs. Overtired Cues</h3>
              <p>
                The real trick isn't forcing sleep — it's catching your baby in the "sweet spot" between tired and overtired. Sleepy cues are soft and mellow: glazed eyes, slower movements, less interest in toys. Overtired cues are intense: frantic movement, arching back, difficulty settling. Your job is to get them down somewhere in the middle.
              </p>

              <p className="mt-8 pt-8 border-t border-slate-200 text-slate-600">
                This is just a sample of what's inside the 40-page guide. You'll also find:
              </p>

              <ul className="space-y-2 my-4">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Detailed newborn sleep strategies (Chapter 2)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>The 4-month regression explained (Chapter 3)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Sleep training methods compared (Chapter 4)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Complete environment optimization guide (Chapter 6)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Troubleshooting every common challenge (Chapter 8)</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-slate-600 mb-6">Ready to get the full guide?</p>
              <Link 
                to="/purchase" 
                className="inline-block px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-slate-900 to-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Get Your Copy — R99
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
