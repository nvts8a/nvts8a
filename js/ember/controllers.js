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
