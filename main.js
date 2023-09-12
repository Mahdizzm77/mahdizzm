console.log("mah");
/*define elements */
let nameInput = document.getElementById("fname");
let emailInput = document.getElementById("email");
let messageInput = document.getElementById("message");

let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click" , _showMsg);
let formInput = document.querySelectorAll(".input");
let sendSound = document.getElementById("SendSound");
let errorSound = document.getElementById("errorSound");


function _showMsg(event){
event.preventDefault();
let formInput = document.querySelectorAll(".input");

let Name = formInput[0].value;
let Lastname = formInput[1].value;
let email = formInput[2].value;
let text = formInput[3].value;

formInput.forEach (thisInput => {
  
 
  if (thisInput.value === ""){
      thisInput.classList.add("emptyInput");
      thisInput.nextElementSibling.classList.add("errorDisplay");
      errorSound.play();
  }
  // error message 
  else if (Name !== "" && email !=="" && Lastname!== "" && text !== "" )
  {
  let popBox = document.getElementById("msg");
  popBox.style.display = "block";
// submit message
  let message =  `Hello ${Name} ${Lastname} Thank you for submittion, We gonna contact with you via your email ${email}`
  let popMsg = document.getElementById("msgPg");
  popMsg.innerHTML= message;

    // Play the SendSound when the submit button is clicked
    sendSound.play();
 
  let closeBtn = document.getElementById("closeBtn");
  
closeBtn.addEventListener("click" , function(){
console.log("close");
  popBox.style.display="none";
});

  } 
  })
}


/*input hover chenge color and size */

formInput.forEach (thisInput => {
thisInput.addEventListener( "mouseenter" , function(){
  // console.log("beep");
  thisInput.classList.add ("inputHover");
 })
 thisInput.addEventListener( "mouseout" , function(){
  // console.log("boop");
  thisInput.classList.remove ("inputHover");
 }
 )});

/*submit hover chenge color and size */


submitBtn.addEventListener("mouseenter" , function(){
submitBtn.classList.add ("submitHover");
});

submitBtn.addEventListener("mouseout" , function(){
submitBtn.classList.remove ("submitHover");
});
/*typing sound */

let mySound = document.getElementById("mySound");
formInput.forEach (thisInput => {
thisInput.addEventListener( "keydown" , function(){

  mySound.play();
 })
});



// //TASK: When the user clicks on the burger menu, it shows up

   

let mobileNav = document.getElementById("mobileNav");
let burger = document.getElementById("burger");
let close = document.getElementById("close");

burger.addEventListener("click", function(){
  mobileNav.classList.add("mnavSlide");
  mobileNav.style.display=("flex");
  burger.style.display=("none");
 close.style.display=("block");
})
close.addEventListener("click", function(){

  mobileNav.style.display=("none");
  burger.style.display=("block");
 close.style.display=("none");
})

//Task when user click on pages switch between them
//sweetch pages

let menulink = document.querySelectorAll(".menulink");
let contactPage = document.getElementById("contactPage");
let aboutPage =document.getElementById("aboutPage");
let gallery=document.getElementById("gallery");
// let formsquarebtn = document.getElementById("formsquareBtn")
//swtich pages
menulink.forEach( thislink => thislink.addEventListener("click", function (){

  if(thislink === menulink[2]){
    contactPage.classList.add("PageIn");
    gallery.classList.remove("PageIn");
    aboutPage.classList.add("aboutHidden");
  }else if (thislink === menulink[1]){
     // • Show  my gallery  page
    gallery.classList.add("PageIn");
    contactPage.classList.remove ("PageIn");
    aboutPage.classList.add("aboutHidden");
  }else{
    //- Show  about me page
    gallery.classList.remove("PageIn");
    contactPage.classList. remove ("PageIn");
    aboutPage.classList.remove ("aboutHidden");
  }

  
}));

// gallery animation

let itemImage = document.querySelectorAll(".galleryImage");
itemImage.forEach (thisimage => thisimage.addEventListener("mouseenter", function (){
  thisimage.classList.add("scale");
}))


itemImage.forEach (thisimage => thisimage.addEventListener("mouseout", function (){
  thisimage.classList.remove("scale");
}))  

// title appear
// let itemTitle = document.querySelectorAll(".title");
// let item = document.getElementById("title");
// item.addEventListener("moseenter",_mouseEnterImage);

// function _mouseEnterImage(){
//   itemTitle.forEach (thisimage => thisimage.addEventListener("mouseenter", function (){
//        thisimage.classList.add("appearTitle");
//       }))
// }


// sofware animation
const apps = document.querySelectorAll("#SoftwareBox .app");
apps.forEach((app) => {
  app.addEventListener("mouseenter", () => {
    app.classList.add("app:hover");
  });

  app.addEventListener("mouseleave", () => {
    app.classList.remove("app:hover");
  });
});
// service animation
const works = document.querySelectorAll("#ServiceBox .work");

// Add event listeners for hover animation
works.forEach((work) => {
  work.addEventListener("mouseenter", () => {
    work.classList.add("app:hover");
  });

  work.addEventListener("mouseleave", () => {
    work.classList.remove("app:hover");
  });
});