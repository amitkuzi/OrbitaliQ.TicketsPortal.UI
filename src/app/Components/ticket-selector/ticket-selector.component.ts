import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { Environments } from '../../../environments/environment.development';
import { TicketFullData } from '../../Services/TicketFullData';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CartServiceService } from '../../Services/Cart/cart-service.service';


@Component({
  selector: 'app-ticket-selector',
  standalone: true,
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,

  ],
  templateUrl: './ticket-selector.component.html',
  styleUrl: './ticket-selector.component.css'
})
export class TicketSelectorComponent implements OnInit {
  onSelect(_t20: TicketFullData) {
    this.cartService.AddToCart(_t20);
  }

  public ticketRepo: BehaviorSubject<TicketFullData[]> = new BehaviorSubject<TicketFullData[]>([]);

  constructor(
    private matCardModule: MatCardModule,
    private matToolbarModule: MatToolbarModule,
    private matIconModule: MatIconModule,
    private client: HttpClient,
    private cartService: CartServiceService
  ) { }

  public get ticketRepo$(): Observable<TicketFullData[]> {
    return this.ticketRepo.asObservable();
  }

  ngOnInit(): void {
    const getPortalTicketsAPi = `${Environments.ticketPortalApi}${Environments.PortalTicketsAPi}`;
    this.client.get<TicketFullData[]>(getPortalTicketsAPi)
      .subscribe((data) => {
        this.ticketRepo.next(data);
        console.log("TicketSelectorComponent ngOnInit:", data);
      }, (error) => {
        console.log("TicketSelectorComponent ngOnInit error:", error);
        this.ticketRepo.next(error);
      });
  }

}


