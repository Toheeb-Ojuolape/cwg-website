import type { DataImage } from '$lib/types/common-types';

export interface TExcellence {
	header: Header;
	marquee_text: string;
	section_one: SectionOne;
	speakers_section_title: string;
	speakers: { data: Speaker[] };
	speakers_section_body: string;
	count_up_section_image: DataImage;
	count_up: CountUp[];
	conference_section: ConferenceSection;
	conference_topics: { data: ConferenceTopic[] };
	pitch_transformation_section: PitchTransformationSection;
	texcellence_festival: TexcellenceFestival;
	featured_artists_section_title: string;
	featured_artists: { data: FeaturedArtist[] } | null;
	past_conference_title: string;
	past_conference_description: string;
	past_conference_image: DataImage;
	actions: Action[];
}

interface ConferenceTopic {
	attributes: {
		title: string;
		image: DataImage;
		topic_type: Type;
		arrow_direction: string;
		date: string;
	};
}

export interface FeaturedArtist {
	attributes: {
		name: string;
		artist_type: string;
		uuid: string;
		image: DataImage;
	};
}

export enum ArtistType {}

export interface Speaker {
	attributes: {
		title: string;
		first_name: string;
		last_name: string;
		position: string;
		image: DataImage;
	};
}

export interface Action {
	title: string;
	slug: string;
}

export interface ConferenceSection {
	title: string;
	description: string;
}

export interface DatumAttributes {
	title: string;
	first_name: string;
	last_name: string;
	position: string;
	image: DataImage;
}

export interface Datum {
	attributes: DatumAttributes;
}

export interface CountUpSectionImage {
	data: Datum[] | DataClass | null;
}

export interface DataClass {
	attributes: DataAttributes;
}

export interface DataAttributes {
	alternativeText: null;
	url: string;
}

export enum Type {
	CardImage = 'card_image',
	CardNote = 'card_note'
}

export interface CountUp {
	title: string;
	suffix: null | string;
	value: number;
}

export interface Header {
	headline: string;
	title: string;
	description: string;
	right_image: DataImage;
}

export interface PitchTransformationSection {
	left_title: string;
	center_content: string;
	left_action: Action;
	right_image: DataImage;
}

export interface SectionOne {
	left_title: string;
	left_body: string;
	right_body: string;
	right_image: DataImage;
}

export interface TexcellenceFestival {
	title: string;
	content: null;
	subtitle: string;
	link_slug: string | null;
	link_title: string | null;
	image: DataImage;
}
