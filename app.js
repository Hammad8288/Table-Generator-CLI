#! /usr/bin/env node
import inquirer from "inquirer";
let myTable = true;
while (myTable) {
    let userInpur = await inquirer.prompt([
        {
            type: "number",
            name: "number",
            message: "Enter a number"
        }
    ]);
    let myNumber = userInpur.number;
    if (myNumber) {
        console.log(`Here's The Table of ${myNumber} \n `);
        for (let i = 1; i <= 10; i++) {
            console.log(`${myNumber} x ${i} = ${myNumber * i} `);
        }
    }
    else {
        console.log("Plese Enter A Numerical Value");
    }
    let askAgain = await inquirer.prompt([
        {
            type: "confirm",
            name: "askAgain",
            message: "Do You Want To Generate Another Table ?",
            default: "false",
        }
    ]);
    if (askAgain.askAgain) {
        myTable = true;
    }
    else {
        myTable = false;
    }
    ;
}
