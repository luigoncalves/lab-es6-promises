// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
// ...

getInstruction(
  'mashedPotatoes',
  0,
  step0 => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step0}</li>`;

    getInstruction('mashedPotatoes', 1, step1 => {
      document.querySelector(
        '#mashedPotatoes'
      ).innerHTML += `<li>${step1}</li>`;

      getInstruction('mashedPotatoes', 2, step2 => {
        document.querySelector(
          '#mashedPotatoes'
        ).innerHTML += `<li>${step2}</li>`;

        getInstruction('mashedPotatoes', 3, step3 => {
          document.querySelector(
            '#mashedPotatoes'
          ).innerHTML += `<li>${step3}</li>`;

          getInstruction('mashedPotatoes', 4, step4 => {
            document.querySelector(
              '#mashedPotatoes'
            ).innerHTML += `<li>${step4}</li>`;

            document.querySelector(
              '#mashedPotatoes'
            ).innerHTML += `<li>Mashed potatoes are ready!</li>`;

            const imgOne = document.getElementById('mashedPotatoesImg');
            imgOne.removeAttribute('hidden');
          });
        });
      });
    });
  },
  error => console.log(error)
);

// Iteration 2 - using promises
// ...

obtainInstruction('steak', 0)
  .then(step0 => {
    document.querySelector('#steak').innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then(step1 => {
    document.querySelector('#steak').innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then(step2 => {
    document.querySelector('#steak').innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then(step3 => {
    document.querySelector('#steak').innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then(step4 => {
    document.querySelector('#steak').innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5);
  })
  .then(step5 => {
    document.querySelector('#steak').innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 6);
  })
  .then(step6 => {
    document.querySelector('#steak').innerHTML += `<li>${step6}</li>`;
    document.querySelector('#steak').innerHTML += `<li>Steak is ready!</li>`;
    const imgTwo = document.getElementById('steakImg');
    imgTwo.removeAttribute('hidden');
  });

// Iteration 3 using async/await
// ...

async function makeBroccoli() {
  for (let i = 0; i < broccoli.length; i++) {
    const text = await obtainInstruction('broccoli', i);
    document.querySelector('#broccoli').innerHTML += `<li>${text}</li>`;
  }

  // const text1 = await obtainInstruction('broccoli', 1);
  // document.querySelector('#broccoli').innerHTML += `<li>${text1}</li>`;

  // const text2 = await obtainInstruction('broccoli', 2);
  // document.querySelector('#broccoli').innerHTML += `<li>${text2}</li>`;

  // const text3 = await obtainInstruction('broccoli', 3);
  // document.querySelector('#broccoli').innerHTML += `<li>${text3}</li>`;

  // const text4 = await obtainInstruction('broccoli', 4);
  // document.querySelector('#broccoli').innerHTML += `<li>${text4}</li>`;

  // const text5 = await obtainInstruction('broccoli', 5);
  // document.querySelector('#broccoli').innerHTML += `<li>${text5}</li>`;

  // const text6 = await obtainInstruction('broccoli', 6);
  // document.querySelector('#broccoli').innerHTML += `<li>${text6}</li>`;

  document.querySelector(
    '#broccoli'
  ).innerHTML += `<li>Broccoli is ready!</li>`;

  const imgThree = document.getElementById('broccoliImg');
  imgThree.removeAttribute('hidden');
}

makeBroccoli();

// Bonus 2 - Promise all
// ...

const p0 = new Promise((resolve, reject) => {
  resolve(obtainInstruction('brusselsSprouts', 0));
});
const p1 = new Promise((resolve, reject) => {
  resolve(obtainInstruction('brusselsSprouts', 1));
});
const p2 = new Promise((resolve, reject) => {
  resolve(obtainInstruction('brusselsSprouts', 2));
});
const p3 = new Promise((resolve, reject) => {
  resolve(obtainInstruction('brusselsSprouts', 3));
});
const p4 = new Promise((resolve, reject) => {
  resolve(obtainInstruction('brusselsSprouts', 4));
});
const p5 = new Promise((resolve, reject) => {
  resolve(obtainInstruction('brusselsSprouts', 5));
});
const p6 = new Promise((resolve, reject) => {
  resolve(obtainInstruction('brusselsSprouts', 6));
});
const p7 = new Promise((resolve, reject) => {
  resolve(obtainInstruction('brusselsSprouts', 7));
});

Promise.all([p0, p1, p2, p3, p4, p5, p6, p7]).then(values => {
  values.forEach(value => {
    document.querySelector('#brusselsSprouts').innerHTML += `<li>${value}</li>`;
  });

  document.querySelector(
    '#brusselsSprouts'
  ).innerHTML += `<li>Brussels sprouts are ready!</li>`;

  const imgFour = document.getElementById('brusselsSproutsImg');
  imgFour.removeAttribute('hidden');
});
