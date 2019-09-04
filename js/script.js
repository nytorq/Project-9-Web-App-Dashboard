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
const trafficData = [
  {
    "dataset" : 'hourly',
    "labels"  : ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00','24:00'],
    "array"   : [0, 750, 1250, 900, 485, 760, 1500, 293, 683]
  },
  {
    "dataset" : 'daily',
    "labels"  : ['Jan 26', 'Jan 26','Jan 27','Jan 28','Jan 29','Jan 30','Jan 31'],
    "array"   : [1000, 893, 235, 1000, 1500, 3825, 1500]
  },
  {
    "dataset" : 'weekly',
    "labels"  : ['Jan 1', 'Jan 6', 'Jan 11', 'Jan 16', 'Jan 21', 'Jan 26', 'Jan 31'],
    "array"   : [2953, 750, 999, 342, 1500, 2000, 362]
  },
  {
    "dataset" : 'monthly',
    "labels"  : ['Aug 2018', 'Sep 2018', 'Oct 2019', 'Nov 2018', 'Dec 2018', 'Jan 2019'],
    "array"   : [1999, 5230, 1250, 2385, 900, 1859]
  },
]
const chartPeriodContainer = document.getElementsByClassName('chart__tab');
const unSelected = 'chart__period';
const selected = unSelected.concat('--selected');
chartPeriodContainer[0].childNodes[2].className = selected;

// var autocomplete = require('autocompleter');
// const input = document.getElementById("messageForUser");
//
// function autocomplete({
//     input: input,
//     fetch: function(text, update) {
//         text = text.toLowerCase();
//         // you can also use AJAX requests instead of preloaded data
//         var suggestions = members.filter(n => n.label.toLowerCase().startsWith(text))
//         update(suggestions);
//     },
//     onSelect: function(item) {
//         input.value = item.label;
//     }
// });

const input = document.getElementById("messageForUser");

autocomplete({
    input: input,
    fetch: function(text, update) {
        text = text.toLowerCase();
        var suggestions = members.filter(n => n.firstName.toLowerCase().startsWith(text))
        update(suggestions);
    },
    onSelect: function(item) {
        input.value = item.firstName;
    },
    minLength: 1,
    emptyMsg: "Looks like there's no member with that name."
});


// FUNCTIONS

function removeParent(element) {
  let parent = element.parentElement;
  parent.remove();
}

function displayMessage(target) {
  // console.log("Hey, I know what button is. See: " + e);
  let parent = returnForm(target)
  let errorMessage = parent.lastElementChild;
  let successMessage = parent.lastElementChild.previousElementSibling;
  const array = [];
  for (i=0; i < target.form.length - 1; i++) {
    let boolean =  target.form[i].value === "";
    array.push(boolean);
  }
  if (array.includes(true)) {
    // any one of the form elements has been found to be empty
    errorMessage.setAttribute("style", "display: inherit;")
    window.setTimeout(function() {errorMessage.style.opacity = 1;}, 200);
  } else {
    successMessage.setAttribute("style", "display: inherit;")
    window.setTimeout(function() {successMessage.style.opacity = 1;}, 200);
  }

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


// Temporarily commented this out to test auto-complete.js functionality.

// console.log(members.sort(compare));
//
// function sortMembers() {
//   let sortedMembers = [...members].sort(compare);
//   // console.log(sortedMembers);
//   let dropdownValues = document.getElementsByClassName('dropdown__value');
//   // console.log(dropdownValues);
//   for (i=0; i < 4; i++) {
//     let memberName = sortedMembers[i].firstName.concat(' ',sortedMembers[i].lastName)
//     dropdownValues[i].innerText = memberName;
//     // console.log(memberName)
//   }
// }

// FUNCTION DECLARATIONS

close_element();
submit_message();

// Temporarily commented this out to test auto-complete.js functionality.
// sortMembers();

// EVENT HANDLERS

const search_inputs = document.querySelectorAll("input[type='search']");

for (i=0; i < search_inputs.length; i++) {
  let currentInput = search_inputs[i];
  currentInput.addEventListener('keydown', () => {
    let inputValue = currentInput.value;
    console.log(inputValue);
  })
}

function changeSelected(target)  {
  for (i=0 ; i < chartPeriodContainer[0].childNodes.length ; i++) {
    chartPeriodContainer[0].childNodes[i].className = unSelected;
  }
  let selectedPeriod = target.textContent.toLowerCase();
  let labels = [];
  let data = [];
  for (i=0 ; i < trafficData.length ; i++) {
    if (trafficData[i]['dataset'].includes(selectedPeriod)) {
      labels = trafficData[i]['labels'];
      data = trafficData[i]['array'];
      // console.log(labels);
      // console.log(trafficChart.data.datasets[0].label)
      // console.log(data);
      trafficChart.data.datasets[0].data = data;
      trafficChart.data.labels = labels;
      trafficChart.update()
      target.className = selected;
      return;
    };
  }
}


for (i=0 ; i < chartPeriodContainer[0].childNodes.length ; i++) {
  let currentChartPeriod = chartPeriodContainer[0].childNodes[i];
  currentChartPeriod.addEventListener('click', () => {
    // console.log('A chartPeriod has been clicked.');
    changeSelected(currentChartPeriod);
  })
}

const alertMenu = document.getElementById('alertMenu');
const bellButton = document.getElementById('notificationsButton');
const bellBubble = document.getElementById('bubble')
let state = 'closed';
bellButton.addEventListener('click', () => {
  if (state === 'opened') {
    alertMenu.setAttribute("style", "display: none;")
    window.setTimeout(function() {alertMenu.style.opacity = 0;}, 200);
    bellButton.setAttribute("style", "background-color: none;")
    state = 'closed';
  } else if (state === 'closed') {
    alertMenu.setAttribute("style", "display: inherit;")
    window.setTimeout(function() {alertMenu.style.opacity = 1;}, 200);
    bellBubble.setAttribute("style", "display: none;")
    window.setTimeout(function() {bellBubble.style.opacity = 0;}, 200);
    bellButton.setAttribute("style", "background-color: #5155af;")
    state = 'opened';
  }
});


// Filtering the values in the dropdown based upon the user's input
