import { Injectable } from '@angular/core';
import { TicketFullData } from '../TicketFullData';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartSaleble } from '../Cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  public cart$: BehaviorSubject<Cart> = new BehaviorSubject<Cart>({ items: [] });
  constructor() { }

  public AddToCart(ticket: CartSaleble): number {
    console.log("CartServiceService AddToCart:", ticket);
    var currentCart = this.cart$.value;
    var item = currentCart.items.find((i) => i.item.id == ticket.id);
    if (item) {
      item.quantity++;
    } else {
      currentCart.items.push({ item: ticket, quantity: 1 });
    }
    console.log("CartServiceService AddToCart:", currentCart);
    this.cart$.next(currentCart);
    return ticket.id;
  }

  public ClearCart(): void {
    this.cart$.next({ items: [] });
  }


  public CartDecrease(itemId: number): number {
    var currentCart = this.cart$.value;
    var item = currentCart.items.find((i) => i.item.id == itemId);
    console.log("CartServiceService CartDecrease:", item);
    if (item && item.quantity > 1) {
      item.quantity--;
    }
    else if (item && item.quantity == 1) {
      currentCart.items = currentCart.items.filter((i) => i.item.id != itemId);
    } else {
      console.log("CartServiceService CartDecrease item not found :", itemId);
      return -1;
    }
    this.cart$.next(currentCart);
    return itemId;
  }

  public CartRemove(itemId: number): number {
    var currentCart = this.cart$.value;
    currentCart.items = currentCart.items.filter((i) => i.item.id != itemId);
    this.cart$.next(currentCart);
    return itemId;
  }
}
