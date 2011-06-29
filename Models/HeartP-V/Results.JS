/* Results.JS

   Model : HeartP-V
   Panel : Results
   Created : 2011-06-26
   Revised : 2011-06-26
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("R") ;
  new Value.Object("L") ;
  new Value.Object("RT") ;
  new Value.Object("AT") ;
  new Value.Object("TT") ;
  new Value.Object("PDynes") ;
  new Value.Object("P") ;

  var Obj ;

  Obj = new LineGraph.Object("Canvas-T") ;

  Obj.Size(250, 250) ;
  Obj.XAxis(0, "Volume", 270) ;
  Obj.YAxis(0, "Tension", 3E06) ;
  Obj.PlotLine("X", "AT", "red") ;
  Obj.PlotLine("X", "RT", "blue") ;
  Obj.PlotLine("X", "TT", "black") ;

  top.IPC.NewPanel() ;
}

/* End */

