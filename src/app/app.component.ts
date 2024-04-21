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
import { TicketSelectorComponent } from './Components/ticket-selector/ticket-selector.component';
import { CartViewComponent } from "./Components/cart-view/cart-view.component";
import { MapitemsDebugPipe } from './pipes/mapitems-debug.pipe';
import { LangLocalsService } from './Services/langLocals/lang-locals.service';



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
    RouterModule,
    MapitemsDebugPipe
  ],
  providers: [ServerConfigService],

})
export class AppComponent implements OnInit {

  title = 'OrbitaliQ.TicketsPortal.UI';

  constructor(
    private configService: ServerConfigService,
    private langLocalsService: LangLocalsService,
  ) {
    console.log('App Component');
  }

  router: Router = new Router();

  ngOnInit(): void {
    console.log('App Component oninit');

  }
}
