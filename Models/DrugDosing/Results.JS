/* Results.JS

   Model : Drug Dosing
   Created : 2011-06-21
   Revised : 2011-06-21
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("Q") ;
  new Value.Object("Change") ;

  new Value.Object("K") ;
  new Value.Object("Dose") ;
  new Value.Object("Times") ;

  new Value.Object("Interval") ;

  new Value.Object("Last") ;
  new Value.Object("Peak") ;

  var Obj ;

  Obj = new LineGraph.Object("XY") ;

  Obj.Size(250, 200) ;
  Obj.XAxis(0, "Time", 2) ;
  Obj.YAxis(0, "Q", 15) ;
  Obj.PlotLine("X", "Q", "red") ;

  top.IPC.NewPanel() ;
}

/* End */

