
interface FAQCategory {
  category: string;
  questions: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string;
}

// Comprehensive FAQ data organized by categories
export const faqData: FAQCategory[] = [
  {
    category: "Admissions",
    questions: [
      {
        question: "What are the eligibility criteria for admission?",
        answer: "For UG programs, candidates must have completed 10+2 or equivalent with a minimum of 50% marks. For PG programs, a relevant bachelor's degree with 50% marks is required. Specific programs may have additional requirements like portfolio submissions or entrance exams."
      },
      {
        question: "When does the admission process start?",
        answer: "The admission process typically begins in January each year, with applications being accepted until seats are filled. Early applications are encouraged as admissions are granted on a first-come, first-served basis for qualified candidates."
      },
      {
        question: "Is there an entrance exam?",
        answer: "Yes, BSDT conducts an aptitude test for most programs to assess the candidate's suitability. The test evaluates creative thinking, problem-solving abilities, and domain knowledge relevant to the chosen program. Some programs also require portfolio submissions and personal interviews."
      },
      {
        question: "How can I apply for scholarships?",
        answer: "Scholarship applications are considered alongside your admission application. Merit scholarships are awarded based on academic performance, portfolio quality, and entrance test scores. Need-based scholarships require additional financial documentation. Visit our Fees & Scholarships page for more details."
      }
    ]
  },
  {
    category: "Programs & Curriculum",
    questions: [
      {
        question: "What programs does BSDT offer?",
        answer: "BSDT offers a range of undergraduate and postgraduate programs in design and technology, including Interior Design, Graphic Design, Animation & Multimedia, BCA with UI/UX specialization, B.Sc Computer Science with various specializations, Architectural Design, Interaction & Experience Design, and various professional diploma courses."
      },
      {
        question: "What is the 'Beyond Curriculum' approach?",
        answer: "Our Beyond Curriculum approach dedicates one full day each week to activities beyond traditional academics. This includes design studio classes, workshops, guest lectures, off-campus learning, and site visits. This approach prioritizes skill development over pure academic performance, giving our graduates a significant edge in the professional world."
      },
      {
        question: "Does BSDT provide internship opportunities?",
        answer: "Yes, internships are an integral part of our curriculum. We have partnerships with leading industry organizations where students can gain practical experience. Our placement cell actively works to secure meaningful internship opportunities aligned with students' career goals."
      },
      {
        question: "What is Studio BSD?",
        answer: "Studio BSD is our in-house design and technology studio where students can work on real-world projects. The studio offers state-of-the-art facilities including design studios, digital labs, and maker spaces. Students gain invaluable hands-on experience while building their portfolios with industry-relevant projects."
      }
    ]
  },
  {
    category: "Fees & Financial Aid",
    questions: [
      {
        question: "What is the fee structure for different programs?",
        answer: "Fee structures vary by program. For example, B.Sc. Interior Design & Decoration has a total fee of ₹4,90,000 for the 3-year program, while B. Des (Hons.) Interaction and Experience Design has a total fee of ₹7,50,000 for the 4-year program. Please visit our Fees & Scholarships page for detailed information."
      },
      {
        question: "Is there a registration fee?",
        answer: "Yes, there is a one-time registration fee of ₹30,000 which is adjusted against the first semester fees. This fee is non-refundable after the commencement of the program."
      },
      {
        question: "Are there any scholarships available?",
        answer: "BSDT offers both merit-based and need-based scholarships. Merit scholarships reward academic excellence, creativity, and aptitude, while need-based scholarships support deserving students with financial constraints. Scholarship amounts vary from 10% to 50% of the tuition fee."
      },
      {
        question: "Is there a facility for education loans?",
        answer: "Yes, BSDT has tie-ups with several banks that offer education loans to our students. Our finance office can provide assistance and documentation required for loan applications."
      }
    ]
  },
  {
    category: "Campus Life & Facilities",
    questions: [
      {
        question: "Is accommodation available for students?",
        answer: "Yes, BSDT offers accommodation facilities for outstation students. We have tie-ups with safe and comfortable hostels near the campus. The accommodation includes amenities like Wi-Fi, laundry services, and dining facilities. Our student affairs office can assist with finding suitable accommodation options."
      },
      {
        question: "What facilities are available on campus?",
        answer: "Our campus features state-of-the-art facilities including design studios, computer labs, workshops, material library, digital fabrication lab, multimedia studio, recording facilities, library with extensive design and technical resources, cafeteria, and recreational spaces."
      },
      {
        question: "Are there any extracurricular activities?",
        answer: "BSDT encourages a holistic educational experience with numerous clubs for photography, design, coding, sports, cultural activities, and more. We organize annual design festivals, exhibitions, workshops, and inter-college competitions to foster creativity and teamwork."
      },
      {
        question: "Is there career counseling or placement assistance?",
        answer: "Yes, our dedicated Placement Cell provides comprehensive career counseling, resume building workshops, interview preparation, and job placement assistance. We have strong industry connections and regularly host recruitment drives on campus."
      }
    ]
  },
  {
    category: "International Opportunities",
    questions: [
      {
        question: "Does BSDT have any international collaborations?",
        answer: "BSDT has collaborations with several international universities and design institutes for student exchange programs, joint workshops, and research initiatives. These partnerships provide students with global exposure and opportunities to learn diverse design perspectives."
      },
      {
        question: "Are there opportunities for studying abroad?",
        answer: "Yes, through our international partnerships, eligible students can participate in semester exchange programs, summer schools, and collaborative projects with partner institutions worldwide. These experiences enrich students' portfolios and global understanding of design and technology."
      }
    ]
  }
];
