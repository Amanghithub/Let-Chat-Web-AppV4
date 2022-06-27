
  const firebaseConfig = {
    apiKey: "AIzaSyBRwVg4mkgBa_yEvwh67qOOMTN39dqH1es",
    authDomain: "kwitter-website-8860d.firebaseapp.com",
    databaseURL: "https://kwitter-website-8860d-default-rtdb.firebaseio.com",
    projectId: "kwitter-website-8860d",
    storageBucket: "kwitter-website-8860d.appspot.com",
    messagingSenderId: "635017230368",
    appId: "1:635017230368:web:c7efa0fb6b948fcfdd6445"
  };
  firebase.initializeApp(firebaseConfig);

function addUser(){
  user_name=document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
        purpose:"adding User"
  });
  localStorage.setItem("user_name",user_name);
  window.location="kwitter_room.html";
}