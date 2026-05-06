// 1. Find the parts of the page we need to work with
const balance = document.getElementById('balance');
const list = document.getElementById('list');
const form = document.getElementById('transaction-form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

let currentBalance = 0;

// 2. This function runs when you click the "Add" button
function addTransaction(e) {
  e.preventDefault(); // Stops the page from refreshing

  // Check if the user actually typed something
  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('Please add a description and an amount');
    return;
  }

  // 3. Update the Math
  const transactionAmount = parseFloat(amount.value);
  currentBalance += transactionAmount;
  balance.innerText = currentBalance.toFixed(2);

  // 4. Update the List on the screen
  const item = document.createElement('li');
  
  // Add a class so CSS can color it (green for income, red for expense)
  item.classList.add(transactionAmount > 0 ? 'plus' : 'minus');

  item.innerHTML = `
    ${text.value} <span>${transactionAmount > 0 ? '+' : ''}${transactionAmount.toFixed(2)}</span>
  `;

  list.appendChild(item);

  // 5. Clear the boxes for the next entry
  text.value = '';
  amount.value = '';
}

// 6. Tell the form to listen for the "submit" click
form.addEventListener('submit', addTransaction);
