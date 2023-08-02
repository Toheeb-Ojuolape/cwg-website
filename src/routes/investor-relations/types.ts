import type {
	AnnualResultBreakdown,
	CMSLink,
	DataImage,
	PageHeader,
	SectionWithText,
	StringOrNull,
	UpcomingEvents
} from '$lib/types/common-types';

export interface InvestorRelationPage {
	header: PageHeader;
	section_one: SectionWithText;
	upcoming_event: UpcomingEvents;
	upcoming_event_title: StringOrNull;
	all_events_link: CMSLink | null;
	all_press_releases_link: CMSLink | null;
	contact_us_info: StringOrNull;
	annual_result_breakdowns: AnnualResultBreakdown;
	company_years: { data: CompanyYear[] };
	shares_highlight: SharesHighlight;
	press_release: { data: PressRelease[] };
}

export interface CompanyYear {
	attributes: {
		year: string;
		presentations_and_videos: {
			data: PresentationAndVideo[];
		};
	};
}

export interface PresentationAndVideo {
	attributes: {
		title: StringOrNull;
		file: DataImage;
		type: 'reports' | 'presentationsAndVideos';
	};
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

export interface PressRelease {
	attributes: {
		title: string;
		image: DataImage;
		article_date: StringOrNull;
		read_duration_mins: string;
		uuid: string;
		article_type: {
			data: {
				attributes: {
					title: string;
				};
			};
		};
	};
}
