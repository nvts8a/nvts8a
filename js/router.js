// App Router
App.Router.map( function() {
	this.resource( 'app', { path: '/' }, function(){
		// Child Routes
		this.route( 'true' );
	});
});

App.AppRoute = Ember.Route.extend( { 
	model: function() {
		return this.store.find( 'content' );
	}
});

App.AppIndexRoute = Ember.Route.extend( {
	model: function() {
		return this.modelFor( 'app' );
	}
});

App.AppTrueRoute = Ember.Route.extend( {
	model: function(){
		return this.store.filter( 'content', function (content){
			return content.get('isCompleted');
		});
	},
	renderTemplate: function(controller){
		this.render( 'app/index', {controller: controller} );
	}
});
