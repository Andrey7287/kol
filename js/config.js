requirejs.config({
	// input correct way here ( for ex. bitrix/templates/site-template/node_modules/ )
	baseUrl: 'node_modules/',
	shim: {
		'slick': ['jquery']
	},
	paths: {
		'jquery': 'jquery/dist/jquery.min',
		'jquery-ui': 'jquery-ui-dist/jquery-ui.min',
		'slick': 'slick-carousel/slick/slick.min',
		'fancybox': 'jquery-fancybox/source/js/jquery.fancybox.pack'
	}
});
