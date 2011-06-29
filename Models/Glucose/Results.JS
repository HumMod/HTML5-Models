/* Results.JS

   Model : Glucose
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

  new Value.Object("G-Conc") ;
  new Value.Object("G-Liver") ;
  new Value.Object("G-Rate") ;
  new Value.Object("G-Cells") ;

  new Value.Object("I-Conc") ;
  new Value.Object("I-Secrete") ;
  new Value.Object("I-Rate") ;
  new Value.Object("I-Clear") ;

  new RadioButtons.Object("G-Switch") ;
  new Value.Object("G-Setting") ;

  new RadioButtons.Object("I-Switch") ;
  new Value.Object("I-Setting") ;

  var Obj ;

  Obj = new LineGraph.Object("Canvas-G") ;

  Obj.Size(250, 160) ;
  Obj.XAxis(0, "Time", 30) ;
  Obj.YAxis(0, "[ G ]", 200) ;
  Obj.PlotLine("X", "G-Conc", "red") ;

  Obj = new LineGraph.Object("Canvas-I") ;

  Obj.Size(250, 160) ;
  Obj.XAxis(0, "Time", 30) ;
  Obj.YAxis(0, "[ I ]", 20) ;
  Obj.PlotLine("X", "I-Conc", "red") ;

  top.IPC.NewPanel() ;
}

/* End */

