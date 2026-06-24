"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: React.ReactNode;
}

export function FAQAccordion() {
  const [openIndices, setOpenIndices] = useState<Record<number, boolean>>({});

  const toggleFAQ = (index: number) => {
    setOpenIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqs: FAQItem[] = [
    {
      q: "What is the Precision Agriculture market size in 2026?",
      a: <>The <strong>Precision Agriculture market size</strong> is projected to reach <strong>USD 10.8 billion in 2026</strong>, growing from USD 9.7 billion in 2025. This growth is underpinned by accelerating adoption of GPS-guided machinery, IoT sensors, and data-driven farm management across commercial operations.</>
    },
    {
      q: "What is the projected size of the Precision Agriculture market by 2035?",
      a: <>The <strong>Precision Agriculture market is projected to reach USD 28.6 billion by 2035</strong>, driven by rising global food demand, autonomous machinery adoption, and sustainability-led variable rate technology. The absolute dollar opportunity between 2026 and 2035 is estimated at USD 18.9 billion.</>
    },
    {
      q: "What is the CAGR of the Precision Agriculture market from 2026 to 2035?",
      a: <>The <strong>Precision Agriculture market CAGR is 11.4% from 2026 to 2035</strong>. This rate is supported by global food-security demand, declining sensor and hardware costs, and government subsidies for farm mechanization and sustainable practices.</>
    },
    {
      q: "Which technology dominated the Precision Agriculture market in 2025?",
      a: <><strong>GPS/GNSS guidance systems dominated with approximately 31% revenue share</strong> in 2025, equivalent to USD 3.0 billion. Auto-steer and guidance technology remains the most widely adopted entry point for precision farming due to measurable fuel savings and reduced field overlap.</>
    },
    {
      q: "Which technology is expected to grow fastest in the Precision Agriculture market?",
      a: <><strong>Variable Rate Technology (VRT) is the fastest-growing sub-segment at 13.8% CAGR</strong> from 2026 to 2035, growing from USD 1.6 billion in 2025 to USD 5.8 billion by 2035. This growth is driven by sustainability mandates and input-cost optimization pressures.</>
    },
    {
      q: "Which region dominated the Precision Agriculture market in 2025?",
      a: <><strong>North America dominated with approximately 36% revenue share</strong>, equivalent to USD 3.5 billion in 2025. The region&apos;s leadership reflects large-scale row-crop operations, advanced machinery adoption, and the headquartering of major agritech vendors.</>
    },
    {
      q: "Which region is expected to grow fastest in the Precision Agriculture market?",
      a: <><strong>Asia-Pacific is the fastest-growing region at 14.6% CAGR</strong> from 2026 to 2035, projected to grow from USD 2.1 billion in 2025 to USD 7.9 billion by 2035. Growth is driven by food-security mandates, mechanization subsidies, and agritech startup expansion in China and India.</>
    },
    {
      q: "Which country holds the largest Precision Agriculture market share?",
      a: <>The <strong>United States held approximately USD 3.0 billion</strong> in Precision Agriculture revenue in 2025, making it the largest single national market. The U.S. hosts the largest base of precision-equipped commercial farms and the deepest agritech R&D ecosystem.</>
    },
    {
      q: "Who are the key players in the Precision Agriculture market?",
      a: <>The leading companies include <strong>Deere &amp; Company, Trimble Inc., AGCO Corporation, CNH Industrial, Bayer (Climate LLC), Topcon Corporation, Raven Industries, Kubota Corporation, Hexagon AB, and Ag Leader Technology</strong>. These ten companies collectively hold approximately 52% of global market revenue as of 2025.</>
    },
    {
      q: "What are the primary growth drivers of the Precision Agriculture market?",
      a: <>The primary growth drivers are: <strong>(1) rising global food demand</strong> requiring a projected 60% production increase by 2050 (UN FAO); <strong>(2) declining costs of IoT sensors, drones, and GPS hardware</strong>; and <strong>(3) government subsidies</strong> for farm mechanization and sustainable practices across major agricultural economies.</>
    },
    {
      q: "What are the key restraints in the Precision Agriculture market?",
      a: <>The primary restraint is the <strong>high initial capital investment</strong> — a fully equipped precision system costs USD 25,000–150,000 depending on scale, a significant barrier for smallholder farmers. Limited rural broadband connectivity and fragmented land holdings in emerging markets represent secondary structural constraints.</>
    },
    {
      q: "What are the major opportunities in the Precision Agriculture market?",
      a: <>The three major opportunities are: <strong>(1) equipment-as-a-service models</strong> unlocking 500M+ smallholder farms; <strong>(2) carbon farming and ESG markets</strong> creating monetizable soil-carbon revenue; and <strong>(3) autonomous robotic fleets</strong> addressing agricultural labor shortages in developed markets.</>
    },
    {
      q: "How is AI integration reshaping the Precision Agriculture market?",
      a: <>AI integration is a significant structural shift in the Precision Agriculture market. <strong>Software and data-services revenue grew from approximately 22% of total market revenue in 2023 to an estimated 31% in 2025</strong>. Vendors are embedding machine learning for prescriptive field analytics, shifting economics from one-time hardware sales to recurring data subscriptions.</>
    },
    {
      q: "What is the regulatory environment for the Precision Agriculture market?",
      a: <>The regulatory environment is shaped primarily by <strong>government subsidy programs and sustainability mandates</strong> including the USDA conservation incentives, the EU Common Agricultural Policy&apos;s digital farming provisions, and India&apos;s agricultural mechanization sub-mission. These programs lower the cost barrier for farmer adoption and accelerate market growth.</>
    },
    {
      q: "How much revenue did the U.S. Precision Agriculture market generate in 2025?",
      a: <>The <strong>U.S. Precision Agriculture market generated approximately USD 3.0 billion in 2025</strong>, representing the largest single national market globally. The U.S. market is driven by large-scale commercial farms, established equipment dealer networks, and data-driven farming infrastructure.</>
    }
  ];

  return (
    <section className="content-section" id="faq" aria-labelledby="faq-heading">
      <h2 id="faq-heading">Frequently Asked Questions: Precision Agriculture Market</h2>
      <div className="faq-container" itemScope itemType="https://schema.org/FAQPage">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`faq-item ${openIndices[i] ? "open" : ""}`}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button
              className="faq-question"
              aria-expanded={openIndices[i] ? "true" : "false"}
              onClick={() => toggleFAQ(i)}
              itemProp="name"
            >
              {i + 1}. {faq.q}
              <span className="faq-chevron" aria-hidden="true">
                ▼
              </span>
            </button>
            <div className="faq-answer-wrapper">
              <div
                className="faq-answer"
                itemProp="acceptedAnswer"
                itemScope
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text">{faq.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}