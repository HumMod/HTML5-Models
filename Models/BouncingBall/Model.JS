/* Model.JS

   Title : Bouncing Ball
   Created : 2011-05-30
   Revised : 2011-06-18
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Model = new Object () ;

Model.Install = function ()
{ Title.Add ("Bouncing Ball") ;

  Storage.Install () ;

  M['X'].Label = "Time" ;

  new Storage.Var ("HorzAcc", "Horizontal Acceleration", 0.0, 1) ;
  new Storage.Var ("VertAcc", "Vertical Acceleration", -9.8, 1) ;
  new Storage.Var ("Elast", "Elasticity", 0.8, 2) ;
  new Storage.Var ("HorzVel", "Horizontal Velocity", 1.0, 1) ;
  new Storage.Var ("HorzDis", "Horizontal Distance", 0.0, 1) ;
  new Storage.Var ("VertVel", "Vertical Velocity", 0.0, 1) ;
  new Storage.Var ("VertDis", "Vertical Distance", 10.0, 1) ;

  new Integrals.Int ("HorzVel", "HorzAcc", 0.1) ;
  new Integrals.Int ("HorzDis", "HorzVel", 0.1) ;
  new Integrals.Int ("VertVel", "VertAcc", 0.01) ;
  new Integrals.Int ("VertDis", "VertVel", 0.01) ;

  /* Curves go here */

  SolveControl.AddOption ("1 Second", 1.0, 0.1) ;
  SolveControl.AddOption ("10 Seconds", 10.0, 0.1) ;

  Menu.LoadMain () ;

  /* Menu.Next = "" ; */

  System.Restart() ;
}

Model.Parms = function ()
{
}

Model.Dervs = function ()
{
}

Model.Wrapup = function ()
{ if (M['VertDis'].Val <= 0.0)
  { M['VertDis'].Val = 0.0 ;
    M['VertVel'].Val = Math.abs(M['VertVel'].Val) * M['Elast'].Val ;
  }
}


/* End */

