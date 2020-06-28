var isMobile, canvas, video, tracker, quizJSON, quizData = null;

console.log('Inside webgl.js');

canvas = document.getElementById('jeeFaceFilterCanvas');
    console.log('This is canvas', canvas);
    // isMobile = true//window.mobilecheck();
    
    // console.log(isMobile);
    
    loadJSON(function(response) {
      quizJSON = JSON.parse(response);
    });
    initCanvasSize(canvas);

window.onload = function() {
    // video = document.getElementById('video');
    
    // initTracker(isMobile, canvas);

    // var gui = new dat.GUI();
    // gui.add(tracker, 'edgesDensity', 0.1, 0.5).step(0.01);
    // gui.add(tracker, 'initialScale', 1.0, 10.0).step(0.1);
    // gui.add(tracker, 'stepSize', 1, 5).step(0.1);
  };

function initCanvasSize(canvas) {
    // if(isMobile) {
      canvas.width = window.innerWidth; //document.width is obsolete
      canvas.height = window.innerHeight; //document.height is obsolete
    
      console.log('Canvas Width', canvas.width);
      console.log('Canvas Height', canvas.height);
    // }else{
      //video.src = 'assets/video/video.webm';
    //   alert("Visit this on mobile, pls");
    //   window.location.href = "desktop.html";
    // }

    // document.getElementById('demo-container').style.width = window.innerWidth + "px";
    // document.getElementById('demo-container').style.height = window.innerHeight + "px";

    // if(window.location.hash == '#debug')
    //   video.src = 'assets/video/video.webm';
  }

  document.getElementById('start').addEventListener('click', function(e) {
    initQuiz();
    var audio = new Audio('assets/webgl/audio/hufflepuff/uhm.mp3').play();
    setTimeout(function() {
      var audio = new Audio('assets/webgl/audio/hufflepuff/where-should-i-put-you.mp3').play();
    }, 500);
  });

  window.addEventListener('orientationchange', function () {
    setTimeout(function() {
      console.log('faccio il re init');
      console.log('Orientation changed canvas', canvas);
    //   delete tracker;
      initCanvasSize(canvas);
    //   initTracker(isMobile, canvas);
    }, 200);
  });

  function initQuiz() {
    /*
    <div id="step-0" class="step">
        <p class="intro">Start the quiz by clicking on the button below</p>
        <button id="start">START</button>
      </div>
      <div id="step" style="display: none" class="step" data-step-num="0">
        <p class="question" data-question-id="0"></p>
        <button data-answer-id="0" class="answer"></button>
      </div>
    */
    
    quizData = {
      actualQuestionId: 0,
      actualStepId: 0,
      actualAnswerId: 0,
      totalPercentage: {
        gryffindor: 0,
        ravenclaw: 0,
        hufflepuff: 0,
        slytherin: 0
      },
      answerIdList: [],
      questionList: [],
      questionObj: {},
      HTMLElements: {},
      audioCounter: 0,
      audioResources: {
        gryffindor: ["brave.mp3", "courage.mp3", "nerve.mp3"],
        ravenclaw: ["interesting.mp3", "learning.mp3", "not-bad-mind.mp3"],
        hufflepuff: ["afraid.mp3", "loyal.mp3", "talented.mp3"],
        slytherin: ["difficult.mp3", "prove-yourself.mp3", "interesting.mp3"]
      }
    };

    quizData["HTMLElements"]["stepContainer"] = document.getElementById('step');
    quizData["HTMLElements"]["stepQuestion"] = document.getElementsByClassName('question')[0];
    quizData["HTMLElements"]["answerBtn"] = document.getElementsByClassName("answer")[0];
    quizData["HTMLElements"]["prevAnswerBtn"] = document.querySelectorAll("span.prev")[0];
    quizData["HTMLElements"]["nextAnswerBtn"] = document.querySelectorAll("span.next")[0];

    document.getElementById('step-0').style.display = "none";
    quizData["HTMLElements"]["stepContainer"].style.display = 'block';

    setQuestionAndAnswer();

    quizData["HTMLElements"]["prevAnswerBtn"].addEventListener('click', setAnswer);
    quizData["HTMLElements"]["nextAnswerBtn"].addEventListener('click', setAnswer);

    quizData["HTMLElements"]["answerBtn"].addEventListener('click', function(e) {
      var answerId = this.getAttribute("data-answer-id");
      quizData["answerIdList"].push({step: quizData["actualStepId"], id: answerId});
      quizData["actualStepId"] = quizData["actualStepId"] + 1;

      if(getRandomInt(1, 99) % 5 == 0) {
        var audio = new Audio('assets/webgl/audio/hufflepuff/uhm.mp3').play();
      }

      if(quizData["actualStepId"] > 0 && quizData["actualStepId"] % 2 == 0 && quizData["audioCounter"] <= 2) {
        var max = 0;
        var houseName = null;
        for (var key in quizData["totalPercentage"]) {
          if (quizData["totalPercentage"][key] > max){
            max = quizData["totalPercentage"][key];
            houseName = key;
          }
        }
        var audio = new Audio('assets/webgl/audio/' + houseName + '/' + quizData["audioResources"][houseName][quizData["audioCounter"]]).play();
        quizData["audioCounter"]++;
      }

      if(quizData["actualStepId"] == 6) {
        setTimeout(function() {
          var audio = new Audio('assets/webgl/audio/hufflepuff/head.mp3').play();
        }, 2000);
      }

      for (var iterator in quizData["questionObj"]["percentage"]) {
        quizData["totalPercentage"][iterator] = quizData["totalPercentage"][iterator] + quizData["questionObj"]["percentage"][iterator][answerId];
      }
      quizData["actualAnswerId"] = 0;
      
      if(quizData["actualStepId"] < 8) {
        setQuestionAndAnswer();
      }else{
        showHouseImage();
      }

    });

  }

  function showHouseImage() {
    var max = 0;
    var houseName = null;
    for (var key in quizData["totalPercentage"]) {
      if (quizData["totalPercentage"][key] > max){
        max = quizData["totalPercentage"][key];
        houseName = key.charAt(0).toUpperCase() + key.slice(1);
      }
    }
    // document.getElementById('jeeFaceFilterCanvas').style.display = "none";
    document.getElementsByClassName('questions')[0].style.display = "none";
    document.getElementsByClassName('house')[0].style.display = "block";
    document.getElementsByClassName('house-name')[0].innerHTML = houseName;
    document.getElementsByClassName('house-name')[0].className += " " + houseName.toLowerCase();
    document.getElementById('house-img').src = "assets/webgl/img/" + houseName.toLocaleLowerCase() + ".png";
    
    var audio = new Audio('assets/webgl/audio/' + houseName.toLowerCase() + '/that-be.mp3').play();
    setTimeout(function() {
      var audio = new Audio('assets/webgl/audio/' + houseName.toLowerCase() + '.mp3').play();
    }, 1200);

    // document.getElementById('tw-link').setAttribute('href', 'http://twitter.com/share?text=Discover your Hogwarts house!&url=' + window.location.href);
    // document.getElementById('fb-link').setAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href);
  }

  function setAnswer(mode) {
    mode = (this.getAttribute("class") == "prev") ? -1 : 1;
    console.log(quizData["actualAnswerId"]+mode);
    var newAnswer = quizData["questionObj"]["answers"][(quizData["actualAnswerId"]+mode)] || null;
    console.log(newAnswer);
    
    quizData["HTMLElements"]["prevAnswerBtn"].style.display = "block";
    quizData["HTMLElements"]["nextAnswerBtn"].style.display = "block";

    if(newAnswer !== null) {
      quizData["HTMLElements"]["answerBtn"].innerHTML = newAnswer;
      quizData["actualAnswerId"] = quizData["actualAnswerId"] + mode;
      quizData["HTMLElements"]["answerBtn"].setAttribute("data-answer-id", quizData["actualAnswerId"]);
    }else{
      this.style.display = "none";
    }
  }

  function setQuestionAndAnswer() {
    var randomQuestionId = getRandomInt(0, quizJSON[quizData["actualStepId"]].length-1);
    quizData["actualQuestionId"] = randomQuestionId;
    quizData["questionObj"] = quizJSON[quizData["actualStepId"]][randomQuestionId]
    quizData["questionList"].push({step: quizData["actualStepId"], questionId: randomQuestionId});
    quizData["HTMLElements"]["stepQuestion"].innerHTML = quizData["questionObj"]["question"];
    quizData["HTMLElements"]["stepContainer"].setAttribute("data-step-num", quizData["actualStepId"]);
    quizData["HTMLElements"]["stepQuestion"].setAttribute("data-question-id", quizData["actualQuestionId"]);
    quizData["HTMLElements"]["answerBtn"].innerHTML = quizData["questionObj"]["answers"][quizData["actualAnswerId"]];
    quizData["HTMLElements"]["answerBtn"].setAttribute("data-answer-id", quizData["actualAnswerId"]);
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'assets/webgl/quiz.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    }
    xobj.send(null);
  }