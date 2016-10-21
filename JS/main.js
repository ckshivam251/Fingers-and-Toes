/**
 * Created by ck on 10/20/2016.
 */
$(document).ready(function() {

// Starts the timer when the button is pressed

    $('#start').on('click', function () {
        //The number inputed by the user is a whole number.
        var num = $("#number-input").val();

        if ((parseFloat(num) === parseInt(num))) {
            console.log('The input number');
            console.log(num);
            countUp(num); //Function for count up incrementally
        }

        else {
            //The number inputed by the user is not a whole number.
            //Display the error alert!

            alert("Opps!! You entered the wrong number. Please enter whole number.!!");
        }
    });


// Restart Button.

    $('#restart').on('click', function () {
        var num = $("#number-input").val();
        document.getElementById('displayed-number').innerHTML = "0"; // start from 0
        countUp(num);
    });

// Reset Button.
    $('#reset').on('click', function () {
        removeIntervals();// Will Remove all old Intervals
        document.getElementById('number-input').value = "";
        document.getElementById('displayed-number').innerHTML = "0";
        $('#fingers-block').css("color", "#555");
        $('#toes-block').css("color", "#555");
        $('#toes-block').css("background-color", "transparent");
        $('#fingers-block').css("background-color", "transparent");
    });

//  RemoveInervals function

    function removeIntervals() {
        // It will remove all old intervals to restart
        for (var i = 1; i < 99999; i++) {
            clearInterval(i);
        }
    }

// Main function for counting and selecting Fingers & Toes

    function countUp(inputNumber)
    {
        removeIntervals();
        var startingNumer = 1;
        var displayedNumber = document.getElementById('displayed-number');
        var id = setInterval(function()
        {
            console.log(id);
            console.log('interval called');
            var x = startingNumer++;
            console.log(x);
            // If Condition for  x is lessthen Inputnumber
            if (x < inputNumber)
            {
                // will check if it is divisible  by 5 and 3.
                if (x % 5 === 0 && x % 3 === 0)
                {
                    $('#fingers-block').css("background-color", "#5f7db3");
                    $('#fingers-block').css("color","white");
                    $('#toes-block').css("background-color","#5f7db3");
                    $('#toes-block').css("color","white");
                    displayedNumber.innerHTML = x.toString();
                }
                // If condition for Divisible 5
                else if (x % 5 === 0)
                {
                    $('#fingers-block').css("background-color", "transparent");
                    $('#fingers-block').css("color", "#555");
                    $('#toes-block').css("background-color" ,"#5f7db3");
                    $('#toes-block').css("color","white");
                    displayedNumber.innerHTML = x.toString();
                }
                // If condition for Divisible 3
                else if (x % 3 === 0) {
                    $('#toes-block').css("background-color", "transparent");
                    $('#toes-block').css("color","#555");
                    $('#fingers-block').css("background-color", "#5f7db3");
                    $('#fingers-block').css("color","white");
                    displayedNumber.innerHTML = x.toString();
                }
                else {
                    $('#toes-block').css("color","#555");
                    $('#fingers-block').css("color","#555");
                    $('#toes-block').css("background-color", "transparent");
                    $('#fingers-block').css("background-color", "transparent");
                    displayedNumber.innerHTML = x.toString();
                }
            }

            