var id = 0;
var center_id = 0;
var selected_center= 0;
    
// Create Center JavaScript 
$("#submit_button").click(function(){
    var center_name = $("#center_name").val();
    var description = $("#description").val();
    var email = $("#email").val();
    var pno =$("#pno").val();
    var address = $("#address").val();

    $.ajax({
        url:"http://127.0.0.1:8000/api/postecenters",
        type:"POST",
        data:{
            cen_name:cen_name,
            cen_description:cen_description,
            cen_email:cen_email,
            cen_pno:cen_pno,
            cen_address:cen_address
        },
        success:function(data){
            $("#center_name_error").html('');
            $("#description_error").html('');
            $("email_error").html('');
            $("pno_error").html('');
            $("address_error").html('');

            $("success_message").html('This is message by back end . It will change');

        },
        error:function(data){
            $("#center_name_error").html('');
            $("#description_error").html('');
            $("email_error").html('');
            $("pno_error").html('');
            $("address_error").html('');
            $("success_message").html('');

            var error = data.responseJSON;
            $.each(error, function(key, value){
                if(key=='center_name'){
                    $("#center_name_error").html(value);
                }
                if(key=='description'){
                    $("#description_error").html(value);
                }
                if(key=='email'){
                    $("#email_error").html(value);
                }
                if(key=='pno'){
                    $("#pno_error").html(value);
                }
                if(key=='address'){
                    $("#address_error").html(value);
                }
            });

        }
    });
    
});

//get data from database function------------------------------------------------------
$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:8000/api/getcenters",
        // Accept: "application/json",
        success: function (resultData) {
            setDataTable(resultData);
        },
        error: function (error) {
            alert(error.responseJSON.error);
        }
    });

});

//start: setDataTable function ***********************************************************************************************************************************************************************************************************
function setDataTable(array) {
    var newArray = [];
    newArray = array.map(objToArray);

    $('#center_data_table').DataTable({
        destroy: true,
        data: newArray,
        order:[[6,"asc"]],
        columns: [
            {
                title: "#",render:addId
            },
            {
                title: "Centre Name"
            },
            {
                title: "Description"
            },
            {
                title: "Email"
            },
            { 
                title: "Phone Number"
            },
            { 
                title: "Address"
            },
            { 
                title: "Modify &amp; Remove", render:addButtons
            }  
            
        ]
    });
}
//end: setDataTable function ************************************************************************************************************************************************************************************************************

//set item and index function------------------------------------------------------------------------
function objToArray(item, index) {
    
    var temp = [item.id, item.cen_name, item.cen_description, item.cen_email, item.cen_pno, item.cen_address];
    return temp;
}

// DataTable Edit and Delete Button------------------------------------------------------------------
function addButtons(data) {
    return `<button type="button"  id="${center_id}" onclick="edit(this)"  data-toggle="tooltip" title="Edit" class="btn label-info update mybtn"><i class="fa fa-pencil"></i></button> &nbsp; <button type="button" data-toggle="tooltip" title="Delete" id="${center_id}" onclick="deleteD(this)" class="btn label-danger delete mybtn"><i class="fa fa-times"></i></button>`;
}

// Add Number for DataTable--------------------------------------------------------------------------
function addId(data) {
    center_id = data;
    id++;
    return `<label>${id}</label>`;
}
