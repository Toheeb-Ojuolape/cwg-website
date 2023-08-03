import type { DataImage, PageHeader } from '$lib/types/common-types';

export interface ServicePageData {
	header: PageHeader;
	services: { data: Service[] };
}

export interface Service {
	attributes: {
		image: DataImage;
		title: string;
		slug: string;
	};
}
