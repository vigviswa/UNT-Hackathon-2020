var database = firebase.database();

var bmiRef = firebase.database().ref("bmi");
bmiRef.on("value", function(snapshot) {
  var label = snapshot.val().label;
  var lastUpdated = snapshot.val().lastUpdated;
  document.getElementById("bmi").innerHTML = label;
  document.getElementById("lastUpdated").innerHTML = lastUpdated;
});
