Package.describe({
  summary: "jQuery Lightbox2 repackaged for Meteor"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files(['lib/js/lightbox-2.6.min.js'
    ,'lib/css/lightbox.css'
    ,'lightbox-override.css'
    ,'lib/img/close.png'
    ,'lib/img/loading.gif'
    ,'lib/img/next.png'
    ,'lib/img/prev.png'], 'client');
});
