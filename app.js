'use strict'
/*
2. С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно,
 чтобы результат выглядел так:
0 – это ноль 1 – нечетное число 2 – четное число 3 – нечетное число … 10 – четное число
*/

for(let i=0;i<=10;i++){

    if(i===0){
        console.log("0 – это ноль ");
        
    }
    if((i%2)!= 0){
        console.log(i+" -нечетное число ");
    }
    if((i%2) === 0){
        console.log(i+" -четное число");
    }

}

//3. Выведите в консоль значения, указанные рядом с комментариями: 

const post = {
            
    author : "john",//вывести этот текс
    postId : 23,
    comments: [
                    {
                        userId:10,
                        userName: "Alex",
                        text:"lorem ipsum",
                        rating: {
                            likes:10,
                            dislikes: 2//вывести этот текс

                                }
                        },

                        {
                            userId:5,//вывести этот текс
                            userName: "Jane",
                            text:"lorem ipsum 2",//вывести этот текс
                            rating:{
                                likes:3,
                                dislikes:1
                            }
                        },
              ]

}


alert(post['author']);//john
alert(post['comments'][0]['rating']['dislikes']);//2
alert(post['comments'][1]['userId']);//5
alert(post['comments'][1]['text']);//lorem ipsum 2


/*
4. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый
 товар применить скидку 15%
*/

const products = [

         {
             id:3,
             price:200,
         },
         {
             id:4,
             price:900,
         },
         {
             id:1,
             price:1000,
         },
];

/**
 * функций ElementIndexArry определить скидка 15% 
 * @param {number} index 
 * @param {massiv} arry 
 * 
 */

function ElementIndexArry(index,arry){
    for(let index=0;index<arry.length;index++){
        console.log("id: "+arry[index]['id']);
        let disCount = ((arry[index]['price'])/100)*15;
        console.log("price:"+(arry[index]['price']-disCount));
    }
}

products.forEach(ElementIndexArry);



/*
5.   Перед вами находится массив с продуктами в интернет-магазине. Вам нужно: 
1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT 
2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort 
*/

const products1=[
    {
        id:3,
        price:127,
        photos:[
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id:5,
        price:499,
        photos:[]
    },
    {
        id:10,
        price:26,
        photos:[
            "3.jpg"
        ]
    },
    {
        id:8,
        price:78,
    }
]


/**
 * функий filterProduct определить что на каком часть массиве существует фотки
 * @param {string} element 
 * @param {number} index 
 * @param {massiv} arry 
 */

function filterProduct(element,index,arry){
    if(arry[index]['photos']!=null){
        console.log("id: "+arry[index]['id']);
        console.log("price: "+arry[index]['price']);
        console.log("photos: "+arry[index]['photos']);
    }
}

products1.filter(filterProduct);



products1.sort((a,b)=>a['price'] - b['price']);
console.log(products1);


/*
6. (По желанию, т.к. такая особенность практически не используется) 
Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла.
 То есть выглядеть должно примерно так: 
for(…){/* здесь пусто 
*/

for(let i=0;i<9;i++,console.log(i)){};


/*
7.  Нарисовать горку с помощью console.log (используя цикл for), как показано
на рисунке, только у вашей горки должно быть 20 рядов, а не 5: 
*/
let star1 =[];
/**
 * функций создать горы из буква "x" 
 * @param {number} n число 20 которые мы сами дали на аргу
 */
function z(n){
    for(let i=0;i<n;i++){
        star1.push('x');
        console.log(star1)
    }
}
z(20);
