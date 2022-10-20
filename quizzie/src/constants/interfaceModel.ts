export type interfaceModel = {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: [];
};

export type innerQuestions = {
    question: string;
    options: string[];
    correct_answer: string;
    incorrect_answers: [];
    answered: boolean;
};

/*{
    "response_code": 0,
    "results": [
      {
        "category": "Science & Nature",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which Apollo mission was the first one to land on the Moon?",
        "correct_answer": "Apollo 11",
        "incorrect_answers": [
          "Apollo 10",
          "Apollo 9",
          "Apollo 13"
        ]
      },
      {
        "category": "Geography",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the name of the former country that was succeeded by countries such as Serbia, Croatia and Slovenia?",
        "correct_answer": "Yugoslavia",
        "incorrect_answers": [
          "Czechoslovakia",
          "Abkhazia",
          "South Ossetia"
        ]
      },
      {
        "category": "Entertainment: Books",
        "type": "multiple",
        "difficulty": "hard",
        "question": "What is Ron Weasley&#039;s middle name?",
        "correct_answer": "Bilius",
        "incorrect_answers": [
          "Arthur",
          "John",
          "Dominic"
        ]
      },
      {
        "category": "Entertainment: Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which one of these actors is said to be cut from the film &#039;E.T. the Extra-Terrestrial&#039;?",
        "correct_answer": "Harrison Ford",
        "incorrect_answers": [
          "Michael J. Fox",
          "Andy Kaufman",
          "Arnold Schwarzenegger"
        ]
      },
      {
        "category": "Vehicles",
        "type": "boolean",
        "difficulty": "easy",
        "question": "The full English name of the car manufacturer BMW is Bavarian Motor Works",
        "correct_answer": "True",
        "incorrect_answers": [
          "False"
        ]
      },
      {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Which character, in the game &quot;Morenatsu&quot;, has the most possible endings to their route, at a total of four different endings?",
        "correct_answer": "Shin Kuroi",
        "incorrect_answers": [
          "Kouya Aotsuki",
          "Soutarou Touno",
          "Torahiko Ooshima"
        ]
      },
      {
        "category": "Entertainment: Board Games",
        "type": "multiple",
        "difficulty": "hard",
        "question": "In Magic: The Gathering, which of the following was the first publicly released foil card?",
        "correct_answer": "Lightning Dragon",
        "incorrect_answers": [
          "Revenant",
          "Beast of Burden",
          "Dirtcowl Wurm"
        ]
      },
      {
        "category": "Entertainment: Music",
        "type": "boolean",
        "difficulty": "medium",
        "question": "Musical artist, Future, collaborated with Kendrick Lamar for the song: &quot;Mask Off&quot;.",
        "correct_answer": "True",
        "incorrect_answers": [
          "False"
        ]
      },
      {
        "category": "History",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the historical name of Sri Lanka?",
        "correct_answer": "Ceylon",
        "incorrect_answers": [
          "Myanmar",
          "Colombo",
          "Badulla"
        ]
      },
      {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "medium",
        "question": "The mobile game &quot;Jetpack Joyride&quot; was released in what year? ",
        "correct_answer": "2011",
        "incorrect_answers": [
          "2012",
          "2009",
          "2014"
        ]
      }
    ]
  }*/
