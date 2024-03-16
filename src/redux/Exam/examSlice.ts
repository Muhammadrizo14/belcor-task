import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

interface ExamState {
  question: string;
  options: {
    option: string;
    optionLetter: string;
  }[];
  correctAnswer: string;
  userAnswer: string;
  status?: boolean;
}

const initialState: ExamState[] = [
  {
    question: "What is the SI unit of force?",
    options: [
      { option: "Newton (N)", optionLetter: "a" },
      { option: "Watt (W)", optionLetter: "b" },
      { option: "Joule (J)", optionLetter: "c" },
      { option: "Meter per second (m/s)", optionLetter: "d" },
    ],
    correctAnswer: "a",
    userAnswer: "",
    status: undefined,
  },
  {
    question: "Which of the following is an example of a scalar quantity?",
    options: [
      { option: "Velocity", optionLetter: "a" },
      { option: "Force", optionLetter: "b" },
      { option: "Speed", optionLetter: "c" },
      { option: "Acceleration", optionLetter: "d" },
    ],
    correctAnswer: "c",
    userAnswer: "",
    status: undefined,
  },
  {
    question: "What is the acceleration due to gravity on the surface of Earth (approximately)?",
    options: [
      { option: "9.8 m/s^2", optionLetter: "a" },
      { option: "6.3 m/s^2", optionLetter: "b" },
      { option: "3.5 m/s^2", optionLetter: "c" },
      { option: "12.4 m/s^2", optionLetter: "d" },
    ],
    correctAnswer: "a",
    userAnswer: "",
    status: undefined,
  },
  {
    question: "According to Newton's first law of motion, an object at rest tends to stay at rest, and an object in motion tends to stay in motion unless acted upon by an external force. This is also known as the law of:",
    options: [
      { option: "Inertia", optionLetter: "a" },
      { option: "Acceleration", optionLetter: "b" },
      { option: "Momentum", optionLetter: "c" },
      { option: "Action-reaction", optionLetter: "d" },
    ],
    correctAnswer: "a",
    userAnswer: "",
    status: undefined,
  },
  {
    question: "If a car travels 300 meters in 20 seconds, what is its average speed?",
    options: [
      { option: "15 m/s", optionLetter: "a" },
      { option: "20 m/s", optionLetter: "b" },
      { option: "25 m/s", optionLetter: "c" },
      { option: "30 m/s", optionLetter: "d" },
    ],
    correctAnswer: "a",
    userAnswer: "",
    status: undefined,
  },
  {
    question: "Which of the following is a unit of energy?",
    options: [
      { option: "Watt (W)", optionLetter: "a" },
      { option: "Pascal (Pa)", optionLetter: "b" },
      { option: "Joule (J)", optionLetter: "c" },
      { option: "Newton (N)", optionLetter: "d" },
    ],
    correctAnswer: "c",
    userAnswer: "",
    status: undefined,
  },
  {
    question: "What is the formula for calculating kinetic energy?",
    options: [
      { option: "KE = mv", optionLetter: "a" },
      { option: "KE = 0.5 * mv^2", optionLetter: "b" },
      { option: "KE = Fd", optionLetter: "c" },
      { option: "KE = mgh", optionLetter: "d" },
    ],
    correctAnswer: "b",
    userAnswer: "",
    status: undefined,
  },
  {
    question: "Which law of thermodynamics states that energy cannot be created or destroyed, only transformed from one form to another?",
    options: [
      { option: "Zeroth law", optionLetter: "a" },
      { option: "First law", optionLetter: "b" },
      { option: "Second law", optionLetter: "c" },
      { option: "Third law", optionLetter: "d" },
    ],
    correctAnswer: "b",
    userAnswer: "",
    status: undefined,
  },
  {
    question: "What is the formula for calculating momentum?",
    options: [
      { option: "p = mv", optionLetter: "a" },
      { option: "p = F/A", optionLetter: "b" },
      { option: "p = Fd", optionLetter: "c" },
      { option: "p = mgh", optionLetter: "d" },
    ],
    correctAnswer: "a",
    userAnswer: "",
    status: undefined,
  },
  {
    question: "What is the relationship between force, mass, and acceleration, as described by Newton's second law of motion?",
    options: [
      { option: "Force = mass × acceleration", optionLetter: "a" },
      { option: "Mass = force × acceleration", optionLetter: "b" },
      { option: "Acceleration = force × mass", optionLetter: "c" },
      { option: "Force = mass / acceleration", optionLetter: "d" },
    ],
    correctAnswer: "a",
    userAnswer: "",
    status: undefined,
  },
  // Add more questions here...
];


export const ExamSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    answerTo: (state, action: PayloadAction<ExamState>) => {

    },
  },
})

// Action creators are generated for each case reducer function
export const {answerTo} = ExamSlice.actions

export default ExamSlice.reducer