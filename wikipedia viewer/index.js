$(document).ready(function() {

  $('#search').keypress(function(e) {
    if (e.which == 10 || e.which == 13) {
      e.preventDefault();
      var value = $('#search').val();
      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + value + "&callback=?"

      $.getJSON(url, function(data) {
        console.log(JSON.stringify(data[3][2]));
        $('#results').empty();

        for (var i = 0; i < data[1].length; i++) {
          var texts = $("<div class='text'></div>").appendTo('#results');
          var id = "link" + i
          $("<a id=" + id + "></a>").text(data[1][i]).appendTo(texts);
          $("#" + id).attr("href", data[3][i]);
          $("#" + id).attr("target", "_blank");
          $("<p></p>").text(data[2][i]).appendTo(texts);
          $('#results').append(texts);
        }

      });
    };
  });
});