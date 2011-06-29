/* Model.JS

   Model : First-OrderDE
   Created : 2011-06-24
   Revised : 2011-06-24
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Model = new Object () ;

Model.Install = function ()
{ Title.Add ("First-Order DE") ;

  Storage.Install () ;

  M['X'].Label = "Time" ;

  new Storage.Var ("Y", "Y", 1.0, 2) ;
  new Storage.Var ("Y-Change", "dY/dt", NaN, 3) ;
  new Storage.Var ("Y-Exact", "Exact Y", NaN, 2) ;
  new Storage.Var ("K", "Rate Constant", 0.1, 2) ;
  new Storage.Var ("Tau", "Time Constant", NaN, 1) ;
  new Storage.Var ("T-Half", "Half Time", NaN, 1) ;
  new Storage.Var ("Error", "Integration Error", NaN, 3) ;

  new Integrals.Int ("Y", "Y-Change", 0.01) ;

  SolveControl.AddOption ("10", 10.0, 1.0) ;
  SolveControl.AddOption ("20", 20.0, 1.0) ;

  Menu.Main = "../../ModelMenu/DetailsMenu.HTML" ;
  Menu.LoadMain () ;
  System.Restart() ;
}

Model.Parms = function ()
{ M['Tau'].Val = 1.0 / M['K'].Val ;
  M['T-Half'].Val = 0.69 * M['Tau'].Val ;
}

Model.Dervs = function ()
{ M['Y-Change'].Val = - M['K'].Val * M['Y'].Val ;
}

Model.Wrapup = function ()
{ M['Y-Exact'].Val = Math.exp ( - M['K'].Val * M['X'].Val) ;
  M['Error'].Val = M['Y-Exact'].Val - M['Y'].Val ;
}

/* End */

