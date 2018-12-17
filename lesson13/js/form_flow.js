var months = ["Jan", "Fed", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var pArr = ["AB", "BC", "SK", "MB", "ON", "QC", "NB", "NL", "PE", "NS", "NT", "YT", "NU"]
function buildSelects(){
	for(var i in pArr){$("#province", "#provinceB").append($('<option>'+pArr[i]+'</option>"'));}
	for(var i in months){$("#expiresM").append($('<option>'+months[i]+'</option>"'));}
	for(var y=2015; y<2020;y++){$("#expiresY").append($('<option>'+y+'</option>"'));}
}
function updateAddr(){
	var cb = $("#cbSame");
	if(cb.prop("checked")){
		$("#nameB").val($("#name").val());
		$("#addrB").val($("#addr").val());
		$("#cityB").val($("#city").val());
		$("#provinceB").val($("#province").val());
		$("#postalB").val($("#postal").val());
		$("#addrB, #cityB, #provinceB, #postalB").prop("disabled", "disabled");
	} else{$("#addrB, #cityB, #provinceB, #postalB").prop("disabled", "");}
}
function updatePaymentType(){
	if(this.id == "ppal"){
		$("#ccInfo").hide();
		$("#ppalInfo").show();
		$("#ppEmail").focus();
	} else {
		$("#ppalInfo").hide();
		$("#ccInfo").show();
		$("cardNum").focus();
	}
}
$(document).ready(function(){
	$("ppInfo").hide();
	buildSelects();
	$("#cbsame").click(updateAddr);
	$("input:radio").click(updatePaymentType);
	$("form").submit(function(e){
		alert("Sorry. Not yet Implemented.");
		e.preventDefault();
	});
	$("#resetB").click(function(e){
		if(confirm("Are you sure?")){$("form").get(0).reset();}
	});
});