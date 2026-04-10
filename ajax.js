$(document).ready(function () {

    $("#shoutbutton").click(function () {
        var msg = $("#msg").val().trim();

        if (msg === "") {
            alert("Please enter a message first.");
            return;
        }

        $.ajax({
            type: "GET",
            url: "reply.php",
            data: { msg: msg },
            success: function (rsp) {
                $(".placeholder-text").remove();

                $("#data").prepend(
                    "<div class='response-item'>" + rsp + "</div>"
                );

                $("#msg").val("").focus();
            },
            error: function () {
                alert("Error: Could not connect to server. Make sure XAMPP Apache is running.");
            }
        });
    });

    $("#clearbutton").click(function () {
        $("#data").html("<p class='placeholder-text'>Response will appear here.</p>");
    });

    $("#msg").keypress(function (e) {
        if (e.which === 13) {
            $("#shoutbutton").click();
        }
    });

});