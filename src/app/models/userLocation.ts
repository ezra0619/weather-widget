export class Location {
    ip: string;
    location: {
        country: string,
        region: string,
        city: string,
        lat: number,
        lng: number,
        postalCode: number,
        timezone: string,
        geonameId: number
    };
    domains: Array<string>;
    as: {
        asn: number,
        name: string,
        route: string,
        domain: string,
        type: string
    };
    isp: string;
    proxy: {
        proxy: boolean,
        vpn: boolean,
        tor: boolean
    }

    constructor(data: Record<string, any> = {}) {
        this.ip = data.ip;
        this.location = data.location;
        this.domains = data.domains;
        this.as = data.as;
        this.isp = data.isp;
        this.proxy = data.proxy;
    }
}
