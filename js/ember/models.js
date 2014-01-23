// Expereince Data, including both school and work
App.Experience = DS.Model.extend( {
	location: DS.attr('string'),
	title: DS.attr('string'),
	startDate: DS.attr('date'),
	endDate: DS.attr('date'),
	type: DS.attr('string'),
	metadata: DS.attr('string')
});

// References Data
App.References = DS.Model.extend( {
	name: DS.attr('string'),
	position: DS.attr('string'),
	location: DS.attr('string'),
	phoneNumber: DS.attr('string'),
	emailAddress: DS.attr('string')
});

// Skills, all types
App.Skills = DS.Model.extend( {
	skill: DS.attr('string'),
	type: DS.attr('string'),
	duration: DS.attr('string'),
	location: DS.attr('string')
});



// Fixtures for working with, should be replaced with a MySQL Database Adaptor

App.Experience.FIXTURES = [
	{
		id: 1,
		location: "ePrize Inc",
		title: "Associate Software Engineer", 
		startDate: new Date(2012, 7),
		endDate: null, 
		type: 'work',
		metadata: null
	},
	{
		id: 2,
		location: "Lawrence Tech",
		title: "Bachelor of Science - Computer Science", 
		startDate: new Date(2009, 8),
		endDate: new Date(2012, 6), 
		type: 'school',
		metadata: null
	},
	{
		id: 3,
		location: "DTE Energy",
		title: "Temporary Developer for Special Projects", 
		startDate: new Date(2011, 0),
		endDate: new Date(2012, 7), 
		type: 'work',
		metadata: null
	},
];

App.References.FIXTURES = [
	{
		id: 1,
		name: "Jeremy Lance",
		position: "Senior Software Engineer",
		location: "ePrize Inc",
		phoneNumber: "(734) 754-6515",
		emailAddress: "me@jerlance.com"
	},
	{
		id: 2,
		name: "Jeff Kenward",
		position: "Lead Developer/Technical Architect",
		location: "DTE Energy",
		phoneNumber: "(313) 235-3586",
		emailAddress: "kenwardj@dteenergy.com"
	}
];

App.Skills.FIXTURES = [
	{
		id: 1,
		skill: "Javascript",
		type: "language",
		duration: "2",
		location: "ePrize"
	},
	{
		id: 2,
		skill: "SQL",
		type: "language",
		duration: "4",
		location: "DTE,ePrize"
	},
	{
		id: 3,
		skill: "Java",
		type: "language",
		duration: "2",
		location: "DTE"
	},
	{
		id: 4,
		skill: "Ember.js",
		type: "technology",
		duration: "1",
		location: null
	},
	{
		id: 5,
		skill: "Web Services",
		type: "technology",
		duration: "4",
		location: "DTE,ePrize"
	},
	{
		id: 6,
		skill: "TTD",
		type: "process",
		duration: "2",
		location: "DTE"
	}
];

