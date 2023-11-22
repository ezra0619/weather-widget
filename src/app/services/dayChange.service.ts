import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class DayChangeService {
	private previousDay: number;

	private dayChangeSubject: BehaviorSubject<void | null> =
		new BehaviorSubject<void | null>(null);
	public dayChange$: Observable<void | null> =
		this.dayChangeSubject.asObservable();

	constructor() {
		this.previousDay = new Date().getDate();
		setInterval(() => this.checkForDayChange(), 60000);
	}

	private checkForDayChange(): void {
		let currentDay: number = new Date().getDate();
		if (currentDay !== this.previousDay) {
			this.previousDay = currentDay;
			this.dayChangeSubject.next();
		}
	}
}
