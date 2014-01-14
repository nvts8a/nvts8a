// App Router
App.Router.map( function() {
	this.resource( 'app', { path: '/' }, function() {
		// App Child Resources
		this.resource( 'app.experience', { path: '/experience' }, function() {
			// Experience Child Routes
			this.route( 'school' );
			this.route( 'work' );
		});
		
		this.resource( 'app.skills', { path: '/skills' }, function() { 
			// Skils Child Routes
			this.route( 'languages' );
			this.route( 'processes' );
			this.route( 'technologies' );
		});
		
		// App Child Routes
		this.route( 'about' );
		this.route( 'references' );
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



// App Skills Route
App.AppSkillsRoute = Ember.Route.extend( {
	model: function() {
		return this.store.find( 'skills' );
	}	
});

// App Experience Child Routes
App.AppSkillsIndexRoute = Ember.Route.extend( {
	model: function() {
		return this.modelFor( 'app.skills' );
	}
});

App.AppSkillsLanguagesRoute = Ember.Route.extend( {
	model: function() {
		return this.store.filter( 'skills', function( skill ) {
			return skill.get( "type" ) == 'language';
		});
	},
	renderTemplate: function( controller ) {
		this.render( "app/skills/index", { controller: controller } );
	}
});

App.AppSkillsTechnologiesRoute = Ember.Route.extend( {
	model: function() {
		return this.store.filter( 'skills', function( skill ) {
			return skill.get( "type" ) == 'technology';
		});
	},
	renderTemplate: function( controller ) {
		this.render( "app/skills/index", { controller: controller } );
	}
});

App.AppSkillsProcessesRoute = Ember.Route.extend( {
	model: function() {
		return this.store.filter( 'skills', function( skill ) {
			return skill.get( "type" ) == 'process';
		});
	},
	renderTemplate: function( controller ) {
		this.render( "app/skills/index", { controller: controller } );
	}
});

