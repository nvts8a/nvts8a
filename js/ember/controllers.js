// Experience controller, used for all routes
var experienceController = Ember.ArrayController.extend({
	sortProperties: ['endDate'],
	sortAscending: false
});

App.AppExperienceIndexController = experienceController;
App.AppExperienceSchoolController = experienceController;
App.AppExperienceWorkController = experienceController;

// Skills controller, used for all routes
var skillsController = Ember.ArrayController.extend({
	sortProperties: ['duration'],
	sortAscending: false 
});

App.AppSkillsIndexController = skillsController;
App.AppSkillsLanguagesController = skillsController;
App.AppSkillsProcessesController = skillsController;
App.AppSkillsTechnologiesController = skillsController;

// About controller, used for subsections
App.AppAboutController = Ember.ObjectController.extend( {
	actions: {
		toggleSubsection:	function() {
								var targetId = event.target.id;	
								var subsection = '#'+targetId+'.subsection';
								var isHidden = $(subsection).hasClass('hidden');

								if( isHidden ) {
									$(subsection).removeClass('hidden');
								}
								else {
									$(subsection).addClass('hidden');
								}
							}
	}
});
