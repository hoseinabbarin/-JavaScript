const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// Переделать в ДЗ не fetch!!!!! а new Promise()

function httpGet(url) {

  return new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });

}


class ProductList {
  #goods;

  constructor(container = '.products') {
    this.container = container;
    this.#goods = [];
    this.allProducts = [];

     this.#fetchProducts();

    console.log(this.sumPrice());
  }

  #fetchProducts() {

    httpGet(`${API}/catalogData.json`).then(resolve =>{
      this.#goods = JSON.parse(resolve);
      this.#render();
      console.log(this.#goods);
    });
  
  }

  #render() {
    const block = document.querySelector(this.container);

    for (let product of this.#goods) {
      const productObject = new ProductItem(product);

      this.allProducts.push(productObject);

      block.insertAdjacentHTML('beforeend', productObject.getHTMLString());
    }
  }

  sumPrice() {
    return this.#goods.reduce((sum, { price }) => sum + price, 0);
  }
}

class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.product_name = product.product_name;
    this.price = product.price;
    this.id_product = product.id_product;
    this.img = img;
  }
  getHTMLString() {
    return `<div class="product-item" data-id="${this.id_product}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.product_name}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
}

const list = new ProductList();

