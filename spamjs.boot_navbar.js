define({ 
	name : 'spamjs.boot_navbar',
	extend : 'spamjs.view',
	modules : ["jsutils.file"]
}).as(function(navbar,fileUtils){
	
	navbar._init_ = function(){
		
		//Set View
		var data = {};
		data.nav_pos_class = this.options.position || '';
		data.container_class = this.options.fluid ? 'container-fluid' : 'container';
		var content_html = this.options.view || this.path('boot.navbar-content.html');
		
		
		var self = this;
		self.view('boot.navbar-wrapper.html',data,false).done(function(){
			fileUtils.loadView(content_html).done(function(html){
				self.$$.find('.nav-container').html(html);
				//self.apply();
			});
		});
		
	};
	navbar._config_ = function(config){
		this.url = config.url;
	};
});
