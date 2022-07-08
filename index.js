// Call all document element

const username = document.getElementById('username');
const usermail = document.getElementById('usermail');
const login = document.querySelector('.login');
const form = document.getElementById('form');



const questions = [
    {
        id: 1,
        question: "Lequel des éléments suivants est un avantage de l'utilisation de JavaScript ?",
        correctAnswer: "Toutes ces réponses",
        answerSuggested: [
            "Retour immédiat aux visiteurs",
            "Augmentation de l'interactivité",
            "Toutes ces réponses",
            "Moins d'interaction avec le serveur"
        ]
    },
    {
        id: 2,
        question: "Comment obtenir le nombre total d'arguments passés à une fonction ?",
        correctAnswer: "Utilisation de la propriété arguments.length",
        answerSuggested: [
            "Aucune des réponses ci-dessus.",
            "Utilisation de la propriété arguments.length",
            "Utilisation de la propriété args.length",
            "Les deux ci-dessus"
        ]
    },
    {
        id: 3,
        question: "Laquelle des fonctions suivantes de l'objet String crée un lien hypertexte HTML qui demande une autre URL ?",
        correctAnswer: "link()",
        answerSuggested: [
            "link()",
            "sub()",
            "sup()",
            "small()"
        ]
    },
    {
        id: 4,
        question: "Laquelle des fonctions suivantes de l'objet Array applique une fonction simultanément à deux valeurs du tableau (de gauche à droite) afin de le réduire à une seule valeur ?",
        correctAnswer: "reduce()",
        answerSuggested: [
            "reduceRight()",
            "reduce()",
            "pop()",
            "push()"
        ]
    },
    {
        id: 5,
        question: "Laquelle des fonctions suivantes de l'objet Array extrait une section d'un tableau et renvoie un nouveau tableau ?",
        correctAnswer: "slice()",
        answerSuggested: [
            "slice()",
            "reverse()",
            "shift()",
            "some()"
        ]
    },
    {
        id: 6,
        question: "Quelle méthode intégrée inverse l'ordre des éléments d'un tableau ?",
        correctAnswer: "reverse()",
        answerSuggested: [
            "changeOrder(order)",
            "sort(order)",
            "reverse()",
            "Aucune de ces réponses"
        ]
    },
    {
        id: 7,
        question: "Quelle méthode intégrée appelle une fonction pour chaque élément du tableau ?",
        correctAnswer: "forEach()",
        answerSuggested: [
            "loop()",
            "forEach()",
            "while()",
            "Aucune de ces réponses"
        ]
    },
    {
        id: 8,
        question: "Laquelle des fonctions suivantes de l'objet String divise un objet String en un tableau de chaînes de caractères en séparant la chaîne de caractères en sous-chaînes ?",
        correctAnswer: "split()",
        answerSuggested: [
            "split()",
            "slice()",
            "replace()",
            "search()"
        ]
    },
    {
        id: 9,
        question: "Laquelle des fonctions suivantes de l'objet Number définit le nombre total de chiffres à afficher d'un nombre ?",
        correctAnswer: "toPrecision()",
        answerSuggested: [
            "toExponential()",
            "toLocaleString()",
            "toPrecision()",
            "toFixed()"
        ]
    },
    {
        id: 10,
        question: "Laquelle des fonctions suivantes de l'objet String renvoie la valeur de la chaîne de caractères appelante convertie en majuscules ?",
        correctAnswer: "toUpperCase()",
        answerSuggested: [
            "toLocaleUpperCase()",
            "toUpperCase()",
            "substring()",
            "toString()",
        ]
    },
    {
        id: 11,
        question: "Quelle méthode intégrée ajoute un ou plusieurs éléments à la fin d'un tableau et renvoie la nouvelle longueur du tableau ?",
        correctAnswer: "push()",
        answerSuggested: [
            "last()",
            "None of the above.",
            "push()",
            "put()"
        ]
    },
    {
        id: 12,
        question: "Laquelle des fonctions suivantes de l'objet Array renvoie un nouveau tableau composé de ce tableau joint à d'autres tableaux et/ou valeurs ?",
        correctAnswer: "concat()",
        answerSuggested: [
            "some()",
            "pop()",
            "concat()",
            "push()"
        ]
    },
    {
        id: 13,
        question: "Laquelle des fonctions suivantes de l'objet Array joint tous les éléments d'un tableau en une chaîne de caractères ?",
        correctAnswer: "join()",
        answerSuggested: [
            "concat()",
            "join()",
            "pop()",
            "map()"
        ]
    },
    {
        id: 14,
        question: "Quelle méthode est utilisée pour accèder au contenu de l'élément d'un Object en JavaScript",
        correctAnswer: "Object.element",
        answerSuggested: [
            "Object.element",
            "Object{element}",
            "Object(element)",
            "Object[element]"
        ]
    },
    {
        id: 15,
        question: "Lequel des énoncés suivants est correct concernant les caractéristiques de JavaScript ?",
        correctAnswer: "Toutes ces réponses",
        answerSuggested: [
            "JavaScript est un langage de programmation interprété et léger",
            "JavaScript est conçu pour créer des applications centrées sur le réseau",
            "Toutes ces réponses",
            "JavaScript est complémentaire et intégré à Java"
        ]
    },
];

// validation 
// au clique sur le button, il verifie le mail et le nom
// si c'est valide il appel la page aux question 
// si c'est pas valide envoi un message d'erreur

login.addEventListener('click', connexion)