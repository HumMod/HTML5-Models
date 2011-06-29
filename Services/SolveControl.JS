/* SolveControl.JS

   Created : 2011-06-04
   Revised : 2011-06-19
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var SolveControl = new Object ;

SolveControl.Go = function ()
{ var Ref = Menu.GetElement("GoPicks") ;
  var Index = Ref.selectedIndex ;

  var Solution = SolveControl.SI[Index] ;
  var Display = SolveControl.DI[Index] ;

  System.Solve(Solution, Display) ;
}

SolveControl.Stop = function ()
{ window.alert("Stop") ;
}

SolveControl.Restart = function ()
{ System.RestartClick() ;
}

SolveControl.Overlay = function ()
{ System.OverlayClick() ;
}

SolveControl.Labels = new Array () ;
SolveControl.SI = new Array () ;
SolveControl.DI = new Array () ;

SolveControl.AddOption = function (Label, Solution, Display)
{ SolveControl.Labels[SolveControl.Labels.length] = Label ;
  SolveControl.SI[SolveControl.SI.length] = Solution ;
  SolveControl.DI[SolveControl.DI.length] = Display ;
}

SolveControl.RefreshOptions = function ()
{ var Ref = Menu.GetElement("GoPicks") ;

  for (var i = 0 ; i <= SolveControl.Labels.length - 1 ; i++)
  { var Option = document.createElement('option') ;
    Option.text = SolveControl.Labels[i] ;
    Ref.options[Ref.options.length] = Option ;
  }
}



/* End */
