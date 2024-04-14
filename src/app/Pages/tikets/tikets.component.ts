import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CartViewComponent } from '../../Components/cart-view/cart-view.component';
import { TicketSelectorComponent } from "../../Components/ticket-selector/ticket-selector.component";

@Component({
    selector: 'app-tikets',
    standalone: true,
    templateUrl: './tikets.component.html',
    styleUrl: './tikets.component.css',
    imports: [MatIconModule,
        MatCardModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        CartViewComponent,
        TicketSelectorComponent]
})
export class TiketsComponent {

}
