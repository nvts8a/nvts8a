// The app to end all apps
window.App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

// Bound Helpers for App
Ember.Handlebars.registerBoundHelper('formatExperienceDate', function(date) {
	var experienceDate = 'Present';
	var momentExperienceDate = moment( date ).format( 'MMMM YYYY' );
	var momentCurrentDate = moment().format( 'MMMM YYYY' );

	if( momentExperienceDate.localeCompare( momentCurrentDate ) ) {
		experienceDate = momentExperienceDate;	
	}

	return experienceDate;
});
