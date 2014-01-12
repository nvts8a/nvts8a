Nvts8a.Content = DS.Model.extend( {
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});

Nvts8a.Content.FIXTURES = [
	{
		id: 1,
		title: 'Learn Ember.js',
		isCompleted: true
	},
	{
		id: 2,
		title: '...',
		isCompleted: false
	},
	{
		id: 3,
		title: 'Profit!',
		isCompleted: false
	}
];

