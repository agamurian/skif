export const manifest = {
	appDir: "_app",
	assets: new Set([".htaccess","packages.webp","saw.webp","saw_logo.webp","skif.png","skif.webp","skif_logo.webp","skis.png","skis_about.webp","skis_logo.png","stable.webp"]),
	mimeTypes: {".webp":"image/webp",".png":"image/png"},
	_: {
		entry: {"file":"start-77e80bdf.js","js":["start-77e80bdf.js","chunks/index-0296d445.js","chunks/preload-helper-49353028.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "en",
				pattern: /^\/en\/?$/,
				names: [],
				types: [],
				path: "/en",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "en/about",
				pattern: /^\/en\/about\/?$/,
				names: [],
				types: [],
				path: "/en/about",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "en/login",
				pattern: /^\/en\/login\/?$/,
				names: [],
				types: [],
				path: "/en/login",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "ru",
				pattern: /^\/ru\/?$/,
				names: [],
				types: [],
				path: "/ru",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "ru/about",
				pattern: /^\/ru\/about\/?$/,
				names: [],
				types: [],
				path: "/ru/about",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "ru/login",
				pattern: /^\/ru\/login\/?$/,
				names: [],
				types: [],
				path: "/ru/login",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "[lang]/[...error]",
				pattern: /^\/([^/]+?)(?:\/(.*))?\/?$/,
				names: ["lang","error"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [9,10],
				b: []
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
