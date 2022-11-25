//uygulama için oluşturdugumuz sayfaları kullanabilmek için

import { Product } from './Product';
import {ProductService} from './ProductService';

let _productService = new ProductService();

let result;
result = _productService.getProducts();
console.log("bütün verileri çekme:");
console.log(result);

console.log("-----------------");
result = _productService.getById(2);
console.log("Id ye göre veri çekme:");
console.log(result);

console.log("-----------------");
console.log("yeni ürün oluştur:");
let p = new Product();

p.name = "Iphone 6";
p.price = 4000;
p.category ="Telefon";

_productService.saveProduct(p);
result = _productService.getProducts();
console.log(result);

console.log("-----------------");
console.log("ürün silme:");
result = _productService.getById(2);
_productService.deleteProduct(result); //2 NUMARALI veriyi siliyoruz.
result = _productService.getProducts();
console.log(result);

console.log("-----------------");
console.log(" ürün güncelle:");

p = new Product();
p.id=5;
p.name = "Iphone 9";
p.price = 7000;
p.category ="Tablet";

_productService.saveProduct(p);
result = _productService.getProducts();
console.log(result);
