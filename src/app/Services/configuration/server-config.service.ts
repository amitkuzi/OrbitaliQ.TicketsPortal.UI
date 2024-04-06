import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Environments } from '../../../environments/environment.development';
import { SettingItem } from './SettingItem';

@Injectable({
  providedIn: 'root',

})
export class ServerConfigService {
  private settingsSubject: BehaviorSubject<SettingItem[] | undefined> = new BehaviorSubject<SettingItem[] | undefined>(undefined);

  constructor(
    private clinet: HttpClient
  ) {
    console.log("ServerConfigService ctor");
    this.update();
  }

  public get settings$(): Observable<SettingItem[] | undefined> {
    return this.settingsSubject.asObservable();
  }

  private get SettingsURI(): string { return `${Environments.ticketPortalApi}${Environments.ServerConfigAPi}`; }

  public update() {
    console.log("update:", this.SettingsURI);
    this.clinet.get<SettingItem[]>(this.SettingsURI).subscribe((data) => {
      this.settingsSubject.next(data);
    });
  }
}
