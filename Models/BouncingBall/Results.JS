/* Results.JS

   Model : Bouncing Ball
   Created : 2011-05-31
   Revised : 2011-06-19
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

  new Value.Object("Elast") ;

  var Obj ;

  Obj = new LineGraph.Object("XY") ;

  Obj.Size(250, 200) ;
  Obj.XAxis(0, "X", 10) ;
  Obj.YAxis(0, "Y", 10) ;
  Obj.PlotLine("HorzDis", "VertDis", "red") ;

  Obj = new LineGraph.Object("dYdX") ;

  Obj.Size(250, 150) ;
  Obj.XAxis(0, "X", 10) ;
  Obj.YAxis(-15, "dY/dX", 15) ;
  Obj.PlotLine("HorzDis", "VertVel", "blue") ;

  top.IPC.NewPanel() ;
}

/* End */

