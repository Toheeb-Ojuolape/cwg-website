import type { DataImage } from '$lib/types/common-types';

export interface SectorsPage {
	header: Header;
	sectors_section_title: string;
	sectors: Sectors;
	policies_section_title: string;
	policies: Policies;
}

export interface Header {
	title: string;
	sub_title: string;
	bg_image: Image;
	sub_headline: null;
}

export interface Image {
	data: BgImageDatum[] | null;
}

export interface BgImageDatum {
	attributes: PurpleAttributes;
}

export interface PurpleAttributes {
	alternativeText: null;
	url: string;
}

export interface Sectors {
	data: SectorsDatum[];
}

export interface SectorsDatum {
	attributes: FluffyAttributes;
}

export interface FluffyAttributes {
	title: string;
	image: DataImage;
	slug: string;
	description: string;
	content: string;
}

interface Policies {
	data: Datum[];
}

interface Datum {
	attributes: Attributes2;
}

interface Attributes2 {
	title: string;
	slug: string;
	subtitle: string;
	icon: Icon;
	file: File;
}

interface File {
	data: [];
}

interface Icon {
	data: Data;
}

interface Data {
	attributes: Attributes;
}

interface Attributes {
	alternativeText: string | null;
	url: string;
}
