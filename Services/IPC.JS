/* IPC.JS

   Created : 2011-06-18
   Revised : 2011-06-22
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var IPC = new Object() ;

IPC.Restart = function ()
{ var Ref = PanelReferences.GetReference () ;
  Ref.contentWindow.Drawing.Restart() ;
}

IPC.Paint = function ()
{ var Ref = PanelReferences.GetReference () ;
  Ref.contentWindow.Drawing.Paint() ;
}

IPC.Overlay = function ()
{ var Ref = PanelReferences.GetReference () ;
  Ref.contentWindow.Drawing.Overlay() ;
}

IPC.NewPanel = function ()
{ SolveButtons.Enable() ;
  IPC.Paint () ;
}

IPC.ParmChanged = function(Name, Value)
{ System.ParmChanged (Name, Value) ;
}

IPC.GetCurve = function(Name)
{ return Curve.Get(Name) ;
}

IPC.GetVar = function(Name)
{ return Storage.GetVar(Name) ;
}

IPC.GetVal = function(Name)
{ return Storage.GetVal(Name) ;
}

IPC.GetStores = function(Name)
{ return Storage.GetStores(Name) ;
}

IPC.GetStoresIndex = function()
{ return Storage.StoresIndex ;
}

/* End */
