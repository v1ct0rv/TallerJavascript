var app = app || {};

app.AppView= Backbone.View.extend({

	el: '#generalApp',

	statsTemplate: _.template($('#statsTemplate').html()),

	events: {
		'keypress #newActivity': 'createOnEnter',
		'click #clear-completed': 'clearCompleted',
		'click #markAll': 'toggleAllComplete'
	},


	initialize: function () {

		this.input = this.$('#newActivity');
		this.allCheckbox = this.$('#markAll')[0];
		this.$stats = this.$('#stats');
		this.$main = $('#main');

		window.app.Activities.on('add', this.addOne, this);
		window.app.Activities.on('reset', this.addAll, this);
		window.app.Activities.on('all', this.render, this);

		window.app.Activities.on('change:completed', this.filterOne, this);
		window.app.Activities.on('filter', this.filterAll, this);

		app.Activities.fetch();

	},

	render: function () {

		var completed = app.Activities.completed().length;
		var remaining = app.Activities.remaining().length;

		if (app.Activities.length) {

			this.$main.show();
			this.$stats.show();

			this.$stats.html(this.statsTemplate({

				completed: completed,
				remaining: remaining

			}));

			$('#filters li a')
			.removeClass('selected')
			.filter('[href="#/' + (app.ActivityFilter || '') + '"]')
			.addClass('selected');

		} else {

			this.$main.hide();
			this.$stats.hide();

		}

		this.allCheckbox.checked = !remaining;

	},

	addOne: function (activity) {

		var view = new app.ActivityView({ model: activity });
		$('#activityList').append(view.render().el);
	},

	addAll: function () {
		$('#activityList').html('');
		app.Activities.each(this.addOne, this);

	},

	filterOne : function (activity) {
		activity.trigger('visible');
	},

	filterAll : function () {
		app.Activities.each(this.filterOne, this);
	},
	newAttributes: function() {
		return {
			title: this.input.val().trim(),
			order: app.Activities.nextOrder(),
			completed: false
		};
	},

	createOnEnter: function( e ) {
		if ( e.which !== ENTER_KEY || !this.input.val().trim() ) {
			return;
		}
		app.Activities.create( this.newAttributes() );
		this.input.val('');
	},

	clearCompleted: function() {
		_.each( window.app.Activities.completed(), function( activity ) {
			activity.destroy();
		});
		return false;
	},

	toggleAllComplete: function() {
		var completed = this.allCheckbox.checked;
		app.Activities.each(function( activity ) {
			activity.save({
			'completed': completed
			});
		});
	}

});

