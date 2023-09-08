import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// for NGX Translate
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { LeftComponent } from './top-section/left/left.component';
import { RightTopComponent } from './top-section/right-top/right-top.component';
import { RightBottomComponent } from './top-section/right-bottom/right-bottom.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvailableResourceComponent } from './top-section/left/available-resource/available-resource.component';
import { ResourceTimeComponent } from './top-section/left/resource-time/resource-time.component';
import { MultiReservationComponent } from './top-section/left/multi-reservation/multi-reservation.component';
import { WorkingHoursComponent } from './working-hours/working-hours.component';
import { ToggleDaysComponent } from './working-hours/toggle-days/toggle-days.component'
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopSectionComponent,
    LeftComponent,
    RightTopComponent,
    RightBottomComponent,
    AvailableResourceComponent,
    ResourceTimeComponent,
    MultiReservationComponent,
    WorkingHoursComponent,
    ToggleDaysComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
