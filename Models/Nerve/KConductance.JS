/* KConductance.JS

   Model : Nerve
   Panel : KConductance
   Created : 2011-06-28
   Revised : 2011-06-28
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("G-K") ;
  new Value.Object("G-K-Change") ;

  new Value.Object("G-K-Tau") ;
  new Value.Object("G-K-SS") ;
  new Value.Object("V") ;

  var Obj ;

  new Symbol.Object("RedBox", "BOX", 4, "red", 2) ;

  var Obj ;

  Obj = new FunkyGraph.Object("Canvas-SS") ;

  Obj.Size(250, 150) ;
  Obj.XAxis(-100, "V (mV)", 50) ;
  Obj.YAxis(0, "SS", 40) ;
  Obj.Curve("G-K-SS", "blue") ;
  Obj.Symbol("V", "RedBox") ;

  Obj = new FunkyGraph.Object("Canvas-Tau") ;

  Obj.Size(250, 150) ;
  Obj.XAxis(-100, "V (mV)", 50) ;
  Obj.YAxis(0, "Tau", 6) ;
  Obj.Curve("G-K-Tau", "blue") ;
  Obj.Symbol("V", "RedBox") ;

  Obj = new LineGraph.Object("Canvas-K") ;

  Obj.Size(250, 160) ;
  Obj.XAxis(0, "Time", 20) ;
  Obj.YAxis(0, "Cond", 40) ;
  Obj.PlotLine("X", "G-K", "red") ;

  top.IPC.NewPanel() ;
}

/* End */

