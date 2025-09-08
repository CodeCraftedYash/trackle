import type { benefitContentType } from "../../../types/benefitContentType";
import img1 from "../../../assets/time.webp";
import img2 from "../../../assets/leaves.webp";
import img3 from "../../../assets/exam-results.webp";

export const benefitContent: benefitContentType[] = [
  {
    src: img1,
    alt: "Save Time",
    heading: "Save Time",
    body: "Automate administrative tasks, such as attendance tracking and grading, freeing up valuable time for lesson planning and student interaction.",
  },
  {
    src: img2,
    alt: "Increase Engagement",
    heading: "Increase Engagement",
    body: "Create dynamic and interactive lessons that captivate students' attention and foster a more engaging learning environment.",
  },
  {
    src: img3,
    alt: "Improve Outcomes",
    heading: "Improve Outcomes",
    body: "Gain insights into student performance and tailor your instruction to meet individual needs, leading to improved learning outcomes.",
  },
];
