import { STRAPI_CONFIG } from "../../consts";
import fetchApi from "../../lib/strapi";
import { getImageLink } from "./getImageLink";

import type Article from "../../interfaces/Article";
import type { OnlinePost } from "../../interfaces/Post";

export const getOnlinePosts = async (): Promise<OnlinePost[] | null> => {
	const posts = await fetchApi<Article[]>({
		endpoint: STRAPI_CONFIG.endpoints.blog, // Strapi api endpoint for fetching data
		wrappedByKey: "data",
	});

	// If no data is present in Strapi admin
	if (posts === null) {
		console.log("Strapi has no data! - api/getOnlinePosts");
		return null;
	}

	const onlinePosts = await Promise.all(
		posts.map(async (post, index) => {
			const heroImage = await getImageLink(index);

			return {
				id: post.id,
				slug: post.attributes.Title,
				data: {
					title: post.attributes.Title,
					description: post.attributes.Description,
					pubDate: new Date(post.attributes.publishedAt),
					heroImage: heroImage,
					body: post.attributes.BlogContent,
				},
			};
		})
	);

	return onlinePosts;
};
