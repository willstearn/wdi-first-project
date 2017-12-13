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
      hint1:'hint first',
      hint2:'hint second',
      hint3:'hint third'
    },
    {
      word:words[1],
      hint1:'hint first',
      hint2:'hint second',
      hint3:'hint third'
    }

  ];
  var originalWord = null;
  var intervalStart = null;
  var score = 0;
  var timer = 59;
  var timeBoard=$('#time');
  var hint = null;
  var reward = null;
  var energyBar=$('#filling');
  var energy= 0;
  // $("#hint1-button").hide();
  $("#hint2-button").hide();
  $("#hint3-button").hide();
  // $('#hint1').hide();
  $('#hint2').hide();
  $('#hint3').hide();


  // gets a random word (originalWord) from array of words (wordsArray)
  function play() {
    $('.question').empty();
    var randomNumber = Math.floor(Math.random() * 2);
    originalWord = words[randomNumber];
    console.log(originalWord);

    function updateTimer(){
      timer=59;
      timeInterval=setInterval(tim,1000);

    }
    function tim(){
      timeBoard.empty()
      timeBoard.append(timer);
      timer=timer-1;
    }

    // shuffles (shuffled) the original word (originalWord)
    var shuffled = originalWord.split('').sort(function() {
      return 0.5 - Math.random();
    }).join('');
    console.log(shuffled);

    // appends the shuffled word (shuffledWord) to table data cells
    for(let i=0;i<shuffled.length;i++) {
      var shuffledWord=shuffled.split('');
      $('.question').append("<td id='letter'>"+shuffledWord[i]+"</td>");
    }
    updateTimer();

    console.log(shuffledWord);
  }
  // checks answer (checkAnswer) submitted by user against original word (originalWord)
  function checkAnswer() {
    var ans = $('#answer').val();
    if(ans === originalWord) {
      updateEnergy();
      isWin();
    } else {
      window.alert('Sorry! Try again');
    }
    //play();
    //intervalStart=setInterval(play,15000);
  }





  $('.submit').click(function() {
    checkAnswer();
    $('#answer').val('');

  });

  // function updateScore() {
  //   score=score+10; // use the score variable to update the css height of the inner energy bar div
  //   $('#score').innerHTML=score;
  // }

  function updateEnergy(){
    energy=energy+40;
    energyBar.css({"width":energy+"%"});
  }
  updateEnergy();


  // sets interval of emptying table to 15s
  intervalStart = setInterval(play,15000);
  play();

  clearInterval(intervalStart);

  function isWin(){
    if(energy>=100){
      window.alert("you win");
      clearInterval(timer);
      clearInterval(intervalStart);
    }

  }

});
