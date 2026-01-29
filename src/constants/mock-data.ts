import { Subject } from "@/types";


export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description: "An introduction to fundamental computer science concepts including programming, algorithms, and problem-solving techniques.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "ENG204",
    name: "Modern English Literature",
    department: "English",
    description: "A survey of major works in modern English literature, focusing on themes, historical context, and literary analysis.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "BIO150",
    name: "Principles of Biology",
    department: "Biology",
    description: "Covers core biological principles such as cell structure, genetics, evolution, and the diversity of living organisms.",
    createdAt: new Date().toISOString(),
  }
];
