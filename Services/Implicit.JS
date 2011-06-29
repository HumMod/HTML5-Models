/* Implicit.JS

   Created : 2011-06-23
   Revised : 2011-06-23
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Implicit = new Object ;

Implicit.Calc = function(Func, Start, End, ErrorLimit, Seed)
{ var Count = 0 ;

  var YStart = Storage.GetVar(Start) ;
  var YEnd = Storage.GetVar(End) ;

  var Ys = new Array() ;
  var Errors = new Array() ;

  do
  { Count++ ;

    if (Count >= 1000)
    { var Msg = "Implicit equation didn't converge : " + Func ;
      Basics.MessageBox(Msg) ;
      return ;
    }

    if (Count == 1)
    { FirstStart(YStart, Seed) ;
    }
    else if (Count == 2)
    { SecondStart(YStart, Seed, YEnd) ;
    }
    else
    { OtherStarts(YStart, Ys) ;
    }

    eval(Func + "()") ;

    if (Count == 1)
    { FirstEnd(Ys, Errors, YStart, YEnd) ;
    }
    else if (Count == 2)
    { SecondEnd(Ys, Errors, YStart, YEnd) ;
    }
    else
    { OtherEnds(Ys, Errors, YStart, YEnd) ;
    }
  }
  while (! Converged(YStart, YEnd, ErrorLimit)) ;

  function Converged(YStart, YEnd, ErrorLimit)
  { if (Math.abs (YStart.Val - YEnd.Val) <= ErrorLimit)
    { return (true) ;
    }
    else
    { return (false) ;
    }
  }

  function FirstStart(YStart, Seed)
  { if (Seed != null)
    { YStart.Val += Seed ;
    }
  }

  function SecondStart(YStart, Seed, YEnd)
  { if (Seed != null)
    { YStart.Val -= Seed ;
    }
    else
    { YStart.Val = YEnd.Val ;
    }
  }

  function OtherStarts(YStart, Ys)
  { YStart.Val = (Ys[0] + Ys[1]) / 2.0 ;
  }

  function FirstEnd(Ys, Errors, YStart, YEnd)
  { Ys[0] = YStart.Val ;
    Errors[0] = YStart.Val - YEnd.Val ;
  }

  function SecondEnd(Ys, Errors, YStart, YEnd)
  { Ys[1] = YStart.Val ;
    Errors[1] = YStart.Val - YEnd.Val ;
  }

  function OtherEnds(Ys, Errors, YStart, YEnd)
  { var Y = YStart.Val
    var Error = YStart.Val - YEnd.Val ;

    if (Error * Errors[0] >= 0)
    { Ys[0] = Y ;
      Errors[0] = Error ;
    }
    else
    { Ys[1] = Y ;
      Errors[1] = Error ;
    }
  }
}
 
/* End */
