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
            countUp(num);
        }

        else
        {
            //The number inputed by the user is not a whole number.
            //Display the error alert!

            alert("Opps!! You entered the wrong number. Please enter whole number.!!");
        }
    });

}