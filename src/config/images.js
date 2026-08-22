/**
 * GREEN RAY SOLAR SOLUTIONS
 * Centralized Image Configuration & Asset Slot Management
 * 
 * Rules:
 * 1. All images are referenced from /images/greenray/ (or /images/ fallback).
 * 2. To replace or add any image, simply place the file in /public/images/greenray/
 *    and update the corresponding slot path below.
 * 3. Every slot contains safe fallback styling/SVG icons so missing files never break the UI.
 */

export const IMAGE_SLOTS = {
  // Category C: Hero Solar
  hero: {
    slot: 'HERO_SOLAR_INSTALLATION',
    src: '/images/greenray/hero-solar-installation.jpeg',
    alt: 'Green Ray Solar Solutions rooftop solar installation across Kerala',
    category: 'CATEGORY_C_SOLAR_PANELS',
    caption: 'Clean Energy. Cleaner Future.'
  },

  // Category A: Residential Solar
  residential: {
    slot: 'RESIDENTIAL_SOLAR_SYSTEM',
    src: '/images/greenray/residential-solar-system.jpeg',
    alt: 'Green Ray Solar Solutions residential rooftop solar installation on Kerala home',
    category: 'CATEGORY_A_RESIDENTIAL_SOLAR',
    caption: 'Customized Solar for Homes & Villas'
  },

  // Category B: Commercial Solar
  commercial: {
    slot: 'COMMERCIAL_SOLAR_SYSTEM',
    src: '/images/greenray/commercial-solar-system.jpeg',
    alt: 'Green Ray Solar Solutions commercial rooftop solar installation on business premises',
    category: 'CATEGORY_B_COMMERCIAL_SOLAR',
    caption: 'High-Efficiency Solar for Businesses & Commercial Roofs'
  },

  // Category C: System Types
  onGrid: {
    slot: 'ON_GRID_SOLAR_PANELS',
    src: '/images/greenray/ongrid-solar-panels.jpeg',
    alt: 'Green Ray On-Grid Solar System connected with KSEB net metering',
    category: 'CATEGORY_C_SOLAR_PANELS',
    caption: 'Grid-Connected Solar with Net Metering'
  },
  offGrid: {
    slot: 'OFF_GRID_SOLAR_INSTALLATION',
    src: '/images/greenray/offgrid-solar-installation.jpeg',
    alt: 'Green Ray Off-Grid Solar System with battery backup for energy independence',
    category: 'CATEGORY_C_SOLAR_PANELS',
    caption: 'Standalone Solar with Reliable Storage'
  },
  hybrid: {
    slot: 'HYBRID_SOLAR_INSTALLATION',
    src: '/images/greenray/hybrid-solar-installation.jpeg',
    alt: 'Green Ray Hybrid Solar Solution combining grid reliability and backup power',
    category: 'CATEGORY_C_SOLAR_PANELS',
    caption: 'Smart Hybrid Solar Solutions'
  },

  // Category D: Technician & Services
  siteAssessment: {
    slot: 'TECHNICIAN_SITE_ASSESSMENT',
    src: '/images/greenray/technician-site-assessment.jpeg',
    alt: 'Green Ray Solar Solutions technician performing detailed site assessment and rooftop survey',
    category: 'CATEGORY_D_TECHNICIAN_INSTALLATION',
    caption: 'Comprehensive Site & Sunlight Assessment'
  },
  professionalInstallation: {
    slot: 'TECHNICIAN_PROFESSIONAL_INSTALLATION',
    src: '/images/greenray/technician-professional-installation.jpeg',
    alt: 'Green Ray Solar Solutions certified technicians executing professional solar mounting and electrical wiring',
    category: 'CATEGORY_D_TECHNICIAN_INSTALLATION',
    caption: 'Engineered Rooftop Mounting & High-Grade Inverters'
  },
  maintenanceAMC: {
    slot: 'TECHNICIAN_MAINTENANCE_AMC',
    src: '/images/greenray/technician-maintenance-amc.jpeg',
    alt: 'Green Ray Solar Solutions technician performing periodic maintenance and system checking',
    category: 'CATEGORY_D_TECHNICIAN_INSTALLATION',
    caption: 'Lifetime AMC & Preventive Maintenance Support'
  },
  ksebDocumentation: {
    slot: 'KSEB_DOCUMENTATION_GRID',
    src: '/images/greenray/kseb-documentation-grid.jpeg',
    alt: 'Green Ray assisting customers with KSEB documentation, net metering and grid approvals',
    category: 'CATEGORY_D_TECHNICIAN_INSTALLATION',
    caption: 'Hassle-Free KSEB Approval & Net Metering Support'
  },

  // Category F: Leadership & Founders (2 Available Real Photos + 2 Editorial Placeholders)
  founderBinuKumar: {
    slot: 'FOUNDER_BINUKUMAR',
    src: '/images/greenray/founder-binu-kumar.jpeg',
    name: 'Binukumar',
    role: 'Chief Executive Head',
    initials: 'BK',
    hasRealPhoto: true,
    alt: 'Binukumar, Chief Executive Head of Green Ray Solar Solutions',
    bio: 'Leads Green Ray with a focus on overall business management, strategic planning, customer satisfaction and company growth.'
  },
  founderJithinThomas: {
    slot: 'FOUNDER_JITHIN_THOMAS_JOSEPH',
    src: null, // Placeholder slot ready for /images/greenray/founder-jithin-thomas.jpeg
    name: 'Jithin Thomas Joseph',
    role: 'Technical Head',
    initials: 'JT',
    hasRealPhoto: false,
    alt: 'Jithin Thomas Joseph, Technical Head of Green Ray Solar Solutions',
    bio: 'Oversees technical operations including technical planning, system evaluation, installation coordination and commissioning.'
  },
  founderAnandhuKrishnan: {
    slot: 'FOUNDER_ANANDHU_KRISHNAN',
    src: null, // Placeholder slot ready for /images/greenray/founder-anandhu-krishnan.jpeg
    name: 'Anandhu Krishnan T R',
    role: 'Marketing Head',
    initials: 'AK',
    hasRealPhoto: false,
    alt: 'Anandhu Krishnan T R, Marketing Head of Green Ray Solar Solutions',
    bio: 'Leads marketing and customer outreach, builds the Green Ray brand, connects with customers and creates awareness about solar energy.'
  },
  founderAshaShaiju: {
    slot: 'FOUNDER_ASHA_SHAIJU',
    src: '/images/greenray/founder-asha-shaiju.jpeg',
    name: 'Asha Shaiju',
    role: 'Finance Head',
    initials: 'AS',
    hasRealPhoto: true,
    alt: 'Asha Shaiju, Finance Head of Green Ray Solar Solutions',
    bio: 'Manages financial planning, budgeting, accounts coordination and financial management.'
  },

  // About / Brand Story
  aboutStory: {
    slot: 'ABOUT_OUR_STORY',
    src: '/images/greenray/about-clean-energy-story.jpeg',
    alt: 'Green Ray Solar Solutions clean energy journey in Kerala',
    category: 'CATEGORY_E_REAL_PROJECTS',
    caption: 'Our Journey Toward a Cleaner Future'
  },
  aboutCommitment: {
    slot: 'ABOUT_COMMITMENT_CLEAN_ENERGY',
    src: '/images/greenray/about-commitment-solar.jpeg',
    alt: 'Green Ray commitment to sustainable renewable energy across Kerala',
    category: 'CATEGORY_C_SOLAR_PANELS',
    caption: 'Committed to Sustainable Energy & Transparent Guidance'
  }
};

export const FOUNDERS = [
  IMAGE_SLOTS.founderBinuKumar,
  IMAGE_SLOTS.founderJithinThomas,
  IMAGE_SLOTS.founderAnandhuKrishnan,
  IMAGE_SLOTS.founderAshaShaiju
];

export const REAL_PROJECTS = [
  {
    id: 'proj-01',
    title: 'Home Rooftop Solar Installation',
    category: 'Residential',
    categoryKey: 'residential',
    src: '/images/greenray/residential-solar-system.jpeg',
    alt: 'Green Ray residential rooftop solar installation in Kerala',
    description: 'High-efficiency on-grid rooftop solar system customized for residential household energy requirements.'
  },
  {
    id: 'proj-02',
    title: 'Commercial Rooftop System',
    category: 'Commercial',
    categoryKey: 'commercial',
    src: '/images/greenray/commercial-solar-system.jpeg',
    alt: 'Green Ray commercial solar installation for business premises',
    description: 'Engineered commercial solar array designed to substantially decrease daily commercial electricity expenses.'
  },
  {
    id: 'proj-03',
    title: 'Household Solar Fit-Out',
    category: 'Residential',
    categoryKey: 'residential',
    src: '/images/greenray/project-residential-1.jpeg',
    alt: 'Green Ray independent villa residential solar fitment',
    description: 'Precision mounting and neat inverter integration for continuous clean home electricity.'
  },
  {
    id: 'proj-04',
    title: 'Institutional Solar Project',
    category: 'Commercial',
    categoryKey: 'commercial',
    src: '/images/greenray/project-commercial-1.jpeg',
    alt: 'Green Ray institutional solar installation',
    description: 'Multi-kilowatt commercial solar power installation with robust weatherproof cabling.'
  },
  {
    id: 'proj-05',
    title: 'Independent Home Solar',
    category: 'Residential',
    categoryKey: 'residential',
    src: '/images/greenray/project-residential-2.jpeg',
    alt: 'Green Ray residential solar array on Kerala pitched roof',
    description: 'Custom structural fabrication and solar module layout optimized for maximum sunlight exposure.'
  },
  {
    id: 'proj-06',
    title: 'Shop Front Solar System',
    category: 'Commercial',
    categoryKey: 'commercial',
    src: '/images/greenray/project-commercial-2.jpeg',
    alt: 'Green Ray shop front commercial solar system',
    description: 'Compact commercial rooftop solar solution providing clean energy for daily retail operations.'
  },
  {
    id: 'proj-07',
    title: 'Residential Villa Array',
    category: 'Residential',
    categoryKey: 'residential',
    src: '/images/greenray/project-residential-3.jpeg',
    alt: 'Green Ray residential villa rooftop solar project',
    description: 'Reliable rooftop solar installation with KSEB net metering connectivity.'
  },
  {
    id: 'proj-08',
    title: 'Industrial Complex Installation',
    category: 'Commercial',
    categoryKey: 'commercial',
    src: '/images/greenray/project-industrial-1.jpeg',
    alt: 'Green Ray industrial commercial solar installation',
    description: 'Heavy-duty solar panel installation designed for high daytime power generation.'
  },
  {
    id: 'proj-09',
    title: 'On-Grid Clean Power System',
    category: 'On-Grid',
    categoryKey: 'ongrid',
    src: '/images/greenray/project-ongrid-1.jpeg',
    alt: 'Green Ray on-grid solar installation with synchronized inverter',
    description: 'Seamless grid synchronization with bidirectional net meter support.'
  },
  {
    id: 'proj-10',
    title: 'Custom Residential Rooftop',
    category: 'Residential',
    categoryKey: 'residential',
    src: '/images/greenray/project-residential-4.jpeg',
    alt: 'Green Ray residential solar installation with clean cabling',
    description: 'Clean energy generation reducing residential KSEB power bills.'
  },
  {
    id: 'proj-11',
    title: 'Engineered Rooftop Structure',
    category: 'Rooftop',
    categoryKey: 'rooftop',
    src: '/images/greenray/project-rooftop-1.jpeg',
    alt: 'Green Ray structural solar mounting on rooftop',
    description: 'Corrosion-resistant galvanized mounting structure with high wind resistance.'
  },
  {
    id: 'proj-12',
    title: 'Commercial Roof Array',
    category: 'Commercial',
    categoryKey: 'commercial',
    src: '/images/greenray/project-commercial-3.jpeg',
    alt: 'Green Ray commercial roof solar installation',
    description: 'Commercial facility solar system with real-time performance monitoring.'
  }
];

export const CORE_BENEFITS = [
  {
    id: '01',
    title: 'Lower Electricity Bills',
    description: 'Reduce your monthly electricity expenses significantly by generating your own clean solar power.',
    icon: 'TrendingDown',
    highlight: 'Up to 90% Bill Reduction'
  },
  {
    id: '02',
    title: 'High Energy Efficiency',
    description: 'Well-designed systems maximize generation and make better use of available Kerala sunlight.',
    icon: 'Zap',
    highlight: 'Tier-1 Mono PERC / TOPCon Modules'
  },
  {
    id: '03',
    title: 'Low Maintenance',
    description: 'Solar systems generally require minimal routine maintenance for dependable long-term use.',
    icon: 'Wrench',
    highlight: 'Durable & Trouble-Free'
  },
  {
    id: '04',
    title: 'Long-Term Savings',
    description: 'Protect your home or business against escalating grid power tariffs for 25+ productive years.',
    icon: 'PiggyBank',
    highlight: 'Quick 3-5 Year ROI'
  },
  {
    id: '05',
    title: 'Reliable Power Generation',
    description: 'Generate steady electricity from sunlight and reduce reliance on conventional sources.',
    icon: 'Sun',
    highlight: 'Consistent Output'
  },
  {
    id: '06',
    title: 'Clean & Renewable Energy',
    description: 'Produce zero carbon emissions while powering your daily life with 100% natural sunlight.',
    icon: 'Leaf',
    highlight: 'Eco-Friendly Footprint'
  },
  {
    id: '07',
    title: 'Customized Solar Solutions',
    description: 'Systems designed meticulously around your consumption patterns, rooftop orientation and budget.',
    icon: 'Sliders',
    highlight: 'Tailored Capacity (1kW - 100kW+)'
  },
  {
    id: '08',
    title: 'Increased Energy Independence',
    description: 'Generate your own electricity and reduce dependence on unpredictable grid fluctuations.',
    icon: 'ShieldCheck',
    highlight: 'Energy Security'
  },
  {
    id: '09',
    title: 'Professional Installation & Support',
    description: 'Engineered structural mounting, certified wiring, precise testing, and continuous assistance.',
    icon: 'Award',
    highlight: 'Expert Technical Team'
  },
  {
    id: '10',
    title: 'Future-Ready Energy Solution',
    description: 'Ready for electric vehicle (EV) charging, smart energy storage, and evolving power demands.',
    icon: 'Cpu',
    highlight: 'Expandable Architecture'
  }
];

export const SOLAR_SOLUTIONS = [
  {
    id: 'residential',
    name: 'Residential Solar Solutions',
    tagline: 'Customized solar systems for homes & villas',
    description: 'Customized solar systems for homes based on household electricity consumption, rooftop space and future power requirements.',
    imageSlot: IMAGE_SLOTS.residential,
    idealFor: 'Independent Houses, Villas, Residential Apartments, Farmhouses',
    keyFeatures: [
      'Custom rooftop space optimization',
      'Drastic reduction in bi-monthly KSEB bills',
      'Quiet, clean and aesthetic panel layout',
      'KSEB net metering application assistance'
    ]
  },
  {
    id: 'commercial',
    name: 'Commercial Solar Solutions',
    tagline: 'High-yield solar for businesses & institutions',
    description: 'Solar solutions for businesses, offices, shops, institutions and other establishments to reduce high operational electricity expenses.',
    imageSlot: IMAGE_SLOTS.commercial,
    idealFor: 'Offices, Retail Showrooms, Hospitals, Schools, Warehouses & Factories',
    keyFeatures: [
      'Accelerated depreciation tax benefits',
      'High daytime load offset during peak business hours',
      'Industrial-grade inverters with remote web monitoring',
      'Scalable multi-kilowatt arrays'
    ]
  },
  {
    id: 'on-grid',
    name: 'On-Grid Solar Systems',
    tagline: 'Connected with the electricity grid for maximum savings',
    description: 'Connected to the electricity grid, allowing customers to generate their own solar power while remaining grid-connected. Excess electricity is exported via net metering.',
    imageSlot: IMAGE_SLOTS.onGrid,
    idealFor: 'Urban & suburban properties with stable electricity grid supply',
    keyFeatures: [
      'Zero battery cost and lowest initial investment',
      'Bi-directional KSEB net meter support',
      'Direct grid export of surplus power credits',
      'Highest energy conversion efficiency'
    ]
  },
  {
    id: 'off-grid',
    name: 'Off-Grid Solar Systems',
    tagline: 'Standalone power independence with battery storage',
    description: 'Designed for locations where reliable grid electricity is unavailable or limited, incorporating dedicated battery storage for use when sunlight is unavailable.',
    imageSlot: IMAGE_SLOTS.offGrid,
    idealFor: 'Remote locations, off-grid farmhouses, eco-resorts, areas with frequent outages',
    keyFeatures: [
      'Complete independence from the electrical utility grid',
      'Deep-cycle battery storage system integration',
      'Uninterrupted 24/7 power supply',
      'Rugged off-grid solar inverters'
    ]
  },
  {
    id: 'hybrid',
    name: 'Hybrid Solar Solutions',
    tagline: 'The best of both worlds: Grid sync + Battery security',
    description: 'Combining solar generation, battery storage and grid power where suitable, for greater flexibility and critical backup power during grid interruptions.',
    imageSlot: IMAGE_SLOTS.hybrid,
    idealFor: 'Homes, clinics and businesses requiring uninterrupted power with net metering savings',
    keyFeatures: [
      'Simultaneous net metering export and battery backup',
      'Seamless switchover during power cuts',
      'Smart energy management and priority load shifting',
      'Maximum energy resilience'
    ]
  }
];

export const SOLAR_SERVICES = [
  {
    id: 'energy-audit',
    number: '01',
    title: 'Free Energy Audit',
    subtitle: 'Consumption Analysis & Sizing',
    description: 'Understand your current electricity consumption and identify opportunities to reduce energy costs through solar.',
    imageSlot: IMAGE_SLOTS.siteAssessment,
    details: 'Our engineers analyze your historical KSEB power bills, daily peak load profile, and calculate the exact kW capacity needed to achieve optimal financial savings.'
  },
  {
    id: 'site-assessment',
    number: '02',
    title: 'Site Assessment',
    subtitle: 'Rooftop & Structural Engineering',
    description: 'Evaluate rooftop and installation space, sunlight availability, structural conditions and electrical requirements.',
    imageSlot: IMAGE_SLOTS.siteAssessment,
    details: 'We inspect shadow profiles from surrounding trees or structures, rooftop load-bearing capacity, azimuth angles, and electrical distribution panels.'
  },
  {
    id: 'any-surface-fitting',
    number: '03',
    title: 'Any-Surface Solar Fitting',
    subtitle: 'Flat, Sloped, Truss & Tile Roofs',
    description: 'Installation solutions for different roofs and surfaces; our team assesses structure for a safe, stable, leak-proof fit.',
    imageSlot: IMAGE_SLOTS.hero,
    details: 'Custom aluminum and galvanized iron (GI) mounting structures designed specifically for concrete slabs, metal roofing sheets, Kerala clay tiles, and elevated pergola structures.'
  },
  {
    id: 'professional-installation',
    number: '04',
    title: 'Professional Installation & Commissioning',
    subtitle: 'Certified Electrical Work & Activation',
    description: 'Mounting, panel installation, inverter connection, wiring, testing and complete system activation.',
    imageSlot: IMAGE_SLOTS.professionalInstallation,
    details: 'High-grade UV-protected solar DC cables, IP65 waterproof junction boxes, dedicated earth pits, surge protection devices (SPDs), and rigorous pre-commissioning testing.'
  },
  {
    id: 'kseb-documentation',
    number: '05',
    title: 'KSEB Documentation Support',
    subtitle: 'Approval & Net Metering Procedures',
    description: 'Assistance with KSEB-related documentation and application procedures for approval and grid connection.',
    imageSlot: IMAGE_SLOTS.ksebDocumentation,
    details: 'End-to-end liaison with the local KSEB electrical section office: application submission, feasibility clearance, meter testing, and final bi-directional net meter installation.'
  },
  {
    id: 'lifetime-amc',
    number: '06',
    title: 'Lifetime AMC',
    subtitle: 'Continuous Maintenance & Protection',
    description: 'System inspection, performance monitoring, basic troubleshooting and preventive maintenance.',
    imageSlot: IMAGE_SLOTS.maintenanceAMC,
    details: 'Long-term support contracts ensuring your solar system consistently operates at peak efficiency with prompt on-site assistance across Kerala.'
  },
  {
    id: 'periodic-system-checking',
    number: '07',
    title: 'Periodical System Checking',
    subtitle: 'Health & Generation Audits',
    description: 'Inspection of panels, inverter, wiring, connections, mounting structures and overall performance.',
    imageSlot: IMAGE_SLOTS.maintenanceAMC,
    details: 'Periodic thermal imaging inspections, string voltage verification, inverter diagnostics, and connection torque checking.'
  }
];

export const SOLAR_JOURNEY_STEPS = [
  { step: '01', title: 'Free Energy Audit', desc: 'Detailed review of your past KSEB bills and power needs.' },
  { step: '02', title: 'Site Assessment', desc: 'Rooftop inspection, shadow analysis, and structural check.' },
  { step: '03', title: 'System Planning', desc: 'Custom 3D layout, component selection, and transparent quote.' },
  { step: '04', title: 'KSEB Documentation', desc: 'Hassle-free application handling and grid approval.' },
  { step: '05', title: 'Professional Installation', desc: 'Precision mounting, quality cabling, and earthing.' },
  { step: '06', title: 'Commissioning', desc: 'Net meter installation, grid sync, and system energization.' },
  { step: '07', title: 'AMC & Maintenance', desc: 'Lifetime support, performance monitoring, and care.' }
];

export const PROMISES = [
  'Delivering quality solar solutions built with Tier-1 components',
  'Understanding each customer\'s unique energy requirements and usage patterns',
  'Providing honest and transparent guidance without false promises',
  'Maintaining professional installation standards with certified safety gear',
  'Supporting customers after installation with responsive local service',
  'Building long-term relationships based on trust and reliability',
  'Promoting clean and sustainable energy across Kerala'
];

export const FAQ_DATA = [
  {
    question: 'How much can I save on my electricity bill with solar?',
    answer: 'With a properly sized on-grid solar system, most residential and commercial consumers in Kerala reduce their bi-monthly electricity bills by 80% to 90%. Excess power generated during the day is sent back to the KSEB grid via net metering credits.'
  },
  {
    question: 'What is the difference between On-Grid, Off-Grid, and Hybrid solar?',
    answer: 'On-Grid is directly connected to KSEB without batteries (most economical, exports excess power). Off-Grid works completely independently with battery storage (ideal for remote areas without grid). Hybrid combines both: it exports surplus power while keeping a battery charged for emergency backup during power cuts.'
  },
  {
    question: 'How does KSEB net metering work?',
    answer: 'KSEB installs a bi-directional smart meter. When your solar system generates more power than you consume, surplus units flow into the grid and are recorded as credits. When you consume power at night, credits are deducted. You only pay for net imported units.'
  },
  {
    question: 'What happens if my roof has tiles or a sloped truss structure?',
    answer: 'Green Ray specializes in Any-Surface Solar Fitting. We engineer custom anodized aluminum and GI structures tailored for concrete flat roofs, sloped tiled roofs, and industrial metal sheet roofing without puncturing or causing water leakage.'
  },
  {
    question: 'What kind of maintenance does a solar system require in Kerala?',
    answer: 'Solar panels require very little maintenance. Periodic washing with clean water every 2–4 weeks to remove dust, pollen, and leaves is recommended. Green Ray provides Lifetime AMC and periodic technical inspections covering inverter health, cabling, and structural fasteners.'
  },
  {
    question: 'How long do solar panels last and what warranties are provided?',
    answer: 'Tier-1 solar panels come with a 25 to 30-year linear power output warranty (guaranteeing over 80–85% efficiency after 25 years). Inverters typically carry a 5 to 10-year manufacturer warranty, and Green Ray provides complete installation workmanship support.'
  }
];

export const COMPANY_INFO = {
  name: 'Green Ray Solar Solutions',
  statement: 'Clean Energy. Cleaner Future.',
  established: 'October 2025',
  projectsCompleted: '100+',
  phones: ['9495353533', '7012901956'],
  email: 'greenraysolarsolutions@gmail.com',
  address: 'Ettumanoor, Kottayam, Kerala - 686631',
  coverage: 'Statewide Service Across All 14 Districts of Kerala',
  serviceHours: 'Monday - Saturday: 9:00 AM - 6:30 PM'
};
