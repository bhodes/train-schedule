// Initialize Firebase
var config = {
    apiKey: "AIzaSyD6rRl-QHqsje9VfL4MolPMh6Knu8h9rgY",
    authDomain: "train-schedule-cf540.firebaseapp.com",
    databaseURL: "https://train-schedule-cf540.firebaseio.com",
    projectId: "train-schedule-cf540",
    storageBucket: "",
    messagingSenderId: "892686246943"
};
firebase.initializeApp(config);

var database = firebase.database();


$("#submitBtn").on("click", function(){
    var trainName = $("#trainNameInput").val().trim()
    var dest = $("#destinationInput").val().trim()
    var freq = $("#frequencyInput").val().trim()
    var arrival = moment($("#firstArrivalInput").val().trim(), "HH:mm").subtract(10, "years").format("X");;

    var newTrain = {
        trainName: trainName,
        destination: dest,
        frequency: freq,
        firstArrival: arrival
    }
    
})