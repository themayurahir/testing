var isMobile, canvas, video, tracker, quizJSON, quizData = null;
  // console.log('Guess where I am');
  window.onload = function () {
    // console.log('I am in');
    video = document.getElementById('video');
    canvas = document.getElementById('canvas-track');
    isMobile = window.mobilecheck();

    console.log(isMobile);

    loadJSON(function (response) {
      quizJSON = JSON.parse(response);
    });
    initVideoSize(isMobile, video);
    initTracker(isMobile, canvas);

    // var gui = new dat.GUI();
    // gui.add(tracker, 'edgesDensity', 0.1, 0.5).step(0.01);
    // gui.add(tracker, 'initialScale', 1.0, 10.0).step(0.1);
    // gui.add(tracker, 'stepSize', 1, 5).step(0.1);
  };

  function toggleSpinner() {
    var spinner = document.getElementById('spinner');
    spinner.style.display = (spinner.style.display == 'block') ? 'none' : 'block';
  }

  function initVideoSize(isMobile, video) {
    if (isMobile) {
      canvas.width = video.width = window.innerWidth; //document.width is obsolete
      canvas.height = video.height = window.innerHeight; //document.height is obsolete

      console.log(canvas.width);
      console.log(canvas.height);
    } else {
      //video.src = 'assets/video/video.webm';
      alert("Visit this on mobile, pls");
    //   window.location.href = "desktop.html";
    }

    document.getElementById('demo-container').style.width = window.innerWidth + "px";
    document.getElementById('demo-container').style.height = window.innerHeight + "px";

    if (window.location.hash == '#debug')
      video.src = 'assets/video/video.webm';
  }

  function initTracker(isMobile, canvas) {
    var isMobile = isMobile || true;
    var context = canvas.getContext('2d');
    var isFaceRecognized = false;
    var recognizeAttemps = 0;
    var faceRectData = {};

    tracker = new tracking.ObjectTracker('face');
    tracker.setInitialScale(3);
    tracker.setStepSize(1);
    tracker.setEdgesDensity(0.15);

    if (window.location.hash == '#debug') {
      var gui = new dat.GUI();
      gui.add(tracker, 'edgesDensity', 0.1, 0.5).step(0.01);
      gui.add(tracker, 'initialScale', 1.0, 10.0).step(0.1);
      gui.add(tracker, 'stepSize', 1, 5).step(0.1);
    }

    var faceTrackingTask = tracking.track('#video', tracker, { camera: isMobile, fps: 400 });
    var alertOrientation = false;

    context.translate(canvas.width, 0);
    context.scale(-1, 1);

    setTimeout(function () {
      var wFactor = 0.6;
      var hFactor = 0.25;
      window.changeTime = 0;
      if (screen.width < 667) {
        wFactor = 0.5;
        hFactor = 0.05;
      }

      window.scene.position.set(innerWidth / 2, innerHeight / 2, 0);
      //window.scene.position.set(-100, 250,0); // Set scene origin on the high-left corner, consider the max size of the hat
      tracker.on('track', function (event) {
        //return false;
        if (video.videoWidth > video.videoHeight && alertOrientation == false && window.innerWidth < window.innerHeight) {
          console.log(video.videoWidth);
          console.log(video.videoHeight);
          alertOrientation = true;
          alert("The resolution of your camera works better in landscape mode. Rotate your device, pls.");
        }

        if (isFaceRecognized == false) {
          context.clearRect(0, 0, canvas.width, canvas.height);
          // new tracking.ViolaJones.detect(pixels, width, height, initialScale, scaleFactor, stepSize, edgesDensity, classifier);

          event.data.forEach(function (rect) {
            recognizeAttemps++;
            if (window.location.hash == '#debug') {
              context.strokeStyle = '#a64ceb';
              context.strokeRect(rect.x, rect.y, rect.width, rect.height);
              context.font = '11px Helvetica';
              context.fillStyle = "#fff";
              context.fillText('x: ' + rect.x + 'px, width: ' + rect.width, rect.x + rect.width + 5, rect.y + 11);
              context.fillText('y: ' + rect.y + 'px, height: ' + rect.height, rect.x + rect.width + 5, rect.y + 22);
            }

            if (window.hat !== null) {
              xHatNewPosition = rect.x - (window.innerWidth / 2) + (rect.width / 2);
              yHatNewPosition = (alertOrientation) ? ((window.innerHeight / 2) - rect.y + (rect.height / 2)) : ((window.innerHeight / 2) - rect.y);

              xWidth = (video.videoWidth > window.innerWidth) ? window.innerWidth : video.videoWidth;
              xHeight = (video.videoHeight > window.innerHeight) ? window.innerHeight : video.videoHeight;

              window.camera.position.z = (rect.width > window.innerWidth / 4 && rect.height > window.innerHeight / 4) ? 300 : window.camera.position.z;
              window.camera.position.z = (rect.width > window.innerWidth / 2 || rect.height > window.innerHeight / 2) ? 350 : 420;

              // Left Limit
              if (rect.x < 10)
                rect.x = rect.width / 4;

              // Bottom Limit
              if ((rect.y + rect.height) < xHeight * 1.5)
                rect.height = rect.height * 2;

              // Full face at screen Limit
              if (xHeight - rect.height < 100)
                rect.height = rect.height / 2;

              // Right Limit
              if (rect.x > xWidth / 3)
                rect.width = rect.width / 2;

              //xHatNewPosition = (-xWidth/2) + rect.x + rect.width / 2;
              //yHatNewPosition = (xHeight / 2) - rect.y * (xWidth / xHeight) - rect.height / 4;

              //xHatNewPosition = ((xWidth*0.20) - rect.x);
              //yHatNewPosition = (xHeight * 0.5) - rect.y;
              xHatNewPosition = - ((rect.x) + (rect.width * wFactor));
              yHatNewPosition = - (rect.y - rect.height * hFactor);

              //xHatNewPosition *= video.videoWidth / video.videoHeight;
              //yHatNewPosition *= video.videoWidth / video.videoHeight;

              //if((new Date().getTime() - window.changeTime) > 600) {
              var tweenHat = new TWEEN.Tween(window.hat.position)
                .to({ x: xHatNewPosition, y: yHatNewPosition, z: window.hat.position.z }, 200)
                .start();

              requestAnimationFrame(animateHatPosition);
              //window.changeTime = new Date().getTime();
              //}
            }
          });
        }

        /* if(recognizeAttemps >= 15) {
          isFaceRecognized = true;
          faceRectData = event.data[0];
          // The only way to stop this is to add a timeout C:
          setTimeout(function () {
            faceTrackingTask.stop();
          }, 50);
        } */
      });
      toggleSpinner();
    }, 800);
  }

  window.mobilecheck = function () {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };

  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function () {
      // aplha => z
      // beta => x
      // gamma y
      //window.hat.rotation.x = -(event.beta) * Math.PI / 180;

      if ((Math.abs(window.hat.position.y * 180 / Math.PI) - Math.abs(event.gamma)) > 5 || (Math.abs(window.hat.position.z * 180 / Math.PI) - Math.abs(event.alpha)) > 5) {
        //window.hat.rotation.y = (event.gamma) * Math.PI / 180;
        //window.hat.rotation.x = -(event.beta) * Math.PI / 180;
        //window.hat.rotation.z = -(event.alpha) * Math.PI / 180;
      }



    }, true);
  }

  document.getElementById('start').addEventListener('click', function (e) {
    initQuiz();
    var audio = new Audio('assets/audio/hufflepuff/uhm.mp3').play();
    setTimeout(function () {
      var audio = new Audio('assets/audio/hufflepuff/where-should-i-put-you.mp3').play();
    }, 600);
  });

  window.addEventListener('orientationchange', function () {
    setTimeout(function () {
      console.log('faccio il re init');
      console.log(video);
      delete tracker;
      initVideoSize(isMobile, video);
      initTracker(isMobile, canvas);
    }, 200);
  });

  function animateHatPosition(time) {
    requestAnimationFrame(animateHatPosition);
    TWEEN.update(time);
  }

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

    quizData["HTMLElements"]["answerBtn"].addEventListener('click', function (e) {
      var answerId = this.getAttribute("data-answer-id");
      quizData["answerIdList"].push({ step: quizData["actualStepId"], id: answerId });
      quizData["actualStepId"] = quizData["actualStepId"] + 1;

      if (getRandomInt(1, 99) % 5 == 0) {
        var audio = new Audio('assets/audio/hufflepuff/uhm.mp3').play();
      }

      if (quizData["actualStepId"] > 0 && quizData["actualStepId"] % 2 == 0 && quizData["audioCounter"] <= 2) {
        var max = 0;
        var houseName = null;
        for (var key in quizData["totalPercentage"]) {
          if (quizData["totalPercentage"][key] > max) {
            max = quizData["totalPercentage"][key];
            houseName = key;
          }
        }
        var audio = new Audio('assets/audio/' + houseName + '/' + quizData["audioResources"][houseName][quizData["audioCounter"]]).play();
        quizData["audioCounter"]++;
      }

      if (quizData["actualStepId"] == 6) {
        setTimeout(function () {
          var audio = new Audio('assets/audio/hufflepuff/head.mp3').play();
        }, 2000);
      }

      for (var iterator in quizData["questionObj"]["percentage"]) {
        quizData["totalPercentage"][iterator] = quizData["totalPercentage"][iterator] + quizData["questionObj"]["percentage"][iterator][answerId];
      }
      quizData["actualAnswerId"] = 0;

      if (quizData["actualStepId"] < 8) {
        setQuestionAndAnswer();
      } else {
        showHouseImage();
      }

    });

  }

  function showHouseImage() {
    var max = 0;
    var houseName = null;
    for (var key in quizData["totalPercentage"]) {
      if (quizData["totalPercentage"][key] > max) {
        max = quizData["totalPercentage"][key];
        houseName = key.charAt(0).toUpperCase() + key.slice(1);
      }
    }
    document.getElementById('canvas').style.display = "none";
    document.getElementsByClassName('questions')[0].style.display = "none";
    document.getElementsByClassName('house')[0].style.display = "block";
    document.getElementsByClassName('house-name')[0].innerHTML = houseName;
    document.getElementsByClassName('house-name')[0].className += " " + houseName.toLowerCase();
    document.getElementById('house-img').src = "assets/img/" + houseName.toLocaleLowerCase() + ".png";

    var audio = new Audio('assets/audio/' + houseName.toLowerCase() + '/that-be.mp3').play();
    setTimeout(function () {
      var audio = new Audio('assets/audio/' + houseName.toLowerCase() + '.mp3').play();
    }, 1200);

    document.getElementById('tw-link').setAttribute('href', 'http://twitter.com/share?text=Discover your Hogwarts house!&url=' + window.location.href);
    document.getElementById('fb-link').setAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href);
  }

  function setAnswer(mode) {
    mode = (this.getAttribute("class") == "prev") ? -1 : 1;
    console.log(quizData["actualAnswerId"] + mode);
    var newAnswer = quizData["questionObj"]["answers"][(quizData["actualAnswerId"] + mode)] || null;
    console.log(newAnswer);

    quizData["HTMLElements"]["prevAnswerBtn"].style.display = "block";
    quizData["HTMLElements"]["nextAnswerBtn"].style.display = "block";

    if (newAnswer !== null) {
      quizData["HTMLElements"]["answerBtn"].innerHTML = newAnswer;
      quizData["actualAnswerId"] = quizData["actualAnswerId"] + mode;
      quizData["HTMLElements"]["answerBtn"].setAttribute("data-answer-id", quizData["actualAnswerId"]);
    } else {
      this.style.display = "none";
    }
  }

  function setQuestionAndAnswer() {
    var randomQuestionId = getRandomInt(0, quizJSON[quizData["actualStepId"]].length - 1);
    quizData["actualQuestionId"] = randomQuestionId;
    quizData["questionObj"] = quizJSON[quizData["actualStepId"]][randomQuestionId]
    quizData["questionList"].push({ step: quizData["actualStepId"], questionId: randomQuestionId });
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
    xobj.open('GET', 'assets/quiz.json', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
    }
    xobj.send(null);
  }