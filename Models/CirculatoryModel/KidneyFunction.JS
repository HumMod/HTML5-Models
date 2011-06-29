/* KidneyFunction.JS

   Model : Circulatory Model
   Panel : Kidney Function
   Created : 2011-06-23
   Revised : 2011-06-24
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("AP") ;

  new Value.Object("K-Drop") ;
  new Value.Object("K-PP") ;
  new Value.Object("K-Mass") ;
  new Value.Object("UO") ;
  new Symbol.Object("RedBox", "BOX", 4, "red", 2) ;

  var Obj ;

  Obj = new LineGraph.Object("Canvas-PP") ;

  Obj.Size(250, 180) ;
  Obj.XAxis(0, "Time", 60) ;
  Obj.YAxis(80, "Pressure", 120) ;
  Obj.PlotLine("X", "K-PP", "red") ;

  Obj = new LineGraph.Object("Canvas-UO") ;

  Obj.Size(250, 180) ;
  Obj.XAxis(0, "Time", 60) ;
  Obj.YAxis(0, "UO", 2) ;
  Obj.PlotLine("X", "UO", "red") ;

  Obj = new FunkyGraph.Object("UOvsPP") ;

  Obj.Size(250, 160) ;
  Obj.XAxis(50, "Pressure", 150) ;
  Obj.YAxis(0, "UO", 5) ;
  Obj.Curve("UO", "blue") ;
  Obj.Symbol("K-PP", "RedBox") ;

  top.IPC.NewPanel() ;
}

/* End */

