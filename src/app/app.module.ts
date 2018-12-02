import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { AppRoute } from './Route';
import {
  ItemsComponent,
  NavBarComponent,
  ItemService,
  ItemComponent
} from './index';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ItemsComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoute)
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
