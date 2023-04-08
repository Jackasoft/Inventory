class FoodItem {
    constructor(options) {
        var options = options || {};
        this.name = options.name || "DefaultFood";
        this.amount = options.amount || 1;
        this.decrease = options.decrease || 1;
        this.eat = function () {
            this.amount -= this.decrease;
            if (this.amount < 0) {
                console.log('food gone');
            }
        };
    }
}

var carrot = new FoodItem({
    name:'Carrots',
    amount:50,
    decrease:2
});

var onions = new FoodItem({
    name:'onions',
    amount:1,
    decrease:1
});

carrot.eat();
onions.eat();