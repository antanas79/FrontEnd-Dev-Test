import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

// components
import { ProductsComponent } from './products/products.component';

// pipes
import { DatePipe } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        ProductsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModalModule,
        AppRoutingModule
    ],
    providers: [
        DatePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
