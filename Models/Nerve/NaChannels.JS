/* NaChannels.JS

   Model : Nerve
   Panel : NaChannels
   Created : 2011-06-25
   Revised : 2011-06-28
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("Na-Total") ;
  new Value.Object("Na-Inactive") ;
  new Value.Object("Na-Active") ;
  new Value.Object("Na-Active-Change") ;

  new Value.Object("Na-Fract-Active-SS") ;
  new Value.Object("Na-Active-Tau") ;
  new Value.Object("V") ;

  new Symbol.Object("RedBox", "BOX", 4, "red", 2) ;

  var Obj ;

  Obj = new FunkyGraph.Object("Canvas-SS") ;

  Obj.Size(250, 150) ;
  Obj.XAxis(-100, "V (mV)", 50) ;
  Obj.YAxis(0, "SS", 1) ;
  Obj.Curve("Na-Fract-Active-SS", "blue") ;
  Obj.Symbol("V", "RedBox") ;

  Obj = new FunkyGraph.Object("Canvas-Tau") ;

  Obj.Size(250, 150) ;
  Obj.XAxis(-100, "V (mV)", 50) ;
  Obj.YAxis(0, "Tau", 10) ;
  Obj.Curve("Na-Active-Tau", "blue") ;
  Obj.Symbol("V", "RedBox") ;

  Obj = new LineGraph.Object("Canvas-1") ;

  Obj.Size(250, 150) ;
  Obj.XAxis(0, "Time", 20) ;
  Obj.YAxis(0, "Count", 120) ;
  Obj.PlotLine("X", "Na-Inactive", "blue") ;
  Obj.PlotLine("X", "Na-Active", "red") ;

  top.IPC.NewPanel() ;
}

/* End */

