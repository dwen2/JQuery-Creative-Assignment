 $("#btn").click(function(e) {
  var myurl = "https://dog.ceo/api/breeds/image/random";
  console.log(myurl);
  $.ajax({
   type: 'GET',
   url: myurl,
   crossDomain: true,
   dataType: "json",
   success: function(parsed_json) {
    console.log(parsed_json);
    var image = parsed_json['message'];
    console.log(image);

    var img = document.createElement("img");
    img.src = image;
    console.log(img.src);

    $("#dogs").html(img);
   }
  });
 });
 