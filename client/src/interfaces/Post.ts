export interface OfflinePost {
	id: string;
	slug: string;
	data: {
		title: string;
		description: string;
		pubDate: Date;
		updatedDate?: Date;
		heroImage?: string;
		body: string;
	};
}

export interface OnlinePost {
	id: number;
	slug: string;
	data: {
		title: string;
		description: string;
		pubDate: Date;
		heroImage: string;
		body: string;
	};
}
