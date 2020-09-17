class GoodsItem{
    constructor(title,price,ImgSrc,ImgArt){
        this.title=title;
        this.price=price;
        this.ImgSrc=ImgSrc;
        this.ImgArt=ImgArt;
        
    }
    render(){
        return `

            <div class="product-item">
            <img src="${this.ImgSrc}" alt="${this.ImgAlt}">
            <h3>${this.title}</h3>
            <p>${this.price}</p>
            <button class="by-btn" id="${this.id}">Добавить в корзину</button>
            </div>
`
    }
}

class GoodList{
    constructor(){
        this.goods = [];
    }
    fetchGoods(){
        this.goods=[
            {id:1, title: 'Shirt', price:20000, ImgSrc:'img/Layer_2.jpg', ImgAlt:'Layer_2.jpg'},
            {id:2, title: 'Socks', price: 1500,ImgSrc:'img/Layer_3.jpg', ImgAlt:'Layer_3.jpg'},
            {id:3, title: 'Jacket', price: 5000,ImgSrc:'img/Layer_4.jpg', ImgAlt:'Layer_4.jpg'},
            {id:4, title: 'T-Shirt', price:4500,ImgSrc:'img/Layer_5.jpg', ImgAlt:'Layer_5.jpg'},
        ];
    }

    render(){
        let listHtml ='';
        this.goods.forEach(good =>{
            const goodItem = new GoodsItem(good.title,good.price,good.ImgSrc,good.ImgAlt);
            listHtml +=goodItem.render();
        });
        document.querySelector('.products').innerHTML = listHtml;
    }
/**
 * метод renderSum() определяет сумма все товары, через форЕкс возьмем каждый элемент и потом вызваем чериз this
 * и добавим свойства price in Arry sumGoods,потом через фор определяем сумму цена всех товары
 */          
    renderSum(){
        let sumGoods =[];
        this.goods.forEach(good =>{
            sumGoods.push(good.price);
        });
        let summy=0;
        for(let sum of sumGoods){
            summy +=sum;
        }
        document.querySelector('.products').insertAdjacentText("afterend",summy);
    }

// renderGenerator():определяет данные которые нужно показывать в бокс корзина с свой свойства
// buy : это параметр который мы возмем из event Click  и так понимаем на каком кнопки мы нажимали и 
// так мы можем чериз id найти других свойства
    renderGenerator(buy){
        

            const boxHtml='';
            
            this.goods.forEach(good =>{
                if(good.id === buy.id){
                    const boxItem = new boxProducts(good.id,good.title,good.price);
                    boxHtml +=boxItem.renderBox();
                }
            
        });

        document.querySelector('.boxing').innerHTML = boxHtml;

    }
}

/**
 * class boxProducts :опеределем свойства корзины и создаем таблица который должен получить из выбор любой товар
 */

class boxProducts extends GoodsItem{

    renderBox(){
         return`
         <div class="box">
                <tr>
                    <td>${this.id}</td>
                    <td>${this.title}</td>
                    <td>${this.price}</td>
                </tr>
         </div>
         
         `;
    }

};


    






const list = new GoodList();
list.fetchGoods();
list.render();
list.renderSum();
