var APP_TITLE = "UncleDen";
var sheight=$(window).height();



function owlCarousel_script(){
	//alert(selector);

 	$("#owl-demo").owlCarousel({
	  navigation : true,
	  slideSpeed : 300,
	  paginationSpeed : 400,
	  singleItem : true,
	  responsive : {
              480 : { items : 4  },
              768 : { items : 6  },
              1024 : { items : 8
              }
          },
  });


}


var LBL_OK = "Ok";
/* message alert */
function callAlert(msg, title){
	navigator.notification.alert( msg, alertDismissed, title, LBL_OK);
}
function alertDismissed() {}
//set window height
function window_resize(){
	$('.loding-bg, .splash-bg, .set-height').height(sheight);
	$('.loding').css({'margin-top':sheight/2});
}

//set splash screen height
function splash_screen(){

	if(sheight < 795){

		$(".splash-character").css('height',sheight - 300);
		//$(".blue-part-bg").css('height',sheight - 230);
		$(".splash-character img").fadeIn(500);

	}
}

function formatAMPM() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
function accordion(){
	 $(".collapse-div:not(:first)").hide();
		$(".main-panel .accordion-toggle-div").each(function(){
		   $(this).click(function(){
			 var target = $(this).attr("data-target");
			  $(".collapse-div").hide();
			  $(target).fadeIn(2000);
			  $(".accordion-toggle-div").find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
			  $(target).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
		});
	});
}