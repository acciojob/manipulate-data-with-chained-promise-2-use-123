function manipulateData() {
  const array = [1, 2, 3, 4];
  const outputDiv = document.getElementById('output');

  // Step 1: Resolve with array after 3 seconds
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(array);
    }, 3000);
  });

  // Chain promises
  promise
    .then((data) => {
      // Step 2: Filter out odd numbers
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = data.filter((num) => num % 2 === 0);
          output.textContent = evenNumbers.join(', '); // Update DOM
          resolve(evenNumbers);
        }, 1000); // Match Cypress expectation
      });
    })
    .then((evenNumbers) => {
      // Step 3: Multiply all even numbers by 2
      return new Promise((resolve) => {
        setTimeout(() => {
          const multipliedNumbers = evenNumbers.map((num) => num * 2);
          output.textContent = multipliedNumbers.join(', '); // Update DOM
          resolve(multipliedNumbers);
        }, 2000); // Match Cypress expectation
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Ensure the function is called only after the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  manipulateData();
});


