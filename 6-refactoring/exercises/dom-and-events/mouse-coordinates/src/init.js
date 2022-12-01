// document
//   .getElementById('user-interface')
//   .addEventListener('mousemove', (event) => {
//     debugger;
//     // read & process user input ----listeners
//     const xValue = event.pageX;
//     const yValue = event.pageY;

//     // execute core logic --- handlers
//     const formattedCoordinates = 'X: ' + xValue + '\nY: ' + yValue;

//     // render result for user
//     document.getElementById('mouse-position').innerHTML = formattedCoordinates;

//     // log action for developers
//     console.log('\n--- new coordinates ---');
//     console.log('x:', xValue);
//     console.log('y:', yValue);
//   });


import listeners  from "./listener";


//register listener
listeners();