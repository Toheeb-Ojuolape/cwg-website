export interface OEMPartner {
	attributes: PokedexAttributes;
}

export interface PokedexAttributes {
	logo: Logo;
}

export interface Logo {
	data: Datum[];
}

export interface Datum {
	attributes: DatumAttributes;
}

export interface DatumAttributes {
	url: string;
}
