/* Title.JS

   Created : 2011-06-17
   Revised : 2011-06-17
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Title = new Object () ;

Title.Add = function (Model)
{ var Ref = document.getElementById ("Title") ;
  var Msg = "Modeling Workshop (v0.3) - " + Model ;
  Ref.innerHTML = Msg ;
}

/* End */
