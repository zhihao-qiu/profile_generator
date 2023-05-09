const rdl = require('readline');
const questions = [
  "What\'s your name? Nicknames are also acceptable :)",
  "What\'s an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What\'s your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];
const answers = [];



const readline = function() {
  const rl = rdl.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(resolve => {
    rl.on('line', (str) => {
      resolve(str);
      rl.close();
    });
  });
};

async function main() {
  for (const question of questions) {
    process.stdout.write(`${question}`);
    const answer = await readline();
    answers.push(answer);
  }

  console.log('##################################################');
  console.log('Please refer your profile as follows:');
  console.log('##################################################');

  for (let i = 0; i < questions.length; i++) {
    console.log(`Q: ${questions[i]}`);
    console.log(`A: ${answers[i]}`);
  }
}

main();
