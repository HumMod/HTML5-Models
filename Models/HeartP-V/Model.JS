/* Model.JS

   Model : HeartP-V
   Created : 2011-06-26
   Revised : 2011-06-26
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Model = new Object () ;

Model.Install = function ()
{ Title.Add ("Heart P-V") ;

  Storage.Install () ;

  M['X'].Label = "Volume" ;

  new Storage.Var ("Stiff", "Stiffness", 4.6, 1) ;
  new Storage.Var ("Inotrop", "Inotrope", 1.0, 1) ;
  new Storage.Var ("Thick", "Chamber Thickness", 1.0, 1) ;
  new Storage.Var ("R", "Radius", NaN, 1) ;
  new Storage.Var ("L", "Sarcomere Length", NaN, 1) ;

  new Storage.Var ("RT", "Resting Tension", NaN, 0) ;
  new Storage.Var ("BaseAT", "Basic Active Tension", NaN, 0) ;
  new Storage.Var ("AT", "Active Tension", NaN, 0) ;
  new Storage.Var ("TT", "Total Tension", NaN, 0) ;

  new Storage.Var ("PDynes", "Pressure (Dynes)", NaN, 0) ;
  new Storage.Var ("P", "Pressure", NaN, 0) ;

  var Obj ;

  Obj = new Curve.Object('BaseAT') ;
  Obj.Point(1.0,    0, 0) ;
  Obj.Point(2.2, 12E5, 0) ;
  Obj.Point(3.7,    0, 0) ;
  Obj.Fit() ;

  SolveControl.AddOption ("90 mL", 90.0, 10.0) ;
  SolveControl.AddOption ("270 mL", 270.0, 10.0) ;

  Menu.LoadMain () ;
  System.Restart() ;
}

Model.Parms = function ()
{ 
}

Model.Dervs = function ()
{ M['R'].Val = Math.sqrt(M['X'].Val / 21.0) ;
  M['L'].Val = 0.88 * M['R'].Val ;
  M['RT'].Val = Math.exp(M['Stiff'].Val * M['L'].Val) - 1.0 ;
  M['BaseAT'].Val = Curve.Value('BaseAT', M['L'].Val) ;
  M['AT'].Val = M['BaseAT'].Val * M['Inotrop'].Val ;
  M['TT'].Val = M['RT'].Val + M['AT'].Val ;

  M['PDynes'].Val = M['TT'].Val * M['Thick'].Val / M['R'].Val ;
  M['P'].Val = M['PDynes'].Val / 1330.0 ;
}

Model.Wrapup = function ()
{ 
}

/* End */
