import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServerConfigService } from './Services/configuration/server-config.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'OrbitaliQ.TicketsPortal.UI';
  constructor(
    private configService: ServerConfigService,
  ) {
    console.log('App Component');
  }

  ngOnInit(): void {
    console.log('App Component oninit');

  }
}
