import { Point } from "./Point";
// interface ile kullanacağımız fonksiyonların şemasını çıkarttık. == planını hazırlıyoruz sadece
export interface Vehicle{
    travelTo(point: Point): void;
}