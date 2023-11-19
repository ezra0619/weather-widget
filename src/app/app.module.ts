import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {WeatherWidgetComponent} from "./weather-widget/weather-widget.component";
import {NgxAsyncTemplateModule} from "@klippa/ngx-async-template";

@NgModule({
    declarations: [
        AppComponent,
        WeatherWidgetComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxAsyncTemplateModule,

    ],
    providers: [HttpClientModule],
    bootstrap: [AppComponent]
})
export class AppModule {
}
