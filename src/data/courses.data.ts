import latteArtImg from "../assets/img/course-latte-art.webp";
import alternativeImg from "../assets/img/course-alternative.webp";
import espressoImg from "../assets/img/course-espresso.webp";

export type Course = {
  id: number;
  title: string;
  level: string;
  description: string;
  image: string;

  duration: string;
  lessons: number;
  syllabus: string[];
};

export const courses: Course[] = [
  {
    id: 1,
    title: "Latte Art",
    level: "Beginner course",
    description:
      "Learn how to properly steam milk and create classic latte art patterns such as heart, tulip, and rosetta. This course focuses on milk texture, pouring techniques, and consistency.",
    image: latteArtImg,
    duration: "2 weeks",
    lessons: 6,
    syllabus: [
      "Milk texture: microfoam & temperature control",
      "Pouring basics: heart & tulip",
      "Rosetta technique: flow & wrist control",
      "Consistency drills + common mistakes",
      "Latte art with alternative milks",
      "Final challenge: 3 patterns in a row",
    ],
  },
  {
    id: 2,
    title: "Alternative Brewing",
    level: "Intermediate course",
    description:
      "Master pour-over and immersion methods: V60, Chemex, Aeropress and French Press. You’ll learn grind size, water temperature, blooming, and how to adjust recipes to taste.",
    image: alternativeImg,
    duration: "3 weeks",
    lessons: 8,
    syllabus: [
      "Grind size & extraction basics",
      "V60: bloom + pouring structure",
      "Chemex: clarity and filter technique",
      "Aeropress: 3 recipes, pressure & timing",
      "French Press: immersion and sediment control",
      "Water temperature & mineral balance",
      "Dial-in workshop: taste adjustments",
      "Final brew session: choose your best method",
    ],
  },
  {
    id: 3,
    title: "Espresso Basics",
    level: "Beginner course",
    description:
      "Build a strong espresso foundation: dialing in, grind size, dose/yield ratio, extraction time, and troubleshooting sour or bitter shots.",
    image: espressoImg,
    duration: "2 weeks",
    lessons: 6,
    syllabus: [
      "Espresso setup: equipment & workflow",
      "Grind size + dose/yield basics",
      "Dial-in practice: taste adjustments",
      "Espresso shots troubleshooting (sour/bitter)",
      "Milk steaming fundamentals",
      "Final practice: consistent shots + clean station",
    ],
  },
];
