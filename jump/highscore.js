// Your web app's Firebase configuration

let scoreList = document.querySelector(".highscore-list");

var firebaseConfig = {
  apiKey: "AIzaSyD1gorxFNL8C3rACNPJ5uuNUQzaFb0mcXM",
  authDomain: "covideo-game.firebaseapp.com",
  databaseURL: "https://covideo-game.firebaseio.com",
  projectId: "covideo-game",
  storageBucket: "covideo-game.appspot.com",
  messagingSenderId: "95275807264",
  appId: "1:95275807264:web:fc43b0c26d63f963dd4245",
  measurementId: "G-8MJFQNH0Y9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

function addScoreToDatabase(name, score) {
  console.log("name: " + name + " score:" + score);
  let ref = database.ref("scores");
  let data = {
    Name: name,
    Score: score,
  };
  ref.push(data);
}

let ref = database.ref("scores");
ref.on("value", gotData, errData);

function gotData(data) {
  let scores = data.val();

  let newScore = Object.values(scores);

  let sortedHighScore = newScore.sort(function (a, b) {
    return parseFloat(b.Score) - parseFloat(a.Score);
  });

  for (i = 0; i < 9; i++) {
    let listItem = document.createElement("li");
    listItem.innerText =
      sortedHighScore[i].Name + ": " + sortedHighScore[i].Score;
    scoreList.appendChild(listItem);
  }
}

function errData(err) {
  console.log("ERROR");
  console.log(err);
}
