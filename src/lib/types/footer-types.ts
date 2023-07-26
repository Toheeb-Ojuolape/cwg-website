type FooterLinkData = {
	data: {
		attributes: {
			title: string;
			slug: string;
		};
	}[];
};

export type Footer = {
	headOfficeAddress: string;
	phoneNumber: string;
	emailAddress: string;
	copyright: string;
	services_title: string;
	sectors_title: string;
	company_title: string;
	insight_title: string;
	community_title: string;
	policy_title: string;
	office_title: string;
	services: FooterLinkData;
};
