/* SolveButtons.JS

   Created : 2011-06-04
   Revised : 2011-06-04
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var SolveButtons = new Object ;

SolveButtons.Enable = function ()
{ if (Menu.HasSolveButtons())
  { var Ref ;

    Ref = Menu.GetElement("GoButton") ;
    Ref.disabled = false ;

    Ref = Menu.GetElement("GoPicks") ;
    Ref.disabled = false ;

    Ref = Menu.GetElement("RestartButton") ;
    Ref.disabled = false ;

    Ref = Menu.GetElement("OverlayButton") ;
    Ref.disabled = false ;
  }
}

SolveButtons.Disable = function ()
{ if (Menu.HasSolveButtons())
  { var Ref ;

    Ref = Menu.GetElement("GoButton") ;
    Ref.disabled = true ;

    Ref = Menu.GetElement("GoPicks") ;
    Ref.disabled = true ;

    Ref = Menu.GetElement("RestartButton") ;
    Ref.disabled = true ;

    Ref = Menu.GetElement("OverlayButton") ;
    Ref.disabled = true ;
  }
}

/* End */
