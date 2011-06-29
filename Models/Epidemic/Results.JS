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

  new Value.Object("H") ;
  new Value.Object("C") ;
  new Value.Object("R") ;

  new Value.Object("C0") ;
  new Value.Object("V") ;
  new Value.Object("RS") ;

  var Obj ;

  Obj = new LineGraph.Object("XY") ;

  Obj.Size(250, 250) ;
  Obj.XAxis(0, "Days", 20) ;
  Obj.YAxis(0, "Count", 1000) ;
  Obj.PlotLine("X", "H", "blue") ;
  Obj.PlotLine("X", "C", "red") ;
  Obj.PlotLine("X", "R", "black") ;

  Obj = new BarGraph.Object("Bar") ;

  Obj.Size(250, 102) ;
  Obj.Axes(0, "Count", 1000) ;
  Obj.Bar("H", "H", "blue") ;
  Obj.Bar("C", "C", "red") ;
  Obj.Bar("R", "R", "black") ;

  top.IPC.NewPanel() ;
}

/* End */

