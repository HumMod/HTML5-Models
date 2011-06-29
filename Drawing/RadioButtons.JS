/* RadioButtons.JS

   Created : 2011-06-25
   Revised : 2011-06-25
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var RadioButtons = new Object () ;

RadioButtons.Object = function(Name)
{ this.Name = Name ;
  Painter.Add(this) ;
}

RadioButtons.Clicked = function(Name, Value)
{ top.IPC.ParmChanged(Name, Value) ;
}

RadioButtons.Object.prototype.Paint = function()
{ var Value = top.IPC.GetVal(this.Name) ; 
  var Ref = Reference.Get(this.Name + Value) ;
  Ref.checked = true ;
}

/* End */
