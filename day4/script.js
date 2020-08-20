var container = document.createElement('div');
container.classList.add('container','text-center');
container.setAttribute('style','object-fit: fill;')

var divrow1 = document.createElement("div");
divrow1.classList.add("row",'justify-content-center');
var title = document.createElement('h2');
title.innerText = 'Quick Quiz';
divrow1.append(title);

var divrow2 = document.createElement("div");
divrow2.classList.add("row",'justify-content-center');
var play = document.createElement('button');
play.id= 'play';
play.innerText = 'Play';
play.classList.add('btn' ,'btn-primary');
play.setAttribute('onclick','gamestart()');

divrow2.append(play);

var divrow3 = document.createElement("div");
divrow3.classList.add("row",'justify-content-center');
var highscore = document.createElement('button');
highscore.id='highscores';
highscore.classList.add('btn' ,'btn-primary');
highscore.innerText = 'High Scores';
divrow3.append(highscore);

container.append(divrow1,divrow2,divrow3);
document.body.append(container);

function gamestart()
{
    window.open('game.html', '_self');
}