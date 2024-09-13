const but1 = document.querySelector('#butn1');
const but2 = document.querySelector('#butn2');
const but3 = document.querySelector('#butn3');
const but4 = document.querySelector('#butn4');
const but5 = document.querySelector('#butn5');
const but6 = document.querySelector('#butn6');
const but7 = document.querySelector('#butn7');
const but8 = document.querySelector('#butn8');
const but9 = document.querySelector('#butn9');
const but0 = document.querySelector('#butn0');
const butE = document.querySelector('#butnE');
const butP = document.querySelector('#butnP');
const butPl = document.querySelector('#butnPL');
const butM = document.querySelector('#butnM');
const butD = document.querySelector('#butnD');
const butS = document.querySelector('#butnS');
const butDot = document.querySelector('#butnDot');
const butAC = document.querySelector('#butnAC');
const butC = document.querySelector('#butnC');
const calc = document.querySelector('#calculation');
const final = document.querySelector('#final');


let mess = '';
let val1 = 0;
let val2 = 0;



function updMess(){
    setInterval(function () {calc.innerHTML = mess}, 10);
    setInterval(function () {final.innerHTML = eval(mess)}, 10);
    
}

but0.addEventListener('click', (e) => {
    mess += '0';
    updMess()
});
but1.addEventListener('click', (e) => {
    mess += '1';
    updMess()
});
but2.addEventListener('click', (e) => {
    mess += '2';
    updMess()
});
but3.addEventListener('click', (e) => {
    mess += '3';
    updMess()
});
but4.addEventListener('click', (e) => {
    mess += '4';
    updMess()
});
but5.addEventListener('click', (e) => {
    mess += '5';
    updMess()
});
but6.addEventListener('click', (e) => {
    mess += '6';
    updMess()
});
but7.addEventListener('click', (e) => {
    mess += '7';
    updMess()
});
but8.addEventListener('click', (e) => {
    mess += '8';
    updMess()
});
but9.addEventListener('click', (e) => {
    mess += '9';
    updMess()
});
butP.addEventListener('click', (e) => {
    mess += '%';
    updMess()
});
butPl.addEventListener('click', (e) => {
    mess += '+';
    updMess()
});
butM.addEventListener('click', (e) => {
    mess += '*';
    updMess()
});
butS.addEventListener('click', (e) => {
    mess += '-';
    updMess()
});
butD.addEventListener('click', (e) => {
    mess += '/';
    updMess()
});
butDot.addEventListener('click', (e) => {
    mess += '.';
    updMess()
});
butAC.addEventListener('click', (e) => {
    mess = '';
    updMess()
});
butE.addEventListener('click', (e) => {
    calc.style.opacity = 0;
    updMess()
    
    
});
butC.addEventListener('click', (e) => {
    mess = mess.substring(0,mess.length-1);
    updMess()
    
});

function plus(){

}
