/* BarGraph.JS

   Created : 2010-06-28
   Revised : 2010-07-13
   Author : Tom Coleman
   Copyright : 2010-2010
   By : University of Mississippi Medical Center
*/

var BarGraph = new Object ;

BarGraph.Object = function(Canvas)
{ this.Canvas = Canvas ;
  
  this.MinIC ;
  this.Min ;
  this.Label ;
  this.MaxIC ;
  this.Max ;
  this.Inc ;
  
  this.BarIndex = -1 ;  
  this.NameList = new Array() ;
  this.LabelList = new Array() ;
  this.ColorList = new Array() ;

  this.Top ;
  this.Bottom ;
  this.Left ;
  this.Right ;

  this.Height ;
  this.Width ;

  Painter.Add (this)
}

BarGraph.Object.prototype.Size = function(Width, Height)
{ this.Width = Width ;
  this.Height = Height ;
}

BarGraph.Object.prototype.Axes = function(Min, Label, Max, Inc)
{ this.MinIC = Min ;
  this.Min = Min ;
  this.Label = Label ;
  this.MaxIC = Max ;
  this.Max = Max ;

  if (Inc == null)
  { this.Inc = Max - Min ;
  }
  else
  { this.Inc = Inc ;
  }
}

BarGraph.Object.prototype.Bar = function(Name, Label, Color)
{ this.BarIndex++ ;
  this.NameList[this.BarIndex] = Name ;

  if (Label == null)
  { this.LabelList[this.BarIndex] = Name ;
  }
  else
  { this.LabelList[this.BarIndex] = Label ;
  }

  this.ColorList[this.BarIndex] = Color ;
}

BarGraph.Object.prototype.Paint = function()
{ BarTools.Paint(this) ;
}

/* End */
