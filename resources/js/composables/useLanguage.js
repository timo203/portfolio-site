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
                title: 'Optimex Services GmbH - Fulltime Developer',
                description: 'After completing my company project work at plusserver, I started working at Optimex as a full-time developer and, one month later, completed my training here by retaking the audit.',
                details: 'Solely responsible for the maintenance and further development of the shop system through various API connections, expansion of the admin CMS features, and data analysis. Here are some of the challenges I have tackled so far:',
                points: [
                    'Adaptation of the shop system to PHP 8 and subsequent migration to a new shop version due to an obsolete version.',
                    'Implementation of automated shipping APIs such as DHL and DHL Express.',
                    'Implementation of OAuth due to the replacement of an obsolete authentication method.',
                    'Automation of tax data maintenance through a cron job-controlled script that validates country-specific VAT rates and securely integrates changes into the system.',
                    'Clearer visualization of product relationships and their editing through the use of Drawflow and Vue.js.',
                    'Development and deployment of a Laravel application for the rapid identification and display of shipping labels using shipment references as barcode scans, including automated access to the SFTP export directory via shipment references.'
                ]
            },
            plusserver: {
                date: '01/08/2019 - 30/01/2023',
                title: 'plusserver GmbH - training as IT specialist in application development',
                description: "Comprehensive training with experience in various departments and technical disciplines. Specialization in software development and system administration.",
                details: 'As part of the general rotation for trainees, I got to know the following specialist departments and areas of the company and successfully completed internships in them:',
                points: [
                    'Contract & Billing Management',
                    'Network Squad',
                    'Data Center Operations',
                    'Finance & Controlling',
                    'Internal IT/Helpdesk',
                    'Logistics',
                    'Marketing',
                    'Human Resources',
                    'Sales New Business & Sales Key Account Management',
                    'System Engineering Linux',
                    'Solutions Consulting',
                    'Support'
                ]
            },
            workshop1: {
                date: '06/08/2018 - 10/08/2018',
                title: 'Workshop: Java',
                description: 'Workshop on Java by sk stiftung jugend und medien',
                details: 'Workshop content:',
                points: [
                    'Main function, input/output, comments',
                    'Variables (naming conventions, definition)',
                    'Operators (basic arithmetic operations, modulo)',
                    'Branching (comparison and logical operators)',
                    'Loops',
                    'Random numbers',
                    'Functions',
                    'Arrays',
                    'The String class'
                ]
            },
            brunata: {
                date: '13/11/2017 - 01/12/2017',
                title: 'BRUNTA-METRONA GmbH - Career orientation internship',
                description: 'Career orientation internship at BRUNATA METRONA',
                details: 'During the internship, I was primarily responsible for the following tasks:',
                points: [
                    'Installing and managing software',
                    'Installing and managing hardware',
                    'Introduction to SQL and programming with Java',
                    'Software testing'
                ]
            },
            workshop2: {
                date: '14/08/2017 - 18/08/2017',
                title: 'Workshop: Developing websites with HTML, CSS & JavaScript',
                description: 'Workshop on HTML, CSS & JavaScript by sk stiftung jugend und medien',
                details: 'Workshop content:',
                points: [
                    'HTML Fundamentals: Text, images, links, defining sections (div)',
                    'Integrating CSS into HTML: inline, file-wide, external file',
                    'CSS Rules: Text formatting, sections, images',
                    'Background: Images and color',
                    'Floating images and sections',
                    'Links, interactive design',
                    'Positioning: absolute, relative, fixed',
                    'CSS Selectors: Tags, classes, IDs',
                    'Designing a CSS-based layout',
                    'Integrating JavaScript into HTML',
                    'Fundamentals: Functions, event handlers, objects/DOM',
                    'jQuery'
                ]
            },
            workshop3: {
                date: '10/04/2017 - 13/04/2017',
                title: 'Workshop: Homepage - Start',
                description: 'Workshop on the Fundamentals of Website Design',
                details: 'Workshop Content:',
                points: [
                    'Fundamentals of Web Design',
                    'HTML Structure and the Most Important HTML Elements',
                    'Layout and Positioning of Page Content with CSS',
                    'Using Editors: Notepad++',
                    'Fundamentals of Image Editing for the Web',
                    'Legal Aspects (Copyright)',
                    'Creating Your Own Website',
                    'Publishing Your Website with FTP Upload'
                ]
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
                date: '03/2023 - Jetzt',
                title: 'Optimex Services GmbH - Fulltime Developer',
                description: 'Nach Abschluss der betrieblichen Projektarbeit bei plusserver, habe ich bei Optimex als Vollzeitentwickler angefangen zu arbeiten und einen Monat später durch wiederholte Ablegung der Wirtschaftsprüfung meine Ausbildung hier volllständig abgeschlossen. ',
                details: 'Alleinig verantwortlich für die Instandhaltung und Weiterentwicklung des Shop-Systems druch vielseite API anbindungen, erweiterung der Admin-CMS Features und Datenauswertungen. Hier einige Herausforderungen, die ich hier bisher bewältigen durfte:',
                points: [
                    'Anpassung des Shop-Systems an PHP 8 und spätere Migration auf neue Shop Version aufgrund obsoleten Shop Version.',
                    'Implementierung von automatisierten Versand APIs wie DHL, DHL Express',
                    'Implementierung von OAuth aufgrund ablösung einer obsoleten Authentifizierungs Methode.',
                    'Automatisierung der Steuerdatenpflege durch ein Cronjob-gesteuertes Script, das länderspezifische MwSt.-Sätze validiert und Änderungen revisionssicher im System übernimmt.',
                    'Übersichtlichere Veranschaulichung der Produktrelationen darstellen und diese ebenfalls darüber bearbeiten durhc die Nutzung von Drawflow und Vue.js.',
                    'Entwicklung und Deployment einer Laravel-Anwendung zur schnellen Identifikation und Anzeige von Versandlabels mittels Sendungsreferenz als Barcode-Scan, inklusive automatisiertem Zugriff auf das SFTP-Exportverzeichnis, mittels Sendungsrefernz.'
                ]
            },
            plusserver: {
                date: '01/08/2019 - 30/01/2023',
                title: 'plusserver GmbH - Ausbildung als Fachinformatiker Anwendungsentwicklung',
                description: "Umfassende Ausbildung mit Erfahrung in verschiedenen Abteilungen und technischen Disziplinen. Spezialisierung auf Softwareentwicklung und Systemadministration.",
                details: 'Im Rahmen der allgemeinen Rotation für Auszubildende habe ich folgende Fachabteilungen und Bereiche des Unternehmens kennengelernt und in diesen erfolgreich hospitiert:',
                points: [
                    'Contract & Billing Management',
                    'Network Squad',
                    'Data Center Operations',
                    'Finance & Controlling',
                    'Internal IT/Helpdesk',
                    'Logistics',
                    'Marketing',
                    'Human Resources',
                    'Sales New Business & Sales Key Account Management',
                    'System Engineering Linux',
                    'Solutions Consulting',
                    'Support'
                ]
            },
            workshop1: {
                date: '06/08/2018 - 10/08/2018',
                title: 'Workshop: Java',
                description: 'Workshop über Java von sk stiftung jugend und medien',
                details: 'Workshop Inhalte:',
                points: [
                    'Hauptfunktion, Ein-/Ausgabe, Kommentare',
                    'Variablen (Namensregeln, Definition)',
                    'Operatoren (Grundrechenarten, Modulo)',
                    'Verzweigungen (Vergleichs- und logische Operatoren)',
                    'Schleifen',
                    'Zufallszahlen',
                    'Funktionen',
                    'Arrays',
                    'Die Klasse String'
                ]
            },
            brunata: {
                date: '13/11/2017 - 01/12/2017',
                title: 'BRUNATA-METRONA GmbH - Berufswahlpraktikum',
                description: 'Berufswahlpraktikum bei BRUNATA-METRONA',
                details: 'Im Rahmen des Praktikums war ich im Wesentlichen mit folgenden Aufgaben betraut:',
                points: [
                    'Installieren und verwalten von Software',
                    'Installieren und verwalten von Hardware',
                    'Einführen in SQL sowie Programmierung mit Java',
                    'Testen von Software'
                ]
            },
            workshop2: {
                date: '14/08/2017 - 18/08/2017',
                title: 'Workshop: Websites entwickeln mit HTML, CSS & JavaScript',
                description: 'Workshop über HTML, CSS & JavaScript von sk stiftung jugend und medien',
                details: 'Workshop Inhalte:',
                points: [
                    'HTML-Grundgerüst',
                    'HTML-Grundlagen: Text, Bilder, Links, Bereiche definieren (div)',
                    'CSS in HTML einbinden: inline, dateiweit, externe Datei',
                    'CSS-Regeln: Textgestaltung, Abschnitte, Bilder',
                    'Hintergrund: Bilder und Farbe',
                    'Bilder und Bereiche umfließen lassen (Float)',
                    'Links, interaktive Gestaltung',
                    'Positionierung: absolute, relative, fixed',
                    'CSS Selektoren: Tags, Klassen, IDs',
                    'Gestalten eines CSS-basierten Layouts',
                    'JavaScript in HTML einbinden',
                    'Grundlagen: Funktionen, Eventhandler, Objekte/DOM',
                    'jQuery'
                ]
            },
            workshop3: {
                date: '10/04/2017 - 13/04/2017',
                title: 'Workshop: Homepage - Start',
                description: 'Workshop über Grundlagen der Homepagegestaltung',
                details: 'Workshop Inhalte:',
                points: [
                    'Grundlagen des Webdesigns',
                    'HTML-Struktur und die wichtigsten HTML-Elemente',
                    'Layout und Positionierung von Seiteninhalten mit CSS',
                    'Einsatz von Editoren: Notepad++',
                    'Grundlagen der Bildbearbeitung für das WWW',
                    'Rechtliche Aspekte (Urheberrecht)',
                    'Erstellung einer eigenen Homepage',
                    'Homepage ins Netz stellen mit FTP-Upload'
                ]
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
