
const { Console } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  console.log(`Thanks ${answer}, nice to meet you!`);
  rl.question('What do you do in your spare time? ', (answer2) => {
    console.log(`Nice, ${answer2} sounds like fun!`);
        rl.question('Which meal is your favourite? Breakfast, lunch or dinner? ', (answer3) => {
          console.log(`Mmmm, yes ${answer3} is my favourite too!`);
            rl.question('Which is your favourite sport to watch? ', (answer4) => {
              console.log(`${answer4} is such a great sport!`);
                rl.question('What is your superpower? Tell me why! ', (answer5) => {
                  console.log(`Wow, that is amazing!`);
                    console.log("-----------------------");
                      console.log(`Profile:\n Name: ${answer}   Favourite Activity: ${answer2}\n Favourite Meal: ${answer3}   Favourite Sport: ${answer4}\n Superpower: ${answer5}`);
                  rl.close();
                })
            })
        })
})
});






// Example Code
// const readline = require('readline');
// const { stdin: input, stdout: output } = require('process');

// const rl = readline.createInterface({ input, output });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });