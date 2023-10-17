export default interface Article {
	id: number;
	attributes: {
		Title: string;
		Description: string;
		BlogContent: any;
		Image: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
	};
}
