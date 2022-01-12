export const examFetchedData = {
  success: true,
  status: 'success',
  message: 'Exam Started !',
  data: {
    id: 'db5ed499-8898-4558-89ca-d8f35a11572f',
    name: 'Data Structures and Algorithms',
    description: 'This is an annual Exam of DSA held by TTT Community , Participate to win exciting prices !',
    image: 'https://image.freepik.com/free-vector/online-exam-isometric-web-banner_33099-2305.jpg',
    userId: '8f1576ca-80a5-4f96-a215-04caeb307e15',
    tags: ['Programming', 'Data Structures', 'Competitive Programming'],
    questions: [
      {
        id: 1,
        question: 'Which alphabets are vowels ?',
        options: [
          {
            id: 1,
            data: 'uUUUUUUUUUUU',
          },
          {
            id: 0,
            data: 'VVVVVVVVVVVVVVVVVVVv',
          },
        ],
        type: 'multipleOptions',
        correctOption: [0, 1],
        marks: 5,
        negMarks: -2,
      },
      {
        id: 2,
        question: 'You are ____',
        type: 'fillInTheBlanks',
        correctOption: 'Gay',
        marks: 5,
        negMarks: -2,
      },
      {
        id: 0,
        question: 'Number of english alphabets',
        options: [
          {
            id: 1,
            data: '20',
          },
          {
            id: 0,
            data: '26',
          },
        ],
        type: 'mcq',
        correctOption: [0],
        marks: 5,
        negMarks: -2,
      },
    ],
    startTime: '2021-11-20T05:08:30.000Z',
    duration: 33,
    ongoing: 1,
    finished: 0,
    isPrivate: 0,
  },
};

export const examResult = [
  {
    question: 'What is the return type of printf in C?',
    type: 'mcq',
    options: [
      { id: 1, data: 'char' },
      { id: 2, data: 'float' },
      { id: 3, data: 'int' },
      { id: 4, data: 'void' },
    ],
    marks: 2,
    negMarks: 2,
    givenOption: [3],
    correctOption: [3],
  },
  {
    question: 'Select the languages that uses an compiler',
    type: 'multipleOptions',
    options: [
      { id: 1, data: 'C++' },
      { id: 2, data: 'C' },
      { id: 3, data: 'Python' },
      { id: 4, data: 'C#' },
    ],
    marks: 2,
    negMarks: 2,
    givenOption: [1, 3],
    correctOption: [1, 2, 4],
  },
  {
    question: 'Which function is used to print a string in Java?',
    type: 'fillInTheBlanks',
    marks: 2,
    negMarks: 2,
    givenOption: 'System.out.println("Hello World");',
    correctOption: 'System.out.println',
  },
];

export const examScores = {
  userId: '',
  rank: 5,
  finishTime: 1634939030,
  totalScore: 100,
  topPerformers: [
    { userId: '', rank: 1, finishTime: 1634939030, totalScore: 100 },
    { userId: '', rank: 1, finishTime: 1634939030, totalScore: 100 },
    { userId: '', rank: 1, finishTime: 1634939030, totalScore: 100 },
  ],
};
