const stateCommittee = [
    { name: "Abdul Rahman", positionKey: "labels.positions.president", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Anjali Nair", positionKey: "labels.positions.generalSecretary", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Shyam Kumar", positionKey: "labels.positions.vicePresident", image: "https://randomuser.me/api/portraits/men/75.jpg" },
    { name: "Naseema Ali", positionKey: "labels.positions.chairman", image: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Manoj Das", positionKey: "labels.positions.treasurer", image: "https://randomuser.me/api/portraits/men/41.jpg" },
    { name: "Deepa Suresh", positionKey: "labels.positions.executiveMember", image: "https://randomuser.me/api/portraits/women/24.jpg" }
];

const districts = [
    { nameKey: "districtNames.thiruvananthapuram", members: [{ posKey: "labels.positions.president", name: "Dummy Name" }, { posKey: "labels.positions.secretary", name: "Dummy Name" }, { posKey: "labels.positions.treasurer", name: "Dummy Name" }] },
    { nameKey: "districtNames.kollam", members: [{ posKey: "labels.positions.president", name: "Dummy Name" }, { posKey: "labels.positions.secretary", name: "Dummy Name" }, { posKey: "labels.positions.treasurer", name: "Dummy Name" }] },
    { nameKey: "districtNames.pathanamthitta", members: [{ posKey: "labels.positions.president", name: "Dummy Name" }, { posKey: "labels.positions.secretary", name: "Dummy Name" }, { posKey: "labels.positions.treasurer", name: "Dummy Name" }] },
    { nameKey: "districtNames.alappuzha", members: [{ posKey: "labels.positions.president", name: "Dummy Name" }, { posKey: "labels.positions.secretary", name: "Dummy Name" }, { posKey: "labels.positions.treasurer", name: "Dummy Name" }] },
    { nameKey: "districtNames.kottayam", members: [{ posKey: "labels.positions.president", name: "Dummy Name" }, { posKey: "labels.positions.secretary", name: "Dummy Name" }, { posKey: "labels.positions.treasurer", name: "Dummy Name" }] },
    { nameKey: "districtNames.idukki", members: [{ posKey: "labels.positions.president", name: "Dummy Name" }, { posKey: "labels.positions.secretary", name: "Dummy Name" }, { posKey: "labels.positions.treasurer", name: "Dummy Name" }] },
    { nameKey: "districtNames.ernakulam", members: [{ posKey: "labels.positions.president", name: "Dummy Name" }, { posKey: "labels.positions.secretary", name: "Dummy Name" }, { posKey: "labels.positions.treasurer", name: "Dummy Name" }] },
    { nameKey: "districtNames.thrissur", members: [{ posKey: "labels.positions.president", name: "Dummy Name" }, { posKey: "labels.positions.secretary", name: "Dummy Name" }, { posKey: "labels.positions.treasurer", name: "Dummy Name" }] },
    { nameKey: "districtNames.palakkad", members: [{ posKey: "labels.positions.president", name: "Dummy Name" }, { posKey: "labels.positions.secretary", name: "Dummy Name" }, { posKey: "labels.positions.treasurer", name: "Dummy Name" }] },
    { nameKey: "districtNames.malappuram", members: [{ posKey: "labels.positions.president", name: "Dummy Name" }, { posKey: "labels.positions.secretary", name: "Dummy Name" }, { posKey: "labels.positions.treasurer", name: "Dummy Name" }] },
    { nameKey: "districtNames.kozhikode", members: [{ posKey: "labels.positions.president", name: "Dummy Name" }, { posKey: "labels.positions.secretary", name: "Dummy Name" }, { posKey: "labels.positions.treasurer", name: "Dummy Name" }] },
    { nameKey: "districtNames.wayanad", members: [{ posKey: "labels.positions.president", name: "Dummy Name" }, { posKey: "labels.positions.secretary", name: "Dummy Name" }, { posKey: "labels.positions.treasurer", name: "Dummy Name" }] },
    { nameKey: "districtNames.kannur", members: [{ posKey: "labels.positions.president", name: "Dummy Name" }, { posKey: "labels.positions.secretary", name: "Dummy Name" }, { posKey: "labels.positions.treasurer", name: "Dummy Name" }] },
    { nameKey: "districtNames.kasaragod", members: [{ posKey: "labels.positions.president", name: "Dummy Name" }, { posKey: "labels.positions.secretary", name: "Dummy Name" }, { posKey: "labels.positions.treasurer", name: "Dummy Name" }] }
];

const galleryImages = [
    "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511578314322-379a1bd9cd6e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1475721025592-220a21cf12da?auto=format&fit=crop&q=80&w=800"
];

const fallbackTranslations = {
    en: {
        meta: {
            title: "Kerala Hire Goods Owners Association (KSHGOA)",
            description: "KSHGOA is a statewide association supporting hire goods businesses across Kerala."
        },
        controls: { theme: { dark: "Enable dark theme", light: "Enable light theme" } },
        brand: { subtitle: "Kerala Hire Goods Owners Association" },
        nav: { home: "Home", about: "About", stateCommittee: "State Committee", districtCommittees: "District Committees", gallery: "Gallery", contact: "Contact Us" },
        mobile: { getInTouch: "Get in touch" },
        hero: {
            badge: "Statewide Organization",
            title: "Kerala Hire Goods <br class=\"hidden sm:block\" /> Owners Association",
            description: "Empowering Hire Goods Businesses Across Kerala through connectivity, community, and statewide collaboration.",
            primaryCta: "View State Committee",
            secondaryCta: "Explore District Committees",
            scroll: "Scroll Target"
        },
        about: {
            eyebrow: "About Us",
            title: "Kerala State Hire Goods Owners Association (KSHGOA)",
            paragraphOne: "<strong class=\"text-gray-800\">Kerala State Hire Goods Owners Association (KSHGOA)</strong> is the premier organization dedicated to the empowerment and welfare of owners and workers in Kerala's Pandhal, Decoration, and Light & Sound sectors. For over three and a half decades, KSHGOA has been at the forefront of advocating for the rights of its members and ensuring their socio-economic security.",
            paragraphTwo: "Today, the association has a powerful presence across all 14 districts of Kerala, supported by robust committees and a highly active membership base.",
            highlight: "Statewide welfare, advocacy, and socio-economic security",
            history: {
                label: "Legacy",
                title: "History & Evolution",
                item1: "<strong class=\"text-gray-800\">Foundation:</strong> The journey began 37 years ago in Kozhikode, born from the visionary decision of nine pioneering individuals. This organizational model has since become a benchmark, inspiring the formation and active functioning of the Tamil Azhaga State Hire Goods Owners Association in Tamil Nadu.",
                item2: "<strong class=\"text-gray-800\">Expansion:</strong> Today, the association has a powerful presence across all 14 districts of Kerala, supported by robust committees and a highly active membership base.",
                item3: "<strong class=\"text-gray-800\">Infrastructure:</strong> While the State Committee currently operates from its own building on Francis Road, Kozhikode, the organization is entering a new era of growth. Construction has commenced for a state-of-the-art headquarters near Kallai, Kozhikode, on land acquired for Rs. 1.50 crores. We also maintain dedicated district offices in Malappuram and Kannur."
            },
            objectives: {
                label: "Purpose",
                title: "Our Objectives",
                item1: "<strong class=\"text-gray-800\">*</strong> To elevate the living standards of owners and employees within the industry.",
                item2: "<strong class=\"text-gray-800\">*</strong> To proactively intervene in professional challenges and provide members with comprehensive legal and practical support.",
                item3: "<strong class=\"text-gray-800\">*</strong> To bridge the gap between our members and the government, ensuring all entitled benefits and rights are secured."
            },
            welfare: {
                label: "Member Welfare",
                title: "Welfare Schemes & Achievements",
                item1: "KSHGOA implements extensive welfare programs to ensure the safety and stability of our members and their families.",
                item2: "<strong class=\"text-gray-800\">Cooperative Banking:</strong> We successfully operate dedicated cooperative banking systems in the Kannur and Palakkad districts.",
                item3: "<strong class=\"text-gray-800\">HIGOS:</strong> Operating in five districts, HIGOS provides essential industry products to members at subsidized rates through a cooperative procurement model.",
                item4: "<strong class=\"text-gray-800\">Financial Security:</strong> Most districts offer death benefit schemes providing up to Rs. 5 lakhs to the families of deceased members. Additionally, the State Committee's HOWACT project provides an additional Rs. 50,000 in immediate financial assistance."
            },
            philanthropy: {
                label: "Humanitarian Work",
                title: "Social Responsibility & Philanthropy",
                item1: "KSHGOA is deeply committed to humanitarian causes and community support.",
                item2: "<strong class=\"text-gray-800\">Disaster Relief:</strong> In response to the Chooralmala disaster in Wayanad, the State Committee contributed approximately Rs. 20 lakhs to the Chief Minister's Distress Relief Fund. Furthermore, the Malappuram District Committee distributed household appliances and essentials worth Rs. 20 lakhs to those affected by the Nilambur Kavalappara floods.",
                item3: "<strong class=\"text-gray-800\">Compassionate Care:</strong> Beyond emergency aid for workplace accidents, the association has also undertaken projects like constructing a home for a financially distressed member in Wayanad."
            },
            standing: {
                label: "Recognition",
                title: "Social & Professional Standing",
                item1: "The Government of Kerala recognizes KSHGOA as an integral part of the state's cultural fabric. As a testament to our impact, the association has been granted membership in the Kerala State Cultural Welfare Fund Board.",
                item2: "Currently, over 90% of the industry, more than 9,000 out of 11,000 owners, is united under the KSHGOA banner. This vast family also supports the livelihoods of approximately 4 lakh workers across Kerala."
            }
        },
        stats: { districtCommittees: "District Committees", registeredMembers: "Owners United", yearsOfService: "Years of Service", eventsSupported: "Workers Supported" },
        stateCommittee: { eyebrow: "Leadership", title: "State Committee", description: "Guiding the association with vision and dedication to support the hire goods community across Kerala.", coreTag: "Core Team", profileLink: "View Profile" },
        districtSection: { eyebrow: "Statewide Network", title: "District Committees", description: "Explore our 14 active district committees facilitating local support and collaboration." },
        activities: {
            eyebrow: "Our Operations",
            title: "Key Activities",
            description: "Driving growth and establishing standards across the hire goods industry.",
            cards: {
                conference: { title: "Annual State Conference", description: "Gathering statewide members to discuss industry trends, elect committees, and set future goals." },
                meetings: { title: "District Meetings", description: "Regular regional assemblies to address local challenges and strengthen community bonds." },
                training: { title: "Training Programs", description: "Skill development workshops ensuring businesses stay ahead with modern practices and equipment." },
                support: { title: "Industry Support", description: "Advocating for members' rights, providing legal guidance, and establishing fair business guidelines." }
            }
        },
        gallery: {
            eyebrow: "Visuals",
            title: "Photo Gallery",
            description: "Moments from our meetings, events, and community support programs.",
            viewAll: "View Complete Gallery",
            cardTitle: "Event Highlights",
            cardDescription: "KSHGOA Gathering",
            imageAlt: "Gallery Image {number}"
        },
        contact: {
            eyebrow: "Get in Touch",
            title: "Contact Us",
            description: "Reach out to our state office for queries, membership, or general info.",
            stateOffice: "State Office",
            address: "Kerala Hire Goods Owners Association (KSHGOA)<br>K.S.H.G.O.A Building, Francis Road<br>Idiyangara, Kuttichira<br>Kozhikode, Kerala 673003",
            phoneNumber: "Phone Number"
        },
        form: {
            title: "Send a Message",
            fullName: "Full Name",
            phoneNumber: "Phone Number",
            message: "Message",
            namePlaceholder: "John Doe",
            phonePlaceholder: "+91 98765 43210",
            messagePlaceholder: "How can we help you?",
            submit: "Send Message"
        },
        footer: {
            badge: "Statewide Association",
            description: "The ultimate voice for hire goods businesses in Kerala. Connecting districts, supporting owners, and building a stronger community.",
            quickLinks: "Quick Links",
            aboutLink: "About KSHGOA",
            galleryLink: "Photo Gallery",
            topDistricts: "Top Districts",
            contactDetails: "Contact Details",
            copyright: "Kerala Hire Goods Owners Association. All Rights Reserved.",
            privacy: "Privacy Policy",
            terms: "Terms of Service"
        },
        labels: {
            positions: {
                president: "President",
                generalSecretary: "General Secretary",
                vicePresident: "Vice President",
                chairman: "Chairman",
                treasurer: "Treasurer",
                executiveMember: "Executive Member",
                secretary: "Secretary"
            }
        },
        districtNames: {
            thiruvananthapuram: "Thiruvananthapuram",
            kollam: "Kollam",
            pathanamthitta: "Pathanamthitta",
            alappuzha: "Alappuzha",
            kottayam: "Kottayam",
            idukki: "Idukki",
            ernakulam: "Ernakulam",
            thrissur: "Thrissur",
            palakkad: "Palakkad",
            malappuram: "Malappuram",
            kozhikode: "Kozhikode",
            wayanad: "Wayanad",
            kannur: "Kannur",
            kasaragod: "Kasaragod"
        }
    },
    ml: {
        meta: {
            title: "കേരള ഹയർ ഗുഡ്സ് ഓണേഴ്സ് അസോസിയേഷൻ (KSHGOA)",
            description: "കേരളമൊട്ടാകെയുള്ള ഹയർ ഗുഡ്സ് സ്ഥാപനങ്ങൾക്ക് പിന്തുണ നൽകുന്ന സംസ്ഥാനതല സംഘടനയാണ് KSHGOA."
        },
        controls: { theme: { dark: "ഡാർക്ക് തീം ഓൺ ചെയ്യുക", light: "ലൈറ്റ് തീം ഓൺ ചെയ്യുക" } },
        brand: { subtitle: "കേരള ഹയർ ഗുഡ്സ് ഓണേഴ്സ് അസോസിയേഷൻ" },
        nav: { home: "ഹോം", about: "അസോസിയേഷൻ", stateCommittee: "സംസ്ഥാന കമ്മിറ്റി", districtCommittees: "ജില്ലാ കമ്മിറ്റികൾ", gallery: "ഗാലറി", contact: "ബന്ധപ്പെടുക" },
        mobile: { getInTouch: "ഞങ്ങളെ സമീപിക്കുക" },
        hero: {
            badge: "സംസ്ഥാനതല സംഘടന",
            title: "കേരള ഹയർ ഗുഡ്സ് <br class=\"hidden sm:block\" /> ഓണേഴ്സ് അസോസിയേഷൻ",
            description: "കേരളമൊട്ടാകെ ഹയർ ഗുഡ്സ് സ്ഥാപനങ്ങളെ ബന്ധിപ്പിച്ച്, കൂട്ടായ്മ ശക്തിപ്പെടുത്തി, സംസ്ഥാനതല സഹകരണത്തിലൂടെ മുന്നോട്ടുകൊണ്ടുപോകുന്നു.",
            primaryCta: "സംസ്ഥാന കമ്മിറ്റി കാണുക",
            secondaryCta: "ജില്ലാ കമ്മിറ്റികൾ കാണുക",
            scroll: "താഴേക്ക് പോകുക"
        },
        about: {
            eyebrow: "സംഘടനയെക്കുറിച്ച്",
            title: "ജില്ലകളെ ഒന്നിപ്പിക്കുന്ന സഹകരണം",
            paragraphOne: "<strong class=\"text-gray-800\">കേരള ഹയർ ഗുഡ്സ് ഓണേഴ്സ് അസോസിയേഷൻ (KSHGOA)</strong> കേരളമൊട്ടാകെയുള്ള ഹയർ ഗുഡ്സ് സ്ഥാപനങ്ങൾക്ക് പിന്തുണ നൽകുന്ന മുൻനിര സംസ്ഥാനതല സംഘടനയാണ്. വ്യവസായ മേഖലയിലെ അംഗങ്ങളെ തമ്മിൽ ബന്ധിപ്പിക്കുകയും ജില്ലകൾ തമ്മിലുള്ള സഹകരണം ശക്തിപ്പെടുത്തുകയും ചെയ്ത് വാടക സേവന മേഖലയിലെ സ്ഥിരതയുള്ള വളർച്ചയ്ക്ക് പിന്തുണ നൽകുന്നു.",
            paragraphTwo: "വാടക സേവന മേഖലയിലെ സ്ഥാപനങ്ങൾക്ക് ഒരുമിച്ചുള്ള ശബ്ദമായി പ്രവർത്തിച്ച് അവകാശങ്ങൾ സംരക്ഷിക്കുകയും, വ്യവസായ മാനദണ്ഡങ്ങൾ പങ്കുവെക്കുകയും, കാസർഗോഡ് മുതൽ തിരുവനന്തപുരം വരെ എല്ലാ ഉടമകൾക്കും ശക്തമായ ഒരു നെറ്റ്‌വർക്ക് നൽകുകയും ചെയ്യുന്നു.",
            highlight: "സംസ്ഥാനതല അംഗീകാരം ലഭിക്കുന്ന പ്രത്യേക അംഗത്വം"
        },
        stats: { districtCommittees: "ജില്ലാ കമ്മിറ്റികൾ", registeredMembers: "രജിസ്റ്റർ ചെയ്ത അംഗങ്ങൾ", yearsOfService: "സേവനവർഷങ്ങൾ", eventsSupported: "പിന്തുണച്ച പരിപാടികൾ" },
        stateCommittee: { eyebrow: "നേതൃത്വം", title: "സംസ്ഥാന കമ്മിറ്റി", description: "കേരളമൊട്ടാകെയുള്ള ഹയർ ഗുഡ്സ് സമൂഹത്തെ പിന്തുണയ്ക്കാൻ ദൂരദർശനത്തോടെയും പ്രതിബദ്ധതയോടെയും പ്രവർത്തിക്കുന്ന നേതൃത്വം.", coreTag: "പ്രധാന സംഘം", profileLink: "കൂടുതൽ കാണുക" },
        districtSection: { eyebrow: "സംസ്ഥാന വ്യാപക ശൃംഖല", title: "ജില്ലാ കമ്മിറ്റികൾ", description: "പ്രാദേശിക പിന്തുണയും സഹകരണവും ഉറപ്പാക്കുന്ന ഞങ്ങളുടെ 14 സജീവ ജില്ലാ കമ്മിറ്റികളെ പരിചയപ്പെടുക." },
        activities: {
            eyebrow: "ഞങ്ങളുടെ പ്രവർത്തനം",
            title: "പ്രധാന പ്രവർത്തനങ്ങൾ",
            description: "ഹയർ ഗുഡ്സ് മേഖലയിലെ വളർച്ചയും മാനദണ്ഡങ്ങളും ശക്തിപ്പെടുത്തുന്ന ഇടപെടലുകൾ.",
            cards: {
                conference: { title: "വാർഷിക സംസ്ഥാന സമ്മേളനം", description: "മേഖലയിലെ പ്രവണതകൾ ചർച്ച ചെയ്യാനും, കമ്മിറ്റികളെ തിരഞ്ഞെടുക്കാനും, ഭാവി പദ്ധതികൾ നിശ്ചയിക്കാനും സംസ്ഥാനതല അംഗങ്ങളെ ഒന്നിക്കുന്നു." },
                meetings: { title: "ജില്ലാ യോഗങ്ങൾ", description: "പ്രാദേശിക പ്രശ്നങ്ങൾ പരിഹരിക്കാനും കൂട്ടായ്മ ഉറപ്പാക്കാനും പതിവായി നടക്കുന്ന മേഖലാ യോഗങ്ങൾ." },
                training: { title: "പരിശീലന പരിപാടികൾ", description: "ആധുനിക രീതികളും ഉപകരണങ്ങളും ഉപയോഗിച്ച് സ്ഥാപനങ്ങൾ മുന്നിൽ നിൽക്കാൻ സഹായിക്കുന്ന പരിശീലന ശില്പശാലകൾ." },
                support: { title: "വ്യവസായ പിന്തുണ", description: "അംഗങ്ങളുടെ അവകാശങ്ങൾക്കായി വാദിക്കുകയും, നിയമോപദേശം നൽകുകയും, നീതിയുള്ള വ്യാപാര മാർഗ്ഗരേഖകൾ രൂപപ്പെടുത്തുകയും ചെയ്യുന്നു." }
            }
        },
        gallery: {
            eyebrow: "ദൃശ്യങ്ങൾ",
            title: "ഫോട്ടോ ഗാലറി",
            description: "യോഗങ്ങൾ, പരിപാടികൾ, സമൂഹസഹായ പ്രവർത്തനങ്ങൾ എന്നിവയിലെ നിമിഷങ്ങൾ.",
            viewAll: "മുഴുവൻ ഗാലറി കാണുക",
            cardTitle: "പരിപാടി ഹൈലൈറ്റുകൾ",
            cardDescription: "KSHGOA സംഗമം",
            imageAlt: "ഗാലറി ചിത്രം {number}"
        },
        contact: {
            eyebrow: "ബന്ധപ്പെടുക",
            title: "ഞങ്ങളെ സമീപിക്കുക",
            description: "ചോദ്യങ്ങൾക്കും അംഗത്വത്തിനും പൊതുവിവരങ്ങൾക്കും ഞങ്ങളുടെ സംസ്ഥാന ഓഫിസുമായി ബന്ധപ്പെടുക.",
            stateOffice: "സംസ്ഥാന ഓഫീസ്",
            address: "കേരള ഹയർ ഗുഡ്സ് ഓണേഴ്സ് അസോസിയേഷൻ (KSHGOA)<br>K.S.H.G.O.A ബിൽഡിംഗ്, ഫ്രാൻസിസ് റോഡ്<br>ഇടിയങ്ങര, കുട്ടിച്ചിറ<br>കോഴിക്കോട്, കേരള 673003",
            phoneNumber: "ഫോൺ നമ്പർ"
        },
        form: {
            title: "ഒരു സന്ദേശം അയയ്ക്കുക",
            fullName: "പൂർണ്ണ പേര്",
            phoneNumber: "ഫോൺ നമ്പർ",
            message: "സന്ദേശം",
            namePlaceholder: "നിങ്ങളുടെ പേര്",
            phonePlaceholder: "+91 98765 43210",
            messagePlaceholder: "ഞങ്ങൾ എങ്ങനെ സഹായിക്കാം?",
            submit: "സന്ദേശം അയയ്ക്കുക"
        },
        footer: {
            badge: "സംസ്ഥാനതല സംഘടന",
            description: "കേരളത്തിലെ ഹയർ ഗുഡ്സ് സ്ഥാപനങ്ങളുടെ ഒരുമിച്ചുള്ള ശബ്ദം. ജില്ലകളെ ബന്ധിപ്പിച്ച് ഉടമകളെ പിന്തുണച്ച് ശക്തമായ സമൂഹം നിർമ്മിക്കുന്നു.",
            quickLinks: "ദ്രുത ലിങ്കുകൾ",
            aboutLink: "KSHGOAയെക്കുറിച്ച്",
            galleryLink: "ഫോട്ടോ ഗാലറി",
            topDistricts: "പ്രധാന ജില്ലകൾ",
            contactDetails: "ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ",
            copyright: "കേരള ഹയർ ഗുഡ്സ് ഓണേഴ്സ് അസോസിയേഷൻ. എല്ലാ അവകാശങ്ങളും സംരക്ഷിതമാണ്.",
            privacy: "സ്വകാര്യതാ നയം",
            terms: "സേവന നിബന്ധനകൾ"
        },
        labels: {
            positions: {
                president: "പ്രസിഡന്റ്",
                generalSecretary: "ജനറൽ സെക്രട്ടറി",
                vicePresident: "വൈസ് പ്രസിഡന്റ്",
                chairman: "ചെയർമാൻ",
                treasurer: "ട്രഷറർ",
                executiveMember: "എക്സിക്യൂട്ടീവ് അംഗം",
                secretary: "സെക്രട്ടറി"
            }
        },
        districtNames: {
            thiruvananthapuram: "തിരുവനന്തപുരം",
            kollam: "കൊല്ലം",
            pathanamthitta: "പത്തനംതിട്ട",
            alappuzha: "ആലപ്പുഴ",
            kottayam: "കോട്ടയം",
            idukki: "ഇടുക്കി",
            ernakulam: "എറണാകുളം",
            thrissur: "തൃശ്ശൂർ",
            palakkad: "പാലക്കാട്",
            malappuram: "മലപ്പുറം",
            kozhikode: "കോഴിക്കോട്",
            wayanad: "വയനാട്",
            kannur: "കണ്ണൂർ",
            kasaragod: "കാസർഗോഡ്"
        }
    }
};

const translationCache = {};
let translations = fallbackTranslations.en;
let currentLang = localStorage.getItem("kshgoa-language") || "en";
let currentTheme = localStorage.getItem("kshgoa-theme") || "light";
let gsapInitialized = false;
let threeState = null;

document.addEventListener("DOMContentLoaded", async () => {
    setupMenu();
    setupThemeControls();
    setupLanguageControls();

    translations = fallbackTranslations[currentLang] || fallbackTranslations.en;
    document.documentElement.lang = currentLang;

    setTheme(currentTheme, { persist: false });

    try {
        await setLanguage(currentLang, { skipRefresh: true, silent: true });
    } catch (error) {
        console.warn("Language file load failed, using fallback translations.", error);
    }

    initThreeJS();
    initGSAP();
});

function qs(selector) {
    return document.querySelector(selector);
}

function qsa(selector) {
    return Array.from(document.querySelectorAll(selector));
}

function getTranslation(path) {
    return path.split(".").reduce((value, key) => (value && value[key] !== undefined ? value[key] : undefined), translations);
}

function t(path, replacements = {}) {
    const value = getTranslation(path);
    if (typeof value !== "string") {
        // If the current language is missing a translation, fall back to English.
        const fallbackValue = path
            .split(".")
            .reduce((val, key) => (val && val[key] !== undefined ? val[key] : undefined), fallbackTranslations.en);
        return typeof fallbackValue === "string" ? fallbackValue : path;
    }

    return Object.entries(replacements).reduce((result, [key, replacement]) => {
        return result.replaceAll(`{${key}}`, replacement);
    }, value);
}

async function loadTranslations(lang) {
    if (translationCache[lang]) {
        return translationCache[lang];
    }

    const langFile = lang === "en" ? "eng" : lang;
    const response = await fetch(`lang/${langFile}.json`);
    if (!response.ok) {
        throw new Error(`Failed to load translations for ${lang}`);
    }

    const data = await response.json();
    translationCache[lang] = data;
    return data;
}

async function setLanguage(lang, options = {}) {
    currentLang = lang;
    localStorage.setItem("kshgoa-language", lang);

    try {
        translations = await loadTranslations(lang);
    } catch (error) {
        translations = fallbackTranslations[lang] || fallbackTranslations.en;
        if (!options.silent) {
            console.warn(`Using fallback translations for ${lang}.`, error);
        }
    }

    document.documentElement.lang = lang;
    updateLanguageButtons();
    applyStaticTranslations();
    renderDynamicContent();

    if (!options.skipRefresh) {
        refreshScrollAnimations();
    }
}

function setupMenu() {
    const navbar = qs("#navbar");
    const mobileMenuBtn = qs("#mobile-menu-btn");
    const mobileMenu = qs("#mobile-menu");
    const mobileLinks = qsa(".mobile-link");
    const mobileContactInfo = qs("#mobile-contact-info");
    let isMenuOpen = false;

    window.addEventListener("scroll", () => {
        if (!navbar) return;
        if (window.scrollY > 50) {
            navbar.classList.add("shadow-md", "py-2");
            navbar.classList.remove("py-4");
        } else {
            navbar.classList.remove("shadow-md", "py-2");
            navbar.classList.add("py-4");
        }
    });

    if (!mobileMenuBtn || !mobileMenu) return;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
        mobileMenuBtn.classList.toggle("active");
        mobileMenuBtn.setAttribute("aria-expanded", String(isMenuOpen));

        if (isMenuOpen) {
            mobileMenu.classList.remove("translate-x-full");
            document.body.style.overflow = "hidden";
            mobileMenu.setAttribute("aria-hidden", "false");

            setTimeout(() => {
                mobileLinks.forEach((link, index) => {
                    setTimeout(() => link.classList.remove("translate-x-4", "opacity-0"), index * 100);
                });
                if (mobileContactInfo) {
                    setTimeout(() => mobileContactInfo.classList.remove("translate-y-4", "opacity-0"), mobileLinks.length * 100);
                }
            }, 300);
        } else {
            mobileMenu.classList.add("translate-x-full");
            document.body.style.overflow = "";
            mobileMenu.setAttribute("aria-hidden", "true");
            mobileLinks.forEach((link) => link.classList.add("translate-x-4", "opacity-0"));
            if (mobileContactInfo) {
                mobileContactInfo.classList.add("translate-y-4", "opacity-0");
            }
        }
    };

    mobileMenuBtn.addEventListener("click", toggleMenu);
    mobileLinks.forEach((link) => link.addEventListener("click", () => isMenuOpen && toggleMenu()));
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && isMenuOpen) {
            toggleMenu();
        }
    });
}

function setupThemeControls() {
    qsa(".theme-toggle-btn").forEach((button) => {
        button.addEventListener("click", () => {
            setTheme(document.body.classList.contains("dark-theme") ? "light" : "dark");
        });
    });
}

function setTheme(theme, options = {}) {
    currentTheme = theme;
    const isDark = theme === "dark";

    document.body.classList.toggle("dark-theme", isDark);
    qs('meta[name="theme-color"]')?.setAttribute("content", isDark ? "#081122" : "#12108F");

    qsa(".theme-toggle-btn").forEach((button) => {
        button.classList.toggle("is-active", isDark);
        button.setAttribute("aria-label", isDark ? t("controls.theme.light") : t("controls.theme.dark"));
        const icon = button.querySelector("i");
        if (icon) {
            icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
        }
    });

    if (options.persist !== false) {
        localStorage.setItem("kshgoa-theme", theme);
    }
}

function setupLanguageControls() {
    qsa(".lang-btn").forEach((button) => {
        button.addEventListener("click", async () => {
            const nextLang = button.dataset.lang;
            if (!nextLang || nextLang === currentLang) return;
            await setLanguage(nextLang);
        });
    });
}

function updateLanguageButtons() {
    qsa(".lang-btn").forEach((button) => {
        const isActive = button.dataset.lang === currentLang;
        button.classList.toggle("is-active", isActive);
        button.classList.toggle("text-primary", isActive);
        button.classList.toggle("text-slate-500", !isActive);
    });
}

function setText(node, value) {
    if (node) {
        node.textContent = value;
    }
}

function setHTML(node, value) {
    if (node) {
        node.innerHTML = value;
    }
}

function setLeadingText(node, value) {
    if (node && node.childNodes.length) {
        node.childNodes[0].textContent = `${value} `;
    }
}

function applyStaticTranslations() {
    document.title = t("meta.title");
    qs('meta[name="description"]')?.setAttribute("content", t("meta.description"));

    const desktopNav = qsa("#navbar .hidden.lg\\:flex > a");
    const mobileNav = qsa("#mobile-menu .mobile-link");
    const footerQuickLinks = qsa("footer .grid > div:nth-child(2) a");
    const navKeys = ["nav.home", "nav.about", "nav.stateCommittee", "nav.districtCommittees", "nav.gallery", "nav.contact"];
    const footerKeys = ["nav.home", "footer.aboutLink", "nav.stateCommittee", "nav.districtCommittees", "footer.galleryLink", "nav.contact"];

    desktopNav.forEach((link, index) => setText(link, t(navKeys[index])));
    mobileNav.forEach((link, index) => setText(link, t(navKeys[index])));
    footerQuickLinks.forEach((link, index) => {
        if (link.lastChild) {
            link.lastChild.textContent = ` ${t(footerKeys[index])}`;
        }
    });

    setText(qs("#navbar .flex.flex-col span:last-child"), t("brand.subtitle"));
    setText(qs("#mobile-contact-info > p"), t("mobile.getInTouch"));

    const heroItems = qsa("#home .gsap-hero-item");
    setText(heroItems[0], t("hero.badge"));
    setHTML(qs("#home h1"), t("hero.title"));
    setText(qs("#home .container p"), t("hero.description"));

    const heroButtons = qsa("#home .gsap-hero-item a");
    setLeadingText(heroButtons[0], t("hero.primaryCta"));
    setText(heroButtons[1], t("hero.secondaryCta"));
    setText(qs("#home > a span"), t("hero.scroll"));

    setText(qs("#about-eyebrow"), t("about.eyebrow"));
    setText(qs("#about-title"), t("about.title"));
    setHTML(qs("#about-paragraph-one"), t("about.paragraphOne"));
    setText(qs("#about-paragraph-two"), t("about.paragraphTwo"));

    setText(qs("#about-stat-districts"), t("stats.districtCommittees"));
    setText(qs("#about-stat-members"), t("stats.registeredMembers"));
    setText(qs("#about-stat-years"), t("stats.yearsOfService"));
    setText(qs("#about-stat-workers"), t("stats.eventsSupported"));

    setText(qs("#about-history-label"), t("about.history.label"));
    setText(qs("#about-history-title"), t("about.history.title"));
    setHTML(qs("#about-history-item-1"), t("about.history.item1"));
    setHTML(qs("#about-history-item-2"), t("about.history.item2"));
    setHTML(qs("#about-history-item-3"), t("about.history.item3"));

    setText(qs("#about-objectives-label"), t("about.objectives.label"));
    setText(qs("#about-objectives-title"), t("about.objectives.title"));
    setHTML(qs("#about-objectives-item-1"), t("about.objectives.item1"));
    setHTML(qs("#about-objectives-item-2"), t("about.objectives.item2"));
    setHTML(qs("#about-objectives-item-3"), t("about.objectives.item3"));

    setText(qs("#about-welfare-label"), t("about.welfare.label"));
    setText(qs("#about-welfare-title"), t("about.welfare.title"));
    setHTML(qs("#about-welfare-item-1"), t("about.welfare.item1"));
    setHTML(qs("#about-welfare-item-2"), t("about.welfare.item2"));
    setHTML(qs("#about-welfare-item-3"), t("about.welfare.item3"));
    setHTML(qs("#about-welfare-item-4"), t("about.welfare.item4"));

    setText(qs("#about-philanthropy-label"), t("about.philanthropy.label"));
    setText(qs("#about-philanthropy-title"), t("about.philanthropy.title"));
    setHTML(qs("#about-philanthropy-item-1"), t("about.philanthropy.item1"));
    setHTML(qs("#about-philanthropy-item-2"), t("about.philanthropy.item2"));
    setHTML(qs("#about-philanthropy-item-3"), t("about.philanthropy.item3"));

    setText(qs("#about-standing-label"), t("about.standing.label"));
    setText(qs("#about-standing-title"), t("about.standing.title"));
    setHTML(qs("#about-standing-item-1"), t("about.standing.item1"));
    setHTML(qs("#about-standing-item-2"), t("about.standing.item2"));

    const stateSection = qs("#state-committee .text-center");
    if (stateSection) {
        setText(stateSection.querySelector("span"), t("stateCommittee.eyebrow"));
        setText(stateSection.querySelector("h2"), t("stateCommittee.title"));
        setText(stateSection.querySelector("p"), t("stateCommittee.description"));
    }

    const districtSection = qs("#district-committees .text-center");
    if (districtSection) {
        setText(districtSection.querySelector("span"), t("districtSection.eyebrow"));
        setText(districtSection.querySelector("h2"), t("districtSection.title"));
        setText(districtSection.querySelector("p"), t("districtSection.description"));
    }

    const activitiesSection = qs("#activities .max-w-2xl");
    if (activitiesSection) {
        setText(activitiesSection.querySelector("span"), t("activities.eyebrow"));
        setText(activitiesSection.querySelector("h2"), t("activities.title"));
        setText(activitiesSection.querySelector("p"), t("activities.description"));
    }

    const gallerySection = qs("#gallery .text-center");
    if (gallerySection) {
        setText(gallerySection.querySelector("span"), t("gallery.eyebrow"));
        setText(gallerySection.querySelector("h2"), t("gallery.title"));
        setText(gallerySection.querySelector("p"), t("gallery.description"));
    }
    setLeadingText(qs("#gallery .text-center.mt-12 a"), t("gallery.viewAll"));

    const contactIntro = qs("#contact .lg\\:w-1\\/2.flex.flex-col.justify-between > div:first-child");
    if (contactIntro) {
        setText(contactIntro.querySelector("span"), t("contact.eyebrow"));
        setText(contactIntro.querySelector("h2"), t("contact.title"));
        setText(contactIntro.querySelector("p"), t("contact.description"));
        const cards = contactIntro.querySelectorAll(".space-y-6 > div");
        if (cards[0]) {
            setText(cards[0].querySelector("h4"), t("contact.stateOffice"));
            setHTML(cards[0].querySelector("p"), t("contact.address"));
        }
        if (cards[1]) {
            setText(cards[1].querySelector("h4"), t("contact.phoneNumber"));
        }
    }

    const formCard = qs("#contact form")?.parentElement;
    if (formCard) {
        setText(formCard.querySelector("h3"), t("form.title"));
        const labels = formCard.querySelectorAll("label");
        setText(labels[0], t("form.fullName"));
        setText(labels[1], t("form.phoneNumber"));
        setText(labels[2], t("form.message"));
        const nameInput = qs("#name");
        const phoneInput = qs("#phone");
        const messageInput = qs("#message");
        if (nameInput) nameInput.placeholder = t("form.namePlaceholder");
        if (phoneInput) phoneInput.placeholder = t("form.phonePlaceholder");
        if (messageInput) messageInput.placeholder = t("form.messagePlaceholder");
        setLeadingText(formCard.querySelector('button[type="submit"]'), t("form.submit"));
    }

    const footerColumns = qsa("footer .grid > div");
    if (footerColumns[0]) {
        setText(footerColumns[0].querySelector("a span:last-child"), t("footer.badge"));
        setText(footerColumns[0].querySelector("p"), t("footer.description"));
    }
    if (footerColumns[1]) {
        setText(footerColumns[1].querySelector("h4"), t("footer.quickLinks"));
    }
    if (footerColumns[2]) {
        setText(footerColumns[2].querySelector("h4"), t("footer.topDistricts"));
        const topDistrictKeys = ["districtNames.kozhikode", "districtNames.ernakulam", "districtNames.thiruvananthapuram", "districtNames.thrissur", "districtNames.malappuram"];
        footerColumns[2].querySelectorAll("a").forEach((link, index) => {
            if (link.lastChild) {
                link.lastChild.textContent = ` ${t(topDistrictKeys[index])}`;
            }
        });
    }
    if (footerColumns[3]) {
        setText(footerColumns[3].querySelector("h4"), t("footer.contactDetails"));
    }

    const footerBottom = qs("footer .border-t");
    if (footerBottom) {
        const copyrightNode = footerBottom.querySelector("p");
        if (copyrightNode) {
            copyrightNode.innerHTML = `&copy; ${new Date().getFullYear()} ${t("footer.copyright")}`;
        }
        const footerLinks = footerBottom.querySelectorAll("a");
        setText(footerLinks[0], t("footer.privacy"));
        setText(footerLinks[1], t("footer.terms"));
    }

    setTheme(currentTheme, { persist: false });
}

function renderDynamicContent() {
    renderStateCommittee();
    renderDistricts();
    renderActivities();
    renderGallery();
}

function renderStateCommittee() {
    const container = qs("#state-committee .grid");
    if (!container) return;

    container.innerHTML = "";
    stateCommittee.forEach((member, index) => {
        const delay = (index % 3) * 0.1;
        container.innerHTML += `
            <article class="member-card member-card-premium relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/95 text-center shadow-premium transition-all duration-500 group gsap-stagger-up" data-delay="${delay}">
                <div class="member-card-glow absolute inset-x-8 top-8 h-24 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-2xl pointer-events-none"></div>
                <div class="relative px-6 pt-10 pb-8 sm:px-8">
                    <div class="member-photo-frame mx-auto mb-7 h-44 w-44 sm:h-48 sm:w-48 rounded-full p-2 shadow-[0_25px_55px_-28px_rgba(18,16,143,0.45)] transition-all duration-500 group-hover:-translate-y-2">
                        <div class="h-full w-full overflow-hidden rounded-full border-[10px] border-white bg-slate-100 shadow-inner">
                            <img src="${member.image}" alt="${member.name}" class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110">
                        </div>
                    </div>
                    <h3 class="text-[1.7rem] sm:text-[1.9rem] font-heading font-extrabold uppercase tracking-[0.06em] text-gray-900 transition-colors duration-300 group-hover:text-primary">${member.name}</h3>
                    <p class="member-role-label mt-3 text-sm sm:text-[0.95rem] font-extrabold uppercase tracking-[0.2em] text-lime-600">${t(member.positionKey)}</p>
                    <div class="member-card-line mx-auto mt-5 h-1.5 w-14 rounded-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-500 group-hover:w-24"></div>
                    <div class="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-primary">
                        <span class="h-2.5 w-2.5 rounded-full bg-accent animate-pulse"></span>
                        ${t("stateCommittee.coreTag")}
                    </div>
                </div>
            </article>
        `;
    });
}

function renderDistricts() {
    const districtGrid = qs("#district-grid");
    if (!districtGrid) return;

    districtGrid.innerHTML = "";
    districts.forEach((district, index) => {
        const delay = (index % 4) * 0.05;
        const membersHTML = district.members.map((member) => `
            <div class="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                <span class="text-sm font-bold text-gray-700">${t(member.posKey)}</span>
                <span class="text-sm text-gray-600 font-medium">${member.name}</span>
            </div>
        `).join("");

        districtGrid.innerHTML += `
            <div class="accordion-item bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg gsap-stagger-up" data-delay="${delay}">
                <button class="accordion-header w-full px-6 py-5 flex justify-between items-center bg-white text-left transition-colors hover:bg-gray-50/80">
                    <div class="flex items-center">
                        <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                            <i class="fa-solid fa-location-dot text-sm"></i>
                        </div>
                        <h3 class="text-lg font-heading font-bold text-gray-900">${t(district.nameKey)}</h3>
                    </div>
                    <i class="fa-solid fa-chevron-down text-gray-400 transition-transform duration-300 accordion-icon"></i>
                </button>
                <div class="accordion-content bg-gray-50/50">
                    <div class="p-6 pt-2">
                        <div class="space-y-1">${membersHTML}</div>
                    </div>
                </div>
            </div>
        `;
    });

    qsa(".accordion-header").forEach((header) => {
        header.addEventListener("click", function () {
            const item = this.parentElement;
            const isActive = item.classList.contains("active");
            qsa(".accordion-item").forEach((accordionItem) => accordionItem.classList.remove("active"));
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });
}

function renderActivities() {
    const content = [
        { title: t("activities.cards.conference.title"), description: t("activities.cards.conference.description") },
        { title: t("activities.cards.meetings.title"), description: t("activities.cards.meetings.description") },
        { title: t("activities.cards.training.title"), description: t("activities.cards.training.description") },
        { title: t("activities.cards.support.title"), description: t("activities.cards.support.description") }
    ];

    qsa("#activities .glass-card-dark").forEach((card, index) => {
        setText(card.querySelector("h3"), content[index].title);
        setText(card.querySelector("p"), content[index].description);
    });
}

function renderGallery() {
    const galleryGrid = qs("#gallery-grid");
    if (!galleryGrid) return;

    galleryGrid.innerHTML = "";
    galleryImages.forEach((src, index) => {
        const heights = ["h-64", "h-80", "h-96", "h-72"];
        const heightClass = heights[index % heights.length];
        const delay = index * 0.05;

        galleryGrid.innerHTML += `
            <div class="gallery-item relative overflow-hidden rounded-2xl group cursor-pointer gsap-stagger-up ${heightClass}" data-delay="${delay}">
                <img src="${src}" alt="${t("gallery.imageAlt", { number: String(index + 1) })}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out">
                <div class="gallery-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white mb-3">
                            <i class="fa-solid fa-magnifying-glass-plus"></i>
                        </div>
                        <h4 class="text-white font-heading font-bold text-xl">${t("gallery.cardTitle")}</h4>
                        <p class="text-white/80 text-sm">${t("gallery.cardDescription")}</p>
                    </div>
                </div>
            </div>
        `;
    });
}

function refreshScrollAnimations() {
    if (!gsapInitialized || !window.ScrollTrigger) return;
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsapInitialized = false;
    initGSAP();
}

function initThreeJS() {
    const container = qs("#canvas-container");
    if (!container || !window.THREE) return;

    if (threeState?.renderer?.domElement) {
        container.innerHTML = "";
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const geometries = [
        new THREE.OctahedronGeometry(2),
        new THREE.IcosahedronGeometry(1.5),
        new THREE.BoxGeometry(2, 2, 2),
        new THREE.TetrahedronGeometry(2),
        new THREE.TorusGeometry(1.5, 0.4, 16, 50)
    ];
    const colors = [0x08338A, 0x1E5BB8, 0x4F8EF7];
    const shapes = [];

    for (let index = 0; index < 40; index += 1) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const material = new THREE.MeshBasicMaterial({
            color: colors[Math.floor(Math.random() * colors.length)],
            wireframe: true,
            transparent: true,
            opacity: 0.15 + (Math.random() * 0.15)
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = (Math.random() - 0.5) * 60;
        mesh.position.y = (Math.random() - 0.5) * 40;
        mesh.position.z = (Math.random() - 0.5) * 40 - 10;
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;
        mesh.userData = {
            rotationSpeed: {
                x: (Math.random() - 0.5) * 0.01,
                y: (Math.random() - 0.5) * 0.01,
                z: (Math.random() - 0.5) * 0.01
            },
            floatSpeed: (Math.random() * 0.02) + 0.005,
            floatRange: (Math.random() * 2) + 1,
            initialY: mesh.position.y,
            timeOffset: Math.random() * Math.PI * 2
        };

        group.add(mesh);
        shapes.push(mesh);
    }

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 200;
    const posArray = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount * 3; index += 1) {
        posArray[index] = (Math.random() - 0.5) * 80;
    }
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

    const particlesMesh = new THREE.Points(
        particleGeometry,
        new THREE.PointsMaterial({ size: 0.15, color: 0x576CBC, transparent: true, opacity: 0.6 })
    );
    scene.add(particlesMesh);

    let mouseX = 0;
    let mouseY = 0;
    const halfX = window.innerWidth / 2;
    const halfY = window.innerHeight / 2;

    const onMouseMove = (event) => {
        mouseX = (event.clientX - halfX) * 0.001;
        mouseY = (event.clientY - halfY) * 0.001;
    };

    document.addEventListener("mousemove", onMouseMove);

    let time = 0;
    const animate = () => {
        time += 0.01;
        group.rotation.x += 0.05 * ((mouseY * 0.5) - group.rotation.x);
        group.rotation.y += 0.05 * ((mouseX * 0.5) - group.rotation.y);
        particlesMesh.rotation.y = time * 0.05;

        shapes.forEach((shape) => {
            shape.rotation.x += shape.userData.rotationSpeed.x;
            shape.rotation.y += shape.userData.rotationSpeed.y;
            shape.rotation.z += shape.userData.rotationSpeed.z;
            shape.position.y = shape.userData.initialY + Math.sin(time * shape.userData.floatSpeed * 50 + shape.userData.timeOffset) * shape.userData.floatRange;
        });

        renderer.render(scene, camera);
        threeState.animationId = requestAnimationFrame(animate);
    };

    const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    threeState = { renderer, animationId: null, onResize, onMouseMove };
    animate();
}

function initGSAP() {
    if (!window.gsap || !window.ScrollTrigger || gsapInitialized) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline().to(".gsap-hero-item", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2
    });

    qsa(".gsap-fade-up").forEach((element) => {
        const delay = Number(element.getAttribute("data-delay") || 0);
        gsap.fromTo(
            element,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                delay,
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    ["#about .gsap-stagger-up", "#state-committee .gsap-stagger-up", "#district-grid .gsap-stagger-up", "#activities .gsap-stagger-up", "#gallery .gsap-stagger-up"].forEach((selector) => {
        const elements = qsa(selector);
        if (!elements.length) return;

        ScrollTrigger.batch(elements, {
            start: "top 85%",
            onEnter: (batch) => gsap.to(batch, {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out"
            }),
            onLeaveBack: (batch) => gsap.set(batch, { opacity: 0, y: 50 })
        });

        gsap.set(elements, { opacity: 0, y: 50 });
    });

    qsa(".counter").forEach((counter) => {
        const target = Number.parseInt(counter.getAttribute("data-target"), 10);
        counter.innerText = "0";

        ScrollTrigger.create({
            trigger: counter,
            start: "top 90%",
            once: true,
            onEnter: () => {
                gsap.to(counter, {
                    innerHTML: target,
                    duration: 2,
                    snap: { innerHTML: 1 },
                    ease: "power1.inOut",
                    onUpdate() {
                        counter.innerHTML = Math.round(this.targets()[0].innerHTML);
                    }
                });
            }
        });
    });

    gsapInitialized = true;
}
