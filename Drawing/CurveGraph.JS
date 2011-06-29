/* CurveGraph.JS

   Created : 2011-06-22
   Revised : 2011-06-22
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var CurveGraph = new Object ;

CurveGraph.Object = function(Canvas)
{ this.Canvas = Canvas ;
  
  this.XMin ;
  this.XLabel ;
  this.XMax ;
  
  this.YMin ;
  this.YLabel ;
  this.YMax ;
  
  this.CurveName ;
  this.SymbolName ;

  this.Top ;
  this.Bottom ;
  this.Right ;
  this.Left ;

  this.Width ;
  this.Height ;

  Painter.Add(this) ;
}

CurveGraph.Object.prototype.Size = function(Width, Height)
{ this.Width = Width ;
  this.Height = Height ;
}

CurveGraph.Object.prototype.XAxis = function(Min, Label, Max)
{ this.XMin = Min ;
  this.XLabel = Label ;
  this.XMax = Max ;
}

CurveGraph.Object.prototype.YAxis = function(Min, Label, Max)
{ this.YMin = Min ;
  this.YLabel = Label ;
  this.YMax = Max ;
}

CurveGraph.Object.prototype.Plot = function(Curve, Symbol)
{ this.CurveName = Curve ;
  this.SymbolName = Symbol ;
}

CurveGraph.Object.prototype.Paint = function()
{ CurveTools.Paint(this) ;
}

/* End */
