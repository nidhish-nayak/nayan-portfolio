import { getCollection } from "astro:content";
import { STRAPI_CONFIG } from "../consts";
import type Article from "../interfaces/article";
import fetchApi from "../lib/strapi";

export const getImageLink = async (index: number) => {
	const imageEndpoint: any = await fetchApi({
		endpoint: `${STRAPI_CONFIG.endpoint}?populate=*`,
		wrappedByKey: "data",
	});

	const imageLink = `${import.meta.env.STRAPI_URL}${
		imageEndpoint[index].attributes.Image.data.attributes.url
	}`;

	return imageLink.toString();
};

export const getOnlinePosts = async () => {
	const posts = await fetchApi<Article[]>({
		endpoint: "restaurants", // the content type to fetch
		wrappedByKey: "data", // the key to unwrap the response
	});

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

export const getOfflinePosts = async () => {
	const posts = (await getCollection("blog")).sort(
		(a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
	);

	const offlinePosts = posts.map((i, index) => {
		return { id: i.id, slug: i.data.title, data: { ...i.data, body: i.body } };
	});

	return offlinePosts;
};

export const getCombinedPosts = async () => {
	const [onlinePosts, offlinePosts] = await Promise.all([
		getOnlinePosts(),
		getOfflinePosts(),
	]);
	const combinedPosts = [...onlinePosts, ...offlinePosts];

	// Sort the combinedPosts array by date in descending order
	combinedPosts.sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);

	// Update the id property incrementally
	combinedPosts.forEach((post, index) => {
		post.id = index;
	});

	return combinedPosts;
};
