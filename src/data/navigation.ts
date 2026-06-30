export const navigation = {
    logo: "/images/logos/virtuebyte-logo.webp",
    footerLogo: "/images/logos/vb-logo.webp",
    items: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about/" },
        {
            label: "Services",
            href: "/services/",
            children: [
                { label: "Salesforce Implementation", href: "/services/salesforce-implementation/" },
                { label: "AI & ML Consulting", href: "/services/ai-ml-consulting/" },
                { label: "Data Science & Analytics", href: "/services/data-science-analytics/" },
                { label: "Offshore Development Centers", href: "/services/offshore-development-centers/" },
                { label: "Cloud Services", href: "/services/cloud-services/" },
                { label: "DevOps Consulting Services", href: "/services/devops-consulting-services/" },
            ],
        },
        {
            label: "Products",
            href: "/products/",
            children: [
                { label: "VirtuElite", href: "/products/virtuelite/" },
                { label: "VirtuNest", href: "/products/virtunest/" },
            ],
        },
        { label: "Career", href: "/career" },
        { label: "Case Studies", href: "/case-studies/" },
        { label: "Blog", href: "/blog/" },
        { label: "Contact Us", href: "/contact/" },
    ],
};

export const footerData = {
    social: [
        { platform: "Instagram", url: "https://www.instagram.com/virtuebyte/", icon: "instagram" },
        { platform: "Facebook", url: "https://www.facebook.com/share/15izJ5VnXE/", icon: "facebook" },
        { platform: "LinkedIn", url: "https://www.linkedin.com/company/virtue-infotek/", icon: "linkedin" },
    ],
    importantLinks: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about/" },
        { label: "Our Services", href: "/services/" },
        { label: "Contact Us", href: "/contact/" },
        /* { label: "Jobs", href: "/jobs/" }, */
    ],
    services: [
        { label: "Salesforce Implementation", href: "/services/salesforce-implementation/" },
        { label: "AI & ML Consulting", href: "/services/ai-ml-consulting/" },
        { label: "Data Science & Analytics", href: "/services/data-science-analytics/" },
        { label: "Offshore Development Centers", href: "/services/offshore-development-centers/" },
        { label: "Cloud Services", href: "/services/cloud-services/" },
        { label: "DevOps Consulting Services", href: "/services/devops-consulting-services/" },
    ],
    insights: [
        { label: "Case Studies", href: "/case-studies/" },
        { label: "Blog", href: "/blog/" },
    ],
    products: [
        { label: "VirtuElite", href: "/products/virtuelite/" },
        { label: "VirtuNest", href: "/products/virtunest/" },
    ],
    contact: {
        phone: "+91-20-677088756",
        salesEmail: "sales@virtuebytech.com",
        careersEmail: "careers@virtuebytech.com",
        address: "416, Sacred World, South Block, Wanowrie, Pune 411040, Maharashtra, India.",
    },
    copyright: "© 2024 VirtueByte Private Limited. All rights reserved.",
};

