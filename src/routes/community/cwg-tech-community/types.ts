export interface CWGCommunity {
	header: Header;
	videos_section: VideosSection;
	section_one: Section;
	section_two: Section;
	register_section: RegisterSection;
}

export interface Header {
	headline: string;
	title: string;
	description: string;
	background_image: BackgroundImage;
	right_image: BackgroundImage;
	action: Action;
}

export interface Action {
	title: string;
	slug: string;
}

export interface BackgroundImage {
	data: Data | null;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	alternativeText: null;
	url: string;
}

export interface RegisterSection {
	title: string;
	share_text: string;
	enquiries_phone: string;
	location_text: string;
	description: string;
	location: string;
	action: Action;
}

export interface Section {
	content: string;
	image_position: string;
	title: null | string;
	action: Action | null;
	image: BackgroundImage;
}

export interface VideosSection {
	title: string;
	video_links: VideoLink[];
	description: string;
}

export interface VideoLink {
	title: string;
	slug: string;
	thumbnail: BackgroundImage;
}
