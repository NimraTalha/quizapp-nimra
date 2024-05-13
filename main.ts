import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgCyan("Welcome To Multiple Choice Questions"));

let Questions = [
    {
        name: "q1",
        type: "list",
        message: "Gigafactory is owned and operated by?",
        choices: ["Tesla", "Apple", "Microsoft"]
    },
    {
        name: "q2",
        type: "list",
        message: "The total height of Mount Everest is?",
        choices: ["7,848 meter", "8,848 meter", "9,848 meter"]
    },
    {
        name: "q3",
        type: "list",
        message: "The world population is about _____ billion?",
        choices: ["7", "8", "10"]
    }
];

let totalScore = 0;

inquirer.prompt(Questions).then((answers) => {
    if (answers.q1 === "Tesla") {
        console.log(chalk.greenBright("Congratulations! You got 10 marks for the first question."));
        totalScore += 10;
    } else {
        console.log(chalk.red("Wrong answer for the first question. You lost 10 marks."));
        totalScore -= 10;
    }

    if (answers.q2 === "8,848 meter") {
        console.log(chalk.greenBright("Congratulations! You got 10 marks for the second question."));
        totalScore += 10;
    } else {
        console.log(chalk.red("Wrong answer for the second question. You lost 10 marks."));
        totalScore -= 10;
    }

    if (answers.q3 === "8") {
        console.log(chalk.greenBright("Congratulations! You got 10 marks for the third question."));
        totalScore += 10;
    } else {
        console.log(chalk.red("Wrong answer for the third question. You lost 10 marks."));
        totalScore -= 10;
    }

    // Calculate total sum of scores
    const totalMarks = 10 * Questions.length;
    console.log(chalk.yellow(`Your total score: ${totalScore} out of ${totalMarks}`));
});
