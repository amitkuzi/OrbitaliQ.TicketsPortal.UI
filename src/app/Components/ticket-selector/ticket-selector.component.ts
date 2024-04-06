import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ticket-selector',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './ticket-selector.component.html',
  styleUrl: './ticket-selector.component.css'
})
export class TicketSelectorComponent {

}
