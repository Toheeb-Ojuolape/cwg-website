import type {
	CMSBlog,
	CMSCard,
	CMSSectionWithCards,
	DataImage,
	DataImageAttributes,
	SharesHighlight,
	StringOrNull
} from '$lib/types/common-types';

export interface HomePageData {
	hero_title: string;
	hero_subtitle: string;
	counter: HomeCounter[];
	hero_images: { data: DataImageAttributes[] };
	section_one: HomeSection;
	shares_highlight: HomeSharesHighlight;
	home_highlight_cards: CMSCard[];
	industries_we_dominate_section: CMSSectionWithCards;
	quality_policy_section: HomeSectionWithLink;
	press_release_section_title: string;
	press_release_section_id: string;
	press_releases: { data: CMSBlog[] };
}

export interface HomeCounter {
	title: string;
	suffix: string;
	value: number;
	id: string;
}

export interface HomeSharesHighlight extends SharesHighlight {
	fy_action: {
		title: string;
		slug: string;
		id: string;
	} | null;
}

export interface HomeSection {
	content: string;
	id: string;
	title: StringOrNull;
	image: DataImage;
}

export interface HomeSectionWithLink extends HomeSection {
	link_id: string;
	action: {
		title: string;
		slug: string;
	} | null;
}

export interface HomeService {
	attributes: {
		title: string;
		slug: string;
		image: DataImage;
		icon: DataImage;
		description: StringOrNull;
		content: {
			__typename: 'ComponentGlobalPageHeader';
			headline: string;
			title: string;
			description: string;
		}[];
	};
}
