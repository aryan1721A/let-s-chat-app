//firebase link added 
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBxyjIuNVA_RLc8apVywqwcNORKq-6Sdpw",
    authDomain: "let-s-chat-aappp.firebaseapp.com",
    projectId: "let-s-chat-aappp",
    storageBucket: "let-s-chat-aappp.appspot.com",
    messagingSenderId: "484150929856",
    appId: "1:484150929856:web:4a91a7646fe57ed5044025"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//friebase link ends
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   
   //End code
   });});}
getData();