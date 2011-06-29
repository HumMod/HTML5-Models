/* Model.JS

   Title : CO And VR
   Created : 2011-06-22
   Revised : 2011-06-22
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Model = new Object () ;

Model.Install = function ()
{ Title.Add ("CO And VR") ;

  Storage.Install () ;

  M['X'].Label = "Time" ;

  new Storage.Var ("CO", "Cardiac Output", NaN, 0) ;
  new Storage.Var ("VR", "Venous Return", 5400.0, 0) ;
  new Storage.Var ("RAP", "Right Atrial Pressure", NaN, 1) ;
  new Storage.Var ("DelP", "Pressure Gradient", NaN, 1) ;

  new Storage.Var ("HS", "Heart Strength", 1.0, 1) ;
  new Storage.Var ("MCFP", "Mean Filling Pressure", 7.0, 1) ;
  new Storage.Var ("RVR", "Return Resistence", 0.0013, 4) ;

  /* Implicits go here */

  var Obj = new Curve.Object('Starling') ;

  Obj.Point(-4,     0, 0) ;
  Obj.Point( 0,  5400, 1500) ;
  Obj.Point(10, 12500, 0) ;

  Obj.Fit() ;

  Menu.Main = "COAndVRMenu.HTML" ;
  Menu.LoadMain () ;
  System.Restart() ;
}

Model.Parms = function ()
{ Implicit.Calc('Model.Work', 'VR', 'CO', 10) ; 
}

Model.Dervs = function ()
{
}

Model.Wrapup = function ()
{ 
}

Model.Work = function ()
{ M['DelP'].Val = M['VR'].Val * M['RVR'].Val ;
  M['RAP'].Val = M['MCFP'].Val - M['DelP'].Val ;
  M['CO'].Val = Curve.Value('Starling', M['RAP'].Val) * M['HS'].Val ;
}

/* End */

