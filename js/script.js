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
    "userID": 21,
    "firstName" : "Dale",
    "lastName"  : "Byrd",
    "email"     : "dbyrd@gmail.com",
    "joinDate"  : "10/15/15"
  }
]

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

// FUNCTION DECLARATIONS

close_element();
submit_message();

// EVENT HANDLERS
