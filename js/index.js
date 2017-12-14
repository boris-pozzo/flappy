var walkImg = document.getElementById('walk-img');
var step = 0; // On commence à l'étape 0 (que l'on va incrémenter par la suite)
var numberSteps = 6; // Vu qu'on commence à zéro, il y aura 6 étapes
var widthImg = 41; // on récupère la largeur de l'image


function moove() {
    walkImg.style.right = step * widthImg + 'px';
    if (step === numberSteps) {
        step = 0;
    } else {
        step++;
    }
}

setInterval(moove, 80);

/*=================== Flappy ===================*/
var birdy = document.getElementById('flappy-img');
var stepBird = 0;
var flappyStepsLength = 2;
var widthFlappy = 92;

function fly() {
    birdy.style.right = stepBird * widthFlappy + 'px';
    if (stepBird === flappyStepsLength) {
        stepBird = 0;
    } else {
        stepBird++;
    }
}

setInterval(fly, 80)
console.log(window.innerHeight);
//console.log(flappyContainer.offsetWidth)

//---------------- Press Space -------------------//

var up = false;
var audio = document.getElementById('player1');
// Si j'appuie sur la touche "espace" la variable up passe à true
document.onkeydown = function (e) {
    if (e.keyCode == 32) {
        up = true;
        audio.play();
    }
}

// Si je lache la touche "espace" la variable up passe à false
document.onkeyup = function (e) {
    if (e.keyCode == 32) {
        up = false;
        audio.pause();

        /*if (flappyContainer.offsetBottom > window.innerHeight) {
            console.log("stop")
        }*/
    }
}

//---------------- FLY -------------------//
var flappyContainer = document.getElementById('flappy-container')
function animateFly() {

    // offsetTop -> valeur en pixel de la position top de mon element html
    var fall = flappyContainer.offsetTop;

    // Si je suis en train d'appuyer sur espace, up == true et donc je monte.
    if (up == true) {
        flappyContainer.style.top = (fall - 20) + 'px';
    }
    // Sinon, up == false et donc je monte.
    else {
        flappyContainer.style.top = (fall + 12) + 'px';
    }

}

setInterval(animateFly, 100)






