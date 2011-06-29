/* Model.JS

   Title : Distance
   Created : 2011-06-21
   Revised : 2011-06-21
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Model = new Object () ;

Model.Install = function ()
{ Title.Add ("Distance") ;

  Storage.Install () ;

  M['X'].Label = "Time" ;

  new Storage.Var ("Angle", "Angle (Degrees)", 70, 1) ;
  new Storage.Var ("Speed", "Initial Velocity (M/S)", 10, 1) ;
  new Storage.Var ("Distance", "Final Distance", 0, 1) ;

  new Storage.Var ("HorzAcc", "Horizontal Acceleration", 0.0, 1) ;
  new Storage.Var ("VertAcc", "Vertical Acceleration", -9.8, 1) ;

  new Storage.Var ("HorzVel", "Horizontal Velocity", 0.0, 1) ;
  new Storage.Var ("VertVel", "Vertical Velocity", 0.0, 1) ;

  new Storage.Var ("HorzDis", "Horizontal Distance", 0.0, 1) ;
  new Storage.Var ("VertDis", "Vertical Distance", 1.8, 1) ;

  new Storage.Var ("Radians", "Radians", 0.0, 1) ;
  new Storage.Var ("MaxHigh", "Maximum Altitude", 0.0, 1) ;
  new Storage.Var ("MaxDis", "Maximum Distance", 0.0, 1) ;

  new Integrals.Int ("HorzVel", "HorzAcc", 0.1) ;
  new Integrals.Int ("HorzDis", "HorzVel", 0.1) ;
  new Integrals.Int ("VertVel", "VertAcc", 0.1) ;
  new Integrals.Int ("VertDis", "VertVel", 0.1) ;

  /* Implicits go here */
  /* Curves go here */

  SolveControl.AddOption ("5 Seconds", 5.0, 0.05) ;

  Menu.LoadMain () ;
  System.Restart() ;
}

Model.Parms = function ()
{ M['Radians'].Val = M['Angle'].Val * Math.PI / 180.0

  M['VertVel'].Val = M['Speed'].Val * Math.sin (M['Radians'].Val) ;
  M['HorzVel'].Val = M['Speed'].Val * Math.cos (M['Radians'].Val) ;
}

Model.Dervs = function ()
{
}

Model.Wrapup = function ()
{ if (M['VertDis'].Val > M['MaxHigh'].Val)
  { M['MaxHigh'].Val = M['VertDis'].Val ;
  }

  if (M['VertDis'].Val <= 0.0)
  { M['VertVel'].Val = 0.0 ;
    M['VertDis'].Val = 0.0 ;

    M['HorzVel'].Val = 0.0 ;
    M['MaxDis'].Val = M['HorzDis'].Val ;
  }
}


/* End */

