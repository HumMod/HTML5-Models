/* Results.JS

   Model : EnzymeKinetics
   Panel : Results
   Created : 2011-06-25
   Revised : 2011-06-25
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("E") ;
  new Value.Object("S") ;
  new Value.Object("ES") ;
  new Value.Object("P") ;

  new Value.Object("k1") ;
  new Value.Object("k2") ;
  new Value.Object("k3") ;
  new Value.Object("k4") ;

  var Obj ;

  Obj = new LineGraph.Object("Canvas-XY") ;

  Obj.Size(250, 250) ;
  Obj.XAxis(0, "Time", 50) ;
  Obj.YAxis(0, "E,S,ES,P", 1) ;
  Obj.PlotLine("X", "E", "red") ;
  Obj.PlotLine("X", "S", "blue") ;
  Obj.PlotLine("X", "ES", "black") ;
  Obj.PlotLine("X", "P", "violet") ;

  top.IPC.NewPanel() ;
}

/* End */

