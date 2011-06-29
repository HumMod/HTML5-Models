/* Model.JS

   Title : Epidemic
   Created : 2011-06-22
   Revised : 2011-06-22
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Model = new Object () ;

Model.Install = function ()
{ Title.Add ("Epidemic") ;

  Storage.Install () ;

  M['X'].Label = "Time" ;

  new Storage.Var ("H", "Healthy Count", 1000.0, 0) ;
  new Storage.Var ("HChange", "Healthy Change", NaN, 1) ;
  new Storage.Var ("C", "Contagious Count", 5.0, 0) ;
  new Storage.Var ("CChange", "Contagious Change", NaN, 1) ;
  new Storage.Var ("R", "Recovered Count", 0.0, 0) ;
  new Storage.Var ("RChange", "Recovered Change", NaN, 1) ;

  new Storage.Var ("C0", "Initial Contagious Count", 5.0, 0) ;
  new Storage.Var ("V", "Virulence", 0.001, 4) ;
  new Storage.Var ("RS", "Recovery Speed", 0.1, 2) ;

  new Integrals.Int ("H", "HChange", 1.0) ;
  new Integrals.Int ("C", "CChange", 1.0) ;
  new Integrals.Int ("R", "RChange", 1.0) ;

  /* Implicits go here */
  /* Curves go here */

  SolveControl.AddOption ("20 Days", 20.0, 1.0) ;

  Menu.Main = "EpidemicMenu.HTML" ;
  Menu.LoadMain () ;
  System.Restart() ;
}

Model.Parms = function ()
{ M['C'].Val = M['C0'].Val ;
}

Model.Dervs = function ()
{ var GettingSick = M['V'].Val * M['H'].Val * M['C'].Val ;
  var Recovering = M['RS'].Val * M['C'].Val ;

  M['HChange'].Val = - GettingSick ;
  M['CChange'].Val = GettingSick - Recovering ;
  M['RChange'].Val = Recovering ;
}

Model.Wrapup = function ()
{ 
}


/* End */

