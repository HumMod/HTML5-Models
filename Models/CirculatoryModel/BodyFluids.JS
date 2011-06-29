/* Body Fluids.JS

   Model : Circulatory Model
   Panel : Body Fluids
   Created : 2011-06-22
   Revised : 2011-06-24
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("ECFV") ;
  new Value.Object("E-Change") ;

  new Value.Object("In") ;
  new Value.Object("UO") ;
  new Value.Object("BV") ;

  new Symbol.Object("RedBox", "BOX", 4, "red", 2) ;

  var Obj ;

  Obj = new LineGraph.Object("Canvas-ECFV") ;

  Obj.Size(250, 180) ;
  Obj.XAxis(0, "Time", 60) ;
  Obj.YAxis(14000, "ECFV", 16000) ;
  Obj.PlotLine("X", "ECFV", "red") ;

  Obj = new LineGraph.Object("Canvas-BV") ;

  Obj.Size(250, 180) ;
  Obj.XAxis(0, "Time", 60) ;
  Obj.YAxis(4000, "BV", 6000) ;
  Obj.PlotLine("X", "BV", "red") ;

  Obj = new FunkyGraph.Object("BVvsECFV") ;

  Obj.Size(250, 160) ;
  Obj.XAxis(0, "ECFV", 25000) ;
  Obj.YAxis(0, "BV", 7000) ;
  Obj.Curve("BV", "blue") ;
  Obj.Symbol("ECFV", "RedBox") ;

  top.IPC.NewPanel() ;
}

/* End */

