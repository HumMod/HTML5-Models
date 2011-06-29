/* Basics.JS

   Created : 2011-06-17
   Revised : 2011-06-17
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Basics = new Object () ;

// Message Box ============================================

Basics.MessageBox = function(Message)
{ window.alert (Message) ;
}

// Can't Find =============================================

Basics.CantFind = function(Service, Name)
{ Basics.MessageBox (Service + " can't find this name : " + Name) ;
}

// Round To ================================================

Basics.RoundTo = function(DigitsRight, Input)
{ if (Input == undefined)
  { return Input ;
  }

  if (DigitsRight == undefined)
  { return Input ;
  }

  if (DigitsRight < 0)
  { return Input.toExponential(-DigitsRight) ;
  }

  return Input.toFixed(DigitsRight) ;
}

// LOG10 ===================================================

Basics.LOG10 = function(Value)

{ return Math.log(Value) / Math.log(10) ;
}


/* End */
