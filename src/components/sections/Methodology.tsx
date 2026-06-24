import Link from "next/link"
import { Mic, BookOpen, CheckCircle, Search, FileText, ArrowRight } from "lucide-react"

export function Methodology() {
  const steps = [
    {
      num: "Step 01",
      icon: Mic,
      title: "Primary Research",
      desc: "In-depth interviews with C-level executives and industry experts across agricultural markets."
    },
    {
      num: "Step 02",
      icon: BookOpen,
      title: "Secondary Research",
      desc: "Analysis of regulatory filings, trade publications, patent databases, and journals."
    },
    {
      num: "Step 03",
      icon: CheckCircle,
      title: "Data Validation",
      desc: "Cross-verification using top-down and bottom-up market estimation methodologies."
    },
    {
      num: "Step 04",
      icon: Search,
      title: "Analyst Review",
      desc: "Senior research analysts review finding consistency and logical quantitative bounds."
    },
    {
      num: "Step 05",
      icon: FileText,
      title: "Final Report",
      desc: "Peer-reviewed market intelligence published with full citations and data tables."
    }
  ];

  return (
    <section className="bg-brand-600 py-20 px-6" aria-label="Agriculture Industry Insights Research Methodology">
      <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-accent"></span>
            <span className="text-accent text-sm font-bold tracking-wider uppercase">How We Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Our Market Research Methodology</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">Every AII report is produced through a rigorous multi-stage research and validation process ensuring accuracy, reliability, and actionable intelligence.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-4 lg:gap-3 xl:gap-4 w-full" role="list">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row items-center flex-1 w-full lg:w-auto">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center flex-1 w-full h-full flex flex-col justify-start items-center hover:bg-white/10 transition-colors" role="listitem">
                <div className="text-accent text-xs font-bold uppercase tracking-widest mb-4">{step.num}</div>
                <div className="mb-4 flex justify-center">
                  <step.icon size={28} className="text-accent" />
                </div>
                <h3 className="text-white text-base font-bold mb-3">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
              </div>
              
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex justify-center items-center px-1 xl:px-2" aria-hidden="true">
                  <ArrowRight size={20} className="text-white/30" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/about#methodology" className="inline-flex items-center px-8 py-3 border-2 border-white/50 text-white font-semibold rounded-lg hover:bg-white hover:text-brand-600 transition-colors">
            Read Full Methodology &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
