"use strict";
exports.__esModule = true;
exports.Product = void 0;
// farklı sayfalardan ulaşılabilsin diye export ediyoruz.
var Product = /** @class */ (function () {
    function Product(id, name, category, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;
