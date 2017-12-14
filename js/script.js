$(() => {

  // var words = [
  //    {
  //      word: ‘word1’,
  //      hint1: ‘hint1A’
  //      hint2: ‘hintB’
  //       hint3: ‘hintC’
  //    }
  //   ];

  var words = ['vitriolic','specious','platitude','conceited','obtuse','assiduous','portend','hubris','incandescent','entreaty','loquacious','fatuous','prophylaxis','obsequious','groundswell','vapid','resonate','excoriates','sequestered','commendable','misgivings','askance','parsimonious','parlous','decorum','perfunctory','acerbic','obstreperous','pejorative','jettison','deference','ebullient','inveterate','fascile','mainspring','circumspect','martial','yardstick','scintilla','bootstrap','assinine','taciturn','carousing','pernicious','pastiche','retrograde','cavalier','abstruse','propitiate','hackneyed','hoodwink','jaundiced','earmark','mainstay','nettlesome','redolent','frogmarch','doyenne','magnanimous','lilliputian','vaudevillian','admonish','moribund','pallid','fastidious','sanguine','delineate','capricious','restitution','megalomania','corraled','vacillate','gregarious','specious','vertiginous','remiss','flippant','lascivious','apopleptic','axiomatic'];
  var obj=[
    {
      word:words[0],
      hint1:'first letter is v',
      hint2:'bitter. e.g. _________ attacks on the politicians',
      hint3:'last letter is c'
    },
    {
      word:words[1],
      hint1:'first letter is s',
      hint2:'plausible but wrong. e.g. a ________ argument',
      hint3:'last letter is s'
    },
    {
      word:words[2],
      hint1:'first letter is p',
      hint2:'un-interesting comment. e.g. she began uttering liberal __________',
      hint3:'last letter is e'
    },
    {
      word:words[3],
      hint1:'first letter is c',
      hint2:'proudly vain. e.g. Ben is so _________',
      hint3:'last letter is d'
    },
    {
      word:words[4],
      hint1:'first letter is o',
      hint2:'annoyingly insensitive. e.g. the doctor was being _________',
      hint3:'last letter is e'
    },
    {
      word:words[5],
      hint1:'first letter is a',
      hint2: 'showing great care and perseverance. e.g. she was __________ in her work',
      hint3:'last letter is s'
    },
    {
      word:words[6],
      hint1:'first letter is p',
      hint2: 'sign or warning. e.g. the eclipses _______ some major events',
      hint3:'last letter is d'
    },
    {
      word:words[7],
      hint1:'first letter is h',
      hint2:'excessive pride or self-confidence. e.g. economists are filled with _________',
      hint3:'last letter is s'
    },
    {
      word:words[8],
      hint1:'first letter is i',
      hint2: 'full of strong emotion. e.g. __________ with rage',
      hint3:'last letter is t'
    },
    {
      word:words[9],
      hint1:'first letter is e',
      hint2: 'earnest or humble request. e.g. the king was deaf to his _______',
      hint3:'last letter is y'
    },
    {
      word:words[10],
      hint1:'first letter is l',
      hint2:'tending to talk a great deal. e.g. never lost for words, Emily is _________',
      hint3:'last letter is s'
    },
  ];
  var originalWord = null;
  var intervalStart = null;
  var score = -1;
  var timer = 59;
  var timeBoard=$('#time');
  var hint = null;
  var reward = null;
  var energyBar=$('#filling');
  var energy= 0;
  var lives = null;
  var firstTime = false;
  var scoreBoard=$('#score');
  var timeBoard=$('#time');
  // $("#hint1-button").hide();
  $("#hint2-button").hide();
  $("#hint3-button").hide();
  // $('#hint1').hide();
  $('#hint2').hide();
  $('#hint3').hide();



updateTimer()
updateEnergy();
updateSc();

function updateEnergy(){
  energy=energy+40;
  energyBar.css({"width":energy+"%"});
}

function updateSc(){
  score=score+1;
  scoreBoard.empty()
  scoreBoard.append(score);
}

function isWin(){
  if(energy>=100){
    window.alert("Great effort! Play again?");
    clearInterval(timer);
    clearInterval(intervalStart);
  }

}
function updateTimer(){
  if(timer<=0){
      clearInterval(setInterval);
    }
  timer=59;
  timeInterval=setInterval(tim,1000);


}
function tim(){
  timeBoard.empty()
  timeBoard.append(timer);
  timer=timer-1;
console.log(timer);
}




function play() {
  $('.question').empty();
  if(firstTime==true){
    clearInterval(timeInterval);
  };
  firstTime=true;
  var randomNumber = Math.floor(Math.random() * 11);
  originalWord = words[randomNumber];
  console.log(originalWord);






  var shuffled = originalWord.split('').sort(function() {
    return 0.5 - Math.random();
  }).join('');
  console.log(shuffled);

  for(let i=0;i<shuffled.length;i++) {
    var shuffledWord=shuffled.split('');
    $('.question').append("<td id='letter'>"+shuffledWord[i]+"</td>");
  }

  console.log(shuffledWord);
}

function checkAnswer() {
  var ans = $('#answer').val();
  if(ans === originalWord) {
    updateEnergy();
    updateSc();
    isWin();
    clearInterval(timeInterval);
    updateTimer();
    play();
    intervalStart=setInterval(play,60000);
  } else {
    window.alert("The answer is" + " " + originalWord);
  }

}


$('.submit').click(function() {
  checkAnswer();
  $('#answer').val('');

});
intervalStart = setInterval(play,61000);
play();

});
