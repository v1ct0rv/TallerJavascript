var app = app || {};

app.ActivityView = Backbone.View.extend({
	
	tagName: 'li',
	
	template: _.template( $('#activityTemplate').html()),
	
	events: {
		'dblclick label': 'edit',
		'keypress .edit': 'updateOnEnter',
		'blur .edit': 'close',
		'click .toggle': 'togglecompleted',
		'click .destroy': 'clear'
	},


	initialize: function() {
		this.model.on('change', this.render, this);
		this.model.on( 'destroy', this.remove, this );
		this.model.on( 'visible', this.toggleVisible, this );
	},


	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		this.$el.toggleClass('completed', this.model.get('completed'));
		this.toggleVisible();
		this.input = this.$('.edit');
		this.label=this.$('.contentData');
		return this;
	},

	toggleVisible : function () {
		this.$el.toggleClass( 'hidden', this.isHidden());
	},

	isHidden : function () {
		var isCompleted = this.model.get('completed');
		return ( // hidden cases only
		(!isCompleted && app.ActivityFilter === 'completed')
		|| (isCompleted && app.ActivityFilter === 'active')
		);
	},

	togglecompleted: function () {
		this.model.toggle();
	},

	// Switch this view into ‘"editing"‘ mode, displaying the input field.
	edit: function() {
		this.$el.addClass('editing');
		this.label.hide();
		this.input.focus();
	},
	// Close the ‘"editing"‘ mode, saving changes to the todo.
	close: function() {
		var value = this.input.val().trim();
		if (value) {
			this.model.save({ title: value });
		} else {

			this.clear();
		}

		this.$el.removeClass('editing');
		this.label.show();
	},
	// If you hit ‘enter‘, we’re through editing the item.
	updateOnEnter: function( e ) {
		if ( e.which === ENTER_KEY ) {
			this.close();
		}
	},

	clear: function () {
		this.model.destroy();
	}
});