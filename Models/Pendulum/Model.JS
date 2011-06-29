/* Model.JS

   Model : Pendulum
   Created : 2011-06-25
   Revised : 2011-06-25
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Model = new Object () ;

Model.Install = function ()
{ Title.Add ("Pendulum") ;

  Storage.Install () ;

  M['X'].Label = "Time" ;

  new Storage.Var ("Angle", "Angle (Radians)", NaN, 2) ;
  new Storage.Var ("A-Change", "Angle Change", NaN, 2) ;
  new Storage.Var ("Velocity", "Velocity (Radians)", 0.0, 2) ;
  new Storage.Var ("V-Change", "Velocity Change", NaN, 2) ;

  new Storage.Var ("A-Init", "Initial Angle", -30.0, 1) ;

  new Storage.Var ("Length", "Length", 1.0, 1) ;
  new Storage.Var ("Gravity", "Gravity", 9.8, 1) ;

  new Storage.Var ("XPos", "Horizontal Position", NaN, 1) ;
  new Storage.Var ("YPos", "Vertical Position", NaN, 1) ;

  new Storage.Var ("A-Deg", "Angle (Degrees)", NaN, 0) ;
  new Storage.Var ("V-Deg", "Velocity (Degrees)", NaN, 0) ;

  new Integrals.Int ("Angle", "A-Change", 1E-5) ;
  new Integrals.Int ("Velocity", "V-Change", 1E-3) ;

  SolveControl.AddOption ("1 Second", 1.0, 0.1) ;
  SolveControl.AddOption ("2 Seconds", 2.0, 0.1) ;

  Menu.LoadMain () ;
  System.Restart() ;
}

Model.Parms = function ()
{ var DEGTORAD = Math.PI / 180.0

  M['Angle'].Val = DEGTORAD * M['A-Init'].Val ;
}

Model.Dervs = function ()
{ var RADTODEG = 180.0 / Math.PI ;

  M['XPos'].Val = M['Length'].Val * Math.cos (M['Angle'].Val) ;
  M['YPos'].Val = - M['Length'].Val * Math.sin (M['Angle'].Val) ;

  M['V-Change'].Val = (M['Gravity'].Val / M['Length'].Val) * Math.cos (M['Angle'].Val) ;
  M['A-Change'].Val = M['Velocity'].Val ;

  M['A-Deg'].Val = RADTODEG * M['Angle'].Val ;
  M['V-Deg'].Val = RADTODEG * M['Velocity'].Val ;
}

Model.Wrapup = function ()
{ 
}

/* End */

