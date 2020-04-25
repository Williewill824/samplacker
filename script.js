$(document).ready(function(){

var input9am = $("#text9am");
var input10am = $("#text10am");
var input11am = $("#text11am");
var input12pm = $("#text12pm");
var input1pm = $("#text1pm");
var input2pm = $("#text2pm");
var input3pm = $("#text3pm");
var input4pm = $("#text4pm");
var input5pm = $("#text5pm");
var currentHour = parseInt(moment().format('HH'));

function updateTime(){
  var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(date);
}
setInterval(updateTime,1000);

$("textarea").each(function(){
    var now = parseInt($(this).attr("name"));
    if (now < currentHour){
        $(this).addClass("past");
    } if (now > currentHour){
        $(this).addClass("future");
    } if(now === currentHour){
        $(this).addClass("present");
    }
})

 $("button").on("click", function(){
     localStorage.setItem("9am",  (input9am.val()));
     localStorage.setItem("10am", (input10am.val()));
     localStorage.setItem("11am", (input11am.val()));
     localStorage.setItem("12pm", (input12pm.val()));
     localStorage.setItem("1pm", (input1pm.val()));
     localStorage.setItem("2pm", (input2pm.val()));
     localStorage.setItem("3pm", (input3pm.val()));
     localStorage.setItem("4pm", (input4pm.val()));
     localStorage.setItem("5pm", (input5pm.val()));
 });

$("#text9am").append(localStorage.getItem("9am"));
$("#text10am").append(localStorage.getItem("10am"));
$("#text11am").append(localStorage.getItem("11am"));
$("#text12pm").append(localStorage.getItem("12pm"));
$("#text1pm").append(localStorage.getItem("1pm"));
$("#text2pm").append(localStorage.getItem("2pm"));
$("#text3pm").append(localStorage.getItem("3pm"));
$("#text4pm").append(localStorage.getItem("4pm"));
$("#text5pm").append(localStorage.getItem("5pm"));














})