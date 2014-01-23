// Skills controller, used for all routes
var skillsController = Ember.ArrayController.extend({
	sortProperties: ['duration'],
	sortAscending: false 
});

App.AppSkillsIndexController = skillsController;
App.AppSkillsLanguagesController = skillsController;
App.AppSkillsTechnologiesController = skillsController;
App.AppSkillsProcessesController = skillsController;
