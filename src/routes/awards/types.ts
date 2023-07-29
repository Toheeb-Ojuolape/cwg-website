import type { DataImage } from '$lib/types/common-types';

export interface Award {
	data: AwardData;
}

export interface AwardData {
	awards: Awards;
}

export interface Awards {
	data: Datum[];
}

export interface Datum {
	attributes: DatumAttributes;
}

export interface DatumAttributes {
	title: string;
	description: string;
	image: DataImage;
}
