
// Data (DB simulation)
const labProcess = [
  '1.Fork repository',
  '2.Clone repository',
  '3.Npm install',
  '4.Start coding',
  '5.Finish lab',
  '6.Git commit',
  '7.Git push',
]

// Function to read DB & add to DOM (server simulation)
function readOne(step) {
  setTimeout(() => {
    console.log(labProcess[step])
    document.querySelector("#regular-js").innerHTML += `<li>${labProcess[step]}</li>`
   }, Math.random() * 500);
}

// Synchronously called
readOne(0);
readOne(1);
readOne(2);
readOne(3);
readOne(4);
readOne(5);
readOne(6);