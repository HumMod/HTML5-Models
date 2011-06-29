/* Summary.JS

   Model : Circulatory Model
   Panel : Summary
   Created : 2011-06-23
   Revised : 2011-06-23
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("AP") ;
  new Value.Object("CO") ;
  new Value.Object("TPR") ;
  new Value.Object("ECFV") ;
  new Value.Object("BV") ;
  new Value.Object("MCFP") ;
  new Value.Object("RAP") ;

  new Symbol.Object("RedDot", "Circle", 3, "red", 1) ;

  var Obj ;

  Obj = new LineGraph.Object("Canvas-AP") ;

  Obj.Size(250, 120) ;
  Obj.XAxis(0, "Time", 60) ;
  Obj.YAxis(80, "AP", 120) ;
  Obj.PlotLine("X", "AP", "red") ;

  Obj = new LineGraph.Object("Canvas-CO") ;

  Obj.Size(250, 120) ;
  Obj.XAxis(0, "Time", 60) ;
  Obj.YAxis(5000, "CO", 6000) ;
  Obj.PlotLine("X", "CO", "red") ;

  Obj = new LineGraph.Object("Canvas-TPR") ;

  Obj.Size(250, 120) ;
  Obj.XAxis(0, "Time", 60) ;
  Obj.YAxis(0.01, "TPR", 0.03) ;
  Obj.PlotLine("X", "TPR", "red") ;

  top.IPC.NewPanel() ;
}

/* End */

