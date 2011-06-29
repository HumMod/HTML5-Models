/* Launch.JS

   Created : 2011-06-01
   Revised : 2011-06-04
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Launch = new Object ;

Launch.LoadDoc = function (Filename)
{ location.href = Filename ;
}

Launch.LoadMenu = function (Filename)
{ document.getElementById ("Menu").src = Filename ;
}

Launch.LoadPanel = function (Filename)
{ SolveButtons.Disable () ;
  document.getElementById ("Panels").src = Filename ;
}

Launch.CreatePanel = function (Name)
{ SolveButtons.Disable () ;
  eval (Name + "Panel.Show()") ;
}


/* End */
