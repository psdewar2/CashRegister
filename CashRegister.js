//Cash Register
//created by Peyt Spencer Dewar

function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var person1 = new StaffMember("Sally",5);
var person2 = new StaffMember("Bob",10);

// Here I give myself a staff discount of 20%
var me = new StaffMember("PSD",20);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
 
    applyStaffDiscount: function(employee) {
    	this.total -= (this.total*employee.discountPercent/100)
    }
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);

cashRegister.applyStaffDiscount(me)

// Displays the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));