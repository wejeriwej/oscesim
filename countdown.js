const startingMinutes = 8;
  let time = startingMinutes * 60;

  const countdownEl = document.getElementById('countdown');
  setInterval(updateCountdown, 1000);
  function updateCountdown(){
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;

      seconds = seconds < 10 ? '0' + seconds : seconds;

      countdownEl.innerHTML = "Timer: " + `${minutes}:${seconds}`; 
      time--;
      if (time<0){
        
        countdownEl.innerHTML = "END OF TIMER!!!";
        countdownEl.style.textDecoration = "underline";

      }
  }
