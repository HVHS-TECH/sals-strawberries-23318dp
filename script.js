
console.log("Running Sal's Strawberries")

function writeForm(){
    // Get the form data
    const favoriteFruit = document.getElementById("favoriteFruit").value;
}
function fb_popupLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
  
    firebase.auth().signInWithPopup(provider).then((result) => {
      GLOBAL_user = result.user;  // Save the user details object to a global variable
      console.log("User has logged in")
    });
  }


  function fb_write(){
    console.log ("shibby");
  }