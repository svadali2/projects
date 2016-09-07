var list = [1,2,3,4,5,6,7,8];
var wait = 8;
function getTwitch(item) {
  var twitcher = $('#'+item).html();
var url = 'https://api.twitch.tv/kraken/streams/'+twitcher+'?callback=?';
url = url.replace(/(\r\n|\n|\r)/gm,"");
url = url.replace(/ /g, '');
//console.log(i+'_status');
var id = item+'_status';
var obj = document.getElementById(id);
$.getJSON(url,function(data){
  if (JSON.stringify(data.stream) != 'null'){
    obj.innerHTML = JSON.stringify(data.stream.game)+"-"+JSON.stringify(data.stream.channel.status);
  }
  moveDivs();
})

}

function moveDivs() {
wait = wait - 1;
if (wait == 0){
var temp = 0;
for (var i=1;i<=8;i++) {
  if ($("#"+i+"_status").html() == "Offline") {
    temp = i; //get the index of first time someone is offline
    break;
  }
}
    for (var j=temp+1;j<=8;j++){      
      if ($("#"+j+"_status").html() != "Offline") {
        var div1 = $("#"+temp+"_status").html();
        var div2 = $("#"+j+"_status").html();
        var div1_twitch = $("#"+temp).html();
        var div2_twitch = $("#"+j).html();
        $("#"+temp+"_status").html(""+div2);
        $("#"+j+"_status").html(""+div1);
        $("#"+temp).html(""+div2_twitch);
        $("#"+j).html(""+div1_twitch);
        temp = temp + 1;
      }      
    }
  }
}

list.forEach(getTwitch);