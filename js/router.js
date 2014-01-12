// App Router
App.Router.map( function() {
	this.resource( 'app', { path: '/' }, function(){
		// Child Routes
		
		// Testing Routes, remove when no longer needed
		//this.route( 'false' );
		//this.route( 'true' );
	});
});

App.AppRoute = Ember.Route.extend( { 
	model: function() {
		return this.store.find( 'experience' );
	}
});


// Child Routes
App.AppIndexRoute = Ember.Route.extend( {
	model: function() {
		return this.modelFor( 'app' );
	}
});

// Testing Routes, remove when no longer needed
/*
App.AppFalseRoute = Ember.Route.extend( {
	model: function(){
		return this.store.filter( 'content', function(content){
			return !content.get('isCompleted');
		});
	},
	renderTemplate: function(controller){
		this.render( 'app/index', { controller: controller } );
	}
});

App.AppTrueRoute = Ember.Route.extend( {
	model: function(){
		return this.store.filter( 'content', function(content){
			return content.get('isCompleted');
		});
	},
	renderTemplate: function(controller){
		this.render( 'app/index', { controller: controller } );
	}
});
*/
