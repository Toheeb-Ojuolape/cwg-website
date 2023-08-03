import type {
	AnnualResultBreakdown,
	CMSLink,
	DataImage,
	PageHeader,
	PressRelease,
	SectionWithText,
	SharesHighlight,
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
