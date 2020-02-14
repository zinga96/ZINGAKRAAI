var config = {
    apiKey: "AIzaSyAwSA9UwBGZpxzoscbyIXOBDPgFr-p_v8U",
    authDomain: "contact-form-af254.firebaseapp.com",
    databaseURL: "https://contact-form-af254.firebaseio.com",
    projectId: "contact-form-af254",
    storageBucket: "contact-form-af254.appspot.com",
    messagingSenderId: "213772834693",
    appId: "1:213772834693:web:7e8c46b5aaaa670ed516ec",
    measurementId: "G-TZ3LT88E5Q"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contact-form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var fname = getInputVal('fname');
    var lname = getInputVal('lname');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
  
    // Save message
    saveMessage(fname, lname, email, subject);
  
    // Clear form
    document.getElementById('contact-form').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(fname, lname, email, subject){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      fname: fname,
      lname:lname,
      email:email,
      subject:subject
    });
  }