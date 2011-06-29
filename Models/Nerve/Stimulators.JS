/* Stimulators.JS

   Model : Nerve
   Panel : Stimulators
   Created : 2011-06-25
   Revised : 2011-06-25
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  //new Value.Object("") ;

  new RadioButtons.Object("Switch-1") ;
  new Value.Object("Amp-1") ;
  new Value.Object("Time-1") ;
  new Value.Object("Tau-1") ;

  new RadioButtons.Object("Switch-2") ;
  new Value.Object("Amp-2") ;
  new Value.Object("Time-2") ;
  new Value.Object("Tau-2") ;

  var Obj ;

  Obj = new LineGraph.Object("Canvas-1") ;

  Obj.Size(250, 160) ;
  Obj.XAxis(0, "Time (mS)", 20) ;
  Obj.YAxis(-300, "I 1", 0) ;
  Obj.PlotLine("X", "Out-1", "red") ;

  Obj = new LineGraph.Object("Canvas-2") ;

  Obj.Size(250, 160) ;
  Obj.XAxis(0, "Time (mS)", 20) ;
  Obj.YAxis(-300, "I 2", 0) ;
  Obj.PlotLine("X", "Out-2", "red") ;

  top.IPC.NewPanel() ;
}

/* End */

