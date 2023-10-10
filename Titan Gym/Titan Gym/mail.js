const firebaseConfig = {
    apiKey: "AIzaSyBfE3GsKKUeG6fzSbS2vXbtIIIR83xgFec",
    authDomain: "titan-gym-b11b7.firebaseapp.com",
    databaseURL: "https://titan-gym-b11b7-default-rtdb.firebaseio.com",
    projectId: "titan-gym-b11b7",
    storageBucket: "titan-gym-b11b7.appspot.com",
    messagingSenderId: "605733658016",
    appId: "1:605733658016:web:ec1cd5c0007e092387d8c5",
    measurementId: "G-BT0PMW5JJF"
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