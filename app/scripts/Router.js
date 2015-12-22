App.Routers.AppRouter = Backbone.Router.extend({
	routes : {  
        '?:openId' : 'index', 
		'index?:openId' : 'index',
        'select' : 'select',
        'food' : 'food',
        '*error' : 'index'  
    },  
    index : function(openid) { 
        App.openid = App.openid || openid || 'aaa';
        App.zIndex=1;
        if(this.cartView)
            this.cartView.hide();
        $('section.show').removeClass('show fadeIn').addClass('fadeOut');
        App.loading();
        
    },
    select:function(){
        App.loading(); 
        App.zIndex ++;
        $('section.show').removeClass('fadeIn').addClass('fadeOut');
        $('#selectResult').removeClass('hide fadeOut').addClass('show fadeIn').css('zIndex',App.zIndex);
        if(this.cartView)
            this.cartView.render();
        else
            this.cartView = new App.Views.CartView();
    },
    food:function(){
        App.loading(); 
        App.zIndex ++;
        $('#bookDinner').removeClass('hide fadeOut').addClass('show fadeIn').css('zIndex',App.zIndex);
        if(this.cartView)
            this.cartView.render();
        else
            this.cartView = new App.Views.CartView();
    },
    renderError : function(error) {  
        console.log('URL错误, 错误信息: ' + error);  
    }  
}); 
$('section').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
    if($(this).hasClass('fadeOut'))
        $(this).removeClass('show').addClass('hide').css('zIndex',App.zIndex);
});
$(function(){
    new App.Routers.AppRouter();  
     
    Backbone.history.start();
    //location.href='#';
});