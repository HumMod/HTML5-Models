/* Reference.JS

   Created : 2011-06-18
   Revised : 2011-06-18
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Reference = new Object () ;

Reference.Get = function (ID)
{ var Ref = document.getElementById (ID) ;
  var Msg = "Panels reference is undefined." ;
  top.Assert.OK (Ref != undefined, Msg) ;
  return Ref ;
}

/* End */
