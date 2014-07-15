// References Data
App.References = DS.Model.extend( {
	name: DS.attr('string'),
	position: DS.attr('string'),
	location: DS.attr('string'),
	phoneNumber: DS.attr('string'),
	emailAddress: DS.attr('string')
});

// Data
App.References.FIXTURES = [
	{
		id: 1,
		name: "Jeremy Lance",
		position: "Senior Software Engineer",
		location: "ePrize Inc",
		phoneNumber: "(734) 754-####",
		emailAddress: "XXXX@jerlance.com"
	},
	{
		id: 2,
		name: "Jeff Kenward",
		position: "Lead Developer/Technical Architect",
		location: "DTE Energy",
		phoneNumber: "(313) 235-####",
		emailAddress: "XXXX@dteenergy.com"
	},
	{
		id: 3,
		name: "Joseph Thomas",
		position: "Manager",
		location: "DTE Energy",
		phoneNumber: "(313) 235-####",
		emailAddress: "XXXX@dteenergy.com"
	}
];
