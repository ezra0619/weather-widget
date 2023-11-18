import {Injectable} from "@angular/core";
import {APIService} from "./api.service";
import {UserLocation} from "../models/userLocation";
import {getUrlWithQueryParams} from "../utils/objects";
import {environment} from "../../environments/environment.development";


@Injectable({providedIn: 'root'})

export class LocationService {

    constructor(private apiService: APIService) {}

    public getLocationOfUser(): Promise<UserLocation> {
        const url: string = getUrlWithQueryParams(
            environment.locationApiRootUrl, {
                apiKey: environment.locationApiKey
            })
        return this.apiService
            .get(url)
            .then((e) => new UserLocation(e))
    }
}
