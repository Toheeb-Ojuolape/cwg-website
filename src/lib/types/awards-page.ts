export interface AwardsPage {
	page_title: string;
	page_subtitle: string;
	header: Header;
	awards: Awards;
	award_companies: AwardCompanies;
}

export interface AwardCompanies {
	data: AwardCompaniesDatum[];
}

export interface AwardCompaniesDatum {
	attributes: PurpleAttributes;
}

export interface PurpleAttributes {
	name: string;
	logo: Logo;
}

export interface Logo {
	data: LogoData;
}

export interface LogoData {
	attributes: FluffyAttributes;
}

export interface FluffyAttributes {
	url: string;
	provider: string;
}

export interface Awards {
	data: AwardsDatum[];
}

export interface AwardsDatum {
	attributes: TentacledAttributes;
}

export interface TentacledAttributes {
	title: string;
	description: string;
	uuid: string;
	image: Image;
}

export interface Image {
	data: BackgroundImageData;
}

export interface BackgroundImageData {
	attributes: StickyAttributes;
}

export interface StickyAttributes {
	url: string;
}

export interface Header {
	background_image: Image;
	title: string | null;
	description: string | null;
}
