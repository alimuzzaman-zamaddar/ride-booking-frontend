import guitar from "../../assets/teachers/Frame 2147227146.png";
import man from "../../assets/teachers/image 2491.png";
import woman from "../../assets/teachers/image 2492.png";
import aunty from "../../assets/teachers/image 2493.png";
import taklu from "../../assets/teachers/image 2494.png";
import belgium from "../../assets/teachers/image 2496 (1).png";
import unknown from "../../assets/teachers/image 2497.png";
import france from "../../assets/images/available-tutor/country-flag/france.png";
import train from "../../assets/videos/train.mp4";

import musicImg from "../../assets/teachstyle/music-0.jpeg"
import musicImg1 from "../../assets/teachstyle/music-2.jpeg";
import musicImg4 from "../../assets/teachstyle/music-3.jpeg";
import musicImg5 from "../../assets/teachstyle/music-6.jpeg";
import musicImg6 from "../../assets/teachstyle/music-7.jpeg";
import musicImg7 from "../../assets/teachstyle/music-8.jpeg";
import musicImg8 from "../../assets/teachstyle/music-9.jpeg";
import yogaImg from "../../assets/teachstyle/yoga-2.jpeg";
import yogaImg1 from "../../assets/teachstyle/yoga-4.jpeg";
import yogaImg2 from "../../assets/teachstyle/yoga-7.jpeg";
import yogaImg3 from "../../assets/teachstyle/yoga-9.jpeg";
import yogaImg4 from "../../assets/teachstyle/yoga.jpeg";
import yogaImg5 from "../../assets/teachstyle/yoga5.jpeg";
import yogaImg6 from "../../assets/teachstyle/youga-3.jpeg";
import programmingImg from "../../assets/teachstyle/music-3.jpeg";
import programmingImg1 from "../../assets/teachstyle/attachment (13).jpeg";
import chessImg from "../../assets/teachstyle/chess-4.jpeg";
import chessImg1 from "../../assets/teachstyle/chess-6.jpeg";
import chessImg2 from "../../assets/teachstyle/chess-4.jpeg";
import artImg from "../../assets/teachstyle/art.jpeg";
import artImg1 from "../../assets/teachstyle/art2.jpeg";
import artImg3 from "../../assets/teachstyle/art-3.jpeg";
import mathImg from "../../assets/teachstyle/math.jpeg";
import mathImg1 from "../../assets/teachstyle/math2.jpeg";
import mathImg3 from "../../assets/teachstyle/math3.jpeg";
import writingImg from "../../assets/teachstyle/writing.jpeg";
import writingImg1 from "../../assets/teachstyle/attachment (40).jpeg";
import writingImg3 from "../../assets/teachstyle/attachment (39).jpeg";




export const teacherDetials = [
  {
    id: 1,
    tutorName: "Dianne Russell",
    bgImgUrl: guitar,
    designation: "Music Expert",
    ratingCount: 5.0,
    reviewCount: 50847,
    lessonsCount: 2450,
    hourlyRate: 25,
    trialRate: 12,
    shortDescreption:
      "Certified English teacher with 8+ years of experience. I specialize in business English and exam preparation.",
    location: "United States",
    languagePreferences: "English, spanishh",
    respondTime: 2,
    expertise: ["Ashtanga Yoga", "Restorative Yoga", "Therapeutic Yoga"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: france,
    country: "spain",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: `Master's in TESOL`,
        institutionName: "University of California, 2017",
      },
      {
        qulifiactionName: `Bachelor's in English Literature`,
        institutionName: "University of Washington, 2015",
      },
    ],
    specialities: ["Grammar", "Conversation", "DELE Preparation"],
    subjects: ["Spanis", "english", "spanish grammer"],
    review: [
      {
        name: "Ahmed Hassan",
        rating: 5,
        comment:
          "Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended. Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended!!",
        date: "2 weeks ago",
      },
      {
        name: "Maria Lopez",
        rating: 5,
        comment:
          "Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended. Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended!!",
        date: "1 Month ago",
      },
      {
        name: "John Smith",
        rating: 5,
        comment:
          "Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended. Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended!!",
        date: "1 Month ago",
      },
    ],
    lessonsType:
      Number(Math.random() * 100) > Number(Math.random() * 100)
        ? "Regular lessons"
        : "Trial lessons",
  },
  {
    id: 2,
    tutorName: "Robert Jones",
    bgImgUrl: taklu,
    designation: "Yoga Expert",
    ratingCount: 5.0,
    reviewCount: 50847,
    lessonsCount: 2450,
    hourlyRate: 25,
    trialRate: 12,
    shortDescreption:
      "Certified English teacher with 8+ years of experience. I specialize in business English and exam preparation.",
    location: "United States",
    languagePreferences: "English, Spanish",
    respondTime: 2,
    expertise: ["Music theory", "Guitar", "Piano"],
    isAvailable: false,
    introductionVideo: train,
    countryFlagImgUrl: belgium,
    country: "spain",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: `Master's in TESOL`,
        institutionName: "University of California, 2017",
      },
      {
        qulifiactionName: `Bachelor's in English Literature`,
        institutionName: "University of Washington, 2015",
      },
    ],

    specialities: ["Grammar", "Conversation", "DELE Preparation"],
    subjects: ["Spanis", "english", "spanish grammer"],
    review: [
      {
        name: "Ahmed Hassan",
        rating: 5,
        comment:
          "Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended. Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended!!",
        date: "2 weeks ago",
      },
      {
        name: "Maria Lopez",
        rating: 5,
        comment:
          "Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended. Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended!!",
        date: "1 Month ago",
      },
      {
        name: "John Smith",
        rating: 5,
        comment:
          "Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended. Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended!!",
        date: "1 Month ago",
      },
    ],
    lessonsType:
      Number(Math.random() * 100) > Number(Math.random() * 100)
        ? "Regular lessons"
        : "Trial lessons",
  },
  {
    id: 3,
    tutorName: "Courtney Henry",
    bgImgUrl: aunty,
    designation: "Art & drawing",
    ratingCount: 5.0,
    reviewCount: 50847,
    lessonsCount: 2450,
    hourlyRate: 25,
    trialRate: 12,
    shortDescreption:
      "Certified English teacher with 8+ years of experience. I specialize in business English and exam preparation.",
    location: "United States",
    languagePreferences: "English, Spanish",
    respondTime: 2,
    expertise: ["Figure drawing", "Shading", "Color theory"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: unknown,
    country: "spain",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: `Master's in TESOL`,
        institutionName: "University of California, 2017",
      },
      {
        qulifiactionName: `Bachelor's in English Literature`,
        institutionName: "University of Washington, 2015",
      },
    ],
    specialities: ["Grammar", "Conversation", "DELE Preparation"],
    subjects: ["Spanis", "english", "spanish grammer"],
    review: [
      {
        name: "Ahmed Hassan",
        rating: 5,
        comment:
          "Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended. Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended!!",
        date: "2 weeks ago",
      },
      {
        name: "Maria Lopez",
        rating: 5,
        comment:
          "Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended. Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended!!",
        date: "1 Month ago",
      },
      {
        name: "John Smith",
        rating: 5,
        comment:
          "Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended. Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended!!",
        date: "1 Month ago",
      },
    ],
    lessonsType:
      Number(Math.random() * 100) > Number(Math.random() * 100)
        ? "Regular lessons"
        : "Trial lessons",
  },
  {
    id: 4,
    tutorName: "Wade Warren",
    bgImgUrl: man,
    designation: "Painting lessons",
    ratingCount: 5.0,
    reviewCount: 50847,
    lessonsCount: 2450,
    hourlyRate: 25,
    trialRate: 12,
    shortDescreption:
      "Certified English teacher with 8+ years of experience. I specialize in business English and exam preparation.",
    location: "United States",
    languagePreferences: "English, Spanish",
    respondTime: 2,
    expertise: ["Watercolor", "Canvas work", "Acrylic techniques"],
    isAvailable: false,
    introductionVideo: train,
    countryFlagImgUrl: france,
    country: "spain",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: `Master's in TESOL`,
        institutionName: "University of California, 2017",
      },
      {
        qulifiactionName: `Bachelor's in English Literature`,
        institutionName: "University of Washington, 2015",
      },
    ],
    specialities: ["Grammar", "Conversation", "DELE Preparation"],
    subjects: ["Spanis", "english", "spanish grammer"],
    review: [
      {
        name: "Ahmed Hassan",
        rating: 5,
        comment:
          "Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended. Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended!!",
        date: "2 weeks ago",
      },
      {
        name: "Maria Lopez",
        rating: 5,
        comment:
          "Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended. Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended!!",
        date: "1 Month ago",
      },
      {
        name: "John Smith",
        rating: 5,
        comment:
          "Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended. Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended!!",
        date: "1 Month ago",
      },
    ],
    lessonsType:
      Number(Math.random() * 100) > Number(Math.random() * 100)
        ? "Regular lessons"
        : "Trial lessons",
  },
  {
    id: 5,
    tutorName: "Theresa Webb",
    bgImgUrl: woman,
    designation: "Meditation Lessons",
    ratingCount: 5.0,
    reviewCount: 50847,
    lessonsCount: 2450,
    hourlyRate: 25,
    trialRate: 12,
    shortDescreption:
      "Certified English teacher with 8+ years of experience. I specialize in business English and exam preparation.",
    location: "United States",
    languagePreferences: "English, Spanish",
    respondTime: 2,
    expertise: ["Breathing techniques", "Mindfulness practices"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: unknown,
    country: "spain",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: `Master's in TESOL`,
        institutionName: "University of California, 2017",
      },
      {
        qulifiactionName: `Bachelor's in English Literature`,
        institutionName: "University of Washington, 2015",
      },
    ],
    specialities: ["Grammar", "Conversation", "DELE Preparation"],
    subjects: ["Spanis", "english", "spanish grammer"],
    review: [
      {
        name: "Ahmed Hassan",
        rating: 5,
        comment:
          "Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended. Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended!!",
        date: "2 weeks ago",
      },
      {
        name: "Maria Lopez",
        rating: 5,
        comment:
          "Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended. Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended!!",
        date: "1 Month ago",
      },
      {
        name: "John Smith",
        rating: 5,
        comment:
          "Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended. Sarah is an excellent teacher! She helped me improve my business English significantly. Highly recommended!!",
        date: "1 Month ago",
      },
    ],
    lessonsType:
      Number(Math.random() * 100) > Number(Math.random() * 100)
        ? "Regular lessons"
        : "Trial lessons",
  },

  {
    id: 6,
    tutorName: "Laura Clark",
    bgImgUrl: musicImg,
    designation: "Music Theory Expert",
    ratingCount: 4.8,
    reviewCount: 2145,
    lessonsCount: 312,
    hourlyRate: 30,
    trialRate: 15,
    shortDescreption:
      "Experienced music theory tutor with a focus on classical and contemporary music.",
    location: "United Kingdom",
    languagePreferences: "English, French",
    respondTime: 1,
    expertise: ["Music theory", "Piano", "Music composition"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: unknown,
    country: "United Kingdom",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "Bachelor's in Music Theory",
        institutionName: "Royal College of Music, 2015",
      },
    ],
    specialities: ["Classical Music", "Music Composition"],
    subjects: ["Music Theory", "Piano"],
    review: [
      {
        name: "Emma Jones",
        rating: 5,
        comment:
          "Laura is an incredible teacher. She made music theory so much easier to understand!",
        date: "2 weeks ago",
      },
    ],
    lessonsType: "Regular lessons",
  },
  {
    id: 7,
    tutorName: "David Turner",
    bgImgUrl: yogaImg,
    designation: "Yoga Instructor",
    ratingCount: 4.9,
    reviewCount: 3145,
    lessonsCount: 2100,
    hourlyRate: 20,
    trialRate: 10,
    shortDescreption:
      "Experienced yoga instructor, specializing in Vinyasa and Hatha Yoga.",
    location: "Canada",
    languagePreferences: "English, Spanish",
    respondTime: 3,
    expertise: ["Vinyasa", "Hatha Yoga", "Mindfulness"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: unknown,
    country: "Canada",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "200-Hour Yoga Teacher Certification",
        institutionName: "Yoga Alliance, 2018",
      },
    ],
    specialities: ["Mindfulness", "Breathing techniques"],
    subjects: ["Yoga", "Meditation"],
    review: [
      {
        name: "John Doe",
        rating: 5,
        comment:
          "David's yoga sessions have helped me reduce stress and improve flexibility!",
        date: "1 month ago",
      },
    ],
    lessonsType: "Trial lessons",
  },
  {
    id: 8,
    tutorName: "Sophia Williams",
    bgImgUrl: programmingImg,
    designation: "Programming Instructor",
    ratingCount: 5.0,
    reviewCount: 5120,
    lessonsCount: 3200,
    hourlyRate: 40,
    trialRate: 20,
    shortDescreption:
      "Expert in coding languages, with a focus on Python and JavaScript.",
    location: "United States",
    languagePreferences: "English",
    respondTime: 1,
    expertise: ["Python", "JavaScript", "Web Development"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: unknown,
    country: "United States",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "Bachelor's in Computer Science",
        institutionName: "Stanford University, 2016",
      },
    ],
    specialities: ["Web Development", "Python Programming"],
    subjects: ["Python", "JavaScript", "Web Development"],
    review: [
      {
        name: "Sarah Miller",
        rating: 5,
        comment:
          "Sophia is an amazing teacher! I learned web development in a matter of weeks!",
        date: "2 weeks ago",
      },
    ],
    lessonsType: "Regular lessons",
  },
  {
    id: 9,
    tutorName: "Ethan Taylor",
    bgImgUrl: chessImg,
    designation: "Chess Master",
    ratingCount: 5.0,
    reviewCount: 2987,
    lessonsCount: 420,
    hourlyRate: 30,
    trialRate: 15,
    shortDescreption:
      "Chess expert with 10+ years of competitive experience. I help students reach their full potential.",
    location: "India",
    languagePreferences: "English, Hindi",
    respondTime: 1,
    expertise: ["Chess strategy", "Opening theory", "Endgame"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: unknown,
    country: "India",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "Grandmaster in Chess",
        institutionName: "World Chess Federation, 2012",
      },
    ],
    specialities: ["Opening strategies", "Endgame tactics"],
    subjects: ["Chess", "Strategy"],
    review: [
      {
        name: "Abhishek Kumar",
        rating: 5,
        comment:
          "Ethan helped me improve my chess game significantly. Highly recommend!",
        date: "1 month ago",
      },
    ],
    lessonsType: "Regular lessons",
  },
  {
    id: 10,
    tutorName: "Anna Bell",
    bgImgUrl: artImg,
    designation: "Art & Drawing Instructor",
    ratingCount: 4.8,
    reviewCount: 1500,
    lessonsCount: 800,
    hourlyRate: 35,
    trialRate: 18,
    shortDescreption:
      "Specializing in realistic drawing techniques and digital painting.",
    location: "Australia",
    languagePreferences: "English",
    respondTime: 2,
    expertise: ["Drawing", "Watercolor", "Digital art"],
    isAvailable: false,
    introductionVideo: train,
    countryFlagImgUrl: unknown,
    country: "Australia",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "Master's in Fine Arts",
        institutionName: "University of Sydney, 2017",
      },
    ],
    specialities: ["Watercolor", "Realistic Drawing"],
    subjects: ["Drawing", "Digital Painting"],
    review: [
      {
        name: "Olivia Green",
        rating: 5,
        comment: "Anna’s techniques helped me create realistic art in no time!",
        date: "2 weeks ago",
      },
    ],
    lessonsType: "Trial lessons",
  },
  {
    id: 11,
    tutorName: "James Bond",
    bgImgUrl: mathImg,
    designation: "Mathematics Expert",
    ratingCount: 4.9,
    reviewCount: 2547,
    lessonsCount: 1500,
    hourlyRate: 28,
    trialRate: 15,
    shortDescreption:
      "Master in mathematics. I specialize in calculus, algebra, and statistics.",
    location: "Canada",
    languagePreferences: "English, French",
    respondTime: 2,
    expertise: ["Calculus", "Statistics", "Algebra"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: unknown,
    country: "Canada",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "Master's in Mathematics",
        institutionName: "McGill University, 2016",
      },
    ],
    specialities: ["Calculus", "Algebra"],
    subjects: ["Mathematics", "Statistics"],
    review: [
      {
        name: "Anna White",
        rating: 5,
        comment:
          "James helped me improve my understanding of calculus and statistics.",
        date: "1 month ago",
      },
    ],
    lessonsType: "Regular lessons",
  },
  {
    id: 12,
    tutorName: "Emma Scott",
    bgImgUrl: writingImg,
    designation: "Writing Specialist",
    ratingCount: 4.7,
    reviewCount: 1843,
    lessonsCount: 1190,
    hourlyRate: 32,
    trialRate: 18,
    shortDescreption:
      "Writer and editor with years of experience in academic and creative writing.",
    location: "United States",
    languagePreferences: "English",
    respondTime: 2,
    expertise: ["Creative writing", "Essay writing", "Proofreading"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: unknown,
    country: "United States",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "Master's in Creative Writing",
        institutionName: "University of New York, 2015",
      },
    ],
    specialities: ["Creative Writing", "Essay Writing"],
    subjects: ["Creative Writing", "Proofreading"],
    review: [
      {
        name: "Robert Grey",
        rating: 5,
        comment:
          "Emma has greatly improved my essay writing and editing skills.",
        date: "2 weeks ago",
      },
    ],
    lessonsType: "Trial lessons",
  },
  {
    id: 13,
    tutorName: "Oliver Mason",
    bgImgUrl: mathImg,
    designation: "Mathematics Tutor",
    ratingCount: 4.8,
    reviewCount: 1947,
    lessonsCount: 2200,
    hourlyRate: 27,
    trialRate: 13,
    shortDescreption:
      "I specialize in geometry, algebra, and math tutoring for all levels.",
    location: "Germany",
    languagePreferences: "English, German",
    respondTime: 1,
    expertise: ["Algebra", "Geometry", "Trigonometry"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: unknown,
    country: "Germany",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "Bachelor's in Mathematics",
        institutionName: "University of Berlin, 2016",
      },
    ],
    specialities: ["Algebra", "Geometry"],
    subjects: ["Mathematics", "Trigonometry"],
    review: [
      {
        name: "Sophie B.",
        rating: 5,
        comment:
          "Oliver helped me excel in math and improved my grades significantly.",
        date: "3 weeks ago",
      },
    ],
    lessonsType: "Regular lessons",
  },
  {
    id: 14,
    tutorName: "Lucas Meyer",
    bgImgUrl: programmingImg,
    designation: "Full Stack Developer Tutor",
    ratingCount: 5.0,
    reviewCount: 1890,
    lessonsCount: 1200,
    hourlyRate: 45,
    trialRate: 25,
    shortDescreption:
      "Teach front-end and back-end development with a focus on React and Node.js.",
    location: "United States",
    languagePreferences: "English, German",
    respondTime: 2,
    expertise: ["React", "Node.js", "Full Stack Development"],
    isAvailable: false,
    introductionVideo: train,
    countryFlagImgUrl: unknown,
    country: "United States",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "Bachelor's in Computer Science",
        institutionName: "MIT, 2015",
      },
    ],
    specialities: ["React", "Node.js", "Full Stack Development"],
    subjects: ["Web Development", "JavaScript", "Node.js"],
    review: [
      {
        name: "Michael White",
        rating: 5,
        comment:
          "Lucas is an excellent tutor for full stack development. I learned so much!",
        date: "1 month ago",
      },
    ],
    lessonsType: "Trial lessons",
  },
  {
    id: 15,
    tutorName: "Emily Clark",
    bgImgUrl: yogaImg,
    designation: "Yoga Instructor",
    ratingCount: 4.8,
    reviewCount: 2020,
    lessonsCount: 1800,
    hourlyRate: 28,
    trialRate: 15,
    shortDescreption:
      "Yoga instructor specializing in Vinyasa, Hatha Yoga, and meditation.",
    location: "Australia",
    languagePreferences: "English, Japanese",
    respondTime: 2,
    expertise: ["Vinyasa", "Meditation", "Hatha Yoga"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: unknown,
    country: "Australia",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "200-Hour Yoga Teacher Certification",
        institutionName: "Yoga Alliance, 2016",
      },
    ],
    specialities: ["Yoga", "Meditation"],
    subjects: ["Yoga", "Meditation"],
    review: [
      {
        name: "Sophia T.",
        rating: 5,
        comment:
          "Emily’s classes are both challenging and relaxing. A great balance.",
        date: "2 weeks ago",
      },
    ],
    lessonsType: "Regular lessons",
  },
  {
    id: 16,
    tutorName: "Megan Ross",
    bgImgUrl: mathImg,
    designation: "Mathematics Expert",
    ratingCount: 4.9,
    reviewCount: 3289,
    lessonsCount: 4300,
    hourlyRate: 33,
    trialRate: 20,
    shortDescreption:
      "I specialize in Algebra, Trigonometry, and Calculus for high school and college students.",
    location: "United States",
    languagePreferences: "English",
    respondTime: 1,
    expertise: ["Algebra", "Calculus", "Trigonometry"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: unknown,
    country: "United States",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "Bachelor's in Mathematics",
        institutionName: "Harvard University, 2015",
      },
    ],
    specialities: ["Algebra", "Calculus"],
    subjects: ["Mathematics", "Calculus"],
    review: [
      {
        name: "Daniel P.",
        rating: 5,
        comment:
          "Megan’s lessons have made math easier to understand and more enjoyable!",
        date: "1 month ago",
      },
    ],
    lessonsType: "Regular lessons",
  },
  {
    id: 17,
    tutorName: "Ryan Collins",
    bgImgUrl: chessImg,
    designation: "Chess Coach",
    ratingCount: 4.7,
    reviewCount: 1152,
    lessonsCount: 980,
    hourlyRate: 25,
    trialRate: 10,
    shortDescreption:
      "Chess tutor with 7+ years of experience helping students develop advanced strategies.",
    location: "Russia",
    languagePreferences: "English, Russian",
    respondTime: 2,
    expertise: ["Chess strategy", "Endgame tactics"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: unknown,
    country: "Russia",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "International Chess Grandmaster",
        institutionName: "World Chess Federation, 2014",
      },
    ],
    specialities: ["Chess Strategy", "Endgame Tactics"],
    subjects: ["Chess", "Endgame"],
    review: [
      {
        name: "Victor K.",
        rating: 5,
        comment:
          "Ryan’s strategies are excellent for players looking to reach the next level!",
        date: "3 weeks ago",
      },
    ],
    lessonsType: "Trial lessons",
  },
  {
    id: 18,
    tutorName: "Isla James",
    bgImgUrl: musicImg,
    designation: "Music Composition Tutor",
    ratingCount: 4.9,
    reviewCount: 1234,
    lessonsCount: 2400,
    hourlyRate: 35,
    trialRate: 18,
    shortDescreption:
      "Music composition tutor with a focus on classical and contemporary music.",
    location: "United States",
    languagePreferences: "English",
    respondTime: 1,
    expertise: ["Music composition", "Classical music", "Film scoring"],
    isAvailable: false,
    introductionVideo: train,
    countryFlagImgUrl: unknown,
    country: "United States",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "Master's in Music Composition",
        institutionName: "Juilliard School, 2015",
      },
    ],
    specialities: ["Film scoring", "Classical composition"],
    subjects: ["Music Composition", "Film Scoring"],
    review: [
      {
        name: "Sophie L.",
        rating: 5,
        comment:
          "Isla’s guidance in music composition is amazing, she helped me find my voice!",
        date: "1 month ago",
      },
    ],
    lessonsType: "Trial lessons",
  },

  {
    id: 20,
    tutorName: "Sophia Green",
    bgImgUrl: musicImg1,
    designation: "Piano Instructor",
    ratingCount: 4.9,
    reviewCount: 1345,
    lessonsCount: 1500,
    hourlyRate: 40,
    trialRate: 20,
    shortDescreption:
      "Experienced piano teacher with 10+ years of experience in classical and jazz music.",
    location: "Canada",
    languagePreferences: "English, French",
    respondTime: 2,
    expertise: ["Piano", "Music Theory", "Jazz Music"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: belgium,
    country: "Canada",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "Bachelor's in Music",
        institutionName: "University of Toronto, 2015",
      },
    ],
    specialities: ["Classical Music", "Jazz Piano"],
    subjects: ["Piano", "Music Theory"],
    review: [
      {
        name: "James White",
        rating: 5,
        comment:
          "Sophia helped me improve my piano skills quickly. She’s a fantastic teacher!",
        date: "1 week ago",
      },
    ],
    lessonsType: "Regular lessons",
  },
  {
    id: 21,
    tutorName: "Alex Knight",
    bgImgUrl: yogaImg1,
    designation: "Yoga Instructor",
    ratingCount: 4.8,
    reviewCount: 1300,
    lessonsCount: 1800,
    hourlyRate: 35,
    trialRate: 18,
    shortDescreption:
      "Yoga teacher specializing in Hatha Yoga, flexibility, and mindfulness.",
    location: "United States",
    languagePreferences: "English",
    respondTime: 3,
    expertise: ["Hatha Yoga", "Breathing Techniques", "Mindfulness"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: belgium,
    country: "United States",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "200-Hour Yoga Teacher Certification",
        institutionName: "Yoga Alliance, 2016",
      },
    ],
    specialities: ["Yoga", "Breathing Techniques"],
    subjects: ["Yoga", "Mindfulness"],
    review: [
      {
        name: "Jessica M.",
        rating: 5,
        comment:
          "Alex’s lessons helped me improve my flexibility and mindfulness. Highly recommended!",
        date: "2 weeks ago",
      },
    ],
    lessonsType: "Trial lessons",
  },
  {
    id: 22,
    tutorName: "Charlotte Lee",
    bgImgUrl: programmingImg1,
    designation: "Frontend Developer",
    ratingCount: 4.9,
    reviewCount: 1023,
    lessonsCount: 1200,
    hourlyRate: 45,
    trialRate: 25,
    shortDescreption:
      "Frontend developer with expertise in React, JavaScript, and CSS.",
    location: "United States",
    languagePreferences: "English",
    respondTime: 1,
    expertise: ["React", "JavaScript", "Frontend Development"],
    isAvailable: false,
    introductionVideo: train,
    countryFlagImgUrl: belgium,
    country: "United States",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "Bachelor's in Computer Science",
        institutionName: "Harvard University, 2017",
      },
    ],
    specialities: ["React", "Frontend Development"],
    subjects: ["JavaScript", "CSS", "Frontend Development"],
    review: [
      {
        name: "David L.",
        rating: 5,
        comment:
          "Charlotte is the best! She made frontend development easy to understand.",
        date: "1 month ago",
      },
    ],
    lessonsType: "Regular lessons",
  },
  {
    id: 23,
    tutorName: "Mason Clark",
    bgImgUrl: chessImg1,
    designation: "Chess Expert",
    ratingCount: 5.0,
    reviewCount: 2300,
    lessonsCount: 2200,
    hourlyRate: 50,
    trialRate: 25,
    shortDescreption:
      "Chess master with over 15 years of competitive experience and coaching.",
    location: "Russia",
    languagePreferences: "English, Russian",
    respondTime: 2,
    expertise: ["Chess Strategy", "Endgame", "Tactics"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: belgium,
    country: "Russia",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "International Chess Grandmaster",
        institutionName: "World Chess Federation, 2010",
      },
    ],
    specialities: ["Chess Strategy", "Endgame Tactics"],
    subjects: ["Chess", "Strategy"],
    review: [
      {
        name: "Ariana T.",
        rating: 5,
        comment:
          "Mason’s chess coaching has improved my strategy significantly!",
        date: "3 weeks ago",
      },
    ],
    lessonsType: "Regular lessons",
  },
  {
    id: 24,
    tutorName: "Oliver Johnson",
    bgImgUrl: artImg1,
    designation: "Art Teacher",
    ratingCount: 4.7,
    reviewCount: 890,
    lessonsCount: 1350,
    hourlyRate: 30,
    trialRate: 15,
    shortDescreption:
      "Drawing and painting teacher specializing in portraits and still life.",
    location: "United Kingdom",
    languagePreferences: "English",
    respondTime: 2,
    expertise: ["Portrait Drawing", "Still Life", "Watercolors"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: belgium,
    country: "United Kingdom",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "Bachelor's in Fine Arts",
        institutionName: "University of London, 2015",
      },
    ],
    specialities: ["Portrait Drawing", "Still Life"],
    subjects: ["Drawing", "Watercolors"],
    review: [
      {
        name: "Ella W.",
        rating: 5,
        comment:
          "Oliver helped me develop my skills in portrait drawing. He is an amazing teacher.",
        date: "1 month ago",
      },
    ],
    lessonsType: "Trial lessons",
  },
  {
    id: 25,
    tutorName: "Ethan White",
    bgImgUrl: mathImg1,
    designation: "Mathematics Tutor",
    ratingCount: 4.9,
    reviewCount: 1200,
    lessonsCount: 1600,
    hourlyRate: 32,
    trialRate: 18,
    shortDescreption:
      "Expert in calculus, geometry, and high school mathematics.",
    location: "United States",
    languagePreferences: "English",
    respondTime: 2,
    expertise: ["Algebra", "Calculus", "Geometry"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: belgium,
    country: "United States",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "Master's in Mathematics",
        institutionName: "University of California, 2016",
      },
    ],
    specialities: ["Algebra", "Calculus"],
    subjects: ["Mathematics", "Calculus"],
    review: [
      {
        name: "Charlie J.",
        rating: 5,
        comment:
          "Ethan’s lessons are highly effective and make complex math easy to grasp!",
        date: "2 weeks ago",
      },
    ],
    lessonsType: "Regular lessons",
  },
  {
    id: 26,
    tutorName: "Amelia Brown",
    bgImgUrl: writingImg1,
    designation: "Creative Writing Tutor",
    ratingCount: 4.8,
    reviewCount: 1145,
    lessonsCount: 1450,
    hourlyRate: 38,
    trialRate: 20,
    shortDescreption:
      "Creative writing tutor focused on fiction, poetry, and storytelling.",
    location: "Australia",
    languagePreferences: "English",
    respondTime: 2,
    expertise: ["Fiction Writing", "Poetry", "Storytelling"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: belgium,
    country: "Australia",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "Master's in Creative Writing",
        institutionName: "University of Sydney, 2017",
      },
    ],
    specialities: ["Creative Writing", "Storytelling"],
    subjects: ["Creative Writing", "Poetry"],
    review: [
      {
        name: "Jessica K.",
        rating: 5,
        comment:
          "Amelia’s creative writing class opened up my storytelling skills!",
        date: "1 month ago",
      },
    ],
    lessonsType: "Trial lessons",
  },
  {
    id: 27,
    tutorName: "Liam Harris",
    bgImgUrl: chessImg2,
    designation: "Chess Strategy Coach",
    ratingCount: 5.0,
    reviewCount: 980,
    lessonsCount: 800,
    hourlyRate: 40,
    trialRate: 20,
    shortDescreption:
      "Mastering chess strategies and improving game awareness.",
    location: "Germany",
    languagePreferences: "English, German",
    respondTime: 1,
    expertise: ["Chess Openings", "Endgame", "Middle Game"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: belgium,
    country: "Germany",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "International Chess Grandmaster",
        institutionName: "World Chess Federation, 2012",
      },
    ],
    specialities: ["Opening Strategies", "Endgame Tactics"],
    subjects: ["Chess", "Strategy"],
    review: [
      {
        name: "Henry Z.",
        rating: 5,
        comment:
          "Liam’s chess coaching improved my strategy and decision-making significantly!",
        date: "3 weeks ago",
      },
    ],
    lessonsType: "Trial lessons",
  },
  {
    id: 28,
    tutorName: "Sophia Roberts",
    bgImgUrl: mathImg3,
    designation: "Mathematics Expert",
    ratingCount: 4.7,
    reviewCount: 790,
    lessonsCount: 1050,
    hourlyRate: 33,
    trialRate: 17,
    shortDescreption:
      "Helping students with geometry, algebra, and advanced calculus.",
    location: "India",
    languagePreferences: "English, Hindi",
    respondTime: 2,
    expertise: ["Algebra", "Geometry", "Calculus"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: belgium,
    country: "India",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "Bachelor's in Mathematics",
        institutionName: "University of Delhi, 2016",
      },
    ],
    specialities: ["Algebra", "Geometry"],
    subjects: ["Mathematics", "Calculus"],
    review: [
      {
        name: "Neha G.",
        rating: 5,
        comment:
          "Sophia helped me conquer geometry and algebra! Excellent teacher.",
        date: "1 month ago",
      },
    ],
    lessonsType: "Regular lessons",
  },
  {
    id: 29,
    tutorName: "Benjamin Davis",
    bgImgUrl: artImg3,
    designation: "Art Teacher",
    ratingCount: 4.8,
    reviewCount: 1500,
    lessonsCount: 1700,
    hourlyRate: 40,
    trialRate: 22,
    shortDescreption:
      "Portrait and figure drawing tutor with a focus on realism.",
    location: "Canada",
    languagePreferences: "English, French",
    respondTime: 3,
    expertise: ["Portrait Drawing", "Figure Drawing", "Oil Painting"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: belgium,
    country: "Canada",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "Master's in Fine Arts",
        institutionName: "University of Toronto, 2018",
      },
    ],
    specialities: ["Realism", "Figure Drawing"],
    subjects: ["Drawing", "Painting"],
    review: [
      {
        name: "Maya P.",
        rating: 5,
        comment:
          "Benjamin’s lessons helped me improve my portrait drawing techniques.",
        date: "2 weeks ago",
      },
    ],
    lessonsType: "Trial lessons",
  },
  {
    id: 30,
    tutorName: "Charlotte Lee",
    bgImgUrl: writingImg3,
    designation: "English Writing Tutor",
    ratingCount: 4.9,
    reviewCount: 1134,
    lessonsCount: 1300,
    hourlyRate: 35,
    trialRate: 18,
    shortDescreption: "Tutoring students in creative and academic writing.",
    location: "United Kingdom",
    languagePreferences: "English",
    respondTime: 2,
    expertise: ["Essay Writing", "Creative Writing", "Poetry"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: belgium,
    country: "United Kingdom",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "Bachelor's in Creative Writing",
        institutionName: "University of London, 2015",
      },
    ],
    specialities: ["Creative Writing", "Essay Writing"],
    subjects: ["Writing", "Poetry"],
    review: [
      {
        name: "Clara M.",
        rating: 5,
        comment:
          "Charlotte's writing guidance was exceptional. I improved my essays drastically.",
        date: "1 month ago",
      },
    ],
    lessonsType: "Trial lessons",
  },

  {
    id: 31,
    tutorName: "Lily Evans",
    bgImgUrl: musicImg4,
    designation: "Guitar Instructor",
    ratingCount: 4.9,
    reviewCount: 1250,
    lessonsCount: 1150,
    hourlyRate: 38,
    trialRate: 20,
    shortDescreption:
      "Guitar teacher with a focus on acoustic and electric guitar for beginners and intermediate players.",
    location: "Australia",
    languagePreferences: "English",
    respondTime: 1,
    expertise: ["Acoustic Guitar", "Electric Guitar", "Songwriting"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: france,
    country: "Australia",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "Bachelor's in Music",
        institutionName: "University of Sydney, 2016",
      },
    ],
    specialities: ["Guitar", "Songwriting"],
    subjects: ["Guitar", "Music Theory"],
    review: [
      {
        name: "John K.",
        rating: 5,
        comment:
          "Lily is an amazing guitar teacher. She helped me master my skills quickly.",
        date: "3 weeks ago",
      },
    ],
    lessonsType: "Trial lessons",
  },
  {
    id: 32,
    tutorName: "Oliver Stone",
    bgImgUrl: musicImg5,
    designation: "Yoga & Meditation Instructor",
    ratingCount: 4.8,
    reviewCount: 1080,
    lessonsCount: 1300,
    hourlyRate: 40,
    trialRate: 22,
    shortDescreption:
      "Yoga and mindfulness expert, specializing in Vinyasa, Restorative Yoga, and guided meditation.",
    location: "United States",
    languagePreferences: "English, Spanish",
    respondTime: 1,
    expertise: ["Vinyasa Yoga", "Meditation", "Breathing Techniques"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: france,
    country: "United States",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "300-Hour Yoga Teacher Certification",
        institutionName: "Yoga Alliance, 2019",
      },
    ],
    specialities: ["Meditation", "Restorative Yoga"],
    subjects: ["Yoga", "Meditation"],
    review: [
      {
        name: "Rachel W.",
        rating: 5,
        comment:
          "Oliver’s yoga classes have helped me achieve both physical flexibility and mental clarity.",
        date: "1 month ago",
      },
    ],
    lessonsType: "Regular lessons",
  },
  {
    id: 33,
    tutorName: "Ethan Brooks",
    bgImgUrl: musicImg6,
    designation: "Web Development Instructor",
    ratingCount: 5.0,
    reviewCount: 2200,
    lessonsCount: 2400,
    hourlyRate: 50,
    trialRate: 25,
    shortDescreption:
      "Full-stack developer and web development tutor specializing in React, Node.js, and MongoDB.",
    location: "United Kingdom",
    languagePreferences: "English",
    respondTime: 2,
    expertise: ["React", "Node.js", "MongoDB"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: france,
    country: "United Kingdom",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "Bachelor's in Computer Science",
        institutionName: "University of Oxford, 2015",
      },
    ],
    specialities: ["React", "Full-Stack Development"],
    subjects: ["Web Development", "React", "Node.js"],
    review: [
      {
        name: "Emma R.",
        rating: 5,
        comment:
          "Ethan’s lessons are the best I’ve taken. He made full-stack development easy and fun!",
        date: "2 weeks ago",
      },
    ],
    lessonsType: "Regular lessons",
  },
  {
    id: 34,
    tutorName: "Amelia Ford",
    bgImgUrl: musicImg7,
    designation: "Chess Strategy Coach",
    ratingCount: 4.9,
    reviewCount: 2100,
    lessonsCount: 2500,
    hourlyRate: 42,
    trialRate: 20,
    shortDescreption:
      "Chess expert specializing in strategies, openings, and endgames for intermediate players.",
    location: "Russia",
    languagePreferences: "English, Russian",
    respondTime: 2,
    expertise: ["Chess Strategy", "Endgame", "Opening Theory"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: france,
    country: "Russia",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "International Chess Grandmaster",
        institutionName: "World Chess Federation, 2011",
      },
    ],
    specialities: ["Chess Endgame", "Opening Theory"],
    subjects: ["Chess", "Strategy"],
    review: [
      {
        name: "Samuel T.",
        rating: 5,
        comment:
          "Amelia’s insights into chess strategy have transformed my approach to the game!",
        date: "3 weeks ago",
      },
    ],
    lessonsType: "Trial lessons",
  },
  {
    id: 35,
    tutorName: "Henry Miller",
    bgImgUrl: musicImg8,
    designation: "Art & Illustration Instructor",
    ratingCount: 4.7,
    reviewCount: 950,
    lessonsCount: 1000,
    hourlyRate: 35,
    trialRate: 20,
    shortDescreption:
      "Teaching art fundamentals, from basic sketches to advanced illustration techniques.",
    location: "Canada",
    languagePreferences: "English, French",
    respondTime: 2,
    expertise: ["Sketching", "Illustration", "Painting"],
    isAvailable: false,
    introductionVideo: train,
    countryFlagImgUrl: france,
    country: "Canada",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "Master's in Fine Arts",
        institutionName: "University of Toronto, 2018",
      },
    ],
    specialities: ["Sketching", "Illustration Techniques"],
    subjects: ["Drawing", "Illustration"],
    review: [
      {
        name: "Sophie P.",
        rating: 5,
        comment:
          "Henry helped me unlock my artistic potential. His classes were incredibly helpful!",
        date: "1 month ago",
      },
    ],
    lessonsType: "Regular lessons",
  },
  {
    id: 36,
    tutorName: "Isabelle Stewart",
    bgImgUrl: yogaImg2,
    designation: "yoga Tutor",
    ratingCount: 5.0,
    reviewCount: 3400,
    lessonsCount: 3000,
    hourlyRate: 38,
    trialRate: 20,
    shortDescreption:
      "Mathematics tutor specializing in algebra, calculus, and linear algebra for college students.",
    location: "United States",
    languagePreferences: "English",
    respondTime: 1,
    expertise: ["Algebra", "Calculus", "Linear Algebra"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: france,
    country: "United States",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "PhD in Mathematics",
        institutionName: "Princeton University, 2017",
      },
    ],
    specialities: ["Calculus", "Linear Algebra"],
    subjects: ["Mathematics", "Algebra"],
    review: [
      {
        name: "David R.",
        rating: 5,
        comment:
          "Isabelle’s classes are structured and thorough, helping me achieve top grades.",
        date: "3 weeks ago",
      },
    ],
    lessonsType: "Trial lessons",
  },
  {
    id: 37,
    tutorName: "Sophia Harris",
    bgImgUrl: yogaImg3,
    designation: "yoga",
    ratingCount: 4.8,
    reviewCount: 1200,
    lessonsCount: 1500,
    hourlyRate: 36,
    trialRate: 18,
    shortDescreption:
      "Helping students refine their writing for essays, creative writing, and professional pieces.",
    location: "United Kingdom",
    languagePreferences: "English",
    respondTime: 2,
    expertise: ["Creative Writing", "Essay Writing", "Editing"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: france,
    country: "United Kingdom",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "Master's in Creative Writing",
        institutionName: "University of London, 2016",
      },
    ],
    specialities: ["Creative Writing", "Editing"],
    subjects: ["Writing", "Essay Writing"],
    review: [
      {
        name: "Olivia B.",
        rating: 5,
        comment:
          "Sophia helped me improve my writing and get better grades in my essays.",
        date: "1 month ago",
      },
    ],
    lessonsType: "Regular lessons",
  },
  {
    id: 38,
    tutorName: "Lucas Evans",
    bgImgUrl: yogaImg4,
    designation: "yoga",
    ratingCount: 5.0,
    reviewCount: 2000,
    lessonsCount: 2500,
    hourlyRate: 45,
    trialRate: 22,
    shortDescreption:
      "Advanced chess tutor focusing on strategy, tactics, and competitive play.",
    location: "Germany",
    languagePreferences: "English, German",
    respondTime: 2,
    expertise: ["Chess Strategy", "Endgame", "Tactics"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: france,
    country: "Germany",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "International Chess Grandmaster",
        institutionName: "World Chess Federation, 2009",
      },
    ],
    specialities: ["Endgame", "Tactics"],
    subjects: ["Chess", "Strategy"],
    review: [
      {
        name: "Sarah P.",
        rating: 5,
        comment:
          "Lucas helped me improve my tactical thinking and overall game strategy.",
        date: "1 month ago",
      },
    ],
    lessonsType: "Trial lessons",
  },
  {
    id: 39,
    tutorName: "Mia Johnson",
    bgImgUrl: yogaImg5,
    designation: "Yoga & Fitness Instructor",
    ratingCount: 4.9,
    reviewCount: 1300,
    lessonsCount: 1600,
    hourlyRate: 32,
    trialRate: 18,
    shortDescreption:
      "Yoga instructor focusing on flexibility, strength, and mindfulness.",
    location: "United States",
    languagePreferences: "English",
    respondTime: 3,
    expertise: ["Yoga", "Strength Training", "Mindfulness"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: france,
    country: "United States",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "200-Hour Yoga Teacher Training",
        institutionName: "Yoga Alliance, 2017",
      },
    ],
    specialities: ["Yoga", "Strength Training"],
    subjects: ["Yoga", "Fitness"],
    review: [
      {
        name: "Emily C.",
        rating: 5,
        comment:
          "Mia’s yoga classes helped me improve my strength and flexibility!",
        date: "2 weeks ago",
      },
    ],
    lessonsType: "Regular lessons",
  },
  {
    id: 40,
    tutorName: "Aiden Lee",
    bgImgUrl: yogaImg6,
    designation: "yoga",
    ratingCount: 4.8,
    reviewCount: 1300,
    lessonsCount: 1800,
    hourlyRate: 38,
    trialRate: 20,
    shortDescreption:
      "Expert in fine arts, specializing in portrait and landscape painting.",
    location: "Canada",
    languagePreferences: "English, French",
    respondTime: 2,
    expertise: ["Fine Arts", "Painting", "Portrait Drawing"],
    isAvailable: true,
    introductionVideo: train,
    countryFlagImgUrl: france,
    country: "Canada",
    studentCount: Number(Math.random() * 100),
    educationDeatisArr: [
      {
        qulifiactionName: "Master's in Fine Arts",
        institutionName: "University of Montreal, 2016",
      },
    ],
    specialities: ["Portrait Painting", "Landscape Painting"],
    subjects: ["Fine Arts", "Painting"],
    review: [
      {
        name: "Sophie R.",
        rating: 5,
        comment:
          "Aiden’s lessons helped me create beautiful portraits and landscapes.",
        date: "1 month ago",
      },
    ],
    lessonsType: "Trial lessons",
  },
];





 