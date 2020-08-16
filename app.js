
'use strict'
/*
1. Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999], мы должны 
получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
  - единицы (в свойстве units)  - десятки (в свойстве tens)  - сотни (в свойстве hundereds) 
*/
let answerNum = +prompt("Пишите пожалуйста число между 0 до 999 и получите разделение свой число :");
/**
 * Функий generatorNum() генерирует наше число что будет цели и если мы вводем не провелний число нас сообщеть что 
 * нужно вводит провильний число между 0 и 999 и после того если число будет провильно тогда вызвает Фнкций analysNum()
 * @param {Number} num вводим число цели между 0 и 999
 */
generatorNum(answerNum);
function generatorNum(num){
    if(num <0){
        alert("введите число больше нуля!")
        let ansNum = +prompt("Пишите пожалуйста число между 0 до 999 и получите разделение свой число :");
        generatorNum(ansNum);
        return;
    }
    if(num >999){
        alert("введите число меньше 999!")
        let ansNum = +prompt("Пишите пожалуйста число между 0 до 999 и получите разделение свой число :");
        generatorNum(ansNum);
        return
    }
    if(Number.isInteger(num)===false){
        alert("неправильно вводите число,пишите цели число!")
        let ansNum = +prompt("Пишите пожалуйста число между 0 до 999 и получите разделение свой число :");
        generatorNum(ansNum);
        return;
    }else{
        analysNum(num);
    }
}

/**
 * Функций опеделяет что наше число разделить по частями единицы и десятки и сотни
 * @param {Number} num число который мы получили из generatorNum()
 */

function analysNum(num){
    let units = num%10;
    let tens = ((num%100)-units)/10;
    let hundered = Math.floor((num-tens*10)/100);

    let obJ1=new Object();
    obJ1.units =(` units: ${units} //это единицы`);
    obJ1.tens =(` tens: ${tens} //это десятки`);
    obJ1.hundered =(` hundered: ${hundered} //это сотни`);
    console.log(obJ1);
}


/*
1.1 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product,
 который принимает параметры name и price, сохраните их как свойства объекта. Также объекты
  типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%. 
*/
//es5
function ProductEs5(name,price){
     this.name=name;
     this.price=price;

}

ProductEs5.prototype.makePercentDiscount=function(discount){
   this.price=this.price - ((this.price/100)*discount);
}

let acounT1=new ProductEs5("Hosein","1000");
acounT1.makePercentDiscount(30);

console.log(acounT1);

//es6

class ProductEs6{
    constructor(name,prise){
        this.name=name;
        this.price=prise;
    }

    makePercentDiscountes6(discount){
       this.price=this.price -((this.price/100)*discount);
    }
}

let acounT2 = new ProductEs6("Iliya","1500");
acounT2.makePercentDiscountes6(25);
console.log(acounT2);



/*
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),  а) конструктор Post, 
который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты 
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство 
text объекта. б) конструктор AttachedPost, который принимает параметры author, text, date. 
Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. 
Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false.
Унаследуйте в объектах типа AttachedPost методы из Post. Объекты типа AttachedPost должны иметь
 метод makeTextHighlighted, который будет назначать свойству highlighted значение true. 
*/

function Post(author,text,date){
    this.author=author;
    this.text=text;
    this.date=date;
};

Post.prototype.edit=function(textEdit){
    this.text=textEdit;
};

function AttachedPost(author,text,date,highlighted=false){
      Post.call(this,author,text,date);
      this.highlighted=highlighted;

}

AttachedPost.prototype=Object.create(Post.prototype);
AttachedPost.prototype.constructor=AttachedPost;

AttachedPost.prototype.makeTextHighlighted=function(){
    this.highlighted=true;
}

let personEs5=new AttachedPost("hosein","hello world","2020/8/14");
console.log(AttachedPost);
console.log(personEs5.makeTextHighlighted);
console.log(personEs5);
personEs5.edit("Iliya");
console.log(personEs5);
personEs5.makeTextHighlighted();
console.log(personEs5);

//es6

class Post1{
    constructor(author,text,date){
        this.author=author;
        this.text=text;
        this.date=date;
    }
    edit1(editText){
        this.text=editText;
    }
};

class AttachedPost1 extends Post1{
    constructor(author,text,date,highlighted=false){
        super(author,text,date);
        this.highlighted=highlighted;
    }

    makeTextHighlighted1(){
        this.highlighted=true;
    }


}

let personEs6=new AttachedPost1("Fatemeh","hello world","2020/8/14");
console.log(AttachedPost1);
console.log(personEs6);
personEs6.edit1("Ali");
console.log(personEs6);
personEs6.makeTextHighlighted1();
console.log(personEs6);


