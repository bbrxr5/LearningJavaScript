$(window).load(function(){
	$("#docMenu").hide();
	$("#lessons").click(setLessonNav);
	$("#docs").click(setDocNav);
	$("#fade").click(fade)
});
function setLesson(e){
	var lesson = $("#lessonSelect").val();
	$("#content").html("Lesson "+ lesson);
}
function setLessonNav(){
	$("#docMenu").hide();
	$("span").removeClass("active");
	$("#lessons").addClass("active");
	var select = $('<select id="lessonSelect"></select>');
	select.change(setLesson);
	for(var x=1; x<41; x++){
		var option = $("<option></option>");
		option.val(x);
		option.html("Lessons "+x);
		select.append(option);
	}
	$("#content").html("");
	$("#content").append(select).append("<br><p></p>");
	setLesson(5);
}
function setDocNav(){
	$("#docMenu").show();
	$("span").removeClass("active");
	$("#docs").addClass("active");
}
function setDoc(doc){
	var frame = $("<iframe></iframe>");
	frame.attr("src", doc);
	$("#content").html(frame);
}
function fade(){
	var opacity = $("#content").css("opacity");
	if (opacity < 1){$("#content").css("opacity", 1);}
	else { $("#content").css("opacity", .5); }
}