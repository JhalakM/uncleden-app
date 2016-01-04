angular.module('starter.request', [])

.controller('requestController', function($scope, $http, $state,  $ionicLoading, $timeout, $ionicPlatform) {
    $ionicPlatform.ready(function() {

    });
	$scope.example = {
	    value: new Date(16,30)
	 };
	$(document).on('click', '.upload', function(event){
		if(event.handled !== true)
		{
			 img_id = this.id;
			 var optionsaction = {
				'androidTheme': window.plugins.actionsheet.ANDROID_THEMES.THEME_HOLO_LIGHT, // default is THEME_TRADITIONAL
				'title': APP_TITLE,
				'buttonLabels': ['Take Photo', 'Existing Photo'],
				'androidEnableCancelButton' : true, // default false
				'winphoneEnableCancelButton' : true, // default false
				'addCancelButtonWithLabel': 'Cancel',
				'position': [20, 40] // for iPad pass in the [x, y] position of the popover
			};

			window.plugins.actionsheet.show(optionsaction, actionSheetCallback);
			event.handled = true;
		}
		return false;

	});

	$scope.request_form = function(){

		if($("#full-name").val() == ""){
			callAlert('Please enter full name.', APP_TITLE);
            return false;
		}else{
			validateUsername($("#full-name").val());
		}

		if($("#contact-no").val() == ""){
			callAlert('Please enter contact no.', APP_TITLE);
			return false;
		}else{
			validatePhone($("#contact-no").val());
		}

		if($("#service-type").val() == ""){
			callAlert('Please select at least one service type.', APP_TITLE);
			return false;
		}

		if($("#datepicker").val() == ""){
			callAlert('Please select your preferred date.', APP_TITLE);
			return false;
		}

		if($("#service-time").val() == ""){
			callAlert('Please select your preferred time.', APP_TITLE);
			return false;
		}
		 if($('input[type="checkbox"]:checked').length == 0){
			callAlert('Please checked checkbox.', APP_TITLE);
			return false;
		}
		 $ionicLoading.show();
		var formData = JSON.stringify($('#frm_book_request').serialize());

		var post_data = {
			  full_name:$("#full-name").val(),
			  contact_no:$("#contact-no").val(),
			  email_id:$("#email-id").val(),
			  service_type:$("#service-type").val(),
			  service_date:$("#datepicker").val(),
			  service_time:$("#service-time").val(),
			  area:$("#area").val(),
			  imageData:$("#hid_uploaded_img_0").val(),
		}

		var url = $('#frm_book_request').attr("action") ;
		var jsonPost = JSON.stringify(post_data);
		if(jsonPost != ""){
            		$.ajax({
            		   type: "POST",
            		   url: url,
            		   data:post_data,
            		   async: false,
            		   success: function(response){
            				$ionicLoading.hide();
            		   		if(response  == 1){
            		   			callAlert('Your Request sent successfully.', APP_TITLE);
            		   		}else{
            		   			callAlert('There are some problem, please try again..!!.', APP_TITLE);
            		   		}
						},
						error: function( jqXhr, textStatus, errorThrown ){
							callAlert('Network/Service not available. Please check internet connection.', APP_TITLE);
						}
					}).done(function() {});
		}
	}

	$scope.datePickerStartDate = function(){
    		var options = {
    			date: new Date(),
    			mode: 'date'
    		};
    		datePicker.show(options, onDateSuccess, onDateError);
    	}

});


function validateUsername(uservalue){
	var filter = /^[a-zA-Z ]*$/;
   	if(filter.test(uservalue)) {
     	 return true;
 	}else{
	   callAlert('Please enter valid name.', APP_TITLE);
		return false;
	}
}

function validatePhone(phoneNumber){
   var phoneNumberPattern = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
   if(phoneNumberPattern.test(phoneNumber)){
   		return true;
   }else{
   		callAlert('Please enter valid contact no.', APP_TITLE);
        return false;
   }
}

function onDateSuccess(date) {
   $("#datepicker").val( convert(date.toString()));
}

function onDateError(error) { /* android only */ }

function convert(str) {
    var mnths = {
        Jan:"01", Feb:"02", Mar:"03", Apr:"04", May:"05", Jun:"06",
        Jul:"07", Aug:"08", Sep:"09", Oct:"10", Nov:"11", Dec:"12"
    },
    date = str.split(" ");

    return [ date[3], mnths[date[1]], date[2] ].join("-");
}

function actionSheetCallback(buttonIndex){
	if(buttonIndex == 1){
		navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
			destinationType: Camera.DestinationType.DATA_URL,
			targetWidth:200
		});
	}
	if(buttonIndex == 2){
		navigator.camera.getPicture(onSuccess, onFail,{ quality: 50,
			destinationType: navigator.camera.DestinationType.DATA_URL,
			sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
			targetWidth:200
		});
	}
}

function onSuccess(imageURI) {
	id = img_id.split("_")[1];
	$("#uploaded_img_"+id).attr("src","data:image/jpeg;base64,"+imageURI);
	$("#hid_uploaded_img_"+id).val("data:image/jpeg;base64,"+imageURI);
}

function onFail(message) {}
