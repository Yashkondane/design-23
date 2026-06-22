export function AuthorBios() {
  return (
    <div className="mt-12 mb-12 pt-8">
      <h2 className="text-[22px] font-bold text-brand-600 mb-8">Author & Reviewer Bios</h2>
      
      <div className="mb-10">
        <h4 className="text-[15px] font-bold text-brand-900 mb-4">About the Author</h4>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img 
            src="https://i.pravatar.cc/150?img=44" 
            alt="Author" 
            className="w-[120px] h-[120px] object-cover shrink-0 bg-gray-100"
          />
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Dr. Alan Davies is a lead analyst delivering data-driven insights that support strategic planning and market understanding in the Precision Agriculture sector. He combines analytical rigor with strong content development skills, translating complex information into clear, actionable narratives for diverse audiences. His work includes structured research, trend tracking, competitive assessment, and insight-led content creation that supports informed decision-making. Curious and detail-oriented by nature, he continually deepens his understanding of evolving AgTech markets while pursuing creative interests such as drone prototyping and rural photography.
          </p>
        </div>
      </div>

      <div>
        <h4 className="text-[15px] font-bold text-brand-900 mb-4">About the Reviewer</h4>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img 
            src="https://i.pravatar.cc/150?img=11" 
            alt="Reviewer" 
            className="w-[120px] h-[120px] object-cover shrink-0 bg-gray-100"
          />
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Sarah Chen is an accomplished business consultant and strategist with over a decade of rich experience in market intelligence, strategy, technology, and business transformation within the agricultural sector. Her work has included rigorous qualitative and quantitative analysis across multiple rural deployments, helping clients shape investment decisions and long-term farm management roadmaps. Earlier in her career, she was associated with top-tier research firms where she contributed to industry-leading supply chain reports and software ecosystem analyses. She has worked with leading global agricultural companies and holds an MBA with a dual specialization in Agronomy and Finance.
          </p>
        </div>
      </div>
    </div>
  )
}
