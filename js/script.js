// VARIABLES

const close_icons = document.getElementsByClassName('fa-times');
const submit_buttons = document.querySelectorAll("button[type='submit']");
const members = [
  {
    "userID": 0,
    "firstName" : "Victoria",
    "lastName"  : "Chambers",
    "email"     : "vchambers@gmail.com",
    "joinDate"  : "10/15/15"
  },
  {
    "userID": 1,
    "firstName" : "Dale",
    "lastName"  : "Byrd",
    "email"     : "dbyrd@gmail.com",
    "joinDate"  : "10/15/15"
  },
  {
    "userID": 2,
    "firstName" : "Dawn",
    "lastName"  : "Wood",
    "email"     : "dwood@hotmail.com",
    "joinDate"  : "10/15/15"
  },
  {
    "userID": 3,
    "firstName" : "Dan",
    "lastName"  : "Oliver",
    "email"     : "doliver@gmail.com",
    "joinDate"  : "10/15/15"
  },
  {
    "userID": 4,
    "firstName" : "Charlie",
    "lastName"  : "Prator",
    "email"     : "cprator@gmail.com",
    "joinDate"  : "12/09/13"
  }
];
var autocomplete = require('autocompleter');
const input = document.getElementById("messageForUser");

function autocomplete({
    input: input,
    fetch: function(text, update) {
        text = text.toLowerCase();
        // you can also use AJAX requests instead of preloaded data
        var suggestions = members.filter(n => n.label.toLowerCase().startsWith(text))
        update(suggestions);
    },
    onSelect: function(item) {
        input.value = item.label;
    }
});



// FUNCTIONS

function removeParent(element) {
  let parent = element.parentElement;
  parent.remove();
}

function displayMessage(e) {
  let parent = returnForm(e)
  parent.lastElementChild.setAttribute("style", "display: inherit;")
  window.setTimeout(function() {parent.lastElementChild.style.opacity = 1;}, 200);
  // parent.lastElementChild.style.display = 'inherit';
  // parent.lastElementChild.style.transition = 'display 3s ease-in-out';
}

function returnForm(e) {
  let currentNode = e;
  while (currentNode.tagName !== 'FORM') {
    currentNode.tagName + '.';
    currentNode = currentNode.parentNode
  }
  return currentNode
}

function close_element() {
  for (i=0 ; i < close_icons.length ; i++) {
    let icon = close_icons[i];
    icon.addEventListener('click', () => {
      removeParent(icon);
    })
  }
}

function submit_message() {
  for (i=0 ; i < submit_buttons.length ; i++) {
    let button = submit_buttons[i];
    button.addEventListener('click', () => {
      displayMessage(button)
    });
  }
}

function compare(a, b) {
  const lastNameA = a.lastName.toUpperCase();
  const lastNameB = b.lastName.toUpperCase();
  let comparison = 0;
  if (lastNameA > lastNameB) {
    comparison = 1;
  } else if (lastNameA < lastNameB) {
    comparison = -1;
  }
  return comparison;
}

// console.log(members.sort(compare));

function sortMembers() {
  let sortedMembers = [...members].sort(compare);
  // console.log(sortedMembers);
  let dropdownValues = document.getElementsByClassName('dropdown__value');
  console.log(dropdownValues);
  for (i=0; i < 4; i++) {
    let memberName = sortedMembers[i].firstName.concat(' ',sortedMembers[i].lastName)
    dropdownValues[i].innerText = memberName;
    // console.log(memberName)
  }
}

// FUNCTION DECLARATIONS

close_element();
submit_message();
sortMembers();

// EVENT HANDLERS

const search_inputs = document.querySelectorAll("input[type='search']");

for (i=0; i < search_inputs.length; i++) {
  let currentInput = search_inputs[i];
  currentInput.addEventListener('keydown', () => {
    let inputValue = currentInput.value;
    console.log(inputValue);
  })
}







// Filtering the values in the dropdown based upon the user's input
