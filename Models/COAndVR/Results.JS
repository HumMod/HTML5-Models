/* Results.JS

   Model : CO And VR
   Created : 2011-06-22
   Revised : 2011-06-23
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("HS") ;
  new Value.Object("MCFP") ;
  new Value.Object("RVR") ;

  new Value.Object("VR") ;
  new Value.Object("DelP") ;
  new Value.Object("RAP") ;
  new Value.Object("CO") ;

  var Obj ;

  new Symbol.Object("RedDot", "Circle", 3, "red", 1) ;

  Obj = new CurveGraph.Object("XY") ;

  Obj.Size(250, 200) ;
  Obj.XAxis(-5, "RAP", 15) ;
  Obj.YAxis(0, "CO", 15000) ;
  Obj.Plot("Starling", "RedDot") ;

  top.IPC.NewPanel() ;
}

/* End */

