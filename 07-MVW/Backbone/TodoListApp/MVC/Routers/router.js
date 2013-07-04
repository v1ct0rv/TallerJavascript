var app = app || {};

var Workspace = Backbone.Router.extend({
	routes:{
	'*filter': 'setFilter'
	},
	setFilter: function( filter ) {
		// Set the current filter to be used

		if (filter) {
			window.app.ActivityFilter = filter.trim();
		} else {
			window.app.ActivityFilter = '';
		}

		window.app.Activities.trigger('filter');
	}
});
app.ActivityRouter = new Workspace();
Backbone.history.start();