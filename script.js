const questions = [
    // First question
    [
      {
       question: `
  What will the following code output?

      x = 5
      if x > 3:
        print("x is greater than 3")
      else:
        print("x is not greater than 3")
        `,
      options: ["x > 3", "x ≯ 3", "x = 3 ", "Error"],
      correctAnswer: "x > 3"
      },
      {
        question: `     
  What is the output of the following code?

      def add_numbers(a, b):
        return a + b
        
      result = add_numbers(2, 3)
      print(result)
      `,
      options: ["5", "6", "2", "3"],
      correctAnswer: "5"
      },
      {
      question: `     
  What is the output of the following code?
    
      for i in range(5):
        print(i)
        `,
      options: ["01234", "12345", "1234", "0123"],
      correctAnswer: "01234"
      },
      {
      question: `     
  What is the output of the following code?
    
      def is_even(n):
        return n % 2 == 0

      print(is_even(5))
      `,
      options: ["True", "False", "5", "Error"],
      correctAnswer: "False"
      },
      {
      question: `     
  What is the output of the following code?

      my_list = [1, 2, 3, 4, 5]
      print(len(my_list))
      `,
      options: ["5", "1", "0", "Error"],
      correctAnswer: "5" 
      },
      {
      question: `     
  What is the output of the following code?

      my_string = "Hello, World!"
      print(my_string[7])
      `,
      options: ["H", "e", "W", "Error"],
      correctAnswer: "W"
      },
      {
      question: `     
  What is the output of the following code?

      x = 0
      while x < 5:
        print(x)
        x += 1
        `,
      options: ["0123", "1234", "01234", "012345"],
      correctAnswer: "01234"
      },
      {
      question: `     
  What is the output of the following code?

      def square(num):
        return num ** 2

      result = square(4)
      print(result)
      `,
      options: ["0123", "1234", "01234", "012345"],
      correctAnswer: "01234"
      },
      {
      question: `     
  What is the output of the following code?

      my_dict = {"name": "Alice", "age": 30}
      print(my_dict["name"])
      `,
      options: ["30", "''name''", "''Alice''", "Error"],
      correctAnswer: "01234"
      },
      {
      question: `     
  What is the output of the following code?

      my_list = [1, 2, 3]
      my_list.append(4)
      print(my_list)
      `,
      options: ["[1,2,3]", "[1,2,3,4]", "[4,3,2,1]", "Error"],
      correctAnswer: "[1,2,3,4]"
      },
      // Add more questions for the first question here...
    ],
    // Second question
    [
      {
        question: `
  What will the following code output?
            
      let x = 5;
      let y = 10;
      let z = x + y;
      console.log(z);
      `,
      options: ["15", "5+10", "510", "Error"],
      correctAnswer: "15"
    },
    {
        question: `
  What is the output of the following code?
            
      function greet(name) {
          console.log("Hello, " + name + "!");
        }
      greet("Alice");
      `,
      options: ["Hello, Alice!", "greet(Alice);", "Hello, !", "Error"],
      correctAnswer: "Hello, Alice!"
    },
    {
        question: `
  What is the output of the following code?
            
      let num = 10;
      while (num > 0) {
      console.log(num);
      num--;
      }
      `,
      options: ["10,9,8,...,1", "0", " 1,2,3,...,10", "Error"],
      correctAnswer: "10,9,8,...,1"
    },
    {
        question: `
  What is the output of the following code?
            
      let fruits = ["Apple", "Banana", "Orange"];
      console.log(fruits[1]);
      `,
      options: ["Apple", "Banana", "Orange", "Banana, Orange"],
      correctAnswer: "Banana"
    },
    {
        question: `
      let num1 = 10;
      let num2 = 20;
      if (num1 < num2) {
          console.log("num1 is less than num2");
      } else {
      console.log("num1 is greater than num2");
      }
      `,
      options: ["num1 < num2", "num1 > num2", "num1 = num2", "Error"],
      correctAnswer: "num1 < num2"
    },
    {
        question: `
  What is the output of the following code?
            
      let sum = 0;
      for (let i = 1; i <= 5; i++) {
        sum += i;
      }
      console.log(sum);
      `,
      options: ["15", "10", "5", "0"],
      correctAnswer: "15"
    },
    {
        question: `
  What is the output of the following code?
            
      let str = "Hello World";
      console.log(str.length);
      `,
      options: ["10", "11", "12", "Error"],
      correctAnswer: "10"
    },
    {
        question: `
  What is the output of the following code?
            
      let numbers = [1, 2, 3, 4, 5];
      let sum = 0;
      for (let number of numbers) {
          sum += number;
      }
      console.log(sum);
      `,
      options: ["10", "15", "5", "Error"],
      correctAnswer: "15"
    },
    {
        question: `
  What is the output of the following code?
            
      let num = 7;
      if (num % 2 === 0) {
      console.log("Even");
        } else {
      console.log("Odd");
        }
      `,
      options: ["Even", "Odd", "7", "Error"],
      correctAnswer: "Odd"
    },
    {
        question: `
  What is the output of the following code?
            
      function multiply(a, b) {
      return a * b;
      }
      let result = multiply(3, 4);
      console.log(result);
      `,
      options: ["7", "12", "34", "0"],
      correctAnswer: "12"
    },
      // Add more questions for the second question here...
    ],
    // Third question
    [
      {
        question: `
  What will the following code output?
            
      using System;
      class Program
        {
          static void Main(string[] args)
        {
          int num1 = 5;
          int num2 = 7;
          int result = num1 + num2;
          Console.WriteLine("The result is: " + result);
        }
        }
        `,
        options: ["12", "11", "13", "10"],
        correctAnswer: "13"
    },
    {
        question: `
  What will the following code output?

        using System;
        class Program
        {
            static void Main(string[] args)
            {
                for (int i = 0; i < 5; i++)
                {
                    Console.WriteLine("Iteration: " + i);
                }
            }
        }
        `,
        options: ["01234", "12345", "012345", "0123"],
        correctAnswer: "01234"
    },
    {
        question: `
  What will the following code output?

        using System;
        class Program
        {
            static void Main(string[] args)
            {
                int num = 10;
                if (num > 5)
                {
                    Console.WriteLine("Number is greater than 5");
                }
                else
                {
                    Console.WriteLine("Number is less than or equal to 5");
                }
            }
        }
        `,
        options: ["10", "15", "5", "11"],
        correctAnswer: "10"
    },
    {
        question: `
  What is the output of the following code?
            
            using System;
            class Program
            {
                static int Add(int a, int b)
                {
                    return a + b;
                }
                
                static void Main(string[] args)
                {
                    int result = Add(3, 4);
                    Console.WriteLine("The sum is: " + result);
                }
            }
        `,
        options: ["6", "7", "3", "4"],
        correctAnswer: "7"
    },
    {
        question: `
  What will the following code output?

        using System;
        class Program
        {
            static void Main(string[] args)
            {
                int[] numbers = { 1, 2, 3, 4, 5 };
                Console.WriteLine("Third element: " + numbers[2]);
            }
        }
        `,
        options: ["4", "2", "1", "5"],
        correctAnswer: "4"
    },
    {
        question: `
  What is the output of the following code?
            
            using System;
            class Program
            {
                static void Main(string[] args)
                {
                    string name = "Alice";
                    string greeting = "Hello, " + name + "!";
                    Console.WriteLine(greeting);
                }
            }
        `,
        options: ["Alice", "Bob", "!", "Alice!"],
        correctAnswer: "15"
    },
    {
        question: `
  What is the output of the following code?
            
            using System;
            class Program
            {
                static void Main(string[] args)
                {
                    int count = 0;
                    while (count < 3)
                    {
                        Console.WriteLine("Count: " + count);
                        count++;
                    }
                }
            }
        `,
        options: ["012", "123", "0123", "01"],
        correctAnswer: "012"
    },
    {
        question: `
 What is the output of the following code?
            
            using System;
            class Program
            {
                static void Main(string[] args)
                {
                    for (int i = 1; i <= 3; i++)
                    {
                        for (int j = 1; j <= 2; j++)
                        {
                            Console.WriteLine("i: " + i + ", j: " + j);
                        }
                    }
                }
            }
        `,
        options: ["11213112", "11122122", "112231", "1112"],
        correctAnswer: "11213112"
    },
    {
        question: `
  What is the output of the following code?
            
            using System;
            class Program
            {
                static void Main(string[] args)
                {
                    int[] numbers = { 1, 2, 3, 4, 5 };
                    Console.WriteLine("Length of array: " + numbers.Length);
                }
            }
        `,
        options: ["5", "4", "6", "0"],
        correctAnswer: "5"
    },
    {
        question: `
  What is the output of the following code?
            
            using System;
            class Program
            {
                static void Main(string[] args)
                {
                    int num = 10;
                    if (num % 2 == 0)
                    {
                        Console.WriteLine("Even number");
                    }
                    else
                    {
                        Console.WriteLine("Odd number");
                    }
                }
            }
        `,
        options: ["Even", "Odd", "10", "2"],
        correctAnswer: "Even"
    },
      // Add more questions for the third question here...
    ],
    // Add more arrays for other questions similarly...
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let isRestart = false;
  
  function displayQuestion() {
    const currentQuestions = questions[currentQuestionIndex];
    const randomIndex = Math.floor(Math.random() * currentQuestions.length);
    const currentQuestion = currentQuestions[randomIndex];
    document.getElementById("question").innerHTML = currentQuestion.question;
  
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.classList.add("option");
      button.innerText = option;
      button.onclick = () => selectAnswer(option, currentQuestion.correctAnswer);
      button.disabled = isRestart; // Disable options if restart button is displayed
      optionsDiv.appendChild(button);
    });
  }
  
  function selectAnswer(selectedOption, correctAnswer) {
    if (selectedOption !== correctAnswer) {
      isRestart = true;
      disableAllOptions();
      document.getElementById("restart").style.display = "inline-block";
      document.getElementById("message").innerText = score === 0 ? "Unfortunately, it seems you haven't scored any points this time. Don't be discouraged! Remember, every setback is an opportunity for growth. Keep pushing forward and striving for improvement. We believe in you!" :
                                                                     `Congratulations on achieving a score of ${score}! Your knowledge and skills are truly impressive. Share a screenshot of your score with us? You can send it to us at @imbenofficial23 on Instagram. Keep up the amazing work! We're excited to showcase your accomplishment.`;
      document.getElementById("message").style.display = "block";
      
      // Change background color of selected wrong option
      document.querySelectorAll(".option").forEach(button => {
        if (button.innerText === selectedOption) {
          button.style.backgroundColor = "#ffffff";
          button.style.color = "#333";
        }
      });
    } else {
      score += 50;
      document.getElementById("score").innerText = score;
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        displayQuestion();
      } else {
        endGame();
      }
    }
  }
  
  function endGame() {
    isRestart = true;
    disableAllOptions();
    document.getElementById("restart").style.display = "inline-block";
    document.getElementById("message").innerText = score === 0 ? "Unfortunately, it seems you haven't scored any points this time. Don't be discouraged! Remember, every setback is an opportunity for growth. Keep pushing forward and striving for improvement. We believe in you!" : `Congratulations on achieving a score of ${score}! Your knowledge and skills are truly impressive. Share a screenshot of your score with us? You can send it to us at @imbenofficial23 on Instagram. Keep up the amazing work! We're excited to showcase your accomplishment.`;
    document.getElementById("message").style.display = "block";
  }
  
  function disableAllOptions() {
    const buttons = document.querySelectorAll(".option");
    buttons.forEach(button => button.disabled = true);
  }
  
  function restart() {
    currentQuestionIndex = 0;
    score = 0;
    isRestart = false;
    document.getElementById("score").innerText = score;
    document.getElementById("restart").style.display = "none";
    document.getElementById("message").style.display = "none";
    displayQuestion();
  }
  
  displayQuestion();
  