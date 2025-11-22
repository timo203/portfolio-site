import { ref, computed } from 'vue';

const currentLang = ref('en');

const translations = {
    en: {
        nav: {
            home: 'Home',
            skills: 'Skills',
            timeline: 'Timeline',
            contact: 'Contact',
        },
        hero: {
            available: 'Available for hire',
            greeting: "Hi, I'm Timo.",
            role: 'Backend Developer & Tech Enthusiast.',
            description: 'I build robust backend systems and am currently expanding my horizons into modern frontend technologies like Vue.js and Tailwind CSS.',
            contactBtn: 'Contact Me',
            downloadBtn: 'Download CV',
        },
        skills: {
            title: 'Skills',
            subtitle: 'My technical toolkit and professional attributes.',
            hardSkills: 'Hard Skills',
            hardSkillsDesc: 'Technologies and tools I work with.',
            softSkills: 'Soft Skills',
            softSkillsDesc: 'Interpersonal and professional skills.',
        },
        timeline: {
            title: 'Timeline',
            subtitle: 'My professional journey and milestones.',
            latest: 'Latest',
            optimex: {
                date: '03/2023 - Now',
                title: 'Optimex GmbH - Fulltime Developer',
                description: 'Leading backend architecture and API development for high-scale applications.',
                details: 'In this role, I am responsible for the core backend infrastructure, ensuring scalability and performance for high-traffic applications. I work closely with the product team to translate requirements into technical specifications.',
                points: [
                    'Architected and built scalable REST APIs using Laravel.',
                    'Optimized database queries, reducing response times by 40%.',
                    'Implemented automated CI/CD pipelines with GitHub Actions.'
                ],
                logo: '/images/optimex_.png'
            },
            plusserver: {
                date: '01/08/2019 - 30/01/2023',
                title: 'Job training - Developer',
                description: "Contract & Billing Management, Network Squad, Data Center Operations, Finance & Controlling, Internal IT/Helpdesk, Logistics, Marketing, Human Resources, Sales New Business & Sales Key Account Management, System Engineering Linux, Solutions Consulting, Support",
                details: 'Completed a comprehensive vocational training program, gaining experience across various departments and technical disciplines. Specialized in software development and system administration.',
                points: [
                    'Gained hands-on experience in Linux system administration.',
                    'Developed internal tools for billing and contract management.',
                    'Rotated through key departments to understand business operations.'
                ],
                logo: '/images/plusserver.png'
            },
            workshop1: {
                date: '06/08/2018 - 10/08/2018',
                title: 'Workshop: Java',
                description: 'Die Entwicklungsumgebung Eclipse'
            },
            brunata: {
                date: '13/11/2017 - 01/12/2017',
                title: 'Internship',
                description: 'Internship at BRUNATA METRONA',
                logo: '/images/brunata.png'
            },
            workshop2: {
                date: '14/08/2017 - 18/08/2017',
                title: 'Workshop: Websites entwicklen mit HTML, CSS & JavaScript',
                description: ''
            },
            workshop3: {
                date: '10/04/2017 - 13/04/2017',
                title: 'Workshop: Homepage - Start',
                description: ''
            }
        },
        contact: {
            title: 'Get in Touch',
            subtitle: 'Have a question or want to work together?',
            cardTitle: 'Contact Me',
            cardDesc: 'Fill out the form below to send me a message.',
            name: 'Name',
            namePlaceholder: 'Your name',
            email: 'Email',
            emailPlaceholder: 'm@example.com',
            message: 'Message',
            messagePlaceholder: 'Your message...',
            sendBtn: 'Send Message',
            sending: 'Sending...',
            success: 'Message sent successfully!',
            error: 'Failed to send message. Please try again.',
        }
    },
    de: {
        nav: {
            home: 'Start',
            skills: 'Fähigkeiten',
            timeline: 'Werdegang',
            contact: 'Kontakt',
        },
        hero: {
            available: 'Verfügbar für Projekte',
            greeting: "Hi, ich bin Timo.",
            role: 'Backend Entwickler & Tech Enthusiast.',
            description: 'Ich entwickle robuste Backend-Systeme und erweitere derzeit meinen Horizont in moderne Frontend-Technologien wie Vue.js und Tailwind CSS.',
            contactBtn: 'Kontaktieren',
            downloadBtn: 'CV Herunterladen',
        },
        skills: {
            title: 'Fähigkeiten',
            subtitle: 'Mein technisches Werkzeug und professionelle Eigenschaften.',
            hardSkills: 'Fachkompetenzen',
            hardSkillsDesc: 'Technologien und Tools, mit denen ich arbeite.',
            softSkills: 'Soziale Kompetenzen',
            softSkillsDesc: 'Zwischenmenschliche und professionelle Fähigkeiten.',
        },
        timeline: {
            title: 'Werdegang',
            subtitle: 'Meine berufliche Reise und Meilensteine.',
            latest: 'Aktuell',
            optimex: {
                date: '03/2023 - Now',
                title: 'Optimex GmbH - Fulltime Developer',
                description: 'Leading backend architecture and API development for high-scale applications.',
                details: 'Verantwortlich für die Backend-Infrastruktur, Gewährleistung von Skalierbarkeit und Performance. Enge Zusammenarbeit mit dem Produktteam.',
                points: [
                    'Architektur und Entwicklung skalierbarer REST-APIs mit Laravel.',
                    'Optimierung von Datenbankabfragen, Reduzierung der Antwortzeiten um 40%.',
                    'Implementierung automatisierter CI/CD-Pipelines mit GitHub Actions.'
                ],
                logo: '/images/optimex.png'
            },
            plusserver: {
                date: '01/08/2019 - 30/01/2023',
                title: 'Job training - Developer',
                description: "Contract & Billing Management, Network Squad, Data Center Operations, Finance & Controlling, Internal IT/Helpdesk, Logistics, Marketing, Human Resources, Sales New Business & Sales Key Account Management, System Engineering Linux, Solutions Consulting, Support",
                details: 'Umfassende Ausbildung mit Erfahrung in verschiedenen Abteilungen und technischen Disziplinen. Spezialisierung auf Softwareentwicklung und Systemadministration.',
                points: [
                    'Praktische Erfahrung in der Linux-Systemadministration.',
                    'Entwicklung interner Tools für Abrechnung und Vertragsmanagement.',
                    'Rotation durch Schlüsselabteilungen zum Verständnis der Geschäftsabläufe.'
                ],
                logo: '/images/plusserver.png'
            },
            workshop1: {
                date: '06/08/2018 - 10/08/2018',
                title: 'Workshop: Java',
                description: 'Die Entwicklungsumgebung Eclipse'
            },
            brunata: {
                date: '13/11/2017 - 01/12/2017',
                title: 'Internship',
                description: 'Internship at BRUNATA METRONA',
            },
            workshop2: {
                date: '14/08/2017 - 18/08/2017',
                title: 'Workshop: Websites entwicklen mit HTML, CSS & JavaScript',
                description: ''
            },
            workshop3: {
                date: '10/04/2017 - 13/04/2017',
                title: 'Workshop: Homepage - Start',
                description: ''
            }
        },
        contact: {
            title: 'Kontakt aufnehmen',
            subtitle: 'Haben Sie eine Frage oder möchten Sie zusammenarbeiten?',
            cardTitle: 'Schreib mir',
            cardDesc: 'Fülle das Formular aus, um mir eine Nachricht zu senden.',
            name: 'Name',
            namePlaceholder: 'Dein Name',
            email: 'E-Mail',
            emailPlaceholder: 'm@beispiel.de',
            message: 'Nachricht',
            messagePlaceholder: 'Deine Nachricht...',
            sendBtn: 'Nachricht senden',
            sending: 'Sende...',
            success: 'Nachricht erfolgreich gesendet!',
            error: 'Fehler beim Senden der Nachricht. Bitte versuche es erneut.',
        }
    }
};

export function useLanguage() {
    const toggleLanguage = () => {
        currentLang.value = currentLang.value === 'en' ? 'de' : 'en';
    };

    const t = computed(() => translations[currentLang.value]);

    return {
        currentLang,
        toggleLanguage,
        t
    };
}
