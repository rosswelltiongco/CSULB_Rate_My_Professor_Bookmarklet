javascript:(function(){
  var professorIds = {"Mimi Opkins":642896,"Richard Opland":1152932,"Mark Otten":1137454,"Nancy Ottinger":618167,"Shauna Otto":1402703,"Dorothy Ottolia":148511,"Marc Ouimet":2164694,"Yuan-Feng Ouyang":912154,"Cecily Overman":1704216,"Marcus Owl":1719171,"Cassady Ozimec":1889829,"Luiz Ozorio":1192781,"Courtney Ozovek":2218416,"Orlando Pabotoy":953428,"Douglas Pace":1771506,"Rodolfo Pacheco":1181646,"Maria Pacho":539065,"Francesca Paduano":337744,"Jessica Paek":2210670,"Jennifer Page":535486,"Jacqueline Pal":947415,"June Palacio":1261340,"Vince Palacios":434727,"Norma Palacios":919494,"Rita Palacios":1382877,"Sky Paley":2335499,"Christine Palmier":1087646,"Kim Palmore":520298,"Michael Palomarez":2147904,"Hanquing Pan":1378265,"Sophia Pandya":776397,"J Pandya":1262217,"Mihir Pandya":2063372,"Emanuela Panebianco":2271569,"Dan Pankratz":1672133,"Theodora Papachristou":885562,"Christopher  Papalas":1966672,"Lambe Papoulias":2033191,"Zoltan Papp":344180,"Catha Paquette":249250,"Donald Para":1379045,"Kriska Parda":1815582,"E Parentela":215490,"Caleb Jones":2221885, "Eric Hernandez":1899544};

  function replaceProfessor(professor){
    var id = professorIds[professor];
    var newProfessor = professor;
    var splitName = professor.split(" ");
    var firstName = splitName[0];
    var lastName = splitName[1];
    var newName = lastName + " " + firstName[0];
    function walkText(node) {
      if (node.nodeType == 1) {
        var re = new RegExp(professor,"g");
        node.innerHTML = node.innerHTML.replace(re,`<a href=http://www.ratemyprofessors.com/ShowRatings.jsp?tid=${id}>${newName}</a>`);
      }
      if (node.nodeType == 1 && node.nodeName != "SCRIPT") {
        for (var i = 0; i < node.childNodes.length; i++) {
          walkText(node.childNodes[i]);
        }
      }
    }
    walkText(document.body);
  }

  function isInWebpage(text){
    var content = document.body.textContent || document.body.innerText;
    var hasText = content.indexOf(text)!==-1;
    if(hasText){
      return 1;
    }
    else{
      return 0;
    }
  }

  for (var professor in professorIds){
    if (isInWebpage(professor)){
      replaceProfessor(professor);
    }
  }


  alert('Finished executing script');
})();
