import { Component } from "@angular/core";
import {products} from "../products";


@Component({
    selector:"product_list",
    templateUrl: './product-list.html',
    styleUrls : ['./product_list.css']

})

export class ProductList{
    products = products;
    share()
    {
        window.alert("fuck");
    }

    


}