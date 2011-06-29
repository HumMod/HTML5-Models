/* Model.JS

   Model : PStewartpH
   Created : 2011-06-26
   Revised : 2011-06-26
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Model = new Object () ;

Model.Install = function ()
{ Title.Add ("P. Stewart pH") ;

  Storage.Install () ;

  M['X'].Label = "Time" ;

  new Storage.Var ("Kw", "K'w", 4.4E-14, undefined) ;
  new Storage.Var ("Ka", "Ka", 2.0E-7, undefined) ;
  new Storage.Var ("Kc", "Kc", 2.58E-11, undefined) ;
  new Storage.Var ("K3", "K3", 6.0E-11, undefined) ;

  new Storage.Var ("ATot-mEq", "Weak Acid (mEq/L)", 20.0, 1) ;
  new Storage.Var ("pCO2", "pCO2", 45.0, 1) ;
  new Storage.Var ("SID-mEq", "SID (mEq/L)", 42.0, 1) ;
  new Storage.Var ("OH", "OH-", NaN, -3) ;
  new Storage.Var ("ATot", "Total Anions", NaN, -3) ;
  new Storage.Var ("A", "A-", NaN, -3) ;
  new Storage.Var ("HCO3", "HCO3-", NaN, -3) ;
  new Storage.Var ("CO3", "CO3--", NaN, -3) ;
  new Storage.Var ("SID", "SID", NaN, -3) ;
  new Storage.Var ("CO3Eq", "CO3 (Eq)", NaN, -3) ;
  new Storage.Var ("HA", "HA", NaN, -3) ;
  new Storage.Var ("Sc", "Sc", NaN, -3) ;
  new Storage.Var ("CO2", "CO2", NaN, -3) ;
  new Storage.Var ("K-Prime-c", "K'c", NaN, -3) ;
  new Storage.Var ("H2CO3", "H2CO3", NaN, -3) ;
  new Storage.Var ("H-Ion", "[H+] (nEq/L)", NaN, 0) ;
  new Storage.Var ("pH", "pH", NaN, 2) ;
  new Storage.Var ("OH-Ion", "[OH-] (nEq/L)", NaN, 0) ;
  new Storage.Var ("A-mEq", "A- (mEq/L)", NaN, 1) ;
  new Storage.Var ("HA-mEq", "HA (mEq/L)", NaN, 1) ;
  new Storage.Var ("CO2-mMol", "CO2 (mMol/L)", NaN, 1) ;
  new Storage.Var ("CO2-Gas", "CO2 (mL)", NaN, 1) ;
  new Storage.Var ("H2CO3-uMol", "H2CO3 (uMol/L)", NaN, 1) ;
  new Storage.Var ("HCO3-uMol", "HCO3- (uMol/L)", NaN, 1) ;
  new Storage.Var ("CO3-uMol", "CO3-- (uMol/L)", NaN, 1) ;
  new Storage.Var ("CO3-uEq", "CO3-- (uEq/L)", NaN, 1) ;

  new Storage.Var ("H", "H+", 4.2E-8, -3) ;
  new Storage.Var ("HEnd", "H+ End", NaN, -3) ;

  Menu.LoadMain () ;
  System.Restart() ;
}

Model.Parms = function ()
{ Implicit.Calc('Model.Work', 'H', 'HEnd', 4E-10) ;

  M['HA'].Val = M['ATot'].Val - M['A'].Val ;
  M['Sc'].Val = 3.0E-5 ;
  M['CO2'].Val = M['Sc'].Val * M['pCO2'].Val ;
  M['K-Prime-c'].Val = 3.1E-3 ;
  M['H2CO3'].Val = M['K-Prime-c'].Val * M['CO2'].Val ;
  M['H-Ion'].Val = 1E9 * M['H'].Val ;
  M['pH'].Val = Basics.LOG10(1.0 / M['H'].Val) ;
  M['OH-Ion'].Val = 1E9 * M['OH'].Val ;
  M['A-mEq'].Val = 1000.0 * M['A'].Val ;
  M['HA-mEq'].Val = 1000.0 * M['HA'].Val
  M['CO2-mMol'].Val = 1000.0 * M['CO2'].Val ;
  M['CO2-Gas'].Val = 22.4 * M['CO2-mMol'].Val ;
  M['H2CO3-uMol'].Val = 1E6 * M['H2CO3'].Val ;
  M['HCO3-uMol'].Val = 1000.0 * M['HCO3'].Val ;
  M['CO3-uMol'].Val = 1E6 * M['CO3'].Val ;
  M['CO3-uEq'].Val = 2.0 * M['CO3-uMol'].Val ;

}

Model.Dervs = function ()
{ 
}

Model.Wrapup = function ()
{ 
}

Model.Work = function()
{ M['OH'].Val = M['Kw'].Val / M['H'].Val ;
  M['ATot'].Val = 0.001 * M['ATot-mEq'].Val ;
  M['A'].Val = (M['Ka'].Val * M['ATot'].Val) / (M['H'].Val + M['Ka'].Val) ;
  M['HCO3'].Val = (M['Kc'].Val * M['pCO2'].Val) / M['H'].Val ;
  M['CO3'].Val = (M['K3'].Val * M['HCO3'].Val) / M['H'].Val ;
  M['SID'].Val = 0.001 * M['SID-mEq'].Val ;
  M['CO3Eq'].Val = 2.0 * M['CO3'].Val ;
  M['HEnd'].Val = M['A'].Val + M['OH'].Val + M['HCO3'].Val + M['CO3Eq'].Val - M['SID'].Val ;

}

/* End */
