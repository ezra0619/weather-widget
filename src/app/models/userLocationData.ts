export class UserLocationData {
    ip: string;
    location: UserLocation;
    domains: Array<string>;
    as: As;
    isp: string;
    proxy: Proxy;

    constructor(data: Record<string, any> = {}) {
        this.ip = data.ip;
        this.location = data.location;
        this.domains = data.domains;
        this.as = data.as;
        this.isp = data.isp;
        this.proxy = data.proxy;
    }
}

export interface UserLocation {
    country: string,
    region: string,
    city: string,
    lat: number,
    lng: number,
    postalCode: number,
    timezone: string,
    geonameId: number
}

interface As {
    asn: number,
    name: string,
    route: string,
    domain: string,
    type: string
}

interface Proxy {
    proxy: boolean,
    vpn: boolean,
    tor: boolean
}
