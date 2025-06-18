// Objeto que contiene todas las traducciones
const translations = {
    // Sección Intro
    'name': {
        spanish: 'Fran Cortés Delgado',
        english: 'Fran Cortés Delgado'
    },
    'title': {
        spanish: 'Ingeniero de Software',
        english: 'Software Engineer'
    },
    'motto': {
        spanish: 'Pasión por la tecnología, compromiso con la excelencia.',
        english: 'Passion for technology, commitment to excellence.'
    },
    'cv-text': {
        spanish: 'Currículum',
        english: 'Resume'
    },
    
    // Navegación - Header
    'nav-home': {
        spanish: 'Inicio',
        english: 'Home'
    },
    'nav-about': {
        spanish: 'Sobre mí',
        english: 'About Me'
    },
    'nav-experience': {
        spanish: 'Experiencia',
        english: 'Experience'
    },
    'nav-projects': {
        spanish: 'Proyectos',
        english: 'Projects'
    },
    'nav-education': {
        spanish: 'Educación',
        english: 'Education'
    },
    'nav-contact': {
        spanish: 'Contacto',
        english: 'Contact'
    },
    
    // Sección About Me
    'about-title': {
        spanish: '¿Quién soy?',
        english: 'Who am I?'
    },
    'profile-greeting': {
        spanish: 'Fran Cortés Delgado',
        english: 'Fran Cortés Delgado'
    },
    'profile-contact': {
        spanish: 'Más sobre mí',
        english: 'More about me'
    },
    
    // Traducciones de highlight items
    'highlight-education': {
        spanish: 'Ing. Informático',
        english: 'Computer Engineer'
    },
    'highlight-web': {
        spanish: 'Desarrollo Web Full-Stack',
        english: 'Full-Stack Web Dev'
    },
    'highlight-mobile': {
        spanish: 'Desarrollo Móvil',
        english: 'Mobile Development'
    },
    
    // Declaración personal
     // Declaración personal
  "statement-text": {
    spanish: `
<ul>
  <li>¡Hola! 👋 Soy Fran, ingeniero informático apasionado por la IA.</li>
  <li>Transformo ideas en productos finales: desde agentes LLM para ciberseguridad hasta apps web y móviles.</li>
  <li>- Actualmente soy <strong>investigador en IA</strong> en la <strong>Universidad de Murcia</strong> (graduado con honores).</li>
  <li>- Colaboré en Dublín con <strong>IBM</strong> desarrollando un framework de agentes LLM para automatizar red teaming.</li>
  <li>- Trabajé como Ingeniero <strong>Back-End</strong> en <strong>Vodafone</strong> Innovation Campus (Málaga): microservicios con Spring Boot, MongoDB, Kafka y Docker (metodologías ágiles).</li>
  <li>- Fui <strong>Lead AI researcher</strong> (ASR) en la startup murciana Bemyvega, dirigiendo un equipo de 3 personas.</li>
  <li>- Fundé la ed-tech <strong>“MiSintaxis”</strong> durante la carrera (100 000 descargas; premio al mejor TFG, 10/10).</li>
  <li>Divulgo IA en redes como <code>@francordel.ia</code>.</li>
</ul>`,

    english: `
<ul>
  <li>Hi! 👋 I am Fran. A computer engineer passionate about AI.</li>
  <li>I turn ideas into products—from LLM-based cybersecurity agents to web &amp; mobile apps.</li>
  <li>- I’m currently an <strong>AI Researcher</strong> at the <strong>University of Murcia</strong> (graduated with honors).</li>
  <li>- I collaborated with <strong>IBM</strong> in Dublin on an LLM-agent framework for automating red teaming at Trinity Campus.</li>
  <li>- I worked as a <strong>Back-end engineer</strong> at <strong>Vodafone</strong> Innovation Campus (Málaga): microservices with Spring Boot, MongoDB, Kafka, Docker (agile methodologies).</li>
  <li>- <strong>Lead AI researcher (ASR)</strong> at Murcian start-up Bemyvega, managing a three-person team.</li>
  <li>- I founded the ed-tech <strong>“MiSintaxis”</strong> during my degree (100 000 downloads; best BSc thesis, 10/10).</li>
  <li>I share AI insights on social media as <code>@francordel.ia</code>.</li>
</ul>` },
    
    
    // Habilidades
    'skills-title': {
        spanish: 'Habilidades',
        english: 'Skills' 
    },
    'skill-1': {
        spanish: 'MLOPs, Git y Agile',
        english: 'MLOPs, Git and Agile'
    },
    'skill-2': {
        spanish: 'FL, Red Teaming a LLMs y Pentesting',
        english: 'FL, Red Teaming to LLMs and Pentesting'
    },
    'skill-3': {
        spanish: 'LLMs, DL y ML',
        english: 'LLMs, DL and ML '
    },
    
    'skill-4': {
        spanish: 'Python',
        english: 'Python'
    },
    'skill-5': {
        spanish: 'Back End Engineering Java ',
        english: 'Back End Engineering Java '
    },
    
    // Sección Experience
    'experience-title': {
        spanish: 'Experiencia',
        english: 'Experience'
    },
    
    // Sección Projects
    'projects-title': {
        spanish: 'Proyectos',
        english: 'Projects'
    },
    
    // Sección Education
    'education-title': {
        spanish: 'Educación',
        english: 'Education'
    },
    
    // Sección Contact
    'contact-title': {
        spanish: 'Contacto',
        english: 'Contact'
    },
    'contact-text': {
        spanish: '¿Interesado en conectar? Elige el método que prefieras:',
        english: 'Interested in connecting? Choose your preferred method:'
    },
    
    // Footer
    'footer-text': {
        spanish: '© 2025 Fran Cortés Delgado - Todos los derechos reservados.',
        english: '© 2025 Fran Cortés Delgado- All rights reserved.'
    }
};

// Función para actualizar todos los elementos traducibles en la página
function updatePageContent(language) {
    // Obtener todos los elementos que tienen atributos data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key && translations[key] && translations[key][language]) {
            const translation = translations[key][language];
            if (translation.includes('<')) {
                element.innerHTML = translation;      // permite listas, enlaces, etc.
            } else {
                element.textContent = translation;   // texto plano
            }
        }
    });

    // Aplicar traducciones por ID
    Object.keys(translations).forEach(key => {
        const element = document.getElementById(key);
        if (element && translations[key][language]) {
            const translation = translations[key][language];
            if (translation.includes('<')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    // Actualizar atributos especiales
    document.querySelectorAll('[data-i18n-attr]').forEach(element => {
        const data = element.getAttribute('data-i18n-attr');
        if (data) {
            const [attr, key] = data.split(',');
            if (translations[key] && translations[key][language]) {
                element.setAttribute(attr, translations[key][language]);
            }
        }
    });

    // Actualizar visibilidad de los contenedores de idioma
    const container1 = document.getElementById('language-container');
    const container2 = document.getElementById('language-container2');
    if (container1 && container2) {
        container1.style.display = language === 'spanish' ? 'flex' : 'none';
        container2.style.display = language === 'english' ? 'flex' : 'none';
    }

    // Guardar en localStorage
    localStorage.setItem('language', language);

    // Lanzar evento si aún no lo ha hecho esta llamada
    if (!updatePageContent._justUpdated) {
        updatePageContent._justUpdated = true;
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language, triggeredByUpdate: true }
        }));
        updatePageContent._justUpdated = false;
    }
}

// Función para inicializar el idioma
function initializeLanguage() {
    let savedLanguage = localStorage.getItem('language');
    if (!savedLanguage) {
        const browserLanguage = navigator.language;
        savedLanguage = browserLanguage.startsWith('es') ? 'spanish' : 'english';
        localStorage.setItem('language', savedLanguage);
    }

    updatePageContent(savedLanguage);
    document.documentElement.setAttribute('data-language', savedLanguage);
}

// Listener de cambio de idioma
document.addEventListener('languageChanged', (event) => {
    const lang = event?.detail?.language;
    const internal = event?.detail?.triggeredByUpdate;
    if (!internal && lang) {
        updatePageContent(lang);
        document.documentElement.setAttribute('data-language', lang);
    }
});

// Inicializar
document.addEventListener('DOMContentLoaded', initializeLanguage);

// Botones de cambio de idioma
document.addEventListener('DOMContentLoaded', () => {
    const languageSwitchers = document.querySelectorAll('[id^="spanish-select"], [id^="english-select"]');
    languageSwitchers.forEach(element => {
        element.addEventListener('click', (event) => {
            const language = event.currentTarget.getAttribute('data-language');
            if (language) {
                updatePageContent(language);
                document.documentElement.setAttribute('data-language', language);
            }
        });
    });
});