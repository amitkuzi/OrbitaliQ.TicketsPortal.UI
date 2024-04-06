import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServerConfigService } from './Services/configuration/server-config.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
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
