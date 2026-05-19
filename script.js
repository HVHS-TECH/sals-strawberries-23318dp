
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
    const name =
    document.getElementById("name").value;
    const favoriteFruit =
    document.getElementById("favoriteFruit").value;
    const fruitQuantity =
    document.getElementById("fruitQuantity").value;
  
    let user = firebase.auth().currentUser

    console.log('Users name is ' + name +
      '. Their favourite fruit is ' + favoriteFruit +
  '. They want ' + fruitQuantity + ' servings per week.')
  
      
}






firebase.database().ref("fruitForms/" + name).set({

  name: name ,
  favoriteFruit: favoriteFruit,
  fruitQuantity: fruitQuantity,


});
  