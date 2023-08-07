import type {
	CMSBlockQuote,
	CMSYoutube,
	DataImage,
	SectionWithImage,
	SectionWithText,
	StringOrNull
} from '$lib/types/common-types';

export interface CWGAt30PageData {
	header: {
		title: string;
		sub_title: string;
		link: StringOrNull;
		background_color: string;
		sub_headline: string;
		link_text: StringOrNull;
		right_image: DataImage;
		bg_image: DataImage;
	};
	road_to_30_section: SectionWithText;
	journey_section_title: string;
	journey_text: string;
	md_section: MDSection;
	first_30_section: SectionWithText;
	founder_section: {
		title: string;
		content: string;
		leadership: { data: Leadership };
	};
	former_ceo: FormerEmployeeCard;
	random_content: string;
	former_business_director: FormerEmployeeCard;
	pan_african_section: SectionWithImage;
	founder_quote: CMSBlockQuote;
	fifth_lab_section: SectionWithText;
	founder_quote_2: CMSBlockQuote;
	next_30_section: SectionWithText;
	cwg_30_events: { data: CWG30Event[] };
	fifthlab_youtube: CMSYoutube;
	road_to_30_youtube: CMSYoutube;
}

export interface MDSection {
	middle_content: string;
	right_content: string;
	leadership: { data: Leadership };
}

interface Leadership {
	attributes: {
		name: string;
		position: string;
		image: DataImage;
	};
}

interface FormerEmployeeCard {
	name: string;
	position: string;
	content: string;
	image: DataImage;
}

interface CWG30EventLink {
	title: string;
	slug: string;
	thumbnail: DataImage;
}

interface CWG30Event {
	attributes: {
		title: string;
		date: string;
		link_one: CWG30EventLink;
		link_two: CWG30EventLink;
		uuid: string;
	};
}
