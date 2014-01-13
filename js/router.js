// App Router
App.Router.map( function() {
	this.resource( 'app', { path: '/' }, function(){
		// Child Routes
		this.route( 'experience' );
		this.route( 'skills' );
		this.route( 'references' );
	});
});

App.AppRoute = Ember.Route.extend( { 
});

// Route Models
App.AppIndexRoute = Ember.Route.extend( {
});

App.AppExperienceRoute = Ember.Route.extend( {
	model: function() {
		return this.store.find( 'experience' );
	}
});

App.AppSkillsRoute = Ember.Route.extend( {
	model: function() {
		return this.store.find( 'skills' );
	}
});

App.AppReferencesRoute = Ember.Route.extend( {
	model: function() {
		return this.store.find( 'references' );
	}
});

