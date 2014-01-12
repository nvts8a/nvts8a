App.Content = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});

App.Content.FIXTURES = [
	{
		id: 1,
		title: 'Learn Ember.js',
		isCompleted: true
	},
	{
		id: 2,
		title: 'THIS IS A TEST',
		isCompleted: false
	},
	{
		id: 3,
		title: 'Profit!',
		isCompleted: false
	}
];

