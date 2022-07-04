import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { NgxScrollTopModule } from 'ngx-scrolltop';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FooterComponent } from './components/common/footer/footer.component';

const routes: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    NgxScrollTopModule,
  ],
  declarations: [AppComponent, HelloComponent, FooterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
