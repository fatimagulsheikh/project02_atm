/* #  ATM by Fatima in Typescript
This somewhat complex TypeScript/Node.js project is a console-based application. When the system starts the user is prompted with a user id and user pin. After entering the details successfully, the ATM functionalities are unlocked. All the user data is generated randomly.

Create a GitHub repository for the project and submit its URL in the project submission form.*/
// start code by import inquirer
import inquirer from "inquirer";
let user = await inquirer.prompt([
    {
        type: "string",
        name: "cardholdername",
        message: "Welcome Fatima"
    },
    {
        type: "number",
        name: "pinCode",
        message: "enter your 4 digit pinCode",
    },
    // creating listing and withdraw method
    {
        type: "list",
        name: "accountType",
        message: "Select your account type",
        choices: ["current", "saving"]
    },
    //transition type
    {
        type: "list",
        name: "transitionType",
        message: "Select your transition type",
        choices: ["cash", "withdraw1"]
    },
    //Select amount
    {
        type: "list",
        name: "amount",
        message: "Select your amount",
        choices: ["2000", "5000", "7000", "20000"],
        when(user) {
            return user.transitionType === "cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(user) {
            return user.transitionType === "withdraw1";
        }
    },
]);
//final slip
if (user.pinCode) {
    const balance = Math.floor(Math.random() * 1000 + 1);
    console.log(balance);
    const enteramount = user.account;
    if (enteramount <= balance) {
        const remaining = balance - enteramount;
        console.log(`you have withdraw rupess ${enteramount} and you have remaining balance ${remaining}`);
    }
}
