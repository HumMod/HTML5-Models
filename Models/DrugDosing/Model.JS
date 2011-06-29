/* Model.JS

   Title : Drug Dosing
   Created : 2011-06-21
   Revised : 2011-06-21
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Model = new Object () ;

Model.Install = function ()
{ Title.Add ("Drug Dosing") ;

  Storage.Install () ;

  M['X'].Label = "Time" ;

  new Storage.Var ("Q", "Drug Quantity", 0.0, 1) ;
  new Storage.Var ("Change", "Drug Change", 0.0, 1) ;

  new Storage.Var ("K", "Rate Constant", 2.0, 1) ;
  new Storage.Var ("Dose", "Drug Dose", 5.0, 1) ;
  new Storage.Var ("Times", "Times A Day", 4.0, 1) ;
  new Storage.Var ("Interval", "Dosing Interval", 0.0, 2) ;

  new Storage.Var ("Last", "Time Of Last Dose", 0.0, 1) ;
  new Storage.Var ("Peak", "Peak Quantity", 0.0, 1) ;

  new Integrals.Int ("Q", "Change", 0.1) ;

  /* Implicits go here */
  /* Curves go here */

  SolveControl.AddOption ("2 Days", 2.0, 0.05) ;

  Menu.LoadMain () ;
  System.Restart() ;
}

Model.Parms = function ()
{ M['Interval'].Val = 1.0 / M['Times'].Val ;
}

Model.Dervs = function ()
{ M['Change'].Val = - M['K'].Val * M['Q'].Val ;
}

Model.Wrapup = function ()
{ if (M['X'].Val >= M['Last'].Val + M['Interval'].Val)
  { M['Q'].Val = M['Q'].Val + M['Dose'].Val ;
    M['Last'].Val = M['X'].Val ;
  }

  if (M['Q'].Val > M['Peak'].Val)
  { M['Peak'].Val = M['Q'].Val ;
  }
}


/* End */

