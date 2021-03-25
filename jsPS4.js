/**
 * Ćwiczenie 4 - obiekty
 */
let ID = 0;

class Product {
    constructor(id, name, model, price, energyConsumption, productAge) {
        this._id = id;
        this._name = name;
        this._model = model;
        this._price = price;
        this._energyConsumption = energyConsumption;
        this._productAge = productAge;
    }


    get getId() {
        return this._id;
    }

    set setId(value) {
        this._id = value;
    }

    get getName() {
        return this._name;
    }

    set setName(value) {
        this._name = value;
    }

    get getModel() {
        return this._model;
    }

    set setModel(value) {
        this._model = value;
    }

    get getPrice() {
        return this._price;
    }

    set setPrice(value) {
        this._price = value;
    }

    get getEnergyConsumption() {
        return this._energyConsumption;
    }

    set setEnergyConsumption(value) {
        this._energyConsumption = value;
    }

    get getEnergyCost() {
        return this.getEnergyConsumption * 0.617;
    }

    get productAge() {
        return new Date().getFullYear() - this._productAge;
    }

    set productAge(value) {
        this._productAge = value;
    }
}

class ProductList {
    constructor() {
        this._productList = [];
    }

    addProductToList(product) {
        this._productList.forEach(element => {
            if (product.getId === element.getId) {
                throw 'The product is currently on the list';
            }
        });
        this._productList.push(product);
    }

    editProduct(idProduct, product) {
        this._productList[this._productList.findIndex(value => value.getId === idProduct)] = product;
    }

    displayProduct(id) {
        console.log(Object.values(this._productList[id - 1]));
    }

    displayAllProducts() {
        this._productList.forEach(element => console.log(Object.values(element)));
    }

}

class Magazine extends ProductList {
    _mapOfProducts = new Map();

    constructor() {
        super();
    }

    addProductToMagazine(product, quantity) {
        this._mapOfProducts.set(product, quantity);
    }

    takeProductFromMagazine(product, quantityToTake) {
        if (this._mapOfProducts.has(product)) {
            let quantityOnMagazine = this._mapOfProducts.get(product);
            if ((quantityOnMagazine - quantityToTake) < 0) {
                console.log("REFUSAL !! Current quantity = " + quantityOnMagazine)
            } else {
                this._mapOfProducts.set(product, quantityOnMagazine - quantityToTake);
            }
        }
    }

    returnProductToMagazine(product, quantityGiven) {
        let quantityOnMagazine = this._mapOfProducts.get(product);
        this._mapOfProducts.set(product, quantityOnMagazine + quantityGiven);
    }

    displayProductsFromMagazine() {
        console.log(this._mapOfProducts.entries())
    }
}

class Shop extends ProductList {
    constructor() {
        super();
    }

    addProduct(name, model, price, energyConsumption) {
        this.addProductToList(this._productList.length + 1, name, model, price, energyConsumption)
    }

    addProductWithId(idProduct, name, model, price, energyConsumption) {
        this.addProductToList(idProduct, name, model, price, energyConsumption)
    }
}

class Order {
    constructor() {
        this.basket = [];
    }

    addProductsToBasket(...products) {
        this.basket.push(...products);
    }

    completeTheOrder() {
        for(let i = 0; i< this.basket.length; i++){
            magazine.takeProductFromMagazine(this.basket[i], 1);
        }
    }

    displayBasket(){
        console.log(this.basket)
    }
}

let product1 = new Product(1, "Microwave", "SuperHeat", 500, 1, 2020);
let product2 = new Product(2, "PC", "WINCMD-01", 3000, 1, 2021);
let product3 = new Product(3, "PC For Gamers", "WINCMD-01", 9000, 1, 2021);
let product4 = new Product(4, "Laptop For Gamers", "SuperHeat ASUS", 15500, 0.6, 2020);

let productList = new ProductList();
let magazine = new Magazine();
let shop = new Shop();
let order = new Order();

productList.addProductToList(product1);
productList.addProductToList(product2);
productList.addProductToList(product3);
productList.addProductToList(product4);

magazine.addProductToMagazine(product1, 10);
magazine.addProductToMagazine(product2, 10);
magazine.addProductToMagazine(product3, 10);

//magazine.displayProductsFromMagazine();
magazine.takeProductFromMagazine(product4, 5);
//magazine.displayProductsFromMagazine();


shop.addProduct("Laptop For Gamers", "SuperHeat ASUS", 15500, 0.6)

console.log("Stan magazynu przed zrealizowaniem ");
magazine.displayProductsFromMagazine();
order.addProductsToBasket(product1, product2, product3, product4);
console.log("dodano do koszyka produkt: " + Object.values(product1));
console.log("dodano do koszyka produkt: " + Object.values(product2));
console.log("dodano do koszyka produkt: " + Object.values(product3));
console.log("Stan magazynu po zrealizowaniu ");
order.completeTheOrder(magazine);
magazine.displayProductsFromMagazine();

order.displayBasket();
// productList.displayProduct(4);
// product4 = new Product(4, "PC For XD", "SuperHeat", 15500, 0.6, 2020);
// productList.editProduct(product4.getId, product4);
// productList.displayProduct(4);
// productList.displayAllProducts();
