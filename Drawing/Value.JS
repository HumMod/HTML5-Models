/* Value.JS

   Created : 2011-06-18
   Revised : 2011-06-18
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Value = new Object() ;

Value.Object = function (Name, ID)
{ this.Name = Name ;

  if (ID != undefined)
  { this.ID = ID ;
  }
  else
  { this.ID = Name ;
  }

  Painter.Add(this) ;
}

Value.Object.prototype.Paint = function ()
{ var Var = top.IPC.GetVar(this.Name) ;
  var Rounded = top.Basics.RoundTo(Var.Format, Var.Val) ;
  var Ref = Reference.Get(this.ID) ;
  Ref.innerHTML = Var.Label + " = " + Rounded ;
}

/* End */
