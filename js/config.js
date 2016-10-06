requirejs.config({
  // input correct way here ( for ex. bitrix/templates/site-template/node_modules/ )
  baseUrl: 'node_modules/',
  shim: {
    'slick': ['jquery'],
    'slimscroll': ['jquery'],
    'styler': ['jquery']
  },
  paths: {
    'jquery': 'jquery/dist/jquery.min',
    'slick': 'slick-carousel/slick/slick.min',
    'fancybox': 'jquery-fancybox/source/js/jquery.fancybox.pack',
    'bootstrap': 'bootstrap-sass/assets/javascripts/bootstrap',
    'slimscroll': 'jquery-slimscroll/jquery.slimscroll.min',
    'styler': 'jquery.formstyler/jquery.formstyler.min'
  }
});
