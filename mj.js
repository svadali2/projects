var slideShow = new Array();

slideShow[0] = new Image();
slideShow[1] = new Image();
slideShow[2] = new Image();
slideShow[0].src = "https://s-media-cache-ak0.pinimg.com/736x/d8/b4/11/d8b411cd99dc5bcc9a43c87f6572c387.jpg";
slideShow[1].src = "http://1.bp.blogspot.com/-muOF-nncT4I/UQK4qxf7dSI/AAAAAAAAHsY/5_Hdw1Md87s/s1600/michael+jackson+-+Billie+jean+and+michael+jackson+bad+images+blog+jegan's+blog-worldwidemichaeljacksonfans.blogspot.com-jegan-blog-jegan-selva-jegan+(10).jpg";
slideShow[2].src = "https://reflectionsonthedance.files.wordpress.com/2011/07/stagepose.jpg";

var step = 0;

function slideIt() {
  document.getElementById('img_1').src = slideShow[step].src
  if (step < 2)
    step++;
    else
      step = 0;
      //call function "slideit()" every 2.5 seconds
  setTimeout(slideIt, 2500)
}
slideIt();
