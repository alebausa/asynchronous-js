
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

// Callbacks
function readStep(step, callback) {
  setTimeout(() => {
    let instruction = labProcess[step];
    document.querySelector("#callbacks").innerHTML += `<li>${instruction}</li>`;
    callback();
  }, Math.random() * 500)
}

readStep(0, () => {
  readStep(1, () => {
    readStep(2, () => {
      readStep(3, () => {
        readStep(4, () => {
          readStep(5, () => {
            readStep(6, () => {
              console.log('Done!')
            })
          })
        })
      })
    })
  })
})

// Promises
function readSteps(step) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (step < labProcess.length) {
        resolve(labProcess[step])
      } else {
        reject('404 - Step not found')
      }
    }, Math.random() * 500)
  })
}

readSteps(0)
  .then(instruction => {
    document.querySelector("#promises").innerHTML += `<li>${instruction}</li>`;
    return readSteps(1);
  })
  .then(instruction => {
    document.querySelector("#promises").innerHTML += `<li>${instruction}</li>`;
    return readSteps(2);
  })
  .then(instruction => {
    document.querySelector("#promises").innerHTML += `<li>${instruction}</li>`;
    return readSteps(3);
  })
  .then(instruction => {
    document.querySelector("#promises").innerHTML += `<li>${instruction}</li>`;
    return readSteps(4);
  })
  .then(instruction => {
    document.querySelector("#promises").innerHTML += `<li>${instruction}</li>`;
    return readSteps(5);
  })
  .then(instruction => {
    document.querySelector("#promises").innerHTML += `<li>${instruction}</li>`;
    return readSteps(6);
  })
  .then(instruction => {
    document.querySelector("#promises").innerHTML += `<li>${instruction}</li>`;
  })
  .catch(error => console.log(error));


// Async / await
async function readStepsAndAdd() {
  const instruction0 = await readSteps(0);
  document.querySelector("#async-await").innerHTML += `<li>${instruction0}</li>`;
  const instruction1 = await readSteps(1);
  document.querySelector("#async-await").innerHTML += `<li>${instruction1}</li>`;
  const instruction2 = await readSteps(2);
  document.querySelector("#async-await").innerHTML += `<li>${instruction2}</li>`;
  const instruction3 = await readSteps(3);
  document.querySelector("#async-await").innerHTML += `<li>${instruction3}</li>`;
  const instruction4 = await readSteps(4);
  document.querySelector("#async-await").innerHTML += `<li>${instruction4}</li>`;
  const instruction5 = await readSteps(5);
  document.querySelector("#async-await").innerHTML += `<li>${instruction5}</li>`;
  const instruction6 = await readSteps(6);
  document.querySelector("#async-await").innerHTML += `<li>${instruction6}</li>`;
}

readStepsAndAdd()