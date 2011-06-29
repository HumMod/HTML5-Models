/* FunkyGraph.JS

   Created : 2011-06-23
   Revised : 2011-06-23
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var FunkyGraph = new Object ;

FunkyGraph.Object = function(Canvas)
{ this.Canvas = Canvas ;
  
  this.XMin ;
  this.XLabel ;
  this.XMax ;
  
  this.YMin ;
  this.YLabel ;
  this.YMax ;
  
  this.CurveName ;
  this.CurveColor ;

  this.VarName ;
  this.SymbolName ;

  this.Top ;
  this.Bottom ;
  this.Right ;
  this.Left ;

  this.Width ;
  this.Height ;

  Painter.Add(this) ;
}

FunkyGraph.Object.prototype.Size = function(Width, Height)
{ this.Width = Width ;
  this.Height = Height ;
}

FunkyGraph.Object.prototype.XAxis = function(Min, Label, Max)
{ this.XMin = Min ;
  this.XLabel = Label ;
  this.XMax = Max ;
}

FunkyGraph.Object.prototype.YAxis = function(Min, Label, Max)
{ this.YMin = Min ;
  this.YLabel = Label ;
  this.YMax = Max ;
}

FunkyGraph.Object.prototype.Curve = function(CurveName, CurveColor)
{ this.CurveName = CurveName ;
  this.CurveColor = CurveColor ;
}

FunkyGraph.Object.prototype.Symbol = function(VarName, SymbolName)
{ this.VarName = VarName ;
  this.SymbolName = SymbolName ;
}

FunkyGraph.Object.prototype.Paint = function()
{ FunkyTools.Paint(this) ;
}

/* End */
