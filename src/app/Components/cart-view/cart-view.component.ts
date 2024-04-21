import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/Cart/cart-service.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CartItem, CartSaleble } from '../../Services/Cart';
import { TraslateDirective } from '../../directives/traslate.directive';
import { PricePipe } from '../../pipes/price.pipe';
import { MapitemsDebugPipe } from "../../pipes/mapitems-debug.pipe";

@Component({
    selector: 'app-cart-view',
    standalone: true,
    templateUrl: './cart-view.component.html',
    styleUrl: './cart-view.component.css',
    imports: [
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        CommonModule,
        TraslateDirective,
        PricePipe,
        MapitemsDebugPipe
    ]
})
export class CartViewComponent implements OnInit {



  totalPrice: any;
  cartItems: CartItem[] = [];

  constructor(
    private matCardModule: MatCardModule,
    private matToolbarModule: MatToolbarModule,
    private matIconModule: MatIconModule,
    private cartService: CartService
  ) { }

  public get cart$() { return this.cartService.cart$; }

  ngOnInit(): void {

    this.cartService.cart$.subscribe((cart) => {
      console.log("CartViewComponent ngOnInit:", cart);
      this.totalPrice = this.cartService.cart$.value.items.reduce((acc, saleble) => acc + this.itemPrice(saleble.item) * saleble.quantity, 0);
      this.cartItems = this.cartService.cart$.value.items;
    });
  }

  private itemPrice(item: CartSaleble): number {
    console.log("CartViewComponent itemPrice:", item.prices);
    return item.prices.fixedPrice;
  }

  increac(arg0: CartSaleble) {
    this.cartService.AddToCart(arg0);
  }
  reduce(arg0: number) {
    this.cartService.CartDecrease(arg0);
  }
  ClearCart() {
    this.cartService.ClearCart();
  }
}
