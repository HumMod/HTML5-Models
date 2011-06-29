/* Model.JS

   Title : Windkessel
   Created : 2011-06-21
   Revised : 2011-06-21
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Model = new Object () ;

Model.Install = function ()
{ Title.Add ("Windkessel") ;

  Storage.Install () ;

  M['X'].Label = "Time" ;

  new Storage.Var ("Vol", "Windkessel Blood Volume", 900.0, 1) ;
  new Storage.Var ("Change", "Volume Change", 0.0, 1) ;

  new Storage.Var ("In", "Inflow", 0.0, 1) ;
  new Storage.Var ("Out", "Outflow", 0.0, 1) ;

  new Storage.Var ("C", "Vascular Compliance", 1.4, 1) ;
  new Storage.Var ("V0", "Unstressed Volume", 800.0, 1) ;

  new Storage.Var ("HR", "Heart Rate", 72.0, 1) ;

  new Storage.Var ("VP", "Ventricular Pressure", 0.0, 1) ;
  new Storage.Var ("AP", "Windkessel Pressure", 0.0, 1) ;
  new Storage.Var ("PP", "Peripheral Pressure", 7.0, 1) ;

  new Storage.Var ("VCond", "Valve Conductance", 10.0, 1) ;
  new Storage.Var ("PCond", "Peripheral Conductance", 1.0, 1) ;

  new Storage.Var ("VPMax", "Max Vent. Pressure", 140.0, 1) ;

  new Integrals.Int ("Vol", "Change", 10.0) ;

  /* Implicits go here */
  /* Curves go here */

  SolveControl.AddOption ("1 Second", 1.0, 0.05) ;
  SolveControl.AddOption ("2 Seconds", 2.0, 0.05) ;
  SolveControl.AddOption ("4 Seconds", 4.0, 0.05) ;

  Menu.Main = "WindkesselMenu.HTML" ;
  Menu.LoadMain () ;

  /* Menu.Next = "" ; */

  System.Restart() ;
}

Model.Parms = function ()
{
}

Model.Dervs = function ()
{ var Arg = 2.0 * Math.PI * (M['HR'].Val / 60.0) * M['X'].Val ;
  var Sine = Math.sin (Arg) ;
  M['VP'].Val = M['VPMax'].Val * Math.max (Sine, 0.0) ;

  M['AP'].Val = (1.0 / M['C'].Val) * (M['Vol'].Val - M['V0'].Val) ;

  if (M['VP'].Val > M['AP'].Val)
  { M['In'].Val = M['VCond'].Val * (M['VP'].Val - M['AP'].Val) ;
  }
  else
  { M['In'].Val = 0.0 ;
  }

  M['Out'].Val = M['PCond'].Val * (M['AP'].Val - M['PP'].Val) ;

  M['Change'].Val = M['In'].Val - M['Out'].Val ;
}

Model.Wrapup = function ()
{ 

}


/* End */

