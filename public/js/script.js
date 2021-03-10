alert("Hello World");
console.log("Hello World");
prompt("Entrez votre age:");

const prenom = "Christopher";
let nom ="LEGRAND";

console.log(prenom);
console.log(nom);

const typeString = "Hello je suis du texte";
// string = chaines de caractères
const typeNumber = 9;
// integer = nombre et chiffre
const typeBoolean = true ou false;
// boolean = true/false vrai ou faux
const typeArray = [1,2,3,4,5,6];
// Array = tableau de valeurs
const typeUndefined = undefined;
// erreur
const typeObj = {
    a:1,
    b:2,
    c:3
};
programmation orienté object

const addition = 8 + 15;
const soustraction = 30 - 7;
const multiplication = (8 * 3) -1;
const division = 69/3;
const modulo = 168 % 29;
console.log(modulo);

CONCATENATION

const prenom = "christopher ";
const nom = "LEGRAND";
console.log("Hello, je m'apelle " + prenom + nom);
console.log(`Je m'apelle ${prenom} ${nom}`)
// backticks = altgr + 7

//FONCTIONS
function nomDeMaFunction(paramA, paramB) {

    //on indique que pour fonctionner correctement,
    //cette fonction a besoin de 2 parametres. 2 éléments

    return paramA + paramB;
};
console.log(nomDeMaFunction(18, 5));


//SCOPE
//variable globale
let hello;

function porteeDesVariable() {
    //variable locale
    let hello = "Eh salut! Tu me voit ou pas?"

    console.log(hello);

    hello = "salut on mange";
};


porteeDesVariable();
console.log(hello);
 


//creer une fonction
function age() {
    let age = Number(prompt("Quel age avez vous?"));
    // age = parseInt(age); transforme une string en nombre entier
    // age= parseFloat(age); transforme une string en nombre entier et accepte les décimales
    alert("Vous avez bientôt " + ( age +1) + "ans!")
}

age();


function projet() {
    let prenom = prompt ("Quel est votre prenom?");
    let nom = prompt ("Quel est votre nom?");
    let age = prompt("Quel est votre âge?");
    alert ("Hey salut " + prenom + " " + nom + " aujourd'hui malgrès tes" + age + " ans tu va sauver le monde!");
}

projet();

//CONDITION
const nb = 500;

if(nb === 50) {
    console.log("NB est égal à 50");
    //   altgr 6 || pyp = OU  && = est  
} else if(nb > || nb <= 500) {
    console.log("NB est superieur à 50");
} else {
    console.log("NB est compris entre - l'infini et 49")
}

BOUCLE


for(let i = 0; i < 5; i++) {
    console.log("Notre variable I est égale à:" + i);
};

TABLEAU

let tableau = [1,2,3,4,5];
let animeaux = ["chien","chats","lezard","serpent","poisson"];
let ficheClient = ["christopher","Legrand",25,"bordeaux"];
console.log(tableau);
console.log(animeaux);
console.log(ficheClient[0]);

const tableau = [1,2,3,4,5];
//ajouter une valeur a la fin du tableau
tableau.push(6);
//retirer la dernière valeur du tableau
tableau.pop();
//retire la premier valeur du tableau
tableau.shift();
//ajouter une valeur au debut
tableau.unshift(12);
//modifier une valeur a l'interieur du tableau ATTENTION [1=0,2=1,3=4]
tableau[2] = 44

console.log(tableau);

const numTab = [1,2,3,4];
//forEach est une méthode proposé par JS qui utilidr un Callback
//callback = une fonction passée dans une autre fonction en tant qu'argument
numTab.forEach(function(num){
    //num est une valeur courante 1,2,3 etc...
    console.log(num);
});

$(".element").hide();
// /pour executer le code a l'interieur de la fonction
$(function(){
        $(".element").hide();
});

$(function(){
        $(".content1").has("span").css("color","red");
        $("span").not("underline").css("text-decoration","underline");
        $("span").eq(0)
});

$(function(){
        //GETTERS
        const getter =$("h1").css("font-size");
        console.log(getter);
        // setter
        $("h1").css("font-size","3rem");
});

$(function() {
        //GETTERS recupere une valeur
        const getterHTML = $(".img1").attr("scr");
        //SETTERS attribue une valeur
        $(".img1").attr("src", "monImage.jpg");
        console.log(getterHTML);
});


$(function() {
        //ajouter une classe
        $(".box").addClass("red");
        //retire une classe
        $(".box").removeClass("red");
        //faire les deux en même temps
        $(".box").addClass("red").removeClass("blue");
        // ajoute la classe si non presente
        //supprime la classe si présente
        $(".box").toggleClass("red");
});


$(function() {
        if($(".box").is(".blue")){     
        } else {
                alert("Bon bah pas la...");
        }

});

$(function({
        //getter .text() récupère la valeur textuelle des <p>
        const maVariable=$("p").text();
//ajouter texte apres le p
        $("p").text(maVariable + "ca va?");
});

$(function(){
        //récupère la postition ABSOLUE de l'élément <div>
        const positionAbsolue=$("div").offset().left;
        //récupère la position des élément par rapprot a son parents
        const positionRelative=$("div").position();
        //affiche la position absolue de l'élément <div>
        console.log(positionAbsolue);
        //affiche la possition relative au parent de l'element
        console.log(positionRelative);
});

$(function(){
        //ont fait une boucle parmi tous les elements selectionés
        $("p").each(function(){
                //ont crée une fonction pou le clik sur le <p> concerné
                $(this).click(function() {
                        //cache l'élement HTML après le <p> concerné par le click
                        $(this).next().hide(1000)
                })
        })
});


$(function(){
        //ajoute du contenu après l'élément selectionné
        $("h2").append(" -_- ");
        //ajoute du cpntenu avant l'élément selectionné
        $("h2").prepend(' --\' ');
        //ajoute un HR avant le #3
        $("#3").before("<hr>");
        //ajoute 2 BR après le HR
        $("hr").after("<br><br>")

});

$(function() {
        //mouseenter
        $("div").mouseenter(function() {
                $(this).css("background-color","crimson");
        });
        //mousseleave
        $("div").mouseleave(function() {
                $(this).css("background-color", "transparent");
        });
        //hover()
        $("div").hover(function() {
                $(this).css("background-color", "midnightblue");

        },(function(){
                $(this).css("backgorund-color","transparent");
        }))
});

$(function () {
        //mousedown
        //mouseup
        //je maintiens le clik de la souris
        $("div").mousedown(function(){
                $(this).css("background-color", "crimson");
        });
        //je relache le click de la souris
        $("div").mouseup(function() {
                $(this).css("background-color","transparent");
        });
});

$(function(){
        $(document).mousemove(function(e){
                //recuperer la position de la souris sur le document
                let pageCoords="("+ e.pageX +", "+ e.pageY + ")";
                //et on l'affiche dans une span
                $("span").text(pageCoords);
        });
});

$(function(){
        $("input").keydown(function(){
                $(this).css("background-color","red")
        });

        $("input").keyup(function(){
                $(this).css("backgorund-color", "yellow");
        });
 
});


$(function(){
        $("input").focus(function(){
                $(this).css("background-color","crimson"):
                });
        $("input").blur(function(){
                $(this).css("background-color","yellow");
        });
});



        $("div").on({
                click: function(){$(this).text("Yo!");},
                mouseenter: function(){$(this).css("background-color","crimson");},
                mouseleave: function(){$(this).css("background-color","white");}
        });
        

$(function(){
        $(".btn1").click(function(){
                $("h1").hide(300);
        });

        $(".btn2").click(function(){
                $("h1").show(3000);
        });

        $(".btn3").click(function(){
                $("h1").toggle(1500);
        });
});

animation
$(function(){
        $("button").click(function(){
                $("div").animate({
                        left: "200px",
                        opacity: 0.6,
                        width: "+=400px"
                }, 2000, function(){
                        $("div").animate({
                                top:"200px"
                        }, 1000);
                })
        });
});