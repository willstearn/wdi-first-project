$(() => {

  var words = ['vitriolic','specious','platitude','conceited','obtuse','pernicious','flippant','hubris','pejorative','moribund','loquacious','perfunctory','fatuous','facile','capricious','prophylaxis','obsequious','groundswell','vapid','resonate','excoriates','sequestered','commendable','misgivings','askance','parsimonious','parlous','decorum','acerbic','obstreperous','incandescent','jettison','deference','ebullient','inveterate','mainspring','circumspect','martial','yardstick','scintilla','bootstrap','assinine','taciturn','carousing','assiduous','pastiche','retrograde','cavalier','abstruse','propitiate','hackneyed','hoodwink','jaundiced','earmark','mainstay','nettlesome','redolent','frogmarch','doyenne','magnanimous','lilliputian','vaudevillian','admonish','entreaty','pallid','fastidious','sanguine','delineate','restitution','megalomania','corraled','vacillate','gregarious','specious','vertiginous','remiss','portend','lascivious','apopleptic','axiomatic'];
  var obj=[
    {
      word: words[0],
      hint1: 'bitter. e.g. _________ attacks on the politicians',
      hint2: 'first letter is v',
      hint3: 'last letter is c'
    },
    {
      word: words[1],
      hint1: 'plausible but wrong. e.g. a ________ argument',
      hint2: 'first letter is s',
      hint3: 'last letter is s'
    },
    {
      word: words[2],
      hint1: 'un-interesting comment. e.g. she began uttering liberal __________',
      hint2: 'first letter is p',
      hint3: 'last letter is e'
    },
    {
      word: words[3],
      hint1: 'proudly vain. e.g. Trump is so _________',
      hint2: 'first letter is c',
      hint3: 'last letter is d'
    },
    {
      word: words[4],
      hint1: 'annoyingly insensitive. e.g. the doctor was being _________',
      hint2: 'first letter is o',
      hint3: 'last letter is e'
    },
    {
      word: words[5],
      hint1: 'subtly harmful. e.g. the __________ influences of the mass media',
      hint2: 'first letter is p',
      hint3: 'last letter is s'
    },
    {
      word: words[6],
      hint1: 'not showing a serious or respectful attitude. e.g. a flippant remark',
      hint2: 'first letter is f',
      hint3: 'last letter is t'
    },
    {
      word: words[7],
      hint1: 'excessive pride or self-confidence. e.g. economists are filled with _________',
      hint2: 'first letter is h',
      hint3: 'last letter is s'
    },
    {
      word: words[8],
      hint1: 'expressing contempt. e.g. permissiveness is almost always used as a __________ term',
      hint2: 'first letter is p',
      hint3: 'last letter is e'
    },
    {
      word: words[9],
      hint1: 'in terminal decline. e.g. the countrys ________ shipbuilding industry',
      hint2: 'first letter is m',
      hint3: 'last letter is d'
    },
    {
      word: words[10],
      hint1: 'tending to talk a great deal. e.g. never lost for words, Emily is _________',
      hint2: 'first letter is l',
      hint3: 'last letter is s'
    },
    {
      word: words[11],
      hint1: 'carried out without real interest. e.g. he gave a __________ nod',
      hint2: 'first letter is p',
      hint3: 'last letter is y'
    },
    {
      word: words[12],
      hint1: 'silly and pointless. e.g. a _______ comment',
      hint2: 'first letter is f',
      hint3: 'last letter is s'
    },
    {
      word: words[13],
      hint1: 'ignoring the true complexities of an issue. e.g. ______ generalizations',
      hint2: 'first letter is f',
      hint3: 'last letter is e'
    },
    {
      word: words[14],
      hint1: 'given to sudden changes of mood or behaviour. e.g. a __________ boss',
      hint2: 'first letter is c',
      hint3: 'last letter is s'
    }
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
  var audio = document.getElementById('audio');

  $('#hint1-button').click(function(){
    showHint(1);
  });
  $('#hint2-button').click(function(){
    showHint(2);
  });
  $('#hint3-button').click(function(){
    showHint(3);
  });

  function initializer(){
    $('#hint1-button').hide();
    $('#hint2-button').hide();
    $('#hint3-button').hide();
    $('#hint1').hide();
    $('#hint2').hide();
    $('#hint3').hide();
    updateTimer();
  }

  updateEnergy();
  updateSc();

  function updateEnergy(){
    energy=energy+10;
    energyBar.css({"width":energy+"%"});
  }

  function updateSc(){
    score=score+1;
    scoreBoard.empty()
    scoreBoard.append(score);
  }

  function giveAnswer() {
    window.alert("The answer is" + " " + originalWord);
  }

  function isWin(){
    if(energy>=100){
      window.alert('Great effort! Play again?');
      location.reload();
      clearInterval(timer);
      clearInterval(intervalStart);
    }
  }

  function updateTimer(){
    if(timer<=0){
      giveAnswer();
      clearInterval(setInterval);
    }
    timer=59;
    timeInterval=setInterval(tim,1000);
  }


  function showHint(hintNumber){
    if(hintNumber===1){
      $('#hint1').slideToggle(1000);
    }else
    if(hintNumber===2){
      $('#hint2').slideToggle(1000);
    }else
    if(hintNumber===3){
      $('#hint3').slideToggle(1000);
    }
  }

  function checkHint(){
    if(timer<55 && timer>40){
      $('#hint1-button').show();
    }else
    if(timer>20 && timer<40){
      $('#hint2-button').show();
    }else
    if(timer<20 && timer>0){
      $('#hint3-button').show();
    }
  }

  function tim(){
    checkHint();
    timeBoard.empty()
    timeBoard.append(timer);
    timer=timer-1;
  }

  function hintAssign(i){
    $('#hint1').empty();
    $('#hint2').empty();
    $('#hint3').empty();
    $('#hint1').append(obj[i].hint1);
    $('#hint2').append(obj[i].hint2);
    $('#hint3').append(obj[i].hint3);
  }

  function play() {
    $('.question').empty();
    if(firstTime===true){
      clearInterval(timeInterval);
    }
    firstTime=true;
    initializer();
    var randomNumber = Math.floor(Math.random() * 12);
    originalWord = words[randomNumber];
    hintAssign(randomNumber);

    var shuffled = originalWord.split('').sort(function() {
      return 0.5 - Math.random();
    }).join('');
    console.log(shuffled);

    for(let i=0;i<shuffled.length;i++) {
      var shuffledWord=shuffled.split('');
      $('.question').append("<td id='letter'>"+shuffledWord[i]+"</td>");
    }
  }

  function checkAnswer() {
    var ans = $('#answer').val();
    if(ans === originalWord) {
      audio.play();
      updateEnergy();
      updateSc();
      isWin();
      play();
      clearInterval(intervalStart);
      clearInterval(timeInterval);
      intervalStart=setInterval(play,60000);
      updateTimer();
    } else {
      window.alert('Try again! For clues, click on the hint buttons as they appear');
    }
  }

  $('.submit').click(function() {
    checkAnswer();
    $('#answer').val('');
  });

  intervalStart = setInterval(play,61000);
  play();
});
