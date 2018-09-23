$(document).ready(function(){

    $("#fuck").click(function(){
		alert('hi');
    });
    
    $("#submit_button").click(function(){
        var ruser_name = $("#ruser_name").val();
        var register_email = $("#register_email").val();
        var register_password = $("#register_password").val();
        $.ajax({
            url:"http://127.0.0.1:8000/api/regis",
            type:"POST",
            data:{
                ruser_name:ruser_name,
                register_email:register_email,
                register_password:register_password,
            },
            success:function(data){
                $("#ruser_name_error").html('');
                $("#register_email_error").html('');
                $("register_password_error").html('');

                $("success_message").html('This is message by back end . It will change');

            },
            error:function(data){
                $("#ruser_name_error").html('');
                $("#register_email_error").html('');
                $("register_password_error").html('');

                var error = data.responseJSON;
                $.each(error, function(key, value){
                    if(key=='ruser_name'){
                        $("#ruser_name_error").html(value);
                    }
                    if(key=='register_email'){
                        $("#register_email_error").html(value);
                    }
                    if(key=='register_password'){
                        $("#register_password_error").html(value);
                    }
                });
 
            }
        });
        
    });
});