window.addEventListener('keydown', event => {
    const visual = document.querySelector(".visual");
    const colors = [
      "#60d394",
      "#d36060",
      "#c060d3",
      "#d3d160",
      "#606bd3",
      "#60c2d3"
    ];
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
     
    if(!audio) return;
   
    audio.play()




  });
  