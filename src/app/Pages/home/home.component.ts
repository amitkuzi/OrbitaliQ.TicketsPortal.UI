import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LangLocalsService } from '../../Services/langLocals/lang-locals.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  constructor(
    private langLocalsService: LangLocalsService
  ) { }

  public get AvailableLanguages$() { return this.langLocalsService.AvailableLanguages$; }
  public get translations$() { return this.langLocalsService.translations$; }


  ngOnInit(): void {
    this.langLocalsService.update();
  }
}
