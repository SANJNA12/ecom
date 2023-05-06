const firebaseConfig = {
  apiKey: "AIzaSyDI9L2P3Vtb7uOgedvSFXV4ePx1M1mfjas",
  authDomain: "contact-23024.firebaseapp.com",
  databaseURL: "https://contact-23024-default-rtdb.firebaseio.com",
  projectId: "contact-23024",
  storageBucket: "contact-23024.appspot.com",
  messagingSenderId: "366958481141",
  appId: "1:366958481141:web:78ac925d3b5a83490cbfbc"
};




// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
