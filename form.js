// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDclCCSnNxinu3yolXTTBBXQVp5mkawYCw",
  authDomain: "login-bcfbc.firebaseapp.com",
  projectId: "login-bcfbc",
  storageBucket: "login-bcfbc.appspot.com",
  messagingSenderId: "366532950856",
  appId: "1:366532950856:web:2d660fcc021666c139d17d",
  measurementId: "G-WVXVVZCFH5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("Registered Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })
