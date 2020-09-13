"use strict"
const products=[

    {id:1, title: 'Notebook', price:20000, ImgSrc:'img/Layer_2.jpg', ImgAlt:'Layer_2.jpg'},
    {id:2, title: 'Mouse', price: 1500,ImgSrc:'img/Layer_3.jpg', ImgAlt:'Layer_3.jpg'},
    {id:3, title: 'Keyboard', price: 5000,ImgSrc:'img/Layer_4.jpg', ImgAlt:'Layer_4.jpg'},
    {id:4, title: 'Gamepad', price:4500,ImgSrc:'img/Layer_5.jpg', ImgAlt:'Layer_5.jpg'},

];

const renderProduct=(title,price,ImgSrc,ImgAlt) =>{
    return `<div class="product-item">
            <img src="${ImgSrc}" alt="${ImgAlt}">
            <h3>${title}</h3>
            <p>${price}</p>
            <button class="by-btn">Добавить в корзину</button>
    
    </div>`;

};

const renderProducts = (list) =>{
    const productList = list.map(item => renderProduct(item.title,item.price,item.ImgSrc,item.ImgAlt));
      console.log(productList.includes(' '));
    

    document.querySelector('.products').innerHTML = productList;
};

renderProducts(products);