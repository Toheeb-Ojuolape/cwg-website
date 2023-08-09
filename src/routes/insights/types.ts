import type {
	CMSBlog,
	DataImage,
	PageHeader,
	StringOrNull,
	UpcomingEvent
} from '$lib/types/common-types';
import type { SocialMediaHandles } from '$lib/types/footer-types';

export interface InsightsPageData {
	header: PageHeader;
	featured_section_title: string;
	featured_blog: { data: CMSBlog };
	insights_tab_list: InsightsTab[];
	blogs_section: InsightsSection & { blogs: { data: CMSBlog[] } };
	event_section: InsightEvent;
	press_release_section: InsightsSection & { articles: { data: CMSBlog[] } };
	podcast_section: InsightsSection & { podcasts: { data: Podcast[] } };
	magazine_section: InsightsSection & { content: { data: Magazine[] } };
	newsroom_section: InsightsSection & { content: { data: CMSBlog[] } };
	media_section: InsightsSection & { content: { data: Media[] } };
	send_newsletter_section: InsightsSection & { socials: SocialMediaHandles; image: DataImage };
	upcoming_events_section_title: string;
	upcoming_events: { data: UpcomingEvent[] };
}

interface InsightsTab {
	name: string;
	link_to_section: string;
}

export interface InsightsSection {
	section_id: string;
	title: string;
	description: string;
}

export interface InsightEvent {
	section_id: string;
	left_title: string;
	left_link: string;
	right_content: string;
	right_caption: string;
	youtube_video_id: string;
	video_thumbnail: DataImage;
}

export interface Podcast {
	attributes: {
		title: string;
		youtube_video_id: string;
		uuid: string;
		thumbnail: DataImage;
	};
}

export interface Magazine {
	attributes: {
		title: string;
		uuid: string;
		issue_date: string;
		cover: DataImage;
		file: DataImage;
		description: string;
		caption: string;
	};
}

interface Media {
	attributes: {
		title: string;
		uuid: string;
		content: {
			data: {
				attributes: {
					url: string;
					alternativeText: StringOrNull;
				};
			}[];
		};
	};
}
