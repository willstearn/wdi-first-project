$(() => {

  var words = ['vitriolic','specious','platitude','conceited','obtuse','assiduous','portend','hubris','incandescent','entreaties','loquacious','fatuous','prophylaxis','obsequious','groundswell','vapid','resonate','excoriates','sequestered','commendable','misgivings','askance','parsimonious','parlous','decorum','perfunctory','acerbic','obstreperous','pejorative','jettison','deference','ebullient','inveterate','fascile','mainspring','circumspect','martial','yardstick','scintilla','bootstrap','assinine','taciturn','carousing','pernicious','pastiche','retrograde','cavalier','abstruse','propitiate','hackneyed','hoodwink','jaundiced','earmark','mainstay','nettlesome','redolent','frogmarch','doyenne','magnanimous','lilliputian','vaudevillian','admonish','moribund','pallid','fastidious','sanguine','delineate','capricious','restitution','megalomania','corraled','vacillate','gregarious','specious','vertiginous','remiss','flippant','lascivious','apopleptic','axiomatic'];
  var originalWord = null;
  var intervalStart = null;
  var score = 0;
  var timer = null;
  var hint = null;
  var reward = null;
  var lives = null;

  // gets a random word (originalWord) from array of words (wordsArray)
  function play() {
    $('.question').empty();
    var randomNumber = Math.floor(Math.random() * words.length);
    originalWord = words[randomNumber];
    console.log(originalWord);

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
    console.log(shuffledWord);
  }
  // checks answer (checkAnswer) submitted by user against original word (originalWord)
  function checkAnswer() {
    var ans = $('#answer').val();
    if(ans === originalWord) {
      updateScore();
    } else {
      window.alert('Sorry! Try again');
    }
    //play();
    //intervalStart=setInterval(play,15000);
  }

  $('.submit').click(function() {
    checkAnswer();
  });

  function updateScore() {
    score=score+1;
    $('#score').innerHTML=score;
  }

  // sets interval of emptying table to 15s
  intervalStart = setInterval(play,15000);
  play();

});
