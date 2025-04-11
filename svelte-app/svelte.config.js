import adapter from '@sveltejs/adapter-static';


const dev = process.env.NODE_ENV === 'development';
const repoName = 'WebUI_LiamMikeyJess_groupProject'; // REPO NAME


/* @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : `/${repoName}`
		},
	},
};

export default config;
