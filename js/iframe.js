window.addEventListener('message',function(event){
    var sectionId = event.data;
    var sections = document.querySelectorAll('.game');
    sections.forEach(function(game){
      if(game.id===sectionId){
        game.style.display="block";
      } else {
        game.style.display="none";
      }
    });
  });