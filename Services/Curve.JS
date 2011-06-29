/* Curve.JS

   Created : 2011-06-22
   Revised : 2011-06-22
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Curve = new Object ;

Curve.Object = function(Name)
{ this.Name = Name ;
  
  this.DataIndex = -1 ;

  this.X = new Array() ;
  this.Y = new Array() ;
  this.Slope = new Array() ;

  this.CoefIndex = -1 ;

  this.C0 = new Array() ;
  this.C1 = new Array() ;
  this.C2 = new Array() ;
  this.C3 = new Array() ;

  Curve.Add(this) ;
}

Curve.List = new Array() ;
Curve.Index = -1 ;

Curve.Add = function(Object)
{ Curve.Index++ ;
  Curve.List[Curve.Index] = Object ;
}

Curve.Get = function(Name)
{ for ( var i = 0 ; i <= Curve.Index ; i++)
  { var Obj = Curve.List[i] ;
  
    if (Obj.Name == Name)
    { return (Obj) ;
    }
  }
  
  Basics.CantFind("Curve", Name) ;
}

Curve.Object.prototype.Point = function(X, Y, Slope)
{ this.DataIndex++ ;

  this.X[this.DataIndex] = X ;
  this.Y[this.DataIndex] = Y ;
  this.Slope[this.DataIndex] = Slope ;
}

Curve.Object.prototype.Fit = function()
{ if (this.DataIndex < 1)
  { var Msg = "Not enough data points for this curve : " ; 
    Basics.MessageBox(Msg + Name) ;
    return ;
  }

  this.CoefIndex = this.DataIndex + 1 ;

  Curve.FitLeftTail(this) ;

  for (var i = 0 ; i <= this.DataIndex - 1 ; i++)
  { Curve.FitMiddleSegment(this, i, i+1) ;
  }

  Curve.FitRightTail(this) ;
}

Curve.Value = function(Name, X)
{ var Obj = Curve.Get(Name) ;
  return Obj.F(X) ;
}

Curve.Object.prototype.F = function(X)
{ var Y ;

  for (var i = 0 ; i <= this.CoefIndex - 1 ; i++)
  { if (X <= this.X[i])
    { Y = this.Calc(X, i) ;
      return (Y) ;
    }
  }

  Y = this.Calc(X, this.CoefIndex) ;
  return (Y) ;
}

Curve.Object.prototype.Calc = function(X, i)
{ var Y = this.C0[i] + this.C1[i]*X + this.C2[i]*X*X + this.C3[i]*X*X*X ;
  return (Y) ;
}

Curve.FitLeftTail = function(O)
{ var i = 0 ;
  var j = 0 ;

  O.C0[j] = O.Y[i] - O.Slope[i] * O.X[i] ;
  O.C1[j] = O.Slope[i] ;
  O.C2[j] = 0.0 ;
  O.C3[j] = 0.0 ;
}

Curve.FitMiddleSegment = function(O, i, j)
{ var X1 = O.X[i] ;
  var X2 = O.X[i+1] ;

  var Y1 = O.Y[i] ;
  var Y2 = O.Y[i+1] ;

  var S1 = O.Slope[i] ;
  var S2 = O.Slope[i+1] ;

  var T2 = X2 * X2 ;
  var T3 = X2 * T2 ;

  var Xp = X1 - X2 ;
  var Xp2 = Xp * Xp ;
  var Xp3 = Xp * Xp2 ;

  var K1 = Y1 - Y2 - S2 * Xp ;

  var A2 = 2.0 * Xp ;
  var B2 = 3.0 * Xp2 ;
  var K2 = S1 - S2 ;

  var D2 = (K1 / Xp3 - K2 / B2) / (Xp2 / Xp3 - A2 / B2) ;
  var D3 = (K1 - D2 * Xp2) / Xp3 ;
  
  O.C0[j] = Y2 - S2 * X2 + D2 * T2 - D3 * T3 ;
  O.C1[j] = S2 - 2.0 * D2 * X2 + 3.0 * D3 * T2 ;
  O.C2[j] = D2 - 3.0 * D3 * X2 ;
  O.C3[j] = D3 ;
}

Curve.FitRightTail = function(O)
{ var i = O.DataIndex ;
  var j = O.CoefIndex ;

  O.C0[j] = O.Y[i] - O.Slope[i] * O.X[i] ;
  O.C1[j] = O.Slope[i] ;
  O.C2[j] = 0.0;
  O.C3[j] = 0.0 ;
}

/* End */
