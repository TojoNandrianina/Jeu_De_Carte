const prompt = require("prompt-sync")();
let pseudo = ""
let score = 0;
let scoreIA = 0;


do {
    function menu() {
        console.log("                                                   ");
        console.log("----- --- -  -   --  ---   -- ---- --- ----- ----");
        console.log("  |   |-- |  |   | \ |--  /   |--| |__)  |   |---");
        console.log(" _|   |__ |__|   |_/ |__  \__ |  | |  \  |   |___");
        console.log("                                            ");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                                    ");
        console.log("1.Jouer         2.Guide      3.score      4.Quitter");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                        ");
        let choix = +prompt("Tapez votre action : ")
        if (choix == 1) {
            console.log("Votre objectif est de battre le bot.");
            jouer();
        } else if (choix == 2) {
            guide();
        } else if (choix == 3) {
            console.log("Le dernier score : ");
            console.log(`                     _____________________________________________________
                    |                                                     |
                    |              votre score  : ${score}                       |
                    |                                                     |
                    |              BOT score    : ${scoreIA}                       |
                    |_____________________________________________________|

            `);



            menu();
        } else if (choix == 4) {
            console.log("");
            console.log("MERCI D'AVOIR JOUER !!!");
            console.log("");
        } else {
            console.log("                        ");
            console.log("----ERREUR----");
            console.log("Action invalide!");
            console.log("                        ");
            menu();
        }
    }
} while (choix = !4);

function failed() {
    let snide = ["vous êtes battu par le BOT", "Vous avez perdu! ", " essaye encore ", "pas mal mais il a gagné", "BOT est malin "];
    return snide[Math.floor(Math.random() * snide.length)];
}

function victoir() {
    let congrats = ["Cool tu es le meilleur", "Congratulation ", "Wonderfull!", "Vous avez gagner! ", "not bad!! , you win !!", `Allez ${pseudo} vous êtes le meilleur `];
    return congrats[Math.floor(Math.random() * congrats.length)];
}
function eguality() {
    let Equal = ["Egalité!!!!", "tous les deaux vous êtes le meilleur !!", "match null"];
    return Equal[Math.floor(Math.random() * Equal.length)];

}


function jouer() {
    let reste = 3;
    let IA = ["feu", "eau", "plante"]
    let nom = prompt("Entrer votre pseudonyme : ")
    if (nom != "") {
        pseudo = nom;
        console.log("-----------------------------");
        console.log("   " + pseudo + "   VS    BOT  ");
        console.log("-----------------------------");
        for (i = 1; i <= 3; i++) {
            console.log("");
            console.log(" MANCHE" + i);
            console.log("");
            console.log("Votre carte : feu , eau , plante");

            let action1 = prompt(pseudo + " :")

                let aleatoire = Math.floor(Math.random() * 3);

                if (aleatoire == 0) {
                    console.log(`BOT : ${IA[0]}`);
                } else if (aleatoire == 1) {
                    console.log(`BOT : ${IA[1]}`);
                }
                else if (aleatoire == 2) {
                    console.log(`BOT : ${IA[2]}`);
                }

                if (action1 == "feu" && aleatoire == 0 || action1 == "eau" && aleatoire == 1 || action1 == "plante" && aleatoire == 2) {
                    console.log(eguality());
                }
                if (action1 == "eau" && aleatoire == 0 || action1 == "feu" && aleatoire == 2 || action1 == "plante" && aleatoire == 1) {
                    console.log(victoir());
                    score++
                }
                if (action1 == "feu" && aleatoire == 1 || action1 == "eau" && aleatoire == 2 || action1 == "plante" && aleatoire == 0) {
                    console.log(failed());
                    scoreIA++
                }

                console.log(`Il reste ${reste = reste - 1} tentative `);
                console.log(`${pseudo} : ${score} // BOT : ${scoreIA}`);
                console.log("----------");

            
        }
        if (score > scoreIA) {
            console.log(victoir() + " FELICITATIOIN!");
            console.log("MISSION ACCOMPLIE");

            menu();
        } else if (score < scoreIA) {
            console.log(failed() + " MISSION FAILED");

            menu();
        } else {
            console.log(eguality());

            let volonter = prompt("Voulez vous rejouer ou finir en Match nul(o/n) : ")

            if (volonter == "o") {

                jouer()

            } else if (volonter == "n") {
                console.log("Vous etes de meme niveau . Bien jouer!");

                menu();
            } else {
                console.log("ERREUR");
                console.log("VOUS AVEZ ETE REDIRIGER A L'ACCUEILL");
                menu()
            }
        }

    } else {
        console.log(" oups!!! champ vide !! ");
        jouer();
    }
}

function guide() {


    console.log("----BIENVENUE DANS LE GUIDE----");
    console.log("    --------------------------");
    console.log("1.Au debut du jeu ,vous devez choisir un pseudo");
    console.log("2.A chaque Manche ,vous possede trois carte(le feu , l'eau et la plante)");
    console.log("3.Le score est afficher quand le manche est terminer.");
    console.log("4.Quand tout les manches sont terminer le score determinera qui est le vainqueur");
    let choix = prompt("Voulez vous retourner au menu ou directement entrer dans l'arene(jouer/menu) : ")
    if (choix == "jouer") {
        jouer()
    } else {
        menu()
    }
}

menu()









