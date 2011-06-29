/* Hemodynamics.JS

   Model : Circulatory Model
   Panel : Hemodynamics
   Created : 2011-06-23
   Revised : 2011-06-24
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("CO") ;
  new Value.Object("HS") ;
  new Value.Object("BasicCO") ;
  new Value.Object("VR") ;
  new Value.Object("V0") ;
  new Value.Object("MCFP") ;
  new Value.Object("RAP") ;

  new Symbol.Object("RedBox", "BOX", 4, "red", 2) ;

  var Obj ;

  Obj = new LineGraph.Object("Canvas-CO") ;

  Obj.Size(250, 180) ;
  Obj.XAxis(0, "Time", 60) ;
  Obj.YAxis(5000, "CO", 6000) ;
  Obj.PlotLine("X", "CO", "red") ;

  Obj = new LineGraph.Object("Canvas-RAP") ;

  Obj.Size(250, 180) ;
  Obj.XAxis(0, "Time", 60) ;
  Obj.YAxis(-2, "RAP", +2) ;
  Obj.PlotLine("X", "RAP", "red") ;

  Obj = new FunkyGraph.Object("Canvas-Starling") ;

  Obj.Size(250, 130) ;
  Obj.XAxis(-5, "RAP", 15) ;
  Obj.YAxis(0, "CO", 15000) ;
  Obj.Curve("CO", "blue") ;
  Obj.Symbol("RAP", "RedBox") ;

  top.IPC.NewPanel() ;
}

/* End */

