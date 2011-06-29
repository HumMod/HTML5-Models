/* BarTools.JS

   Created : 2010-06-28
   Revised : 2010-07-13
   Author : Tom Coleman
   Copyright : 2010-2010
   By : University of Mississippi Medical Center
*/

var BarTools = new Object ;

BarTools.TopMargin = 10 ;
BarTools.BottomMargin = 40 ;
BarTools.LeftMargin = 60 ;
BarTools.RightMargin = 10 ;

BarTools.BarHeight = 14 ;
BarTools.BarMargin = 4 ;

BarTools.Paint = function(X)
{ BarTools.Restart(X) ;
  BarTools.Scale(X) ;
  BarTools.Axes(X) ;
  BarTools.Draw(X) ;
}

BarTools.Restart = function(X)
{ X.Min = X.MinIC ;
  X.Max = X.MaxIC ;
}

BarTools.Scale = function(X)
{ var Now ;
  
  Now = MinMax.GetMin(X.NameList, X.BarIndex, Storage.StoresIndex) ;

  while (Now < X.Min)
  { X.Min = X.Min - X.Inc ;
  }

  Now = MinMax.GetMax(X.NameList, X.BarIndex, Storage.StoresIndex) ;

  while (Now > X.Max)
  { X.Max = X.Max + X.Inc ;
  }
}

BarTools.Axes = function(X)
{ var Ref = Reference.Get(X.Canvas) ;

  Ref.width = X.Width ;
  Ref.height = X.Height ;

  var C = Ref.getContext('2d') ;

  var T = BarTools.TopMargin ;
  var B = Ref.height - BarTools.BottomMargin ;
  var L = BarTools.LeftMargin ;
  var R = Ref.width - BarTools.RightMargin ;

  X.Top = T ;
  X.Bottom = B ;
  X.Left = L ;
  X.Right = R ;

  C.strokeStyle = "black" ;
  C.clearRect(0, 0, Ref.width, Ref.height) ;
  C.beginPath() ;
  
  C.moveTo(L, T) ;
  C.lineTo(L, B) ;

  C.moveTo(L, B+8) ;
  C.lineTo(L, B) ;
  C.lineTo(R, B) ;
  C.lineTo(R, B+8) ;

  C.stroke() ;

  C.font = "13px Arial" ;

  var V = T-2 ;
  var H ;

  for (var i = 0 ; i <= X.BarIndex ; i++)
  { V = V + BarTools.BarHeight ;
    H = L - 5 - TextSize(X.LabelList[i]) ;
    C.fillStyle = X.ColorList[i] ;
    C.fillText (X.LabelList[i], H, V) ;
    V = V + BarTools.BarMargin ;
  }

  var Label = 0.5 *(R+L) - 0.5 * TextSize(X.Label) ;

  C.fillStyle = "black" ;
  
  C.fillText (X.Min, L - 4, B+25) ;
  C.fillText (X.Label, Label, B+25) ;
  C.fillText (X.Max, R - NumberSize(X.Max), B+25) ;

  function NumberSize(Number)
  { var Text = Number.toString(10) ;
    return (TextSize(Text)) ;
  }

  function TextSize(Text)
  { var Obj = C.measureText(Text) ;
    return (Obj.width) ;
  }
}

BarTools.Draw = function(X)
{ var Ref = Reference.Get(X.Canvas) ;
  var C = Ref.getContext('2d') ;

  var T = X.Top ;
  var B = X.Bottom ;
  var L = X.Left ;
  var R = X.Right ;

  C.clearRect((L+1), T, R-(L+1), (B-1)-T) ;

  var V = T ;
  var H ;

  var A = new GraphTools.Carrier() ;

  for (var i = 0 ; i <= X.BarIndex ; i++)
  { A.MinVal = X.Min ;
    A.Val = top.IPC.GetVal(X.NameList[i])
    A.MaxVal = X.Max ; 

    A.MinPix = X.Left ;
    A.MaxPix = X.Right ;

    GraphTools.Scaler(A) ;

    C.fillStyle = X.ColorList[i] ;
    C.fillRect (L, V, A.Pix-L, BarTools.BarHeight) ;

    V = V + BarTools.BarHeight + BarTools.BarMargin ;
  }
}

/* End */
