//Global variables
pizzaName = '';
pizzaSize = '';
pizzaToppings = [];
specialRequest = '';

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
  pizzaToppingsPrice = pizzaToppings.length
  if (pizzaSize === 'Small') {
    pizzaPrice = (14 + (.25 * pizzaToppingsPrice))
  } else if (pizzaSize === 'Medium') {
    pizzaPrice = (18 + (.25 * pizzaToppingsPrice))
  } else {
    pizzaPrice = (22 + (.25 * pizzaToppingsPrice))
  };
  return pizzaPrice.toFixed(2);
}

//Front end, user logic


$(function() {
  //Show order form
  $('#createOrderBtn').click(function() {
    $('form#orderForm').fadeIn('slow').show();
 });
  //This empty array allows us to pass a bunch of orders in here.
  order = [];
  //On the order button being clicked, this function grabs all the values that were given by the user.
  $('#orderSubmit').click(function(event) {
  event.preventDefault();
  pizzaName = $("#name").val();
  pizzaSize = $("#pizzaSize").val();
  pizzaToppings = $("input:checkbox:checked").map(function(){
      return $(this).val();
    }).get(); //per the docs this turns the jQuery object into a true array. Not sure this is needed.
  specialRequest = $("#specialRequest").val();

  //Let's try and pass all values into a new object with a constructor
  order[0] = new Pizza(pizzaName, pizzaSize, pizzaToppings);
  //This shows the order on the page
  orderOutput();
  //This calculates and shows the price on the page.
  totalPrice();
  });
  //This function spits out the html for the order
  function orderOutput () {
    $('.order-output').show();
    $('.name').text('Name on order ' + pizzaName);
    $('.pizza-size').text('You ordered a ' + pizzaSize);
    $('.pizza-toppings').text('Your toppings include ' + pizzaToppings);
    if (specialRequest !== '') {
      $('.special-request').text('Your request is: ' + specialRequest);
    } else {
      $('.special-request').css('display', 'none');
    };
  } //End of orderOutput function
  //This function calculates the price and returns it to the page.
  function totalPrice () {
    $('.total-price').text('Your total is $' + order[0].price());
  }
});
