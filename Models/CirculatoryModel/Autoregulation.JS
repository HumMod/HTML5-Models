/* Autoregulation.JS

   Model : Circulatory Model
   Panel : Autoregulation
   Created : 2011-06-23
   Revised : 2011-06-24
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("TPR") ;

  new Value.Object("CO") ;
  new Value.Object("M-Basic") ;
  new Value.Object("M-Norm") ;
  new Value.Object("M-Tau") ;
  new Value.Object("M-Delay") ;

  new Symbol.Object("RedBox", "BOX", 4, "red", 2) ;

  var Obj ;

  Obj = new LineGraph.Object("Canvas-TPR") ;

  Obj.Size(250, 180) ;
  Obj.XAxis(0, "Time", 60) ;
  Obj.YAxis(0.01, "TPR", 0.03) ;
  Obj.PlotLine("X", "TPR", "red") ;

  Obj = new LineGraph.Object("Canvas-Flow") ;

  Obj.Size(250, 180) ;
  Obj.XAxis(0, "Time", 60) ;
  Obj.YAxis(0, "Flow", 2) ;
  Obj.PlotLine("X", "M-Delay", "red") ;

  Obj = new FunkyGraph.Object("TPRvsFLOW") ;

  Obj.Size(250, 150) ;
  Obj.XAxis(0, "Flow", 2) ;
  Obj.YAxis(0, "TPR", 0.05) ;
  Obj.Curve("TPR", "blue") ;
  Obj.Symbol("M-Delay", "RedBox") ;

  top.IPC.NewPanel() ;
}

/* End */

