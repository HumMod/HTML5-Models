/* Results.JS

   Model : First-OrderDE
   Panel : Results
   Created : 2011-06-24
   Revised : 2011-06-24
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("Y") ;
  new Value.Object("Y-Change") ;
  new Value.Object("Y-Exact") ;
  new Value.Object("K") ;
  new Value.Object("Tau") ;
  new Value.Object("T-Half") ;
  new Value.Object("Error") ;

  new Symbol.Object("RedDot", "Circle", 3, "red", 1) ;

  var Obj ;

  Obj = new LineGraph.Object("Canvas-Y") ;

  Obj.Size(250, 140) ;
  Obj.XAxis(0, "X", 20) ;
  Obj.YAxis(0, "Y", 1) ;
  Obj.PlotLine("X", "Y", "blue") ;
  Obj.PlotSymbol("X", "Y-Exact", "RedDot") ;

  Obj = new LineGraph.Object("Canvas-Change") ;

  Obj.Size(250, 100) ;
  Obj.XAxis(0, "X", 20) ;
  Obj.YAxis(-0.1, "dY/dX", 0) ;
  Obj.PlotLine("X", "Y-Change", "red") ;

  Obj = new LineGraph.Object("Canvas-Error") ;

  Obj.Size(250, 100) ;
  Obj.XAxis(0, "X", 20) ;
  Obj.YAxis(0, "Error", 0.02, 0.01) ;
  Obj.PlotLine("X", "Error", "red") ;

  top.IPC.NewPanel() ;
}

/* End */

