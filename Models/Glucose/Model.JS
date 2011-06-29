/* Model.JS

   Model : Glucose
   Created : 2011-06-25
   Revised : 2011-06-25
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Model = new Object () ;

Model.Install = function ()
{ Title.Add ("Glucose") ;

  Storage.Install () ;

  M['X'].Label = "Time" ;

  new Storage.Var ("G", "Glucose Mass", 1.5E4, 0) ;
  new Storage.Var ("G-Dot", "d Glucose / dt", NaN, 0) ;
  new Storage.Var ("I", "Insulin Mass", 1.5E5, 0) ;
  new Storage.Var ("I-Dot", "d Insulin / dt", NaN, 0) ;
  
  new Storage.Var ("ECFV", "Extracellular Volume", 1.5E4, 0) ;

  new Storage.Var ("G-Switch", "Glucose Pump Switch", 0, 0) ;
  new Storage.Var ("G-Setting", "Setting", 0, 0) ;
  new Storage.Var ("G-Rate", "Glucose Pump Rate", NaN, 0) ;

  new Storage.Var ("I-Switch", "Insulin Pump Switch", 0, 0) ;
  new Storage.Var ("I-Setting", "Setting", 0, 0) ;
  new Storage.Var ("I-Rate", "Insulin Pump Rate", NaN, 0) ;

  new Storage.Var ("G-Conc", "[Glucose]", NaN, 0) ;
  new Storage.Var ("I-Conc", "[Insulin]", NaN, 0) ;

  new Storage.Var ("G-Liver", "Liver Glucose Release", NaN, 0) ;
  new Storage.Var ("G-Cells", "Cells Glucose Uptake", NaN, 0) ;

  new Storage.Var ("I-Secrete", "Insulin Secretion", NaN, 0) ;
  new Storage.Var ("I-ClearK", "Insulin Clearance K", 700.0, 0) ;
  new Storage.Var ("I-Clear", "Insulin Clearance", NaN, 0) ;

  new Integrals.Int ("G", "G-Dot", 1E2) ;
  new Integrals.Int ("I", "I-Dot", 1E3) ;

  var Obj ;

  Obj = new Curve.Object('G-Liver') ;
  Obj.Point(  0, 350, 0) ;
  Obj.Point( 10, 150, -2.5) ;
  Obj.Point(200,   0, 0) ;
  Obj.Fit() ;

  Obj = new Curve.Object('G-Cells') ;
  Obj.Point(  0,  1.1, 0) ;
  Obj.Point( 10,  1.5, 0.06) ;
  Obj.Point(200, 11.0, 0) ;
  Obj.Fit() ;

  Obj = new Curve.Object('I-Secrete') ;
  Obj.Point(  0,      0, 0) ;
  Obj.Point(100,   7700, 140) ;
  Obj.Point(300, 112000, 0) ;
  Obj.Fit() ;

  SolveControl.AddOption ("2 Minutes", 2.0, 2.0) ;
  SolveControl.AddOption ("10 Minutes", 10.0, 2.0) ;
  SolveControl.AddOption ("30 Minutes", 30.0, 2.0) ;
  SolveControl.AddOption ("120 Minutes", 120.0, 2.0) ;

  Menu.LoadMain () ;
  System.Restart() ;
}

Model.Parms = function ()
{ if (M['G-Switch'].Val == 0.0)
  { M['G-Rate'].Val = 0.0 ;
  }
  else
  { M['G-Rate'].Val = M['G-Setting'].Val ;
  }

  if (M['I-Switch'].Val == 0.0)
  { M['I-Rate'].Val = 0.0 ;
  }
  else
  { M['I-Rate'].Val = M['I-Setting'].Val ;
  }
}

Model.Dervs = function ()
{ M['G-Conc'].Val = (M['G'].Val / M['ECFV'].Val) * 100.0 ;
  M['I-Conc'].Val = M['I'].Val / M['ECFV'].Val ;

  M['G-Liver'].Val = Curve.Value('G-Liver', M['I-Conc'].Val)
  M['G-Cells'].Val = Curve.Value('G-Cells', M['I-Conc'].Val) * M['G-Conc'].Val ;

  M['G-Dot'].Val = M['G-Liver'].Val - M['G-Cells'].Val + M['G-Rate'].Val ;

  M['I-Secrete'].Val = Curve.Value('I-Secrete', M['G-Conc'].Val) ;
  M['I-Clear'].Val = M['I-ClearK'].Val * M['I-Conc'].Val ;

  M['I-Dot'].Val = M['I-Secrete'].Val - M['I-Clear'].Val + M['I-Rate'].Val ;
}

Model.Wrapup = function ()
{ 
}

/* End */
