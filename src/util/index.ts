type Data = {
  response_code: number;
  results: {}[];
};
const mockData: Data = {
  response_code: 0,
  results: [
    {
      category: "Entertainment: Comics",
      type: "boolean",
      difficulty: "hard",
      question:
        "In the comic book &quot;Archie&quot;, Betty is friends with Veronica because she is rich.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "hard",
      question:
        "In the game &quot;Melty Blood Actress Again Current Code&quot;, you can enter Blood Heat mode in Half Moon style.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science & Nature",
      type: "boolean",
      difficulty: "hard",
      question:
        "It was once believed that injecting shark cartilage into people would prevent them from contracting cancer.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "hard",
      question:
        "In &quot;Portal 2&quot;, Cave Johnson started out Aperture Science as a shower curtain company.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "hard",
      question:
        "In Undertale, having a &quot;Fun Value&quot; set to 56-57 will play the &quot;Wrong Number Song Call&quot;.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "General Knowledge",
      type: "boolean",
      difficulty: "hard",
      question: "In Scandinavian languages, the letter &Aring; means river.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "Entertainment: Japanese Anime & Manga",
      type: "boolean",
      difficulty: "hard",
      question:
        "In the &quot;To Love-Ru&quot; series, Peke is considered a female robot.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "Entertainment: Music",
      type: "boolean",
      difficulty: "hard",
      question:
        "The song Scatman&#039;s World was released after Scatman (Ski-Ba-Bop-Ba-Dop-Bop).",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "hard",
      question:
        "In &quot;Minecraft&quot;, gold tools are faster than diamond tools.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "hard",
      question:
        "The Paradox Interactive game &quot;Stellaris&quot; was released in 2016.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
  ],
};

export default mockData;
