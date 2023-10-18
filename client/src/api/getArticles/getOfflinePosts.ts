import { getCollection } from "astro:content";

import type { OfflinePost } from "../../interfaces/Post";

export const getOfflinePosts = async (): Promise<OfflinePost[]> => {
	const posts = (await getCollection("blog")).sort(
		(a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
	);

	const offlinePosts = posts.map((post) => {
		return {
			id: post.id,
			slug: post.data.title,
			data: { ...post.data, body: post.body },
		};
	});

	return offlinePosts;
};
