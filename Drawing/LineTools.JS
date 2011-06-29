/* LineTools.JS

   Created : 2010-06-29
   Revised : 2010-07-14
   Author : Tom Coleman
   Copyright : 2010-2010
   By : University of Mississippi Medical Center
*/

var LineTools = new Object ;

LineTools.TopMargin = 10 ;
LineTools.BottomMargin = 40 ;
LineTools.LeftMargin = 60 ;
LineTools.RightMargin = 10 ;

LineTools.Paint = function(X)
{ if (! Drawing.IsOverlay)
  { LineTools.Restart(X) ;
    LineTools.Scale(X) ;
    LineTools.Axes(X) ;
  }

  LineTools.Draw(X) ;
}

LineTools.Restart = function(X)
{ X.XMin = X.XMinIC ;
  X.XMax = X.XMaxIC ;

  X.YMin = X.YMinIC ;
  X.YMax = X.YMaxIC ;
}

LineTools.Scale = function(X)
{ var Now ;
  
  Now = MinMax.GetMin(X.XList, X.PlotIndex, top.IPC.GetStoresIndex()) ;

  while (Now < X.XMin)
  { X.XMin = X.XMin - X.XInc ;
  }

  Now = MinMax.GetMax(X.XList, X.PlotIndex, top.IPC.GetStoresIndex()) ;

  while (Now > X.XMax)
  { X.XMax = X.XMax + X.XInc ;
  }

  Now = MinMax.GetMin(X.YList, X.PlotIndex, top.IPC.GetStoresIndex()) ;

  while (Now < X.YMin)
  { X.YMin = X.YMin - X.YInc ;
  }

  Now = MinMax.GetMax(X.YList, X.PlotIndex, top.IPC.GetStoresIndex()) ;

  while (Now > X.YMax)
  { X.YMax = X.YMax + X.YInc ;
  }
}

LineTools.Axes = function(X)
{ var Ref = Reference.Get(X.Canvas) ;

  Ref.width = X.Width ;
  Ref.height = X.Height ;

  var C = Ref.getContext('2d') ;

  var T = LineTools.TopMargin ;
  var B = Ref.height - LineTools.BottomMargin ;
  var L = LineTools.LeftMargin ;
  var R = Ref.width - LineTools.RightMargin ;

  X.Top = T ;
  X.Bottom = B ;
  X.Left = L ;
  X.Right = R ;

  C.strokeStyle = "black" ;
  C.clearRect(0, 0, Ref.width, Ref.height) ;
  C.beginPath() ;
  
  C.moveTo(L-8, T) ;
  C.lineTo(L, T) ;
  C.lineTo(L, B) ;
  C.lineTo(L-8, B) ;

  C.moveTo(L, B+8) ;
  C.lineTo(L, B) ;
  C.lineTo(R, B) ;
  C.lineTo(R, B+8) ;

  C.stroke() ;

  C.font = "13px Arial" ;

  var YLabelVert = 0.5 *(T+B) + 5 ;
  var YLabelOrg = L - 5 - TextSize(X.YLabel) ;

  if (YLabelOrg < 0)
  { YLabelOrg = 0 ;
  }
 
  C.fillText (X.YMax, L - 12 - NumberSize(X.YMax), T+5) ;
  C.fillText (X.YLabel, YLabelOrg, YLabelVert) ;
  C.fillText (X.YMin, L - 12 - NumberSize(X.YMin), B+5) ;

  var XLabel = 0.5 *(R+L) - 0.5 * TextSize(X.XLabel) ;
  
  C.fillText (X.XMin, L - 4, B+25) ;
  C.fillText (X.XLabel, XLabel, B+25) ;
  C.fillText (X.XMax, R - NumberSize(X.XMax), B+25) ;

  function NumberSize(Number)
  { var Text = Number.toString(10) ;
    return (TextSize(Text)) ;
  }

  function TextSize(Text)
  { var Obj = C.measureText(Text) ;
    return (Obj.width) ;
  }
}

LineTools.Draw = function(X)
{ for (var i = 0 ; i <= X.PlotIndex ; i++)
  { if (X.SymbolList[i] == null)
    { PlotLine.Draw(X, i) ;
    }
    else
    { PlotSymbol.Draw(X, i) ;
    }
  }
}

/* End */
