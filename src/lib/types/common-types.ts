export type DataImage = {
	data: {
		attributes: {
			alternativeText: string;
			url: string;
		};
	} | null;
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
			hasIncreased: boolean;
			comment: StringOrNull;
		}[];
	};
}
