App.Views.SelectView = Backbone.View.extend({
	el: $("#selectForm"),
	events: {
		
	},
	initialize: function(){
		this.render();
	},
	render: function() {
        //使用underscore这个库，来编译模板
        var template = _.template($("#bookTemplate").html());
        App.loading();
    }
});