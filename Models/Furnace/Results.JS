/* Results.JS

   Model : Furnace
   Panel : Results
   Created : 2011-06-24
   Revised : 2011-06-24
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("T-F") ;
  new Value.Object("T-Off") ;
  new Value.Object("T-On") ;
  new Value.Object("Switch") ;
  new Value.Object("Burner") ;
  new Value.Object("F-Used") ;
  new Value.Object("Switch") ;
  new Value.Object("T-Out") ;
  new Value.Object("Leak") ;
  new Value.Object("T-Min") ;
  new Value.Object("T-Max") ;

  var Obj ;

  Obj = new LineGraph.Object("Canvas-Temp") ;

  Obj.Size(250, 200) ;
  Obj.XAxis(0, "Time", 120) ;
  Obj.YAxis(70, "Temp", 85) ;
  Obj.PlotLine("X", "T-F", "red") ;

  Obj = new LineGraph.Object("Canvas-Switch") ;

  Obj.Size(250, 120) ;
  Obj.XAxis(0, "Time", 120) ;
  Obj.YAxis(0, "Switch", 1) ;
  Obj.PlotLine("X", "Switch", "red") ;

  Obj = new Info.Object("Leak") ;

  Obj.Add("Insulation Values") ;
  Obj.Add("") ;
  Obj.Add("0.1 = Excellent") ;
  Obj.Add("0.2 = Typical") ;
  Obj.Add("0.4 = Bad") ;

  top.IPC.NewPanel() ;
}

/* End */

