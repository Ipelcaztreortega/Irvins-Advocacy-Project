
// TODO: Query for button with an id "theme-button"

// ******** DARKKK MODEEEE BUTTTTTON *********

//Grabbing the dark mode button's id
let themeButton = document.getElementById("theme-button")

// TODO: Complete the toggleDarkMode function
//Creating the toggleDarkMode function
const toggleDarkMode = () => {
  //This will change the 
  document.body.classList.toggle("dark-mode");

      
}
// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.
//So when the dark mode button is clicked on the HTML webpage, it runs the function which then gives the body the command to us the dark mode css features.
themeButton.addEventListener("click", toggleDarkMode);


// ******* Below is adding a p tag to the html **********

// Add your query for the sign now button here
let signNowButton = document.getElementById("sign-now-button");


const addSignature = (person) => {//RIGHT HERE YOU HAVE TO ADD PERSON AGAIN AS THE SPECIFIC PARAMETER.
  // Write your code to manipulate the DOM here

  //THIS IS CREATING A NEW P TAG.
  const pars = document.createElement("p");

  //THIS IS ADDING THE CONTENT INTO THE P TAG
  pars.textContent = (`\n \n🖊️ ${person.name} from ${person.hometown} supports this.`);
  //Grabbing the signatures ID and storing it in a declared variable.
  let davs = document.getElementById("adds");
//This is appending the text to the signatures div
  davs.appendChild(pars);

  // ********** This Will be for adding to the counter *******
//Grabbing the id of that one p tag so that it makes sure that only that element will be grabbed.
  let old_count = document.getElementById("counter")

  // This completely deletes the p tag and the content insde from the html
  old_count.remove()

  // This adds the value of count + 1
  count = count + 1
  // This is creating a new p tag
  const terms = document.createElement("p");
  //This is giving the new p element an id of counter.
  terms.setAttribute("id", "counter");
  //THIS IS CREATING A TEXT NODE to a declared variable.
  let new_count = document.createTextNode("🖊️ " + count + " people have signed this petition and support this cause");

  //This is APPENDING BUT YOU CANNOT APPEND STRINGS ONLY NODES SO I MADE A TEXT NODE.
  terms.appendChild(new_count);

  //APPENDING THE NEW TEXT TO THE DAVS WHICH IS THE ID OF THE DIV THAT WE DECLARED EARLIER.
  davs.appendChild(terms);
}
// Add a click event listener to the sign now button here

let count = 3;
// signNowButton.addEventListener("click", addSignature);

// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form
//Creating a validation FORM.
const validateForm = () => {
//This is setting a boolean.
  let containsErrors = false;
//This grabs the elements of the form. 
  let petitionInputs = document.getElementById("sign-petition").elements; //which holds a list of all the different inputs for our form.
  
//Creating an OBJECT, its almost like a dicitonary from python that we use the petitionInput[i] elements. Where 0 is the first one and so on.
  let person = {
    name: petitionInputs[0].value, // accesses and saves value of first input
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  }


  // TODO: Loop through all inputs, we let i = 0, set the limit where i is less than petitionInputs.length, and it increases by 1 hence i++
  for (let i = 0; i < petitionInputs.length; i++) {
    //If the element is less than two letters it will give that form element a error class and set the contains Error to true, hence the CSS error class will kick in. 
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }
  // TODO: Validate the value of each input
 
  const email = document.getElementById('email');
    //A second if that will mail sure the email has the .com
  
  //The conditional below means that if the email address does NOT contain the '.com', we want to tell our user that their input contains errors and is invalid.
  if (!email.value.includes('.com')) {
    email.classList.add('error');
    containsErrors = true;
    //Give the email input the error class so that the input box will be highlighted in red with the CSS rules we added earlier.

  } else {
    email.classList.remove('error');
  }

  //A conditional statement where the basis is if containsErrors is equivalent to false
  if (containsErrors == false) {
    //If it is then it will run the addSignature function, hence why we removed the original event listener.

    addSignature(person);//You want person to pass the person object to the function.
    toggleModal(person); //This will call the toggleModal function to make the modal appear after the user signs the petition and go away after 4 seconds after the inputs is ran through the erorr process and after the signatures and numbers are updated

    //This is a loop that will make sure that in elements from the form are not empty
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }


  // TODO: Call addSignature() and clear fields if no errors

}
//Now when you click the sign now button, the event listener will run the validate form which will do the signatures, then runs the modal. It's all one big cycle in a way.
signNowButton.addEventListener('click', validateForm);


// ********* ANIMATION STUFF **********

//Creating an object for the animation information. 
let animation = {
  revealDistance: 150,
  initialOpacity: 1,
  transitionDelay: 0,
  transitionDuration: "2s",
  transitionProperty: "all",
  transitionTimingFunction: "ease"

}

//this variable grabs all of the divs with that class
let revealableContainers = document.querySelectorAll(".revealable");

//Creating a function that will loop through the variables elements which are all the classes with the revealable class, then set the limit to less then the length. 
const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    //This creates a variable for the window inner height. 
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      //This means that the loop will add the class one at a time not all at once. Dont be dumb bozo, adding them all at once would cause it too not work or give an error.
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}
//this will then look at the window, and as you scroll it will run the function reveal.
window.addEventListener('scroll', reveal);

// ******* REDUCE MOTION BUTTON ***************

let motionButton = document.getElementById("motion-button");
//More or less the same funciton as reveal but with click and abilities just when you click the buttons it will change the animations

const reduceMotion = () => {
  //Using the previous animation object values by grabbing the left side and updating the values. 
  animation["transitionDuration"] = 0;
  animation["transitionTimingFunction"] = "none";
  animation["transitionProperty"] = "none";
  animation["revealDistance"] = "20"
  // animation["revealDistance"] = 100;

  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      //This means that the loop will add the class one at a time not all at once. Dont be dumb bozo, adding them all at once would cause it too not work or give an error.
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }

    //This is changing the classes with the revealable class's style and updating using the new updates to add a quicker animation.
    revealableContainers[i].style.transitionDelay = animation.transitionDelay;
    revealableContainers[i].style.transitionDuration = animation.transitionDuration;
    revealableContainers[i].style.transitionProperty = animation.transitionProperty;
    revealableContainers[i].style.transitionTimingFunction = animation.transitionTimingFunction;
    revealableContainers[i].style.revealDisance = animation.revealDistance;
  }
}
//So now when you click the reduce motion button, it will reduce the animation style.
motionButton.addEventListener("click", reduceMotion);


// *********** MODAL STUFF *******************
//creating a function that passes/uses the person object from before. 
const toggleModal = (person) => {//YOU NEED PERSON AS THE PARAMETER
  
  let modal = document.getElementById("thanks-modal");//This represents the entire html modal along with the background
  let modalContent = document.getElementById("thanks-modal-content");//THIS IS THE P TAG THAT YOU GRAB AND WILL CHANGE THE CONTENT. 
  modal.style.display = "flex";//This will turn the modal style from none to flex so that it shows.
  modalContent.textContent = (`Thank you so much ${person.name}! ${person.hometown} represents!`);


  let intervalId = setInterval(scaleImage, 500);//This will set an interval of half a second that will use the scale image function to make the picture look smaller then bigger like a throbbing feeling. 

  setTimeout(() => {//THIS IS THE SETTIMEOUT SO THAT THE STYLE GOES FROM FLEX TO NONE AFTER 4 SECONDS
    modal.style.display = "none";
    clearInterval(intervalId);//This clears the intervalId
  }, 4000)



}

// ******** ANIMATING THE PICTURE INSIDE THE MODAL ************
let scaleFactor = 1;

let modalImage = document.getElementById("ty-image");//This grabs the ID of the photo that is inside the modal. 

//Creating a function that will shrink the image if the scaleFactor is one and if it is not one it will make it one again.
const scaleImage = () => {
  if (scaleFactor === 1) {
    scaleFactor = 0.8;

  } else {
    scaleFactor = 1;
  }
  modalImage.style.transform = `scale(${scaleFactor})`;//You have to add it as a string using  ``, DONT KNOW WHY BUT YOU HAVE TO .
}

// *********** CLOSING THE MODAL AHEAD OF TIME BUTTON ************
//This will grab the close button that is inside the modal.
let closeModalButton = document.getElementById("close-modal-button");

//creating a function that will grab the entire modal and change the css to none so that itll go back to not being visible.
const closeModal = () => {
  let modal = document.getElementById("thanks-modal");
  modal.style.display = "none";
}
//So when the close button is clicked it will run the closemodal function that will quickly close the modal.
closeModalButton.addEventListener("click",closeModal);