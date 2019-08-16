"use strict";
$(function() {

    let urlParams = new URLSearchParams(location.search);
    let CourseId = urlParams.get("CourseId");
    $("#courseId").val(CourseId)

    $("#registerBtn").on("click", function() {
  
       $.post("/api/register",$("#newStudent").serialize(), function(data){
           window.location.href="details.html"
           console.log("hello")
       })
        return false; 

    }); // end of on click 
}); // end of ready fuction
