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
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/WebUI_LiamMikeyJess_groupProject/","/WebUI_LiamMikeyJess_groupProject/340_Ton_Whale","/WebUI_LiamMikeyJess_groupProject/About","/WebUI_LiamMikeyJess_groupProject/Fast Facts about Whales","/WebUI_LiamMikeyJess_groupProject/MobyDick","/WebUI_LiamMikeyJess_groupProject/Trending Whale News","/WebUI_LiamMikeyJess_groupProject/Whales in History","/WebUI_LiamMikeyJess_groupProject/freewilly"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
