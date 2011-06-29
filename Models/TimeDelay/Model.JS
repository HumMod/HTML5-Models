/* Model.JS

   Model : TimeDelay
   Created : 2011-06-25
   Revised : 2011-06-25
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Model = new Object () ;

Model.Install = function ()
{ Title.Add ("Time Delay") ;

  Storage.Install () ;

  M['X'].Label = "Time" ;

  new Storage.Var ("I", "Input", 0.0, 2) ;
  new Storage.Var ("O", "Output", 0.0, 2) ;
  new Storage.Var ("K", "Rate Constant", 0.2, 2) ;
  new Storage.Var ("Change", "Change", NaN, 2) ;

  new Storage.Var ("Tau", "Time Constant", NaN, 2) ;
  new Storage.Var ("t 1/2", "Half Time", NaN, 2) ;

  new Storage.Var ("Step", "Input Step", 1.0, 1) ;
  new Storage.Var ("At", "Input Step Time", 4.0, 1) ;

  new Integrals.Int ("O", "Change", 0.1) ;

  SolveControl.AddOption ("10", 10.0, 0.5) ;
  SolveControl.AddOption ("20", 20.0, 1.0) ;

  Menu.LoadMain () ;
  System.Restart() ;
}

Model.Parms = function ()
{ M['Tau'].Val = 1 / M['K'].Val ;
  M['t 1/2'].Val = 0.69 * M['Tau'].Val ;
}

Model.Dervs = function ()
{ if (M['X'].Val >= M['At'].Val)
  { M['I'].Val = M['Step'].Val ;
  }

  M['Change'].Val = M['K'].Val * (M['I'].Val - M['O'].Val) ;
}

Model.Wrapup = function ()
{ 
}

/* End */

