// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Astro Blog";
export const SITE_DESCRIPTION = "Welcome to my website!";

export const STRAPI_CONFIG = {
	strapiURL: import.meta.env.STRAPI_URL,
	endpoints: {
		blog: "restaurants",
		project: "projects",
	},
};
