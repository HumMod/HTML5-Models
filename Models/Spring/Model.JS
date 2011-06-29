/* Model.JS

   Model : Spring
   Created : 2011-06-25
   Revised : 2011-06-25
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Model = new Object () ;

Model.Install = function ()
{ Title.Add ("Spring") ;

  Storage.Install () ;

  M['X'].Label = "Time" ;

  new Storage.Var ("L-Resting", "Resting Length", 0.0, 1) ;
  new Storage.Var ("Stiff", "Stiffness", 10.0, 1) ;
  new Storage.Var ("Mass", "Mass", 1.0, 1) ;
  new Storage.Var ("G", "Gravity", -9.8, 1) ;

  new Storage.Var ("P", "Position", NaN, 1) ;
  new Storage.Var ("P-Init", "Initial Position", 5.0, 2) ;

  new Storage.Var ("V", "Velocity", 0.0, 1) ;
  new Storage.Var ("A", "Acceleration", NaN, 1) ;

  new Storage.Var ("Force", "Force", NaN, 2) ;

  new Integrals.Int ("P", "V", 1E-4) ;
  new Integrals.Int ("V", "A", 1E-4) ;

  SolveControl.AddOption ("5 Seconds", 5.0, 0.1) ;

  Menu.LoadMain () ;
  System.Restart() ;
}

Model.Parms = function ()
{ M['P'].Val = M['P-Init'].Val ;
}

Model.Dervs = function ()
{ M['Force'].Val = M['Stiff'].Val * (M['L-Resting'].Val - M['P'].Val) ;
  M['A'].Val = (M['Force'].Val / M['Mass'].Val) - M['G'].Val ;
}

Model.Wrapup = function ()
{ 
}

/* End */

