import type { PageMoreAboutUs } from './common-types';

export interface AboutPage {
	journey_section_title: string;
	pan_african_title: string;
	pan_african_content: string;
	pan_african_link: Link;
	celebrating_30_section: Celebrating30_Section;
	header: Header;
	section_one: SectionOne;
	explore_cwg: ExploreCwg;
	history_section: HistorySection;
	journey_section_table: JourneySectionTable[];
	more_about_us: PageMoreAboutUs;
}

export interface Celebrating30_Section {
	title: string;
	content: string;
	link: Link;
	right_images: RightImages;
	title_image: Image;
}

export interface Link {
	title: string;
	slug: string;
}

export interface RightImages {
	data: DAT[];
}

export interface DAT {
	attributes: Attributes;
}

export interface Attributes {
	url: string;
}

export interface Image {
	data: DAT;
}

export interface ExploreCwg {
	content: string;
	link_title: string;
	links: Link[];
}

export interface Header {
	title: string;
	sub_title: string | null;
	link: string | null;
	background_color: string | null;
	sub_headline: null;
	link_text: string;
	bg_image: RightImages;
}

export interface HistorySection {
	title: string;
	histories: History[];
}

export interface History {
	title: string;
	year: string;
	content: string;
}

export interface JourneySectionTable {
	id: string;
	table_row: TableRow[];
}

export interface TableRow {
	id: string;
	journey_date: string;
	achievement_title: string;
	achievement_subtitle: null | string;
	image: Image;
}

export interface SectionOne {
	title: string;
	content: string;
	title_position: string;
	content_position: string;
}
