export default interface Article {
	id: number;
	attributes: {
		Title: string;
		Description: string;
		BlogContent: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		Image?: any;
	};
}
