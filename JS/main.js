/**
 * Created by ck on 10/20/2016.
 */
$(document).ready(function()
{

// Starts the timer when the button is pressed

    $('#start').on('click',function()
    {
        //The number inputed by the user is a whole number.
        var num = $("#number-input").val();

        if((parseFloat(num) === parseInt(num)))
        {
            console.log('The input number');
            console.log(num);
            countUp(num); //Function for count up incrementally
        }

        else
        {
            //The number inputed by the user is not a whole number.
            //Display the error alert!

            alert("Opps!! You entered the wrong number. Please enter whole number.!!");
        }
    });


// Restart Button.

    $('#restart').on('click', function ()
    {
        var num = $("#number-input").val();
        document.getElementById('displayed-number').innerHTML = "0"; // start from 0
        countUp(num);
    });

// Reset Button.
    $('#reset').on('click',function ()
    {
        removeIntervals();// Will Remove all old Intervals
        document.getElementById('number-input').value = "";
        document.getElementById('displayed-number').innerHTML = "0";
        $('#fingers-block').css("color", "#555");
        $('#toes-block').css("color","#555");
        $('#toes-block').css("background-color", "transparent");
        $('#fingers-block').css("background-color", "transparent");
    });

    
}

