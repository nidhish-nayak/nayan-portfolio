import { STRAPI_CONFIG } from "../consts";
import fetchApi from "../lib/strapi";

import type Article from "../interfaces/Article";

export const getImageLink = async (index: number): Promise<string> => {
	const blogData: Article[] = await fetchApi({
		endpoint: `${STRAPI_CONFIG.endpoints.blog}?populate=*`,
		wrappedByKey: "data",
	});

	const imageLink = `${STRAPI_CONFIG.strapiURL}${blogData[index].attributes.Image.data.attributes.url}`;
	return imageLink;
};
