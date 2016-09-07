var quotes = ["You miss 100 percent of the shots you don't take-Wayne Gretzsky","Math is fun","how are you? Today is a fun day."];

var authors = ["Michael Scott","Vadali Soumitri","Leonhard Euler"]

var colors = ['#667799','#7a9460','#dd9977']

var count = 0;
var phraseQuote = '';
var phraseAuthor = ''; 

function changeQuote() {
  $(".quotes").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500); 
    $('#quote').text(quotes[count]);        $('#author').text(authors[count]);
    $('#quote').css("color",colors[count]);
    $('#author').css("color",colors[count]);
    $('body').css("background-color",colors[count]);
    phraseQuote = quotes[count];
    phraseAuthor = authors[count];
    count = count + 1;
    if (count > 2) count = 0;  
        });  
}

function tweetIt() {
 document.getElementById('tweeter').setAttribute('href',"https://twitter.com/intent/tweet?text="+phraseQuote+'-'+phraseAuthor+';hashtags=RandomQuotes;')
}