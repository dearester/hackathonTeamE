game.module(
    'game.main'
)
.body(function() {

//game.addAsset('logo.png');

game.createScene('Main', {
    backgroundColor: 0xb9bec7,

    init: function() {
        var anim = new this.Animation('NarutoStanding.gif');
        anim.animationSpeed = 0.2;
        anim.play();
        anim.addTo(this.stage);
    }
    
});

});
