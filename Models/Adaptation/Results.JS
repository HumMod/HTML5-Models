/* Results.JS

   Model : Adaptation
   Created : 2011-06-20
   Revised : 2011-06-21
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("I") ;
  new Value.Object("O") ;
  new Value.Object("A") ;

  new Value.Object("Derv") ;
  new Value.Object("K") ;
  new Value.Object("Tau") ;
  new Value.Object("t 1/2") ;

  new Value.Object("K") ;

  var Obj ;

  Obj = new LineGraph.Object("XY") ;

  Obj.Size(250, 200) ;
  Obj.XAxis(0, "Time", 10) ;
  Obj.YAxis(0, "I & O", 1) ;
  Obj.PlotLine("X", "I", "red") ;
  Obj.PlotLine("X", "O", "blue") ;

  top.IPC.NewPanel() ;
}

/* End */

