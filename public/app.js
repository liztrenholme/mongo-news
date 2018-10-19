// Grab the articles as a json
// $.getJSON("/articles", function(data) {
//   // For each one
//   for (var i = 0; i < data.length; i++) {
//     $("#articles").append("<h4>" + data[i].title + "</h4><br /> <p><a href='" + data[i].link + "'>read article</a> | <a href='#' data-toggle='modal' data-target='#notesModal' data-id='" + data[i]._id + "'>notes</a></p>");
//   //$("#notesModalTitle").append(data[i].title);
//   }

// });

// HANDLEBARS WILL HANDLE THIS PART 
$(document).on("click", "#notesModal", function(data) {
  // Empty the notes from the note section
  $("#notes").empty();
  var thisId = $(this).attr("data-id");

  // ajax call for the article
  $.ajax({
    method: "GET",
    url: "/articles/" + thisId
  })
    // With that done, add the note information to the page
    .then(function(data) {
      console.log(data);
      // The title of the article
      $("#notes").append("<h2>" + data.title + "</h2>");
      // A textarea to add a new note body
      // $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
      // A button to submit a new note, with the id of the article saved to it
      //$("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

      // If there's a note in the article
      // if (data.note) {
        // Place the body of the note in the body textarea
      //   $("#bodyinput").val(data.note.body);
      // }
    });
});

// HANDLEBARS WILL HANDLE THIS PART TOO
// When you click the savenote button
// $(document).on("click", "#savenote", function() {
//   // Grab the id associated with the article from the submit button
//   var thisId = $(this).attr("data-id");

//   // Run a POST request to change the note, using what's entered in the inputs
//   $.ajax({
//     method: "POST",
//     url: "/articles/" + thisId,
//     data: {
//       // Value taken from note textarea
//       body: $("#bodyinput").val()
//     }
//   })
//     // With that done
//     .then(function(data) {
//       // Log the response
//       console.log(data);
//       // Empty the notes section
//       $("#notes").empty();
//     });

//   // Also, remove the values entered in the input and textarea for note entry
//   $("#bodyinput").val("");
// });
