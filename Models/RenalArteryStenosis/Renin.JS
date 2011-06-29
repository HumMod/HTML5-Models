/* Renin.JS

   Model : RenalArteryStenosis
   Panel : Renin
   Created : 2011-06-26
   Revised : 2011-06-26
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("PRA") ;
  new Value.Object("Renin") ;
  new Value.Object("Renin-Change") ;
  new Value.Object("R-Sec") ;
  new Value.Object("R-Block") ;
  new Value.Object("R-Degrade") ;
  new Value.Object("R-ClearK") ;

  new Symbol.Object("RedBox", "BOX", 4, "red", 2) ;

  var Obj ;

  Obj = new LineGraph.Object("Canvas-PRA-X") ;

  Obj.Size(250, 130) ;
  Obj.XAxis(0, "Time", 30) ;
  Obj.YAxis(1, "PRA", 3) ;
  Obj.PlotLine("X", "PRA", "red") ;

  Obj = new FunkyGraph.Object("Canvas-RAP-RSec") ;

  Obj.Size(250, 160) ;
  Obj.XAxis(0, "RAP", 200) ;
  Obj.YAxis(0, "Sec", 10000) ;
  Obj.Curve("RAP-RSec", "blue") ;
  Obj.Symbol("RAP", "RedBox") ;

  Obj = new FunkyGraph.Object("Canvas-PRA-AP") ;

  Obj.Size(250, 160) ;
  Obj.XAxis(0, "PRA", 10) ;
  Obj.YAxis(0, "AP", 2) ;
  Obj.Curve("PRA-AP", "blue") ;
  Obj.Symbol("PRA", "RedBox") ;

  top.IPC.NewPanel() ;
}

/* End */

