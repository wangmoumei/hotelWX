App.Views.CartView = Backbone.View.extend({
	el: $("#cart"),
	events: {
		
	},
	initialize: function(){
		this.render();
	},
	render: function() {
        //使用underscore这个库，来编译模板
        var template = _.template($("#cartTemplate").html());
        $("#cart").html(template({})).css('display','block');
        App.loading();
    },
    hide:function(){
        $("#cart").css('display','none');
    }
});