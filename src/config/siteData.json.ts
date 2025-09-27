export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		tel: string;
		// twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Si Dartford",
	// Your website's title and description (meta fields)
    title: "Si Dartford - Singer Acoustic Performer, a one man festival",
	description:
		"The perfect musician for your special event. Ideal from weddings to corporate events.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Si Dartford",
        email: "sidartford@gmail.com",
        tel: "07708 398 362",
		// twitter: "sithesinger",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Si Dartford",
	},
};

export default siteData;
