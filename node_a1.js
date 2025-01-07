const fs = require("fs");

// Q1. Creating Directory
// i. Synchronous
fs.mkdirSync("space_project");

// ii. Asynchronous
fs.mkdir("space_project", (err) => {
  if (err) throw err;
  console.log("File created");
});

// Q2. Writing to File
data =
  "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.";
// i. Synchronous
fs.writeFileSync("./space_project/log.txt", data);

// ii. Asynchronous
fs.writeFile("./space_project/log.txt", data, (err) => {
  if (err) throw err;
  console.log("File created and line added.");
});

// Q3. Replacing File Content
data = "ISRO has started working on Gaganyaan.";
// i. Synchronous
fs.writeFileSync("./space_project/log.txt", data);

// ii. Asynchronous
fs.writeFile("./space_project/log.txt", data, (err) => {
  if (err) throw err;
  console.log("Data replaced");
});

// Q4. Appending to File
data =
  "The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.";
// i. Synchronous
fs.appendFileSync("./space_project/log.txt", data);

// ii. Asynchronous
fs.appendFile("./space_project/log.txt", data, (err) => {
  if (err) throw err;
  console.log("line appended");
});

// Q5. Renaming File
// i. Synchronous
fs.renameSync("./space_project/log.txt", "./space_project/update.txt");

// ii. Asynchronous
fs.rename("./space_project/log.txt", "./space_project/update.txt", (err) => {
  if (err) throw err;
  console.log("file renamed");
});

// Q6. Reading File
// i. Synchronous
let x = fs.readFileSync("./space_project/update.txt");
console.log(x.toString());
console.log("We are excited");

// ii. Asynchronous
fs.readFile("./space_project/update.txt", (err) => {
  if (err) throw err;
  console.log(x.toString());
});
console.log("We are excited");

// Q7. Deleting File and Directory
// i. Synchronous
fs.unlinkSync("./space_project/update.txt");


// ii. Asynchronous
fs.unlink("./space_project/update.txt", (err) => {
  if (err) throw err;
  console.log("File deleted Successfully");
});

// Q8. 

// i. Synchronous
fs.rmdirSync("space_project");

// ii. Asynchronous
fs.rmdir("space_project", (err) => {
  if (err) throw err;
  console.log("Folder deleted Successfully");
});
