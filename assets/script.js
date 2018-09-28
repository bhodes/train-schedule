
//current time clock
function currentTime() {
    var current = moment().format('LT');
    $("#clock").html(current);
    setTimeout(currentTime, 1000);
};
currentTime()

$("#submitBtn").on("click", function () {
    //dont refresh page
    event.preventDefault();
    //pull input from form
    var formTrainName = $("#trainNameInput").val().trim();
    var formDest = $("#destinationInput").val().trim();
    var formFreq = $("#frequencyInput").val().trim();
    var formArrival = moment($("#firstArrivalInput").val().trim(), "hh:mm").subtract(10, "years").format("X");;



    console.log(formTrainName);
    console.log(formDest);
    console.log(formFreq);
    console.log(formArrival);

    //clear input boxes
    $('#trainNameInput').val("")
    $('#destinationInput').val("")
    $('#frequencyInput').val("")
    $('#firstArrivalInput').val("")

    var timeRemainder = moment().diff(moment.unix(formArrival), "minutes") % formFreq;
    var minutes = formFreq - timeRemainder;

    var nextTrainArrival = moment().add(minutes, "m").format("hh:mm A");

    console.log(minutes);
    console.log(nextTrainArrival);
    console.log(moment().format("hh:mm A"));
    console.log(moment().format("X"));


    
    //append new row to table
    $("#trainTable").append(
        "<tr><th> " +
        formTrainName +
        " </th><th> " +
        formDest +
        " </th><th> " +
        formFreq +
        " </th><th> " +
        nextTrainArrival +
        "</th><th>  " +
        minutes +
        "</th></tr>"
    );
    //firebase database
    //console says firebase.database is not a function
    var firebaseRef = firebase.database().ref();
    firebaseRef.child("name").set(formTrainName);
    firebaseRef.child("destinaion").set(formDest);
    firebaseRef.child("frequency").set(formFreq);
    firebaseRef.child("arrival").set(formArrival);

})
