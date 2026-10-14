import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

type Language = 'en' | 'ar';

interface PortfolioProject {
  titleEn: string;
  titleAr: string;
  categoryEn: string;
  categoryAr: string;
  descriptionEn: string;
  descriptionAr: string;
  contributionEn: string;
  contributionAr: string;
  highlightsEn: string[];
  highlightsAr: string[];
  tags: string[];
  url: string;
  image: string;
  galleryImages?: string[];
  imageMode?: 'mobile';
  external: boolean;
  personal: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  language: Language = 'en';
  menuOpen = false;
  lightTheme = false;
  projectIndex = 0;

  readonly projects: PortfolioProject[] = [
    {
      titleEn: 'Benaa Educational Platform',
      titleAr: 'منصة بناء التعليمية',
      categoryEn: 'Education Technology',
      categoryAr: 'تقنية التعليم',
      descriptionEn: 'A large-scale educational platform for Al-Ahsa schools in Saudi Arabia, serving 20,000+ users with learning content and dedicated Admin, Student, Teacher,parent,Academic Supervisor and Educational Supervisor dashboards. The platform is described as accredited by the Saudi Ministry of Education.',
      descriptionAr: 'منصة تعليمية واسعة النطاق لمدارس الأحساء في السعودية، تخدم أكثر من 20 ألف مستخدم، وتضم محتوى تعليميًا وست لوحات مخصصة للإدارة والطالب والمعلم و ولى الأمر والمشرف الأكاديمى والمشرف التربوى. المنصة حاصلة على اعتماد وزارة التعليم السعودية وفقًا لمعلومات المشروع.',
      contributionEn: 'Contributed to the Angular and TypeScript front end, reusable UI components, responsive layouts, REST API integration, and role-based dashboard workflows.',
      contributionAr: 'ساهمت في تطوير الواجهة الأمامية باستخدام Angular وTypeScript، وبناء مكونات قابلة لإعادة الاستخدام، وتصميمات متجاوبة، والتكامل مع REST APIs، وتطوير تدفقات العمل الخاصة بلوحات المستخدمين.',
      highlightsEn: ['20,000+ users', '4 role-based dashboards', 'Saudi MoE accredited'],
      highlightsAr: ['أكثر من 20 ألف مستخدم', '4 لوحات حسب الدور', 'اعتماد وزارة التعليم'],
      tags: ['Angular', 'TypeScript', 'Bootstrap', 'Sass / SCSS', '.NET', 'REST APIs'],
      url: 'https://hns.edu.sa/auth/login',
      image: 'images/projects/benaa-platform.webp',
      galleryImages: [
        'images/projects/benaa-web-blog-search.webp',
        'images/projects/benaa-web-blog-list.webp',
        'images/projects/benaa-web-lesson-details.webp',
        'images/projects/benaa-web-student-subjects.webp'
      ],
      external: true,
      personal: false
    },
    {
      titleEn: 'Al-Ahsa School Website',
      titleAr: 'موقع مدارس الأحساء',
      categoryEn: 'School Website',
      categoryAr: 'موقع مدرسي',
      descriptionEn: 'A responsive public-facing school website presenting school information, academic sections, achievements, news, and family resources, with a route into the Benaa education portal.',
      descriptionAr: 'موقع مدرسي متجاوب لعرض معلومات المدارس والأقسام الأكاديمية والإنجازات والأخبار والموارد الموجهة للأسر، مع رابط إلى بوابة بناء التعليمية.',
      contributionEn: 'Contributed to front-end implementation and responsive UI, helping present school content clearly across desktop and mobile screens.',
      contributionAr: 'ساهمت في تنفيذ الواجهة الأمامية وبناء واجهات متجاوبة، بما يساعد على عرض محتوى المدرسة بوضوح على شاشات الكمبيوتر والموبايل.',
      highlightsEn: ['Responsive layout', 'School information', 'Education portal link'],
      highlightsAr: ['تصميم متجاوب', 'معلومات المدارس', 'ربط ببوابة التعليم'],
      tags: ['Angular', 'TypeScript', 'SCSS', 'Responsive UI'],
      url: 'https://alahsaschooltest.hns.edu.sa/',
      image: 'images/projects/al-ahsa-school-home.webp',
      galleryImages: [
        'images/projects/al-ahsa-school-gallery.webp',
        'images/projects/al-ahsa-school-about.webp',
        'images/projects/al-ahsa-school-orange-features.webp'
      ],
      external: true,
      personal: false
    },
    {
      titleEn: 'Benaa Mobile Application',
      titleAr: 'تطبيق بناء للموبايل',
      categoryEn: 'Mobile Application',
      categoryAr: 'تطبيق موبايل',
      descriptionEn: 'A mobile application supporting the Benaa educational experience, extending learning-related features to a mobile interface.',
      descriptionAr: 'تطبيق موبايل يدعم تجربة منصة بناء التعليمية، ويتيح الوصول إلى الخصائص التعليمية من خلال واجهة مخصصة للأجهزة المحمولة.',
      contributionEn: 'Contributed with Flutter and Dart, implementing UI screens, reusable widgets, and educational features while connecting the interface to application data.',
      contributionAr: 'ساهمت باستخدام Flutter وDart في تنفيذ الشاشات، وبناء Widgets قابلة لإعادة الاستخدام، ودمج الخصائص التعليمية وربط الواجهة ببيانات التطبيق.',
      highlightsEn: ['Flutter & Dart', 'Reusable widgets', 'Education features'],
      highlightsAr: ['Flutter وDart', 'Widgets قابلة لإعادة الاستخدام', 'خصائص تعليمية'],
      tags: ['Flutter', 'Dart', 'Mobile UI', 'REST API'],
      url: '#contact',
      image: 'images/projects/benaa-mobile.webp',
      galleryImages: [
        // 'images/projects/benaa-mobile-subjects.webp',
        'images/projects/benaa-mobile-dashboard.webp',
        'images/projects/benaa-mobile-course-details.webp'
      ],
      imageMode: 'mobile',
      external: false,
      personal: false
    }
  ];

  get isArabic(): boolean {
    return this.language === 'ar';
  }

  get currentProject(): PortfolioProject {
    return this.projects[this.projectIndex];
  }

  toggleLanguage(): void {
    this.language = this.isArabic ? 'en' : 'ar';
    document.documentElement.lang = this.language;
    document.documentElement.dir = this.isArabic ? 'rtl' : 'ltr';
    this.menuOpen = false;
  }

  toggleTheme(): void {
    this.lightTheme = !this.lightTheme;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  nextProject(): void {
    this.projectIndex = (this.projectIndex + 1) % this.projects.length;
  }

  previousProject(): void {
    this.projectIndex = (this.projectIndex + this.projects.length - 1) % this.projects.length;
  }

  selectProject(index: number): void {
    this.projectIndex = index;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  sending = false;
  contactStatus = '';

  async sendMessage(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    if (this.sending) return;

    const form = event.target as HTMLFormElement;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    this.sending = true;
    this.contactStatus = '';

    const formData = new FormData(form);
    formData.append('_subject', 'New message from Mohamed Emira Portfolio');
    formData.append('_template', 'table');

    try {
      const response = await fetch('https://formsubmit.co/ajax/mohamedemira2525@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData
      });

      const result = await response.json();

      if (!response.ok || result.success === false) {
        throw new Error('Message sending failed');
      }

      this.contactStatus = 'success';
      form.reset();
    } catch (error) {
      console.error('Contact form error:', error);
      this.contactStatus = 'error';

      alert(
        this.isArabic
          ? 'تعذر إرسال الرسالة. حاول مرة أخرى.'
          : 'Failed to send the message. Please try again.'
      );
    } finally {
      this.sending = false;
    }
  }
}
