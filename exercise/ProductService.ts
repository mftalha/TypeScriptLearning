import { IProductService } from "./IProductService";
import {Product} from './Product'
import { SimpleDataSource } from "./SimpleDataSource";

export class ProductService implements IProductService{

    private dataSource: SimpleDataSource; //SimpleDataSource u çekiyoruz : verilerimizi çektiğimiz class
    private products: Array<Product>; //class dan çekeğimiz verileri koyacağımız array

    constructor(){
        this.dataSource = new SimpleDataSource(); 
        this.products = new Array<Product>(); 
        this.dataSource.getProducs().forEach(p => this.products.push(p)); // çektiğimiz verileri listemize pushluyoruz
    }

    getById(id: number): Product { //id li veriyi döndür
        return this.products.filter(p =>p.id === id)[0]; // id li veriyi getir ;; [0] = sadece 1 tane veri dönder.
    }
    getProducts(): Product[] { //tüm diziyi döndür
        return this.products;
    }
    saveProduct(product: Product): void {
        if(product.id == 0 || product.id == null)  { // eğer id mevcut değilse direk yeni eleman ekle
            product.id = this.generateId();
            this.products.push(product);
        }else{ // eleman mevcut ise id den 1 sonraki sıraya at yeni elemanı
            let index; // verilen id dizide ki karşılık geldiği id li satırın indexini al.
            for(let i=0 ; i<this.products.length; i++){
                if(this.products[i].id === product.id){
                    index =i;
                }
            }
            this.products.splice(index,1,product); //bir sonrasına yeni elemanı kaydet // belirtilen indexdeki elemanı sil yerine product'u ekle
        }
    }
    deleteProduct(product: Product): void {
        let index= this.products.indexOf(product); // verilen id dizide ki karşılık geldiği id li satırın indexini al.
        if(index>0){
            this.products.splice(index,1);
        }
    }

    private generateId(): number{
        let key =1;
        while(this.getById(key) !=null){ //dizide baştan sona dön id = keye eşit olmayana kadar = key'i arttır == eşit olmadığında, bu id = yeni eklenecek verinin id si olacaktır
            key++;
        }
        return key;
    }

}