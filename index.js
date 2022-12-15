
// Data (DB simulation)
const labProcess = [
  '1.Fork repository',
  '2.Clone repository',
  '3.Npm install',
  '4.Start coding'
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

// Callbacks
function readStep(step, callback) {
  setTimeout(() => {
    document.querySelector("#callbacks").innerHTML += `<li>${labProcess[step]}</li>`;
    callback();
  }, Math.random() * 500);
}

// Callback hell
readStep(0, () => {
  readStep(1, () => {
    readStep(2, () => {
      readStep(3, () => {
        console.log('Callback hell ended');
      })
    })
  })
})

// Promises 

// const promise = new Promise(function (res, rej) {
//   let number = Math.random();
//   setTimeout(() => {
//     if (number > 0.5) {
//       res(`Yay! Number ${number} is bigger than 0.5`); // then
//     } else {
//       rej(`Ooops, ${number} is too small.`) // catch
//     }
//   }, 2000)
// });

// promise
//   .then(result => { return result })
//   .then(value => console.log(value))
//   .catch(err => console.error(err));

// function numberBigEnough(number) {
//   return new Promise((res, rej) => {
//     if (number > 20) {
//       res('Yay! Number is big enough')
//     } else {
//       rej('Ooops number is too small')
//     }
//   })
// }

// numberBigEnough(21)
//   .then(result => console.log(result))
//   .catch(err => console.log(err))

// setInterval(() => {
//   console.log(promise)
// }, 500)

// Promises then / catch

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
  })
  .catch(error => console.log(error))
  .finally(() => { console.log('This will always be called') })

// Promises with Async await

async function readStepsAndAdd() {
  try {
    const instruction0 = await readSteps(0);
    document.querySelector("#async-await").innerHTML += `<li>${instruction0}</li>`;
    const instruction1 = await readSteps(1);
    document.querySelector("#async-await").innerHTML += `<li>${instruction1}</li>`;
    const instruction2 = await readSteps(2);
    document.querySelector("#async-await").innerHTML += `<li>${instruction2}</li>`;
    const instruction3 = await readSteps(3);
    document.querySelector("#async-await").innerHTML += `<li>${instruction3}</li>`;
  } catch (error) {
    console.log(error)
  }
}

readStepsAndAdd();


// Sintaxis async await

// Regular functions
// Cuando uso async en una función, devuelve una promisa que puedo capturar con then/catch

async function sayHi() {
  console.log('Hello!')
}

sayHi().then(() => {
  console.log('I am now a Promise and you can call then and catch with me')
})


// Arrow function syntaxis

const secondFunc = async () => {
  console.log('With arrow functions too!');
}

secondFunc().then(() => {
  console.log('Yeah.')
})











