/* ECFV.JS

   Model : RenalArteryStenosis
   Panel : ECFV
   Created : 2011-06-26
   Revised : 2011-06-26
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("ECFV") ;
  new Value.Object("ECFV-Change") ;
  new Value.Object("Intake") ;
  new Value.Object("UO") ;

  new Symbol.Object("RedBox", "BOX", 4, "red", 2) ;

  var Obj ;

  Obj = new LineGraph.Object("Canvas-ECFV-X") ;

  Obj.Size(250, 160) ;
  Obj.XAxis(0, "Time", 30) ;
  Obj.YAxis(14000, "ECFV", 16000) ;
  Obj.PlotLine("X", "ECFV", "red") ;

  Obj = new FunkyGraph.Object("Canvas-RAP-UO") ;

  Obj.Size(250, 160) ;
  Obj.XAxis(0, "RAP", 200) ;
  Obj.YAxis(0, "UO", 4) ;
  Obj.Curve("RAP-UO", "blue") ;
  Obj.Symbol("RAP", "RedBox") ;

  Obj = new FunkyGraph.Object("Canvas-ECFV-AP") ;

  Obj.Size(250, 160) ;
  Obj.XAxis(0, "ECFV", 20000) ;
  Obj.YAxis(0, "AP", 2) ;
  Obj.Curve("ECFV-AP", "blue") ;
  Obj.Symbol("ECFV", "RedBox") ;

  top.IPC.NewPanel() ;
}

/* End */

