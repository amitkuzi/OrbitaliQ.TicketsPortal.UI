import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PricePipe } from '../../pipes/price.pipe';
import { CommonModule } from '@angular/common';
import { TraslateDirective } from '../../directives/traslate.directive';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TicketFullData } from '../../Services/TicketFullData';
import { MapitemsDebugPipe } from '../../pipes/mapitems-debug.pipe';
import { CartSaleble } from '../../Services/Cart';


@Component({
  selector: 'app-ticket-view',
  standalone: true,
  imports: [
    MatCardModule,
    MatToolbarModule,
    CommonModule,
    TraslateDirective,
    PricePipe,
    MapitemsDebugPipe,
    MatCardModule,
  ],
  templateUrl: './ticket-view.component.html',
  styleUrl: './ticket-view.component.css'
})
export class TicketViewComponent {
  CardClicked() {
    this.ticketSelected.emit(this.ticket);
  }

  constructor() {
    // Constructor logic here
  }


  @Input() ticket: CartSaleble | undefined = undefined;
  @Output() ticketSelected: EventEmitter<CartSaleble> = new EventEmitter<CartSaleble>();
}
