/* Results.JS

   Model : Low-PassFilter
   Panel : Results
   Created : 2011-06-24
   Revised : 2011-06-24
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  var Obj ;

  Obj = new LineGraph.Object("Canvas-Signal") ;

  Obj.Size(250, 140) ;
  Obj.XAxis(0, "X", 2) ;
  Obj.YAxis(-1, "Signal", 1) ;
  Obj.PlotLine("X", "Signal", "red") ;

  Obj = new LineGraph.Object("Canvas-Noise") ;

  Obj.Size(250, 140) ;
  Obj.XAxis(0, "X", 2) ;
  Obj.YAxis(-1, "Noise", 1) ;
  Obj.PlotLine("X", "Noise", "red") ;

  Obj = new LineGraph.Object("Canvas-Input") ;

  Obj.Size(250, 180) ;
  Obj.XAxis(0, "X", 2) ;
  Obj.YAxis(-2, "Input", 2) ;
  Obj.PlotLine("X", "Input", "red") ;

  Obj = new LineGraph.Object("Canvas-Output") ;

  Obj.Size(250, 180) ;
  Obj.XAxis(0, "X", 2) ;
  Obj.YAxis(-2, "Output", 2) ;
  Obj.PlotLine("X", "Output", "red") ;

  top.IPC.NewPanel() ;
}

/* End */

