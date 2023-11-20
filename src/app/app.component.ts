import {Component} from '@angular/core';
import {WidgetVariant} from "./weather-widget/weather-widget.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'andreea-weather-widget';
	public WidgetVariant = WidgetVariant;
}
