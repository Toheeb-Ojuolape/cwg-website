import type { DataImage, PageHeader } from '$lib/types/common-types';

export interface CareersDepartmentPage {
	header: PageHeader;
	career_testimonials: { data: Testimonial[] };
}

export interface Testimonial {
	attributes: {
		name: string;
		position: string;
		location: string;
		image: DataImage;
		comment: string;
	};
}

export interface CareerJob {
	attributes: {
		uuid: string;
		title: string;
		description: string | null;
		overview: string | null;
		department: {
			data: {
				attributes: {
					slug: string;
				};
			};
		};
		countries: {
			data: CareerCountry[];
		};
	};
}

export interface CareerCountry {
	attributes: {
		name: string;
	};
}
