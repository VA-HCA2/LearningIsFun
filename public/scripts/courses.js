// This Function show the student all available courses offered. 
//Author : Vanessa Arce

"use strict";

$(function () {
  let objs;
  let coursesObjs;

  $.getJSON("/api/categories", function (data) {
    objs = data;
    // Create my dropdown information from api/categories
    for (let i = 0; i < objs.length; i++) {
      let text = objs[i].Category;
      let value = objs[i].Value;
      let mydropDownOption = $("<option>", {
        value: value,
        text: text
      });
      mydropDownOption.appendTo("#categoriesddl");
    }
  }); // end of get JSON

  // Onchange function. This function shows the student the course info depeding on the dropdown slecttion.
  $("#categoriesddl").change(function () {
    // Clear my table header and table body when the student selects another course. 
    $("#coursesTable").empty();
    $("#coursesHeader").empty();
    $.getJSON("/api/courses/bycategory/" + $("#categoriesddl").val(), function (
      data
    ) {
      coursesObjs = data;

      //Table header starts
      let coursesHeader = $(
        "<tr><th>Title</th><th>Start Date</th><th>&nbsp;</th><th>&nbsp;</th></tr>");

      $("#coursesHeader").append(coursesHeader);
      // End of table header

      for (let i = 0; i < coursesObjs.length; i++) {

        //Table Body
        let str = "<tr><td>" + coursesObjs[i].Title + "</td><td>" + coursesObjs[i].StartDate + "</td><td>" +
          "<a href=details.html?CourseId=" + coursesObjs[i].CourseId + ">Details<a>" + "</td><td>"
          +"<a href=details.html?CourseId="+ coursesObjs[i].CourseId + ">Edit<a></td></tr>";

        $("#coursesTable").append(str);

      }//End of body table
    }); // end of get JSON
  }); //End of my onchange function

  $("#showAll").on("click", function () {
    // Clear my table header and table body when the student selects another course. 
    $("#coursesTable").empty();
    $("#coursesHeader").empty();
    $.getJSON("/api/courses", function (
      data
    ) {
      coursesObjs = data;

      //Table header starts
      let coursesHeader = $(
        "<tr><th>Title</th><th>Start Date</th><th>&nbsp;</th></tr>");

      $("#coursesHeader").append(coursesHeader);
      // End of table header

      for (let i = 0; i < coursesObjs.length; i++) {

        //Table Body
        let str = "<tr><td>" + coursesObjs[i].Title + "</td><td>" + coursesObjs[i].StartDate + "</td><td>" +
          "<a href=details.html?CourseId=" + coursesObjs[i].CourseId + ">Details<a>" + "</td></tr>";

        $("#coursesTable").append(str);

      }//End of body table
    }); // end of get JSON

  });

}); // end of ready fuction
