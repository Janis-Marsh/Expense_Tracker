// Expense Tracker Practice Assignment
let expenses = [];
let nameInput = document.getElementById('expName');
let amountInput = document.getElementById('expAmount');
let categoryInput = document.getElementById('category');
let output = document.getElementById('output');
let display = document.getElementById('displayTotal');
let html = '';

// Update Expense table 

function updateList() {
    let total = 0;

    html = `
        <table>
    `
    
    for (let i = 0; i < expenses.length; i++){
        total += expenses[i].amount;
        html+= `     
               <tr>
                    <td>${expenses[i].expense}</td>
                    <td>$${expenses[i].amount}</td>
                    <td>${expenses[i].category}</td>
                    <td>
                        <button onclick="editExpense(${i})">Edit</button>
                        <button onclick="deleteExpense(${i})">Delete</button>
                    </td>
                </tr>
        `;
    }

    html +=  `
        </table>
        `;

    totalHTML = `
        <div class="total-amount">
            <p> <strong>Total:</strong> $${total} </p>
        </div>
        `;

    output.innerHTML = html;
    display.innerHTML = totalHTML;
}

// Add expenses

function addExpense() {
    let expenseList = {
        expense: nameInput.value,
        amount: Number(amountInput.value),
        category: categoryInput.value,
    };
    expenses.push(expenseList);
    nameInput.value = "";
    amountInput.value = "";
    categoryInput.value = "";
    
    updateList();
}

// Create Edit Function

function editExpense(i){
    let newExpense = prompt("Edit Expense:", expenses[i].expense);
    let newAmount = prompt("Edit Amount:", expenses[i].amount);
    let newCategory = prompt("Edit Category:", expenses[i].category);

    expenses[i].expense = newExpense;
    expenses[i].amount = Number(newAmount);
    expenses[i].category = newCategory;

    updateList();
    
}

// Create delete function

function deleteExpense(i){
    expenses.splice(i, 1);
    updateList();
}

updateList();