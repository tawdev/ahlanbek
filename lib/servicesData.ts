export interface ServiceDetail {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    color: string;
    image: string;
    features: {
        icon: string;
        title: string;
        description: string;
    }[];
    process: {
        step: number;
        title: string;
        description: string;
    }[];
    benefits: string[];
    stats: {
        value: string;
        label: string;
    }[];
}

export const servicesData: Record<string, ServiceDetail> = {
    "investment": {
        slug: "investment",
        title: "Events & Investment",
        subtitle: "L'investissement",
        description: "From concept to execution, we create memorable events that inspire, engage, and leave a lasting impression. Our investment services help you maximize returns and build sustainable growth.",
        icon: "TrendingUp",
        color: "bg-primary",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
        features: [
            {
                icon: "Target",
                title: "Strategic Planning",
                description: "Comprehensive event planning and investment strategies tailored to your goals"
            },
            {
                icon: "Users",
                title: "Expert Team",
                description: "Experienced professionals managing every aspect of your events and investments"
            },
            {
                icon: "BarChart3",
                title: "ROI Optimization",
                description: "Data-driven approaches to maximize returns on your investments"
            },
            {
                icon: "Shield",
                title: "Risk Management",
                description: "Comprehensive risk assessment and mitigation strategies"
            }
        ],
        process: [
            { step: 1, title: "Consultation", description: "Understanding your vision and investment goals" },
            { step: 2, title: "Strategy Development", description: "Creating a customized plan for success" },
            { step: 3, title: "Execution", description: "Implementing the plan with precision" },
            { step: 4, title: "Monitoring", description: "Continuous tracking and optimization" }
        ],
        benefits: [
            "Professional event management from start to finish",
            "Strategic investment guidance",
            "Access to exclusive opportunities",
            "Transparent reporting and communication",
            "Proven track record of success"
        ],
        stats: [
            { value: "500+", label: "Events Organized" },
            { value: "€50M+", label: "Investments Managed" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "15+", label: "Years Experience" }
        ]
    },
    "real-estate": {
        slug: "real-estate",
        title: "Real Estate",
        subtitle: "L'immobilier",
        description: "Connecting you to the best properties and investment opportunities with trust, transparency, and expertise. We provide comprehensive real estate solutions across residential, commercial, and industrial sectors.",
        icon: "Building2",
        color: "bg-primary",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        features: [
            {
                icon: "Home",
                title: "Property Portfolio",
                description: "Extensive selection of premium properties across multiple markets"
            },
            {
                icon: "Search",
                title: "Market Analysis",
                description: "In-depth market research and property valuation services"
            },
            {
                icon: "FileText",
                title: "Legal Support",
                description: "Complete legal assistance for all real estate transactions"
            },
            {
                icon: "TrendingUp",
                title: "Investment Advisory",
                description: "Expert guidance on property investment opportunities"
            }
        ],
        process: [
            { step: 1, title: "Requirements Analysis", description: "Understanding your property needs and budget" },
            { step: 2, title: "Property Search", description: "Identifying suitable properties matching your criteria" },
            { step: 3, title: "Site Visits", description: "Organizing viewings and inspections" },
            { step: 4, title: "Transaction Support", description: "Managing all aspects of the purchase process" }
        ],
        benefits: [
            "Access to exclusive property listings",
            "Professional negotiation services",
            "Complete transaction management",
            "Post-sale support and assistance",
            "Market insights and trends analysis"
        ],
        stats: [
            { value: "1000+", label: "Properties Sold" },
            { value: "€200M+", label: "Transaction Value" },
            { value: "95%", label: "Client Retention" },
            { value: "20+", label: "Markets Covered" }
        ]
    },
    "tourism": {
        slug: "tourism",
        title: "Tourism Services",
        subtitle: "Tourism",
        description: "Discover exceptional travel experiences, guided tours, and unique adventures that showcase the beauty of each destination. We create unforgettable journeys tailored to your preferences.",
        icon: "Plane",
        color: "bg-primary",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
        features: [
            {
                icon: "Map",
                title: "Custom Itineraries",
                description: "Personalized travel plans designed around your interests"
            },
            {
                icon: "Globe",
                title: "Global Destinations",
                description: "Access to exclusive locations and hidden gems worldwide"
            },
            {
                icon: "Users",
                title: "Expert Guides",
                description: "Knowledgeable local guides for authentic experiences"
            },
            {
                icon: "Star",
                title: "Premium Services",
                description: "Luxury accommodations and VIP treatment"
            }
        ],
        process: [
            { step: 1, title: "Dream Planning", description: "Discussing your travel aspirations and preferences" },
            { step: 2, title: "Itinerary Design", description: "Crafting the perfect journey for you" },
            { step: 3, title: "Booking & Arrangements", description: "Securing all reservations and logistics" },
            { step: 4, title: "Travel Support", description: "24/7 assistance throughout your journey" }
        ],
        benefits: [
            "Stress-free travel planning",
            "Exclusive access to unique experiences",
            "Competitive pricing and value",
            "24/7 customer support",
            "Flexible booking options"
        ],
        stats: [
            { value: "5000+", label: "Happy Travelers" },
            { value: "50+", label: "Destinations" },
            { value: "99%", label: "Satisfaction Rate" },
            { value: "10+", label: "Years in Tourism" }
        ]
    },
    "management": {
        slug: "management",
        title: "Management Services",
        subtitle: "La gestion",
        description: "Professional management services designed to streamline operations, optimize resources, and achieve sustainable growth. We help businesses operate more efficiently and profitably.",
        icon: "Briefcase",
        color: "bg-primary",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        features: [
            {
                icon: "Settings",
                title: "Operations Management",
                description: "Streamlining processes for maximum efficiency"
            },
            {
                icon: "Users",
                title: "Team Leadership",
                description: "Building and managing high-performing teams"
            },
            {
                icon: "BarChart3",
                title: "Performance Analytics",
                description: "Data-driven insights for better decision making"
            },
            {
                icon: "Lightbulb",
                title: "Strategic Consulting",
                description: "Expert advice for business growth and development"
            }
        ],
        process: [
            { step: 1, title: "Assessment", description: "Analyzing current operations and challenges" },
            { step: 2, title: "Strategy", description: "Developing customized management solutions" },
            { step: 3, title: "Implementation", description: "Executing improvements and changes" },
            { step: 4, title: "Optimization", description: "Continuous monitoring and refinement" }
        ],
        benefits: [
            "Improved operational efficiency",
            "Cost reduction and resource optimization",
            "Enhanced team productivity",
            "Scalable business processes",
            "Measurable results and ROI"
        ],
        stats: [
            { value: "200+", label: "Companies Managed" },
            { value: "40%", label: "Avg. Efficiency Gain" },
            { value: "97%", label: "Client Success Rate" },
            { value: "12+", label: "Years Experience" }
        ]
    },
    "import-export": {
        slug: "import-export",
        title: "Import & Export",
        subtitle: "Import & Export",
        description: "Facilitating global trade with reliable import and export solutions that connect markets and drive business success. We handle all aspects of international commerce.",
        icon: "Globe",
        color: "bg-primary",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
        features: [
            {
                icon: "Ship",
                title: "Logistics Management",
                description: "End-to-end shipping and freight solutions"
            },
            {
                icon: "FileCheck",
                title: "Customs Clearance",
                description: "Expert handling of all documentation and regulations"
            },
            {
                icon: "Globe",
                title: "Global Network",
                description: "Established partnerships across major trade routes"
            },
            {
                icon: "Shield",
                title: "Quality Assurance",
                description: "Rigorous quality control and compliance checks"
            }
        ],
        process: [
            { step: 1, title: "Consultation", description: "Understanding your import/export requirements" },
            { step: 2, title: "Documentation", description: "Preparing all necessary paperwork and permits" },
            { step: 3, title: "Shipping", description: "Coordinating transportation and logistics" },
            { step: 4, title: "Delivery", description: "Ensuring timely arrival and customs clearance" }
        ],
        benefits: [
            "Simplified international trade processes",
            "Competitive shipping rates",
            "Regulatory compliance expertise",
            "Real-time shipment tracking",
            "Dedicated account management"
        ],
        stats: [
            { value: "10K+", label: "Shipments Handled" },
            { value: "80+", label: "Countries Served" },
            { value: "99.5%", label: "On-Time Delivery" },
            { value: "18+", label: "Years in Trade" }
        ]
    },
    "web-development": {
        slug: "web-development",
        title: "Web & App Development",
        subtitle: "Web & App Development",
        description: "Innovative web and mobile applications designed to enhance your digital presence, boost user engagement, and drive business growth. We build cutting-edge digital solutions.",
        icon: "Smartphone",
        color: "bg-primary",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
        features: [
            {
                icon: "Code",
                title: "Custom Development",
                description: "Tailored solutions built with modern technologies"
            },
            {
                icon: "Smartphone",
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications"
            },
            {
                icon: "Palette",
                title: "UI/UX Design",
                description: "Beautiful, intuitive interfaces that users love"
            },
            {
                icon: "Zap",
                title: "Performance",
                description: "Fast, scalable, and reliable applications"
            }
        ],
        process: [
            { step: 1, title: "Discovery", description: "Understanding your business needs and goals" },
            { step: 2, title: "Design", description: "Creating wireframes and visual designs" },
            { step: 3, title: "Development", description: "Building your application with best practices" },
            { step: 4, title: "Launch & Support", description: "Deployment and ongoing maintenance" }
        ],
        benefits: [
            "Modern, responsive design",
            "Scalable architecture",
            "SEO optimization",
            "Ongoing support and updates",
            "Competitive pricing"
        ],
        stats: [
            { value: "300+", label: "Projects Delivered" },
            { value: "50+", label: "Happy Clients" },
            { value: "100%", label: "Project Success" },
            { value: "8+", label: "Years Development" }
        ]
    },
    "evenementiel": {
        slug: "evenementiel",
        title: "L’évènementiel",
        subtitle: "Event Production & Management",
        description: "From high-end event production to professional management, we deliver seamless experiences with creative precision. We handle every detail to ensure your event is a success.",
        icon: "Sparkles",
        color: "bg-primary",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
        features: [
            { icon: "Star", title: "Creative Concept", description: "Unique and innovative event concepts" },
            { icon: "Calendar", title: "Full Coordination", description: "End-to-end logistics and management" },
            { icon: "Mic", title: "Production", description: "High-end technical and artistic production" }
        ],
        process: [
            { step: 1, title: "Concept", description: "Defining the event's vision" },
            { step: 2, title: "Planning", description: "Detailed roadmap and logistics" },
            { step: 3, title: "On-site Mgmt", description: "Coordinating the live event" }
        ],
        benefits: ["Seamless execution", "Stress-free planning", "Memorable experiences"],
        stats: [
            { value: "200+", label: "Events Managed" },
            { value: "99%", label: "Satisfaction Rate" }
        ]
    },
    "prestation-service": {
        slug: "prestation-service",
        title: "Prestation de service",
        subtitle: "Professional Services",
        description: "Professional services tailored to your needs, ensuring high-quality results and efficient execution across diverse sectors. Our experts are ready to support your business goals.",
        icon: "Briefcase",
        color: "bg-primary",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop",
        features: [
            { icon: "UserCheck", title: "Expert Staff", description: "Highly qualified professionals" },
            { icon: "Clock", title: "Timely Delivery", description: "Respecting deadlines and commitments" },
            { icon: "CheckCircle", title: "Quality Control", description: "Rigorous standards for every service" }
        ],
        process: [
            { step: 1, title: "Assessment", description: "Evaluating your service needs" },
            { step: 2, title: "Service Design", description: "Customizing our approach" },
            { step: 3, title: "Delivery", description: "Execution by our professional team" }
        ],
        benefits: ["Expertise in multiple fields", "Reliable partnership", "Scalable solutions"],
        stats: [
            { value: "150+", label: "Clients Served" },
            { value: "10+", label: "Service Categories" }
        ]
    },
    "protection-cinematographique": {
        slug: "protection-cinematographique",
        title: "Protection cinématographique",
        subtitle: "Film Set Security & Protection",
        description: "Specialized security and protection services for film productions, providing a safe and controlled environment for creative teams. We ensure your production runs smoothly without interruptions.",
        icon: "ShieldCheck",
        color: "bg-primary",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
        features: [
            { icon: "Camera", title: "Set Protection", description: "Securing locations and equipment" },
            { icon: "UserShield", title: "Cast & Crew Security", description: "Personal protection for talent" },
            { icon: "Lock", title: "Access Control", description: "Managing set attendance and entry" }
        ],
        process: [
            { step: 1, title: "Risk Assessment", description: "Analyzing location and set risks" },
            { step: 2, title: "Security Plan", description: "Drafting a comprehensive protection strategy" },
            { step: 3, title: "On-set Presence", description: "Active monitoring during filming" }
        ],
        benefits: ["Safe production environment", "Protection of assets", "Discreet security"],
        stats: [
            { value: "50+", label: "Films Protected" },
            { value: "100%", label: "Incident-Free" }
        ]
    }
};
