function performTasks() {
    const input = document.getElementById('nameInput').value;
    const names = input.split(',');
}
  //Trim the names
  for (let i = 0; i < names.length; i++) {
      names[i] = names[i].trim();
  }

       .length === 0 || names[0] === '') {
          ('Please enter at aleast one name.');
          return;
    }
    
 const results = document.getElementById('results');
 results.innerHTML = '';
 
 //Alphabetical Order
 const sortedNames = names.slice().sort();
 displayResult('Names in Alphabetical Order',sortedNames);

 //uppercase Names
 const uppercaseNames = [];
 for (let i = 0; i < names.length; i++) {
    uppercaseNames.push(names[i].toUpperCase());
 }
 displayResult('Names in UpperCase', uppercaseNames);

 //Fliter Names Containing Specific Letter
 const letter = 'a';
 const filteredNames = [];
 for (let i = 0; i < names.length; i++) {
    if (names[i].toLowerCase().includes(letter)) {
          filteredNames.push(names[i]);
      }   
  } 
  displayResult(`Names Containing the Letter"${letter}`, filteredNames);

  //Use Shift and unshift methods
  const ShiftName = names.slice();//Create a copy to preserve original names array
  const firstElement = ShiftName.shift();
  displayResult('First Name Removed with Shift',ShiftName);
  ShiftName.unshift("keziah");
  displayResult('First Names Added Back with Unshift', ShiftName);
}

function displayResult(title, data) {
    const results = document.getElementById('results');
    let html = `<div class="result-section">
                    <h2>${title}</h2>
                    <ul>`;

for (let i = 0; i < data.length; i++) {
    html += `<li>${data[i]}</li>`
}

html += `</ul></div>`;
results.innerHTML += html;
}
 