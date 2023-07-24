export interface OEMPartner {
	attributes: OEMPartnerAttributes;
}

export interface OEMPartnerAttributes {
	name: string;
	logo: Logo;
	logo_dark: Logo;
}

export interface Logo {
	data: Data;
}

export interface Data {
	attributes: DataAttributes;
}

export interface DataAttributes {
	alternativeText: null;
	url: string;
}
