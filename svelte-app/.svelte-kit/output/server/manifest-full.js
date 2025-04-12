export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "WebUI_LiamMikeyJess_groupProject/_app",
	assets: new Set([".nojekyll","3D_Model_P_Collosus.jpg","beachedWhalesAus.png","bigorca.jpg","boyorca.jpg","deadHumpbackWhale.png","DickyMoe.jpg","dolphin.gif","FGMD.png","freewilly.jpg","H_Mel.jpg","mobyDickShip.jpg","mobyDickWHALE.jpg","oldNewsPaper.jpg","orca.gif","simpsonsMDbook.png","skyNewsWhale.jpg","sonicAdventureWhale.gif","starbucks.png","styles/global.css","teamMemberJessica.jpg","teamMemberLiam.jpg","teamMemberMikey.jpg","waterOrca.gif","waveOcean.mp3","whaleAppears.gif","whaleCrash.gif","whaleDive.gif","whaleJump.gif","whalejumpimage.jpg","whaleLogo.png","whaleOutlineSwim.gif","whaleSave.gif","whaleSprite.jpg","whales_on_the_beach.png","whaleUnderwater.gif","whaleWater.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".gif":"image/gif",".css":"text/css",".mp3":"audio/mpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.kUAUFj0L.js",app:"_app/immutable/entry/app.D9-nxsBC.js",imports:["_app/immutable/entry/start.kUAUFj0L.js","_app/immutable/chunks/DdD_xRXa.js","_app/immutable/chunks/BVni4JXR.js","_app/immutable/chunks/D6sdbuEL.js","_app/immutable/chunks/BAdzLI0U.js","_app/immutable/entry/app.D9-nxsBC.js","_app/immutable/chunks/BVni4JXR.js","_app/immutable/chunks/Dj1S9Ec9.js","_app/immutable/chunks/Bm7MfWfw.js","_app/immutable/chunks/DCvqqiYX.js","_app/immutable/chunks/jHGTz4jy.js","_app/immutable/chunks/BAdzLI0U.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/340_Ton_Whale",
				pattern: /^\/340_Ton_Whale\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/About",
				pattern: /^\/About\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Fast Facts about Whales",
				pattern: /^\/Fast Facts about Whales\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/MobyDick",
				pattern: /^\/MobyDick\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/Trending Whale News",
				pattern: /^\/Trending Whale News\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/Whales in History",
				pattern: /^\/Whales in History\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/freewilly",
				pattern: /^\/freewilly\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
