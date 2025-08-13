// Language toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    const langText = langToggle.querySelector('.lang-text');
    
    // Translation dictionary
    const translations = {
        'en': {
            // Navigation
            'nav_home': 'Home',
            'nav_services': 'Services',
            'nav_work': 'Work',
            'nav_about': 'About',
            'nav_testimonials': 'Testimonials',
            'nav_contact': 'Contact',
            'nav_cta': 'Get Started',
            
            // Hero Section
            'hero_title': 'Creating Digital Experiences That Inspire',
            'hero_subtitle': 'We design and develop modern websites and applications that help businesses connect with their audience and achieve their goals.',
            'hero_cta_primary': 'View Our Work',
            'hero_cta_secondary': 'Get in Touch',
            'hero_stat_1_number': '15+',
            'hero_stat_1_text': 'Years Experience',
            'hero_stat_2_number': '350+',
            'hero_stat_2_text': 'Projects Completed',
            'hero_stat_3_number': '99%',
            'hero_stat_3_text': 'Client Satisfaction',
            
            // Services Section
            'services_title': 'Our Services',
            'services_subtitle': 'Expert solutions tailored to your business needs',
            'service_1_title': 'Web Design',
            'service_1_desc': 'Custom website designs that look beautiful and function flawlessly. We create responsive, user-friendly interfaces that engage your visitors.',
            'service_2_title': 'Web Development',
            'service_2_desc': 'We build modern, fast, and scalable websites and web applications using the latest technologies and best practices.',
            'service_3_title': 'Responsive Design',
            'service_3_desc': 'Websites that look and work perfectly on all devices, from desktop computers to mobile phones and tablets.',
            'service_4_title': 'UI/UX Design',
            'service_4_desc': 'User-centered design that prioritizes usability, accessibility, and creating meaningful experiences for your audience. We focus on creating interfaces that are intuitive and engaging while maintaining brand consistency.',
            'service_link': 'Learn more',
            
            // Portfolio Section
            'portfolio_title': 'Our Work',
            'portfolio_subtitle': 'Explore some of our recent projects and creative solutions',
            'portfolio_filter_all': 'All',
            'portfolio_filter_web': 'Web Design',
            'portfolio_filter_app': 'App Design',
            'portfolio_filter_brand': 'Branding',
            'portfolio_link': 'View Project',
            
            // About Section
            'about_title': 'About Us',
            'about_subtitle': 'The story behind our passion for digital excellence',
            'about_hero_title': 'Our Story',
            'about_hero_desc': 'Founded in 2020, we began with a simple mission: to create digital experiences that delight users and drive business growth. Over the years, we\'ve evolved into a full-service digital agency, working with clients across industries to solve complex challenges with innovative solutions.',
            'about_stat_1_number': '5+',
            'about_stat_1_text': 'Years Experience',
            'about_stat_2_number': '100+',
            'about_stat_2_text': 'Projects Completed',
            'about_stat_3_number': '2+',
            'about_stat_3_text': 'Team Members',
            'about_feature_1_title': 'Creative Approach',
            'about_feature_1_desc': 'We blend artistic vision with strategic thinking to create designs that are both beautiful and effective.',
            'about_feature_2_title': 'Attention to Detail',
            'about_feature_2_desc': 'Every pixel matters. We obsess over the small details that make a big difference in user experience.',
            'about_feature_3_title': 'Timely Delivery',
            'about_feature_3_desc': 'We understand the importance of deadlines and consistently deliver projects on time and within budget.',
            'about_feature_4_title': 'Client Partnership',
            'about_feature_4_desc': 'We view our clients as partners, working collaboratively to achieve shared goals and long-term success.',
            'about_cta_title': 'Ready to Start Your Project?',
            'about_cta_desc': 'Whether you need a new website, a redesign, or a complex web application, we\'re here to help bring your vision to life.',
            'about_cta_button': 'Get in Touch',
            
            // Testimonials Section
            'testimonials_title': 'What Our Clients Say',
            'testimonials_subtitle': 'Feedback from businesses we\'ve helped succeed in the digital world',
            
            // Contact Section
            'contact_title': 'Get In Touch',
            'contact_subtitle': 'Ready to start your next project? We\'d love to hear from you',
            'contact_address_title': 'Address',
            'contact_address': '123 Design Street, Creative City, 12345',
            'contact_email_title': 'Email',
            'contact_email': 'info@designstudio.com',
            'contact_phone_title': 'Phone',
            'contact_phone': '(123) 456-7890',
            'contact_hours_title': 'Working Hours',
            'contact_hours': 'Mon-Fri: 9AM - 6PM',
            'contact_social_title': 'Connect with us',
            'contact_form_title': 'Send us a message',
            'contact_form_desc': 'Fill out the form below and we\'ll get back to you as soon as possible.',
            'contact_form_name': 'Your Name',
            'contact_form_email': 'Your Email',
            'contact_form_subject': 'Subject',
            'contact_form_message': 'Your Message',
            'contact_form_button': 'Send Message',
            
            // Footer
            'footer_copyright': '© 2025 Midway Web Design. All rights reserved.',
            'footer_privacy': 'Privacy Policy',
            'footer_terms': 'Terms of Service'
        },
        'es': {
            // Navegación
            'nav_home': 'Inicio',
            'nav_services': 'Servicios',
            'nav_work': 'Proyectos',
            'nav_about': 'Nosotros',
            'nav_testimonials': 'Testimonios',
            'nav_contact': 'Contacto',
            'nav_cta': 'Comenzar',
            
            // Sección Hero
            'hero_title': 'Creando Experiencias Digitales Que Inspiran',
            'hero_subtitle': 'Diseñamos y desarrollamos sitios web y aplicaciones modernas que ayudan a las empresas a conectar con su audiencia y alcanzar sus objetivos.',
            'hero_cta_primary': 'Ver Nuestro Trabajo',
            'hero_cta_secondary': 'Ponte en Contacto',
            'hero_stat_1_number': '15+',
            'hero_stat_1_text': 'Años de Experiencia',
            'hero_stat_2_number': '350+',
            'hero_stat_2_text': 'Proyectos Completados',
            'hero_stat_3_number': '99%',
            'hero_stat_3_text': 'Satisfacción del Cliente',
            
            // Sección de Servicios
            'services_title': 'Nuestros Servicios',
            'services_subtitle': 'Soluciones expertas adaptadas a las necesidades de tu negocio',
            'service_1_title': 'Diseño Web',
            'service_1_desc': 'Diseños de sitios web personalizados que se ven hermosos y funcionan perfectamente. Creamos interfaces responsivas y fáciles de usar que atraen a tus visitantes.',
            'service_2_title': 'Desarrollo Web',
            'service_2_desc': 'Construimos sitios web y aplicaciones web modernas, rápidas y escalables usando las últimas tecnologías y mejores prácticas.',
            'service_3_title': 'Diseño Responsivo',
            'service_3_desc': 'Sitios web que se ven y funcionan perfectamente en todos los dispositivos, desde computadoras de escritorio hasta teléfonos móviles y tabletas.',
            'service_4_title': 'Diseño UI/UX',
            'service_4_desc': 'Diseño centrado en el usuario que prioriza la usabilidad, accesibilidad y creación de experiencias significativas para tu audiencia. Nos enfocamos en crear interfaces que sean intuitivas y atractivas manteniendo la consistencia de marca.',
            'service_link': 'Saber más',
            
            // Sección de Portafolio
            'portfolio_title': 'Nuestro Trabajo',
            'portfolio_subtitle': 'Explora algunos de nuestros proyectos recientes y soluciones creativas',
            'portfolio_filter_all': 'Todos',
            'portfolio_filter_web': 'Diseño Web',
            'portfolio_filter_app': 'Diseño de Apps',
            'portfolio_filter_brand': 'Branding',
            'portfolio_link': 'Ver Proyecto',
            
            // Sección Acerca de
            'about_title': 'Sobre Nosotros',
            'about_subtitle': 'La historia detrás de nuestra pasión por la excelencia digital',
            'about_hero_title': 'Nuestra Historia',
            'about_hero_desc': 'Fundado en 2020, comenzamos con una misión simple: crear experiencias digitales que deleiten a los usuarios e impulsen el crecimiento empresarial. A lo largo de los años, hemos evolucionado hasta convertirnos en una agencia digital de servicio completo, trabajando con clientes de diferentes industrias para resolver desafíos complejos con soluciones innovadoras.',
            'about_stat_1_number': '5+',
            'about_stat_1_text': 'Años de Experiencia',
            'about_stat_2_number': '100+',
            'about_stat_2_text': 'Proyectos Completados',
            'about_stat_3_number': '2+',
            'about_stat_3_text': 'Miembros del Equipo',
            'about_feature_1_title': 'Enfoque Creativo',
            'about_feature_1_desc': 'Combinamos visión artística con pensamiento estratégico para crear diseños que sean tanto hermosos como efectivos.',
            'about_feature_2_title': 'Atención al Detalle',
            'about_feature_2_desc': 'Cada píxel importa. Nos obsesionamos con los pequeños detalles que marcan una gran diferencia en la experiencia del usuario.',
            'about_feature_3_title': 'Entrega a Tiempo',
            'about_feature_3_desc': 'Entendemos la importancia de los plazos y entregamos proyectos consistentemente a tiempo y dentro del presupuesto.',
            'about_feature_4_title': 'Asociación con Clientes',
            'about_feature_4_desc': 'Vemos a nuestros clientes como socios, trabajando colaborativamente para lograr objetivos compartidos y éxito a largo plazo.',
            'about_cta_title': '¿Listo para Comenzar tu Proyecto?',
            'about_cta_desc': 'Ya sea que necesites un nuevo sitio web, un rediseño o una aplicación web compleja, estamos aquí para ayudar a hacer realidad tu visión.',
            'about_cta_button': 'Ponte en Contacto',
            
            // Sección de Testimonios
            'testimonials_title': 'Lo Que Dicen Nuestros Clientes',
            'testimonials_subtitle': 'Comentarios de empresas a las que hemos ayudado a tener éxito en el mundo digital',
            
            // Sección de Contacto
            'contact_title': 'Ponte en Contacto',
            'contact_subtitle': '¿Listo para comenzar tu próximo proyecto? Nos encantaría saber de ti',
            'contact_address_title': 'Dirección',
            'contact_address': 'Calle Diseño 123, Ciudad Creativa, 12345',
            'contact_email_title': 'Correo Electrónico',
            'contact_email': 'info@designstudio.com',
            'contact_phone_title': 'Teléfono',
            'contact_phone': '(123) 456-7890',
            'contact_hours_title': 'Horario Laboral',
            'contact_hours': 'Lun-Vie: 9AM - 6PM',
            'contact_social_title': 'Conéctate con nosotros',
            'contact_form_title': 'Envíanos un mensaje',
            'contact_form_desc': 'Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.',
            'contact_form_name': 'Tu Nombre',
            'contact_form_email': 'Tu Correo Electrónico',
            'contact_form_subject': 'Asunto',
            'contact_form_message': 'Tu Mensaje',
            'contact_form_button': 'Enviar Mensaje',
            
            // Pie de página
            'footer_copyright': '© 2025 Midway Web Design. Todos los derechos reservados.',
            'footer_privacy': 'Política de Privacidad',
            'footer_terms': 'Términos de Servicio'
        }
    };
    
    // Check for saved language preference
    let currentLang = localStorage.getItem('language') || 'en';
    
    // Initialize page with correct language
    updateLanguage(currentLang);
    
    // Toggle language when button is clicked
    langToggle.addEventListener('click', function() {
        // Toggle between English and Spanish
        currentLang = currentLang === 'en' ? 'es' : 'en';
        
        // Update language text in button
        langText.textContent = currentLang.toUpperCase();
        
        // Save preference
        localStorage.setItem('language', currentLang);
        
        // Update page content
        updateLanguage(currentLang);
    });
    
    // Function to update all text content on the page
    function updateLanguage(lang) {
        // Update button text
        langText.textContent = lang.toUpperCase();
        
        // Update navigation items
        document.querySelectorAll('.nav-item').forEach(item => {
            const link = item.querySelector('.nav-link');
            if (!link) return;
            
            // Skip the theme and language toggle items
            if (item.classList.contains('theme-toggle-wrapper') || 
                item.classList.contains('lang-toggle-wrapper')) {
                return;
            }
            
            // Get the href to determine which nav item this is
            const href = link.getAttribute('href');
            
            if (href === '#home') {
                link.textContent = translations[lang]['nav_home'];
            } else if (href === '#services') {
                link.textContent = translations[lang]['nav_services'];
            } else if (href === '#portfolio') {
                link.textContent = translations[lang]['nav_work'];
            } else if (href === '#about') {
                link.textContent = translations[lang]['nav_about'];
            } else if (href === '#testimonials') {
                link.textContent = translations[lang]['nav_testimonials'];
            } else if (href === '#contact') {
                if (item.classList.contains('nav-cta')) {
                    link.textContent = translations[lang]['nav_cta'];
                } else {
                    link.textContent = translations[lang]['nav_contact'];
                }
            }
        });
        
        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }
});