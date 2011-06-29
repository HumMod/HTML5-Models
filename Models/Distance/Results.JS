/* Results.JS

   Model : Distance
   Created : 2011-06-21
   Revised : 2011-06-21
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("VertDis") ;
  new Value.Object("VertVel") ;
  new Value.Object("VertAcc") ;

  new Value.Object("HorzDis") ;
  new Value.Object("HorzVel") ;
  new Value.Object("HorzAcc") ;

  /* Angle Box */

  new Value.Object("Angle") ;
  new Value.Object("Radians") ;
  new Value.Object("Speed") ;

  new Value.Object("MaxHigh") ;
  new Value.Object("MaxDis") ;

  var Obj ;

  Obj = new LineGraph.Object("XY") ;

  Obj.Size(250, 200) ;
  Obj.XAxis(0, "X", 10) ;
  Obj.YAxis(0, "Y", 10) ;
  Obj.PlotLine("HorzDis", "VertDis", "red") ;

  top.IPC.NewPanel() ;
}

/* End */

