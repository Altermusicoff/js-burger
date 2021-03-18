
var calculateBtn = document.getElementById('calculate');
var resetBtn = document.getElementById('reset');

calculateBtn.addEventListener('click', function(){
  var price = 10;
  var burgerName = document.getElementById('burger-name').value;

  if (burgerName.length < 1) {  
    alert('Name the BURGER!');
  }
  else{
    var checkboxs = document.getElementsByClassName('ingred');
    for (var i = 0; i < checkboxs.length; i++) {

      var checkbox = checkboxs[i];
      var isChecked = checkbox.checked;
      var priceAdd = parseInt(checkbox.dataset.price);

      if(isChecked){
        price += priceAdd;
      }    
    }
  }
  var sale = document.getElementById('burger-coupon').value;
  var coupons = ['cpn123', 'cpn456', 'cpn789'];
    // for (var i = 0; i < coupons.length; i++) {
    //   if(sale == coupons[i]){
    //     price = (price / 100 * 80).toFixed(2);
    //   } 
    // }

    if(coupons.includes(sale)){
      price -= (price * 20/100).toFixed(2);
    }
    else if (!coupons.includes(sale) && (sale.length > 1)) {
      alert('coupon not valid');
    }
    
  document.getElementById('price').innerHTML = price;
});

resetBtn.addEventListener('click', function(){
  console.log('ho cliccato sul pulsante reset');
  document.getElementById('price').innerHTML = ' ';
  document.getElementById('burger-name').innerHTML = ' ';

});
