// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDaDRsEYJIdFxZWsfD2HZIi0u54BcPCPjY",
    authDomain: "kwitter-app-f245b.firebaseapp.com",
    databaseURL: "https://kwitter-app-f245b-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-f245b",
    storageBucket: "kwitter-app-f245b.appspot.com",
    messagingSenderId: "1054238623578",
    appId: "1:1054238623578:web:e9bd8a028feb907b881563",
    measurementId: "G-7EE451RDJE"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    })
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
    console.group(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    ike = message_data['like'];
    name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button ="<button class='btn btn-warning' id="+firebase_message_id+ " value="+like+ " onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
    
    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;
//End code

 } });  }); }

