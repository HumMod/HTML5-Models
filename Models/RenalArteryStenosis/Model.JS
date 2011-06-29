/* Model.JS

   Model : RenalArteryStenosis
   Created : 2011-06-26
   Revised : 2011-06-26
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Model = new Object () ;

Model.Install = function ()
{ Title.Add ("Renal Artery Stenosis") ;

  Storage.Install () ;

  M['X'].Label = "Time" ;

  new Storage.Var ("AP", "Arterial Pressure", NaN, 1) ;
  new Storage.Var ("AP-Norm", "Arterial Pressure (Normal)", 100.0, 1) ;
  new Storage.Var ("ECFV-AP", "ECFV-AP", NaN, 2) ;
  new Storage.Var ("PRA-AP", "PRA-AP", NaN, 1) ;
  new Storage.Var ("Intake", "Salt & H2O Intake", 1.0, 1) ;
  new Storage.Var ("UO", "Urine Output", NaN, 1) ;
  new Storage.Var ("RAP", "Renal Artery Pressure", NaN, 1) ;
  new Storage.Var ("P-Drop", "Renal Pressure Drop", 0.0, 1) ;
  new Storage.Var ("PRA", "Plasma Renin Activity", NaN, 1) ;
  new Storage.Var ("R-Sec", "Renin Secretion", NaN, 1) ;
  new Storage.Var ("R-Block", "Renin Block", 0.0, 1) ;
  new Storage.Var ("R-Degrade", "Renin Degradaton", NaN, 1) ;
  new Storage.Var ("R-ClearK", "Renin Clearance K", 0.07, 2) ;

  new Storage.Var ("ECFV", "Extracellular Volume", 15000, 1) ;
  new Storage.Var ("ECFV-Change", "ECFV Change", NaN, 1) ;

  new Storage.Var ("Renin", "Renin", 30000, 1) ;
  new Storage.Var ("Renin-Change", "Renin Change", NaN, 1) ;

  new Integrals.Int ("ECFV", "ECFV-Change", 150) ;
  new Integrals.Int ("Renin", "Renin-Change", 300) ;

  var Obj ;

  Obj = new Curve.Object('ECFV-AP') ;
  Obj.Point( 8000, 0, 0) ;
  Obj.Point(15000, 1, 0.0004) ;
  Obj.Point(20000, 2, 0) ;
  Obj.Fit() ;

  Obj = new Curve.Object('PRA-AP') ;
  Obj.Point( 0, 0.8, 0) ;
  Obj.Point( 2, 1.0, 0.2) ;
  Obj.Point(10, 2.0, 0) ;
  Obj.Fit() ;

  Obj = new Curve.Object('RAP-RSec') ;
  Obj.Point( 40, 10000, 0) ;
  Obj.Point(100,  2100, -50.0) ;
  Obj.Point(200,     0, 0) ;
  Obj.Fit() ;

  Obj = new Curve.Object('RAP-UO') ;
  Obj.Point( 60,   0, 0) ;
  Obj.Point(100, 1.0, 0.04) ;
  Obj.Point(200, 4.0, 0) ;
  Obj.Fit() ;

  SolveControl.AddOption ("10 Minutes", 10.0, 1.0) ;
  SolveControl.AddOption ("1 Hour", 60.0, 5.0) ;
  SolveControl.AddOption ("1 Day", 1440.0, 120.0) ;
  SolveControl.AddOption ("1 Week", 10080.0, 1440.0) ;

  Menu.Main = "StenosisMenu.HTML" ;
  Menu.LoadMain () ;
  System.Restart() ;
}

Model.Parms = function ()
{ 
}

Model.Dervs = function ()
{ M['PRA'].Val = M['Renin'].Val / M['ECFV'].Val ;
  M['ECFV-AP'].Val = Curve.Value('ECFV-AP', M['ECFV'].Val) ;
  M['PRA-AP'].Val = Curve.Value('PRA-AP', M['PRA'].Val) ;
  M['AP'].Val = M['AP-Norm'].Val * M['ECFV-AP'].Val * M['PRA-AP'].Val ;
  M['RAP'].Val = M['AP'].Val - M['P-Drop'].Val ;
  M['UO'].Val = Curve.Value('RAP-UO', M['RAP'].Val) ;
  M['ECFV-Change'].Val = M['Intake'].Val - M['UO'].Val ;
  M['R-Sec'].Val = (1.0 - M['R-Block'].Val) * Curve.Value('RAP-RSec', M['RAP'].Val) ;
  M['R-Degrade'].Val = M['Renin'].Val * M['R-ClearK'].Val ;
  M['Renin-Change'].Val = M['R-Sec'].Val - M['R-Degrade'].Val ;

}

Model.Wrapup = function ()
{ 
}

/* End */
