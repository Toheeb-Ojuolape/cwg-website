import type { CareerJob } from './[department]/types';

export interface CareersPage {
	header: Header;
	explore_opportunity_title: string;
	explore_opportunity_subtitle: string;
	opportunities: Opportunities;
	departments: Departments;
	our_regions_section: OurRegionsSection;
}

export interface Departments {
	data: DepartmentsDatum[];
}

export interface DepartmentsDatum {
	attributes: PurpleAttributes;
}

export interface PurpleAttributes {
	title: string;
	slug: string;
	icon: RightImage;
	jobs: {
		data: {
			attributes: {
				uuid: string;
			};
		}[];
	};
}

export interface RightImage {
	data: Data;
}

export interface Data {
	attributes: DataAttributes;
}

export interface DataAttributes {
	alt: null;
	url: string;
}

export interface Header {
	headline: string;
	title: string;
	description: string;
	right_image: RightImage;
}

export interface Opportunities {
	data: OpportunitiesDatum[];
}

export interface OpportunitiesDatum {
	attributes: FluffyAttributes;
}

export interface FluffyAttributes {
	title: string;
	slug: string;
	image: RightImage;
}

export interface OurRegionsSection {
	content: string;
	image_position: string;
	title: string;
	action: Action;
	image: RightImage;
}

export interface Action {
	title: string;
	slug: string;
}
