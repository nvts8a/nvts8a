// App Router
App.Router.map( function() {
	this.resource( 'app', { path: '/' }, function(){
		// Child Routes
		this.route( 'about' );
		this.route( 'experience' );
		this.route( 'references' );
		this.route( 'skills' );
	});
});

App.AppRoute = Ember.Route.extend( { 
});

// Route Models
App.AppIndexRoute = Ember.Route.extend( {
});


App.AppAboutRoute = Ember.Route.extend( {
});

App.AppExperienceRoute = Ember.Route.extend( {
	model: function() {
		return this.store.find( 'experience' );
	}
});

App.AppReferencesRoute = Ember.Route.extend( {
	model: function() {
		return this.store.find( 'references' );
	}
});

App.AppSkillsRoute = Ember.Route.extend( {
	model: function() {
		return this.store.find( 'skills' );
	}
});

