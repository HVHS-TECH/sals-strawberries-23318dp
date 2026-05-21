
console.log("Running Sal's Strawberries")
let user = firebase.auth().currentUser
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

  let user = firebase.auth().currentUser;

  if (!user) {
    alert("Please log in first.");
    return;
  }

  const userID = user.uid;

  const name = document.getElementById("name").value;
  const favoriteFruit = document.getElementById("favoriteFruit").value;
  const fruitQuantity = document.getElementById("fruitQuantity").value;

  firebase.database().ref("fruitForms/" + userID).set({

    name: name,
    favoriteFruit: favoriteFruit,
    fruitQuantity: fruitQuantity

  });

  console.log('Users name is ' + name +
    '. Their favourite fruit is ' + favoriteFruit +
'. They want ' + fruitQuantity + ' servings per week.')
}

function sendEmail() {


  let user = firebase.auth().currentUser;

  if (!user) {
    alert("Please log in first.");
    return;
  }
  
  let userID = user.uid;
  let email = user.email;

  // Read data from Firebase
  fruitForms/user.uid
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
      const favoriteFruit= data.favoriteFruit;
      const fruitQuantity = data.fruitQuantity;

      document.getElementById('emailMessage').innerHTML = `

        <div>
          <p>To: ${email}</p>
          <p>From: Sal's Strawberry Saloon</p>

          <p>Hello, ${name}</p>

          <p>
            This is Sal's Strawberry Saloon, buy fruit now.
          </p>

          <p>
            Your favourite fruit is ${favoriteFruit} 
            </p>
          <p>
          Your fatass has eaten this fruit ${fruitQuantity} many times
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
}




