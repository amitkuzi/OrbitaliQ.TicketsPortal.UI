import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environments } from '../../../environments/environment';
import { LangAvailableItem } from './LangAvailable.model';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LangLocalsService {
  public translationsSubject$: BehaviorSubject<Map<string, string>> = new BehaviorSubject<Map<string, string>>(new Map<string, string>());
  availableLanguages: BehaviorSubject<LangAvailableItem[]> = new BehaviorSubject<LangAvailableItem[]>([]);

  constructor(
    private client: HttpClient
  ) {

  }

  public update(): void {
    console.log("  ngOnInit AvailableLanguages sub start:");
    this.availableLanguages.subscribe((data) => {
      console.log("  ngOnInit AvailableLanguages sub:", data);
      data.forEach((lang) => {
        this.updateTranslations(lang.code);
      });
    });

    this.UpdateAvailableLanguages();
    console.log("LangLocalsService ngOnInit");

  }




  private get getLangAvilableURI(): string { return `${Environments.ticketPortalApi}${Environments.LangAvilableAPi}`; }

  public get AvailableLanguages$(): Observable<LangAvailableItem[]> { return this.availableLanguages.asObservable(); }

  UpdateAvailableLanguages(): Subscription {
    return this.client.get<LangAvailableItem[]>(this.getLangAvilableURI).subscribe((data) => {
      console.log("getLangAvilableURI recived data ", data);
      this.availableLanguages.next(data);
    });
  }




  private get getLanguageURI(): string { return `${Environments.ticketPortalApi}${Environments.LanguageURI}`; }

  public updateTranslations(localeId: string): Subscription {
    return this.client
      .post<Map<string, string>>(this.getLanguageURI, {
        LanguageCode: localeId,
        ServiceGroup: 'tickets',
      })
      .subscribe((translations: Map<string, string>): void => {
        console.log("LangLocalsService updateTranslations:", translations);
        this.translationsSubject$.next(translations);
      });
  }

}
