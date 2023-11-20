import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class APIService {
	constructor(private http: HttpClient) {}

	public get(url: string): Promise<any> {
		return firstValueFrom(this.http.get(url));
	}

	public post(url: string, body: Record<any, any>): Promise<any> {
		return firstValueFrom(this.http.post(url, body));
	}
}
