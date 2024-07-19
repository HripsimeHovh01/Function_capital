"use script"



// Դաս 11․ Տնային աշխատանք

// 1. Կրկնում եք 3 տեսակի ֆունկցիաները
// 2․ Ամեն ֆունկցիայով ստեղծով եմ 2 - 3 հատ ցակացած տեսակի գործողություն որտեղ կօգտագործեք return օպերատորը

//Function declaration

// function filmName (actor, name, date, style) {
//     return {
//         actor: actor,
//         namme: name,
//         date: date,
//         style: style
//     }
// }
// console.log(filmName("Dwayne Johnson", "Jumanji: The Next Level", 2017, "Comedy"));
// console.log(filmName("Karen Gillan", "Jumanji: The Next Level", 2017, "Comedy"));
// console.log(filmName("Ser'Darius Blain", "Jumanji: The Next Level", 2017, "Comedy"));

//Function expression

// const filmName = function(actor, style) {
//     return {
//         actor, style
//     }
// }
// console.log(filmName("Dwayne Johnson", "Comedy"));
// console.log(filmName("Karen Gillan", "Comedy"));

// 3․ փորձում եք ֆունկցիաների մեջ օգտագործել loop-եր և ստուգումներ (if, switch)

//switch
// function weekEnd(holiday){
//     switch (holiday) {
//         case "It's Saturday":
//             return "You are on holiday"
//             case "It's Sunday":
//                 return "You are on holiday"
//         default:
//             return "It's working day"
//     }
// }
// console.log(weekEnd("It's working day"));

//if
// function alarm(time) {
//     if (time <= 7.00)
//         return "You can sleep more";
//     else if (time <= 8.30)
//     return "Wake up";
//     else if(time <= 9.00)
//     return "Hurry up"
// else (time <= 10.00)
// return "You are already late"

// }
// console.log(alarm(7.00));

// 4. փորձեք ինքնուրույն ստեղծել այնպիսի calculator, որտեղ արգելված կլինի թիվը 0ին բաժանելը 

// function calc(x, y, operation) {
//     switch (operation) {
//         case "add":
//             return x + y;
//         case "subtract":
//             return x - y;
//         case "multiply":
//             return x * y;
//         case "divide":
//             if (y === 0) {
//                 return "Error: Sorry, but you can't divide by zero !";
//             } else {
//                 return x / y;
//             }
//         default:
//             return "Error: Something went worng !";
//     }
// }
// console.log(calc(15, 8, "add"));
// console.log(calc(30, 5, "subtract"));
// console.log(calc(30, 5, "subtract"));
// console.log(calc(30, 5, "multiply"));
// console.log(calc(64, 4, "divide"));
// console.log(calc(64, 0, "divide"));



// Ավելի բարդ բան ուզողների համար
// 1․ Ստեղծեք այնպիսի ֆունկցիա, որը որպես պարամետր կստանա մայրաքաղաքի անուն և կվերադարձնի երկրի անունը, 
//օրինակ գրենք՝ Yerevan, վերադարձնի Armenia

function country(capital) {
    const capitalCountries = {
        "Paris": "France",
        "London": "United Kingdom",
        "Berlin": "Germany",
        "Madrid": "Spain",
        "Yerevan": "Armenia",
        "Athens": "Greece",
        "Bern": "Switzerland",
        "Valletta": "Malta",
        "Buenos Aires": "Argentina",
        "Tehran": "Iran",
        "Canberra": "Australia"
    }
    return capitalCountries[capital] || "I can't recognice this country !";
    
}
console.log(country("Jermuk"));
