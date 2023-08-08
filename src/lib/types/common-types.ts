export type DataImage = {
	data: DataImageAttributes | null;
};

export type DataImageAttributes = {
	attributes: {
		alternativeText: string;
		url: string;
	};
};

export type StringOrNull = string | null;

export interface PageHeader {
	title: StringOrNull;
	description: StringOrNull;
	headline: StringOrNull;
	background_image: DataImage;
	right_image: DataImage;
}

export interface SectionWithText {
	title: StringOrNull;
	content: StringOrNull;
	title_position: 'left' | 'right';
	content_position: 'right' | 'left';
	link_id: StringOrNull;
}

export interface SectionWithImage {
	content: StringOrNull;
	title: StringOrNull;
	image: DataImage;
	image_position: 'left' | 'right';
	link_id: StringOrNull;
	action: CMSLink;
}

export interface UpcomingEvents {
	data: UpcomingEvent[];
}

export interface UpcomingEvent {
	attributes: {
		title: StringOrNull;
		datetime: StringOrNull;
		video_link: StringOrNull;
		image: DataImage;
	};
}

export interface CMSLink {
	title: StringOrNull;
	slug: StringOrNull;
}

export interface AnnualResultBreakdown {
	data: {
		attributes: {
			title: StringOrNull;
			percentage: StringOrNull;
			status: 'increased' | 'decreased' | 'unchanged' | null;
			comment: StringOrNull;
		};
	}[];
}

export interface SharesHighlight {
	image: DataImage;
	share_price_title: string;
	share_price_date: string;
	share_name: string;
	share_currency: string;
	share_unit_price: string;
	fy_title: string;
	revenue: string;
	profit_before_tax: string;
	gross_profit: string;
	profit_after_tax: string;
}

export interface CMSCard {
	title: string;
	content: StringOrNull;
	subtitle: StringOrNull;
	link_slug: StringOrNull;
	link_title: StringOrNull;
	id: string;
	image: DataImage;
}

export interface CMSSectionWithCards {
	title: StringOrNull;
	subtitle: StringOrNull;
	cards: CMSCard[];
}

export interface CMSBlockQuote {
	content: string;
	title: StringOrNull;
	source: StringOrNull;
}

export interface PressRelease {
	attributes: {
		title: string;
		content: StringOrNull;
		image: DataImage;
		article_date: StringOrNull;
		read_duration_mins: string;
		uuid: string;
		author: { data: { attributes: { name: string; description: string } } };
		article_type: {
			data: {
				attributes: {
					title: string;
				};
			};
		};
		related_articles: { data: PressRelease[] };
	};
}

export interface Country {
	attributes: {
		name: string;
		logo: DataImage;
	};
}

export interface CMSYoutube {
	title: string;
	video_id: string;
	thumbnail: {
		data: {
			attributes: {
				url: string;
			};
		}[];
	};
}
