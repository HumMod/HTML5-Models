/* Summary.JS

   Model : Nerve
   Panel : Summary
   Created : 2011-06-25
   Revised : 2011-06-25
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("V") ;

  new Value.Object("I-Na") ;
  new Value.Object("I-K") ;
  new Value.Object("I-Leak") ;

  new Value.Object("G-Na") ;
  new Value.Object("G-K") ;
  new Value.Object("G-Leak") ;

  new Value.Object("V-Na") ;
  new Value.Object("V-K") ;
  new Value.Object("V-Leak") ;

  var Obj ;

  Obj = new LineGraph.Object("Canvas-V") ;

  Obj.Size(250, 160) ;
  Obj.XAxis(0, "Time", 20) ;
  Obj.YAxis(-100, "V", 40) ;
  Obj.PlotLine("X", "V", "red") ;

  Obj = new LineGraph.Object("Canvas-I") ;

  Obj.Size(250, 160) ;
  Obj.XAxis(0, "Time", 20) ;
  Obj.YAxis(-2500, "I", 2500) ;
  Obj.PlotLine("X", "I-Na", "red") ;
  Obj.PlotLine("X", "I-K", "blue") ;

  Obj = new Info.Object("HandH") ;

  Obj.Add("Hodgkin, A.L. and A.F. Huxley") ;
  Obj.Add("A quantitative description of") ;
  Obj.Add("membrane current and its") ;
  Obj.Add("application to conduction.") ;
  Obj.Add("J. Physiol. 117:500-544, 1952.") ;

  top.IPC.NewPanel() ;
}

/* End */

