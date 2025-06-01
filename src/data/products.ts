
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
  }
];
