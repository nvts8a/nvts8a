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
								var subsection = '#' + event.target.id + '.subsection';	
								var isHidden = $(subsection).hasClass('hidden');

								$('.subsection').addClass('hidden');
								
								if( isHidden ) {
									$(subsection).removeClass('hidden');
								}
							}
	}
});
