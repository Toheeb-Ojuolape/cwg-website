import type { DataImage } from '$lib/types/common-types';

export interface PitchForTransformation {
	header: Header;
	videos_section: VideosSection;
	judges_panel_title: string;
	judges_panel_subtitle: string;
	panel_of_judges: { data: Judge[] } | null;
	transformation_champion_section: TransformationChampionSection;
	evaluation_criteria_section: EvaluationCriteriaSection;
	application_procedure_section: ApplicationProcedureSection;
	block_quote: BlockQuote;
}

export interface Judge {
	attributes: {
		first_name: string;
		last_name: string;
		uuid: string;
		image: DataImage;
	};
}

export interface ApplicationProcedureSection {
	title: string;
	content: string;
	title_position: string;
	content_position: string;
	section_link?: Action;
}

export interface BlockQuote {
	content: string;
	title: string;
	action: Action;
}

export interface Action {
	title: string;
	slug: string;
}

export interface EvaluationCriteriaSection {
	title: string;
	subtitle: string;
	cards: Card[];
}

export interface Card {
	title: string;
	content: null | string;
	subtitle: null | string;
	link_slug: null;
	link_title: null;
	image: DataImage;
}

export interface DataClass {
	attributes: Attributes;
}

export interface Attributes {
	alternativeText: null;
	url: string;
}

export interface Header {
	headline: string;
	title: string;
	description: string;
	background_image: DataImage;
	right_image: DataImage;
	action: Action;
}

export interface TransformationChampionSection {
	title: string;
	body: string;
	action: Action;
	cards: Card[];
}

export interface VideosSection {
	title: string;
	description: string;
	video_links: VideoLink[];
	section_link: {
		title: string;
		slug: string;
	};
}

export interface VideoLink {
	title: string;
	slug: string;
	thumbnail: DataImage;
}
