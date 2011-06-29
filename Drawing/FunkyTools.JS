/* FunkyTools.JS

   Created : 2011-06-22
   Revised : 2011-06-22
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var FunkyTools = new Object ;

FunkyTools.TopMargin = 10 ;
FunkyTools.BottomMargin = 40 ;
FunkyTools.LeftMargin = 60 ;
FunkyTools.RightMargin = 10 ;

FunkyTools.Paint = function(Obj)
{ FunkyTools.Axes(Obj) ;
  FunkyTools.DrawCurve(Obj) ;
  FunkyTools.DrawSymbol(Obj) ;
}

FunkyTools.Axes = function(O)
{ var Ref = Reference.Get(O.Canvas) ;

  Ref.width = O.Width ;
  Ref.height = O.Height ;

  var C = Ref.getContext('2d') ;

  var T = LineTools.TopMargin ;
  var B = Ref.height - LineTools.BottomMargin ;
  var L = LineTools.LeftMargin ;
  var R = Ref.width - LineTools.RightMargin ;

  O.Top = T ;
  O.Bottom = B ;
  O.Left = L ;
  O.Right = R ;

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
  var YLabelOrg = L - 5 - TextSize(O.YLabel) ;

  if (YLabelOrg < 0)
  { YLabelOrg = 0 ;
  }
 
  C.fillText (O.YMax, L - 12 - NumberSize(O.YMax), T+5) ;
  C.fillText (O.YLabel, YLabelOrg, YLabelVert) ;
  C.fillText (O.YMin, L - 12 - NumberSize(O.YMin), B+5) ;

  var XLabel = 0.5 *(R+L) - 0.5 * TextSize(O.XLabel) ;
  
  C.fillText (O.XMin, L - 4, B+25) ;
  C.fillText (O.XLabel, XLabel, B+25) ;
  C.fillText (O.XMax, R - NumberSize(O.XMax), B+25) ;

  function NumberSize(Number)
  { var Text = Number.toString(10) ;
    return (TextSize(Text)) ;
  }

  function TextSize(Text)
  { var Obj = C.measureText(Text) ;
    return (Obj.width) ;
  }
}

FunkyTools.DrawCurve = function(Obj)
{ var Curve = top.IPC.GetCurve(Obj.CurveName) ;

  var X0 = Obj.XMin ;
  var Y0 = Curve.F(X0) ;

  var X1 ;
  var Y1 ;

  var Grain = 100 ;
  var Step = (Obj.XMax - Obj.XMin) / Grain

  for (var i = 0 ; i <= Grain ; i++)
  { X1 = X0 + Step ;
    Y1 = Curve.F(X1) ;

    var H0 ;
    var H1 ;

    var V0 ;
    var V1 ;

    var A = new GraphTools.Carrier() ;

    A.MinVal = Obj.XMin ;
    A.MaxVal = Obj.XMax ;
    A.Val = X1 ;
    A.MinPix = Obj.Left ;
    A.MaxPix = Obj.Right ;

    GraphTools.Scaler(A) ;
    H1 = A.Pix

    A.Val = X0 ;

    GraphTools.Scaler(A) ;
    H0 = A.Pix ;

    A.MinVal = Obj.YMin ;
    A.MaxVal = Obj.YMax ;
    A.Val = Y1 ;
    A.MinPix = Obj.Bottom ;
    A.MaxPix = Obj.Top ;

    GraphTools.Scaler(A) ;
    V1 = A.Pix

    A.Val = Y0 ;

    GraphTools.Scaler(A) ;
    V0 = A.Pix ;

    var CS = new GraphTools.CarrySegment() ;

    CS.Canvas = Obj.Canvas ;
    CS.Color = Obj.CurveColor ;

    CS.H0 = H0 ;
    CS.H1 = H1 ;
    CS.V0 = V0 ;
    CS.V1 = V1 ;

    GraphTools.DrawSegment(CS) ;

    X0 = X1 ;
    Y0 = Y1 ;
  }
}

FunkyTools.DrawSymbol = function(Obj)
{ if (Obj.SymbolName == undefined)
  { return ;
  }

  var Curve = top.IPC.GetCurve(Obj.CurveName) ;
  var Var = top.IPC.GetVar(Obj.VarName) ;

  var A = new GraphTools.Carrier() ;

  var H ;
  var V ;

  A.MinVal = Obj.XMin ;
  A.Val = Var.Val ;
  A.MaxVal = Obj.XMax ;

  A.MinPix = Obj.Left ;
  A.MaxPix = Obj.Right ;

  GraphTools.Scaler(A) ;

  H = A.Pix ;

  A.MinVal = Obj.YMin ;
  A.Val = Curve.F(Var.Val) ;
  A.MaxVal = Obj.YMax ;

  A.MinPix = Obj.Bottom ;
  A.MaxPix = Obj.Top ;

  GraphTools.Scaler(A) ;

  V = A.Pix ;

  SymbolDraw.Symbol(Obj.Canvas, Obj.SymbolName, H, V) ;
}

/* End */
