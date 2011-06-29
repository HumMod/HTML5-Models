/* LineGraph.JS

   Created : 2011-06-18
   Revised : 2011-06-18
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var LineGraph = new Object () ;

LineGraph.Object = function(Canvas)
{ this.Canvas = Canvas ;
  
  this.XMinIC ;
  this.XMin ;
  this.XLabel ;
  this.XMaxIC ;
  this.XMax ;
  this.XInc ;
  
  this.YMinIC ;
  this.YMin ;
  this.YLabel ;
  this.YMaxIC ;
  this.YMax ;
  this.YInc ;

  this.PlotIndex = -1 ;  
  this.XList = new Array() ;
  this.YList = new Array() ;
  this.ColorList = new Array() ;
  this.SymbolList = new Array() ;

  this.Top ;
  this.Bottom ;
  this.Left ;
  this.Right ;

  this.Width ;
  this.Height ;

  Painter.Add(this) ;
}

LineGraph.Object.prototype.Size = function(Width, Height)
{ this.Width = Width ;
  this.Height = Height ;
}

LineGraph.Object.prototype.XAxis = function(XMin, XLab, XMax, XInc)
{ this.XMinIC = XMin ;
  this.XMin = XMin ;
  this.XLabel = XLab ;
  this.XMaxIC = XMax ;
  this.XMax = XMax ;

  if (XInc == undefined)
  { this.XInc = XMax - XMin ;
  }
  else
  { this.XInc = XInc ;
  }
}

LineGraph.Object.prototype.YAxis = function(YMin, YLab, YMax, YInc)
{ this.YMinIC = YMin ;
  this.YMin = YMin ;
  this.YLabel = YLab ;
  this.YMaxIC = YMax ;
  this.YMax = YMax ;

  if (YInc == undefined)
  { this.YInc = YMax - YMin ;
  }
  else
  { this.YInc = YInc ;
  }
}

LineGraph.Object.prototype.PlotLine = function(XName, YName, Color)
{ this.PlotIndex++ ;
  this.XList[this.PlotIndex] = XName ;
  this.YList[this.PlotIndex] = YName ;
  this.ColorList[this.PlotIndex] = Color ;
  this.SymbolList[this.PlotIndex] = null ;
}

LineGraph.Object.prototype.PlotSymbol = function(XName, YName, Symbol)
{ this.PlotIndex++ ;
  this.XList[this.PlotIndex] = XName ;
  this.YList[this.PlotIndex] = YName ;
  this.ColorList[this.PlotIndex] = null ;
  this.SymbolList[this.PlotIndex] = Symbol ;
}

LineGraph.Object.prototype.Paint = function()
{ LineTools.Paint(this) ;
}

/* End */
