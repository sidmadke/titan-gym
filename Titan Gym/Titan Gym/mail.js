const firebaseConfig = {
  apiKey: "AIzaSyDYbFOV73vvlYGOi6iJ2yhbinTdkJpxv5E",
  authDomain: "titan-gym-291d2.firebaseapp.com",
  databaseURL: "https://titan-gym-291d2-default-rtdb.firebaseio.com",
  projectId: "titan-gym-291d2",
  storageBucket: "titan-gym-291d2.appspot.com",
  messagingSenderId: "371504566030",
  appId: "1:371504566030:web:85e61b02f78aaedf7a515f",
  measurementId: "G-VS9NG5S150"
};
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("titan-gym");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("username");
    var emailid = getElementVal("mail");
    var weight = getElementVal("weight");
    var height = getElementVal("height");
    var contactNo = getElementVal("contactNo");
  
    saveMessages(name, emailid, weight,height,contactNo);
    console.log(name,emailid)
  
    //   enable alert
    document.querySelector("#alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector("#alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, weight,height,contactNo) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      weight:weight,
      height:height,
      contactNo:contactNo,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };