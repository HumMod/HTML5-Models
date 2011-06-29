/* Menu.JS

   Created : 2011-06-01
   Revised : 2011-06-04
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Menu = new Object () ;

Menu.GetReference = function ()
{ var Ref = document.getElementById ("Menu") ;
  var Msg = "Menu reference is undefined." ;
  Assert.OK (Ref != undefined, Msg) ;
  return Ref ;
}

Menu.GetElement = function (ID)
{ var Ref = window.frames[0].document.getElementById(ID) ;
  var Msg = "Menu element is undefined." ;
  Assert.OK (Ref != undefined, Msg) ;
  return Ref ;
}

Menu.HasSolveButtons = function ()
{ if (window.frames[0].document.getElementById("GoButton") == undefined)
  { return false ;
  }
  else
  { return true ;
  }
}

Menu.Main = "../../ModelMenu/MainMenu.HTML" ;
Menu.Next = "../../ModelMenu/NextMenu.HTML" ;
Menu.DefaultDoc = "Overview.HTML" ;

Menu.LoadMain = function ()
{ Launch.LoadMenu (Menu.Main) ;
  Launch.LoadPanel (Menu.DefaultDoc)
}

Menu.LoadNext = function ()
{ Launch.LoadMenu (Menu.Next) ;
}

Menu.MainLoaded = function ()
{ SolveControl.RefreshOptions()
}

/* End */
