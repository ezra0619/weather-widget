import {Injectable} from "@angular/core";
import {firstValueFrom} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class APIService {

    constructor(private http: HttpClient) {}

    public get(url: string): Promise<any> {
        var cors_api_url: string = 'https://cors-anywhere.herokuapp.com/';
        return firstValueFrom(this.http.get(`${cors_api_url}${url}`))
    }
}
