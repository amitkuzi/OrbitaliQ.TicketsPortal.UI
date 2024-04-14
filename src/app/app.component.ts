import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, RouterModule } from '@angular/router';
import { ServerConfigService } from './Services/configuration/server-config.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { TicketSelectorComponent } from './Components/ticket-selector/ticket-selector.component';
import { CartViewComponent } from "./Components/cart-view/cart-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    TicketSelectorComponent,
    RouterOutlet,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    CartViewComponent,
    RouterModule
  ]
})
export class AppComponent implements OnInit {

  title = 'OrbitaliQ.TicketsPortal.UI';
  constructor(
    private configService: ServerConfigService,
  ) {
    console.log('App Component');
  }

  router: Router = new Router();

  ngOnInit(): void {
    console.log('App Component oninit');

  }
}
