var joueur = 1;
var victory1_player1 = 0;
var victory2_player1 = 0;
var victory3_player1 = 0;

var victory4_player1 = 0;
var victory5_player1 = 0;
var victory6_player1 = 0;

var victory7_player1 = 0;
var victory8_player1 = 0;
var victory9_player1 = 0;

var victory1_player2 = 0;
var victory2_player2 = 0;
var victory3_player2 = 0;

var victory4_player2 = 0;
var victory5_player2 = 0;
var victory6_player2 = 0;

var victory7_player2 = 0;
var victory8_player2 = 0;
var victory9_player2 = 0;
function victory(){
    if ((victory1_player1 == 1) && (victory2_player1 == 1) && (victory3_player1 == 1) || (victory4_player1 == 1) && (victory5_player1 == 1) && (victory6_player1 == 1) || (victory7_player1 == 1) && (victory8_player1 == 1) && (victory9_player1 == 1) ||
    (victory1_player1 == 1) && (victory4_player1 == 1) && (victory7_player1 == 1) || (victory2_player1 == 1) && (victory5_player1 == 1) && (victory8_player1 == 1) || (victory3_player1 == 1) && (victory6_player1 == 1) && (victory9_player1 == 1) || 
    (victory1_player1 == 1) && (victory5_player1 == 1) && (victory9_player1 == 1) || (victory3_player1 == 1) && (victory5_player1 == 1) && (victory7_player1 == 1)){
        document.getElementById("victory_box").innerHTML = "joueur 1 gagne";
        document.getElementById("reset_button").style.visibility = "visible";
    }
    if ((victory1_player2 == 1) && (victory2_player2 == 1) && (victory3_player2 == 1) || (victory4_player2 == 1) && (victory5_player2 == 1) && (victory6_player2 == 1) || (victory7_player2 == 1) && (victory8_playe2 == 1) && (victory9_player2 == 1) ||
    (victory1_player2 == 1) && (victory4_player2 == 1) && (victory7_player2 == 1) || (victory2_player2 == 1) && (victory5_player2 == 1) && (victory8_player2 == 1) || (victory3_player2 == 1) && (victory6_player2 == 1) && (victory9_player2 == 1) || 
    (victory1_player2 == 1) && (victory5_player2 == 1) && (victory9_player2 == 1) || (victory3_player2 == 1) && (victory5_player2 == 1) && (victory7_player2 == 1)){
        document.getElementById("victory_box").innerHTML = "joueur 2 gagne";
    }
}
function apparition1() {
    if (joueur == 1){
        document.getElementById("croix1").style.visibility = "visible";
        joueur = 2;
        document.getElementById("player_affichor").innerHTML = joueur;
        victory1_player1 = 1;
        return false
        
    }
    else if (joueur == 2){
        document.getElementById("cercle1").style.visibility = "visible";        
        joueur = 1;
        document.getElementById("player_affichor").innerHTML = joueur;
        victory1_player2 = 1;
        return false
    }   
}
function apparition2() {
    if (joueur == 1){
        document.getElementById("croix2").style.visibility = "visible";
        joueur = 2;
        document.getElementById("player_affichor").innerHTML = joueur;
        victory2_player1 = 1;
        return false
    }
    else if (joueur == 2){
        document.getElementById("cercle2").style.visibility = "visible";
        joueur = 1;
        document.getElementById("player_affichor").innerHTML = joueur;
        victory2_player2 = 1;
        return false      
    }
}
function apparition3() {
    if (joueur == 1){
        document.getElementById("croix3").style.visibility = "visible";
        joueur = 2;
        document.getElementById("player_affichor").innerHTML = joueur;
        victory3_player1 = 1;
        return false
    }
    else if (joueur == 2){
        document.getElementById("cercle3").style.visibility = "visible";
        joueur = 1;
        document.getElementById("player_affichor").innerHTML = joueur;
        victory3_player2 = 1;
        return false
    }
}
function apparition4() {
    if (joueur == 1){
        document.getElementById("croix4").style.visibility = "visible";
        joueur = 2;
        document.getElementById("player_affichor").innerHTML = joueur;
        victory4_player1 = 1;
        return false
    }
    else if (joueur ==2){
        document.getElementById("cercle4").style.visibility = "visible";
        joueur = 1;
        document.getElementById("player_affichor").innerHTML = joueur;
        victory4_player2 = 1;
        return false
    }
}
function apparition5() {
    if (joueur == 1){
        document.getElementById("croix5").style.visibility = "visible";
        joueur = 2;
        document.getElementById("player_affichor").innerHTML = joueur;
        victory5_player1 = 1;
        return false
        
    }
    else if (joueur == 2){
        document.getElementById("cercle5").style.visibility = "visible";
        joueur = 1;
        document.getElementById("player_affichor").innerHTML = joueur;
        victory5_player2 = 1; 
        return false                          
    }   
}
function apparition6() {
    if (joueur == 1 ){
        document.getElementById("croix6").style.visibility = "visible";
        joueur = 2;
        document.getElementById("player_affichor").innerHTML = joueur;
        victory6_player1 = 1;
        return false
    }
    else if (joueur == 2 ){
        document.getElementById("cercle6").style.visibility = "visible";
        joueur = 1;
        document.getElementById("player_affichor").innerHTML = joueur;
        victory6_player2 = 1;
        return false
    }
}
function apparition7() {
    if (joueur == 1){
        document.getElementById("croix7").style.visibility = "visible";
        joueur = 2;
        document.getElementById("player_affichor").innerHTML = joueur;
        victory7_player1 = 1;
        return false
    }
    else if (joueur == 2){
        document.getElementById("cercle7").style.visibility = "visible";
        joueur = 1;
        document.getElementById("player_affichor").innerHTML = joueur;
        victory7_player2 = 1;
        return false
    }
}
function apparition8() {
    if (joueur == 1){
        document.getElementById("croix8").style.visibility = "visible";
        joueur = 2;
        document.getElementById("player_affichor").innerHTML = joueur;
        victory8_player1 = 1;
        return false
    }
    else if (joueur == 2){
        document.getElementById("cercle8").style.visibility = "visible";
        joueur = 1;
        document.getElementById("player_affichor").innerHTML = joueur;
        victory8_player2 = 1;
        return false
    }
}
function apparition9() {
    if (joueur == 1){
        document.getElementById("croix9").style.visibility = "visible";
        joueur = 2;
        document.getElementById("player_affichor").innerHTML = joueur;
        victory9_player1 = 1;
        return false
    }
    else if (joueur == 2){
        document.getElementById("cercle9").style.visibility = "visible";
        joueur = 1;
        document.getElementById("player_affichor").innerHTML = joueur;
        victory9_player2 = 1;
        return false
    }
}