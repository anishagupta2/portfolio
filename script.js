document.addEventListener('DOMContentLoaded', () => {

  // --- DATA ---
  const experienceData = [
    {
      school: 'Gayatri Public School',
      duration: 'April 2019 - Present',
      role: 'Teacher (Classes 6-8)',
      description: 'Currently fostering a dynamic and supportive learning environment for middle school students, focusing on curriculum development and student engagement.'
    },
    {
      school: 'Shivalik Cambridge College',
      duration: '2016 - March 2019',
      role: 'Teacher',
      description: 'Taught a range of subjects, implementing innovative teaching strategies to improve student comprehension and performance.'
    },
    {
      school: 'Vijaya International School',
      duration: '2015 - 2016',
      role: 'Teacher',
      description: 'Began my teaching career by creating an inclusive classroom atmosphere and developing foundational skills in young learners.'
    }
  ];

  const qualificationsData = [
    {
      degree: 'M.Sc.',
      institution: 'Dr. Bhimrao Ambedkar University',
      icon: 'academicCap'
    },
    {
      degree: 'B.Sc.',
      institution: 'Dr. Bhimrao Ambedkar University',
      icon: 'academicCap'
    },
    {
      degree: 'PG Diploma in EBT',
      institution: 'Dayal Bagh College',
      icon: 'documentText'
    },
    {
      degree: 'B.Ed.',
      institution: 'Dr. Bhimrao Ambedkar University',
      icon: 'academicCap'
    },
    {
      degree: 'CTET Qualified',
      institution: 'Central Teacher Eligibility Test',
      icon: 'checkBadge'
    },
  ];

  // --- ICONS ---
  const icons = {
    briefcase: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 0 1-2.25 2.25H5.92a2.25 2.25 0 0 1-2.25-2.25v-4.07a2.25 2.25 0 0 1 2.25-2.25h1.5a2.25 2.25 0 0 1 2.25 2.25v.64a.75.75 0 0 0 1.5 0v-.64a2.25 2.25 0 0 1 2.25-2.25h1.5a2.25 2.25 0 0 1 2.25 2.25Z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V7.5A2.25 2.25 0 0 0 18 5.25h-5.25A2.25 2.25 0 0 0 10.5 7.5v4.5a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 .75-.75V15Z"></path>
      </svg>`,
    academicCap: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path>
      </svg>`,
    checkBadge: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>`,
    documentText: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"></path>
      </svg>`
  };

  // --- RENDER FUNCTIONS ---
  const renderExperience = () => {
    const container = document.getElementById('experience-timeline');
    if (!container) return;

    const html = experienceData.map((exp, index) => {
      const isLeft = index % 2 !== 0;
      const alignmentClass = isLeft ? 'md:text-right' : 'md:text-left';
      const flexDirectionClass = isLeft ? 'md:flex-row-reverse' : '';

      return `
        <div class="mb-8 flex md:justify-between items-center w-full ${flexDirectionClass}">
          <div class="hidden md:block w-5/12"></div>
          <div class="z-20 flex items-center bg-sky-600 shadow-xl w-12 h-12 rounded-full">
            <div class="h-full w-full rounded-full flex items-center justify-center text-white">
              ${icons.briefcase}
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-xl w-full md:w-5/12 p-6">
            <p class="text-sm font-semibold text-sky-600 mb-1 ${alignmentClass}">${exp.duration}</p>
            <h3 class="font-bold text-xl text-slate-800 mb-2 ${alignmentClass}">${exp.school}</h3>
            <h4 class="font-semibold text-md text-slate-600 mb-3 ${alignmentClass}">${exp.role}</h4>
            <p class="text-slate-600 leading-relaxed ${alignmentClass}">${exp.description}</p>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML += html;
  };
  
  const renderQualifications = () => {
    const container = document.getElementById('qualifications-grid');
    if (!container) return;

    const html = qualificationsData.map(qual => {
      const iconHtml = icons[qual.icon] || '';
      return `
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center space-x-4">
          <div class="flex-shrink-0 bg-sky-100 text-sky-600 rounded-full p-3">
            ${iconHtml}
          </div>
          <div>
            <h3 class="text-lg font-bold text-slate-800">${qual.degree}</h3>
            <p class="text-slate-500">${qual.institution}</p>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = html;
  };

  // --- UI INTERACTIONS ---
  const initMobileMenu = () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('menu-open-icon');
    const closeIcon = document.getElementById('menu-close-icon');

    if (menuBtn && mobileMenu && openIcon && closeIcon) {
      menuBtn.addEventListener('click', () => {
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden');
        openIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
      });
    }
  };

  const initSmoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('menu-open-icon');
    const closeIcon = document.getElementById('menu-close-icon');

    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href || href === "#") return;

        e.preventDefault();
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const headerElement = document.querySelector('header');
          const headerOffset = headerElement ? headerElement.offsetHeight : 0;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }

        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            openIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  };

  const updateFooterYear = () => {
    const yearSpan = document.getElementById('current-year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
  };


  // --- INITIALIZATION ---
  renderExperience();
  renderQualifications();
  initMobileMenu();
  initSmoothScroll();
  updateFooterYear();
});
