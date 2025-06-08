
export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  specifications: string[];
  dimensions?: string;
  materials?: string;
  useCases?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Precast Concrete Panels",
    category: "Materials",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop",
    description: "High-quality precast concrete panels designed for durability and efficiency in commercial and residential construction projects.",
    specifications: [
      "Reinforced with high-grade steel",
      "Weather-resistant coating",
      "Load capacity: 5000 PSI",
      "Fire rating: 2 hours"
    ],
    dimensions: "8' x 12' x 6\" standard size",
    materials: "High-strength concrete with steel reinforcement",
    useCases: [
      "Building facades",
      "Structural walls",
      "Sound barriers",
      "Retaining walls"
    ]
  },
  {
    id: 2,
    name: "Structural Steel Beams",
    category: "Materials",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
    description: "Premium structural steel beams engineered for maximum strength and reliability in heavy construction applications.",
    specifications: [
      "Grade A992 steel",
      "Galvanized coating",
      "Yield strength: 50 ksi",
      "Welded connections ready"
    ],
    dimensions: "Various sizes from W8x10 to W36x300",
    materials: "ASTM A992 structural steel",
    useCases: [
      "Building frames",
      "Bridge construction",
      "Industrial facilities",
      "High-rise structures"
    ]
  },
  {
    id: 3,
    name: "Safety Equipment Set",
    category: "Tools",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
    description: "Comprehensive safety equipment package ensuring worker protection and compliance with OSHA standards.",
    specifications: [
      "ANSI Z89.1 certified helmets",
      "Class E safety harnesses",
      "Impact-resistant safety glasses",
      "Steel-toe work boots included"
    ],
    useCases: [
      "Construction sites",
      "Industrial facilities",
      "Maintenance work",
      "Emergency response"
    ]
  },
  {
    id: 4,
    name: "Excavator CAT 320",
    category: "Equipment",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=600&h=400&fit=crop",
    description: "Heavy-duty excavator perfect for large-scale earthmoving and construction projects with advanced hydraulic systems.",
    specifications: [
      "Operating weight: 45,000 lbs",
      "Bucket capacity: 1.5 cubic yards",
      "Max digging depth: 22 feet",
      "Hydraulic system pressure: 5000 PSI"
    ],
    dimensions: "Length: 32', Width: 10', Height: 10'",
    useCases: [
      "Site excavation",
      "Demolition work",
      "Material handling",
      "Trenching operations"
    ]
  },
  {
    id: 5,
    name: "Crane Tower System",
    category: "Equipment",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=600&h=400&fit=crop",
    description: "State-of-the-art tower crane system for high-rise construction with precision controls and maximum lifting capacity.",
    specifications: [
      "Maximum lifting capacity: 20 tons",
      "Jib length: 200 feet",
      "Hook height: 300 feet",
      "Precision load control system"
    ],
    dimensions: "Base: 20' x 20', Max height: 300'",
    useCases: [
      "High-rise construction",
      "Bridge assembly",
      "Heavy lifting operations",
      "Precision placement work"
    ]
  },
  {
    id: 6,
    name: "Concrete Mixer Truck",
    category: "Equipment",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop",
    description: "Professional concrete mixer truck with advanced mixing technology for consistent, high-quality concrete delivery.",
    specifications: [
      "Capacity: 10 cubic yards",
      "Hydraulic drive system",
      "GPS tracking included",
      "Temperature monitoring system"
    ],
    dimensions: "Length: 35', Width: 8', Height: 12'",
    useCases: [
      "Foundation pouring",
      "Road construction",
      "Commercial building projects",
      "Residential construction"
    ]
  },
  {
    id: 7,
    name: "Industrial Power Tools Kit",
    category: "Tools",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    description: "Professional-grade power tools kit designed for heavy-duty construction and industrial applications.",
    specifications: [
      "Cordless drill with 20V battery",
      "Circular saw with laser guide",
      "Impact driver with LED light",
      "Hard case with foam inserts"
    ],
    dimensions: "Case: 24\" x 18\" x 8\"",
    materials: "High-impact polymer case, steel tools",
    useCases: [
      "Framing work",
      "Electrical installation",
      "General construction",
      "Maintenance tasks"
    ]
  },
  {
    id: 8,
    name: "Rebar Steel Reinforcement",
    category: "Materials",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
    description: "High-strength rebar steel for concrete reinforcement in structural applications.",
    specifications: [
      "Grade 60 steel",
      "Tensile strength: 90,000 PSI",
      "Epoxy-coated available",
      "Various diameters: #3 to #18"
    ],
    dimensions: "Standard lengths: 20', 40', 60'",
    materials: "Carbon steel with ribbed surface",
    useCases: [
      "Foundation reinforcement",
      "Column reinforcement",
      "Beam reinforcement",
      "Slab construction"
    ]
  },
  {
    id: 9,
    name: "Bulldozer D6T",
    category: "Equipment",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=600&h=400&fit=crop",
    description: "Heavy-duty bulldozer for earthmoving, grading, and site preparation with advanced GPS guidance.",
    specifications: [
      "Operating weight: 41,000 lbs",
      "Blade capacity: 4.2 cubic yards",
      "GPS machine guidance",
      "Fuel efficient engine"
    ],
    dimensions: "Length: 20', Width: 12', Height: 10'",
    useCases: [
      "Site preparation",
      "Grading operations",
      "Road construction",
      "Land clearing"
    ]
  },
  {
    id: 10,
    name: "Scaffolding System",
    category: "Tools",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
    description: "Modular scaffolding system providing safe access for construction and maintenance work at height.",
    specifications: [
      "Aluminum construction",
      "Load capacity: 75 PSF",
      "Modular design",
      "Safety guardrails included"
    ],
    dimensions: "Standard bay: 8' x 8' x 6'",
    materials: "Powder-coated aluminum",
    useCases: [
      "Building construction",
      "Facade work",
      "Maintenance access",
      "Renovation projects"
    ]
  },
  {
    id: 11,
    name: "Asphalt Paving Mix",
    category: "Materials",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    description: "High-quality asphalt mix designed for durable road surfaces and parking areas.",
    specifications: [
      "Hot mix asphalt",
      "Temperature: 280-320°F",
      "Aggregate gradation optimized",
      "Polymer modified available"
    ],
    dimensions: "Delivered by truck: 25-ton loads",
    materials: "Bitumen, aggregate, additives",
    useCases: [
      "Road construction",
      "Parking lots",
      "Driveways",
      "Airport runways"
    ]
  },
  {
    id: 12,
    name: "Dump Truck Fleet",
    category: "Equipment",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    description: "Heavy-duty dump trucks for efficient material transport and site logistics.",
    specifications: [
      "Payload capacity: 40 tons",
      "Hydraulic lifting system",
      "All-wheel drive available",
      "GPS tracking system"
    ],
    dimensions: "Length: 32', Width: 12', Height: 12'",
    useCases: [
      "Material transport",
      "Waste removal",
      "Aggregate delivery",
      "Site cleanup"
    ]
  },
  {
    id: 13,
    name: "Welding Equipment Set",
    category: "Tools",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    description: "Professional welding equipment for structural steel and metal fabrication work.",
    specifications: [
      "MIG/TIG welding capability",
      "Output: 200-400 amps",
      "Digital display controls",
      "Portable design"
    ],
    dimensions: "Unit: 24\" x 18\" x 20\"",
    materials: "Heavy-duty steel housing",
    useCases: [
      "Structural welding",
      "Pipeline construction",
      "Fabrication work",
      "Repair operations"
    ]
  },
  {
    id: 14,
    name: "Insulation Materials",
    category: "Materials",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop",
    description: "High-performance insulation materials for energy-efficient building construction.",
    specifications: [
      "R-value: R-13 to R-38",
      "Fire-resistant",
      "Moisture barrier included",
      "Easy installation"
    ],
    dimensions: "Rolls: 15\" x 32' standard",
    materials: "Fiberglass, foam board, spray foam",
    useCases: [
      "Wall insulation",
      "Attic insulation",
      "Basement insulation",
      "HVAC ductwork"
    ]
  },
  {
    id: 15,
    name: "Compactor Equipment",
    category: "Equipment",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=600&h=400&fit=crop",
    description: "Soil and asphalt compaction equipment for achieving optimal density and stability.",
    specifications: [
      "Operating weight: 8,000 lbs",
      "Vibration frequency: 3000 VPM",
      "Smooth drum roller",
      "Water sprinkler system"
    ],
    dimensions: "Length: 12', Width: 6', Height: 8'",
    useCases: [
      "Soil compaction",
      "Asphalt rolling",
      "Road construction",
      "Foundation preparation"
    ]
  },
  {
    id: 16,
    name: "Roofing Materials Kit",
    category: "Materials",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    description: "Complete roofing materials package including shingles, underlayment, and flashing.",
    specifications: [
      "Architectural shingles",
      "30-year warranty",
      "Wind resistance: 130 mph",
      "Class A fire rating"
    ],
    dimensions: "Coverage: 100 sq ft per bundle",
    materials: "Asphalt shingles, synthetic underlayment",
    useCases: [
      "Residential roofing",
      "Commercial roofing",
      "Roof repairs",
      "New construction"
    ]
  },
  {
    id: 17,
    name: "Surveying Equipment",
    category: "Tools",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    description: "Precision surveying instruments for accurate site measurement and layout.",
    specifications: [
      "Total station with GPS",
      "Accuracy: ±2mm + 2ppm",
      "Bluetooth connectivity",
      "Weather-resistant design"
    ],
    dimensions: "Unit: 12\" x 10\" x 8\"",
    materials: "Aluminum housing, precision optics",
    useCases: [
      "Site surveys",
      "Construction layout",
      "Topographic mapping",
      "Property boundaries"
    ]
  },
  {
    id: 18,
    name: "Ready-Mix Concrete",
    category: "Materials",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop",
    description: "High-quality ready-mix concrete for various construction applications with consistent quality.",
    specifications: [
      "Compressive strength: 3000-5000 PSI",
      "Slump: 4-6 inches",
      "Air content: 6±1.5%",
      "Temperature controlled"
    ],
    dimensions: "Delivered in 10-yard loads",
    materials: "Portland cement, aggregate, water, additives",
    useCases: [
      "Foundation pours",
      "Slab construction",
      "Structural elements",
      "Sidewalks and driveways"
    ]
  }
];
