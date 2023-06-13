//Homework 5 Task 1
function upperCase(str) {
    const regex = /^[A-Z]/;
    if (regex.test(str)) {
        return "String's starts with uppercase character";
    } else {
        return "String's not starts with uppercase character";
    }
    
}
console.log(upperCase("Gig"));
console.log(upperCase("gig"));

//Homework 5 Task 2
function testEmail(email) {
    const trueEmail = /^.+$/;
    return trueEmail.test(email);
}
console.log(testEmail("oiIII@dddd"));


//Homework 5 Task 3
const string = "Java Script";
const anotherString = string.replace(/(\w+)\s+(\w+)/, "$2, $1");
console.log(anotherString);

//Homework 5 Task 4
function testCard(numberCard) {
    const correctCard = /^(\d{4})\-(\d{4})\-(\d{4})\-(\d{4})$/;
    return correctCard.test(numberCard);
}
console.log(testCard("1111-2222-3335-4444"));
console.log(testCard("1111-2222-335-4444"));
console.log(testCard("1111-2222--3335--4444"));

//Homework 5 Task 5
//Намахався я з цим рішенням годин 5, поки знайшов і зрозумів, що таке negative lookahead).Надіюсь, що рішення вірне)
function testEmailFull(string) {
    if (/^[^-_]\w(?!.*-.*-).*$/.test(string)) {
        return "Email is correct!";
    } else {
        return "Email is not correct!"
    }
    }
console.log(testEmailFull("oiIIIdddd-_"));
console.log(testEmailFull("ggg-qw_123Q"));
console.log(testEmailFull("-hhhshs-aaaa1K"));
console.log(testEmailFull("123H-_oso-r"));
console.log(testEmailFull("hjq_ss_12O--"))
console.log(testEmailFull("jjjjjj_1H"))

//Homework 5 Task 6
function chekLogin(login) {
    
    if (/^(?!\d)[A-Za-z0-9]{2,10}$/.test(login)) {
        const numbers = login.match(/\d/g);
        if (numbers) {
            console.log(numbers);
        }
        return console.log(true);
    } else {
        const numbers = login.match(/\d/g);
        if (numbers) {
            console.log(numbers);
        }
        return console.log(false);
    }
}
chekLogin("u112u");
chekLogin("122334fgsjk");
chekLogin("qwerty123454");