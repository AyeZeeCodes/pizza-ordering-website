//Create Pizza Order Object
function Pizza() {};
//Creating the order constructor
function Pizza(pizzaName, pizzaSize, pizzaToppings) {
  this.name = pizzaName;
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
};
//Pizza Price Prototype
Pizza.prototype.price = function() {
  if (pizzaSize === 'Small') {
    pizzaPrice = '$14'
  } else if (pizzaSize === 'Medium') {
    pizzaPrice = '$18'
  } else {
    pizzaPrice = '$22'
  };
  console.log("The price for this pizza is " + pizzaPrice);
}

//Front end, user logic
$(function() {
  //Show order form
//  $('#createOrderBtn').click(function() {
//    $('form#orderForm').fadeIn('slow').show();
//  });
  //This empty array allows us to pass a bunch of orders in here.
  order = [];
  $('#orderSubmit').click(function(event) {
  event.preventDefault();
  pizzaName = $("#name").val();
  pizzaSize = $("#pizzaSize").val();
  pizzaToppings = $("input:checkbox:checked").map(function(){
      return $(this).val();
    }).get(); //per the docs this turns the jQuery object into a true array. Not sure this is needed.
  //Let's try and pass all values into a new object with a constructor
  order[0] = new Pizza(pizzaName, pizzaSize, pizzaToppings);
  });
});
