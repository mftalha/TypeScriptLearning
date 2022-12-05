"use strict";
exports.__esModule = true;
exports.ProductService = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource();
        this.products = new Array();
        this.dataSource.getProducs().forEach(function (p) { return _this.products.push(p); }); // çektiğimiz verileri listemize pushluyoruz
    }
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (p) { return p.id === id; })[0]; // id li veriyi getir ;; [0] = sadece 1 tane veri dönder.
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) { // eğer id mevcut değilse direk yeni eleman ekle
            product.id = this.generateId();
            this.products.push(product);
        }
        else { // eleman mevcut ise id den 1 sonraki sıraya at yeni elemanı
            var index = // verilen id dizide ki karşılık geldiği id li satırın indexini al.
             void 0; // verilen id dizide ki karşılık geldiği id li satırın indexini al.
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].id === product.id) {
                    index = i;
                }
            }
            this.products.splice(index, 1, product); //bir sonrasına yeni elemanı kaydet // belirtilen indexdeki elemanı sil yerine product'u ekle
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product); // verilen id dizide ki karşılık geldiği id li satırın indexini al.
        if (index > 0) {
            this.products.splice(index, 1);
        }
    };
    ProductService.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) != null) { //dizide baştan sona dön id = keye eşit olmayana kadar = key'i arttır == eşit olmadığında, bu id = yeni eklenecek verinin id si olacaktır
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
