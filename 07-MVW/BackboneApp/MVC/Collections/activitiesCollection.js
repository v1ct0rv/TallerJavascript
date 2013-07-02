var app = app || {};

var ActivityList = Backbone.Collection.extend({

	model: app.Activity,

	localStorage: new Backbone.LocalStorage('activities-backbone'),

	completed: function () {

		return this.filter(function (activity) {return activity.get('completed') });

	},

	remaining: function () {

		return this.without.apply(this, this.completed());
	},

	nextOrder: function () {

		if (!this.length) {
			return 1;
		}

		return this.last().get('order') + 1;
	},

	comparator: function (activity) {

		return activity.get('order');

	}

});

app.Activities = new ActivityList();