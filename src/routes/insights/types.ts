import type { DataImage, PageHeader, PressRelease, StringOrNull } from '$lib/types/common-types';
import type { SocialMediaHandles } from '$lib/types/footer-types';

export interface InsightsPageData {
	header: PageHeader;
	featured_section_title: string;
	featured_blog: FeaturedBlog;
	insights_tab_list: InsightsTab[];
	blogs_section: InsightsSection & { blogs: { data: Blog[] } };
	event_section: InsightEvent;
	press_release_section: InsightsSection & { articles: { data: PressRelease[] } };
	podcast_section: InsightsSection & { podcasts: { data: Podcast[] } };
	magazine_section: InsightsSection & { content: { data: Magazine[] } };
	newsroom_section: InsightsSection & { content: { data: Newsletter[] } };
	media_section: InsightsSection & { content: { data: Media[] } };
	send_newsletter_section: InsightsSection & { socials: SocialMediaHandles; image: DataImage };
}

interface FeaturedBlog {
	data: {
		attributes: {
			title: string;
			preface: string;
			slug: string;
			date_published: string;
			blog_author: {
				data: { attributes: { name: string } };
			};
			cover_image: DataImage;
		};
	};
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

export interface Blog {
	attributes: {
		title: string;
		blog_author: {
			data: { attributes: { name: string } };
		};
		cover_image: DataImage;
		slug: string;
		date_published: string;
		blog_categories: { data: BlogCategory[] };
		content: string;
		preface: string;
		related_stories: { data: PressRelease[] };
	};
}

export interface RelatedStory {
	attributes: {
		title: string;
		image: DataImage;
		article_date: string;
		read_duration_mins: string;
		uuid: string;
		article_type: { data: { attributes: { title: string } } };
	};
}

export interface BlogCategory {
	attributes: {
		name: string;
	};
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

export interface Newsletter {
	attributes: {
		title: string;
		uuid: string;
		date: string;
		image: DataImage;
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
