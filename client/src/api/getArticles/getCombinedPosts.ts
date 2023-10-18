import { getOfflinePosts } from "./getOfflinePosts";
import { getOnlinePosts } from "./getOnlinePosts";

export const getCombinedPosts = async () => {
	const [onlinePosts, offlinePosts] = await Promise.all([
		getOnlinePosts(),
		getOfflinePosts(),
	]);

	const combinedPosts = onlinePosts
		? [...onlinePosts, ...offlinePosts]
		: [...offlinePosts];

	// Sorting in descending order on pubDate
	combinedPosts.sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);

	// Replace all id's with sorted index numbers
	combinedPosts.forEach((post, index) => {
		post.id = index;
	});

	return combinedPosts;
};
