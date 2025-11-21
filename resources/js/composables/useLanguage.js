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
