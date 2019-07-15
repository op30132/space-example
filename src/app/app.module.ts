import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PagesComponent } from './pages/pages.component';
import { AuthGuard } from './core/guards/auth.guard';

@NgModule({
  declarations: [AppComponent, PagesComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
