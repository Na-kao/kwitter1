//LINKS FIREBASE
const firebaseConfig = {
      apiKey: "AIzaSyDBvNy8fZ1CFLpZ4xXlxqfPmMgHq0cqzs8",
      authDomain: "kwitter-96d22.firebaseapp.com",
      databaseURL: "https://kwitter-96d22-default-rtdb.firebaseio.com",
      projectId: "kwitter-96d22",
      storageBucket: "kwitter-96d22.appspot.com",
      messagingSenderId: "143317664418",
      appId: "1:143317664418:web:52b2c45c414e584f554dfb"
    };
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username");
    roomName=localStorage.getItem("nome da sala");
function getData() {
       firebase.database().ref("/"+roomName).on('value', function(snapshot)
        { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot)
         { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose")
          {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código

//Fim do código
      } });  }); }
getData();
function enviar(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(roomName).push({
            name:username,
            message:msg,like:0
            
      });
      document.getElementById("msg").value="";
}
