//your JS code here. If required.
function manipulateData() {
  const array = [1, 2, 3, 4];
  const outputDiv = document.getElementById('output');

  // Create a promise that resolves after 3 seconds with the array
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(array);
    }, 3000);
  });

  // Chain promises to manipulate the array
  promise
    .then((data) => {
      // Filter out odd numbers
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = data.filter((num) => num % 2 === 0);
          outputDiv.textContent = evenNumbers.join(', ');
          resolve(evenNumbers);
        }, 1000);
      });
    })
    .then((evenNumbers) => {
      // Multiply all even numbers by 2
      return new Promise((resolve) => {
        setTimeout(() => {
          const multipliedNumbers = evenNumbers.map((num) => num * 2);
          outputDiv.textContent = multipliedNumbers.join(', ');
          resolve(multipliedNumbers);
        }, 2000);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Call the function
manipulateData();
