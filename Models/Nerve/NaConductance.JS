/* NaConductance.JS

   Model : Nerve
   Panel : NaConductance
   Created : 2011-06-28
   Revised : 2011-06-28
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("G-Na") ;

  new Value.Object("Na-Open") ;
  new Value.Object("Na-Closed") ;

  new Value.Object("Na-Fract-Open") ;
  new Value.Object("Na-Fract-Open-Change") ;

  new Value.Object("Na-Fract-Open-Tau") ;
  new Value.Object("Na-Fract-Open-SS") ;

  new Value.Object("V") ;

  new Symbol.Object("RedBox", "BOX", 4, "red", 2) ;

  var Obj ;

  Obj = new FunkyGraph.Object("Canvas-SS") ;

  Obj.Size(250, 150) ;
  Obj.XAxis(-100, "V (mV)", 50) ;
  Obj.YAxis(0, "SS", 1) ;
  Obj.Curve("Na-Fract-Open-SS", "blue") ;
  Obj.Symbol("V", "RedBox") ;

  Obj = new FunkyGraph.Object("Canvas-Tau") ;

  Obj.Size(250, 150) ;
  Obj.XAxis(-100, "V (mV)", 50) ;
  Obj.YAxis(0, "Tau", 0.4) ;
  Obj.Curve("Na-Fract-Open-Tau", "blue") ;
  Obj.Symbol("V", "RedBox") ;

  Obj = new LineGraph.Object("Canvas-1") ;

  Obj.Size(250, 150) ;
  Obj.XAxis(0, "Time", 20) ;
  Obj.YAxis(0, "Count", 120) ;
  Obj.PlotLine("X", "Na-Closed", "blue") ;
  Obj.PlotLine("X", "Na-Open", "red") ;

  top.IPC.NewPanel() ;
}

/* End */

