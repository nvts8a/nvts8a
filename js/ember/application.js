// The app to end all apps
window.App = Ember.Application.create();

// Fixtures for working with, should be replaced with a MySQL Database Adaptor
App.ApplicationAdapter = DS.FixtureAdapter.extend();

