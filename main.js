// 1. Preloader Hide
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.visibility = "hidden";
  }, 600);
});
// ==========================================================================
// CINEMATIC HERO INTERACTION ENGINE
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Cinematic Intro Logo Fade Out
  setTimeout(() => {
    const introOverlay = document.getElementById("intro-overlay");
    if (introOverlay) {
      introOverlay.style.opacity = "0";
      setTimeout(() => {
        introOverlay.style.display = "none";
      }, 1200);
    }
  }, 1800);

  // 2. Cursor Ambient Glow & 3D Glass Sculpture Mouse Tracking
  const cursorGlow = document.getElementById("cursor-glow");
  const sculpture = document.getElementById("glass-sculpture");

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (cursorGlow) {
      cursorGlow.style.left = `${mouseX}px`;
      cursorGlow.style.top = `${mouseY}px`;
    }
  });

  // Lerp Animation Loop for Ultra-Smooth 3D Glass Sculpture Tilt
  function animateSculpture() {
    currentX += (mouseX - currentX) * 0.05;
    currentY += (mouseY - currentY) * 0.05;

    if (sculpture) {
      const rotateX = (currentY - window.innerHeight / 2) * -0.04;
      const rotateY = (currentX - window.innerWidth / 2) * 0.04;
      sculpture.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    requestAnimationFrame(animateSculpture);
  }
  animateSculpture();

  // 3. Ambient Dust Particle Canvas
  const canvas = document.getElementById("cinematic-particle-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    function drawParticles() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(93, 183, 255, ${p.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#5DB7FF";
        ctx.fill();
      });

      requestAnimationFrame(drawParticles);
    }
    drawParticles();
  }
});
// 2. Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// 3. Custom Cursor Follower
const cursorDot = document.getElementById("cursor-dot");
const cursorRing = document.getElementById("cursor-ring");

window.addEventListener("mousemove", (e) => {
  cursorDot.style.top = `${e.clientY}px`;
  cursorDot.style.left = `${e.clientX}px`;

  cursorRing.animate(
    {
      top: `${e.clientY}px`,
      left: `${e.clientX}px`,
    },
    { duration: 400, fill: "forwards" },
  );
});

document
  .querySelectorAll("a, button, input, textarea, .glass-card")
  .forEach((el) => {
    el.addEventListener("mouseenter", () =>
      document.body.classList.add("cursor-hover"),
    );
    el.addEventListener("mouseleave", () =>
      document.body.classList.remove("cursor-hover"),
    );
  });

// 4. Header Scroll Blur Class
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Default language is now Farsi ('fa')
let currentLang = "fa";

// Updated i18n Dictionary with Farsi-first default and new Graphic Design + Blog keys
const i18n = {
  fa: {
    nav_projects: "پروژه‌ها",
    nav_services: "خدمات",
    nav_process: "روند کار",
    nav_about: "درباره ما",
    nav_contact: "تماس",
    btn_start: "شروع پروژه",

    btn_view_work: "مشاهده نمونه‌کارها",
    btn_contact: "ارتباط مستقیم",
    services_tag: "توانمندی‌ها",
    services_title: "خدمات تخصصی گرافیک و وب",
    services_desc:
      "پکیج‌های اختصاصی با تمرکز بر برندینگ بصری، زیبایی منحصر‌به‌فرد و کارایی فنی بی‌نقص.",
    s1_title: "طراحی گرافیک & برندینگ",
    s1_desc:
      "خلق هویت بصری کامل، لوگودیزاین، ست اداری، دفترچه برند (Brandbook) و پوسترهای تبلیغاتی.",
    s2_title: "طراحی UI/UX وب و اپلیکیشن",
    s2_desc:
      "رابط‌های کاربری هوشمند، تحقیقات کاربر، وایرفریمینگ و سیستم‌های دیزاین فیگما.",
    s3_title: "توسعه فرانت‌اند وب‌سایت",
    s3_desc:
      "کدنویسی استاندارد و فوق‌العاده سریع با Vanilla JavaScript بدون کدهای اضافی.",
    s4_title: "سئو و بهینه‌سازی فنی",
    s4_desc:
      "کسب رتبه‌های برتر گوگل با متادیتاهای پیشرفته و نمره ۱۰۰ لایت‌هاوس.",
    projects_tag: "نمونه‌کارهای منتخب",
    projects_title: "پروژه‌های برجسته وب",
    projects_desc: "نگاهی به ۵ پروژه شاخص طراحی و توسعه وب استودیو نئورا.",
    btn_case_study: "بررسی تخصصی ➔",
    p1_desc:
      "پورتال املاک لوکس برای معامله املاک گران‌قیمت به همراه پلن‌های سه بعدی تعاملی.",
    p2_desc:
      "لندینگ پیج پلتفرم هوش مصنوعی با المان‌های گلس‌مورفیسم و نمودارهای پویا.",
    p3_desc:
      "تجربه دیجیتال و سیستم رزرو آنلاین برای رستوران‌های زنجیره‌ای متمایز.",
    p4_desc:
      "پلتفرم معرفی ساعت‌های لوکس با تایپوگرافی تایپ‌فیس دقیق و افکت‌های ریز تعاملی.",
    p5_desc:
      "رابط کاربری نرم‌افزار سلامت روان با گرادینت‌های ملایم و مسیرهای کاربری آرامش‌بخش.",
    graphic_tag: "طراحی گرافیک & هویت بصری",
    graphic_title: "هنر بصری و هویت برند",
    graphic_desc:
      "خلق سیستم‌های برندینگ مدرن، لوگودیزاین‌های ماندگار، تایپوگرافی لوکس و آرت‌ورک‌های تبلیغاتی.",
    g1_title: "هویت بصری و برندینگ Apex",
    g1_desc:
      "طراحی دفترچه راهنمای برند، لوگوتایپ اختصاصی، رنگ‌شناسی و پست‌های شبکه‌های اجتماعی.",
    g2_title: "مجموعه پوسترهای تایپوگرافی نئورا",
    g2_desc:
      "طراحی پوستر مفهومی نمایشگاهی با ترکیب تایپوگرافی مدرن فارسی و انگلیسی.",
    g3_title: "طراحی بسته‌بندی محصولات Chronos",
    g3_desc:
      "بسته‌بندی مینیمال و مینیمالیستی برای ساعت‌های گران‌قیمت با چاپ طلاکوب روی جعبه.",
    process_tag: "مسیر پروژه",
    process_title: "روند اجرای پروژه",
    process_desc:
      "چگونه ایده‌های اولیه را به محصولات دیجیتال جریان‌ساز تبدیل می‌کنیم.",
    pr1_title: "کشف و استراتژی",
    pr1_desc: "شناخت دقیق مخاطبان هدف، اهداف تجاری و تدوین مسیر اصلی پروژه.",
    pr2_title: "وایرفریم و تجربه کاربری",
    pr2_desc: "معماری جریان بصری و تعاملات کاربر در فیگما.",
    pr3_title: "طراحی بصری (UI & Graphic)",
    pr3_desc:
      "خلق پیکسل به پیکسل طرح‌های گرافیکی لوکس، تایپوگرافی و سیستم رنگی.",
    pr4_title: "توسعه و تحویل",
    pr4_desc: "کدنویسی سریع، بهینه‌سازی سئو و راه‌اندازی بدون نقص روی سرور.",
    blog_tag: "وبلاگ & مقالات",
    blog_title: "جدیدترین مقالات و تحلیل‌ها",
    blog_desc:
      "اشتراک‌گذاری دانش تخصصی در زمینه طراحی UI/UX، اصول گرافیک دیزاین و استراتژی‌های رشد سئو.",
    b1_title: "اصول طراحی هویت بصری لوکس در سال ۲۰۲۶",
    b1_desc:
      "بررسی نقش مینیمالیسم، تایپوگرافی اختصاصی و پالت‌های رنگی محدود در ارتقای ارزش برند.",
    b2_title: "چگونه UI/UX اختصاصی فروش وب‌سایت را ۳ برابر می‌کند؟",
    b2_desc:
      "تحلیل تاثیر روانشناسی کاربر و ساده‌سازی مسیر خرید در لندینگ پیج‌های مدرن.",
    b3_title: "کلیدهای طلایی سئوی فنی و نمره ۱۰۰ لایت‌هاوس",
    b3_desc:
      "راهنمای بهینه‌سازی کدهای فرانت‌اند، ساختار Schema.org و افزایش سرعت بارگذاری صفحات.",
    btn_read: "مطالعه مقاله ➔",
    stat_projects: "پروژه تکمیل شده",
    stat_clients: "مشتری رضایت‌مند",
    stat_years: "سال تجربه تخصصی",
    stat_score: "امتیاز سئو لایت‌هاوس",
    test_quote:
      "«استودیو نئورا هویت برند ما را کاملاً ارتقا داد. سرعت، دقت طراحی و پاسخگویی وب‌سایت ما بلافاصله باعث جلب اعتماد مشتریان شد.»",
    cta_title: "بیایید با هم یک اثر فوق‌العاده بسازیم",
    cta_desc:
      "آیا برای ارتقای هویت دیجیتال و گرافیک برند خود به بالاترین سطح طراحی آماده هستید؟",
    btn_book: "رزرو جلسه مشاوره",
    lbl_email: "ایمیل مستقیم",
    lbl_name: "نام و نام خانوادگی",
    lbl_email_field: "آدرس ایمیل",
    lbl_msg: "توضیحات پروژه",
    btn_send: "ارسال پیام",

    // 1. PRICING SECTION
    pricing_tag: "سرمایه‌گذاری",
    pricing_title: "قیمت‌گذاری شفاف",
    pricing_desc: "پکیج متناسب با اهداف و نیازهای کسب‌وکار خود را انتخاب کنید.",
    pricing_note:
      "هر پروژه با یک جلسه کشف شروع می‌شود و در صورت نیاز به امکانات اضافی، پروپوزال اختصاصی دریافت می‌کند.",

    p1_pkg_title: "پکیج هویت بصری (Brand Essentials)",
    p1_pkg_desc: "ایده‌آل برای کسب‌وکارهایی که به هویت بصری قوی نیاز دارند.",
    p1_pkg_price: "شروع از ۸,۰۰۰,۰۰۰ تومان",
    p1_f1: " طراحی لوگو",
    p1_f2: " پالت رنگی برند",
    p1_f3: " سیستم تایپوگرافی",
    p1_f4: " کارت ویزیت",
    p1_f5: " قالب‌های شبکه‌های اجتماعی",
    p1_f6: " راهنمای کوتاه برند (Mini Brandbook)",
    p1_f7: " طراحی بسته‌بندی (اختیاری)",
    p1_f8: " فایل‌های آماده چاپ",
    p1_f9: " فایل‌های سورس و لایه باز",
    p1_f10: " مجوز استفاده تجاری",
    p1_pkg_deliv: "زمان تحویل: ۷ تا ۱۲ روز",
    p1_pkg_btn: "شروع این پکیج",

    p2_pkg_title: "طراحی محصول (Product Design)",
    p2_pkg_desc: "عالی برای استارتاپ‌ها قبل از شروع کدنویسی و توسعه.",
    p2_pkg_price: "شروع از ۱۵,۰۰۰,۰۰۰ تومان",
    p2_f1: " تحقیقات تجربه کاربری (UX Research)",
    p2_f2: " تحلیل رقبا",
    p2_f3: " معماری اطلاعات",
    p2_f4: " جریان کاربری (User Flow)",
    p2_f5: " وایرفریم‌ها",
    p2_f6: " طراحی UI با کیفیت بالا",
    p2_f7: " طراحی واکنش‌گرا دسکتاپ و موبایل",
    p2_f8: " پروتوتایپ تعاملی",
    p2_f9: " سیستم دیزاین (Design System)",
    p2_f10: " فایل تحویل به برنامه‌نویس",
    p2_f11: " فایل سورس فیگما",
    p2_pkg_deliv: "زمان تحویل: ۲ تا ۴ هفته",
    p2_pkg_btn: "شروع این پکیج",

    p3_pkg_title: "توسعه و کدنویسی (Engineering)",
    p3_pkg_desc: "ایده‌آل برای کسب‌وکارهایی که طرح آماده دارند.",
    p3_pkg_price: "شروع از ۲۰,۰۰۰,۰۰۰ تومان",
    p3_f1: " توسعه واکنش‌گرا (Responsive)",
    p3_f2: " کدنویسی استاندارد HTML",
    p3_f3: " استایل‌دهی مدرن CSS",
    p3_f4: " تعاملات Vanilla JavaScript",
    p3_f5: " بهینه‌سازی سرعت و عملکرد",
    p3_f6: " بهینه‌سازی کامل نسخه موبایل",
    p3_f7: " ساختار آماده برای سئو",
    p3_f8: " نشانه‌گذاری Schema Markup",
    p3_f9: " فرم‌های تماس تعاملی",
    p3_f10: " بهینه‌سازی نمره Lighthouse",
    p3_f11: " پشتیبانی در راه‌اندازی و دیپلوی",
    p3_pkg_deliv: "زمان تحویل: ۳ تا ۵ هفته",
    p3_pkg_btn: "شروع این پکیج",

    p4_pkg_badge: "محبوب‌ترین",
    p4_pkg_title: "تجربه دیجیتال کامل (Digital Experience)",
    p4_pkg_desc: "راهکار جامع صفر تا صد برای حضور قدرتمند دیجیتال.",
    p4_pkg_price: "شروع از ۳۲,۰۰۰,۰۰۰ تومان",
    p4_f1: " شامل تمام امکانات طراحی محصول",
    p4_f2: " شامل تمام امکانات کدنویسی و توسعه",
    p4_f3: " مشاوره استراتژیک برند",
    p4_f4: " استراتژی لندینگ پیج",
    p4_f5: " سئوی فنی و تخصصی",
    p4_f6: " نصب و پیکربندی ابزارهای تحلیلی",
    p4_f7: " یک ماه پشتیبانی اختصاصی",
    p4_f8: " کمک در رونمایی و انتشار",
    p4_f9: " گزارش عملکرد و سرعت",
    p4_pkg_deliv: "زمان تحویل: ۴ تا ۶ هفته",
    p4_pkg_btn: "رزرو جلسه مشاوره",

    p5_pkg_title: "رونمایی کامل برند (Full Brand Launch)",
    p5_pkg_desc:
      "برای کسب‌وکارهایی که قصد راه‌اندازی یک برند کاملاً جدید را دارند.",
    p5_pkg_price: "شروع از ۴۵,۰۰۰,۰۰۰ تومان",
    p5_f1: " تمام امکانات پکیج هویت بصری",
    p5_f2: " تمام امکانات پکیج طراحی محصول",
    p5_f3: " تمام امکانات پکیج توسعه و کدنویسی",
    p5_f4: " استراتژی جامع برند",
    p5_f5: " سیستم جامع لوگو",
    p5_f6: " وب‌سایت اختصاصی کامل",
    p5_f7: " دارایی‌های گرافیکی شبکه‌های اجتماعی",
    p5_f8: " پایه‌ریزی سئوی اولیه",
    p5_f9: " پشتیبانی رونمایی",
    p5_f10: " اولویت در بازبینی‌ها",
    p5_pkg_deliv: "زمان تحویل: برنامه زمان‌بندی اختصاصی",
    p5_pkg_btn: "بیایید برند شما را بسازیم",

    // 2. ADD-ONS SECTION
    addons_tag: "امکانات تکمیلی",
    addons_title: "خدمات جانبی (Add-ons)",
    addons_desc: "افزونه‌های انعطاف‌پذیر برای ارتقای دامنه پروژه شما.",
    addon1_title: "صفحه اضافی",
    addon1_price: "+۲,۰۰۰,۰۰۰ تومان / هر صفحه",
    addon2_title: "لندینگ پیج اختصاصی",
    addon2_price: "۶,۰۰۰,۰۰۰ تومان",
    addon3_title: "طراحی داشبورد",
    addon3_price: "شروع از ۱۰,۰۰۰,۰۰۰ تومان",
    addon4_title: "راهنمای برند (Brandbook)",
    addon4_price: "۵,۰۰۰,۰۰۰ تومان",
    addon5_title: "طراحی بسته‌بندی",
    addon5_price: "شروع از ۵,۰۰۰,۰۰۰ تومان",
    addon6_title: "موشن گرافیک",
    addon6_price: "شروع از ۴,۰۰۰,۰۰۰ تومان",
    addon7_title: "بهینه‌سازی سئو",
    addon7_price: "شروع از ۸,۰۰۰,۰۰۰ تومان",
    addon8_title: "پشتیبانی و نگهداری وب‌سایت",
    addon8_price: "شروع از ۳,۰۰۰,۰۰۰ تومان / ماهانه",

    // 3. WHY NEORA SECTION
    why_tag: "چرا نئورا",
    why_title: "چرا مشتریان نئورا را انتخاب می‌کنند؟",
    why_desc: "مبتنی بر دقت، زیبایی‌شناسی لوکس و مهندسی استراتژیک کسب‌وکار.",
    why1_title: "طراحی بصری لوکس",
    why1_desc: "هر پروژه به صورت کاملاً اختصاصی و منحصر‌به‌فرد طراحی می‌شود.",
    why2_title: "تجربه کاربری با تمرکز بر فروش",
    why2_desc: "تصمیمات طراحی استراتژیک برای ارتقای نرخ تبدیل و رشد کسب‌وکار.",
    why3_title: "کدنویسی فرانت‌اند تمیز",
    why3_desc: "ساختار سریع، مقیاس‌پذیر و قابل نگهداری بدون کدهای اضافی.",
    why4_title: "آماده برای سئو",
    why4_desc:
      "کدنویسی استاندارد، دسترسی‌پذیری، نشانه‌گذاری Schema و نمره ۱۰۰ لایت‌هاوس.",
    why5_title: "همکاری بلندمدت",
    why5_desc: "پشتیبانی کامل پس از رونمایی و بهبودهای مستمر برای رشد پایدار.",

    // 4. FAQ SECTION
    faq_tag: "سوالات متداول",
    faq_title: "سوالات متداول",
    faq_desc: "پاسخ به سوالات کلیدی شما درباره شروع پروژه با نئورا.",
    faq1_q: "آیا امکان سفارش فقط طراحی UI وجود دارد؟",
    faq1_a:
      "بله، کاملاً. ما پکیج‌های مستقل طراحی UI/UX را همراه با پروتوتایپ تعاملی فیگما، سیستم دیزاین و فایل‌های آماده برای تحویل به برنامه‌نویس ارائه می‌دهیم.",
    faq2_q: "آیا می‌توانید وب‌سایت فعلی من را بازطراحی کنید؟",
    faq2_a:
      "بله. ما ابتدا عملکرد، تجربه کاربری و نقاط ضعف وب‌سایت فعلی شما را بررسی کرده و سپس پلتفرمی مدرن و پرفروش بازطراحی می‌کنیم.",
    faq3_q: "آیا با مشتریان بین‌المللی هم همکاری می‌کنید؟",
    faq3_a:
      "بله، استودیو نئورا با مشتریانی در سراسر جهان همکاری داشته و تمام ارتباطات و تحویل مراحل پروژه را آنلاین مدیریت می‌کند.",
    faq4_q: "چند مرحله بازبینی و ویرایش در پکیج‌ها گنجانده شده است؟",
    faq4_a:
      "هر پکیج شامل دوره‌های بازبینی مشخص در مراحل وایرفریم و طراحی نهایی است تا اطمینان حاصل شود محصول نهایی دقیقاً مطابق با اهداف شماست.",
    faq5_q: "شرایط پرداخت و تسویه‌حساب به چه صورت است؟",
    faq5_a:
      "پروژه‌ها معمولاً با ۵۰٪ پیش‌پرداخت پس از جلسه کشف اولیه شروع شده و مابقی آن طبق فازبندی پروپوزال تسویه می‌شود.",

    // 5. FINAL CTA SECTION
    final_cta_title: "برای ساخت یک اثر فوق‌العاده آماده‌اید؟",
    final_cta_desc:
      "بیایید ایده‌های شما را به یک تجربه دیجیتال لوکس تبدیل کنیم که هویت برند شما را منعکس کرده و باعث رشد کسب‌وکارتان شود.",
    btn_start_proj: "شروع پروژه شما",
    btn_sched_call: "رزرو جلسه مشاوره",
  },
  en: {
    nav_projects: "Projects",
    nav_services: "Services",
    nav_process: "Process",
    nav_about: "About",
    nav_contact: "Contact",
    btn_start: "Start Project",
    hero_tag: "Graphic Design & Digital Studio",
    hero_title: "Designing digital experiences & brand identities.",
    hero_desc:
      "Combining graphic design artistry, luxury visual identity, and front-end engineering to build high-converting websites.",
    btn_view_work: "View Portfolio",
    btn_contact: "Get in Touch",
    services_tag: "Capabilities",
    services_title: "Graphic & Digital Services",
    services_desc:
      "Tailored solution packages focused on brand visual identity, extreme luxury, and technical speed.",
    s1_title: "Graphic Design & Branding",
    s1_desc:
      "Full brand identity systems, logo design, stationery, brandbooks, and advertising posters.",
    s2_title: "UI/UX Design",
    s2_desc:
      "Intuitive interfaces, user research, wireframing, and Figma design systems crafted for high conversion.",
    s3_title: "Front-End Web Development",
    s3_desc:
      "Lightning-fast semantic code built with Vanilla JavaScript, smooth animations, and zero framework bloat.",
    s4_title: "SEO Optimization",
    s4_desc:
      "Rank #1 on Google with high-performance metadata, Schema.org integration, and Lighthouse 100 metrics.",
    projects_tag: "Selected Works",
    projects_title: "Featured Web Projects",
    projects_desc:
      "A glimpse into 5 of our flagship digital design and engineering case studies.",
    btn_case_study: "Case Study ➔",
    p1_desc:
      "A high-end real estate portal designed for high-net-worth property transactions with interactive 3D floor plans.",
    p2_desc:
      "Next-generation AI data platform landing page featuring glassmorphism elements and glowing data charts.",
    p3_desc:
      "Digital experience and interactive table reservation system for a Michelin-starred fine dining restaurant.",
    p4_desc:
      "Minimal luxury watch showcase platform built with precision typography and micro-interactions.",
    p5_desc:
      "Clean web interface for a mental wellness app focusing on soft gradients and peaceful user workflows.",
    graphic_tag: "Graphic Design & Identity",
    graphic_title: "Visual Art & Brand Identity",
    graphic_desc:
      "Crafting modern branding systems, iconic logos, luxury typography, and promotional artworks.",
    g1_title: "Apex Brand Identity & Guidelines",
    g1_desc:
      "Complete brand guidelines, custom logotype, color theory, and social media assets.",
    g2_title: "NEORA Typography Poster Series",
    g2_desc:
      "Exhibition concept posters combining modern Persian and English typography.",
    g3_title: "Chronos Product Packaging",
    g3_desc:
      "Minimalist packaging for high-end luxury watch products with foil stamping details.",
    process_tag: "Workflow",
    process_title: "The Execution Process",
    process_desc:
      "How we transform initial concepts into market-defining digital products.",
    pr1_title: "Discovery & Strategy",
    pr1_desc:
      "Uncovering target audiences, business goals, and defining clear milestones.",
    pr2_title: "Wireframing & UX",
    pr2_desc:
      "Architecting visual flow and interactive user journeys in Figma.",
    pr3_title: "UI & Visual Craft",
    pr3_desc:
      "Designing luxury pixel-perfect layouts, typography scales, and visual systems.",
    pr4_title: "Development & Launch",
    pr4_desc:
      "Writing high-speed semantic code, optimizing SEO, and deploying flawless releases.",
    blog_tag: "Insights & Articles",
    blog_title: "Design & SEO Journal",
    blog_desc:
      "Sharing specialized insights on UI/UX, graphic design rules, and SEO growth strategies.",
    b1_title: "Luxury Brand Identity Rules in 2026",
    b1_desc:
      "Exploring minimalism, custom typography, and restrained color palettes in brand elevation.",
    b2_title: "How Custom UI/UX Triples Conversions",
    b2_desc:
      "Analyzing user psychology and streamlined checkout paths in modern landing pages.",
    b3_title: "Technical SEO & Lighthouse 100 Score",
    b3_desc:
      "Guide to frontend code optimization, Schema.org structure, and page loading speed.",
    btn_read: "Read Article ➔",
    stat_projects: "Projects Completed",
    stat_clients: "Happy Business Clients",
    stat_years: "Years Experience",
    stat_score: "Lighthouse SEO Score",
    cta_title: "Let's Build Something Amazing Together",
    cta_desc:
      "Ready to take your digital presence and brand graphics to the next level of design excellence?",
    btn_book: "Book a Strategy Call",
    lbl_email: "Email Us",
    lbl_name: "Name",
    lbl_email_field: "Email Address",
    lbl_msg: "Project Details",
    btn_send: "Send Message",
    // 1. PRICING SECTION
    pricing_tag: "Investment",
    pricing_title: "Transparent Pricing",
    pricing_desc:
      "Choose the service package that matches your business goals.",
    pricing_note:
      "Every project starts with a discovery call and receives a custom proposal if additional features are required.",

    p1_pkg_title: "Brand Essentials",
    p1_pkg_desc: "Ideal for businesses that need a strong visual identity.",
    p1_pkg_price: "Starting from 8,000,000 Toman",
    p1_f1: " Logo Design",
    p1_f2: " Brand Color Palette",
    p1_f3: " Typography System",
    p1_f4: " Business Card",
    p1_f5: " Social Media Templates",
    p1_f6: " Mini Brand Guidelines",
    p1_f7: " Packaging Design (Optional)",
    p1_f8: " Print Ready Files",
    p1_f9: " Source Files",
    p1_f10: " Commercial License",
    p1_pkg_deliv: "Delivery: 7–12 Days",
    p1_pkg_btn: "Start This Package",

    p2_pkg_title: "Product Design",
    p2_pkg_desc: "Perfect for startups before development begins.",
    p2_pkg_price: "Starting from 15,000,000 Toman",
    p2_f1: " UX Research",
    p2_f2: " Competitor Analysis",
    p2_f3: " Information Architecture",
    p2_f4: " User Flow",
    p2_f5: " Wireframes",
    p2_f6: " High-Fidelity UI",
    p2_f7: " Responsive Desktop & Mobile",
    p2_f8: " Interactive Prototype",
    p2_f9: " Design System",
    p2_f10: " Developer Handoff",
    p2_f11: " Figma Source File",
    p2_pkg_deliv: "Delivery: 2–4 Weeks",
    p2_pkg_btn: "Start This Package",

    p3_pkg_title: "Engineering",
    p3_pkg_desc: "Ideal for businesses that already have a design.",
    p3_pkg_price: "Starting from 20,000,000 Toman",
    p3_f1: " Responsive Development",
    p3_f2: " HTML",
    p3_f3: " CSS",
    p3_f4: " JavaScript",
    p3_f5: " Performance Optimization",
    p3_f6: " Mobile Optimization",
    p3_f7: " SEO-ready Structure",
    p3_f8: " Schema Markup",
    p3_f9: " Contact Forms",
    p3_f10: " Lighthouse Optimization",
    p3_f11: " Deployment Assistance",
    p3_pkg_deliv: "Delivery: 3–5 Weeks",
    p3_pkg_btn: "Start This Package",

    p4_pkg_badge: "Most Popular",
    p4_pkg_title: "Digital Experience",
    p4_pkg_desc: "Complete end-to-end digital solution.",
    p4_pkg_price: "Starting from 32,000,000 Toman",
    p4_f1: " Everything included in Product Design",
    p4_f2: " Everything included in Engineering",
    p4_f3: " Brand Consultation",
    p4_f4: " Landing Page Strategy",
    p4_f5: " Technical SEO",
    p4_f6: " Analytics Setup",
    p4_f7: " One Month Support",
    p4_f8: " Launch Assistance",
    p4_f9: " Performance Report",
    p4_pkg_deliv: "Delivery: 4–6 Weeks",
    p4_pkg_btn: "Book a Discovery Call",

    p5_pkg_title: "Full Brand Launch",
    p5_pkg_desc: "For businesses launching a completely new brand.",
    p5_pkg_price: "Starting from 45,000,000 Toman",
    p5_f1: " Everything from Brand Essentials",
    p5_f2: " Everything from Product Design",
    p5_f3: " Everything from Engineering",
    p5_f4: " Brand Strategy",
    p5_f5: " Logo System",
    p5_f6: " Website",
    p5_f7: " Social Media Assets",
    p5_f8: " SEO Foundation",
    p5_f9: " Launch Support",
    p5_f10: " Priority Revisions",
    p5_pkg_deliv: "Delivery: Tailored Timeline",
    p5_pkg_btn: "Let's Build Your Brand",

    // 2. ADD-ONS SECTION
    addons_tag: "Extensions",
    addons_title: "Optional Add-ons",
    addons_desc:
      "Flexible extra services to enhance your existing project scope.",
    addon1_title: "Extra Page",
    addon1_price: "+2,000,000 Toman/page",
    addon2_title: "Landing Page",
    addon2_price: "6,000,000 Toman",
    addon3_title: "Dashboard Design",
    addon3_price: "Starting from 10,000,000 Toman",
    addon4_title: "Brand Guidelines",
    addon4_price: "5,000,000 Toman",
    addon5_title: "Packaging Design",
    addon5_price: "Starting from 5,000,000 Toman",
    addon6_title: "Motion Graphics",
    addon6_price: "Starting from 4,000,000 Toman",
    addon7_title: "SEO Optimization",
    addon7_price: "Starting from 8,000,000 Toman",
    addon8_title: "Website Maintenance",
    addon8_price: "Starting from 3,000,000 Toman/month",

    // 3. WHY NEORA SECTION
    why_tag: "Why NEORA",
    why_title: "Why Clients Choose NEORA",
    why_desc:
      "Built on precision, aesthetic excellence, and strategic business engineering.",
    why1_title: "Premium Visual Design",
    why1_desc:
      "Every project is uniquely designed to reflect luxury and brand distinction.",
    why2_title: "Conversion-Focused UX",
    why2_desc:
      "Strategic design decisions tailored to guide users and improve business performance.",
    why3_title: "Clean Front-end Code",
    why3_desc:
      "Fast, scalable, maintainable architecture with zero bloat or unnecessary dependencies.",
    why4_title: "SEO Ready",
    why4_desc:
      "Semantic HTML, web accessibility, Schema markup, and Lighthouse 100 performance.",
    why5_title: "Long-Term Partnership",
    why5_desc:
      "Dedicated post-launch support and continuous optimizations to fuel long-term growth.",

    // 4. FAQ SECTION
    faq_tag: "Questions",
    faq_title: "Frequently Asked Questions",
    faq_desc:
      "Everything you need to know about starting a project with NEORA.",
    faq1_q: "Can I order only UI Design?",
    faq1_a:
      "Yes, absolutely. We offer standalone UI/UX design packages complete with interactive Figma prototypes, component design systems, and developer-ready handoff files.",
    faq2_q: "Can you redesign an existing website?",
    faq2_a:
      "Yes. We evaluate your current website's performance, user experience, and conversion bottlenecks to engineer a modernized, high-converting digital platform.",
    faq3_q: "Do you work internationally?",
    faq3_a:
      "Yes, NEORA collaborates with clients globally, managing communication, strategy, and milestones seamlessly through digital collaboration platforms.",
    faq4_q: "How many revisions are included?",
    faq4_a:
      "Each package includes structured revision rounds during both wireframing and high-fidelity design phases to guarantee the final release matches your vision.",
    faq5_q: "How does payment work?",
    faq5_a:
      "Projects typically begin with a 50% deposit following our initial discovery call, with the remaining balance scheduled upon milestone deliverables or final release.",

    // 5. FINAL CTA SECTION
    final_cta_title: "Ready to Build Something Exceptional?",
    final_cta_desc:
      "Let's transform your ideas into a premium digital experience that reflects your brand and helps your business grow.",
    btn_start_proj: "Start Your Project",
    btn_sched_call: "Schedule a Discovery Call",
  },
};

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";

  // Update switcher button label
  const langBtn = document.getElementById("lang-btn");
  if (langBtn) {
    langBtn.textContent = lang === "fa" ? "EN" : "FA";
  }

  // Translate all DOM elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });
}

function toggleLanguage() {
  const newLang = currentLang === "fa" ? "en" : "fa";
  applyLanguage(newLang);
}

// Immediately translate the entire DOM to Farsi on page load
applyLanguage("fa");
window.addEventListener("DOMContentLoaded", () => {
  applyLanguage("fa");
});

// 6. Canvas Interactive Glass Sphere (Vanilla Canvas Animation)
const canvas = document.getElementById("hero-canvas");
const ctx = canvas.getContext("2d");
let width, height;
let mouse = { x: 0, y: 0 };

function resizeCanvas() {
  width = canvas.width = canvas.offsetWidth;
  height = canvas.height = canvas.offsetHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

window.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left - width / 2;
  mouse.y = e.clientY - rect.top - height / 2;
});

let time = 0;
function draw3DOrb() {
  time += 0.01;
  ctx.clearRect(0, 0, width, height);

  const centerX = width / 2 + mouse.x * 0.05;
  const centerY = height / 2 + mouse.y * 0.05;
  const radius = Math.min(width, height) * 0.28;

  // Soft Blur Ambient Glow Behind
  const glowGrad = ctx.createRadialGradient(
    centerX,
    centerY,
    10,
    centerX,
    centerY,
    radius * 1.6,
  );
  glowGrad.addColorStop(0, "rgba(93, 183, 255, 0.45)");
  glowGrad.addColorStop(1, "rgba(247, 251, 255, 0)");
  ctx.fillStyle = glowGrad;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius * 1.6, 0, Math.PI * 2);
  ctx.fill();

  // Main Glass Orb Surface
  const orbGrad = ctx.createLinearGradient(
    centerX - radius,
    centerY - radius,
    centerX + radius,
    centerY + radius,
  );
  orbGrad.addColorStop(0, "rgba(255, 255, 255, 0.8)");
  orbGrad.addColorStop(0.5, "rgba(217, 241, 255, 0.4)");
  orbGrad.addColorStop(1, "rgba(93, 183, 255, 0.6)");

  ctx.fillStyle = orbGrad;
  ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.arc(
    centerX + Math.sin(time) * 6,
    centerY + Math.cos(time) * 6,
    radius,
    0,
    Math.PI * 2,
  );
  ctx.fill();
  ctx.stroke();

  // Floating Inner Reflection Ring
  ctx.beginPath();
  ctx.ellipse(
    centerX,
    centerY - radius * 0.3,
    radius * 0.6,
    radius * 0.2,
    Math.PI / 6 + time * 0.5,
    0,
    Math.PI * 2,
  );
  ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  requestAnimationFrame(draw3DOrb);
}
draw3DOrb();

// 7. Animated Numbers Intersection Observer
const statsSection = document.querySelector(".stats-grid");
let counted = false;

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting && !counted) {
      counted = true;
      document.querySelectorAll(".stat-number").forEach((stat) => {
        const target = +stat.getAttribute("data-target");
        let count = 0;
        const speed = target / 40;
        const updateCount = () => {
          count += speed;
          if (count < target) {
            stat.textContent = Math.ceil(count);
            setTimeout(updateCount, 30);
          } else {
            stat.textContent = target + "+";
          }
        };
        updateCount();
      });
    }
  },
  { threshold: 0.5 },
);

if (statsSection) observer.observe(statsSection);

// Mobile Menu Toggle & Drawer Functions
function toggleMobileMenu() {
  const hamburger = document.getElementById("hamburger-btn");
  const drawer = document.getElementById("mobile-menu-drawer");
  const overlay = document.getElementById("mobile-menu-overlay");

  const isActive = drawer.classList.contains("active");

  if (isActive) {
    closeMobileMenu();
  } else {
    hamburger.classList.add("active");
    drawer.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Lock scroll
  }
}

function closeMobileMenu() {
  const hamburger = document.getElementById("hamburger-btn");
  const drawer = document.getElementById("mobile-menu-drawer");
  const overlay = document.getElementById("mobile-menu-overlay");

  if (hamburger) hamburger.classList.remove("active");
  if (drawer) drawer.classList.remove("active");
  if (overlay) overlay.classList.remove("active");
  document.body.style.overflow = ""; // Unlock scroll
}
