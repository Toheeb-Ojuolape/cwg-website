import type { DataImage } from './common-types';

export interface RegionData {
	attributes: {
		image: DataImage;
		name: string;
		email: string;
		address: string;
		content: string;
		region_phone_numbers: {
			data: {
				attributes: {
					phone_number: string;
					extension: string | null;
				};
			}[];
		};
	};
}
