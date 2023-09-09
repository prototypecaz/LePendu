/*=== PENDU ===

Regle : DEVINER UN MOT AVEC UN NOMBRE D'ESSAIS LIMITE

var chances = 10;

var mots = [
    "elephant", // 0
    "mouton", // 1
    ...
]

var nomDeMaVariable = mots[0];


var mots = ["elephant","mouton","cuisine"]


var motsonsenfou = "mouton";
console.log(motsonsenfou[0])
optional random
-----------
Proposition d'un mot du tableau aleatoirement
mais pensez à supprimez le mot après sa selection

Soumettre une lettre via un element "input" comprenant un label
et le boutton de soumission (onclick).

(if) Si on reçoit la lettre "a" est qu'elle est contenu dans le mot alors
on affiche la lettre au bon emplacement.
-----------------------------------------------
 U   S  B
|_| |_| |_| === SPAN (document.createElement * le nombre de lettre dans le mot) avec un border-bottom
id0 id1 id2
-----------------------------------------------

"usb".length = 3
['u', 's', 'b'] 
        1

SI on reçoit la lettre "x" est qu'elle n'est pas contenu dans le mot alors
on retire une vie.
-----------------------------------------------
chances--;
------------------------------------------------

Si les chances sont egale à 0, la partie est perdu. (message à faire passer)

<!-- optional -->
usb contient 3 lettres donc 3 * 2 = 6 chances*/



var chances = 7;
var mots = ["terminator","aucun","contact","phone"];
var input;
var nombreAleatoire = Math.floor( Math.random() * mots.length);
var premierMot = mots[nombreAleatoire].split("");
var motSuivant = document.querySelector('#motSuivant');
var source="asset/img/";
var hangman = [source+"Hangman-0.png", source+"Hangman-1.png", source+"Hangman-2.png", source+"Hangman-3.png", source+"Hangman-4.png", source+"Hangman-5.png", source+"Hangman-6.png"];
var button = document.querySelector('#valider');
var numero = 0;
var body = document.querySelector('body');
var span;
var tableau = [];
var lettre = [];


var lettreUtiliser = document.querySelector(".lettreUtiliser strong");
var win = document.querySelector("#win");





function ChangeHangman(sens) {
    numero = numero + sens;
 
    if (numero > hangman.length - 1)
      {numero = 0;
        button.disabled = true;
    }  
   
    document.getElementById("hangman").src = hangman[numero];
    
    
}


for (var iterator = 0; iterator < premierMot.length; iterator++) {
    span = document.createElement('span');
    span.style.borderBottom = "2px solid black";
    span.style.padding="25px";
    span.style.margin="5px";
    body.appendChild(span);
    
}

var span1 = document.querySelectorAll('span');

var p = document.querySelector('p strong');


button.onclick = function nom () {

    input = document.querySelector('#Champs').value;
    input2 = document.getElementById('#Champs');
    

    

    if (lettre.includes(input) === false) {
        lettre.push(input);
        
      }

      else {alert("Attention ! Vous avez deja utiliser la lettre "+input)}

    lettreUtiliser.innerHTML=lettre.join(" ");

    
    var iterator = 0;

    if (premierMot.indexOf(input) == -1) {
      
        ChangeHangman(1);
      chances--;
      lettreUtiliser.style.color="red";
      p.textContent=chances;
     
    }
    
     if (chances <= 0) {
        win.innerHTML="Vous avez perdu le mot était : "+mots[nombreAleatoire];
         
         motSuivant.hidden=false;
         valider.hidden=true;
         
    }

    premierMot.forEach(element => {
       
        
         if (input == element) {
    
          span1[iterator].innerHTML=input;
          lettreUtiliser.style.color="green";
          tableau.push(input);
          
            }
        
            iterator++
    });

     var incubator ="";
    span1.forEach(element => {
      incubator += element.innerText;
      
    });
    
    if (incubator == premierMot.join("")) {
      win.innerHTML="Vous avez gagner";

      motSuivant.hidden=false;
      valider.hidden=true;
      
      
    }

    


    
   

}







     /*var last = lettre[lettre.length-1];
      var lastSecond = lettre[lettre.length-2]
       
      for (var iterator = 0; iterator<lettre.length;iterator++){
        if (last == lettre[iterator])
        {console.log("test")}
      }

       if (last == lastSecond) {
 
         lettre.pop(lastSecond);
         alert("attention vous rentrez la meme lettre que précédament");
         
         
       }*/
        


    



/* une fonction qui permet d'éviter la répétition des lettres */

/* level 1 -  faire deviner 5 mots facile (la page ou on est actuellement)
     quand il a trouver les 5 mots ont change de page ont passe a la page level 2



/* level 2 - deviner 5 mots () moyen */

