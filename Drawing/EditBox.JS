/* EditBox.JS

   Created : 2011-06-19
   Revised : 2011-06-19
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var EditBox = new Object () ;

EditBox.Clicked = function (Name)
{ var Ref = Reference.Get(Name + 'Box') ;
  var Value = parseFloat(Ref.value) ;
  top.IPC.ParmChanged(Name, Value) ;
}

/* End */
