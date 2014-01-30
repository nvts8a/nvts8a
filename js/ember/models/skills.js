// Skills, all types
App.Skills = DS.Model.extend( {
	skill: DS.attr('string'),
	type: DS.attr('string'),
	duration: DS.attr('string'),
	location: DS.attr('string')
});

// Data
App.Skills.FIXTURES = [
	{
		id: 1,
		skill: "JavaScript",
		type: "language",
		duration: "2",
		location: "ePrize"
	},
	{
		id: 2,
		skill: "SQL",
		type: "language",
		duration: "5",
		location: "ePrize Inc, DTE Energy, Henry Ford Community College"
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
		location: "ePrize Inc, DTE Energy"
	},
	{
		id: 6,
		skill: "Test Driven Development",
		type: "process",
		duration: "2",
		location: "DTE Energy"
	},
	{
		id: 7,
		skill: "Perl",
		type: "language",
		duration: "2",
		location: "ePrize Inc"
	},
	{
		id: 8,
		skill: "Regular Expression",
		type: "language",
		duration: "2",
		location: "ePrize Inc"
	},
	{
		id: 9,
		skill: "Template Toolkit",
		type: "language",
		duration: "2",
		location: "ePrize Inc"
	},
	{
		id: 10,
		skill: "Shell Scripting",
		type: "language",
		duration: "4",
		location: "ePrize Inc, DTE Energy"
	},
	{
		id: 11,
		skill: "IBM MQ",
		type: "technology",
		duration: "2",
		location: "DTE Energy"
	},
	{
		id: 12,
		skill: "IBM Message Broker",
		type: "technology",
		duration: "2",
		location: "DTE Energy"
	},
	{
		id: 13,
		skill: "Unix/Linux",
		type: "technology",
		duration: "4",
		location: "ePrize Inc, DTE Energy"
	},
	{
		id: 14,
		skill: "Git/Mercurial/IBM ClearCase",
		type: "technology",
		duration: "4",
		location: "ePrize Inc, DTE Energy"
	},

];

