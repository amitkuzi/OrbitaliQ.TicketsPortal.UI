import { Component, } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LangLocalsService } from '../../Services/langLocals/lang-locals.service';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { MapitemsDebugPipe } from '../../pipes/mapitems-debug.pipe';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, CommonModule, MapitemsDebugPipe, KeyValuePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  constructor(
    private langLocalsService: LangLocalsService
  ) { }


  public get AvailableLanguages$() { return this.langLocalsService.AvailableLanguages$; }
  public get translations$() { return this.langLocalsService.translationsSubject$; }

}
