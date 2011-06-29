/* Model.JS

   Model : Circulatory Model
   Created : 2011-06-23
   Revised : 2011-06-23
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Model = new Object () ;

Model.Install = function ()
{ Title.Add ("Circulatory Model") ;

  Storage.Install () ;

  M['X'].Label = "Time" ;

  // General Hemodynamics

  new Storage.Var ("AP", "Arterial Pressure", NaN, 1) ;
  new Storage.Var ("TPR", "Peripheral Resistance", NaN, 3) ;

  // Peripheral Hemodynamics 

  new Storage.Var ("VR", "Venous Return", 5400, 0) ;
  new Storage.Var ("V0", "MCFP V0", 3600, 0) ;
  new Storage.Var ("MCFP", "Mean Filling Pressure", NaN, 1) ;
  new Storage.Var ("RVR", "Return Resistance", 0.0013, 4) ;
  new Storage.Var ("DelP", "Peripheral Pressure Gradient", NaN, 2) ;

  // Central Hemodynamics

  new Storage.Var ("HS", "Heart Strength", 1.0, 2) ;
  new Storage.Var ("BasicCO", "Basic Cardiac Output", NaN, 0) ;
  new Storage.Var ("CO", "Cardiac Output", NaN, 0) ;
  new Storage.Var ("RAP", "Right Atrial Pressure", NaN, 1) ;

  // Kidney

  new Storage.Var ("K-Drop", "Renal Pressure Drop", 0.0, 1) ;
  new Storage.Var ("K-Mass", "Kidney Mass", 1.0, 2) ;
  new Storage.Var ("BasicUO", "Basic Urine Out", NaN, 2) ;
  new Storage.Var ("UO", "Urine Out", NaN, 2) ;
  new Storage.Var ("K-PP", "Renal Perfusion Pressure", NaN, 1) ;

  // Body Fluids

  new Storage.Var ("In", "Salt & H2O Intake", 1.0, 1) ;
  new Storage.Var ("ECFV", "Extracellular Fluid", 15000.0, 0) ;
  new Storage.Var ("E-Change", "Extracellular Change", NaN, 1) ;
  new Storage.Var ("BV", "Blood Volume", NaN, 0) ;

  // Metabolism

  new Storage.Var ("M-Tau", "Delay (Min)", 4000, 0) ;
  new Storage.Var ("M-Basic", "Basic Need", 5400.0, 0) ;
  new Storage.Var ("M-Norm", "Flow (Normalized)", NaN, 2) ;
  new Storage.Var ("M-Delay", "Flow (Delayed)", 1.0, 2) ;
  new Storage.Var ("M-Change", "Flow Change", NaN, 3) ;

  new Integrals.Int ("ECFV", "E-Change", 150.0) ;
  new Integrals.Int ("M-Delay", "M-Change", 0.01) ;

  var Obj ;

  Obj = new Curve.Object('BV') ;
  Obj.Point(    0,    0, 0) ;
  Obj.Point(15000, 5000, 0.40) ;
  Obj.Point(22000, 7500, 0) ;
  Obj.Fit() ;

  Obj = new Curve.Object('TPR') ;
  Obj.Point(0.8, 0.004, 0) ;
  Obj.Point(1.0, 0.019, 0.25) ;
  Obj.Point(1.2, 0.050, 0) ;
  Obj.Fit() ;

  Obj = new Curve.Object('CO') ;
  Obj.Point(-4,     0, 0) ;
  Obj.Point( 0,  5400, 2000) ;
  Obj.Point(10, 12500, 0) ;
  Obj.Fit() ;

  Obj = new Curve.Object('UO') ;
  Obj.Point( 80, 0.0, 0) ;
  Obj.Point(100, 1.0, 0.1) ;
  Obj.Point(140, 5.0, 0) ;
  Obj.Fit() ;

  SolveControl.AddOption ("10 Min", 10.0, 1.0) ;
  SolveControl.AddOption ("1 Hour", 60.0, 5.0) ;
  SolveControl.AddOption ("1 Day", 1440.0, 120.0) ;
  SolveControl.AddOption ("1 Week", 10080.0, 120.0) ;

  Menu.Main = "CirculatoryMenu.HTML" ;
  Menu.LoadMain () ;
  System.Restart() ;
}

Model.Parms = function ()
{
}

Model.Dervs = function ()
{ M['BV'].Val = Curve.Value('BV', M['ECFV'].Val) ;
  M['MCFP'].Val = 0.005 * (M['BV'].Val - M['V0'].Val) ;
  M['TPR'].Val = Curve.Value('TPR', M['M-Delay'].Val) ;
  M['RVR'].Val = 0.035 * M['TPR'].Val + 0.00065 ;

  Implicit.Calc('Model.Work', 'VR', 'CO', 10) ; 

  M['M-Norm'].Val = M['CO'].Val / M['M-Basic'].Val ;
  M['AP'].Val = M['CO'].Val * M['TPR'].Val ;
  M['K-PP'].Val = M['AP'].Val - M['K-Drop'].Val ;
  M['BasicUO'].Val = Curve.Value('UO', M['K-PP'].Val) ;
  M['UO'].Val = M['BasicUO'].Val * M['K-Mass'].Val ;

  M['E-Change'].Val = M['In'].Val - M['UO'].Val ;
  M['M-Change'].Val = (1.0 / M['M-Tau'].Val) * (M['M-Norm'].Val - M['M-Delay'].Val) ;
}

Model.Wrapup = function ()
{ 
}

Model.Work = function ()
{ M['DelP'].Val = M['VR'].Val * M['RVR'].Val ;
  M['RAP'].Val = M['MCFP'].Val - M['DelP'].Val ;
  M['BasicCO'].Val = Curve.Value('CO', M['RAP'].Val) ;
  M['CO'].Val = M['BasicCO'].Val * M['HS'].Val ;
}

/* End */

