
//1. Use the inquirer npm package to get user input.
import inquirer from "inquirer"; 
import qr from  "qr-image"
import fs from "fs";
inquirer
  .prompt([
  {message:"Type your URL",
   name:"URL",
  },
  ])
  .then((answers) => {
   const url = answers.URL;
   var qr_svg = qr.image(url);
   qr_svg.pipe(fs.createWriteStream('qr_image1.png'));

fs.writeFile("URL.txt",url, (err)=>{
if(err)throw err
console.log("the file is saved");
})
 })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });





