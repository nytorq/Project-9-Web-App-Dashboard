// VARIABLES

const close_icons = document.getElementsByClassName('fa-times');
const submit_buttons = document.querySelectorAll("button[type='submit']");

// FUNCTIONS

function removeParent(element) {
  let parent = element.parentElement;
  parent.remove();
}

function displayMessage(e) {
  let parent = e.parentNode;
  // if (parent.tagName === "FORM") {
  //   parent.lastElementChild.style.display = 'inline-block';
  // } else {
  //   parent = parent.parentNode;
  //
  // }
  do {
    let pa
  } while (parent !=== 'FORM')
  // e.nextElementSibling.style.display = 'inline-block';
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
      // console.log('button clicked!')
    });
  }
}

// FUNCTION DECLARATIONS

close_element();
submit_message();

// EVENT HANDLERS
