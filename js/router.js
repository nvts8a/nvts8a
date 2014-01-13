// App Router
App.Router.map( function() {
	this.resource( 'app', { path: '/' }, function(){
		// App Child Resources
		this.resource( 'app.experience', { path: '/experience' }, function(){
			// Experience Child Routes
			this.route( 'school' );
			this.route( 'work' );
		});
		
		// App Child Routes
		this.route( 'about' );
		this.route( 'references' );
		this.route( 'skills' );
	});
});



// App Route
App.AppRoute = Ember.Route.extend({});

// App Child Routes
App.AppIndexRoute = Ember.Route.extend({});

App.AppAboutRoute = Ember.Route.extend({});

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



// App Experience Route
App.AppExperienceRoute = Ember.Route.extend( {
	model: function() {
		return this.store.find( 'experience' );
	}	
});

// App Experience Child Routes
App.AppExperienceIndexRoute = Ember.Route.extend( {
	model: function() {
		return this.modelFor( 'app.experience' );
	}
});

App.AppExperienceSchoolRoute = Ember.Route.extend( {
	model: function() {
		return this.store.filter( 'experience', function( experience ) {
			return experience.get( "type" ) == 'school';
		});
	},
	renderTemplate: function( controller ) {
		this.render( "app/experience/index", { controller: controller } );
	}
});

App.AppExperienceWorkRoute = Ember.Route.extend( {
	model: function() {
		return this.store.filter( 'experience', function( experience ) {
			return experience.get( "type" ) == 'work';
		});
	},
	renderTemplate: function( controller ) {
		this.render( "app/experience/index", { controller: controller } );
	}
});

