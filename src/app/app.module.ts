import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HearderComponent } from './component/hearder/hearder.component';
import { SapceXdataComponent } from './component/sapce-xdata/sapce-xdata.component';
import { SpaceXfiltersComponent } from './component/sapce-xdata/space-xfilters/space-xfilters.component';
import { SpaceXlistComponent } from './component/sapce-xdata/space-xlist/space-xlist.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HearderComponent,
    SapceXdataComponent,
    SpaceXfiltersComponent,
    SpaceXlistComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
