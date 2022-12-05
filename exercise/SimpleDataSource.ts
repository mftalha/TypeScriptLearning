import { Product } from './Product';

export class SimpleDataSource { //product bilgilerini temsil edecek.
    private products : Array<Product>; // verilere dışarıdan erişimi sınırlamak için

    constructor(){ // SimpleDataSource nesnesi oluşturulduğu an products arrayinin içine aşşağıdaki veriler atılacak
        this.products = new Array<Product>(
            new Product(1,"Samsung S5","Telefon",1000),
            new Product(2,"Samsung S6","Telefon",2000),
            new Product(3,"Samsung S7","Telefon",3000),
            new Product(4,"Samsung S8","Telefon",4000),
        );
    }
    getProducs(): Product[]{ // burdaki verileri çekmek için method
        return this.products;
    }
}