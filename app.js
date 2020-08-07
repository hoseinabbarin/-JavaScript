//пример 1
let a = 1, b = 1, c, d;
c = ++a;
alert(c);// c равно 2 потому что мы поставили ++ перид а и тогда сначало увеличить 
         // одень на а и сумма полчуиться 2

// пример 2
d = b++;
alert(d);// d равно 1 потому что ++ после b и сначало b дает свой количество 
         // на d и потом увеличится
         
//пример 3
c = 2 + ++a;
alert(c);// c равно 5 потому что 2 же 2 но ++a будет равно 2 потому что знак ++ перид а
         // и равно тоже 2 тогда 2+2 = 4 но еще одни из Линия 3 добовить и сумма 5        
 
         
//пример 4
d = 2 + b++;
alert(d);// d равно 4 потому что 2 же 2 и плюс (линий 8 -> b++=2 ) 
         // и d = 2 +2 = 4

alert(a);// равно 3 потому что в линий 3 -> 2 и в линий 13 -> 2+1=3
alert(b);// равно 3 потому что в линий 8 -> b = 2 и в линий 19 -> 2+1=3


/*
2. Чему будут равны переменные x и a в примере ниже? 
Написать почему так произошло (описать последовательность действий). 
*/
let a1 = 2;
let x = 1 + (a1 *= 2);// x равно 5 и а равно 4 потому что количество а умножается на 2 и потом складывает на 1
                     // и будет равно так x = 1 +(2*2)=5 

alert(a1);
alert(x);

//3. Объявить две переменные a и b и задать им целочисленные произвольные начальные значения. 
let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));

if(num1>=0 && num2>=0){
    let Minus = num1-num2;
    alert("Разность первый чесло и второй число = " +Minus);  
}
if(num1<0 && num2<0){
    let composition = num1*num2;
    alert("произведение первый чесло и второй число = " +composition)
}
if((num1<0 && num2>=0)||(num1>=0 && num2<0)){
    let sum = num1+num2;
    alert("cумма первый чесло и второй число = "+sum);
}


/*
4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их и возвращать результат. 
Обязательно использовать оператор return. 
*/
/**
 * функций сумма чесло1 и чесло 2
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number} сумма чесло1 и чесло2
 */


function sum(num1,num2){
    let sumy = num1+num2;
    return sumy;
}
alert("сумма параметр (4+5) функций : "+sum(4,5));

/**
 * функций розность чесло1 и чесло 2
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number} розность чесло1 и чесло2
 */

function minus(num1,num2){
    let minus = num1-num2;
    return minus;
}
alert("розность параметр (4-5) функций : "+minus(4,5));


/**
 * функций произведение чесло1 и чесло2
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number} произведение чесло1 и чесло2
 */

function prozvedine(num1,num2){
    let proz = num1*num2;
    return proz;
}
alert("произведение параметр (4*5) функций : "+prozvedine(4,5));




function razdelit(num1,num2){
    let raz = num1/num2;
    return raz;
}
alert("розделить параметр (4/5) функций : "+razdelit(4,5));


/*
5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от 
переданного значения операции (использовать switch) выполнить одну из арифметических операций 
(использовать функции из задания 4) и вернуть полученное значение. 
*/

/**
 * функций операция разделение и сумма и вычисление и умножение из 2 числи 
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {strok} operation 
 * @returns {number} результат операция 
 */

function mathOperation(arg1,arg2,operation){

    switch(operation){
        case sum:
           return sum(arg1,arg2);
            
        case minus:
           return minus(arg1,arg2);
            
        case prozvedine:
           return prozvedine(arg1,arg2);
            
        case razdelit:
           return razdelit(arg1,arg2);
                  
    }
}

alert("сумма первый и второй число (5+7) из функций mathOperation равно : " + mathOperation(5,7,sum));
alert("вычеслиние первый и второй число (5-7) из функций mathOperation равно : " + mathOperation(5,7,minus));
alert("произведение первый и второй число (5*7) из функций mathOperation равно : " + mathOperation(5,7,prozvedine));
alert("розделить первый и второй число (5/7) из функций mathOperation равно : " + mathOperation(5,7,razdelit));




let Dengie = prompt("вводите сумма деньги пожалусто : ");
let numberSymble = Dengie.length;
let lastChar = Dengie.charAt(numberSymble-1);


/**
 * Программа должна спросить у пользователя число, это будет количество денег, которое он
 *  хочет положить на счет в банке;
 * @param {strok} lastChar
 * @returns {strok}  выводить слово «рубль» в правильном падеже, в зависимости от введенного числа;
 */

function massageRyble(lastChar){

    switch(lastChar){
        case "1":
            return alert(`Ваша сумма в ${Dengie} рубль успешно зачислена`);
        case "2":
        case "3":
        case "4":
            return alert(`Ваша сумма в ${Dengie} рубля успешно зачислена`) ;
        default:
            return alert(`Ваша сумма в ${Dengie} рублей успешно зачислена`);   
    }
    
    
}

massageRyble(lastChar);