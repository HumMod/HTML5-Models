/* Results.JS

   Model : Pendulum
   Panel : Results
   Created : 2011-06-25
   Revised : 2011-06-25
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("A-Init") ;
  new Value.Object("Length") ;

  new Value.Object("XPos") ;
  new Value.Object("YPos") ;

  new Value.Object("A-Deg") ;
  new Value.Object("V-Deg") ;

  new Value.Object("Angle") ;
  new Value.Object("Velocity") ;

  var Obj ;

  new Symbol.Object("RedDot", "Circle", 3, "red", 1) ;

  Obj = new LineGraph.Object("Canvas-XY") ;

  Obj.Size(250, 250) ;
  Obj.XAxis(-1.3, "X", 1.3) ;
  Obj.YAxis(-1.3, "Y", 1.3) ;
  Obj.PlotSymbol("XPos", "YPos", "RedDot") ;

  top.IPC.NewPanel() ;
}

/* End */

