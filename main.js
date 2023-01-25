/**
 * @author : Koua Ekaza Wilfried
 * @description :  Make A small Calculator using Javascript
 * @param : operator : function
 * 
 **/


/*
1- Create a HTML file for your calculator and a JS file for the calculator’s functionality
2- You must create 3 functions in the js file:
 1.number(num)
 2.operator(operator)
 3.equal()
    Hint : you can use the eval() method to help with your calculations.
3- Before coding, take your time to understand all the parts to the exercise and their process. You can write it down somewhere if it helps (recommended).
4- Bonus : create the RESET and CLEAR buttons.
*/


 let show = document.getElementById('show');
 let equation = "";
 
 function number(num) {
     equation += num;
     show.textContent = equation;
 }
 
 function operator(op) {
     equation += op;
     show.textContent = equation;
 }
 
 function equal() {
     let result = eval(equation);
     show.textContent = result;
     equation = "";
 }
 
 
 // function to reset the screen
 
 function reset() {
     equation = "";
     show.textContent = "0";
 }
 

  // function to clear the screen
 function clear() {
     equation = equation.slice(0, -1);
     show.textContent = equation;
 }
 
  // function to clear the screen
 function clear() {
     let input = input.slice(0, -1);
     show.value = input;
 }
 