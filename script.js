var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

var saveBtn = document.getElementById(".btn");

function timeColor() {
    var hour = moment().col();

    document.getElementById(".row").each(function() {
        var currHour = parseInt($(this). attr("id"));

        if (currHour > hour) {
            document.getElementById(this).addClass("future");
        } else if (currHour > hour) {
            document.getElementById(this).addClass("present");
        } else {
            document.getElementById(this).addClass("past");
        }
    })
};


saveBtn.on("click", function() {

    var time = document.getElementById(this).siblings(".hour").text();
    var plan = document.getElementById(this).siblings(".description").val();

    localStorage.setItem(time, plan);

})

function saveEvent() {
    document.getElementById(".row").each(function() {
        var currHour = document.getElementById(this).text();
        var currPlan = localStorage.getItem(currHour);

        if (currPlan !== null) {
            document.getElementById(this).siblings(".description").val(currPlan);
        }
    });
}

timeColor();
saveEvent();