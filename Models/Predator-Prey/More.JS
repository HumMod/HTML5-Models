/* More.JS

   Model : Predator-Prey
   Created : 2011-06-21
   Revised : 2011-06-22
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var More = new Object ;

More.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("M-BirthRate") ;
  new Value.Object("M-Food") ;

  new Value.Object("W-DeathRate") ;
  new Value.Object("W-Skills") ;

  new Value.Object("M-DeathRate", "1") ;
  new Value.Object("W-Skills", "2") ;
  new Value.Object("W-Count", "3") ;

  new Value.Object("W-BirthRate", "4") ;
  new Value.Object("M-Food", "5") ;
  new Value.Object("W-Skills", "6") ;
  new Value.Object("M-Count", "7") ;

  var Obj ;

  Obj = new LineGraph.Object("Moose") ;

  Obj.Size(250, 150) ;
  Obj.XAxis(0, "Years", 100) ;
  Obj.YAxis(-100, "Moose", 100, 100) ;
  Obj.PlotLine("X", "M-Change", "black") ;
  Obj.PlotLine("X", "M-Births", "blue") ;
  Obj.PlotLine("X", "M-Deaths", "red") ;

  Obj = new LineGraph.Object("Wolves") ;

  Obj.Size(250, 150) ;
  Obj.XAxis(0, "Years", 100) ;
  Obj.YAxis(-10, "Wolves", 20, 10) ;
  Obj.PlotLine("X", "W-Change", "black") ;
  Obj.PlotLine("X", "W-Births", "blue") ;
  Obj.PlotLine("X", "W-Deaths", "red") ;

  top.IPC.NewPanel() ;
}

/* End */

