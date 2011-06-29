/* SlideBar.JS

   Created : 2011-06-19
   Revised : 2011-06-19
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var SlideBar = new Object () ;

SlideBar.Changed = function ()
{ var Ref ;

  Ref = Reference.Get('slidebar') ;
  var Value = top.Basics.RoundTo (1, Ref.value) ;

  Ref = Reference.Get('working') ;
  Ref.innerHTML = Value.toString(10) ;

}

SlideBar.Clicked = function ()
{ var Ref ;

  Ref = Reference.Get('slidebar') ;
  var Value = top.Basics.RoundTo (1, Ref.value) ;

  top.IPC.ParmChanged('Elast', Value) ;
}

/* End */
