
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
  
    //let user = firebase.auth().currentUser

    console.log('Users name is ' + name +
      '. Their favourite fruit is ' + favoriteFruit +
  '. They want ' + fruitQuantity + ' servings per week.')
  
  firebase.database().ref("fruitForms/" + name).set({

    name: name ,
    favoriteFruit: favoriteFruit,
    fruitQuantity: fruitQuantity,
  
  
  });
      
}
function sendEmail() {

  document.getElementById("reviewSection").style.display = "none";

  let user = firebase.auth().currentUser;

  if (!user) {
    alert("Please log in first.");
    return;
  }
}
let userID = user.uid;
  let email = user.email;

  // Read data from Firebase
  firebase.database()
    .ref("fruitForms/" + userID)
    .once("value")
    .then((snapshot) => {

      const data = snapshot.val();

      if (!data) {
        alert("No form data found in database.");
        return;
      }

      const name = data.name;
      const favoriteFruit = data.favoriteFruit;
      const fruitQuantity = data.fruitQuantity;

      document.getElementById('emailMessage').innerHTML = `

        <div>
          <p>To: ${email}</p>
          <p>From: Sal's Strawberry Saloon</p>

          <p>Hello, ${name}</p>

          <p>
            This is Sal's Strawberry Saloon,
            reaching out about your car's extended insurance policy.
          </p>

          <p>
            Also, we are offering a deal on your favorite fruit:
            ${favoriteFruit}
          </p>

          <p>
            You can get ${fruitQuantity} servings per week
            for 27.3% more!
          </p>

          <p>
            Best regards,<br>
            Sal's Strawberry Saloon
          </p>
        </div>

      `;

    })
    .catch((error) => {
      console.log(error);
    });




