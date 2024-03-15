import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

interface ExamState {
  question: string;
  answer: {
    options: {
      option: string;
      optionLetter: string;
    };
    correctAnswer: string;
    userAnswer: string;
  }[];
  status?: boolean;
}

const initialState: ExamState[] = [
  {
    question: "What is the SI unit of force?",
    answer: [
      {
        options: {
          option: "Newton (N)",
          optionLetter: "a",
        },
        correctAnswer: "a",
        userAnswer: "",
      },
      {
        options: {
          option: "Watt (W)",
          optionLetter: "b",
        },
        correctAnswer: "",
        userAnswer: "",
      },
      {
        options: {
          option: "Joule (J)",
          optionLetter: "c",
        },
        correctAnswer: "",
        userAnswer: "",
      },
      {
        options: {
          option: "Meter per second (m/s)",
          optionLetter: "d",
        },
        correctAnswer: "",
        userAnswer: "",
      },
    ],
    status: undefined,
  },
  {
    question: "Which of the following is an example of a scalar quantity?",
    answer: [
      {
        options: {
          option: "Velocity",
          optionLetter: "a",
        },
        correctAnswer: "",
        userAnswer: "",
      },
      {
        options: {
          option: "Force",
          optionLetter: "b",
        },
        correctAnswer: "",
        userAnswer: "",
      },
      {
        options: {
          option: "Speed",
          optionLetter: "c",
        },
        correctAnswer: "c",
        userAnswer: "",
      },
      {
        options: {
          option: "Acceleration",
          optionLetter: "d",
        },
        correctAnswer: "",
        userAnswer: "",
      },
    ],
    status: undefined,
  },
  {
    question: "What is the acceleration due to gravity on the surface of Earth (approximately)?",
    answer: [
      {
        options: {
          option: "9.8 m/s^2",
          optionLetter: "a",
        },
        correctAnswer: "a",
        userAnswer: "",
      },
      {
        options: {
          option: "6.3 m/s^2",
          optionLetter: "b",
        },
        correctAnswer: "",
        userAnswer: "",
      },
      {
        options: {
          option: "3.5 m/s^2",
          optionLetter: "c",
        },
        correctAnswer: "",
        userAnswer: "",
      },
      {
        options: {
          option: "12.4 m/s^2",
          optionLetter: "d",
        },
        correctAnswer: "",
        userAnswer: "",
      },
    ],
    status: undefined,
  },
  {
    question: "According to Newton's first law of motion, an object at rest tends to stay at rest, and an object in motion tends to stay in motion unless acted upon by an external force. This is also known as the law of:",
    answer: [
      {
        options: {
          option: "Inertia",
          optionLetter: "a",
        },
        correctAnswer: "a",
        userAnswer: "",
      },
      {
        options: {
          option: "Acceleration",
          optionLetter: "b",
        },
        correctAnswer: "",
        userAnswer: "",
      },
      {
        options: {
          option: "Momentum",
          optionLetter: "c",
        },
        correctAnswer: "",
        userAnswer: "",
      },
      {
        options: {
          option: "Action-reaction",
          optionLetter: "d",
        },
        correctAnswer: "",
        userAnswer: "",
      },
    ],
    status: undefined,
  },
  {
    question: "If a car travels 300 meters in 20 seconds, what is its average speed?",
    answer: [
      {
        options: {
          option: "15 m/s",
          optionLetter: "a",
        },
        correctAnswer: "a",
        userAnswer: "",
      },
      {
        options: {
          option: "20 m/s",
          optionLetter: "b",
        },
        correctAnswer: "",
        userAnswer: "",
      },
      {
        options: {
          option: "25 m/s",
          optionLetter: "c",
        },
        correctAnswer: "",
        userAnswer: "",
      },
      {
        options: {
          option: "30 m/s",
          optionLetter: "d",
        },
        correctAnswer: "",
        userAnswer: "",
      },
    ],
    status: undefined,
  },
  {
    question: "Which of the following is a unit of energy?",
    answer: [
      {
        options: {
          option: "Watt (W)",
          optionLetter: "a",
        },
        correctAnswer: "",
        userAnswer: "",
      },
      {
        options: {
          option: "Pascal (Pa)",
          optionLetter: "b",
        },
        correctAnswer: "",
        userAnswer: "",
      },
      {
        options: {
          option: "Joule (J)",
          optionLetter: "c",
        },
        correctAnswer: "c",
        userAnswer: "",
      },
      {
        options: {
          option: "Newton (N)",
          optionLetter: "d",
        },
        correctAnswer: "",
        userAnswer: "",
      },
    ],
    status: undefined,
  },
  {
    question: "What is the formula for calculating kinetic energy?",
    answer: [
      {
        options: {
          option: "KE = mv",
          optionLetter: "a",
        },
        correctAnswer: "",
        userAnswer: "",
      },
      {
        options: {
          option: "KE = 0.5 * mv^2",
          optionLetter: "b",
        },
        correctAnswer: "b",
        userAnswer: "",
      },
      {
        options: {
          option: "KE = Fd",
          optionLetter: "c",
        },
        correctAnswer: "",
        userAnswer: "",
      },
      {
        options: {
          option: "KE = mgh",
          optionLetter: "d",
        },
        correctAnswer: "",
        userAnswer: "",
      },
    ],
    status: undefined,
  },
  {
    question: "Which law of thermodynamics states that energy cannot be created or destroyed, only transformed from one form to another?",
    answer: [
      {
        options: {
          option: "Zeroth law",
          optionLetter: "a",
        },
        correctAnswer: "",
        userAnswer: "",
      },
      {
        options: {
          option: "First law",
          optionLetter: "b",
        },
        correctAnswer: "b",
        userAnswer: "",
      },
      {
        options: {
          option: "Second law",
          optionLetter: "c",
        },
        correctAnswer: "",
        userAnswer: "",
      },
      {
        options: {
          option: "Third law",
          optionLetter: "d",
        },
        correctAnswer: "",
        userAnswer: "",
      },
    ],
    status: undefined,
  },
  {
    question: "What is the formula for calculating momentum?",
    answer: [
      {
        options: {
          option: "p = mv",
          optionLetter: "a",
        },
        correctAnswer: "a",
        userAnswer: "",
      },
      {
        options: {
          option: "p = F/A",
          optionLetter: "b",
        },
        correctAnswer: "",
        userAnswer: "",
      },
      {
        options: {
          option: "p = Fd",
          optionLetter: "c",
        },
        correctAnswer: "",
        userAnswer: "",
      },
      {
        options: {
          option: "p = mgh",
          optionLetter: "d",
        },
        correctAnswer: "",
        userAnswer: "",
      },
    ],
    status: undefined,
  },
  {
    question: "What is the relationship between force, mass, and acceleration, as described by Newton's second law of motion?",
    answer: [
      {
        options: {
          option: "Force = mass × acceleration",
          optionLetter: "a",
        },
        correctAnswer: "a",
        userAnswer: "",
      },
      {
        options: {
          option: "Mass = force × acceleration",
          optionLetter: "b",
        },
        correctAnswer: "",
        userAnswer: "",
      },
      {
        options: {
          option: "Acceleration = force × mass",
          optionLetter: "c",
        },
        correctAnswer: "",
        userAnswer: "",
      },
      {
        options: {
          option: "Force = mass / acceleration",
          optionLetter: "d",
        },
        correctAnswer: "",
        userAnswer: "",
      },
    ],
    status: undefined,
  },
  // Add more questions following the same structure
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