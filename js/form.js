$(document).ready(function () {
    $("#myForm").submit(function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Capture the data
      var name = $("#name").val();
      var email = $("#email").val();
      var number = $("#number").val();
      var textarea = $("#textarea").val();

      console.log("Name: " + name);
      console.log("Email: " + email);
      console.log("Number: "+ number);
      console.log("Textarea:" + textarea);
    });
  });