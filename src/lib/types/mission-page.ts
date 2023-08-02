import type { DataImage, StringOrNull } from './common-types';

export interface MissionPage {
	header: Header;
	mission_vision_section: ManifestoSection[];
	visions_section: ManifestoSection[];
	manifesto_section: ManifestoSection;
	our_values_section: OurValuesSection;
	culture_section_title: string;
	culture_section_subtitle: string;
	culture_section_id: StringOrNull;
	culture_section_body: CultureSectionBody;
	culture_attributes_section_accordion: CultureAttributesSectionAccordion;
	culture_attributes_section_image: DataImage;
	why_cwg_section_image: DataImage;
	why_cwg_section_carousel: ManifestoSection[];
	policy_section_title: string;
	policy_section_items: CultureAttributesSectionImage;
}

export interface CultureAttributesSectionAccordion {
	title: string;
	items: Item[];
}

export interface Item {
	title: string;
	content: null | string;
}

export interface DatumAttributes {
	title: string;
	subtitle: string;
	icon: DataImage;
	file: CultureAttributesSectionImage;
}

export interface Datum {
	attributes: DatumAttributes;
}

export interface CultureAttributesSectionImage {
	data: Datum[] | DataClass | null;
}

export interface DataClass {
	attributes: DataAttributes;
}

export interface DataAttributes {
	alternativeText: string | null;
	url: string;
}

export interface CultureSectionBody {
	content: string;
	title: string;
	image_position: string;
	image: DataImage;
}

export interface Header {
	title: string;
	description: null;
	background_image: DataImage;
}

export interface ManifestoSection {
	title: string;
	image_position?: string;
	content: string;
	image: DataImage;
	subtitle?: null | string;
}

export interface OurValuesSection {
	title: string;
	subtitle: string;
	values: ManifestoSection[];
}
