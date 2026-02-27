import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: "Is this guide suitable for all babies?",
      a: "Yes! The guide covers ages 0–24 months with specific advice for each age group. Because every baby is different, I include multiple approaches and strategies so you can choose what fits your family's values and lifestyle. There's no one-size-fits-all solution."
    },
    {
      q: "Will I have to do 'cry it out' sleep training?",
      a: "Absolutely not. The guide presents five different sleep training methods — from gentle gradual withdrawal to Ferber to extinction — with honest pros and cons for each. You'll understand the research and can choose (or skip) any method based on what aligns with your parenting values."
    },
    {
      q: "What if I'm exclusively breastfeeding? Does this still apply?",
      a: "Yes! There's an entire chapter on how nutrition affects sleep, with specific guidance for breastfed babies, formula-fed babies, and combination feeding. Wake windows and sleep strategies work regardless of how you feed your baby."
    },
    {
      q: "How quickly will I see results?",
      a: "It depends on your starting point. Some parents see improvement within days of adjusting wake windows. Others need a few weeks if implementing sleep training. The key is consistency and understanding that sleep is a marathon, not a sprint. Most parents report noticeable changes within 1–2 weeks."
    },
    {
      q: "Is this just another sleep training book?",
      a: "No. While sleep training options are included, the guide is really about understanding sleep science first. Many parents fix their baby's sleep simply by optimizing the environment and working with wake windows — without any formal 'training.' It's about giving you options, not pressure."
    },
    {
      q: "What if my baby has reflux/colic/other conditions?",
      a: "The troubleshooting chapter addresses these plus regressions, teething, illness, and more. I also recommend always consulting your pediatrician, especially if there's an underlying medical condition. This guide is informational, not medical advice."
    },
    {
      q: "Can I share this guide with my partner?",
      a: "Yes! Many partners find reading the guide together really helpful — it means you're both on the same page (literally) about what's happening with your baby's sleep. Some of my best feedback comes from couples who read it together."
    },
    {
      q: "Is this available only as PDF?",
      a: "Currently, yes — it's a downloadable PDF that you can print, annotate, and reference anytime. You'll get instant access after purchase, so you can start reading within minutes."
    },
    {
      q: "Is there a money-back guarantee?",
      a: "I've kept the price at R99 specifically so there's almost no financial risk. That said, if you're not happy within 7 days, let me know and I'll refund you, no questions asked."
    },
    {
      q: "Will you update the guide with new research?",
      a: "Yes! As new research emerges, I update the guide and existing customers get free access to updated versions. You're not just buying a static PDF; you're getting ongoing access to the most current information."
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-bold text-blue-600 tracking-wider mb-4 uppercase">Frequently Asked Questions</p>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Common Questions</h1>
            <p className="text-xl text-slate-600">
              Got questions? Check here first. If you don't find your answer, feel free to reach out.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-slate-200 last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-6 flex justify-between items-start gap-4 hover:text-blue-600 transition-colors"
              >
                <h3 className="text-lg font-bold text-slate-900 text-left">{faq.q}</h3>
                <div className={`flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold transition-transform ${openIndex === idx ? 'rotate-45' : ''}`}>
                  +
                </div>
              </button>
              
              {openIndex === idx && (
                <div className="pb-6 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Still have questions?</h2>
          <p className="text-slate-600 mb-8">
            Don't see your question here? Reach out directly — I'm happy to help before you buy.
          </p>
          <a 
            href="mailto:hello@sweetdreams.co.za"
            className="inline-block px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r from-slate-900 to-blue-600 hover:shadow-lg transition-all"
          >
            Email Me
          </a>
        </div>
      </section>
    </div>
  )
}
