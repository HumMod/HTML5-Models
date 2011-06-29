/* Model.JS

   Title : Predator-Prey
   Created : 2011-06-21
   Revised : 2011-06-21
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Model = new Object () ;

Model.Install = function ()
{ Title.Add ("Predator-Prey") ;

  Storage.Install () ;

  M['X'].Label = "Time" ;

  new Storage.Var ("M-Count", "Moose Count", 1500.0, 0) ;
  new Storage.Var ("M-Count0", "Initial Moose Count", 1500.0, 0) ;
  new Storage.Var ("M-Change", "Moose Change", NaN, 0) ;
  new Storage.Var ("M-Births", "Moose Births", NaN, 0) ;
  new Storage.Var ("M-Deaths", "Moose Deaths", NaN, 0) ;
  new Storage.Var ("M-BirthRate", "Moose Birthrate", 0.1, 2) ;
  new Storage.Var ("M-DeathRate", "Moose Death Rate", NaN, 2) ;
  new Storage.Var ("M-Food", "Moose Food Value", 0.1, 2) ;
  new Storage.Var ("M-Min", "Minimum Moose", NaN, 0) ;
  new Storage.Var ("M-Max", "Maximum Moose", NaN, 0) ;

  new Storage.Var ("W-Count", "Wolf Count", 50.0, 0) ;
  new Storage.Var ("W-Count0", "Initial Wolf Count", 50.0, 0) ;
  new Storage.Var ("W-Change", "Wolf Change", NaN, 0) ;
  new Storage.Var ("W-Births", "Wolf Births", NaN, 0) ;
  new Storage.Var ("W-Deaths", "Wolf Deaths", NaN, 0) ;
  new Storage.Var ("W-BirthRate", "Wolf Birthrate", NaN, 2) ;
  new Storage.Var ("W-DeathRate", "Wolf Death Rate", 0.2, 2) ;
  new Storage.Var ("W-Skills", "Wolf Hunting Skills", 0.002, 4) ;
  new Storage.Var ("W-Min", "Minimum Wolves", NaN, 0) ;
  new Storage.Var ("W-Max", "Maximum Wolves", NaN, 0) ;

  new Storage.Var ("FirstTime", "First Time", true, 0) ;

  new Integrals.Int ("M-Count", "M-Change", 1E-2) ;
  new Integrals.Int ("W-Count", "W-Change", 1E-3) ;

  /* Implicits go here */
  /* Curves go here */

  SolveControl.AddOption ("100 Days", 100.0, 1.0) ;

  Menu.Main = "Predator-PreyMenu.HTML" ;
  Menu.LoadMain () ;
  System.Restart() ;
}

Model.Parms = function ()
{ M['M-Count'].Val = M['M-Count0'].Val ;
  M['W-Count'].Val = M['W-Count0'].Val ;
}

Model.Dervs = function ()
{ M['M-Births'].Val = M['M-BirthRate'].Val * M['M-Count'].Val ;
  M['M-DeathRate'].Val = M['W-Skills'].Val * M['W-Count'].Val ;
  M['M-Deaths'].Val = M['M-DeathRate'].Val * M['M-Count'].Val ;
  M['M-Change'].Val = M['M-Births'].Val - M['M-Deaths'].Val ;

  M['W-BirthRate'].Val = M['M-Food'].Val * M['W-Skills'].Val * M['M-Count'].Val ;
  M['W-Births'].Val = M['W-BirthRate'].Val * M['W-Count'].Val ;
  M['W-Deaths'].Val = M['W-DeathRate'].Val * M['W-Count'].Val ;
  M['W-Change'].Val = M['W-Births'].Val - M['W-Deaths'].Val ;
}

Model.Wrapup = function ()
{ if (M['FirstTime'].Val)
  { M['FirstTime'].Val = false ;

    M['M-Min'].Val = M['M-Count'].Val ;
    M['M-Max'].Val = M['M-Count'].Val ;

    M['W-Min'].Val = M['W-Count'].Val ;
    M['W-Max'].Val = M['W-Count'].Val ;
  }
  else
  { M['M-Min'].Val = Math.min (M['M-Min'].Val, M['M-Count'].Val) ;
    M['M-Max'].Val = Math.max (M['M-Max'].Val, M['M-Count'].Val) ;

    M['W-Min'].Val = Math.min (M['W-Min'].Val, M['W-Count'].Val) ;
    M['W-Max'].Val = Math.max (M['W-Max'].Val, M['W-Count'].Val) ;
  }
}


/* End */

