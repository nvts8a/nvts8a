// Expereince Data, including both school and work
App.Experience = DS.Model.extend( {
	location: DS.attr('string'),
	title: DS.attr('string'),
	startDate: DS.attr('date'),
	endDate: DS.attr('date'),
	type: DS.attr('string'),
	metadata: DS.attr('string')
});

// Data
App.Experience.FIXTURES = [
	{
		id: 1,
		location: "ePrize Inc",
		title: "Associate Software Engineer", 
		startDate: new Date(2012, 7),
		endDate: new Date(), 
		type: 'work',
		metadata: null
	},
	{
		id: 2,
		location: "Lawrence Technological University",
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
	{
		id: 4,
		location: "Henry Ford Community College",
		title: "Associates in Applied Science - Computer Information Systems", 
		startDate: new Date(2007, 8),
		endDate: new Date(2009, 8), 
		type: 'school',
		metadata: null
	},
	{
		id: 5,
		location: "Henry Ford Community College",
		title: "Intern Application Developer",
		startDate: new Date(2008, 8),
		endDate: new Date(2009, 8), 
		type: 'work',
		metadata: null
	},
];

