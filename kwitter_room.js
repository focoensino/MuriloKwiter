// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQDRUwA3FSZJdt2hCHg1RtSoIQL736lVY",
    authDomain: "vamos-conversar-d8123.firebaseapp.com",
    databaseURL: "https://vamos-conversar-d8123-default-rtdb.firebaseio.com",
    projectId: "vamos-conversar-d8123",
    storageBucket: "vamos-conversar-d8123.appspot.com",
    messagingSenderId: "1030105923657",
    appId: "1:1030105923657:web:d5b75d84a9645393b1ff98"
  };

//inicialize firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user-name").innerHTML = "Bem-vindo(a) " + user_name + "!"

//função para craiar a sala do firebase

function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
    purpose : "Adicionando Sala"
});

localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html"
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Nome da Sala - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
 });
});

}

getData();

//função que redireciona o usuario para a sala escolhida

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout(){
localStorage.removeItem("user-name")
localStorage.removeItem("room-name")
window.location = "index.html"
}