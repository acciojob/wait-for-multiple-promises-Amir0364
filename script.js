//your JS code here. If required.
function createPromise() {
  return new Promise((resolve) => {
    let time = Math.random() * (3000 - 1000) + 1000;
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

let promise1 = createPromise();
let promise2 = createPromise();
let promise3 = createPromise();

let promiseArray = [promise1, promise2, promise3];

let startTime = Date.now();
let tableBody = document.getElementById('output');

Promise.all(promiseArray).then((values) => {
  let endTime = Date.now();
  
  // Convert the times from milliseconds to seconds
  let timesInSeconds = values.map(value => value / 1000);
  let totalTimeInSeconds = (endTime - startTime) / 1000;

  // Clear the table body
  tableBody.innerHTML = '';

  // For each promise, create a new row and append it to the table body
  timesInSeconds.forEach((time, index) => {
    let row = document.createElement('tr');
    
    let nameCell = document.createElement('td');
    nameCell.textContent = `Promise ${index + 1}`;
    
    let timeCell = document.createElement('td');
    timeCell.textContent = time.toFixed(3);  // Round to 3 decimal places
    
    row.appendChild(nameCell);
    row.appendChild(timeCell);
    
    tableBody.appendChild(row);
  });

  // Create a row for the total time and append it to the table body
  let totalRow = document.createElement('tr');
  
  let totalNameCell = document.createElement('td');
  totalNameCell.textContent = 'Total';
  
  let totalTimeCell = document.createElement('td');
  totalTimeCell.textContent = totalTimeInSeconds.toFixed(3);  // Round to 3 decimal places
  
  totalRow.appendChild(totalNameCell);
  totalRow.appendChild(totalTimeCell);
  
  tableBody.appendChild(totalRow);
});