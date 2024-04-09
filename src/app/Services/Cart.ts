export class Price {
    "weekdayPrice": number;
    "weekendPrice": number;
    "fixedPrice": number;
    "priceExceptions": []
}

export interface CartSaleble {
    "id": number;
    "name": string;
    "description": string;
    "prices": Price;
}

export class CartItem {
    "item": CartSaleble; // The product itself
    "quantity": number; // The quantity of the product
}

export class Cart {
    "items": CartItem[]; // CartItem[]
}
