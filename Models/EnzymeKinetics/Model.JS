/* Model.JS

   Model : EnzymeKinetics
   Created : 2011-06-25
   Revised : 2011-06-25
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Model = new Object () ;

Model.Install = function ()
{ Title.Add ("Enzyme Kinetics") ;

  Storage.Install () ;

  M['X'].Label = "Time" ;

  new Storage.Var ("E", "E", 1.0, 2) ;
  new Storage.Var ("EDot", "dE/dt", NaN, 2) ;
  new Storage.Var ("S", "S", 1.0, 2) ;
  new Storage.Var ("SDot", "dS/dt", NaN, 2) ;
  new Storage.Var ("ES", "ES", 0.0, 2) ;
  new Storage.Var ("ESDot", "dES/dt", NaN, 2) ;
  new Storage.Var ("P", "P", 0.0, 2) ;
  new Storage.Var ("PDot", "dP/dt", NaN, 2) ;
  
  new Storage.Var ("k1", "k1", 0.10, 3) ;
  new Storage.Var ("k2", "k2", 0.01, 3) ;
  new Storage.Var ("k3", "k3", 0.10, 3) ;
  new Storage.Var ("k4", "k4", 0.01, 3) ;
  

  new Integrals.Int ("E", "EDot", 0.01) ;
  new Integrals.Int ("S", "SDot", 0.01) ;
  new Integrals.Int ("ES", "ESDot", 0.01) ;
  new Integrals.Int ("P", "PDot", 0.01) ;

  SolveControl.AddOption ("10", 10.0, 2.0) ;
  SolveControl.AddOption ("50", 50.0, 2.0) ;

  Menu.LoadMain () ;
  System.Restart() ;
}

Model.Parms = function ()
{
}

Model.Dervs = function ()
{ var Rate1 = M['k1'].Val * M['E'].Val * M['S'].Val ;
  var Rate2 = M['k2'].Val * M['ES'].Val ;
  var Rate3 = M['k3'].Val * M['ES'].Val ;
  var Rate4 = M['k4'].Val * M['E'].Val * M['P'].Val ;

  M['EDot'].Val = - Rate1 + Rate2 + Rate3 - Rate4 ;
  M['SDot'].Val = Rate2 - Rate1 ;
  M['ESDot'].Val = Rate1 - Rate2 - Rate3 + Rate4 ;
  M['PDot'].Val = Rate3 - Rate4 ;

}

Model.Wrapup = function ()
{ 
}

/* End */

