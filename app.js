const fs = require("fs");
const prompt = require("prompt-sync")();

function createFile() {
  const name = prompt("Username : ");
  const pass = prompt("Pass : ");
  fs.appendFileSync(
    "newFile.txt",
    `Name : ${name} \n Pass: ${pass}\n`,
    (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Saved!");
      }
    }
  );
  showMenu();
}

function readFileContent() {
  if (fs.existsSync("newFile.txt")) {
    const data = fs.readFileSync("newFile.txt", "utf8");
    console.log(data);
  } else {
    console.log("File does not exist. No entries to read.");
  }
  showMenu();
}

function deleteFile() {
  if (fs.existsSync("newFile.txt")) {
    fs.unlink("./newFile.txt", (err) => {
        if(err)
        console.error(err);
    });
  } else {
    console.log("File does not exist. Cannot Delete.");
  }
  showMenu();
}

function showMenu() {
  console.log("\nMenu:");
  console.log("1. Create Entry");
  console.log("2. Read Entries");
  console.log("3. Delete File");
  console.log("4. Exit");

  const choice = prompt("Select an option (1-4): ");
  switch (choice) {
    case "1":
      createFile();
      break;
    case "2":
      readFileContent();
      break;
    case "3":
      deleteFile();
      break;
    case "4":
      console.log("Exiting program.");
      break;
    default:
      console.log("Invalid choice. Please enter a number between 1 and 4.");
      showMenu();
      break;
  }
}

showMenu();
