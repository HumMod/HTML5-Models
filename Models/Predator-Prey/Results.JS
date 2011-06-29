/* Results.JS

   Model : Predator-Prey
   Created : 2011-06-21
   Revised : 2011-06-22
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("M-Count") ;
  new Value.Object("M-Births") ;
  new Value.Object("M-Deaths") ;

  new Value.Object("W-Count") ;
  new Value.Object("W-Births") ;
  new Value.Object("W-Deaths") ;

  new Value.Object("M-Count0") ;
  new Value.Object("W-Count0") ;

  new Value.Object("M-Min") ;
  new Value.Object("M-Max") ;
  new Value.Object("W-Min") ;
  new Value.Object("W-Max") ;

  new Symbol.Object("RedDot", "Circle", 3, "red", 1) ;

  var Obj ;

  Obj = new LineGraph.Object("XY") ;

  Obj.Size(250, 250) ;
  Obj.XAxis(20, "Wolves", 90, 10) ;
  Obj.YAxis(600, "Moose", 1600, 100) ;
  Obj.PlotLine("W-Count", "M-Count", "black") ;
  Obj.PlotSymbol("W-Count", "M-Count", "RedDot") ;

  top.IPC.NewPanel() ;
}

/* End */

