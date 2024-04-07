import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ticket-selector',
  standalone: true,
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  templateUrl: './ticket-selector.component.html',
  styleUrl: './ticket-selector.component.css'
})
export class TicketSelectorComponent {

}
