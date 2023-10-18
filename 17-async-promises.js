const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");

    await writeFile(
      "./content/result-mind-grenade.txt",
      `This is awesome: ${first}, ${second} `,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

start();

// method 2
// const {readFile, writeFile} = require('fs');
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async() => {
//   try {
//     const first = await readFilePromise("./content/first.txt", "utf-8")
//     const second = await readFilePromise("./content/second.txt", "utf-8")

//     await writeFilePromise("./content/result-mind-grenade.txt", `This is awesome: ${first}, ${second} `)
//     console.log(first, second);
//   } catch(err) {
//     console.log(err)
//   }
// }

// start()

// Method 3: different way to do the above

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if(err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     })
//   })
// }

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))