import { Link } from 'react-router-dom'

export default function Home() {
  const chapters = [
    { num: 1, title: "The Science of Baby Sleep", desc: "Sleep cycles, circadian rhythms, melatonin, wake windows, and sleepy cues explained." },
    { num: 2, title: "Your Newborn (0–3 Months)", desc: "Safe sleep, the fourth trimester, swaddling, and surviving those early weeks." },
    { num: 3, title: "Emerging Patterns (3–6 Months)", desc: "The 4-month \"regression,\" drowsy but awake, and establishing a bedtime routine." },
    { num: 4, title: "Sleep Training Options (6–12 Months)", desc: "5 methods compared honestly — gradual withdrawal, Ferber, extinction, pick-up/put-down, and gentle approaches." },
    { num: 5, title: "The Toddler Transition (12–24 Months)", desc: "Nap transitions, separation anxiety, bedtime boundaries, and crib-to-bed timing." },
    { num: 6, title: "The Perfect Sleep Environment", desc: "Darkness, white noise, temperature, and the complete environment checklist." },
    { num: 7, title: "Nap Schedules & Transitions", desc: "Sample schedules, nap transition timing, and solutions for short naps." },
    { num: 8, title: "Troubleshooting Common Challenges", desc: "Night wakings, early rising, bedtime battles, regressions, teething, and illness." },
    { num: 9, title: "Nutrition & Sleep", desc: "How feeding affects sleep, solid food timing, and when night feeds can end." },
    { num: 10, title: "Taking Care of You", desc: "Self-care strategies, sleep deprivation management, and when to seek help." },
  ]

  const testimonials = [
    { stars: 5, text: "My 5-month-old went from waking every 2 hours to sleeping 10-hour stretches within a week. This guide gave me the confidence to pick an approach and stick with it. Honestly, I feel like I got my life back.", name: "Lerato M.", detail: "Mom of 2, Financial Advisor, Johannesburg", avatar: "LM" },
    { stars: 5, text: "As a first-time mom, I was drowning in conflicting advice from family and online groups. This guide cut through all the noise with actual science. The age-by-age schedules are a lifesaver!", name: "Nomsa K.", detail: "Mom of a 4-month-old, Teacher, Durban", avatar: "NK" },
    { stars: 5, text: "I'm a single parent working full-time and I was terrified I was doing everything wrong. This book normalised my situation and gave me realistic strategies. So grateful for the no-judgment approach.", name: "Thandi Z.", detail: "Mom of twins (8 months), Healthcare Worker, Port Elizabeth", avatar: "TZ" },
    { stars: 5, text: "Die gids het my vasgestelde denkbeelde oor babaslaap totaal verander. Ek was so besorg dat my dogtertjie nie genoeg slaap kry nie, maar nou verstaan ek eindelijk hoe babas werklik slaap. Dit gee my soveel gemoedsrus.", name: "Marié van W.", detail: "Mom of a 6-month-old, Nurse, Stellenbosch", avatar: "MW" },
    { stars: 5, text: "The troubleshooting chapter saved my sanity during the 8-month regression. Just knowing it was temporary and having a plan made all the difference. I've recommended this to every new mom I know.", name: "Amina N.", detail: "Mom of 3, Business Owner, Durban", avatar: "AN" },
    { stars: 5, text: "My husband and I were so disconnected after baby arrived — we were both exhausted and frustrated. Understanding sleep science together from this guide actually brought us closer. We finally understood what was happening.", name: "Sarah van der M.", detail: "Mom of a 7-month-old, Architect, Cape Town", avatar: "SV" },
    { stars: 5, text: "I kept second-guessing myself with every decision, especially around sleep training. The honest comparison of different methods meant I could choose what felt right for MY family, not what Instagram says I should do.", name: "Zanele S.", detail: "Mom of a 9-month-old, Marketing Executive, Pretoria", avatar: "ZS" },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-orange-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-5 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-200 rounded-full opacity-5 -ml-36 -mb-36"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-6">
                📖 EVIDENCE-BASED • 40 PAGES • 0–24 MONTHS
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Finally get the <span className="text-blue-600">sleep</span> your baby (and you) deserve
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                A comprehensive, research-backed guide that walks you through every stage of your baby's sleep — from the first week home to confident toddler nights. No judgment, just science and practical strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  to="/purchase" 
                  className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-slate-900 to-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all text-center"
                >
                  Get the Guide — R99
                </Link>
                <Link 
                  to="/preview" 
                  className="px-8 py-4 rounded-full font-bold text-blue-600 border-2 border-blue-600 hover:bg-blue-50 transition-all text-center"
                >
                  Read Free Preview
                </Link>
              </div>
              
              <div className="flex gap-8 pt-6 border-t border-slate-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">40</div>
                  <div className="text-sm text-slate-600">Pages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">10</div>
                  <div className="text-sm text-slate-600">Chapters</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">0–24</div>
                  <div className="text-sm text-slate-600">Months Covered</div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center justify-center">
              <div className="w-72 p-8 rounded-lg bg-gradient-to-br from-slate-900 to-blue-900 text-white text-center shadow-2xl relative transform -skew-y-2">
                <div className="text-sm tracking-widest opacity-70 mb-2">S W E E T   D R E A M S</div>
                <div className="text-6xl mb-4">🌙</div>
                <h2 className="text-2xl font-bold mb-4 leading-tight">The Complete Guide to Baby Sleep</h2>
                <div className="w-12 h-1 bg-yellow-400 mx-auto my-4"></div>
                <p className="text-sm opacity-80">Evidence-Based Strategies<br/>from Newborn to 24 Months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empathy Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm font-bold text-blue-600 tracking-wider mb-4 uppercase">We understand</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Exhausted? You're not alone.</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              New parents lose an average of <strong>44 days of sleep</strong> in the first year. The conflicting advice online makes it worse. This guide cuts through the noise with clear, evidence-based strategies — no guilt trips, no rigid rules.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-bold text-blue-600 tracking-wider mb-4 uppercase">What's inside</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Everything you need, nothing you don't</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">The Science, Simplified</h3>
              <p className="text-slate-600">Understand sleep cycles, circadian rhythms, and wake windows — explained so clearly you'll feel like an expert.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Age-by-Age Schedules</h3>
              <p className="text-slate-600">Sample routines for every stage from newborn to 24 months, with flexible wake windows and nap guidance.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">All Methods Compared</h3>
              <p className="text-slate-600">Honest, balanced overview of 5 sleep training approaches — from gentle to structured. Choose what fits your family.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🛏️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Environment Checklist</h3>
              <p className="text-slate-600">Optimize your baby's sleep space with our comprehensive checklist — darkness, temperature, white noise, and more.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Troubleshooting Guide</h3>
              <p className="text-slate-600">Solutions for night wakings, early rising, short naps, regressions, teething, and bedtime battles.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📓</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Printable Sleep Log</h3>
              <p className="text-slate-600">Track your baby's sleep patterns with our weekly log template. Spot trends and measure progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-bold text-blue-600 tracking-wider mb-4 uppercase">Chapter overview</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">40 pages of expert guidance</h2>
            <p className="text-lg text-slate-600">Every chapter is packed with research-backed advice, practical tips, and reassurance for when things get tough.</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {chapters.map((chapter) => (
              <div key={chapter.num} className="flex gap-4 py-5 border-b border-slate-200 last:border-0">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                  {chapter.num}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{chapter.title}</h4>
                  <p className="text-sm text-slate-600">{chapter.desc}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-4 py-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 text-slate-900 flex items-center justify-center font-bold text-lg">
                +
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Bonus: Myths Debunked, FAQ, Sleep Log & Quick Reference Cards</h4>
                <p className="text-sm text-slate-600">8 myths busted, 8 FAQs answered, a printable tracker, and tear-out age-by-age summaries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-bold text-blue-600 tracking-wider mb-4 uppercase">What parents say</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Trusted by exhausted parents everywhere</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="text-yellow-500 mb-3">{'★'.repeat(testimonial.stars)}</div>
                <p className="text-slate-700 italic mb-4 leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center font-bold text-slate-900 text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-xs text-slate-600">{testimonial.detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-10 -mr-48 -mt-48"></div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready for better sleep?</h2>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-8">
            Join thousands of parents who've transformed their baby's sleep with evidence-based strategies that actually work.
          </p>
          
          <div className="text-6xl font-bold text-yellow-400 mb-4">
            R99
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-slate-100">
            <span>✓ 40-page PDF guide</span>
            <span>✓ Instant download</span>
            <span>✓ Printable sleep log</span>
            <span>✓ All ages 0–24 months</span>
          </div>
          
          <Link 
            to="/purchase" 
            className="inline-block px-8 py-4 rounded-full font-bold text-slate-900 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:shadow-xl hover:-translate-y-1 transition-all mb-4"
          >
            Get Your Copy Now
          </Link>
          
          <div className="inline-block bg-white/10 px-4 py-2 rounded-full text-sm mt-4">
            🔒 Secure payment via PayFast • Instant PDF delivery
          </div>
        </div>
      </section>
    </div>
  )
}
