/* Results.JS

   Model : Windkessel
   Created : 2011-05-31
   Revised : 2011-06-19
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("Vol") ;
  new Value.Object("Change") ;
  new Value.Object("In") ;
  new Value.Object("Out") ;
  new Value.Object("VP") ;
  new Value.Object("AP") ;

  new Value.Object("C") ;
  new Value.Object("VPMax") ;
  new Value.Object("VCond") ;
  new Value.Object("PCond") ;


  var Obj ;

  Obj = new LineGraph.Object("Pressures") ;

  Obj.Size(250, 200) ;
  Obj.XAxis(0, "Time", 4, 2) ;
  Obj.YAxis(0, "VP & AP", 150, 10) ;
  Obj.PlotLine("X", "VP", "red") ;
  Obj.PlotLine("X", "AP", "blue") ;

  Obj = new LineGraph.Object("Flows") ;

  Obj.Size(250, 150) ;
  Obj.XAxis(0, "Time", 4, 2) ;
  Obj.YAxis(0, "Flows", 600, 100) ;
  Obj.PlotLine("X", "In", "red") ;
  Obj.PlotLine("X", "Out", "blue") ;

  top.IPC.NewPanel() ;
}

/* End */

