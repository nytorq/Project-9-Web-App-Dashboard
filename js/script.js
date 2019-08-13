// VARIABLES

const close_icons = document.getElementsByClassName('fa-times');
const submit_buttons = document.querySelectorAll("button[type='submit']");

// FUNCTIONS

function close_element() {
  for (i=0 ; i < close_icons.length ; i++) {
    let icons = close_icons[i];
    icons.addEventListener('click', () => {
      removeParent(icons);
    })
  }
}

function removeParent(element) {
  let parent = element.parentElement;
  parent.remove();
}

// FUNCTION DECLARATIONS

close_element();

// EVENT HANDLERS
