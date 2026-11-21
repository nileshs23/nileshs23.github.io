/**
 * portfolio-data.js
 * Centralized data management for Nilesh Solanki's Portfolio
 * Handles Education, Experience, Projects, and Skills with localStorage persistence and default fallback
 */

(function (window) {
    'use strict';

    const KEYS = {
        EDUCATION: 'nilesh_portfolio_education_v1',
        EXPERIENCE: 'nilesh_portfolio_experience_v1',
        PROJECTS: 'nilesh_portfolio_projects_v1',
        SKILLS: 'nilesh_portfolio_skills_v1'
    };

    // Default education data
    const DEFAULT_EDUCATION = [
        {
            id: 'edu-masai-school',
            institution: 'Masai School',
            degree: 'Full Stack Web Development',
            subtitle: 'Java Backend Developer Track',
            duration: '2022 - 2023',
            location: 'Bengaluru (Remote)',
            description: 'Intensive 30+ weeks bootcamp with 1,200+ hours of hands-on coding. Mastered Java 21, Spring Boot 3, Hibernate, MySQL, Data Structures & Algorithms, RESTful APIs, and collaborative agile sprints.',
            badge: 'Full Stack Certification',
            link: 'https://drive.google.com/file/d/1fp4WsAePDUVZlBeuyXX0CdMT9savQry8/view?usp=sharing',
            accent: 'brand'
        },
        {
            id: 'edu-sinhgad-sppu',
            institution: 'Sinhgad College Of Engineering (SPPU)',
            degree: 'Bachelor of Engineering (B.E.)',
            subtitle: 'Computer Engineering',
            duration: '2017 - 2021',
            location: 'Pune, Maharashtra',
            description: 'Graduated in Computer Engineering with strong foundation in Computer Systems, DBMS, Operating Systems, Computer Networks, System Architecture, and Object-Oriented Software Engineering.',
            badge: "Bachelor's Degree",
            link: '',
            accent: 'accent'
        }
    ];

    // Default experience data
    const DEFAULT_EXPERIENCE = [
        {
            id: 'exp-greythr',
            company: 'greytHR (Greytip Software)',
            role: 'Java Backend Engineer',
            type: 'Cloud HRMS & Payroll • Full-Time',
            location: 'Bengaluru / Pune, India',
            duration: '2022 - Present (2+ Years)',
            isCurrent: true,
            summary: 'Engineering scalable microservices for greytHR premier cloud-based HRMS and payroll platform, serving thousands of enterprises and handling millions of monthly employee transactions.',
            bullets: [
                'Architecting, developing, and optimizing high-throughput microservices using Java 21, Spring Boot 3, and RESTful architectures.',
                'Implementing Apache Kafka event streaming pipelines for real-time employee attendance tracking, biometric sync, and payroll calculation triggers.',
                'Containerizing services with Docker, deploying in cloud microservices, and reducing query latency using Redis caching and PostgreSQL/MySQL indexing.',
                'Designing secure RESTful endpoints, multi-tenant data isolation, and RBAC compliance for enterprise client organizations.',
                'Collaborating in daily agile sprints, conducting code reviews, and optimizing system uptime and latency SLAs.'
            ]
        },
        {
            id: 'exp-pwc',
            company: 'PricewaterhouseCoopers Pvt Ltd (PwC)',
            role: 'Cybersecurity Specialist',
            type: 'Enterprise Tech Consulting • Full-Time',
            location: 'Pune, India',
            duration: 'Former Company',
            isCurrent: false,
            summary: 'Specialized in enterprise cybersecurity auditing, vulnerability mitigation, and cyber risk management across corporate clients.',
            bullets: [
                'Identified and reported software vulnerabilities adhering to industry standards and security compliance frameworks.',
                'Implemented defense-in-depth principles and guided teams on security controls, identity verification, and data encryption.',
                'Applied deep knowledge of system threats and network defenses to inform secure software engineering practices.'
            ]
        }
    ];

    // Default projects data
    const DEFAULT_PROJECTS = [
        {
            id: 'proj-sanjivani',
            title: 'Sanjivani : Covid19 Registration App',
            badge: 'Spring Boot REST',
            image: 'resources/imgs/java-2.png',
            shortDesc: 'High-concurrency vaccination booking engine facilitating citizen slot scheduling across regional health centers.',
            bullets: [
                'Engineered transactional RESTful APIs handling simultaneous center booking slots.',
                'Implemented relational data modeling with ACID transaction guarantees in MySQL.',
                'Built modular Maven architecture with robust exception handling and validation.'
            ],
            stack: ['Java 21', 'Spring Boot 3', 'Maven', 'MySQL'],
            demoUrl: 'https://drive.google.com/file/d/1kTk_M4sugF2KYPzCSktIjT6CH8PrCP8X/view?usp=drive_link',
            githubUrl: 'https://github.com/nileshs23/Sanjivani-A-Covid19-Registration-App'
        },
        {
            id: 'proj-techy-town',
            title: 'Techy Town E-Commerce API',
            badge: 'AWS Deployed',
            image: 'resources/imgs/java-3.png',
            shortDesc: 'Scalable enterprise RESTful API with dual Admin & Customer authentication, product catalog CRUD, and cloud hosting.',
            bullets: [
                'Designed role-based access control (RBAC) separating admin inventory and customer orders.',
                'Deployed on AWS Elastic Beanstalk for automated provisioning and cloud scalability.',
                'Optimized database queries and response payloads for sub-100ms API response times.'
            ],
            stack: ['Java 21', 'Spring Boot 3', 'AWS Elastic Beanstalk', 'REST API'],
            demoUrl: 'http://techytown-env.eba-cmzrmcwr.ap-south-1.elasticbeanstalk.com',
            githubUrl: 'https://github.com/nileshs23/Techy-Town'
        },
        {
            id: 'proj-student-mgmt',
            title: 'Student Management System',
            badge: 'Database & JDBC',
            image: 'resources/imgs/java-1.jpg',
            shortDesc: 'Database-driven management application implementing ACID transactions and parameterized queries.',
            bullets: [
                'Implemented direct JDBC connectivity with prepared statements to prevent SQL injection.',
                'Structured transaction rollback protocols for academic enrollment and fee records.',
                'Built modular DAO design pattern separating business logic from persistence.'
            ],
            stack: ['Java 21', 'JDBC', 'MySQL', 'Maven'],
            demoUrl: 'https://drive.google.com/file/d/1ePEc9uJ6fWVfM3Z_e4nk2KmzBGO6dy6-/view?usp=drive_link',
            githubUrl: 'https://github.com/nileshs23/divine-society-1574'
        },
        {
            id: 'proj-memory-ai',
            title: 'Memory.Ai Clone (Timely)',
            badge: 'Frontend Web',
            image: 'resources/imgs/web-1.jpg',
            shortDesc: 'Time-tracking productivity web application with category management and automated wage calculation.',
            bullets: [
                'Built reactive UI with modular vanilla JavaScript handling asynchronous wage math.',
                'Implemented dynamic DOM manipulation and real-time category hours breakdown.',
                'Deployed on Netlify with automated CI/CD continuous delivery.'
            ],
            stack: ['JavaScript ES6+', 'HTML5', 'CSS3', 'Netlify'],
            demoUrl: 'https://fantastic-queijadas-e98c0f.netlify.app/',
            githubUrl: 'https://github.com/nileshs23/dear-shade-414'
        },
        {
            id: 'proj-deccan-herald',
            title: 'Deccan Herald e-Newspaper',
            badge: 'Media Platform',
            image: 'resources/imgs/web-2.jpg',
            shortDesc: 'Digital news platform clone with responsive editorial layouts, categorized sports, trending, and political feeds.',
            bullets: [
                'Implemented responsive multi-column layouts adapting seamlessly across mobile and desktop.',
                'Custom category filtering for trending, sports, and political news feeds.',
                'Optimized page asset delivery and responsive typography for fast load times.'
            ],
            stack: ['JavaScript ES6+', 'HTML5', 'CSS3', 'Netlify'],
            demoUrl: 'https://zippy-biscochitos-543e9f.netlify.app/',
            githubUrl: 'https://github.com/nileshs23/Deccan-Herald-Clone'
        },
        {
            id: 'proj-covid-ml',
            title: 'Covid19 Analysis & Prediction',
            badge: 'Data Science & ML',
            image: 'resources/imgs/ml-1.jpg',
            shortDesc: 'Predictive analytics modeling using Machine Learning algorithms to analyze epidemiological patterns.',
            bullets: [
                'Implemented supervised regression and classification models in Python.',
                'Conducted data cleaning, exploratory data analysis, and feature engineering.',
                'Visualized projection curves and infection rate trajectories.'
            ],
            stack: ['Python', 'Machine Learning', 'JavaScript'],
            demoUrl: '',
            githubUrl: 'https://github.com/nileshs23/Covid19-Analysis_and_Prediction'
        }
    ];

    // Default skills data
    const DEFAULT_SKILLS = [
        { id: 'skill-java', name: 'Java 21 / OOP', category: 'Backend', percent: 100 },
        { id: 'skill-spring', name: 'Spring Boot 3 & Microservices', category: 'Backend', percent: 100 },
        { id: 'skill-kafka', name: 'Apache Kafka Event Streaming', category: 'Backend', percent: 100 },
        { id: 'skill-docker', name: 'Docker & Containerization', category: 'Backend', percent: 100 },
        { id: 'skill-hibernate', name: 'Hibernate & JPA / SQL', category: 'Backend', percent: 100 },
        { id: 'skill-redis', name: 'Redis Caching & Distributed Locks', category: 'Backend', percent: 100 },
        { id: 'skill-js', name: 'JavaScript (ES6+)', category: 'Frontend', percent: 92 },
        { id: 'skill-html-css', name: 'HTML5 & Modern CSS3', category: 'Frontend', percent: 95 },
        { id: 'skill-react', name: 'React.js & Component Design', category: 'Frontend', percent: 88 },
        { id: 'skill-git', name: 'Git, GitHub CI/CD & Agile', category: 'DevOps & Tools', percent: 95 }
    ];

    const PortfolioData = {
        // ====================================================================
        // 1. EDUCATION
        // ====================================================================
        getEducation: function () {
            try {
                const stored = localStorage.getItem(KEYS.EDUCATION);
                if (stored) {
                    const parsed = JSON.parse(stored);
                    if (Array.isArray(parsed) && parsed.length > 0) return parsed;
                }
            } catch (err) {
                console.warn('PortfolioData: Could not read education from localStorage.', err);
            }
            return [...DEFAULT_EDUCATION];
        },

        saveEducation: function (list) {
            try {
                localStorage.setItem(KEYS.EDUCATION, JSON.stringify(list));
                window.dispatchEvent(new CustomEvent('portfolio-education-updated', { detail: list }));
                return true;
            } catch (err) {
                console.error('PortfolioData: Failed to save education.', err);
                return false;
            }
        },

        addEducation: function (item) {
            const list = this.getEducation();
            const newItem = {
                id: item.id || 'edu-' + Date.now(),
                institution: item.institution || 'Institution Name',
                degree: item.degree || 'Degree / Certificate',
                subtitle: item.subtitle || '',
                duration: item.duration || '',
                location: item.location || '',
                description: item.description || '',
                badge: item.badge || 'Education',
                link: item.link || '',
                accent: item.accent || 'brand'
            };
            list.unshift(newItem);
            this.saveEducation(list);
            return newItem;
        },

        updateEducation: function (id, fields) {
            const list = this.getEducation();
            const index = list.findIndex(e => e.id === id);
            if (index === -1) return false;
            list[index] = { ...list[index], ...fields, id };
            this.saveEducation(list);
            return true;
        },

        deleteEducation: function (id) {
            const list = this.getEducation();
            const filtered = list.filter(e => e.id !== id);
            if (filtered.length === list.length) return false;
            this.saveEducation(filtered);
            return true;
        },

        reorderEducation: function (id, direction) {
            const list = this.getEducation();
            const index = list.findIndex(e => e.id === id);
            if (index === -1) return false;
            if (direction === 'up' && index > 0) {
                const temp = list[index];
                list[index] = list[index - 1];
                list[index - 1] = temp;
                this.saveEducation(list);
                return true;
            } else if (direction === 'down' && index < list.length - 1) {
                const temp = list[index];
                list[index] = list[index + 1];
                list[index + 1] = temp;
                this.saveEducation(list);
                return true;
            }
            return false;
        },

        resetEducation: function () {
            localStorage.removeItem(KEYS.EDUCATION);
            this.saveEducation(DEFAULT_EDUCATION);
            return [...DEFAULT_EDUCATION];
        },

        renderEducation: function (container, options = {}) {
            const el = typeof container === 'string' ? document.querySelector(container) : container;
            if (!el) return;

            const isCollapsible = options.collapsible !== false;
            const items = this.getEducation();
            if (!items.length) {
                el.innerHTML = '<div class="empty-state-card"><p>No education entries found.</p></div>';
                return;
            }

            let html = '';
            items.forEach((item, index) => {
                const isBrand = item.accent === 'brand' || index === 0;
                const accentClass = isBrand ? 'accent-brand' : 'accent-indigo';
                const badgeColor = isBrand ? 'badge-brand' : 'badge-indigo';

                html += `
                <div class="education-card ${accentClass}" data-id="${item.id}" tabindex="0">
                    <div class="edu-card-header">
                        <div class="edu-title-group">
                            <span class="edu-badge ${badgeColor}">${this.escapeHtml(item.badge || 'Education')}</span>
                            <h4 class="edu-institution">${this.escapeHtml(item.institution)}</h4>
                            <h5 class="edu-degree">${this.escapeHtml(item.degree)}</h5>
                            ${item.subtitle ? `<div class="edu-subtitle"><i class="fas fa-code-branch"></i> ${this.escapeHtml(item.subtitle)}</div>` : ''}
                        </div>
                        <div class="edu-meta-group">
                            ${item.duration ? `<span class="edu-duration"><i class="far fa-calendar-alt"></i> ${this.escapeHtml(item.duration)}</span>` : ''}
                            ${item.location ? `<span class="edu-location"><i class="fas fa-map-marker-alt"></i> ${this.escapeHtml(item.location)}</span>` : ''}
                        </div>
                    </div>

                    ${isCollapsible ? `
                    <div class="exp-hover-indicator">
                        <i class="fas fa-chevron-down"></i> Hover or tap to view details
                    </div>
                    <div class="collapsible-wrapper">
                        <div class="collapsible-content">
                            ${item.description ? `<p class="edu-description">${this.escapeHtml(item.description)}</p>` : ''}
                            ${item.link ? `
                            <div class="edu-actions">
                                <a href="${this.escapeHtml(item.link)}" target="_blank" rel="noopener noreferrer" class="edu-link-btn">
                                    <i class="fas fa-certificate"></i> View Credential / Certificate
                                </a>
                            </div>` : ''}
                        </div>
                    </div>
                    ` : `
                    ${item.description ? `<p class="edu-description">${this.escapeHtml(item.description)}</p>` : ''}
                    ${item.link ? `
                    <div class="edu-actions">
                        <a href="${this.escapeHtml(item.link)}" target="_blank" rel="noopener noreferrer" class="edu-link-btn">
                            <i class="fas fa-certificate"></i> View Credential / Certificate
                        </a>
                    </div>` : ''}
                    `}
                </div>
                `;
            });

            el.innerHTML = html;
        },

        // ====================================================================
        // 2. WORK EXPERIENCE
        // ====================================================================
        getExperience: function () {
            try {
                const stored = localStorage.getItem(KEYS.EXPERIENCE);
                if (stored) {
                    const parsed = JSON.parse(stored);
                    if (Array.isArray(parsed) && parsed.length > 0) return parsed;
                }
            } catch (err) {
                console.warn('PortfolioData: Could not read experience from localStorage.', err);
            }
            return [...DEFAULT_EXPERIENCE];
        },

        saveExperience: function (list) {
            try {
                localStorage.setItem(KEYS.EXPERIENCE, JSON.stringify(list));
                window.dispatchEvent(new CustomEvent('portfolio-experience-updated', { detail: list }));
                return true;
            } catch (err) {
                console.error('PortfolioData: Failed to save experience.', err);
                return false;
            }
        },

        addExperience: function (item) {
            const list = this.getExperience();
            const newItem = {
                id: item.id || 'exp-' + Date.now(),
                company: item.company || 'Company Name',
                role: item.role || 'Job Role',
                type: item.type || 'Full-Time',
                location: item.location || '',
                duration: item.duration || '',
                isCurrent: !!item.isCurrent,
                summary: item.summary || '',
                bullets: Array.isArray(item.bullets) ? item.bullets : (item.bullets ? item.bullets.split('\n').filter(Boolean) : [])
            };
            list.unshift(newItem);
            this.saveExperience(list);
            return newItem;
        },

        updateExperience: function (id, fields) {
            const list = this.getExperience();
            const index = list.findIndex(e => e.id === id);
            if (index === -1) return false;
            if (fields.bullets && typeof fields.bullets === 'string') {
                fields.bullets = fields.bullets.split('\n').filter(Boolean);
            }
            list[index] = { ...list[index], ...fields, id };
            this.saveExperience(list);
            return true;
        },

        deleteExperience: function (id) {
            const list = this.getExperience();
            const filtered = list.filter(e => e.id !== id);
            if (filtered.length === list.length) return false;
            this.saveExperience(filtered);
            return true;
        },

        reorderExperience: function (id, direction) {
            const list = this.getExperience();
            const index = list.findIndex(e => e.id === id);
            if (index === -1) return false;
            if (direction === 'up' && index > 0) {
                const temp = list[index];
                list[index] = list[index - 1];
                list[index - 1] = temp;
                this.saveExperience(list);
                return true;
            } else if (direction === 'down' && index < list.length - 1) {
                const temp = list[index];
                list[index] = list[index + 1];
                list[index + 1] = temp;
                this.saveExperience(list);
                return true;
            }
            return false;
        },

        resetExperience: function () {
            localStorage.removeItem(KEYS.EXPERIENCE);
            this.saveExperience(DEFAULT_EXPERIENCE);
            return [...DEFAULT_EXPERIENCE];
        },

        renderExperience: function (container, options = {}) {
            const el = typeof container === 'string' ? document.querySelector(container) : container;
            if (!el) return;

            const isCollapsible = options.collapsible !== false;
            const items = this.getExperience();
            if (!items.length) {
                el.innerHTML = '<div class="empty-state-card"><p>No experience entries found.</p></div>';
                return;
            }

            let html = '';
            items.forEach((item) => {
                const cardClass = item.isCurrent ? 'exp-current' : 'exp-former';
                const badgeMarkup = item.isCurrent
                    ? '<span class="edu-badge badge-brand" style="margin-bottom: 0; font-size: 10px;">Current</span>'
                    : '<span class="edu-badge" style="background: rgba(255,255,255,0.06); color: #94a3b8; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 0; font-size: 10px;">Former</span>';

                html += `
                <div class="exp-card ${cardClass}" data-id="${item.id}" tabindex="0">
                    <div class="exp-header">
                        <div>
                            <div class="exp-company">
                                ${this.escapeHtml(item.company)}
                                ${badgeMarkup}
                            </div>
                            <div class="exp-role">${this.escapeHtml(item.role)}</div>
                        </div>
                        <div class="exp-meta">
                            <div>${this.escapeHtml(item.type)}</div>
                            <div>${this.escapeHtml(item.location)}</div>
                            ${item.duration ? `<div style="color: #38bdf8; font-weight: 600;">${this.escapeHtml(item.duration)}</div>` : ''}
                        </div>
                    </div>

                    ${isCollapsible ? `
                    <div class="exp-hover-indicator">
                        <i class="fas fa-chevron-down"></i> Hover or tap to view responsibilities
                    </div>
                    <div class="collapsible-wrapper">
                        <div class="collapsible-content">
                            ${item.summary ? `<p style="font-size: 14px; color: #cbd5e1; margin-bottom: 12px;">${this.escapeHtml(item.summary)}</p>` : ''}
                            ${item.bullets && item.bullets.length ? `
                            <ul class="exp-bullets">
                                ${item.bullets.map(b => `<li>${this.escapeHtml(b)}</li>`).join('')}
                            </ul>` : ''}
                        </div>
                    </div>
                    ` : `
                    ${item.summary ? `<p style="font-size: 14px; color: #cbd5e1; margin-bottom: 12px;">${this.escapeHtml(item.summary)}</p>` : ''}
                    ${item.bullets && item.bullets.length ? `
                    <ul class="exp-bullets">
                        ${item.bullets.map(b => `<li>${this.escapeHtml(b)}</li>`).join('')}
                    </ul>` : ''}
                    `}
                </div>
                `;
            });

            el.innerHTML = html;
        },

        // ====================================================================
        // 3. PROJECTS
        // ====================================================================
        getProjects: function () {
            try {
                const stored = localStorage.getItem(KEYS.PROJECTS);
                if (stored) {
                    const parsed = JSON.parse(stored);
                    if (Array.isArray(parsed) && parsed.length > 0) return parsed;
                }
            } catch (err) {
                console.warn('PortfolioData: Could not read projects from localStorage.', err);
            }
            return [...DEFAULT_PROJECTS];
        },

        saveProjects: function (list) {
            try {
                localStorage.setItem(KEYS.PROJECTS, JSON.stringify(list));
                window.dispatchEvent(new CustomEvent('portfolio-projects-updated', { detail: list }));
                return true;
            } catch (err) {
                console.error('PortfolioData: Failed to save projects.', err);
                return false;
            }
        },

        addProject: function (item) {
            const list = this.getProjects();
            const newItem = {
                id: item.id || 'proj-' + Date.now(),
                title: item.title || 'New Project Title',
                badge: item.badge || 'Project',
                image: item.image || 'resources/imgs/java-2.png',
                shortDesc: item.shortDesc || '',
                bullets: Array.isArray(item.bullets) ? item.bullets : (item.bullets ? item.bullets.split('\n').filter(Boolean) : []),
                stack: Array.isArray(item.stack) ? item.stack : (item.stack ? item.stack.split(',').map(s => s.trim()).filter(Boolean) : []),
                demoUrl: item.demoUrl || '',
                githubUrl: item.githubUrl || ''
            };
            list.unshift(newItem);
            this.saveProjects(list);
            return newItem;
        },

        updateProject: function (id, fields) {
            const list = this.getProjects();
            const index = list.findIndex(e => e.id === id);
            if (index === -1) return false;
            if (fields.bullets && typeof fields.bullets === 'string') {
                fields.bullets = fields.bullets.split('\n').filter(Boolean);
            }
            if (fields.stack && typeof fields.stack === 'string') {
                fields.stack = fields.stack.split(',').map(s => s.trim()).filter(Boolean);
            }
            list[index] = { ...list[index], ...fields, id };
            this.saveProjects(list);
            return true;
        },

        deleteProject: function (id) {
            const list = this.getProjects();
            const filtered = list.filter(e => e.id !== id);
            if (filtered.length === list.length) return false;
            this.saveProjects(filtered);
            return true;
        },

        reorderProject: function (id, direction) {
            const list = this.getProjects();
            const index = list.findIndex(e => e.id === id);
            if (index === -1) return false;
            if (direction === 'up' && index > 0) {
                const temp = list[index];
                list[index] = list[index - 1];
                list[index - 1] = temp;
                this.saveProjects(list);
                return true;
            } else if (direction === 'down' && index < list.length - 1) {
                const temp = list[index];
                list[index] = list[index + 1];
                list[index + 1] = temp;
                this.saveProjects(list);
                return true;
            }
            return false;
        },

        resetProjects: function () {
            localStorage.removeItem(KEYS.PROJECTS);
            this.saveProjects(DEFAULT_PROJECTS);
            return [...DEFAULT_PROJECTS];
        },

        // ==========================================
        // SKILLS CRUD OPERATIONS
        // ==========================================
        getSkills: function () {
            try {
                const stored = localStorage.getItem(KEYS.SKILLS);
                if (stored) {
                    const parsed = JSON.parse(stored);
                    if (Array.isArray(parsed) && parsed.length > 0) return parsed;
                }
            } catch (e) {
                console.error('Error reading skills from localStorage:', e);
            }
            return [...DEFAULT_SKILLS];
        },

        saveSkills: function (skillsList) {
            try {
                localStorage.setItem(KEYS.SKILLS, JSON.stringify(skillsList));
                window.dispatchEvent(new CustomEvent('portfolio-skills-updated', { detail: skillsList }));
                return true;
            } catch (e) {
                console.error('Error saving skills to localStorage:', e);
                return false;
            }
        },

        addSkill: function (data) {
            const list = this.getSkills();
            const newSkill = {
                id: 'skill-' + Date.now(),
                name: data.name || 'New Skill',
                category: data.category || 'Backend',
                percent: Math.min(100, Math.max(10, parseInt(data.percent, 10) || 90))
            };
            list.push(newSkill);
            this.saveSkills(list);
            return newSkill;
        },

        updateSkill: function (id, data) {
            const list = this.getSkills();
            const index = list.findIndex(e => e.id === id);
            if (index === -1) return false;
            list[index] = {
                ...list[index],
                ...data,
                id: list[index].id,
                percent: Math.min(100, Math.max(10, parseInt(data.percent, 10) || list[index].percent))
            };
            this.saveSkills(list);
            return true;
        },

        deleteSkill: function (id) {
            const list = this.getSkills();
            const filtered = list.filter(e => e.id !== id);
            this.saveSkills(filtered);
            return true;
        },

        resetSkills: function () {
            localStorage.removeItem(KEYS.SKILLS);
            this.saveSkills(DEFAULT_SKILLS);
            return [...DEFAULT_SKILLS];
        },

        // ==========================================
        // BUNDLE & REMOTE GITHUB SYNC OPERATIONS
        // ==========================================
        getAllData: function () {
            return {
                version: '2.0',
                repository: 'nileshs23/nileshs23.github.io',
                lastUpdated: new Date().toISOString(),
                education: this.getEducation(),
                experience: this.getExperience(),
                projects: this.getProjects(),
                skills: this.getSkills()
            };
        },

        setAllData: function (data) {
            if (!data) return false;
            if (data.education && Array.isArray(data.education)) this.saveEducation(data.education);
            if (data.experience && Array.isArray(data.experience)) this.saveExperience(data.experience);
            if (data.projects && Array.isArray(data.projects)) this.saveProjects(data.projects);
            if (data.skills && Array.isArray(data.skills)) this.saveSkills(data.skills);
            return true;
        },

        loadRemote: function (url = './data/portfolio.json') {
            return fetch(url + '?v=' + Date.now())
                .then(res => {
                    if (!res.ok) throw new Error('Remote portfolio JSON not found: ' + res.status);
                    return res.json();
                })
                .then(data => {
                    if (data && typeof data === 'object') {
                        this.setAllData(data);
                        return data;
                    }
                })
                .catch(err => {
                    // Fail silently to local defaults
                    return null;
                });
        },

        // Helper
        escapeHtml: function (str) {
            if (!str) return '';
            const div = document.createElement('div');
            div.textContent = str;
            return div.innerHTML;
        }
    };

    window.PortfolioData = PortfolioData;

    // Auto-sync with remote data/portfolio.json when running via HTTP/HTTPS
    if (typeof window !== 'undefined' && window.location && window.location.protocol.startsWith('http')) {
        PortfolioData.loadRemote();
    }
})(window);
