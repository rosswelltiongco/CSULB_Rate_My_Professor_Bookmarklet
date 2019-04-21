var url = "http://www.ratemyprofessors.com/ShowRatings.jsp?tid=2221885"
var url = "http://www.ratemyprofessors.com/ShowRatings.jsp?tid=1899544"


$.ajax({ url: url, success: function(data) { console.log($(data).find("div .grade").html()); } });
