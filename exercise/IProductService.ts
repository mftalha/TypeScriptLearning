import {Product} from "./Product"

//bu imza interface yapısının kullanılma sebebi : bu methodlar ile veritabanı işlemleri gibi işlemler yapabilriz. : eğerki birden fazla sql yapısıdır : mssql , mysql gibi kullanma durumlarımızda == bu sayfada bi farklılık yapmamıza gerek yok
// direk yeni sayfadanda bu interfaceyi implement edip o methodları dolduracağız ve direk proje hiç aksamadan çalışmaya devam edecek. == hangi methodların içini doldurursak o çalışır(burada biraz eksiğim var bilgi açıdan.).
export interface IProductService{ //bu servis sadece method imzalarımızı tanımlayacak : herhangi bi method gövdesi olmıyacak.
    getById(id: number): Product;
    getProducts(): Array<Product>; //Product[] şeklindede tanımalanabilir = aynı
    saveProduct(product: Product): void;
    deleteProduct(product: Product): void;
}