try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}
 
var noteTextarea = $('#note-textarea');
var instructions = $('#recording-instructions');
var notesList = $('ul#notes');
var whatforgottosay = $('#whatforgottosay');
 
var noteContent = '';

 
// Get all notes from previous sessions and display them.


//var notes = getAllNotes();
//renderNotes(notes);













function startFunction() { 
  timeLeft = slider.value * 60;//this and the next one is to start the timer
  timer = setInterval(updateTimeLeft, 1000);


  document.getElementById('myVideo').style.display = 'unset';
  document.getElementById("mp4_src").src = "WIN_20230328_13_59_37_Pro.mp4"; document.getElementById("myVideo").load();
  

  document.getElementById('myVideo').onended = function(e) {
    readOutLoud("Go");
  //readOutLoud("Enable the microphone and then start speaking, and once you've asked your question double press the ENTER key");
  recognition.start();  document.getElementById('listeninggif').style.display = 'unset'; document.getElementById('stop-consultation-btn').style.display = 'unset';
  

  }
  
  
  

  //document.getElementById('recording-instructions').style.visibility = 'visible';
  //document.getElementById('start-record-btn').style.visibility = 'visible';
  //document.getElementById('save-note-btn').style.visibility = 'visible';
  //document.getElementById('note-textarea').style.visibility = 'visible';
  document.getElementById('introstatement').style.display = 'none';
  document.getElementById('fullscreenvideobackground').style.display = 'none';
  document.body.style.backgroundColor = 'black';
  document.getElementById('logoduringconsultation').style.display = 'unset';
  document.getElementById('fakeVideo').style.display = 'none';
  document.getElementById('page-description').style.display = 'none';document.getElementById('casename').style.display = 'none';

  //document.getElementById('casename').style.visibility = 'hidden';document.getElementById('page-description').style.visibility = 'hidden';


  
  //document.getElementById('end-consultation-btn').style.visibility = 'visible';
  //document.getElementById('move-onto-questions-btn').style.visibility = 'visible';
  

  document.getElementById('countdown-value').style.display = 'unset';//these bottom 5 are for the countdown
  document.getElementById('countdown-updated').style.display = 'none';
  document.getElementById('slider-value').style.display = 'none';
  document.getElementById('slider').style.display = 'none';
  document.getElementById('pause-countdown').style.display = 'unset';
  

  

} 

function initialstopConsultation(){
  document.getElementById('move-onto-questions-btn').style.display = 'unset';//this button goes to the first question
  document.getElementById('end-consultation-btn').style.display = 'unset';

  recognition.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  document.getElementById('pause-countdown').style.display = 'none';
  document.getElementById('countdown-value').style.display = 'none';


 

}



//this one is to go straight to the 'review section'
function endConsultation(){
  document.getElementById('review-section').style.display = 'unset';
  document.getElementById('taking-history-section').style.display = 'none';
  document.getElementById('taking-history-section-part2').style.display = 'none';
  document.getElementById('move-onto-questions-btn').style.display = 'none';

  document.getElementById('myVideo').pause();
  recognition.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  recognition1.stop(); recognition_examinations.stop(); recognition_differentials.stop(); recognition_investigations.stop(); recognition_riskfactors.stop(); recognition_treatments.stop();

  document.getElementById('examinations').style.display = 'none';
  document.getElementById('summary').style.display = 'none';
  document.getElementById('differentials').style.display = 'none';
  document.getElementById('investigations').style.display = 'none';
  document.getElementById('riskfactors').style.display = 'none';
  document.getElementById('treatments').style.display = 'none';


  document.getElementById('fullscreenvideobackground').style.display = 'unset';
  document.body.style.backgroundColor = 'rgb(209, 228, 236)';
  document.getElementById('logoduringconsultation').style.display = 'none';
  document.getElementById('myVideo').style.display = 'none';





}


//this one moves it to the first question (i.e.examination)
function movetoQuestions(){
  document.getElementById('taking-history-section').style.display = 'none';
  document.getElementById('taking-history-section-part2').style.display = 'none';
  document.getElementById('examinations').style.display = 'unset';
  document.getElementById('end-consultation-btn').style.display = 'none';


  
  document.getElementById('myVideo').style.display = 'unset'; document.getElementById("mp4_src").src = "WIN_20230328_13_59_37_Pro.mp4"; document.getElementById("myVideo").load();
  
  document.getElementById('myVideo').onended = function(e) {
  recognition_examinations.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  document.getElementById('save-note-btn-for-examinations').style.display = 'unset';

  }
}









function movetoQuestions_examinations(){
  document.getElementById('examinations').style.display = 'none';
  document.getElementById('summary').style.display = 'unset';

  recognition_examinations.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  document.getElementById("mp4_src").src = "WIN_20230328_13_59_37_Pro.mp4"; document.getElementById("myVideo").load();
  document.getElementById('myVideo').onended = function(e) {
  recognition1.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  document.getElementById('save-note-btn-for-summary').style.display = 'unset';
  }
}


function movetoQuestions_summary(){
  document.getElementById('summary').style.display = 'none';
  document.getElementById('differentials').style.display = 'unset';

  recognition1.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  document.getElementById("mp4_src").src = "WIN_20230328_13_59_37_Pro.mp4"; document.getElementById("myVideo").load();
  document.getElementById('myVideo').onended = function(e) {
  recognition_differentials.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  document.getElementById('save-note-btn-for-differentials').style.display = 'unset';
  }
}

function movetoQuestions_differentials(){
  document.getElementById('differentials').style.display = 'none';
  document.getElementById('investigations').style.display = 'unset';

  recognition_differentials.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  document.getElementById("mp4_src").src = "WIN_20230328_13_59_37_Pro.mp4"; document.getElementById("myVideo").load();
  document.getElementById('myVideo').onended = function(e) {
  recognition_investigations.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  document.getElementById('save-note-btn-for-investigations').style.display = 'unset';
  }
}

function movetoQuestions_investigations(){
  document.getElementById('investigations').style.display = 'none';
  document.getElementById('riskfactors').style.display = 'unset';

  recognition_investigations.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  document.getElementById("mp4_src").src = "WIN_20230328_13_59_37_Pro.mp4"; document.getElementById("myVideo").load();
  document.getElementById('myVideo').onended = function(e) {
  recognition_riskfactors.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  document.getElementById('save-note-btn-for-riskfactors').style.display = 'unset';
  }
}

function movetoQuestions_riskfactors(){
  document.getElementById('riskfactors').style.display = 'none';
  document.getElementById('treatments').style.display = 'unset';

  recognition_riskfactors.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  document.getElementById("mp4_src").src = "WIN_20230328_13_59_37_Pro.mp4"; document.getElementById("myVideo").load();
  document.getElementById('myVideo').onended = function(e) {
  recognition_treatments.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  document.getElementById('save-note-btn-for-treatments').style.display = 'unset';
  }
}

function movetoQuestions_treatments(){
  document.getElementById('treatments').style.display = 'none';
  //document.getElementById('').style.display = 'unset';

  recognition_treatments.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  //document.getElementById("mp4_src").src = "WIN_20230328_13_59_37_Pro.mp4"; document.getElementById("myVideo").load();
  //document.getElementById('myVideo').onended = function(e) {
  //recognition_.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  //document.getElementById('save-note-btn-for-').style.display = 'unset';
  }
//}






const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");
const countdownupdated = document.getElementById("countdown-updated");

const countdownValue = document.getElementById("countdown-value");
//const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause-countdown");

let timeLeft, timer;

function updateTimeLeft() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  countdownValue.innerHTML = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  timeLeft--;
  if (timeLeft === 59) {
    countdownValue.style.color = "orange";
  }
  if (timeLeft === 9) {
    countdownValue.style.color = "red";
  }
  if (timeLeft === -1) {
    clearInterval(timer);
    countdownValue.innerHTML = "0:00";
    setTimeout(() => {
      countdownValue.innerHTML = "Time's up!";
      readOutLoud("Your time is up!")
    }, 2000);
  }
}
slider.addEventListener("input", function() {
  sliderValue.innerHTML = `${this.value} min`;
  countdownupdated.innerHTML = `${this.value}:00`;
});

//startBtn.addEventListener("click", function() {
//  timeLeft = slider.value * 60;
//  timer = setInterval(updateTimeLeft, 1000);
//});






/*pauseBtn.addEventListener("click", function() {
  if (pauseBtn.style.backgroundImage = "url('pause_button_black_and_white-removebg-preview.png')") {
    clearInterval(timer);
    pauseBtn.innerHTML = "1"; pauseBtn.style.fontWeight = "bold"; pauseBtn.style.fontSize = "45px"; pauseBtn.style.height = '85px'; pauseBtn.style.padding = '1px 50px';
    pauseBtn.style.backgroundImage = "url('play-button-black-and-white.png')";
    recognition.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';

  } else if (pauseBtn.style.backgroundImage = "url('play-button-black-and-white.png')"){
    timer = setInterval(updateTimeLeft, 1000);
    pauseBtn.innerHTML = ""; pauseBtn.style.fontWeight = "normal"; pauseBtn.style.fontSize = "15px"; pauseBtn.style.height = '35px'; pauseBtn.style.padding = '10px 20px';
    recognition.start(); document.getElementById('listeninggif').style.display = 'unset';     document.getElementById('stop-consultation-btn').style.display = 'unset';
    pauseBtn.style.backgroundImage = "url('pause_button_black_and_white-removebg-preview.png')"
  }
});*/




pauseBtn.addEventListener("click", function() {
  if (pauseBtn.innerHTML === "") {
    clearInterval(timer);
    pauseBtn.innerHTML = "1"; pauseBtn.style.fontWeight = "bold"; pauseBtn.style.height = '85px'; pauseBtn.style.padding = '300px 280px'; pauseBtn.style.color = 'transparent';
    pauseBtn.style.top = '50%'; pauseBtn.style.left = '50%'; pauseBtn.style.transform = 'translate(-50%, -50%)';
    pauseBtn.style.backgroundImage = "url('play-button-black-and-white.png')";

    myVideo.pause(); recognition.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';

  } else {
    timer = setInterval(updateTimeLeft, 1000);
    pauseBtn.innerHTML = ""; pauseBtn.style.fontWeight = "normal"; pauseBtn.style.fontSize = "15px"; pauseBtn.style.height = '35px'; pauseBtn.style.padding = '10px 20px';
    recognition.start(); document.getElementById('listeninggif').style.display = 'unset'; document.getElementById('stop-consultation-btn').style.display = 'unset';
    pauseBtn.style.backgroundImage = "url('pause_button_black_and_white-removebg-preview.png')"

    pauseBtn.style.top = ''; pauseBtn.style.left = ''; pauseBtn.style.transform = ''; // Reset the position property to its default value
  }
});



/*
pauseBtn.addEventListener("click", function() {
  if (pauseBtn.innerHTML === "Pause consultation") {
    clearInterval(timer);
    pauseBtn.innerHTML = "Unpause consultation"; pauseBtn.style.fontWeight = "bold"; pauseBtn.style.fontSize = "45px"; pauseBtn.style.height = '85px'; pauseBtn.style.padding = '1px 50px';
    myVideo.pause(); readOutLoud.pause();
    recognition.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';

  } else {
    timer = setInterval(updateTimeLeft, 1000);
    pauseBtn.innerHTML = "Pause consultation"; pauseBtn.style.fontWeight = "normal"; pauseBtn.style.fontSize = "15px"; pauseBtn.style.height = '35px'; pauseBtn.style.padding = '1px 5px';
    recognition.start(); document.getElementById('listeninggif').style.display = 'unset';     document.getElementById('stop-consultation-btn').style.display = 'unset';

  }
});
*/






   /*-----------------------------
        The While loops
  ------------------------------
  var jobx = 0;
  var radiatex = 0;
  var ratepainx = 0;
  var makeitbetterx = 0;
  var makeitworsex = 0;
  var walkdistancex = 0;
  var ideasx = 0;
  var concernsx = 0;
  var expectationsx = 0;
  var smokingx = 0;
  var alcoholx = 0;
  var familyhistoryx = 0;
  
  var counter = 0;
//  while (counter < 1) {

*/

jobx = false;
radiatex = false;
ratepainx = false;
makeitbetterx = false;
makeitworsex = false;
walkdistancex = false;
ideasx = false;
concernsx = false;
expectationsx = false;
smokingx = false;
alcoholx = false;
familyhistoryx = false;






//this following part makes you write down straight onto the textbox rather than having to click on the textbox.
 $(function() {
  $('#note-textarea').focus();

  $(document).on('keydown', function() {
    $('#note-textarea').focus();
  });
});
 
/*-----------------------------
      Voice Recognition
------------------------------*/
 
// If false, the recording will stop after a few seconds of silence.
// When true, the silence period is longer (about 15 seconds),
// allowing us to keep recording even when the user pauses.

recognition.continuous = true;


var silenceTimer = null; //""""""""



 
// This block is called every time the Speech APi captures a line.
recognition.onresult = function(event) {

  // Clear the timer if it's running //""""""""
  if (silenceTimer) {
    clearTimeout(silenceTimer);
    silenceTimer = null;
  }
 


  
  // event is a SpeechRecognitionEvent object.
  // It holds all the lines we have captured so far.
  // We only need the current one.
  var current = event.resultIndex;
 
  // Get a transcript of what was said.
  var transcript = event.results[current][0].transcript;
 
  
 
  // Add the current transcript to the contents of our Note.
  // There is a weird bug on mobile, where everything is repeated twice.
  // There is no official solution so far so we have to handle an edge case.
  var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);
 
  if(!mobileRepeatBug) {
    noteContent += transcript;
    noteContent = noteContent.toLowerCase();
    noteTextarea.val(noteContent);
  }



// Set a new timer for 2 seconds //""""""""
silenceTimer = setTimeout(function() {
  // Execute your desired action here after 2 seconds of silence
  //readOutLoud('Two seconds of silence detected.');



  recognition.stop();
  //newQuestion();
  document.getElementById('listeninggif').style.display = 'none';document.getElementById('stop-consultation-btn').style.display = 'none';

 


    if(!noteContent.length) {
    instructions.text('Could not save empty note. Please add a message to your note.');
  }
// else {
    
    
    
    
    
    // Save note to localStorage.
    // The key is the dateTime with seconds, the value is the content of the note.
    
    
    
//    var messages = [],
//      noteContent;
//      messages.push(noteContent);
//    for (var i = 1; i < 8; i++) {
//      if (messages[messages.length - i])
//      document.getElementById("chatsays" + i).innerHTML = messages[messages.length - i];
//    }
//  }




    saveNote(new Date().toLocaleString(), noteContent);
    

    
    


    if(noteContent.includes("name") && noteContent.includes("age")) {
      readOutLoud("My name is Marc Jevner and I am 31")
    }
    
    else if(noteContent.includes("age")||noteContent.includes("old")){
      readOutLoud("I'm 31 years old")
    }

    else if (noteContent.includes("is it ok")||noteContent.includes("would it be ok")||noteContent.includes("talk to you")
      ||noteContent.includes("chat")||noteContent.includes("speak to you")||noteContent.includes("ask you")||noteContent.includes("may i")) {
      readOutLoud("yes that's fine");
    }//consent for consultation (can i ask you a few questions)

    else if (noteContent.includes("your name")||noteContent.includes("full name")) {
      
      //mp4video ='WIN_20230328_13_59_49_Pro.mp4';
      document.getElementById("mp4_src").src = "WIN_20230328_13_59_37_Pro.mp4"; document.getElementById("myVideo").load(); document.getElementById('myVideo').onended = function(e) {
      recognition.start();  document.getElementById('listeninggif').style.display = 'unset';    document.getElementById('stop-consultation-btn').style.display = 'unset';

    }

      
      
      //readOutLoud("My name is Marc Jevner");
    }//name

    else if (noteContent.includes("call")||noteContent.includes("address")) {
      readOutLoud("Marc is fine");
    }//how would you like to be addressed as

    else if (noteContent.includes("age")||noteContent.includes("old")) {
      readOutLoud("I'm 58");
    }//age
    
    else if (noteContent.includes("date of birth")||noteContent.includes("when were you born")) {
      readOutLoud("the 4th of June 1964");
    }//DOB

    else if (noteContent.includes("where were you born")) {
      readOutLoud("In London");
    }//Where you live
    
    else if (noteContent.includes("occupation")||noteContent.includes("job")||noteContent.includes("work")) {
      readOutLoud("I work as a banker");
      jobx = true;
      document.getElementById("mp4_src").src = "WIN_20230328_13_59_49_Pro.mp4"; document.getElementById("myVideo").load(); document.getElementById('myVideo').onended = function(e) {
      recognition.start();  document.getElementById('listeninggif').style.display = 'unset';    document.getElementById('stop-consultation-btn').style.display = 'unset';
    }}//job
    
    else if (noteContent.includes("stress")) {
      readOutLoud("to be honest I'm quite stressed in general, I find that my work is quite stressful, but I really enjoy it");
    }//Are you stressed at work
    
    else if (noteContent.includes("do you enjoy")) {
      readOutLoud("Yes, I do");
    }//do you enjoy your work?
    
    else if (noteContent.includes("how are you")||noteContent.includes("how are things")) {
      readOutLoud("I'm not feeling the best but I am ok");
    }//how are you?



    

    else if (noteContent.includes("always there")&&noteContent.includes("come")) {
      readOutLoud("The pain is constantly always there");
    }//is the pain always there OR constant (there's another one later too)

    else if (noteContent.includes("constant")&&noteContent.includes("come")) {
      readOutLoud("The pain is constantly always there");
    }//is the pain always there OR constant (there's another one later too)

    else if (noteContent.includes("always there")&&noteContent.includes("intermittent")) {
      readOutLoud("The pain is constantly always there");
    }//is the pain always there OR constant (there's another one later too)

    else if (noteContent.includes("constant")&&noteContent.includes("intermittent")) {
      readOutLoud("The pain is constantly always there");
    }//is the pain always there OR constant (there's another one later too)



    else if (noteContent.includes("constant")||noteContent.includes("always there")) {
      readOutLoud("Yes the pain is kind of always there");
    }//is the pain constant

    else if (noteContent.includes("intermittent")||noteContent.includes("come and go")||noteContent.includes("comes and go")) {
      readOutLoud("No the pain is constantly always there");
    }//is the pain intermittent



    //Opening question    
    
    else if (noteContent.includes("brought")||noteContent.includes("bring")||noteContent.includes("what can")||noteContent.includes("why")
        ||noteContent.includes("come")||noteContent.includes("how do you feel")
        ||noteContent.includes("I help")||noteContent.includes("problem")||noteContent.includes("you have any pain")
        ||noteContent.includes("i can do for you")||noteContent.includes("can i do for you")) {
      //readOutLoud("This morning I was speaking to my friend and suddenly I had this really strange feeling in my chest. it was really painful and it felt as if I got kicked really hard in my chest region. I've tried taking paracetamol but it hasn't done anything");
        document.getElementById("mp4_src").src = "vid-whatsbroughtyouin.mp4"; document.getElementById("myVideo").load(); document.getElementById('myVideo').onended = function(e) {
        recognition.start();  document.getElementById('listeninggif').style.display = 'unset';    document.getElementById('stop-consultation-btn').style.display = 'unset';
        }
    }//HOPC/whats made you come to the hospital/ why did you come to the hospital
    
    else if (noteContent.includes("arm")&&noteContent.includes("right")) {
      readOutLoud("I didn't have any pain in my right arm.");
    }//tell me a bit more
    
    else if (noteContent.includes("arm")) {
      readOutLoud("The pain in my left arm just came on with the chest pain, and it was the same sort of pain as the pain in my chest.");
    }//tell me a bit more

    else if (noteContent.includes("neck")) {
      readOutLoud("The pain in my neck was not as bad as the pain in my chest and my left arm, but I did notice it but it wasn't very severe.");
    }//tell me a bit more

    else if (noteContent.includes("bit more")||noteContent.includes("tell me more")||noteContent.includes("tell me about")) {
      readOutLoud("The pain just came on so randomly and was so severe, honestly, thought I was going to die.");
    }//tell me a bit more
    
    //pain
    
    else if (noteContent.includes("where is")||noteContent.includes("bring")||noteContent.includes("what can")
        ||noteContent.includes("whereabout")||noteContent.includes("where was")) {
      readOutLoud("The pain is in the middle of my chest");
    }//where is the pain
    
    else if (noteContent.includes("burn")) {
      readOutLoud("No not really, it doesn't feel like a burning pain but rather it feels like someone's punched me in the chest instead");
    }//is it burning pain

    else if (noteContent.includes("sharp")) {
      readOutLoud("No I wouldn't really say so, i feel that instead of a sharp pain that it is more that my chest feels really heavy and that someone's punched me in the chest");
    }//is it a sharp pain
    
    else if (noteContent.includes("describe")||noteContent.includes("it feel like")
        ||noteContent.includes("pain feel like")) {
      readOutLoud("It feels like a horse kicked me in my chest");
    }//describe the pain
    
  
    


    
    

    else if (noteContent.includes("radiate")||noteContent.includes("anywhere")||noteContent.includes("other pain")) {
      readOutLoud("now you mention it, I have also noticed that my left arm is also quite painful, and also my neck");
      radiatex = true;

    }//does the pain radiate/move anywhere
    
    else if (noteContent.includes("rate the pain")||noteContent.includes("severe")||noteContent.includes("1-10")
        ||noteContent.includes("1 to 10")||noteContent.includes("one to ten")||noteContent.includes("-10")||noteContent.includes("out of 10")) {
      readOutLoud("Honesty I would say the pain is probably around 9/10, and I normally have quite a high pain threshold");
      ratepainx = true;
    }//rate the pain
    
    else if (noteContent.includes("make it better")||noteContent.includes("make the pain better")
        ||noteContent.includes("makes it better")||noteContent.includes("makes the pain better")
        ||noteContent.includes("relieve")||noteContent.includes("ease")) {
      readOutLoud("Honestly, nothing makes it better, not even paracetamol does anything");
      makeitbetterx = true;
    }//anything make it better/anything ease the pain
    
    else if (noteContent.includes("make it worse")||noteContent.includes("exacerbate")
        ||noteContent.includes("make the pain worse")||noteContent.includes("makes the pain worse")
        ||noteContent.includes("makes it worse")) {
      readOutLoud("I would say that any sort of movement makes the pain even worse than it already is, so because of that I try not to move to make the pain a bit more bearable");
      makeitworsex = true;
    
    }//anything make it worse
    
    else if (noteContent.includes("worse when")) {
      readOutLoud("I don't think so");
      makeitworsex = true;
    }//Is it worse when walking/going up the stairs etc/do you find it gets better when
    
    else if (noteContent.includes("better when")) {
      readOutLoud("Not really");
      makeitbetterx = true;
    }//Is it worse when walking/going up the stairs etc/do you find it gets better when
    
    else if (noteContent.includes("how long")||noteContent.includes("start")) {
      readOutLoud("This pain only started this morning, I would say it was around 8AM");
    }//How long have you had the pain for/when did the pain start
    
    else if (noteContent.includes("got worse")||noteContent.includes("gotten worse")
        ||noteContent.includes("gotten better")||noteContent.includes("got better")||noteContent.includes("sudden")) {
      readOutLoud("The pain has definitely gotten worse as the day has gone on");
    }//Has the pain gradually gotten worse/better
    
    else if (noteContent.includes("tender")||noteContent.includes("painful to touch")||noteContent.includes("painful when touch")) {
      readOutLoud("Yes it does, especially when you touch the middle of my chest");
    }//tenderness
    
    else if (noteContent.includes("heart attack")&& noteContent.includes("past")) {
      readOutLoud("No I haven't had a heart attack in the past");
    }

    else if(noteContent.includes("heart attack")&& noteContent.includes("first")){
      readOutLoud("Yes this is my first heart attack");
    }

    else if(noteContent.includes("happen")&& noteContent.includes("before")){
      readOutLoud("No, this has never happened before");
    }

    //rule out pain anywhere else
    else if (noteContent.includes("pain in")||noteContent.includes("pains in")) {
      readOutLoud("I've mainly got pain in the middle of my chest, ");
      readOutLoud("and I also have pain in my left shouler and neck but I have not noticed any other pains anywhere else");
    }//any pain in X (eg in the shoulders, in the side etc)
    
    //other symptoms    
    else if (noteContent.includes("symptoms")||noteContent.includes("come along with")
        ||noteContent.includes("experience anything else")||noteContent.includes("come with")) {
      readOutLoud("I've also noticed that I've gotten quite short of breath as well, ");
      readOutLoud("but I think that's just because of the pain");
    }//any other Sx/does anything else come along with the pain
    
    else if (noteContent.includes("fever")||noteContent.includes("felt off")||noteContent.includes("felt yourself")
        ||noteContent.includes("feeling off")||noteContent.includes("a cold")||noteContent.includes("under the weather")) {
      readOutLoud("No");
    }//fever
    
    else if (noteContent.includes("naus")||noteContent.includes("vomit")) {
      readOutLoud("No");
    }//any vomiting/nausea/nauseous
    
    else if (noteContent.includes("dizz")) {
      readOutLoud("No");
    }//any vomiting/nausea/nauseous

    else if (noteContent.includes("clam")||noteContent.includes("sweat")) {
      readOutLoud("No");
    }//any sweating/clammy

    else if (noteContent.includes("cough")) {
      readOutLoud("No");
    }//cough
    
    else if (noteContent.includes("bring up any")||noteContent.includes("sputum")||noteContent.includes("phlegm")) {
      readOutLoud("No");
    }//do you bring up anything when you cough/vomit
    
    else if (noteContent.includes("colour")||noteContent.includes("texture")) {
      readOutLoud("I don't know");
    }//colour of cough/vomit
    
    else if (noteContent.includes("how much do you")||noteContent.includes("texture")) {
      readOutLoud("I don't know");
    }//how much phlegm do you bring up
    
    //SOB   
    else if (noteContent.includes("short")||noteContent.includes("breathless")||noteContent.includes("breath")) {
      readOutLoud("I have felt short of breath since this morning too, but I think it's because of the pain");
    }//SOB
    
    else if (noteContent.includes("whilst walk")||noteContent.includes("far")||noteContent.includes("when you walk")
        ||noteContent.includes("whilst you walk")||noteContent.includes("when walk")||noteContent.includes("during walk")) {
      readOutLoud("Yes I do. I can walk about 50 metres, but then I can't anymore because of the shortness of breath");
      walkdistancex = true;
    }//how far can you walk/when do you feel short of breath/ dyu get SOB whilst walking/when walking
    
    else if (noteContent.includes("when sleep")||noteContent.includes("pillow")||noteContent.includes("upright")||noteContent.includes("during sleep")) {
      readOutLoud("I normally sleep with 3-4 pillows at night acctually, and that's because I feel short of breath");
    }//SOB when sleeping/orthopnoea
    
    else if (noteContent.includes("wake up")) {
      readOutLoud("Now you mention it, I do wake up short of breath at times");
    }//SOB Paroxysmal Nocturnal dyspnoea (PND)
    
    //Gastro
    else if (noteContent.includes("bloat")) {
      readOutLoud("I haven't noticed any bloating");
    }//bloating
    
    else if (noteContent.includes("yellow")) {
      readOutLoud("I've not mentioned any yellowing of the skin or of my eyes");
    }//jaundice
    
    else if (noteContent.includes("lump")||noteContent.includes("lymph")||noteContent.includes("swelling")) {
      readOutLoud("I've not noticed any");
    }//lymph nodes - query "swelling" coz could be of the knee for example
    
    else if (noteContent.includes("confus")) {
      readOutLoud("I've not felt confused recently");
    }//confused/confusion
    
    //ENT
    else if (noteContent.includes("headache")) {
      readOutLoud("I've not been having any headaches");
    }//headache
    
    //opthalmology    
    else if (noteContent.includes("vision")||noteContent.includes("eye sight")||noteContent.includes("eye-sight")||noteContent.includes("changes in your eyes")) {
      readOutLoud("I've not noticed any changes in my vision");
    }//vision
    
    //derm
    else if (noteContent.includes("skin")) {
      readOutLoud("I've not noticed any changes in my skin");
    }//skin changes
    
    //bowels+urine    
    else if (noteContent.includes("bowels")||noteContent.includes("poo")
        ||noteContent.includes("stool")||noteContent.includes("back side")
        ||noteContent.includes("constipation")||noteContent.includes("diarrhoea")||noteContent.includes("runny")) {
      readOutLoud("I've not noticed any changes");
    }//bowels
    
    else if (noteContent.includes("urin")||noteContent.includes("pee")
        ||noteContent.includes("piss")||noteContent.includes("toilet")
        ||noteContent.includes("bladder")||noteContent.includes("void")||noteContent.includes("wee")) {
      readOutLoud("I've not noticed any changes in my urine");
    }//urine/voiding
    
    
    
    //red flags   
    else if (noteContent.includes("weight")) {
      readOutLoud("I've noticed any weight loss to be honest");
    }//weight loss
    
    else if (noteContent.includes("blood")) {
      readOutLoud("I've not noticed any blood loss from anywhere");
    }//blood loss
    
    else if (noteContent.includes("appetite")) {
      readOutLoud("I've not noticed any changes in my appetite");
    }//changes in appetite
    
    //ICE   
    else if (noteContent.includes("idea")||noteContent.includes("do you think")||noteContent.includes("going on")
        ||noteContent.includes("reckon")||noteContent.includes("happening")) {
      readOutLoud("I think I might be having a heart attack, but I'm not too sure");
      ideasx = true;
    }//Ideas/what's your ideas of what's happening/what dyu think's happening/do you think it's cancer
    
    else if (noteContent.includes("concern")||noteContent.includes("worried")||noteContent.includes("worry")||noteContent.includes("scar")) {
      readOutLoud("I'm really worried that it is acctually a heart attack, and I know that you can die from a heart attack");
      concernsx = true;
    }//Concerns/anything scaring you
    
    else if (noteContent.includes("expect")||noteContent.includes("get out of")||noteContent.includes("like from us")||noteContent.includes("hop")
    ||noteContent.includes("can we help")||noteContent.includes("what can we do for you")||noteContent.includes("what can i do for you")) {
      readOutLoud("I would like to figure out what is going on with me if that's possible, and maybe run a few tests?");
      expectationsx = true;
    }//Expectations/what would you like from us
    
    
    
    //PMHx+FHx+allergies+meds   
    
    else if (noteContent.includes("family")||noteContent.includes("run in the")) {
      readOutLoud("I think my auntie died of a heart attack when she was 67 and my father passed away from a stroke when he was 72, but there's no other conditions that run in the family");
      familyhistoryx = true;
    }//FHx
    
    else if (noteContent.includes("any other medical")||noteContent.includes("past medical")||noteContent.includes("medical conditions")) {
      readOutLoud("I have high blood pressure and I had a stroke that I successfuly recovered from a couple years ago. I've also had heart failure for last 10 years. I also have atrial fibrillation");
    }//PMHx
    
    else if (noteContent.includes("allerg")) {
      readOutLoud("no");
    }//FHx
    
    else if (noteContent.includes("do you take anything for")||noteContent.includes("paracetamol")||noteContent.includes("pain relief")) {
      readOutLoud("I take paracetamol, but it doesn't work");
    }//Do you take anything for the pain? + does it work
    
    else if (noteContent.includes("meds")||noteContent.includes("medication")||noteContent.includes("any drugs")
        ||noteContent.includes("any other drugs")) {
      readOutLoud("I take aspirin 300mg, and amlodipine for my high blood pressure. I'm also on a Beta blocker for my heart failure and I'm on a statin too.");
    }//meds
    
    
    //social Hx
    
    else if (noteContent.includes("how long")&&noteContent.includes("smoke")) {
      readOutLoud("I started smoking when I was 15");
      smokingx = true;
    }//smoking
    
    else if (noteContent.includes("start")&&noteContent.includes("smoke")) {
      readOutLoud("I started smoking when I was 15");
      smokingx = true;
    }//smoking

    else if (noteContent.includes("smok")||noteContent.includes("how much do you smoke")) {
      readOutLoud("I smoke 30 cigarettes every day");
      smokingx = true;
    }//smoking

    else if (noteContent.includes("used to smoke")||noteContent.includes("did you smoke")) {
      readOutLoud("I used to smoke 10 cigarettes a day when I was a teenager, and I started when I was 18");
      smokingx = true;
    }//past smoking
    
    else if (noteContent.includes("how long")&&noteContent.includes("drink")) {
      readOutLoud("I started drinking when I was 15");
      smokingx = true;
    }//smoking
    
    else if (noteContent.includes("start")&&noteContent.includes("drink")) {
      readOutLoud("I started drinking when I was 15");
      smokingx = true;
    }//smoking


    else if(noteContent.includes("drink")||noteContent.includes("alcohol")||noteContent.includes("how much do you drink")){
      readOutLoud("I drink about half a bottles of wine every day");
      alcoholx = true;
    }//alcohol
    
    else if (noteContent.includes("used to drink")||noteContent.includes("did you drink")) {
      readOutLoud("I used to only drink socially when I was a teenager, and I started when I was 18");
      alcoholx = true;
    }//past alcohol
    
    else if(noteContent.includes("illicit")||noteContent.includes("illegal drug")){
      readOutLoud("No I don't");
    }//illicit drugs
    
    else if(noteContent.includes("over the counter")||noteContent.includes("not prescribed")||noteContent.includes("not given")){
      readOutLoud("No");
    }//OTC drugs/have you been taking any drugs not given by the Dr
    
    else if(noteContent.includes("exercise")||noteContent.includes("go on walk")||noteContent.includes("active")){
      readOutLoud("I don'treally, especially because I get short of breath, so I avoid it");
    }//exercise/do you keep active
    
    else if(noteContent.includes("diet")||noteContent.includes("do you eat")||noteContent.includes("what you eat")){
      readOutLoud("I've been told I eat too much, but I would say I eat alright, I only eat fast food 2 or 3 times a week, but I try to get my 5 a day");
    }//how's your diet/what sorts of things do you eat/describe what you eat
    


    
    //home situation    
    else if(noteContent.includes("at home")||noteContent.includes("live with")){
      readOutLoud("I live with my wife at home");
    }//who's at home/who lives at home/who dyu live with
    
    else if(noteContent.includes("bungalo")||noteContent.includes("house")||noteContent.includes("appartment")
        ||noteContent.includes("live in")||noteContent.includes("you live")||noteContent.includes("living situation")||noteContent.includes("housing situation")){
      readOutLoud("I live in a bungalo");
    }//where dyu live/dyu live in a bungalo etc
    
    else if(noteContent.includes("how")&&noteContent.includes("wife")){
      readOutLoud("She is fine thank you");
    }//how's your wife

    else if(noteContent.includes("wife")||noteContent.includes("husband")||noteContent.includes("girlfriend")||noteContent.includes("boyfriend")){
      readOutLoud("Yes I have a wife");
    }//children?
    
    else if((noteContent.includes("children")||noteContent.includes("kids"))&&(noteContent.includes("have")||noteContent.includes("any"))){
      readOutLoud("I don't have any children");
    }//children?
    
    else if((noteContent.includes("hello")||noteContent.toLowerCase() === "hi."||noteContent.toLowerCase() === "hi"||noteContent.toLowerCase() === "hey"
    ||noteContent.toLowerCase() === "hey."||noteContent.includes("greeting")
    ||noteContent.includes("hey there")||noteContent.includes("hi there")||noteContent.includes("hiya"))&&!noteContent.includes("children")){
      readOutLoud("Hiya there");
    }
    
    else if(noteContent.includes("is that correct")||noteContent.includes("is that right")||noteContent.includes("am i right")){
      readOutLoud("yes that's correct");
    }
    
    else if(noteContent.includes("repeat")||noteContent.includes("what did you say")){
      readOutLoud("Hmmmmmmm, I forgot the question you asked actually, can you ask it again please");
    }//can you repeat what you said

    else if (noteContent.includes("sorry")) {
      readOutLoud("thank you for understanding");
    }//Sorry to here about that

    else if (noteContent.includes("hard for you")) {
      readOutLoud("Yes it was quite hard for me, thank you for asking");
    }//Sorry to here about that

    else {
      


    //const prompt = "You are Jill, a 50 year old female with pain. The pain started yesterday at 3pm and is located on the upper right side of your tummy region. It is worse when bending down. You smoke 20 cigarettes per day, have 2 children, and do not take drugs. You are currently taking paracetamol for the pain. Imagine you are in a consultation room and the doctor is asking you questions, and you are Jill for all of the next questions that we ask in this thread. Do not give any more information than what the doctor asked for. Make it seem like Jill is not very smart and occasionally asks questions to the doctor. Question: What is your name?, Answer: My name is Jill";
    //const prompt = "you are jill, a 50 year old female. with pain. started yesterday at 3pm. located on the upper right side of your tummy region. that is worse when bending down. You smoke 20 cigarettes per day. you have 2 children. and don't take drugs. You take paracetamol for the pain. Imagine you are in a consultation room and the doctor is asking you questions and you are jill for all of the next questions Do not give any more information than what the doctor asked for. Input:"
    const prompt = "you are Jill, a 50 year old female. with chest pain. You're in a consultation room & the Dr is asking you questions. Answer as Jill"

    //require('dotenv').config();

    const generateResponse = async (input) => {
      const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', { //babbage davinci-3
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': `Bearer ${process.env['API_KEY']}`
          'Authorization': `Bearer `
        },
        body: JSON.stringify({
          prompt: prompt + '\n' + 'question: ' + input + '\n' + 'answer: ', //'\n' + 'output: '
          temperature: 0.1,
          max_tokens: 20,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0
        })
      });
    
      const { choices } = await response.json();
      return choices[0].text.trim();
    };
    

/*
const handleUserInput = async (noteContent) => {
          const response = await generateResponse(noteContent);
          readOutLoud(response);


          document.getElementById("mp4_src").src = "WIN_20230328_13_59_49_Pro.mp4"; document.getElementById("myVideo").load(); document.getElementById('myVideo').onended = function(e) {
            recognition.start();  document.getElementById('listeninggif').style.display = 'unset';    document.getElementById('stop-consultation-btn').style.display = 'unset';
          }      
    }
*/





const gptvideo = document.getElementById('myVideo');


const handleUserInput = async (noteContent) => {
  const responsePromise = generateResponse(noteContent);
  const videoPromise = new Promise((resolve) => {
    gptvideo.onloadedmetadata = () => {
      gptvideo.muted = true;

      gptvideo.play();
      resolve();
    };
    //gptvideo.src = 'vid-whatsbroughtyouin.mp4';
    document.getElementById("mp4_src").src = "vid-whatsbroughtyouin.mp4";
    gptvideo.load();
  });
  await Promise.all([responsePromise, videoPromise]);
  const response = await responsePromise;
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(response);

  utterance.onend = () => {
    const gptvideo = document.getElementById('myVideo');
    gptvideo.pause(); // Pause the video after the speech synthesis finishes
//gptvideo.muted = false;

    recognition.start();  document.getElementById('listeninggif').style.display = 'unset'; document.getElementById('stop-consultation-btn').style.display = 'unset';

  };
  synth.speak(utterance);

};









const userInput = noteContent;
handleUserInput(userInput);
};//end of the else statement





   /*-----------------------------------------------------
    trial = false;
    var test = $('#test');
     if (noteContent.includes("job")){
       //test.text('all of this works');
       trial = true;
     }
     
     if (trial === true){
       test.text('YES he asked about job');
     }
----------------------------------------------------/*----

/*----
const save_note_btn = document.getElementById('save-note-btn');
   if (noteContent=== '') {
     save_note_btn.disabled = true;
   } else {
     save_note_btn.disabled = false;
   }

/*----


/*-----------------------------------------------
Things we forgot to ask about in the consultation for EBI
--------------------------------------------------*/

/*var jobtest = $('#jobtest'); var jobtest1 = $('#jobtest1');
     if (jobx === true){
      jobtest.text('') 
      jobtest1.text("● The patient's job")
      generalhistorycounter++
      
     }*/


let generalhistorycounter = 0;

     var jobtest = $('#jobtest'); var jobtest1 = $('#jobtest1');
     if (jobx === true){
      jobtest.css('color', 'rgb(248, 191, 191)');
      jobtest1.css('color', 'rgb(0, 0, 0)');
      generalhistorycounter++
     }

     var radiatetest = $('#radiatetest'); var radiatetest1 = $('#radiatetest1');
     if (radiatex === true){
      radiatetest.css('color', 'rgb(248, 191, 191)');
      radiatetest1.css('color', 'rgb(0, 0, 0)');
      generalhistorycounter++
     }

     var ratepaintest = $('#ratepaintest'); var ratepaintest1 = $('#ratepaintest1');
     if (ratepainx === true){
      ratepaintest.css('color', 'rgb(248, 191, 191)');
      ratepaintest1.css('color', 'rgb(0, 0, 0)');
      generalhistorycounter++
     }

     var makeitworsetest = $('#makeitworsetest'); var makeitworsetest1 = $('#makeitworsetest1');
     if (makeitworsex === true){
      makeitworsetest.css('color', 'rgb(248, 191, 191)');
      makeitworsetest1.css('color', 'rgb(0, 0, 0)');
      generalhistorycounter++
     }

     var makeitbettertest = $('#makeitbettertest'); var makeitbettertest1 = $('#makeitbettertest1');
     if (makeitbetterx === true){
      makeitbettertest.css('color', 'rgb(248, 191, 191)');
      makeitbettertest1.css('color', 'rgb(0, 0, 0)');
      generalhistorycounter++
     }
    
     var walkdistancetest = $('#walkdistancetest'); var walkdistancetest1 = $('#walkdistancetest1');
     if (walkdistancex === true){
      walkdistancetest.css('color', 'rgb(248, 191, 191)');
      walkdistancetest1.css('color', 'rgb(0, 0, 0)');
      generalhistorycounter++
     }

     var ideastest = $('#ideastest');  var ideastest1 = $('#ideastest1');
     if (ideasx === true){
      ideastest.css('color', 'rgb(248, 191, 191)');
      ideastest1.css('color', 'rgb(0, 0, 0)');
      generalhistorycounter++
     }

     var concernstest = $('#concernstest'); var concernstest1 = $('#concernstest1');
     if (concernsx === true){
      concernstest.css('color', 'rgb(248, 191, 191)');
      concernstest1.css('color', 'rgb(0, 0, 0)');
      generalhistorycounter++
     }

     var expectationstest = $('#expectationstest'); var expectationstest1 = $('#expectationstest1');
     if (expectationsx === true){
      expectationstest.css('color', 'rgb(248, 191, 191)');
      expectationstest1.css('color', 'rgb(0, 0, 0)');
      generalhistorycounter++
     }

     var familyhistorytest = $('#familyhistorytest'); var familyhistorytest1 = $('#familyhistorytest1');
     if (familyhistoryx === true){
      familyhistorytest.css('color', 'rgb(248, 191, 191)');
      familyhistorytest1.css('color', 'rgb(0, 0, 0)');
      generalhistorycounter++
     }

     var smokingtest = $('#smokingtest'); var smokingtest1 = $('#smokingtest1');
     if (smokingx === true){
      smokingtest.css('color', 'rgb(248, 191, 191)');
      smokingtest1.css('color', 'rgb(0, 0, 0)');
      generalhistorycounter++
     }

     var alcoholtest = $('#alcoholtest'); var alcoholtest1 = $('#alcoholtest1');
     if (alcoholx === true){
      alcoholtest.css('color', 'rgb(248, 191, 191)');
      alcoholtest1.css('color', 'rgb(0, 0, 0)');
      generalhistorycounter++
      
     }




//

     var generalhistorygrade = $('#generalhistorygrade');
     
     if (generalhistorycounter ===12){
     generalhistorygrade.text('Grade = A** Perfect!')}

    else if (generalhistorycounter ===10||generalhistorycounter ===11){
        generalhistorygrade.text('Grade = A*, Excellent work!')}

    else if (generalhistorycounter ===8||generalhistorycounter ===9){
       generalhistorygrade.text('Grade = A, Well done!')}

    
       else if (generalhistorycounter ===6||generalhistorycounter ===7){
        generalhistorygrade.text('Grade = B')}

        else if (generalhistorycounter ===4||generalhistorycounter ===5){
          generalhistorygrade.text('Grade = C')}

          else if (generalhistorycounter ===3||generalhistorycounter ===2||generalhistorycounter ===1||generalhistorycounter ===0){
            generalhistorygrade.text('Grade = D')}





    // Reset variables and update UI.
    noteContent = '';
    renderNotes(getAllNotes());
    noteTextarea.val('');
    //instructions.text('Press the Start Recognition button to ask another question. Then press Submit question.');
 









  
}, 1000);

};
 








recognition.onstart = function() {
  instructions.text('Microphone is activated. Try speaking into the microphone. Then double click the Submit Question button.');
}
 
//recognition.onspeechend = function() {
 // instructions.text('DOUBLE CLICK THE SUBMIT BUTTON. (Once you get the response, press the Microphone button to ask another question)');
//}
 
recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    instructions.text('No speech was detected. Try again.');  
  };
}
 






 


 



 



 


/*-----------------------------
      FOR THE PRESSING OF ENTER KEY!!!!!!
------------------------------*/
/*----
addEventListener("keypress", function(event) {
  if (event.key === "z") {
    event.preventDefault();
    document.getElementById("start-record-btn").click();
  }
});
--*/


//var input = document.getElementById("start-record-btn");
//input.
addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("save-note-btn").click();
  }
});

var input = document.getElementById("note-textarea");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("save-note-btn").click();
  }
});


/*-----------------------------
      App buttons and input
------------------------------*/










$('#start-record-btn').on('click', function(e) {
  if (noteContent.length) {
    noteContent += ' ';
  }
  recognition.start();
});
 
 
//$('#pause-record-btn').on('click', function(e) {
  //recognition.stop();
  //instructions.text('Voice recognition paused.');
//});
 
// Sync the text inside the text area with the noteContent variable.
noteTextarea.on('input', function() {
  noteContent = $(this).val();
})
 







//async function stopRecording() {
$('#save-note-btn').on('click', function(e) {
}
  //this is where you put the "IF statements for the noteContent in"
)
  //}//end of while loop called counter
  

  
  


   









notesList.on('click', function(e) {
  e.preventDefault();
  var target = $(e.target);
 
  // Listen to the selected note.
  if(target.hasClass('listen-note')) {
    var content = target.closest('.note').find('.content').text();



    if(content.includes("name") && content.includes("age")) {
      readOutLoud("My name is Marc Jevner and I am 31")
    }

/*-----------------------------------------------------------------------TO SAVE THE NOTES--------------------------------------------------------    


    else if(content.includes("age")||content.includes("old")){
      readOutLoud("I'm 31 years old")
    }

    else if (content.includes("is it ok")||content.includes("would it be ok")||content.includes("talk to you")
      ||content.includes("chat")||content.includes("speak to you")||content.includes("can i")||content.includes("may i")) {
      readOutLoud("yes that's fine");
    }//consent for consultation

    else if (content.includes("your name")||content.includes("full name")) {
      readOutLoud("My name is Marc Jevner");
    }//name

    else if (content.includes("call")||content.includes("address")) {
      readOutLoud("Marc is fine");
    }//how would you like to be addressed as
    
    else if (content.includes("age")||content.includes("old")) {
      readOutLoud("I'm 58");
    }//age
    
    else if (content.includes("name and age")) {
      readOutLoud("I'm Gregory Smith and I am 58");
    }//Name + age
    
    else if (content.includes("date of birth")||content.includes("when were you born")) {
      readOutLoud("the 4th of June 1964");
    }//DOB
    
    else if (content.includes("occupation")||content.includes("job")||content.includes("work")) {
      readOutLoud("I work as a banker");
      
    }//job
    
    else if (content.includes("stress")) {
      readOutLoud("to be honest I'm quite stressed in general, I find that my work is quite stressful, but I really enjoy it");
    }//Are you stressed at work
    
    else if (content.includes("do you enjoy")) {
      readOutLoud("Yes, I do");
    }//do you enjoy your work?
    
    //Opening question    
    
    else if (content.includes("brought")||content.includes("bring")||content.includes("what can")||content.includes("why")
        ||content.includes("come")||content.includes("how are you")||content.includes("how do you feel")) {
      readOutLoud("This morning I was speaking to my friend and suddenly I (had this really strange feeling in my chest, it was really painful and it felt as if I got kicked really hard in my chest region. I've tried taking paracetamol but it hasn't done anything");
    }//HOPC/whats made you come to the hospital/ why did you come to the hospital
    
    else if (content.includes("bit more")||content.includes("tell me more")||content.includes("tell me about")) {
      readOutLoud("The pain just came on so randomly and was so severe, honestly, thought I was going to die.");
    }//tell me a bit more
    
    //pain
    
    else if (content.includes("where is")||content.includes("bring")||content.includes("what can")
        ||content.includes("whereabout")||content.includes("where was")) {
      readOutLoud("The pain is in the middle of my chest");
    }//where is the pain
    
    else if (content.includes("describe")||content.includes("it feel like")
        ||content.includes("pain feel like")) {
      readOutLoud("It feels like a horse kicked me in my chest");
    }//describe the pain
    
    else if (content.includes("radiate")||content.includes("anywhere")||content.includes("other pain")) {
      readOutLoud("now you mention it, I have also noticed that my left arm is also quite painful, and also my neck");

    }//does the pain radiate/move anywhere
    
    else if (content.includes("rate the pain")||content.includes("severe")||content.includes("1-10")
        ||content.includes("1 to 10")||content.includes("one to ten")||content.includes("-10")||content.includes("out of 10")) {
      readOutLoud("Honesty I would say the pain is probably around 9/10, and I normally have quite a high pain threshold");
    }//rate the pain
    
    else if (content.includes("make it better")||content.includes("make the pain better")
        ||content.includes("makes it better")||content.includes("makes the pain better")
        ||content.includes("relieve")||content.includes("ease")) {
      readOutLoud("Honestly, nothing makes it better, not even paracetamol does anything");
    }//anything make it better/anything ease the pain
    
    else if (content.includes("make it worse")||content.includes("exacerbate")
        ||content.includes("make the pain worse")||content.includes("makes the pain worse")
        ||content.includes("makes it worse")) {
      readOutLoud("I would say that any sort of movement makes the pain even worse than it already is, so because of that I try not to move to make the pain a bit more bearable");
      
    
    }//anything make it worse
    
    else if (content.includes("worse when")) {
      readOutLoud("I don't think so");
    }//Is it worse when walking/going up the stairs etc/do you find it gets better when
    
    else if (content.includes("better when")) {
      readOutLoud("Not really");
    }//Is it worse when walking/going up the stairs etc/do you find it gets better when
    
    else if (content.includes("how long")||content.includes("start")) {
      readOutLoud("This pain only started this morning, I would say it was around 8AM");
    }//How long have you had the pain for/when did the pain start
    
    else if (content.includes("got worse")||content.includes("gotten worse")
        ||content.includes("gotten better")||content.includes("got better")||content.includes("sudden")) {
      readOutLoud("The pain has definitely gotten worse as the day has gone on");
    }//Has the pain gradually gotten worse/better
    
    else if (content.includes("tender")||content.includes("painful to touch")||content.includes("painful when touch")) {
      readOutLoud("Yes it does, especially when you touch the middle of my chest");
    }//tenderness
    
    
    //rule out pain anywhere else
    else if (content.includes("pain in")||content.includes("pains in")) {
      readOutLoud("I've mainly got pain in the middle of my chest, ");
      readOutLoud("and I also have pain in my left shouler and neck but I have not noticed any other pains anywhere else");
    }//any pain in X (eg in the shoulders, in the side etc)
    
    //other symptoms    
    else if (content.includes("symptoms")||content.includes("come along with")
        ||content.includes("experience anything else")||content.includes("come with")) {
      readOutLoud("I've also noticed that I've gotten quite short of breath as well, ");
      readOutLoud("but I think that's just because of the pain");
    }//any other Sx/does anything else come along with the pain
    
    else if (content.includes("fever")||content.includes("felt off")||content.includes("felt yourself")
        ||content.includes("feeling off")||content.includes("a cold")||content.includes("under the weather")) {
      readOutLoud("No");
    }//fever
    
    else if (content.includes("naus")||content.includes("vomit")) {
      readOutLoud("No");
    }//any vomiting/nausea/nauseous
    
    else if (content.includes("cough")) {
      readOutLoud("No");
    }//cough
    
    else if (content.includes("bring up any")||content.includes("sputum")||content.includes("phlegm")) {
      readOutLoud("No");
    }//do you bring up anything when you cough/vomit
    
    else if (content.includes("colour")||content.includes("texture")) {
      readOutLoud("I don't know");
    }//colour of cough/vomit
    
    else if (content.includes("how much do you")||content.includes("texture")) {
      readOutLoud("I don't know");
    }//how much phlegm do you bring up
    
    //SOB   
    else if (content.includes("short")||content.includes("breathless")||content.includes("breath")) {
      readOutLoud("I have felt short of breath since this morning too, but I think it's because of the pain");
    }//SOB
    
    else if (content.includes("whilst walk")||content.includes("far")||content.includes("when you walk")
        ||content.includes("whilst you walk")||content.includes("when walk")||content.includes("during walk")) {
      readOutLoud("Yes I do. I can walk about 50 metres, but then I can't anymore because of the shortness of breath");
    }//how far can you walk/when do you feel short of breath/ dyu get SOB whilst walking/when walking
    
    else if (content.includes("when sleep")||content.includes("pillows")||content.includes("upright")||content.includes("during sleep")) {
      readOutLoud("I normally sleep with 3-4 pillows at night acctually, and that's because I feel short of breath");
    }//SOB when sleeping/orthopnoea
    
    else if (content.includes("wake up")) {
      readOutLoud("Now you mention it, I do wake up short of breath at times");
    }//SOB Paroxysmal Nocturnal dyspnoea (PND)
    
    //Gastro
    else if (content.includes("bloat")) {
      readOutLoud("I haven't noticed any bloating");
    }//bloating
    
    else if (content.includes("yellow")) {
      readOutLoud("I've not mentioned any yellowing of the skin or of my eyes");
    }//jaundice
    
    else if (content.includes("lump")||content.includes("lymph")||content.includes("swelling")) {
      readOutLoud("I've not noticed any");
    }//lymph nodes - query "swelling" coz could be of the knee for example
    
    else if (content.includes("confus")) {
      readOutLoud("I've not felt confused recently");
    }//confused/confusion
    
    //ENT
    else if (content.includes("headache")) {
      readOutLoud("I've not been having any headaches");
    }//headache
    
    //opthalmology    
    else if (content.includes("vision")||content.includes("eye sight")||content.includes("eye-sight")||content.includes("changes in your eyes")) {
      readOutLoud("I've not noticed any changes in my vision");
    }//vision
    
    //derm
    else if (content.includes("skin")) {
      readOutLoud("I've not noticed any changes in my skin");
    }//skin changes
    
    //bowels+urine    
    else if (content.includes("bowels")||content.includes("poo")
        ||content.includes("stool")||content.includes("back side")
        ||content.includes("constipation")||content.includes("diarrhoea")||content.includes("runny")) {
      readOutLoud("I've not noticed any changes");
    }//bowels
    
    else if (content.includes("urin")||content.includes("pee")
        ||content.includes("piss")||content.includes("toilet")
        ||content.includes("bladder")||content.includes("void")||content.includes("wee")) {
      readOutLoud("I've not noticed any changes in my urine");
    }//urine/voiding
    
    
    
    //red flags   
    else if (content.includes("weight")) {
      readOutLoud("I've noticed any weight loss to be honest");
    }//weight loss
    
    else if (content.includes("blood")) {
      readOutLoud("I've not noticed any blood loss from anywhere");
    }//blood loss
    
    else if (content.includes("appetite")) {
      readOutLoud("I've not noticed any changes in my appetite");
    }//changes in appetite
    
    //ICE   
    else if (content.includes("idea")||content.includes("do you think")||content.includes("going on")
        ||content.includes("reckon")||content.includes("happening")) {
      readOutLoud("I think I might be having a heart attack, but I'm not too sure");
    }//Ideas/what's your ideas of what's happening/what dyu think's happening/do you think it's cancer
    
    else if (content.includes("concern")||content.includes("worried")||content.includes("worry")) {
      readOutLoud("I'm really worried that it is acctually a heart attack, and I know that you can die from a heart attack");
    }//Concerns
    
    else if (content.includes("expect")||content.includes("get out of")||content.includes("like from us")) {
      readOutLoud("I would like to figure out what is going on with me if that's possible, and maybe run a few tests?");
    }//Expectations/what would you like from us
    
    
    
    //PMHx+FHx+allergies+meds   
    
    else if (content.includes("family")||content.includes("run in the")) {
      readOutLoud("I think my auntie died of a heart attack when she was 67 and my father passed away from a stroke when he was 72, but there's no other conditions that run in the family");
    }//FHx
    
    else if (content.includes("any other medical")||content.includes("past medical")||content.includes("medical conditions")) {
      readOutLoud("I have high blood pressure and I had a stroke that I successfuly recovered from a couple years ago. I've also had heart failure for last 10 years. I also have atrial fibrillation");
    }//PMHx
    
    else if (content.includes("allerg")) {
      readOutLoud("no");
    }//FHx
    
    else if (content.includes("do you take anything for")||content.includes("paracetamol")||content.includes("pain relief")) {
      readOutLoud("I take paracetamol, but it doesn't work");
    }//Do you take anything for the pain? + does it work
    
    else if (content.includes("meds")||content.includes("medication")||content.includes("any drugs")
        ||content.includes("any other drugs")) {
      readOutLoud("I take aspirin 300mg, and amlodipine for my high blood pressure. I'm also on a Beta blocker for my heart failure and I'm on a statin too.");
    }//meds
    
    
    //social Hx
    
    else if (content.includes("smok")||content.includes("how much do you smoke")) {
      readOutLoud("I smoke 30 cigarettes every day");
    }//smoking
    
    else if (content.includes("used to smoke")||content.includes("did you smoke")) {
      readOutLoud("I used to smoke 10 cigarettes a day when I was a teenager, and I started when I was 18");
    }//past smoking
    
    else if(content.includes("drink")||content.includes("alcohol")||content.includes("how much do you drink")){
      readOutLoud("I drink about half a bottles of wine every day");
    }//alcohol
    
    else if (content.includes("used to drink")||content.includes("did you drink")) {
      readOutLoud("I used to only drink socially when I was a teenager, and I started when I was 18");
    }//past alcohol
    
    else if(content.includes("illicit")||content.includes("illegal drug")){
      readOutLoud("No I don't");
    }//illicit drugs
    
    else if(content.includes("over the counter")||content.includes("not prescribed")||content.includes("not given")){
      readOutLoud("No");
    }//OTC drugs/have you been taking any drugs not given by the Dr
    
    else if(content.includes("exercise")||content.includes("go on walk")||content.includes("active")){
      readOutLoud("I don'treally, especially because I get short of breath, so I avoid it");
    }//exercise/do you keep active
    
    else if(content.includes("diet")||content.includes("do you eat")||content.includes("what you eat")){
      readOutLoud("I've been told I eat too much, but I would say I eat alright, I only eat fast food 2 or 3 times a week, but I try to get my 5 a day");
    }//how's your diet/what sorts of things do you eat/describe what you eat
    

    else if(content.includes("repeat")||content.includes("what did you say")){
      readOutLoud("I forgot the question you asked acctually, can you ask it again");
    }//can you repeat what you said

    
    //home situation    
    else if(content.includes("at home")||content.includes("live with")){
      readOutLoud("I live with my wife at home");
    }//who's at home/who lives at home/who dyu live with
    
    else if(content.includes("bungalo")||content.includes("house")||content.includes("appartment")
        ||content.includes("live in")||content.includes("you live")||content.includes("housing situation")){
      readOutLoud("I live in a bungalo");
    }//where dyu live/dyu live in a bungalo etc
    
    else if(content.includes("children")||content.includes("kids")){
      readOutLoud("I don't have any children");
    }//children?
    
    else if(content.includes("hello")||content.includes("hi")||content.includes("greeting")){
      readOutLoud("Hiya there");
    }
    
    else if(content.includes("is that correct")||content.includes("is that right")||content.includes("am i right")){
      readOutLoud("yes that's correct");
    }
    
    
    else if(content.includes("end")){
      readOutLoud("Moving on to examinations,");
      //counter++;
    }

    

    else {
      readOutLoud("Sorry, I am not too sure");
    }

  
  
 

-----------------------------------------------------------------------TO SAVE THE NOTES--------------------------------------------------------*/
  }
  // Delete note.
  if(target.hasClass('delete-note')) {
    var dateTime = target.siblings('.date').text();  
    deleteNote(dateTime);
    target.closest('.note').remove();
  }

});
 
 
 
/*-----------------------------
      Speech Synthesis
------------------------------*/
 
function readOutLoud(message) {
var speech = new SpeechSynthesisUtterance();
 
  // Set the text and voice attributes.
speech.text = message;
speech.volume = 1;
speech.rate = 1;
speech.pitch = 1;
  
window.speechSynthesis.speak(speech);
}
 
 
 
/*-----------------------------
      Helper Functions
------------------------------*/
 
function renderNotes(notes) {
  var html = '';
  
  if(notes.length) {
    notes.forEach(function(note) {
      html+= `<li class="note">
                
                
                
        <p class="header"> </p>
        <p class="content">${note.content + "?"}
        <br>
        <span class="date"><font size="-2">${note.date}</font></span> 
        <a href="#" class="listen-note" title="Listen to Note">Listen to the patient's response...</a>
        <a href="#" class="delete-note" title="Delete">Delete Question</a>
            <hr>
          </p>
          
        </li>`;   
   
    });
  }
  else {
    html = '<li><p class="content">You don\'t have any notes yet.</p></li>';
  }
  notesList.html(html);
}
 
 
function saveNote(dateTime, content) {
  localStorage.setItem('note-' + dateTime, content);
}
 
 
function getAllNotes() {
  var notes = [];
  var key;
  for (var i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);
    console.log(i)
    console.log(key)
 
    if(key.substring(0,5) == 'note-') {
      notes.push({
        date: key.replace('note-',''),
        content: localStorage.getItem(localStorage.key(i))
      });
    }
  }
  console.log(notes)
  return notes;
}
 
 
function deleteNote(dateTime) {
  localStorage.removeItem('note-' + dateTime);
}













/*-----------------------------
        Examinations
 ------------------------------*/


 try {
  var SpeechRecognition_examinations = window.SpeechRecognition_examinations || window.webkitSpeechRecognition;
  var recognition_examinations = new SpeechRecognition_examinations();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}
 

var noteexaminations = '';
var examinationsContent = '';
var examinationstextarea = $('#examinations-textarea');

 
recognition_examinations.continuous = true;
var silenceTimer_examinations = null;
recognition_examinations.onresult = function(event) {
  if (silenceTimer_examinations) {
    clearTimeout(silenceTimer_examinations);
    silenceTimer_examinations = null;
  }

  var current_examinations = event.resultIndex;
 
  // Get a transcript of what was said.
  var transcript_examinations = event.results[current_examinations][0].transcript;
 
  var mobileRepeatBug_examinations = (current_examinations == 1 && transcript_examinations == event.results[0][0].transcript_examinations);
 
  if(!mobileRepeatBug_examinations) {
    noteexaminations += transcript_examinations;
    examinationstextarea.val(noteexaminations);
  }
  silenceTimer_examinations = setTimeout(function() {



  }, 1000);

};


$('#start-record-btn-for-examinations').on('click', function(e) {
  if (examinationsContent.length) {
    examinationsContent += ' ';
  }
  recognition_examinations.start();
  });

  examinationstextarea.on('input', function() {
  noteexaminations = $(this).val();
  })



$('#save-note-btn-for-examinations').on('click', function(e) {
recognition_examinations.stop();
document.getElementById('listeninggif').style.display = 'none';




  setTimeout(function() {

    var recordinginstructionsforexaminations = $('#recording-instructions-for-examinations');
    recognition_examinations.onstart = function() {recordinginstructionsforexaminations.text('Microphone is activated. Try speaking into the microphone. Then double click the Submit Question button.');}
    recognition_examinations.onspeechend = function() {
    recordinginstructionsforexaminations.text(noteexaminations);//IMPORTANT DO NOT DELETE!!!!
  }
    recognition_examinations.onerror = function(event) {if(event.error == 'no-speech') {recordinginstructionsforexaminations.text('No speech was detected. Try again.');  };}

  saveNote(new Date().toLocaleString(), noteexaminations);
  recordinginstructionsforexaminations.text('Your examinations: '+ noteexaminations);
  

  var examinationsfinal = $('#examinationsfinal');
  examinationsfinal.text(noteexaminations);

  //noteSummary = '';
  //renderNotes(getAllNotes());
  //examinationstextarea.val('');
}, 2000);


document.getElementById('examinations').style.display = 'none';
  document.getElementById('summary').style.display = 'unset';

  recognition_examinations.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  document.getElementById("mp4_src").src = "WIN_20230328_13_59_37_Pro.mp4"; document.getElementById("myVideo").load();
  document.getElementById('myVideo').onended = function(e) {
  recognition1.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  document.getElementById('save-note-btn-for-summary').style.display = 'unset';
  }

}
)









/*------enterkey*/

var input = document.getElementById("start-record-btn-for-examinations");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-examinations").click();
}
});

var input = document.getElementById("examinations-textarea");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-examinations").click();
}
});

//this following part makes you write down straight onto the textbox rather than having to click on the textbox.
$(function() {
$('#examinations-textarea').focus();

$(document).on('keydown', function() {
  $('#examinations-textarea').focus();
});
});



/*-----------------------------
        Summary
 ------------------------------*/


 try {
  var SpeechRecognition1 = window.SpeechRecognition1 || window.webkitSpeechRecognition;
  var recognition1 = new SpeechRecognition1();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}
 
var noteSummary = '';
var summaryContent = '';
var summarytextarea = $('#summary-textarea');

  
recognition1.continuous = true;
var silenceTimer1 = null;
recognition1.onresult = function(event) {
  if (silenceTimer1) {
    clearTimeout(silenceTimer1);
    silenceTimer1 = null;
  }
 
  var current1 = event.resultIndex;
 
// Get a transcript of what was said.
var transcript1 = event.results[current1][0].transcript;
 
var mobileRepeatBug1 = (current1 == 1 && transcript1 == event.results[0][0].transcript1);

if(!mobileRepeatBug1) {
  noteSummary += transcript1;
  summarytextarea.val(noteSummary);
}
silenceTimer1 = setTimeout(function() {



  }, 1000);
};
 

$('#start-record-btn-for-summary').on('click', function(e) {
  if (summaryContent.length) {
    summaryContent += ' ';
  }
  recognition1.start();
  
  });

  summarytextarea.on('input', function() {
    noteSummary = $(this).val();
    })

$('#save-note-btn-for-summary').on('click', function(e) {
  recognition1.stop();
  document.getElementById('listeninggif').style.display = 'none';
  


  setTimeout(function() {

    var recordinginstructionsforsummary = $('#recording-instructions-for-summary');
    recognition1.onstart = function() {recordinginstructionsforsummary.text('Microphone is activated. Try speaking into the microphone. Then double click the Submit Question button.');}
    recognition1.onspeechend = function() {
    recordinginstructionsforsummary.text(noteSummary);//IMPORTANT DO NOT DELETE!!!!
  }
    recognition1.onerror = function(event) {if(event.error == 'no-speech') {recordinginstructionsforsummary.text('No speech was detected. Try again.');  };}

  saveNote(new Date().toLocaleString(), noteSummary);
  recordinginstructionsforsummary.text('Your summary: '+ noteSummary);
  

  var summaryfinal = $('#summaryfinal');
  summaryfinal.text(noteSummary.toLowerCase());
  summaryreview = noteSummary.toLowerCase();

  






  var summaryage =  $('#summaryage'); var summaryage1 = $('#summaryage1');
  if (summaryreview.includes("3")||summaryreview.includes("thirty")){
    summaryage.css('background-color', 'rgb(248, 191, 191)').css('color', 'rgb(248, 191, 191)'); 
    summaryage1.css('color', 'rgb(0, 0, 0)'); 
  }  


  var summarygender =  $('#summarygender'); var summarygender1 = $('#summarygender1');
  if (summaryreview.includes("male")||summaryreview.includes("man")||summaryreview.includes("bloke")){
    summarygender.text(""); summarygender1.text("● Gender");
    //summarygender.css('background-color', 'rgb(248, 191, 191)').css('color', 'rgb(248, 191, 191)'); 
    summarygender1.css('color', 'rgb(0, 0, 0)');
  }





  /*
  var summaryage =  $('#summaryage'); var summaryage1 = $('#summaryage1');
  if (summaryreview.includes("3")||summaryreview.includes("thirty")){
    summaryage.text(""); summaryage1.text("● Age");
  }

  var summarygender =  $('#summarygender'); var summarygender1 = $('#summarygender1');
  if (summaryreview.includes("male")||summaryreview.includes("man")||summaryreview.includes("bloke")){
    summarygender.text(""); summarygender1.text("● Gender");
  }
  */





  

  //summarylowered = summaryfinal.toLowerCase();

  //noteSummary = '';
  //renderNotes(getAllNotes());
  //summarytextarea.val('');
}, 2000);


document.getElementById('summary').style.display = 'none';
  document.getElementById('differentials').style.display = 'unset';

  recognition1.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  document.getElementById("mp4_src").src = "WIN_20230328_13_59_37_Pro.mp4"; document.getElementById("myVideo").load();
  document.getElementById('myVideo').onended = function(e) {
  recognition_differentials.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  document.getElementById('save-note-btn-for-differentials').style.display = 'unset';
  }


}
)






/*------enterkey*/

var input = document.getElementById("start-record-btn-for-summary");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-summary").click();
}
});

var input = document.getElementById("summary-textarea");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-summary").click();
}
});

//this following part makes you write down straight onto the textbox rather than having to click on the textbox.
$(function() {
$('#summary-textarea').focus();

$(document).on('keydown', function() {
  $('#summary-textarea').focus();
});
});














/*-----------------------------
        Differentials
 ------------------------------*/


 try {
  var SpeechRecognition_differentials = window.SpeechRecognition_differentials || window.webkitSpeechRecognition;
  var recognition_differentials = new SpeechRecognition_differentials();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}
 

var noteDifferentials = '';
var differentialsContent = '';
var differentialstextarea = $('#differentials-textarea');

 
recognition_differentials.continuous = true;
var silenceTimer_differentials = null;
recognition_differentials.onresult = function(event) {
  if (silenceTimer_differentials) {
    clearTimeout(silenceTimer_differentials);
    silenceTimer_differentials = null;
  }

  var current_differentials = event.resultIndex;
 
  // Get a transcript of what was said.
  var transcript_differentials = event.results[current_differentials][0].transcript;
 
  var mobileRepeatBug_differentials = (current_differentials == 1 && transcript_differentials == event.results[0][0].transcript_differentials);
 
  if(!mobileRepeatBug_differentials) {
    noteDifferentials += transcript_differentials;
    differentialstextarea.val(noteDifferentials);
  }
  silenceTimer_differentials = setTimeout(function() {



  }, 1000);

};


$('#start-record-btn-for-differentials').on('click', function(e) {
  if (differentialsContent.length) {
    differentialsContent += ' ';
  }
  recognition_differentials.start();
  });

  differentialstextarea.on('input', function() {
  noteDifferentials = $(this).val();
  })



$('#save-note-btn-for-differentials').on('click', function(e) {
recognition_differentials.stop();
document.getElementById('listeninggif').style.display = 'none';




  setTimeout(function() {

    var recordinginstructionsfordifferentials = $('#recording-instructions-for-differentials');
    recognition_differentials.onstart = function() {recordinginstructionsfordifferentials.text('Microphone is activated. Try speaking into the microphone. Then double click the Submit Question button.');}
    recognition_differentials.onspeechend = function() {
    recordinginstructionsfordifferentials.text(noteDifferentials);//IMPORTANT DO NOT DELETE!!!!
  }
    recognition_differentials.onerror = function(event) {if(event.error == 'no-speech') {recordinginstructionsfordifferentials.text('No speech was detected. Try again.');  };}

  saveNote(new Date().toLocaleString(), noteDifferentials);
  recordinginstructionsfordifferentials.text('Your differentials: '+ noteDifferentials);
  

  var differentialsfinal = $('#differentialsfinal');
  differentialsfinal.text(noteDifferentials);

  //noteSummary = '';
  //renderNotes(getAllNotes());
  //differentialstextarea.val('');
}, 2000);


 document.getElementById('differentials').style.display = 'none';
  document.getElementById('investigations').style.display = 'unset';

  recognition_differentials.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  document.getElementById("mp4_src").src = "WIN_20230328_13_59_37_Pro.mp4"; document.getElementById("myVideo").load();
  document.getElementById('myVideo').onended = function(e) {
  recognition_investigations.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  document.getElementById('save-note-btn-for-investigations').style.display = 'unset';
  }

}
)









/*------enterkey*/

var input = document.getElementById("start-record-btn-for-differentials");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-differentials").click();
}
});

var input = document.getElementById("differentials-textarea");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-differentials").click();
}
});

//this following part makes you write down straight onto the textbox rather than having to click on the textbox.
$(function() {
$('#differentials-textarea').focus();

$(document).on('keydown', function() {
  $('#differentials-textarea').focus();
});
});









/*-----------------------------
        Investigations
 ------------------------------*/


 try {
  var SpeechRecognition_investigations = window.SpeechRecognition_investigations || window.webkitSpeechRecognition;
  var recognition_investigations = new SpeechRecognition_investigations();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}
 

var noteinvestigations = '';
var investigationsContent = '';
var investigationstextarea = $('#investigations-textarea');

 
recognition_investigations.continuous = true;
var silenceTimer_investigations = null;
recognition_investigations.onresult = function(event) {
  if (silenceTimer_investigations) {
    clearTimeout(silenceTimer_investigations);
    silenceTimer_investigations = null;
  }

  var current_investigations = event.resultIndex;
 
  // Get a transcript of what was said.
  var transcript_investigations = event.results[current_investigations][0].transcript;
 
  var mobileRepeatBug_investigations = (current_investigations == 1 && transcript_investigations == event.results[0][0].transcript_investigations);
 
  if(!mobileRepeatBug_investigations) {
    noteinvestigations += transcript_investigations;
    investigationstextarea.val(noteinvestigations);
  }
  silenceTimer_investigations = setTimeout(function() {



  }, 1000);

};


$('#start-record-btn-for-investigations').on('click', function(e) {
  if (investigationsContent.length) {
    investigationsContent += ' ';
  }
  recognition_investigations.start();
  });

  investigationstextarea.on('input', function() {
  noteinvestigations = $(this).val();
  })



$('#save-note-btn-for-investigations').on('click', function(e) {
recognition_investigations.stop();
document.getElementById('listeninggif').style.display = 'none';




  setTimeout(function() {

    var recordinginstructionsforinvestigations = $('#recording-instructions-for-investigations');
    recognition_investigations.onstart = function() {recordinginstructionsforinvestigations.text('Microphone is activated. Try speaking into the microphone. Then double click the Submit Question button.');}
    recognition_investigations.onspeechend = function() {
    recordinginstructionsforinvestigations.text(noteinvestigations);//IMPORTANT DO NOT DELETE!!!!
  }
    recognition_investigations.onerror = function(event) {if(event.error == 'no-speech') {recordinginstructionsforinvestigations.text('No speech was detected. Try again.');  };}

  saveNote(new Date().toLocaleString(), noteinvestigations);
  recordinginstructionsforinvestigations.text('Your investigations: '+ noteinvestigations);
  

  var investigationsfinal = $('#investigationsfinal');
  investigationsfinal.text(noteinvestigations);

  //noteSummary = '';
  //renderNotes(getAllNotes());
  //investigationstextarea.val('');
}, 2000);


 document.getElementById('investigations').style.display = 'none';
  document.getElementById('riskfactors').style.display = 'unset';

  recognition_investigations.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  document.getElementById("mp4_src").src = "WIN_20230328_13_59_37_Pro.mp4"; document.getElementById("myVideo").load();
  document.getElementById('myVideo').onended = function(e) {
  recognition_riskfactors.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  document.getElementById('save-note-btn-for-riskfactors').style.display = 'unset';
  }

}
)









/*------enterkey*/

var input = document.getElementById("start-record-btn-for-investigations");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-investigations").click();
}
});

var input = document.getElementById("investigations-textarea");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-investigations").click();
}
});

//this following part makes you write down straight onto the textbox rather than having to click on the textbox.
$(function() {
$('#investigations-textarea').focus();

$(document).on('keydown', function() {
  $('#investigations-textarea').focus();
});
});









/*-----------------------------
        Riskfactors
 ------------------------------*/


 try {
  var SpeechRecognition_riskfactors = window.SpeechRecognition_riskfactors || window.webkitSpeechRecognition;
  var recognition_riskfactors = new SpeechRecognition_riskfactors();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}
 

var noteriskfactors = '';
var riskfactorsContent = '';
var riskfactorstextarea = $('#riskfactors-textarea');

 
recognition_riskfactors.continuous = true;
var silenceTimer_riskfactors = null;
recognition_riskfactors.onresult = function(event) {
  if (silenceTimer_riskfactors) {
    clearTimeout(silenceTimer_riskfactors);
    silenceTimer_riskfactors = null;
  }

  var current_riskfactors = event.resultIndex;
 
  // Get a transcript of what was said.
  var transcript_riskfactors = event.results[current_riskfactors][0].transcript;
 
  var mobileRepeatBug_riskfactors = (current_riskfactors == 1 && transcript_riskfactors == event.results[0][0].transcript_riskfactors);
 
  if(!mobileRepeatBug_riskfactors) {
    noteriskfactors += transcript_riskfactors;
    riskfactorstextarea.val(noteriskfactors);
  }
  silenceTimer_riskfactors = setTimeout(function() {



  }, 1000);

};


$('#start-record-btn-for-riskfactors').on('click', function(e) {
  if (riskfactorsContent.length) {
    riskfactorsContent += ' ';
  }
  recognition_riskfactors.start();
  });

  riskfactorstextarea.on('input', function() {
  noteriskfactors = $(this).val();
  })



$('#save-note-btn-for-riskfactors').on('click', function(e) {
recognition_riskfactors.stop();
document.getElementById('listeninggif').style.display = 'none';




  setTimeout(function() {

    var recordinginstructionsforriskfactors = $('#recording-instructions-for-riskfactors');
    recognition_riskfactors.onstart = function() {recordinginstructionsforriskfactors.text('Microphone is activated. Try speaking into the microphone. Then double click the Submit Question button.');}
    recognition_riskfactors.onspeechend = function() {
    recordinginstructionsforriskfactors.text(noteriskfactors);//IMPORTANT DO NOT DELETE!!!!
  }
    recognition_riskfactors.onerror = function(event) {if(event.error == 'no-speech') {recordinginstructionsforriskfactors.text('No speech was detected. Try again.');  };}

  saveNote(new Date().toLocaleString(), noteriskfactors);
  recordinginstructionsforriskfactors.text('Your riskfactors: '+ noteriskfactors);
  

  var riskfactorsfinal = $('#riskfactorsfinal');
  riskfactorsfinal.text(noteriskfactors);

  //noteSummary = '';
  //renderNotes(getAllNotes());
  //riskfactorstextarea.val('');
}, 2000);


 document.getElementById('riskfactors').style.display = 'none';
  document.getElementById('treatments').style.display = 'unset';

  recognition_riskfactors.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  document.getElementById("mp4_src").src = "WIN_20230328_13_59_37_Pro.mp4"; document.getElementById("myVideo").load();
  document.getElementById('myVideo').onended = function(e) {
  recognition_treatments.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  document.getElementById('save-note-btn-for-treatments').style.display = 'unset';
  }

}
)




/*------enterkey*/

var input = document.getElementById("start-record-btn-for-riskfactors");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-riskfactors").click();
}
});

var input = document.getElementById("riskfactors-textarea");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-riskfactors").click();
}
});

//this following part makes you write down straight onto the textbox rather than having to click on the textbox.
$(function() {
$('#riskfactors-textarea').focus();

$(document).on('keydown', function() {
  $('#riskfactors-textarea').focus();
});
});



 






/*-----------------------------
        Treatments
 ------------------------------*/


 try {
  var SpeechRecognition_treatments = window.SpeechRecognition_treatments || window.webkitSpeechRecognition;
  var recognition_treatments = new SpeechRecognition_treatments();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}
 

var notetreatments = '';
var treatmentsContent = '';
var treatmentstextarea = $('#treatments-textarea');

 
recognition_treatments.continuous = true;
var silenceTimer_treatments = null;
recognition_treatments.onresult = function(event) {
  if (silenceTimer_treatments) {
    clearTimeout(silenceTimer_treatments);
    silenceTimer_treatments = null;
  }

  var current_treatments = event.resultIndex;
 
  // Get a transcript of what was said.
  var transcript_treatments = event.results[current_treatments][0].transcript;
 
  var mobileRepeatBug_treatments = (current_treatments == 1 && transcript_treatments == event.results[0][0].transcript_treatments);
 
  if(!mobileRepeatBug_treatments) {
    notetreatments += transcript_treatments;
    treatmentstextarea.val(notetreatments);
  }
  silenceTimer_treatments = setTimeout(function() {



  }, 1000);

};


$('#start-record-btn-for-treatments').on('click', function(e) {
  if (treatmentsContent.length) {
    treatmentsContent += ' ';
  }
  recognition_treatments.start();
  });

  treatmentstextarea.on('input', function() {
  notetreatments = $(this).val();
  })



$('#save-note-btn-for-treatments').on('click', function(e) {
recognition_treatments.stop();
document.getElementById('listeninggif').style.display = 'none';




  setTimeout(function() {

    var recordinginstructionsfortreatments = $('#recording-instructions-for-treatments');
    recognition_treatments.onstart = function() {recordinginstructionsfortreatments.text('Microphone is activated. Try speaking into the microphone. Then double click the Submit Question button.');}
    recognition_treatments.onspeechend = function() {
    recordinginstructionsfortreatments.text(notetreatments);//IMPORTANT DO NOT DELETE!!!!
  }
    recognition_treatments.onerror = function(event) {if(event.error == 'no-speech') {recordinginstructionsfortreatments.text('No speech was detected. Try again.');  };}

  saveNote(new Date().toLocaleString(), notetreatments);
  recordinginstructionsfortreatments.text('Your treatments: '+ notetreatments);
  

  var treatmentsfinal = $('#treatmentsfinal');
  treatmentsfinal.text(notetreatments);

  //noteSummary = '';
  //renderNotes(getAllNotes());
  //treatmentstextarea.val('');
}, 2000);


document.getElementById('review-section').style.display = 'unset';
  document.getElementById('taking-history-section').style.display = 'none';
  document.getElementById('taking-history-section-part2').style.display = 'none';
  document.getElementById('move-onto-questions-btn').style.display = 'none';
  
  document.getElementById('examinations').style.display = 'none';
  document.getElementById('summary').style.display = 'none';
  document.getElementById('differentials').style.display = 'none';
  document.getElementById('investigations').style.display = 'none';
  document.getElementById('riskfactors').style.display = 'none';
  document.getElementById('treatments').style.display = 'none';


  document.getElementById('fullscreenvideobackground').style.display = 'unset';
  document.body.style.backgroundColor = 'rgb(209, 228, 236)';
  document.getElementById('logoduringconsultation').style.display = 'none';
  document.getElementById('myVideo').style.display = 'none';

}
)




/*------enterkey*/

var input = document.getElementById("start-record-btn-for-treatments");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-treatments").click();
}
});

var input = document.getElementById("treatments-textarea");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-treatments").click();
}
});

//this following part makes you write down straight onto the textbox rather than having to click on the textbox.
$(function() {
$('#treatments-textarea').focus();

$(document).on('keydown', function() {
  $('#treatments-textarea').focus();
});
});













/*-----------------------------
        Fake Examinations

const txt1 = document.getElementById('examinations-textarea');
const btn1 = document.getElementById('save-examinations');
const out1 = document.getElementById('output1');

 function fun1() {
  if (txt1.value.includes('cardi')||txt1.value.includes('heart')){
    out1.innerHTML = txt1.value + ' is CORRECT';

  }
  else{
    out1.innerHTML = txt1.value + ' may be correct, however it is not in our model answers, however it does not necessarily mean your answer is incorrect as long as you are able to justify your reasoning. You may try again if you would like';

    var examinationsfinal = $('#examinationsfinal');
    examinationsfinal.text(txt1.value);
    
  }

 }//end of function called fun1

 btn1.addEventListener('click', fun1);

 //Enter key
 var input = document.getElementById("examinations-textarea");
 input.addEventListener("keypress", function(event) {
   if (event.key === "Enter") {
     event.preventDefault();
     document.getElementById("save-examinations").click();
   }
 });

 ------------------------------*/

/*-----------------------------
        Examination findings (as in what the patient has on examination)
 

 

 const examfindingsbtn = document.getElementById('examfindings-btn');
 const messageofexaminationfindings = document.getElementById('messageofexaminationfindings');

function examinationfindings(){
  messageofexaminationfindings.innerHTML = "let go";
}
examfindingsbtn.addEventListener('click', examinationfindings);


------------------------------*/






 
/*-----------------------------
        differentials
 


//DIFFERENTIAL 1

 const txt1s = document.getElementById('differential1-textarea');
 const btn1s = document.getElementById('save-d1');
 const out1s = document.getElementById('output10');
 
  function fun1s() {
   if (txt1s.value.includes('MI')||txt1s.value.includes('heart attack')){
     out1s.innerHTML = txt1s.value + ' is CORRECT';
 
   }
   else{
     out1s.innerHTML = txt1s.value + ' may be correct, however it is not in our model answers, however it does not necessarily mean your answer is incorrect as long as you are able to justify your reasoning. You may try again if you would like';
 
   }
 
  }//end of function called fun1s
 
  btn1s.addEventListener('click', fun1s);

------------------------------*/

/*----enterkey

var input = document.getElementById("differential1-textarea");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("save-d1").click();
  }
});




//DIFFERENTIAL 2
const txt2s = document.getElementById('differential2-textarea');
const btn2s = document.getElementById('save-d2');
const out2s = document.getElementById('output2');

 function fun2s() {
  if (txt2s.value.includes('MI')||txt2s.value.includes('heart attack')){
    out2s.innerHTML = txt2s.value + ' is CORRECT';

  }
  else{
    out2s.innerHTML = txt2s.value + ' may be correct, however it is not in our model answers, however it does not necessarily mean your answer is incorrect as long as you are able to justify your reasoning. You may try again if you would like';

  }

 }//end of function called fun1s

 btn2s.addEventListener('click', fun2s);
*/
/*----enterkey*

var input = document.getElementById("differential2-textarea");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("save-d2").click();
  }
});







 //DIFFERENTIAL 3
const txt3s = document.getElementById('differential3-textarea');
const btn3s = document.getElementById('save-d3');
const out3s = document.getElementById('output3');

 function fun3s() {
  if (txt3s.value.includes('MI')||txt3s.value.includes('heart attack')){
    out3s.innerHTML = txt3s.value + ' is CORRECT';

  }
  else{
    out3s.innerHTML = txt3s.value + ' may be correct, however it is not in our model answers, however it does not necessarily mean your answer is incorrect as long as you are able to justify your reasoning. You may try again if you would like';

  }
  var differentialsfinal = $('#differentialsfinal');
  differentialsfinal.text(txt1s.value + ', ' + txt2s.value + ', ' + txt3s.value);


 }//end of function called fun1s

 btn3s.addEventListener('click', fun3s);
/
/*----enterkey

var input = document.getElementById("differential3-textarea");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("save-d3").click();
  }
});

*/



/*-----------------------------
        Blood tests to do
 ------------------------------


 try {
  var SpeechRecognition2 = window.SpeechRecognition2 || window.webkitSpeechRecognition;
  var recognition2 = new SpeechRecognition2();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}
 


var noteSummary2 = '';
var summaryContent2 = '';
var summarytextarea2 = $('#summary-textareatwo');

 
 
recognition2.continuous = true;
 
recognition2.onresult = function(event) {
 
  var current2 = event.resultIndex;
 
  // Get a transcript of what was said.
  var transcript2 = event.results[current2][0].transcript;
 
  var mobileRepeatBug2 = (current2 == 1 && transcript2 == event.results[0][0].transcript2);
 
  if(!mobileRepeatBug2) {
    noteSummary2 += transcript2;
    summarytextarea2.val(noteSummary2);
  }
};
 

var recordinginstructionsforsummary2 = $('#recording-instructions-for-blood');

recognition2.onstart = function() {
  recordinginstructionsforsummary2.text('Microphone is activated. Try speaking into the microphone. Then double click the Submit Question button.');
}
 
recognition2.onspeechend = function() {
  recordinginstructionsforsummary2.text('DOUBLE CLICK THE SUBMIT BUTTON. (Once you get the response, press the Microphone button to ask another question)');
}
 
recognition2.onerror = function(event) {
  if(event.error == 'no-speech') {
    recordinginstructionsforsummary2.text('No speech was detected. Try again.');  
  };
}





$('#start-record-btn-for-blood').on('click', function(e) {
if (summaryContent2.length) {
  summaryContent2 += ' ';
}
recognition2.start();
});


summarytextarea2.on('input', function() {
noteSummary2 = $(this).val();
})


$('#save-note-btn-for-blood').on('click', function(e) {
recognition2.stop();
document.getElementById('listeninggif').style.display = 'none';

if(!noteSummary2.length) {
  recordinginstructionsforsummary2.text('Could not save empty note. Please add a message to your note.');
}
else {
  // Save note to localStorage.
  // The key is the dateTime with seconds, the value is the content of the note.
  
  saveNote(new Date().toLocaleString(), noteSummary2);
  recordinginstructionsforsummary2.text('You said: '+ noteSummary2);


  var bloodtestsfinal = $('#bloodtestsfinal');
  bloodtestsfinal.text(noteSummary2);

  //noteSummary = '';
  //renderNotes(getAllNotes());
  summarytextarea2.val('');
}
})
*/

/*------enterkey

var input = document.getElementById("start-record-btn-for-blood");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("save-note-btn-for-blood").click();
  }
});

var input = document.getElementById("summary-textareatwo");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("save-note-btn-for-blood").click();
  }
});


//this following part makes you write down straight onto the textbox rather than having to click on the textbox.
$(function() {
  $('#summary-textareatwo').focus();

  $(document).on('keydown', function() {
    $('#summary-textareatwo').focus();
  });
});

*/




/*-----------------------------
        riskfactors
 ------------------------------*/


 try {
  var SpeechRecognition4 = window.SpeechRecognition4 || window.webkitSpeechRecognition;
  var recognition4 = new SpeechRecognition4();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}
 


var noteSummary4 = '';
var summaryContent4 = '';
var summarytextarea4 = $('#riskfactors-textarea');

 
 
recognition4.continuous = true;
 
recognition4.onresult = function(event) {
 
  var current4 = event.resultIndex;
 
  // Get a transcript of what was said.
  var transcript4 = event.results[current4][0].transcript;
 
  var mobileRepeatBug4 = (current4 == 1 && transcript4 == event.results[0][0].transcript4);
 
  if(!mobileRepeatBug4) {
    noteSummary4 += transcript4;
    summarytextarea4.val(noteSummary4);
  }
};
 

var recordinginstructionsforsummary4 = $('#recording-instructions-for-riskfactors');

recognition4.onstart = function() {
  recordinginstructionsforsummary4.text('Microphone is activated. Try speaking into the microphone. Then double click the Submit Question button.');
}
 
recognition4.onspeechend = function() {
  recordinginstructionsforsummary4.text('DOUBLE CLICK THE SUBMIT BUTTON. (Once you get the response, press the Microphone button to ask another question)');
}
 
recognition4.onerror = function(event) {
  if(event.error == 'no-speech') {
    recordinginstructionsforsummary4.text('No speech was detected. Try again.');  
  };
}





$('#start-record-btn-for-riskfactors').on('click', function(e) {
if (summaryContent4.length) {
  summaryContent4 += ' ';
}
recognition4.start();
});


summarytextarea4.on('input', function() {
noteSummary4 = $(this).val();
})


$('#save-note-btn-for-riskfactors').on('click', function(e) {
recognition4.stop();

if(!noteSummary4.length) {
  recordinginstructionsforsummary4.text('Could not save empty note. Please add a message to your note.');
}
else {
  // Save note to localStorage.
  // The key is the dateTime with seconds, the value is the content of the note.
  
  saveNote(new Date().toLocaleString(), noteSummary4);
  recordinginstructionsforsummary4.text('You said: '+ noteSummary4);


  var riskfactorsfinal = $('#riskfactorsfinal');
  riskfactorsfinal.text(noteSummary4);

  //noteSummary = '';
  //renderNotes(getAllNotes());
  summarytextarea4.val('');
}
})

/*------enterkey*/

var input = document.getElementById("start-record-btn-for-riskfactors");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("save-note-btn-for-riskfactors").click();
  }
});

var input = document.getElementById("riskfactors-textarea");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("save-note-btn-for-riskfactors").click();
  }
});


//this following part makes you write down straight onto the textbox rather than having to click on the textbox.
$(function() {
  $('#riskfactors-textarea').focus();

  $(document).on('keydown', function() {
    $('#riskfactors-textarea').focus();
  });
});



/*-----------------------------
      Saving the riskfactors answers
------------------------------*/

/*

const txt4_blood = document.getElementById('riskfactors-textarea');
const btn4_blood = document.getElementById('save-note-btn-for-riskfactors');
const out4_blood = document.getElementById('recording-instructions-for-riskfactors');

function riskfactorss() {
if (txt4_blood.value.includes('cardi')||txt4_blood.value.includes('heart')){
  out4_blood.innerHTML = txt4_blood.value + ' is CORRECT';

}
else{
  out4_blood.innerHTML = txt4_blood.value + ' may be correct, however it is not in our model answers, however it does not necessarily mean your answer is incorrect as long as you are able to justify your reasoning. You may try again if you would like';

}

}//end of function called fun1

btn4_blood.addEventListener('click', riskfactorss); 

*/










/*-----------------------------
        treatments
 ------------------------------*/


 try {
  var SpeechRecognition5 = window.SpeechRecognition5 || window.webkitSpeechRecognition;
  var recognition5 = new SpeechRecognition5();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}
 


var noteSummary5 = '';
var summaryContent5 = '';
var summarytextarea5 = $('#treatments-textarea');

 
 
recognition5.continuous = true;
 
recognition5.onresult = function(event) {
 
  var current5 = event.resultIndex;
 
  // Get a transcript of what was said.
  var transcript5 = event.results[current5][0].transcript;
 
  var mobileRepeatBug5 = (current5 == 1 && transcript5 == event.results[0][0].transcript5);
 
  if(!mobileRepeatBug5) {
    noteSummary5 += transcript5;
    summarytextarea5.val(noteSummary5);
  }
};
 

var recordinginstructionsforsummary5 = $('#recording-instructions-for-treatments');

recognition5.onstart = function() {
  recordinginstructionsforsummary5.text('Microphone is activated. Try speaking into the microphone. Then double click the Submit Question button.');
}
 
recognition5.onspeechend = function() {
  recordinginstructionsforsummary5.text('DOUBLE CLICK THE SUBMIT BUTTON. (Once you get the response, press the Microphone button to ask another question)');
}
 
recognition5.onerror = function(event) {
  if(event.error == 'no-speech') {
    recordinginstructionsforsummary5.text('No speech was detected. Try again.');  
  };
}





$('#start-record-btn-for-treatments').on('click', function(e) {
if (summaryContent5.length) {
  summaryContent5 += ' ';
}
recognition5.start();
});


summarytextarea5.on('input', function() {
noteSummary5 = $(this).val();
})


$('#save-note-btn-for-treatments').on('click', function(e) {
recognition5.stop();

if(!noteSummary5.length) {
  recordinginstructionsforsummary5.text('Could not save empty note. Please add a message to your note.');
}
else {
  // Save note to localStorage.
  // The key is the dateTime with seconds, the value is the content of the note.
  
  saveNote(new Date().toLocaleString(), noteSummary5);
  recordinginstructionsforsummary5.text('You said: '+ noteSummary5);


  var treatmentsfinal = $('#treatmentsfinal');
  treatmentsfinal.text(noteSummary5);

  //noteSummary = '';
  //renderNotes(getAllNotes());
  summarytextarea5.val('');
}
})

/*------enterkey*/

var input = document.getElementById("start-record-btn-for-treatments");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("save-note-btn-for-treatments").click();
  }
});

var input = document.getElementById("treatments-textarea");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("save-note-btn-for-treatments").click();
  }
});


//this following part makes you write down straight onto the textbox rather than having to click on the textbox.
$(function() {
  $('#treatments-textarea').focus();

  $(document).on('keydown', function() {
    $('#treatments-textarea').focus();
  });
});




/*-----------------------------
      Saving the treatments answers
------------------------------*/

/*

const txt5_blood = document.getElementById('treatments-textarea');
const btn5_blood = document.getElementById('save-note-btn-for-treatments');
const out5_blood = document.getElementById('recording-instructions-for-treatments');

function treatmentss() {
if (txt5_blood.value.includes('cardi')||txt5_blood.value.includes('heart')){
  out5_blood.innerHTML = txt5_blood.value + ' is CORRECT';

}
else{
  out5_blood.innerHTML = txt5_blood.value + ' may be correct, however it is not in our model answers, however it does not necessarily mean your answer is incorrect as long as you are able to justify your reasoning. You may try again if you would like';

}

}//end of function called fun1

btn5_blood.addEventListener('click', treatmentss); 

*/








/*-----------------------------
      FinalReview
------------------------------*/


/*const finalreviewbtn = document.getElementById('finalreview-btn');

function finalreviewss() {


var summaryfinal = $('#summaryfinal');
summaryfinal.text(noteSummary);


var differentialsfinal = $('#differentialsfinal');
differentialsfinal.text(txt1s.value + ', ' + txt2s.value + ', ' + txt3s.value);



var examinationsfinal = $('#examinationsfinal');
examinationsfinal.text(txt1.value);


var bloodtestsfinal = $('#bloodtestsfinal');
bloodtestsfinal.text(noteSummary2);


var otherinvestigationsfinal = $('#otherinvestigationsfinal');
otherinvestigationsfinal.text(noteSummary3);


var riskfactorsfinal = $('#riskfactorsfinal');
riskfactorsfinal.text(noteSummary4);


var treatmentsfinal = $('#treatmentsfinal');
treatmentsfinal.text(noteSummary5);
*/







var summarymodel = $('#summarymodel');
summarymodel.text('model');

var differentialsmodel = $('#differentialsmodel'); differentialsmodel.text('● Acute Coronary Syndrome (I.e. Myocardial infarction/heart attack)');
var differentialsmodel2 = $('#differentialsmodel2'); differentialsmodel2.text('● Costochondritis');
var differentialsmodel3 = $('#differentialsmodel3'); differentialsmodel3.text('● Unstable angina');
var differentialsmodel4 = $('#differentialsmodel4'); differentialsmodel4.text('● Anxiety attack/panic disorder');


var examinationsmodel = $('#examinationsmodel'); examinationsmodel.text('● Cardiac exam');
var examinationsmodel2 = $('#examinationsmodel2'); examinationsmodel2.text('● If the patient comes in acutely, you should do an ABCDE assessment');
var examinationsmodel3 = $('#examinationsmodel3'); examinationsmodel3.text('● If the patient is unconscious and not breathing, you should start CPR and chest compressions');
var examinationsmodel4 = $('#examinationsmodel4'); examinationsmodel4.text('● You could also perform a respiratory exam to rule out pneumonia andother potential causes of chest pain');



var bloodtestsmodel = $('#bloodtestsmodel'); bloodtestsmodel.text('● Full Blood Count');
var bloodtestsmodel2 = $('#bloodtestsmodel2'); bloodtestsmodel2.text('● Urea and Electrolytes');
var bloodtestsmodel3 = $('#bloodtestsmodel3'); bloodtestsmodel3.text('● Troponin');
var bloodtestsmodel4 = $('#bloodtestsmodel4'); bloodtestsmodel4.text('● Pro-BNP');
var bloodtestsmodel5 = $('#bloodtestsmodel5'); bloodtestsmodel5.text('● Thyroid Function Tests');




var otherinvestigationsmodel = $('#otherinvestigationsmodel'); otherinvestigationsmodel.text('● ECG');
var otherinvestigationsmodel2 = $('#otherinvestigationsmodel2'); otherinvestigationsmodel2.text('● Chest X-ray');
var otherinvestigationsmodel3 = $('#otherinvestigationsmodel3'); otherinvestigationsmodel3.text('● Check blood pressure, in both arms too (to rule out aortic disseaction)');
var otherinvestigationsmodel4 = $('#otherinvestigationsmodel4'); otherinvestigationsmodel4.text('● ECHO - To look for any complications of a heart attack such as heart failure');
var otherinvestigationsmodel5 = $('#otherinvestigationsmodel5'); otherinvestigationsmodel5.text('● Check the temperature - To rule out pneumonia and other infective causes');

var riskfactorsmodel = $('#riskfactorsmodel');
riskfactorsmodel.text('model');

var treatmentsmodel = $('#treatmentsmodel');
treatmentsmodel.text('model');



//}



//finalreviewbtn.addEventListener('click', finalreviewss);




/*-----------------------------------------------------
    trial = false;
    var test = $('#test');
     if (noteContent.includes("job")){
       //test.text('all of this works');
       trial = true;
     }
     
     if (trial === true){
       test.text('YES he asked about job');
     }
-------------------------------------------------------*/




/*-----------------------------
        Quiz
 ------------------------------*/


window.onload = function () {
  
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
  
     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        'If a patient with ST elevation MI was one and a half hours away from the nearest PCI center, what would you do?' : ['- Cardiovert them', '- Send them to PCI', '- Wait till the on call cardiologist comes along', 1],
        
        'What dose of aspirin should a patient be started on after having had an MI?' : ['- 200mg', '- 500mg' , '- 800mg', 2],
        
        'What is the first line investigation of angina? ' : ['- It is a clinical diagnosis', '- Chest X ray', '- ECG', 0],


      };
      
  function loadQuestion(curr) {
  // This function loads all the question into the questionArea
  // It grabs the current question based on the 'current'-variable
  
    var question = Object.keys(allQuestions)[curr];
    
    questionArea.innerHTML = '';
    questionArea.innerHTML = question;    
  }
  
  function loadAnswers(curr) {
  // This function loads all the possible answers of the given question
  // It grabs the needed answer-array with the help of the current-variable
  // Every answer is added with an 'onclick'-function
  
    var answers = allQuestions[Object.keys(allQuestions)[curr]];
    
    answerArea.innerHTML = '';
    
    for (var i = 0; i < answers.length -1; i += 1) {
      var createDiv = document.createElement('div'),
          text = document.createTextNode(answers[i]);
      
      createDiv.appendChild(text);      
      createDiv.addEventListener("click", checkAnswer(i, answers));
      
      
      answerArea.appendChild(createDiv);
    }
  }
  
  function checkAnswer(i, arr) {
    // This is the function that will run, when clicked on one of the answers
    // Check if givenAnswer is sams as the correct one
    // After this, check if it's the last question:
    // If it is: empty the answerArea and let them know it's done.
    
    return function () {
      var givenAnswer = i,
          correctAnswer = arr[arr.length-1];
      
      if (givenAnswer === correctAnswer) {
        addChecker(true);             
      } else {
        addChecker(false);                        
      }
      
      if (current < Object.keys(allQuestions).length -1) {
        current += 1;
        
        loadQuestion(current);
        loadAnswers(current);
      } else {
        questionArea.innerHTML = 'Review:' + '<br />' + '<br />' +'Q1:'+ '<br />' +'If the patient is less than 1.5hrs away from PCI, then take them to PCI' + '<br />' + '<br />' + 
        'Q2:' + '<br />' + '800mg is the dose of aspirin you give after an MI' + '<br />' + '<br />' +
        'Q3:'+ '<br />' + 'The first line investigation for angina is a clinical diagnosis';
        answerArea.innerHTML = '';
      }
                              
    };
  }
  
  function addChecker(bool) {
  // This function adds a div element to the page
  // Used to see if it was correct or false
  
    var createDiv = document.createElement('div'),
        txt       = document.createTextNode(current + 1);
    
    createDiv.appendChild(txt);
    
    if (bool) {
      
      createDiv.className += 'correct';
      checker.appendChild(createDiv);
    } else {
      createDiv.className += 'false';
      checker.appendChild(createDiv);
    }
  }
  
  
  // Start the quiz right away
  loadQuestion(current);
  loadAnswers(current);
  
};























/*





//links
//http://eloquentjavascript.net/09_regexp.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions


var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = 'Mark', //name of the chatbot
  talking = true; //when false the speach function doesn't work
//
//
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//edit this function to change what the chatbot says
function chatbotResponse() {
  talking = true;
  botMessage = "I'm confused"; //the default message

  if (lastUserMessage === 'hi' || lastUserMessage =='hello') {
    const hi = ['hi','howdy','hello']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }

  if (lastUserMessage === 'name') {
    botMessage = 'My name is ' + botName;
  }
}
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//
//
//
//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
  //if the message from the user isn't empty then run 
  if (document.getElementById("chatbox").value != "") {
    //pulls the value from the chatbox ands sets it to lastUserMessage
    lastUserMessage = document.getElementById("chatbox").value;
    //sets the chat box to be clear
    document.getElementById("chatbox").value = "";
    //adds the value of the chatbox to the array messages
    messages.push(lastUserMessage);
    //Speech(lastUserMessage);  //says what the user typed outloud
    //sets the variable botMessage in response to lastUserMessage
    chatbotResponse();
    //add the chatbot's name and message to the array messages
    messages.push("<b>" + botName + ":</b> " + botMessage);
    // says the message using the text to speech function written below
    Speech(botMessage);
    //outputs the last few array elements of messages to html
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}

//text to Speech
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    //msg.voice = voices[10]; // Note: some voices don't support altering params
    //msg.voiceURI = 'native';
    //utterance.volume = 1; // 0 to 1
    //utterance.rate = 0.1; // 0.1 to 10
    //utterance.pitch = 1; //0 to 2
    //utterance.text = 'Hello World';
    //utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
      //document.getElementById("chatbox").value = lastUserMessage;
  }
}

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}




/*-----------------------------
        treatments
 ------------------------------*/
/*

 try {
  var SpeechRecognitionz = window.SpeechRecognitionz || window.webkitSpeechRecognition;
  var recognitionz = new SpeechRecognitionz();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}
 


var noteSummaryz = '';
var summaryContentz = '';
var summarytextareaz = $('#chatbox');

 
 
recognitionz.continuous = true;
 
recognitionz.onresult = function(event) {
 
  var currentz = event.resultIndex;
 
  // Get a transcript of what was said.
  var transcriptz = event.results[currentz][0].transcript;
 
  var mobileRepeatBugz = (currentz == 1 && transcriptz == event.results[0][0].transcriptz);
 
  if(!mobileRepeatBugz) {
    noteSummaryz += transcriptz;
    summarytextareaz.val(noteSummaryz);
  }
};
 

var recordinginstructionsforsummaryz = $('#recording-instructionsz');

recognitionz.onstart = function() {
  recordinginstructionsforsummaryz.text('Microphone is activated. Try speaking into the microphone. Then double click the Submit Question button.');
}
 
recognitionz.onspeechend = function() {
  recordinginstructionsforsummaryz.text('DOUBLE CLICK THE SUBMIT BUTTON. (Once you get the response, press the Microphone button to ask another question)');
}
 
recognitionz.onerror = function(event) {
  if(event.error == 'no-speech') {
    recordinginstructionsforsummaryz.text('No speech was detected. Try again.');  
  };
}





$('#start-record-btnz').on('click', function(e) {
if (summaryContentz.length) {
  summaryContentz += ' ';
}
recognitionz.start();
});


summarytextareaz.on('input', function() {
noteSummaryz = $(this).val();
})


$('#save-note-btnz').on('click', function(e) {
recognitionz.stop();

if(!noteSummaryz.length) {
  recordinginstructionsforsummaryz.text('Could not save empty note. Please add a message to your note.');
}
else {
  // Save note to localStorage.
  // The key is the dateTime with seconds, the value is the content of the note.
  
  saveNote(new Date().toLocaleString(), noteSummaryz);
  recordinginstructionsforsummaryz.text('You said: '+ noteSummaryz);

  //noteSummary = '';
  //renderNotes(getAllNotes());
  summarytextareaz.val('');
}
})


noteSummaryz = '';
renderNotes(getAllNotes());
noteSummaryz.val('');

*/
