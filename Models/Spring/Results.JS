/* Results.JS

   Model : Spring
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

  new Value.Object("P") ;
  new Value.Object("V") ;
  new Value.Object("A") ;
  new Value.Object("P-Init") ;
  new Value.Object("Stiff") ;
  new Value.Object("Mass") ;
  new Value.Object("Force") ;

  var Obj ;

  Obj = new LineGraph.Object("Canvas-P") ;

  Obj.Size(250, 120) ;
  Obj.XAxis(0, "Time", 10) ;
  Obj.YAxis(-10, "Position", 10) ;
  Obj.PlotLine("X", "P", "red") ;

  Obj = new LineGraph.Object("Canvas-V") ;

  Obj.Size(250, 120) ;
  Obj.XAxis(0, "Time", 10) ;
  Obj.YAxis(-20, "Velocity", 20) ;
  Obj.PlotLine("X", "V", "blue") ;

  Obj = new LineGraph.Object("Canvas-A") ;

  Obj.Size(250, 120) ;
  Obj.XAxis(0, "Time", 10) ;
  Obj.YAxis(-60, "Accel.", 60) ;
  Obj.PlotLine("X", "A", "violet") ;

  top.IPC.NewPanel() ;
}

/* End */

