var url = "http://www.ratemyprofessors.com/ShowRatings.jsp?tid=2221885"
var search = '<div class="grade" title="">3.9</div>';

$.ajax(
  { url: url, success:
    function(data){
      console.log(data);
    }
  }
);
