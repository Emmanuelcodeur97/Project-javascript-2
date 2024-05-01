function reverseString(a){
 return a.split('').reverse().join('');
}
alert(reverseString('bonjour'));// fonction pour inverser une ou des chaînes de caractères

//----------------------------------------------------------------------------------------

function countCharacter(a){
 return a.length;
}
alert(countCharacter('bonjour'));// fonction qui permet de compter le nombre de caractères dans une chaîne

//----------------------------------------------------------------------------------------
function findMax(a){
    return Math.max(...a);//fonction qui permet de trouver le nombre maximum dans un tableau de nombre
}

//----------------------------------------------------------------------------------------

function findMin(a){
    return Math.min(...a);//fonction qui permet de trouver le nombre maximum dans un tableau de nombre
}

alert(findMax([1,2,3,4,5]));
alert(findMin([1,2,3,4,5]));//fonction qui permet de trouver le nombre maximum dans un tableau de nombre

//----------------------------------------------------------------------------------------

function sum(a){
    return a.reduce((acc,curr)=> acc + curr, 0);//fonction qui permet de calculer les éléments d'un tableau
}
alert(sum([1,2,3,4]));


//----------------------------------------------------------------------------------------

function filtrerTableau(tableau,condition){
    return tableau.filter(condition);
}


const tableau = [1,2,3,4,5];
const resultat = filtrerTableau(tableau,element => element % 2 === 0);// fonction qui permet de filtrer les éléments d'un tableau en fonction d'une condition donnée.
alert(resultat);


//----------------------------------------------------------------------------------------
function factorielle(nombre){
    if(nombre <=1){
        return 1;// si nombre est inférieur ou égale à 1, retourne la valeur 1, car factorielle de 0 ou 1 = 1
    }else{
        var resulat = 1;// resulat est égale 1
        for(var i = 2; i <= nombre; i++){ // tant que la variable resulat qui est égale à 2 est inférieur ou égale à la variable resulat déclarée un peu plus haut. Fais le factorielle de la valeur du résulat * le nombre de fois en boucle

            resulat *= i;
        }
        return resulat;
    }
}
alert(factorielle(5));
//------------------------------------------------------------------------------

function estPremier(nombre) {
    // Si le nombre est inférieur ou égal à 1, il n'est pas premier
    if (nombre <= 1) {
        return false;
    }
    // Vérifie s'il existe des diviseurs autres que 1 et le nombre lui-même
    for (var i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false; // Le nombre n'est pas premier s'il a un diviseur autre que 1 et lui-même
        }
    }
    return true; // Si aucun diviseur autre que 1 et le nombre lui-même n'est trouvé, le nombre est premier
}

// Test de la fonction
alert(estPremier(7)); // ➞ true
alert(estPremier(14)); // ➞ false

//------------------------------------------------------------------------
function fibonacci(n) {
    let sequence = [0, 1]; // Les deux premiers termes de la séquence de Fibonacci
    // Calcul des termes suivants de la séquence
    for (let i = 2; i < n; i++) {
        let nextTerm = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextTerm);
    }
    return sequence;
}

// Test de la fonction
alert(fibonacci(10)); // Génère les 10 premiers termes de la séquence de Fibonacci





























