
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  console.log(`Thanks ${answer}, nice to meet you!`);
  rl.question('What do you do with your spare time? ', (answer2) => {
    console.log(`Nice, ${answer2} sounds like fun!`);
        rl.question('Which meal is your favourite? ', (answer3) => {
          console.log(`mmmm, yes ${answer3} is my favourite!`);
            rl.question('Which is your favourite sport to watch? ', (answer4) => {
              console.log(`I love to watch ${answer4} too!`);
                rl.question('What is your superpower? Tell me why!', (answer5) => {
                  console.log(`Wow, that is amazing!`);
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