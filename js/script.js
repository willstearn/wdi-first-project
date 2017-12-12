$(() => {

  var words = ['Vitriolic','Specious','Platitude','Conceited','Obtuse','Assiduous','Portend','Hubris','Incandescent','Entreaties','Loquacious','Fatuous','Prophylaxis','Obsequious','Groundswell','Vapid','Resonate','Excoriates','Sequestered','Commendable','Misgivings','Askance','Parsimonious','Parlous','Decorum','Perfunctory','Acerbic','Obstreperous','Pejorative','Jettison','Deference','Ebullient','Inveterate','Fascile','Mainspring','Circumspect','Martial','Yardstick','Scintilla','Bootstrap','Assinine','Taciturn','Carousing','Pernicious','Pastiche','Retrograde','Cavalier','Abstruse','Propitiate','Hackneyed','Hoodwink','Jaundiced','Earmark','Mainstay','Nettlesome','Redolent','Frogmarch','Doyenne','Magnanimous','Lilliputian','Vaudevillian','Admonish','Moribund','Pallid','Fastidious','Sanguine','Delineate','Capricious','Restitution','Megalomania','Corraled','Vacillate','Gregarious','Specious','Vertiginous','Remiss','Flippant','Lascivious','Apopleptic','Axiomatic'];
  var originalWord = null;
  var intervalStart = null;

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
      window.alert('Well done! You matched a word');
    } else {
      window.alert('Sorry! Try again');
    }
  }

  $('.submit').click(function() {
    checkAnswer();
  });

  // sets interval of emptying table to 15s
  intervalStart = setInterval(play,15000);
  play();

});
