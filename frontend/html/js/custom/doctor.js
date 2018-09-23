var id = 0;
var doctor_id = 0;
var selected_doctor= 0;

// Create Doctor JavaScript 
$("#submit_button").click(function(){
	var name = $("#name").val();
	var desc = $("#desc").val();
	var address = $("#address").val();
	var email = $("#email_address").val();
		console.log(email);	

	$.ajax({
		url:"http://127.0.0.1:8000/api/savedoctors",
		type:"POST",
		data:{
			name:name,
			desc:desc,
			address:address,
			email:email
		},
		success:function(data){
			
			$("#name_error").html('');
			$("#decs_error").html('');
			$("#address_error").html('');
			$("#email_error").html('');

			$("#success_message").html('This is success_message by back end.It will change');
		},
		error:function(data){
			$("#name_error").html('');
			$("#decs_error").html('');
			$("#address_error").html('');
			$("#email_error").html('');
			$("#success_message").html('');

			var error = data.responseJSON;
			$.each(error,function(key, value){
				if(key = 'name'){
					$("name_error").html(value);
				}
				if(key = 'desc'){
					$("desc_error").html(value);
				}
				if(key = 'address'){
					$("address_error").html(value);
				}
				if(key = 'email'){
					$("email_error").html(value);
				}
			});	
		}
	})
});
	
//get data from database function
$(document).ready(function () {
	$.ajax({
		type: "get",
		url: "http://127.0.0.1:8000/api/getdoctors",
		// Accept: "application/json",
		success: function (resultData) {
			setDataTable(resultData);
		},
		error: function (error) {
			alert(error.responseJSON.error);
		}
	});

});

//start: setDataTable function ***********************************************************************************************************************
function setDataTable(array) {
    var newArray = [];
    newArray = array.map(objToArray);

    $('#doctor_data').DataTable({
        destroy: true,
		data: newArray,
		order:[[6,"asc"]],
        columns: [
			{
				title: "#",render:addId
			}  ,
            {
                title: "Doctor Name"
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
//end: setDataTable function **************************************************************************************************************************




//set item and index function------------------------------------------------------------------------
function objToArray(item, index) {
	
	var temp = [item.id, 
				item.name, 
				item.desc, 
				item.email, 
				item.p_number, 
				item.address];
		return temp;
}

// DataTable Edit and Delete Button------------------------------------------------------------------
function addButtons(data) {
	return `<button type="button"  id="${doctor_id}" onclick="edit(this.data)"  data-toggle="tooltip" title="Edit" class="btn label-info update mybtn"><i class="fa fa-pencil"></i></button> &nbsp; <button type="button" data-toggle="tooltip" title="Delete" id="${doctor_id}" onclick="deleteD(this)" class="btn label-danger delete mybtn"><i class="fa fa-times"></i></button>`;
}

// Add Number for DataTable--------------------------------------------------------------------------
function addId(data) {
	doctor_id = data;
	id++;
	return `<label>${id}</label>`;
	
}

// Edit function In DataTable-------------------------------------------------------------------------
function edit(object) {
	selected_doctor = object.id;
	window.location.href= "modify-doctor.html"
}

// Update Doctor JavaScript---------------------------------------------------------------------------

// function edit(object) {
// 	console.log(object);
// 		$.ajax({
// 		type: "get",
// 		url: "http://127.0.0.1:8000/api/getdoctors/{id}",
// 		// Accept: "application/json",
// 		success: function (resultData) {
// 			setDataTable(resultData);
// 		},
// 		error: function (error) {
// 			alert(error.responseJSON.error);
// 		}
// 	});
// 	// Edit function In DataTable here

// }

// Update Doctor JavaScript----------------------------------------------------------------------------


// Delete function In DataTable------------------------------------------------------------------------
function deleteD(object) {
	
	selected_doctor = object.id;
	window.location.href= "modify-doctor.html"
}