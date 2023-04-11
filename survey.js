const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const person = {};

rl.question('What is your name/nickname? ', (name) => {
  person.name = name;
  rl.question('What is an activity you like doing? ', (activity) => {
    person.activity = activity;
    rl.question('What do you listen to while you do that? ', (answer) => {
      person.song = answer;
      rl.question('Which meal is your favourite (dinner, brunch, etc.)? ', (answer) => {
        person.meal = answer;
        rl.question('What is your favourite thing to eat for that meal? ', (answer) => {
          person.food = answer;
          rl.question('What is the sport you\'re best at? ', (answer) => {
            person.sport = answer;
            rl.question('What is a random fact about you that makes you awesome? ', (answer) => {
              person.fact = answer;
              rl.close();
              console.log(`${person.name} loves listening to ${person.song} while ${person.activity}, consuming ${person.food} for ${person.meal}, prefers ${person.sport} to any other sport, and is amazing at ${person.fact}!`);
            });
          });
        });
      });
    });
  });
});

// THIS WASNT WORKING: keeping around in case I can make it work later

// const questions = {
//   name: 'What is your name/nickname? ',
//   activity: 'What is an activity you like doing? ',
//   song: 'What do you listen to while you do that? ',
//   meal: 'Which meal is your favourite (dinner, brunch, etc.)? ',
//   food: 'What is your favourite thing to eat for that meal? ',
//   sport: 'What is the sport you\'re best at? ',
//   fact: 'What is a random fact about you that makes you awesome? ',
//   exit: ''
// };

// const askQuestions = (questions) => {
//   let person = {};
//   for (let question in questions) {
//     rl.question(questions[question], (answer) => {
//       person[question] = answer;

//       if (question === 'exit') {
//         rl.close();
//       }
//     });
//   }
//   return person;
// };

// askQuestions(questions);