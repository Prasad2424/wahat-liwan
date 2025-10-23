export const ourpromises = [
    {
        'image': '/images/promise1.jpeg',
        'title': 'Our Promise as a contractor is to build your project',
        'description': 'The process of commercial building construction involves designing, planning, and constructing buildings intended for commercial use.These structures serve various purposes, such as retail stores, office buildings and educational institutions.',
        'label': 'Read More'
    },
    {
        'image': '/images/promise2.jpeg',
        'title': 'Expert Ducting & Ventilation Services',
        'description': 'Our ducting specialists handle everything from layout planning to installation of HVAC systems. Whether it’s GI ducting, flexible ducts, or insulation, we deliver efficient airflow and climate control tailored to your building’s needs.',
        'label': 'Read More'
    },
    {
        'image': '/images/manpower.png',
        'title': 'Reliable Workforce, On-Demand',
        'description': 'We supply trained technicians, electricians, and ducting experts for short-term and long-term projects. Our manpower solutions are flexible, scalable, and backed by technical supervision to meet your project timelines.',
        'label': 'Read More'
    },
]

export const corevalues = [
    {
        'image': '/images/mission.png',
        'title': 'Our Mission',
        'about': 'Our mission is to deliver reliable, cost-effective, and high-quality technical manpower for electrical and HVAC projects. Backed by skilled engineers, certified technicians, and a commitment to safety and precision.'
    },
    {
        'image': '/images/house.png',
        'title': 'Electrical & Ducting Services',
        'about': 'We specialize in supplying expert electricians and ducting technicians for infrastructure projects. From cable tray installations to GI duct fabrication and DB dressing, our workforce powers the systems that keep buildings functional and efficient',
        'points': [
            "Foster a professional and ethical work environment.",
            "Set safety and quality as our top priorities.",
            "Encourage creativity and innovation in every aspect of our work.",
            "Recognize the value of continuous improvement.",
            "Be open, listen to our customers, and adapt to change."
        ]
    },
    {
        'image': '/images/experience.jpeg',
        'title': 'Experience',
        'about': 'With over 10 years of hands-on experience in manpower deployment, electrical installations, and ducting works, we’ve supported major developments across the UAE and India. Our team is trained, certified, and ready to meet the demands of any scale'
    },
    {
        'image': '/images/safety.png',
        'title': 'Safety',
        'about': 'At Wahat Liwan Technical Services LLC, safety isn’t a checkbox—it’s our foundation. We follow strict protocols and industry standards to ensure zero incidents across all projects. “Safety First” is embedded in our culture, from field technicians to senior engineers.'
    },

]

export const groups=["/groups/group1.jpeg","/groups/group2.jpeg","/groups/group3.jpeg","/groups/group4.jpeg","/groups/group5.jpeg","/groups/group6.jpeg"]

export const projects = [
    {
        'image': '/images/commercial-building.png',
        'banner': '/images/commercialbanner.png',
        'title': 'Commercial',
        'about': 'We support commercial projects with skilled electricians and ducting technicians for retail spaces, office buildings. '

    },
    {
        'image': '/images/residential.png',
        'banner': '/images/companybanner.png',
        'title': 'Residential',
        'about': 'From apartments to villas, we provide certified manpower for electrical wiring, DB dressing, and ducting solutions. .'
    },
    {
        'image': '/images/industrial.png',
        'banner': '/images/industrailbanner.png',
        'title': 'Industrial',
        'about': 'Industrial sites demand precision and durability. We supply trained professionals for every    installations,'
    },
    {
        'image': '/images/educational.png',
        'banner': '/images/educationalbanner.png',
        'title': 'Educational',
        'about': 'We provide skilled manpower for electrical and ducting installations in schools, colleges, and universities.'

    },
    {
        'image': '/images/hospital.png',
        'banner': '/images/hospitalitybannner.png',
        'title': 'Hospitality',
        'about': ' Our team delivers expert ducting and electrical services that support guest comfort, operational efficiency, and safety.'
    },
    {
        'image': '/images/medical.png',
        'banner': '/images/hospitalbanner.png',
        'title': 'Medical',
        'about': ' We supply certified electricians and ducting specialists for hospitals and clinics, ensuring uninterrupted power, and clean airflow'
    }
]

export const contact = [
    {
        'image': '/location.png',
        'title': 'We Are Here',
        'about': 'Big Four Building Flat No: 112(1st Floor) P.O. Box: 67411, Al Nabba, Sharjah-U.A. E'
    },
    {
        'image': '/call.png',
        'title': 'Call Us',
        'about': '+971-556038444, +971-509754442'
    },
    {
        'image': '/email.png',
        'title': 'Mail Us',
        'about': 'info@wahatsiwa.in, wahatliwantechllc@gmail.com'
    }
]


export const Persons = [
    {
        "imageurl": "/teamMembers/companybanner.png",
        "name": "R.Rakesh",
        "specialization": "B.tech(Civil),M.tech(structure)"
    },
    {
        "imageurl": "/teamMembers/companybanner.png",
        "name": "M.Nagesh ",
        "specialization": "B.tech(Electrical),M.Tech(power Systems)"
    },
    {
        "imageurl": "/teamMembers/companybanner.png",
        "name": "E.Sharma",
        "specialization": "B.tech(Mechanical),M.tech(Thermel Engineering)"
    }
]

export interface Service {
    title: string;
    about: string;
    image: string;
    points: string[];
}

export const services: Service[] = [
    {
        title: "Mechanical",
        about: "Specialization",
        image: "/mechanic.png",
        points: [
            "Heating, Ventilation & Air Conditioning (HVAC) System",
            "All type of Air Conditioning System (Centralized, Wall-Mounted, Split System, CC, Ducted)",
            "Chilled water system, chiller plants, cooling towers, FAU, AHU, FCU",
            "Refrigeration and low temperature projects",
            "Duct Works & Installation",
            "Ventilation Systems",
            "Inspection, Surveys & Reports of Existing Installations"
        ]
    },
    {
        title: "Plumbing",
        about: "Specialization",
        image: "/plumbing.png",
        points: [
            "Design & Installation of plumbing, drainage and sanitary systems",
            "Pump & Tank Installation",
            "Complete Piping Works",
            "Sanitary wares fixing",
            "Sewage Treatment Plants",
            "Water Treatment Plants",
            "Potable Water Booster Systems",
            "Testing and Commissioning"
        ]
    },
    {
        title: "Electrical",
        about: "Specialization",
        image: "/electrical.png",
        points: [
            "Electrical Engineering (Design & Product Selection)",
            "Installations of Electrical Panel Systems like MDBs,Panels, SMDBs, DBs / Capacitor Banks",
            "BMS Installation",
            "Busbar System Installation",
            "Cable Laying & Termination Works",
            "Electrical Containment Systems",
            "Low Current System & Low Voltage System",
            "Power Distribution"
        ]
    }
];

export const about = [
    {
        "title": "Introduction Of Wahat Liwan Tech Services LLC ",
        "image": "/about.png",
        "para1": "Wahat Liwan Tech Services LLC  is established in 2015 at Sharjah, United Arab Emirates. Company is one of the leading MEP & Civil Contracting company in the region with a wide reputation and excellence.",
        "para2": "Timeliness, efficiency, and value-per-square-foot are the focus of WAHAT LIWAN TECH SERVICES LLC’s efforts, and we pride ourselves on offering the highest levels of service and attention to detail, keeping you updated with regular progress reports every step of the way, thereby ensuring that your project is completed on time and within budget., and value-per-square-foot are the focus of B",
        "para3": "To provide innovative and world class solutions through the best people, processes and systems with a commitment to partnership and exceptional services and we pride on offer your project is completed on time and within budget."
    }
]

export const commitment = [
    {
        "about1": "Quality Policy",
        "para1": "MEP Enterprises is committed to meeting Customer Requirements through continual improvement of its Quality Management System.",
        "para2": "MEP shall sustain Organizational Excellence through visionary leadership and innovative efforts.",
        "about2": "Quality Assurance",
        "para3": "The Company has a Quality Management System which complies with:",
        "image": "/commitment.png",
        "points": [
            "All contractual obligations, Client’s Specifications and Industry standards.",
            "All Statutory Regulations and Codes of Practice.",
            "Providing and maintaining good & Clean environment and safe Workplace.",
            "Maintaining high level of performance and professionalism by imparting training as well as providing adequate resources.",
            "Continual improvement in the methods of working."
        ]
    },
]

export const commitmentcards = [
    {
        "para": "Our continuous learning and adaptation to technology empowers us to be competitive in the market. The knowledge we have from our qualified team enables us to complete the project successfully and on time."
    },
    {
        "para": "Our people thrive on the challenge to excel in any environment, work on their special skills, are committed to common goals and good team players. We recruit experienced professionals and our aim is to constantly develop and empower our employees and create an environment where achievement is recognized and success is rewarded."
    },
    {
        "para": "Our commitment to quality is one of the bases for our competitive advantage and customers build their trust on us. Our customers’ satisfaction is one of our prime importance."
    }
]


export interface Project {
    image: string;
    title: string;
}

export interface CompanyProjects {
    company: string;
    logo:string;
    projects: Project[];
}

export const completedProjects: CompanyProjects[] = [
    {
        company: "TROJAN CONSTRUCTION GROUP",
        logo:"/completed-projects/TROJAN CONSTRUCTION GROUP/logo.png",
        projects: [
            { image: "/completed-projects/TROJAN CONSTRUCTION GROUP/img 1.png", title: "AL MARYAH VISTA 1&2" },
            { image: "/completed-projects/TROJAN CONSTRUCTION GROUP/img 2.png", title: "LANDSCAPING (IMPERIAL 3&4)" },
            { image: "/completed-projects/TROJAN CONSTRUCTION GROUP/img 3.png", title: "COMMUNITY PARK" },
            { image: "/completed-projects/TROJAN CONSTRUCTION GROUP/img 4.png", title: "DAMAC MERANO TOWER" },
        ],
    },
    {
        company: "ROYAL RITZ INTERIORS & MEP",
        logo:"/completed-projects/Royal Ritz INTERIORS & MEP/logo.png",
        projects: [
            { image: "/completed-projects/Royal Ritz INTERIORS & MEP/img 1.png", title: "Sheikh Zayed Cricket Stadium" },
            { image: "/completed-projects/Royal Ritz INTERIORS & MEP/img 2.png", title: "Palm Jumeirah Villa Project" },
        ],
    },
    {
        company: "MAG INTERNATIONAL ELECTROMECHANICAL WORKS",
        logo:"/completed-projects/MAG international electromechanical works/logo.png",
        projects: [
            { image: "/completed-projects/MAG international electromechanical works/img 1.png", title: "INTERNATIONAL TOWER" },
            { image: "/completed-projects/MAG international electromechanical works/img 2.png", title: "LAGOON VILLAS" },
            { image: "/completed-projects/MAG international electromechanical works/img 3.png", title: "DUBAI CREEK" },
            { image: "/completed-projects/MAG international electromechanical works/img 4.png", title: "SKYCOURTS TOWER" },
            { image: "/completed-projects/MAG international electromechanical works/img 5.png", title: "LANDMARK VIEWS RESIDENTIAL COMPLEX" },
        ],
    },
    {
        company: "Gesco Ginco electrical & Sanitary contacting Co. LLC",
        logo:"/completed-projects/Gesco Ginco electrical & Sanitary contacting Co. LLC/logo.png",
        projects: [
            { image: "/completed-projects/Gesco Ginco electrical & Sanitary contacting Co. LLC/img 1.png", title: "Sharjah Oasis Mall" },
            { image: "/completed-projects/Gesco Ginco electrical & Sanitary contacting Co. LLC/img 2.png", title: "Maryam Island Development" },
        ],
    },
    {
        company: "Almoayyed Electromechanical Contracting",
        logo:"/completed-projects/Almoayyed Electromechanical Contracting/logo.png",
        projects: [
            { image: "/completed-projects/Almoayyed Electromechanical Contracting/img 1.png", title: "AL Wasal-Qusaia." },
        ],
    },
    {
        company: "Scale Electro-mechanical Works",
        logo:"/completed-projects/Scale Electro-mechanical Works/logo.png",
        projects: [
            { image: "/completed-projects/Scale Electro-mechanical Works/img 1.png", title: "2B+G+3 Floors+RF+TF On Plat No.2140909,Al Garhoud. Dubai, UAE." },
            { image: "/completed-projects/Scale Electro-mechanical Works/img 2.png", title: "Jewel of the Creek, Dubai, UAE." },
            { image: "/completed-projects/Scale Electro-mechanical Works/img 3.png", title: "G+1P+8TYP Floor 9 Staff Accommodation." },
        ],
    },
    {
        company: "Emt Electromechanical Woks LLC",
        logo:"/completed-projects/Emt Electromechanical Woks LLC/logo.png",
        projects: [
            { image: "/completed-projects/Emt Electromechanical Woks LLC/img 1.png", title: "The Address Residences Dubai Opera A2-A3 On Plot No 3456900, Duabi Downtown." },
        ],
    },
    {
        company: "Light moon",
        logo:"/completed-projects/Light moon/logo.png",
        projects: [
            { image: "/completed-projects/Light moon/img 1.png", title: "Sarab Villas at Al Jada,Sharjah U.A.E." },
            { image: "/completed-projects/Light moon/img 2.png", title: "R-1083 AL Qusais, Residential Development." },
            { image: "/completed-projects/Light moon/img 3.png", title: "Proposed G+1 Town House@HADAEQ Sheikh Mohammed Bin Rashid." },
        ],
    },
    {
        company: "Specton",
        logo:"/completed-projects/Specton/logo.png",
        projects: [
            { image: "/completed-projects/Specton/logo.png", title: "The Royal Atlantis Resort and Residences(Packagaes M2 & M3)." },
        ],
    },
    {
        company: "Elemec electrical Contracting L.L.C",
        logo:"/completed-projects/Elemec electrical Contracting L.L.C/logo.png",
        projects: [
            { 'image': "/completed-projects/Elemec electrical Contracting L.L.C/img 1.png", title: "EKPC-3LONG Termexpansion." },
            { image: "/completed-projects/Elemec electrical Contracting L.L.C/img 2.png", title: "AL BARSHA, RESIDENTIAL & COMMERCIAL BUILDING[2B+G+6 TYP ABDUL WAHID HASSAN MOHD.AL ROSTAMANI." },
            { image: "/completed-projects/Elemec electrical Contracting L.L.C/img 3.png", title: "AL MUHAISNAH RESIDANTIAL COMPLEX." },
            { image: "/completed-projects/Elemec electrical Contracting L.L.C/img 4.png", title: "Shopping Center & Residential Building (3B+G+M+4+2R) in Al Garhoud Dubai." },
            { image: "/completed-projects/Elemec electrical Contracting L.L.C/img 5.png", title: "Design & Construction of DH-0036 Beachfront Tower (1+B+G_36F+TC) at JBR-La Vie, Dubai." },
            { image: "/completed-projects/Elemec electrical Contracting L.L.C/img 6.png", title: "Main Construction works for Port De LA Mer (PDLM) Phase 4 Buildings (Building 1,2&3), Dubai" },

        ],
    },
    {
        company: "Verger Delporte u.a.e l.t.d",
        logo:"/completed-projects/Verger Delporte u.a.e l.t.d/logo.png",
        projects: [
            { image: "/completed-projects/Verger Delporte u.a.e l.t.d/img 1.png", title: "Verger Concrete Technology LLC" },
        ],
    },
    {
        company: "IHCC WE DESIGN & BUILD THE FUTURE",
        logo:"/completed-projects/IHCC WE DESIGN & BUILD THE FUTURE/logo.png",
        projects: [
            { image: "/completed-projects/IHCC WE DESIGN & BUILD THE FUTURE/img 1.png", title: "International Hospital Construction Co.Ltd" },
        ],
    },
];

export const ongoingProjects: CompanyProjects[] = [
    {
        company: "GRANADA EUROPE CONSTRUCTION LLC",
        logo:"/ongoing-projects/GRANADA EUROPE CONSTRUCTION LLC/logo.png",
        projects: [
            { image: "/ongoing-projects/GRANADA EUROPE CONSTRUCTION LLC/img1.png", title: "AL MARYAH VISTA 1&2" },
        ],
    },
    {
        company: "VERGER DELPORTE U.A.E LTD",
        logo:"/ongoing-projects/VERGER DELPORTE U.A.E LTD/logo.png",
        projects: [
            { image: "/ongoing-projects/VERGER DELPORTE U.A.E LTD/img1.jpg", title: "Sheikh Zayed Cricket Stadium" },
            { image: "/ongoing-projects/VERGER DELPORTE U.A.E LTD/img2.png", title: "Palm Jumeirah Villa Project" },
        ],
    },
    {
        company: "ABRAJ ELECTROMECHANICAL  WORK L.L.C",
        logo:"/ongoing-projects/ABRAJ ELECTROMECHANICAL WORK L.L.C/logo.webp",
        projects: [
            { image: "/ongoing-projects/ABRAJ ELECTROMECHANICAL WORK L.L.C/img1.png", title: "E-167 villa @Emirates Hills" },
            { image: "/ongoing-projects/ABRAJ ELECTROMECHANICAL WORK L.L.C/img2.png", title: "P-47 @ Dubai Hills" },
            { image: "/ongoing-projects/ABRAJ ELECTROMECHANICAL WORK L.L.C/img3.png", title: "V004 villa @ Jumeirah Estate" },
        ],
    },
    {
        company: "SPECTRUM CUBE",
        logo:"/ongoing-projects/SPECTRUM CUBE/logo.png",
        projects: [
            { image: "/ongoing-projects/SPECTRUM CUBE/img1.png", title: "Sharjah Oasis Mall" },
            { image: "/ongoing-projects/SPECTRUM CUBE/img2.png", title: "Maryam Island Development" },
        ],
    },
    {
        company: "MAG INTERNATIONAL ELECTROMECHANICAL WORK L.L.C",
        logo:"/ongoing-projects/MAG INTERNATIONAL ELECTROMECHANICAL WORK L.L.C/logo.png",
        projects: [
            { image: "/ongoing-projects/MAG INTERNATIONAL ELECTROMECHANICAL WORK L.L.C/img1.png", title: "AL Wasal-Qusaia." },
            { image: "/ongoing-projects/MAG INTERNATIONAL ELECTROMECHANICAL WORK L.L.C/img2.png", title: "AL Wasal-Qusaia." },
            { image: "/ongoing-projects/MAG INTERNATIONAL ELECTROMECHANICAL WORK L.L.C/img3.png", title: "AL Wasal-Qusaia." },
            { image: "/ongoing-projects/MAG INTERNATIONAL ELECTROMECHANICAL WORK L.L.C/img4.png", title: "AL Wasal-Qusaia." },
        ],
    },
    {
        company: "EMT ELECTROMECHNICAL WORKS L.L.C",
        logo:"/ongoing-projects/EMT ELECTROMECHNICAL WORKS L.L.C/logo.jpg",
        projects: [
            { image: "/ongoing-projects/EMT ELECTROMECHNICAL WORKS L.L.C/img1.png", title: "2B+G+3 Floors+RF+TF On Plat No.2140909,Al Garhoud. Dubai, UAE." },
            { image: "/ongoing-projects/EMT ELECTROMECHNICAL WORKS L.L.C/img2.png", title: "Jewel of the Creek, Dubai, UAE." },
        ],
    },

];

export const clients=["/clients/client1.jpeg","/clients/client2.png","/clients/client3.png","/clients/client4.png","/clients/client5.jpeg","/clients/client6.png","/clients/client7.png","/clients/client8.png","/clients/client9.png","/clients/client10.png","/clients/client11.png","/clients/client12.jpeg","/clients/client13.png","/clients/client14.jpeg","/clients/client15.jpeg","/clients/client16.png","/clients/client17.png","/clients/client18.png","/clients/client19.png"]
                                                                                                                             