/* Integrals.JS

   Created : 2010-06-28
   Revised : 2010-07-13
   Author : Tom Coleman
   Copyright : 2010-2010
   By : University of Mississippi Medical Center
*/

var Integrals = new Object () ;

Integrals.Int = function(IntName, DervName, ErrorLimit)
{ this.Integral = Storage.GetVar(IntName) ;
  this.Derivative = Storage.GetVar(DervName) ;
  this.ErrorLimit = ErrorLimit ;

  this.LastIntVal ;
  this.LastDervVal ;

  Integrals.Add(this) ;
}

Integrals.List = new Array() ;
Integrals.Index = -1 ;

Integrals.Reset = function()
{ Integrals.List = new Array() ;
  Integrals.Index = -1 ;
}

Integrals.Add = function(Obj)
{ Integrals.Index++ ;
  Integrals.List [Integrals.Index] = Obj ;
}

Integrals.Setup = function()
{ for (var i = 0 ; i <= Integrals.Index ; i++)
  { var X = Integrals.List[i] ;

    X.LastIntVal = X.Integral.Val ;
    X.LastDervVal = X.Derivative.Val ;
  }
}

Integrals.Update = function()
{ for (var i = 0 ; i <= Integrals.Index ; i++)
  { var X = Integrals.List[i] ;

    X.Integral.Val = X.LastIntVal + (X.LastDervVal * System.Dx) ;
  }
}

Integrals.GetError = function()
{ var Error = undefined ;

  for (var i = 0 ; i <= Integrals.Index ; i++)
  { var X = Integrals.List[i] ;

    if (X.ErrorLimit != null)
    { var Del = X.Derivative.Val - X.LastDervVal ;
      var TotalError = 0.5 * Del * System.Dx ;
      var RelativeError = Math.abs(TotalError / X.ErrorLimit) ;

      if (Error == undefined)
      { Error = RelativeError ;
      }
      else
      { if (RelativeError > Error)
        { Error = RelativeError ;
        }
      }
    }
  }

  return (Error) ;
}

/* End */
