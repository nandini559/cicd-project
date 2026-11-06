import { Sector, Service, TeamMember, Job, Article, Testimonial } from '../types';

export const SECTORS: Sector[] = [
  {
    id: 'accounting-finance',
    slug: 'accounting-finance',
    title: 'Accounting & Finance',
    tagline: 'Precision finance leadership and technical accounting expertise.',
    description: 'We partner with multinational corporations, domestic enterprises, and financial institutions to recruit elite talent spanning senior leadership to specialized technical roles.',
    marketInsights: 'Rising demand for senior FP&A directors, heads of tax, and group financial controllers who can drive automation and navigate cross-border regulatory shifts.',
    keyRoles: [
      'Chief Financial Officer (CFO)',
      'Head of Financial Planning & Analysis (FP&A)',
      'Group Financial Controller',
      'Finance Director',
      'Senior Tax Manager & Director',
      'Treasury Manager',
      'Senior Technical Accountant'
    ],
    image: '/src/assets/images/executive_business_meeting_1793948665733.jpg'
  },
  {
    id: 'aircraft-leasing',
    slug: 'aircraft-leasing',
    title: 'Aircraft Leasing & Aviation Finance',
    tagline: 'World-leading aviation finance recruitment in the global capital of aircraft leasing.',
    description: 'Ireland manages over 60% of the world’s leased commercial aircraft fleet. Elevate Partners has deep, peerless relationships across major lessors, airlines, and aviation financiers.',
    marketInsights: 'Significant demand across pricing analysis, technical asset management, contract management, and OEM relationship leads as fleet renewals and delivery schedules accelerate.',
    keyRoles: [
      'Head of Pricing & Commercial Analysis',
      'VP Technical Asset Management',
      'VP Origination & Trading',
      'Legal Counsel - Aviation Transactions',
      'Aviation Risk Manager',
      'Contract & Lease Manager'
    ],
    image: '/src/assets/images/aviation_finance_aircraft_1793948665429.jpg'
  },
  {
    id: 'asset-wealth-management',
    slug: 'asset-wealth-management',
    title: 'Asset & Wealth Management',
    tagline: 'Connecting investment managers, sovereign wealth, and family offices with top talent.',
    description: 'Representing global asset managers, UCITS/AIFM management companies, and private client wealth managers, our consultants identify exceptional portfolio managers, analysts, and distribution specialists.',
    marketInsights: 'Increased consolidation in ManCos and rising scrutiny under CP86 continue to drive recruitment for designated persons (DPs) and ESG product strategists.',
    keyRoles: [
      'Chief Investment Officer (CIO)',
      'Portfolio Manager (Equities, Fixed Income)',
      'Designated Person (CP86 Governance)',
      'Head of Distribution & Institutional Sales',
      'Wealth Management Advisor',
      'Investment Operations Director'
    ],
    image: '/src/assets/images/hero_dublin_financial_1793948664278.jpg'
  },
  {
    id: 'private-equity-credit',
    slug: 'private-equity-credit',
    title: 'Private Equity & Private Credit',
    tagline: 'Rigorous search for direct lending, buyout, and growth equity leaders.',
    description: 'With alternative capital markets expanding rapidly throughout Dublin and London, we recruit top-tier deal originators, investment directors, and portfolio monitoring specialists.',
    marketInsights: 'Private debt funds are actively deploying capital into European middle-market sponsors, spurring search for senior underwriters and restructuring professionals.',
    keyRoles: [
      'Managing Director - Private Debt',
      'Private Equity Investment Principal',
      'Direct Lending Portfolio Manager',
      'Senior Associate / VP Deal Execution',
      'Value Creation Director',
      'Fund CFO / Head of Fund Finance'
    ],
    image: '/src/assets/images/executive_business_meeting_1793948665733.jpg'
  },
  {
    id: 'investment-banking',
    slug: 'investment-banking',
    title: 'Investment Banking & Corporate Finance',
    tagline: 'Advising premier boutique advisory firms and global bulge-bracket institutions.',
    description: 'We connect corporate finance advisory teams, M&A groups, and equity capital markets desks with analytical and sector-specialist banking talent.',
    marketInsights: 'Mid-market M&A activity remains resilient across technology, renewable energy, and infrastructure sectors.',
    keyRoles: [
      'Managing Director - Corporate Finance',
      'VP / Director M&A Advisory',
      'Corporate Finance Manager',
      'Senior Investment Analyst',
      'Debt Advisory Specialist'
    ],
    image: '/src/assets/images/hero_dublin_financial_1793948664278.jpg'
  },
  {
    id: 'risk-compliance',
    slug: 'risk-compliance',
    title: 'Risk & Compliance',
    tagline: 'Safeguarding institutions with experienced regulatory and enterprise risk practitioners.',
    description: 'In an era of dynamic regulatory oversight from the Central Bank of Ireland (CBI), FCA, and ECB, we source senior risk officers, compliance directors, and MLROs.',
    marketInsights: 'High focus on operational resilience (DORA), consumer protection code revisions, and anti-financial crime leadership.',
    keyRoles: [
      'Chief Risk Officer (CRO)',
      'Head of Regulatory Compliance',
      'Money Laundering Reporting Officer (MLRO)',
      'DORA Compliance Specialist',
      'Enterprise Risk Manager',
      'Credit & Market Risk Director'
    ],
    image: '/public/assets/aistudio/Screenshot__236__c852f41c.png'
  },
  {
    id: 'technology',
    slug: 'technology',
    title: 'Technology & Digital Transformation',
    tagline: 'Bridging financial services and modern engineering leadership.',
    description: 'As financial markets converge with cloud infrastructure, algorithmic platforms, and generative workflows, we place chief technology officers, engineering directors, and product leaders.',
    marketInsights: 'High demand for hands-on architects experienced in event-driven systems, payment gateways, and data engineering for quantitative trading.',
    keyRoles: [
      'Chief Technology Officer (CTO)',
      'Head of Engineering (Fintech)',
      'Lead Cloud Solutions Architect',
      'Quantitative Systems Engineer',
      'Head of Information Security / CISO',
      'Senior Data Engineer'
    ],
    image: '/public/assets/aistudio/Screenshot__236__c852f41c.png'
  },
  {
    id: 'real-estate',
    slug: 'real-estate',
    title: 'Real Estate & Property Investment',
    tagline: 'Executive placement for institutional property funds and developers.',
    description: 'We represent European REITs, opportunistic real estate funds, and commercial asset managers seeking investment managers, asset managers, and development directors.',
    marketInsights: 'Focus on logistics portfolios, student living, and prime energy-efficient commercial redevelopments across Ireland and the UK.',
    keyRoles: [
      'Head of Real Estate Investments',
      'Commercial Asset Management Director',
      'Acquisitions Manager',
      'Development Director',
      'Real Estate Debt Underwriter'
    ],
    image: '/src/assets/images/hero_dublin_financial_1793948664278.jpg'
  },
  {
    id: 'energy-infrastructure',
    slug: 'energy-infrastructure',
    title: 'Energy & Infrastructure',
    tagline: 'Specialist talent powering the global energy transition.',
    description: 'Partnering with infrastructure debt funds, renewable energy developers, and utilities across onshore wind, solar, battery storage, and transmission networks.',
    marketInsights: 'Massive capital inflows into European grid stability, offshore wind development, and battery storage infrastructure.',
    keyRoles: [
      'Investment Director - Infrastructure',
      'Renewable Energy Commercial Lead',
      'Project Finance Director',
      'PPA Origination Manager',
      'Grid & Technical Due Diligence Lead'
    ],
    image: '/src/assets/images/aviation_finance_aircraft_1793948665429.jpg'
  },
  {
    id: 'esg-sustainability',
    slug: 'esg-sustainability',
    title: 'ESG & Sustainable Finance',
    tagline: 'Embedding sustainability into core investment and corporate strategy.',
    description: 'Placing sustainability officers, SFDR reporting experts, and climate risk directors with forward-thinking financial institutions and corporates.',
    marketInsights: 'SFDR Article 8 & 9 fund compliance and CSRD corporate disclosure rules have created unprecedented need for verified ESG data specialists.',
    keyRoles: [
      'Head of ESG & Sustainable Investing',
      'CSRD Project Director',
      'Climate Risk Assessment Lead',
      'ESG Data & Reporting Manager',
      'Impact Investment Principal'
    ],
    image: '/src/assets/images/executive_business_meeting_1793948665733.jpg'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'permanent-recruitment',
    slug: 'permanent-recruitment',
    title: 'Permanent Recruitment',
    subtitle: 'Connecting visionary institutions with transformative long-term leaders.',
    description: 'Our core permanent search offering is built on deep sector networks, exhaustive candidate mapping, and rigorous competence assessment to ensure lasting cultural and strategic alignment.',
    candidateFocus: 'We take the time to understand your long-term career aspirations, matching you with employers whose values, vision, and growth trajectory amplify your ambitions.',
    clientFocus: 'We provide end-to-end talent acquisition with bespoke market mapping, salary benchmarking, and discreet engagement of passive tier-one candidates.',
    deliverables: [
      'Comprehensive candidate screening and structured competency interviews',
      'Real-time market salary and compensation benchmarking',
      'Detailed candidate career briefing packs and reference verifications',
      'Full offer negotiation and onboarding support'
    ]
  },
  {
    id: 'executive-search',
    slug: 'executive-search',
    title: 'Retained & Executive Search',
    subtitle: 'Discreet, board-level search for C-suite and partner appointments.',
    description: 'For mission-critical leadership appointments, our directors lead retained mandates personally. We bring exhaustive market research, total confidentiality, and proven advisory insight.',
    candidateFocus: 'A confidential, consultative dialogue with experienced industry directors who respect your track record and privacy.',
    clientFocus: 'Direct partner-led engagement from mandate initiation to board presentation, ensuring your organization secures visionary leadership.',
    deliverables: [
      'Exhaustive cross-border competitor and talent mapping',
      'Confidential approaches to passive global leaders',
      'Detailed leadership assessment and psychometric evaluations',
      'Board-ready candidate dossiers and structured comparative analysis'
    ]
  },
  {
    id: 'contract-solutions',
    slug: 'temporary-and-contract-solutions',
    title: 'Temporary & Contract Solutions',
    subtitle: 'Agile interim leadership and specialist project consulting.',
    description: 'At Elevate Partners, we understand that flexibility, speed, and support are key to a successful temporary or contract assignment. Whether you are seeking short-term opportunities or looking to build a long-term contracting career, our dedicated team is here to guide you every step of the way.',
    candidateFocus: 'From matching you with the right roles to ensuring smooth onboarding and ongoing support throughout your placement, we are committed to helping you thrive. With access to leading employers in the financial services industry and a wide range of assignments, we empower you to work on your terms while gaining valuable experience and exposure.',
    clientFocus: 'Immediate access to vetted contractors who hit the ground running for regulatory remediation, M&A integrations, maternity cover, or specialized systems rollout.',
    deliverables: [
      'Rapid turnaround of vetted interim specialists within 48 to 72 hours',
      'Complete contractor payroll, compliance, and insurance administration',
      'Dedicated contractor liaison officer providing continuous support',
      'Flexible engagement models tailored to project deliverables'
    ]
  },
  {
    id: 'talent-mapping',
    slug: 'talent-mapping-intelligence',
    title: 'Talent Mapping & Market Intelligence',
    subtitle: 'Data-driven insights into competitive talent landscapes and compensation.',
    description: 'Strategic market research that helps boards and HR directors plan expansions, evaluate competitor structures, and accurately assess available talent pools before initiating hiring.',
    candidateFocus: 'Ensuring market compensation data accurately reflects the specialized value you deliver.',
    clientFocus: 'Unbiased intelligence on competitor org charts, salary brackets, and gender diversity representation across your target sector.',
    deliverables: [
      'Complete competitor organizational chart mapping',
      'Sector-specific compensation and bonus surveys',
      'Feasibility studies for office openings and market expansions',
      'Diversity and inclusion talent benchmarking'
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'diarmuid-clancy',
    name: 'Diarmuid Clancy',
    role: 'Director & Co-Founder',
    sectors: ['Accounting & Finance', 'Private Equity', 'Executive Search'],
    bio: 'Diarmuid co-founded Elevate Partners in 2018. With over 18 years of recruitment and executive search experience across the Irish and European financial sectors, he specializes in C-suite and senior finance appointments.',
    email: 'dclancy@elevatepartners.ie',
    phone: '+353 1 691 6022',
    linkedin: 'https://linkedin.com',
    location: 'Dublin',
    initials: 'DC'
  },
  {
    id: 'stephen-gilmore',
    name: 'Stephen Gilmore',
    role: 'Director & Co-Founder',
    sectors: ['Aircraft Leasing', 'Asset & Wealth Management'],
    bio: 'Stephen leads the Aviation Finance and Asset Management practices at Elevate Partners. He is widely recognized as one of Ireland’s foremost recruitment advisors to international aircraft leasing firms and institutional asset managers.',
    email: 'sgilmore@elevatepartners.ie',
    phone: '+353 1 691 6022',
    linkedin: 'https://linkedin.com',
    location: 'Dublin & London',
    initials: 'SG'
  },
  {
    id: 'kevin-menton',
    name: 'Kevin Menton',
    role: 'Director',
    sectors: ['Banking & Capital Markets', 'Private Credit', 'Real Estate'],
    bio: 'Kevin specializes in investment banking, direct lending funds, and corporate finance appointments. He maintains deep advisory relationships across the Irish and UK financial ecosystems.',
    email: 'kmenton@elevatepartners.ie',
    phone: '+353 1 691 6022',
    linkedin: 'https://linkedin.com',
    location: 'Dublin',
    initials: 'KM'
  },
  {
    id: 'shane-ohara',
    name: 'Shane O’Hara',
    role: 'Associate Director',
    sectors: ['Risk & Compliance', 'Regulatory Governance'],
    bio: 'Shane manages senior risk and compliance search mandates, advising fund management companies, banks, and payment firms navigating CBI and European regulatory requirements.',
    email: 'sohara@elevatepartners.ie',
    phone: '+353 1 691 6022',
    linkedin: 'https://linkedin.com',
    location: 'Dublin',
    initials: 'SO'
  },
  {
    id: 'aoife-stokes',
    name: 'Aoife Stokes',
    role: 'Senior Recruitment Consultant',
    sectors: ['Accounting & Finance', 'Contract Solutions'],
    bio: 'Aoife partners with multinationals and scaling financial firms on qualified senior accounting placements, specializing in commercial finance directors and group reporting leaders.',
    email: 'astokes@elevatepartners.ie',
    phone: '+353 1 691 6022',
    linkedin: 'https://linkedin.com',
    location: 'Dublin',
    initials: 'AS'
  },
  {
    id: 'daniel-oconnell',
    name: 'Daniel O’Connell',
    role: 'Head of Technology',
    sectors: ['Technology', 'Fintech', 'Cybersecurity'],
    bio: 'Daniel leads recruitment across engineering, cloud infrastructure, quantitative development, and CISO appointments within high-growth fintechs and institutional trading desks.',
    email: 'doconnell@elevatepartners.ie',
    phone: '+353 1 691 6022',
    linkedin: 'https://linkedin.com',
    location: 'Dublin & London',
    initials: 'DO'
  },
  {
    id: 'caroline-ogrady',
    name: 'Caroline O’Grady',
    role: 'Senior Consultant',
    sectors: ['Aircraft Leasing', 'Legal & Contracts'],
    bio: 'Caroline focuses exclusively on aviation transactions, lease contract management, and technical asset management placements across European and global aircraft leasing entities.',
    email: 'cogrady@elevatepartners.ie',
    phone: '+353 1 691 6022',
    linkedin: 'https://linkedin.com',
    location: 'Dublin',
    initials: 'CO'
  },
  {
    id: 'matthew-fleming',
    name: 'Matthew Fleming',
    role: 'Recruitment Consultant',
    sectors: ['Energy & Infrastructure', 'ESG & Sustainability'],
    bio: 'Matthew works with renewable energy funds, green infrastructure developers, and ESG advisory groups to source top-tier sustainable finance talent.',
    email: 'mfleming@elevatepartners.ie',
    phone: '+353 1 691 6022',
    linkedin: 'https://linkedin.com',
    location: 'Dublin',
    initials: 'MF'
  },
  {
    id: 'carlota-plaza',
    name: 'Carlota Plaza',
    role: 'Operations & Marketing Lead',
    sectors: ['Operations', 'Candidate Experience'],
    bio: 'Carlota oversees digital operations, client communications, and candidate experience across both Dublin and London offices.',
    email: 'cplaza@elevatepartners.ie',
    phone: '+353 1 691 6022',
    linkedin: 'https://linkedin.com',
    location: 'Dublin',
    initials: 'CP'
  }
];

export const JOBS: Job[] = [
  {
    id: 'EP-4081',
    title: 'VP Aircraft Trading & Commercial Origination',
    sectorId: 'aircraft-leasing',
    sectorName: 'Aircraft Leasing',
    location: 'Dublin 2 (Hybrid)',
    type: 'Permanent',
    salary: '€160,000 - €210,000 + Bonus + Equity',
    postedDate: '2 days ago',
    isFeatured: true,
    description: 'A tier-one global aircraft lessor is seeking an experienced VP of Trading & Commercial Origination to manage secondary market transactions, airline placements, and fleet transition strategies.',
    keyResponsibilities: [
      'Lead negotiations for commercial aircraft sale-and-leaseback transactions across EMEA.',
      'Maintain strategic relationships with airline fleet directors and institutional investors.',
      'Collaborate with pricing, risk, and technical teams on asset appraisals and cash flow modelling.',
      'Present transaction business cases to executive investment committees.'
    ],
    requirements: [
      '8+ years in commercial aviation finance or aircraft leasing.',
      'Proven track record in deal origination and lease restructuring.',
      'Extensive international airline and lender network.'
    ]
  },
  {
    id: 'EP-4092',
    title: 'Head of Financial Planning & Analysis (FP&A)',
    sectorId: 'accounting-finance',
    sectorName: 'Accounting & Finance',
    location: 'Dublin 4',
    type: 'Permanent',
    salary: '€120,000 - €140,000 + Performance Bonus',
    postedDate: '3 days ago',
    isFeatured: true,
    description: 'Rapidly scaling European payments platform headquartered in Dublin seeking a commercial Head of FP&A to steer strategic planning, unit economics, and board reporting.',
    keyResponsibilities: [
      'Lead the 5-year financial model, monthly forecasts, and board presentation decks.',
      'Partner directly with CFO and VP Engineering to optimize cloud infrastructure and payment gateway margins.',
      'Manage a high-performing team of 4 senior financial analysts.'
    ],
    requirements: [
      'Qualified ACA / ACCA / CIMA with 7+ years post-qualification experience.',
      'Prior fintech or tech SaaS experience preferred.',
      'Advanced financial modelling and BI dashboard implementation skills.'
    ]
  },
  {
    id: 'EP-4105',
    title: 'Investment Director – Private Credit & Direct Lending',
    sectorId: 'private-equity-credit',
    sectorName: 'Private Credit',
    location: 'Dublin & London',
    type: 'Permanent',
    salary: '€180,000 - €230,000 + Carried Interest',
    postedDate: '1 day ago',
    isFeatured: true,
    description: 'Premier European alternative asset manager expanding its Dublin direct lending team. Sourcing senior deals for sponsor-backed European middle market companies.',
    keyResponsibilities: [
      'Originate senior and unitranche loan opportunities across Ireland and the UK.',
      'Oversee credit underwriting, legal documentation, and financial structuring.',
      'Represent the fund on lender steering committees.'
    ],
    requirements: [
      '10+ years within leveraged finance, direct lending, or private debt.',
      'Deep existing relationships with European mid-market private equity sponsors.',
      'Rigorous credit evaluation and workout experience.'
    ]
  },
  {
    id: 'EP-4112',
    title: 'Chief Risk Officer (CRO) – UCITS ManCo',
    sectorId: 'risk-compliance',
    sectorName: 'Risk & Compliance',
    location: 'Dublin 2',
    type: 'Permanent',
    salary: '€170,000 - €200,000 + Executive Package',
    postedDate: '4 days ago',
    isFeatured: true,
    description: 'Preeminent management company (Super ManCo) requires a PCF-approved Chief Risk Officer to oversee investment and operational risk frameworks under CBI governance.',
    keyResponsibilities: [
      'Serve as Designated Person for Risk Management under CBI CP86 framework.',
      'Oversee liquidity, market, counterparty, and operational risk monitoring across 40+ sub-funds.',
      'Chair the Management Risk Committee and liaise directly with Central Bank supervisors.'
    ],
    requirements: [
      'Extensive experience in UCITS and AIFMD risk architectures.',
      'Proven regulatory record with prior PCF / pre-approval experience.',
      'Strong quantitative risk background.'
    ]
  },
  {
    id: 'EP-4120',
    title: 'Interim Senior Technical Asset Manager (12-Month Contract)',
    sectorId: 'aircraft-leasing',
    sectorName: 'Aircraft Leasing',
    location: 'Shannon / Dublin (Flexible)',
    type: 'Contract',
    salary: '€700 - €850 per day',
    postedDate: 'Just now',
    isFeatured: true,
    description: 'Major international lessor requires an experienced Technical Asset Manager for an urgent 12-month redelivery and transition project involving CFM LEAP and PW engines.',
    keyResponsibilities: [
      'Manage aircraft end-of-lease inspections, physical audits, and engine shop visits.',
      'Review technical records and negotiate redelivery condition work scopes.',
      'Ensure regulatory compliance with EASA / FAA airworthiness directives.'
    ],
    requirements: [
      '10+ years hands-on aviation technical asset management or airline engineering.',
      'Strong working knowledge of lease return conditions and shop visit budgeting.'
    ]
  },
  {
    id: 'EP-4131',
    title: 'VP Infrastructure & Renewable Energy Investments',
    sectorId: 'energy-infrastructure',
    sectorName: 'Energy & Infrastructure',
    location: 'Dublin (Grand Canal Dock)',
    type: 'Permanent',
    salary: '€140,000 - €175,000 + Bonus',
    postedDate: '5 days ago',
    isFeatured: false,
    description: 'Leading infrastructure fund financing green transition assets across Europe seeking a VP to lead project finance transactions for solar and battery storage portfolios.',
    keyResponsibilities: [
      'Structure non-recourse project finance debt facilities with syndicated European banks.',
      'Lead financial due diligence and EPC/PPA contract commercial assessments.',
      'Mentor junior analysts and associate directors.'
    ],
    requirements: [
      '6+ years in renewable energy project finance or infrastructure debt.',
      'Proven expertise in complex DCF cash-flow modelling and financial closing.'
    ]
  },
  {
    id: 'EP-4144',
    title: 'Senior Fintech Software Architect (Distributed Systems)',
    sectorId: 'technology',
    sectorName: 'Technology',
    location: 'Dublin / Remote (Ireland/UK)',
    type: 'Permanent',
    salary: '€115,000 - €135,000 + Equity',
    postedDate: '3 days ago',
    isFeatured: false,
    description: 'High-frequency market maker and algorithmic crypto exchange looking for an Architect to lead core low-latency matching engine and clearing services.',
    keyResponsibilities: [
      'Design event-driven architectures with microsecond execution targets.',
      'Collaborate with quant researchers and security officers on cryptographic protocols.',
      'Ensure zero-downtime high-availability resilience.'
    ],
    requirements: [
      'Strong mastery in Rust, Go, or modern C++.',
      'Deep understanding of distributed consensus, memory optimization, and FIX protocols.'
    ]
  },
  {
    id: 'EP-4152',
    title: 'Group Tax Director (EMEA)',
    sectorId: 'accounting-finance',
    sectorName: 'Accounting & Finance',
    location: 'Dublin 2',
    type: 'Permanent',
    salary: '€150,000 - €180,000 + Bonus',
    postedDate: '6 days ago',
    isFeatured: false,
    description: 'US multinational establishing its European treasury and intellectual property headquarters in Dublin. Managing BEPS Pillar Two implementation and international transfer pricing.',
    keyResponsibilities: [
      'Design group international tax strategy across 15+ European jurisdictions.',
      'Lead Pillar Two tax compliance and reporting structures.',
      'Manage relationships with external tax counsels and Revenue Commissioners.'
    ],
    requirements: [
      'CTA / AITI qualified with 10+ years corporate tax leadership.',
      'Deep background in cross-border holding company structures and transfer pricing.'
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'irish-financial-market-outlook-2026',
    title: 'Irish Financial Services & Executive Talent Trends 2026',
    slug: 'irish-financial-market-outlook-2026',
    excerpt: 'An analysis of hiring dynamics, compensation benchmarks, and board-level priorities across Dublin’s thriving IFSC and Georgian quarter.',
    category: 'Market Insights',
    readTime: '5 min read',
    date: 'February 2026',
    author: 'Diarmuid Clancy',
    authorRole: 'Director & Co-Founder',
    content: [
      'The Irish financial services sector enters 2026 with notable resilience and structural growth. Despite macroeconomic headwinds across global markets, Dublin continues to solidify its role as a premier European hub for funds management, aviation finance, and direct lending.',
      'One of the clearest trends is the maturation of Super ManCos and third-party fund management companies. With CP86 enforcement well established, the demand for senior Designated Persons (DPs) and Chief Risk Officers has shifted from pure compliance checking to high-level strategic risk management and operational oversight.',
      'Simultaneously, the demand for senior finance leaders who can bridge the gap between traditional accounting and automated data systems has created a competitive market for group financial controllers and CFOs capable of leading digital finance transformations.'
    ]
  },
  {
    id: 'aviation-leasing-talent-landscape',
    title: 'Aircraft Leasing Talent: Navigating Fleet Growth & Contract Renewal',
    slug: 'aviation-leasing-talent-landscape',
    excerpt: 'How global lessors in Ireland are adapting talent strategies to handle secondary trading, engine maintenance bottlenecks, and fleet transitions.',
    category: 'Aviation Finance',
    readTime: '6 min read',
    date: 'January 2026',
    author: 'Stephen Gilmore',
    authorRole: 'Director & Co-Founder',
    content: [
      'Ireland continues to sit at the absolute epicenter of the global aircraft leasing industry, overseeing more than $140 billion in aviation assets. With passenger demand surpassing pre-pandemic records and manufacturer delivery delays extending backlogs, lessors are capitalizing on strong lease extension rates and rising secondary market trading.',
      'This unique environment has sparked intense demand for seasoned pricing analysts, transaction legal counsels, and technical asset managers who can evaluate engine maintenance shop visit costs with precision.',
      'At Elevate Partners, our aviation finance division has witnessed a 35% increase in cross-border mandates as Dublin-based platforms expand their footprint across London, Singapore, and Miami.'
    ]
  },
  {
    id: 'contracting-solutions-strategic-advantage',
    title: 'The Rise of Strategic Interim Consulting in Financial Services',
    slug: 'contracting-solutions-strategic-advantage',
    excerpt: 'Why leading financial institutions and investment funds are turning to high-calibre interim specialists for mission-critical transformations.',
    category: 'Temporary & Contract',
    readTime: '4 min read',
    date: 'December 2025',
    author: 'Aoife Stokes',
    authorRole: 'Senior Recruitment Consultant',
    content: [
      'The traditional perception of contracting as merely temporary backfill has fundamentally transformed. Today, contracting represents a strategic workforce capability for financial institutions facing regulatory deadlines, major ERP migrations, and private equity portfolio carve-outs.',
      'For senior candidates, contracting provides autonomy, high earning potential, and the opportunity to work across prestigious international mandates while maintaining career flexibility.',
      'At Elevate Partners, we ensure comprehensive support for contractors throughout their assignment lifecycle, providing clear onboarding, continuous liaison, and seamless transition into subsequent tier-one projects.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Elevate Partners demonstrated exceptional market intelligence and discretion throughout our CFO search. Their candidate shortlist was of the highest calibre, and their partner-led engagement made the process seamless.',
    author: 'Eamonn Hughes',
    role: 'Managing Director & Head of Strategy',
    company: 'Leading Irish Financial Institution',
    sector: 'Banking & Capital Markets',
    type: 'client'
  },
  {
    id: '2',
    quote: 'In aircraft leasing, deep sector networks and speed are paramount. Stephen Gilmore and the Elevate Partners team understand the commercial nuances of our industry like no other search firm in Dublin.',
    author: 'Sarah O’Callaghan',
    role: 'Chief Commercial Officer',
    company: 'Global Aircraft Leasing Platform',
    sector: 'Aircraft Leasing',
    type: 'client'
  },
  {
    id: '3',
    quote: 'Working with Elevate Partners was a refreshing experience. They understood my career aspirations, provided objective advice on market valuations, and guided me into an outstanding VP Private Debt role.',
    author: 'Patrick MacSweeney',
    role: 'Investment Director (Placed Candidate)',
    company: 'European Private Credit Fund',
    sector: 'Private Credit',
    type: 'candidate'
  },
  {
    id: '4',
    quote: 'Their temporary and contract team provided us with an exceptional interim Head of Regulatory Reporting on 48 hours notice. Flawless execution and complete peace of mind.',
    author: 'Ciara Brennan',
    role: 'Chief Operating Officer',
    company: 'International Wealth & Asset Manager',
    sector: 'Asset Management',
    type: 'client'
  }
];
