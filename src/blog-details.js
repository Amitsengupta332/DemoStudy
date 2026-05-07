const blogs = {
  "australia-study-guide": {
    title: "Complete Guide To Studying In Australia In 2026",
    breadcrumb: "Australia Study Guide",
    image: "/images/blog/australia-study-guide-2026.avif",
    imageAlt: "Student planning to study in Australia",
    date: "📅 7 May 2026",
    author: "👤 Study Australia",
    category: "🏷 Study Guide",
    content: `
      <p>
        Australia continues to be one of the most popular study destinations for international students because of its quality education system, multicultural environment, modern campuses, and strong student support services.
      </p>

      <p>
        Before starting your Australia study journey, students should understand the key steps clearly. These usually include choosing the right course, selecting a suitable institution, preparing documents, applying for admission, planning finances, and preparing for the student visa process.
      </p>

      <h3 class="text-[#001f5c] text-[28px] font-extrabold mt-10 mb-4">Why Students Choose Australia</h3>

      <p>
        Australia offers a wide range of study options, including universities, TAFEs, private colleges, and vocational training providers. Students can choose from popular fields such as business, information technology, engineering, healthcare, hospitality, education, and trades.
      </p>

      <h3 class="text-[#001f5c] text-[28px] font-extrabold mt-10 mb-4">Important Steps Before Applying</h3>

      <p>
        The first step is to review your academic background and future goals. After that, you should compare courses, tuition fees, entry requirements, location, intake dates, and possible career pathways. A well-planned decision can make your study journey smoother and more successful.
      </p>

      <p>
        Students should also prepare important documents early, including academic certificates, transcripts, passport, English test results, statement of purpose, and financial documents where required.
      </p>
    `
  },

  "best-courses-australia": {
    title: "Best Courses To Study In Australia For International Students",
    breadcrumb: "Best Courses Australia",
    image: "/images/blog/best-courses-australia.avif",
    imageAlt: "International students exploring courses in Australia",
    date: "📅 7 May 2026",
    author: "👤 Study Australia",
    category: "🏷 Courses",
    content: `
      <p>
        Choosing the right course is one of the most important decisions for students planning to study in Australia. The best course depends on your academic background, interests, budget, and long-term career goals.
      </p>

      <p>
        Australia offers a wide range of programs across universities, TAFEs, and colleges. Students can choose academic degrees, vocational courses, pathway programs, and professional qualifications based on their future plans.
      </p>

      <h3 class="text-[#001f5c] text-[28px] font-extrabold mt-10 mb-4">Popular Study Areas</h3>

      <p>
        Some popular study areas for international students include business and management, information technology, engineering, healthcare and nursing, hospitality and tourism, education, trades, and vocational training.
      </p>

      <h3 class="text-[#001f5c] text-[28px] font-extrabold mt-10 mb-4">How To Choose The Right Course</h3>

      <p>
        Students should compare course structure, tuition fees, duration, campus location, entry requirements, and career outcomes. It is also important to understand whether the course matches your skills, interests, and long-term professional direction.
      </p>

      <p>
        A good course choice should support both your academic journey and future career planning.
      </p>
    `
  },

  "student-visa-australia": {
    title: "Australia Student Visa Guide For New Applicants",
    breadcrumb: "Student Visa Guide",
    image: "/images/blog/student-visa-australia.avif",
    imageAlt: "Australia student visa application guidance",
    date: "📅 7 May 2026",
    author: "👤 Study Australia",
    category: "🏷 Visa Guidance",
    content: `
      <p>
        The student visa process is an important part of studying in Australia. Students need to prepare carefully and understand the documents, timelines, and requirements before applying.
      </p>

      <p>
        A strong visa preparation process starts with a clear study plan, proper admission documents, accurate personal information, and organized supporting documents.
      </p>

      <h3 class="text-[#001f5c] text-[28px] font-extrabold mt-10 mb-4">Documents Students Should Prepare</h3>

      <p>
        Common documents may include passport, admission offer, confirmation of enrolment where applicable, academic documents, English test results, financial documents, health cover details, and personal statements depending on the case.
      </p>

      <h3 class="text-[#001f5c] text-[28px] font-extrabold mt-10 mb-4">Why Proper Guidance Matters</h3>

      <p>
        Visa preparation should be done carefully because incomplete or inconsistent information can create delays. Students should review their documents properly and understand each step before submission.
      </p>

      <p>
        With proper planning and guidance, students can approach the visa process with more confidence and clarity.
      </p>
    `
  }
};

const params = new URLSearchParams(window.location.search);
const blogKey = params.get("blog") || "australia-study-guide";
const blog = blogs[blogKey] || blogs["australia-study-guide"];

document.title = `${blog.title} - Study Australia`;

document.getElementById("blogBannerTitle").textContent = blog.title;
document.getElementById("blogBreadcrumb").textContent = blog.breadcrumb;

const blogImage = document.getElementById("blogImage");
blogImage.src = blog.image;
blogImage.alt = blog.imageAlt;

document.getElementById("blogDate").textContent = blog.date;
document.getElementById("blogAuthor").textContent = blog.author;
document.getElementById("blogCategory").textContent = blog.category;
document.getElementById("blogTitle").textContent = blog.title;
document.getElementById("blogContent").innerHTML = blog.content;