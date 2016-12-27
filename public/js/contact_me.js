$(document).ready(function() {
    $("#sendMes").hide();
    $("#submitButton").click(function() {


        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var message = $("#message").val();

        var contant = {
            "name": name,
            "email": email,
            "phone": phone,
            "message": message
        };
        if (name == "") {
            $("#name").focus();
        } else if (email == "") {
            $("#email").focus();
        } else if (phone == "") {
            $("#phone").focus();
        } else if (message == "") {
            $("#message").focus();
        } else {

            $("#sendMes").show();
            $("#submitButton").hide();

            $.ajax({
                    url: '/',
                    type: 'POST',
                    dataType: 'json',
                    //data: $("#email").val(),
                    data: JSON.stringify(contant),
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    success: function(data, textStatus, jQxhr) {

                        // alert("success:" + data);
                        $("#sendMes").hide();
                        $("#submitButton").show();


                        if (data == "Message has been send successfully") {

                            $("#submitButton").attr("disabled", false);
                            $('#success').html("<div class='alert alert-success'>");
                            $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                                .append("</button>");
                            $('#success > .alert-success')
                                .append("<strong>Your message has been sent. </strong>");
                            $('#success > .alert-success')
                                .append('</div>');

                            //clear all fields
                            $('#contactForm').trigger("reset");

                        } else {

                            $('#success').html("<div class='alert alert-danger'>");
                            $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                                .append("</button>");
                            $('#success > .alert-danger').append("<strong>Sorry, it seems your mail is not valid. Please try again later!");
                            $('#success > .alert-danger').append('</div>');
                            //clear all fields
                            // $('#contactForm').trigger("reset");

                        }






                    },
                    error: function(jqXhr, textStatus, errorThrown) {
                        $('#success').html("<div class='alert alert-danger'>");
                        $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success > .alert-danger').append("<strong>Sorry, it seems that my mail server is not responding. Please try again later!");
                        $('#success > .alert-danger').append('</div>');
                        //clear all fields
                        // $('#contactForm').trigger("reset");
                    }
                })
                .done(function(reuslt) {


                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });
        }

    });


});
