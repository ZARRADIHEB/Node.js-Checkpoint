const fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) console.log("Error writing file:", err);
  console.log("----File Created Successfully----");
});

fs.readFile("welcome.txt", (err, data) => {
  if (err) console.log(err);
  console.log("The File Content Is : " + data);
});
