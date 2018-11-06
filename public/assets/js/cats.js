//**FRONT END */
//This is where all the ajax calls will go
//jquery makes all the ajax calls
//all of this is being executed within the console's browser

//when user clickes on sleep button..
$(function () {
    $(".change-sleep").on("click", function (event) {
        var id = $(this).data("id");
        var newSleep = $(this).data("newsleep")

        var newSleepState = {
            sleepy: newSleep
        };

        //Send the Put request
        $.ajax("/api/cats/" + id, {
            type: "PUT",
            //sending it to the backend after it is requested
            data: newSleepState
        }).then(
            function () {
                console.log("changed sleep to", newSleep)
                //Reload the page to get the updated list
                location.reload();
            }
        )

    });


    //when the form is submitted..
    $(".create-form").on("submit", function (event) {
        //Make sure to always prevent devault
        event.preventDefault();

        var newCat = {
            name: $("#cat").val().trim(),
            sleepy: $("[name=sleepy]:checked").val().trim()
          };

        //Send the POST request
        $.ajax("/api/cats", {
            type: "POST",
            data: newCat
        }).then(
            function () {
                console.log("created new cat")
                //reload the page so it's updated with the new cat
                location.reload();
            }
        )

    })

    $(".delete-cat").on("click", function (event) {
        var id = $(this).date("id");

        //send the delete request
        $.ajax("/api/cats/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted cat", id);
                //reload the page
                location.reload();
            }
        )
    })

});
