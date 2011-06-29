/* Summary.JS

   Model : RenalArteryStenosis
   Panel : Summary
   Created : 2011-06-26
   Revised : 2011-06-26
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("AP") ;
  new Value.Object("RAP") ;
  new Value.Object("P-Drop") ;
  new Value.Object("ECFV-AP") ;
  new Value.Object("PRA-AP") ;

  var Obj ;

  Obj = new LineGraph.Object("Canvas-AP") ;

  Obj.Size(250, 160) ;
  Obj.XAxis(0, "Time", 30) ;
  Obj.YAxis(80, "Pressure", 120) ;
  Obj.PlotLine("X", "AP", "red") ;
  Obj.PlotLine("X", "RAP", "blue") ;

  top.IPC.NewPanel() ;
}

/* End */

