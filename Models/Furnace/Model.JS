/* Model.JS

   Model : Furnace
   Created : 2011-06-24
   Revised : 2011-06-24
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Model = new Object () ;

Model.Install = function ()
{ Title.Add ("Furnace") ;

  Storage.Install () ;

  M['X'].Label = "Time" ;

  new Storage.Var ("Vol", "House Volume (M^3)", 400.0, 0) ;

  new Storage.Var ("T-On", "Turn On (F)", 75, 1) ;
  new Storage.Var ("T-Off", "Turn Off (F)", 80, 1) ;

  new Storage.Var ("Burner", "Burner Size", 25, 1) ;
  new Storage.Var ("Leak", "Insulation Leak", 0.2, 2) ;
  new Storage.Var ("T-Out", "Outside Temp (F)", 40.0, 1) ;
  new Storage.Var ("Switch", "Thermostat Switch", false, 1) ;
  new Storage.Var ("First", "First Time", true, 1) ;
  
  new Storage.Var ("T-Min", "Min Temp", NaN, 1) ;
  new Storage.Var ("T-Max", "Max Temp", NaN, 1) ;

  new Storage.Var ("T-K", "Temp (Kelvin)", NaN, 1) ;
  new Storage.Var ("T-C", "Temp (Celcius)", NaN, 1) ;
  new Storage.Var ("T-F", "Temp (Fahrenheit)", NaN, 1) ;

  new Storage.Var ("Q", "Total Heat", 26500.0, 1) ;
  new Storage.Var ("Q-Change", "Heat Change", NaN, 1) ;
  new Storage.Var ("Q-Gain", "Heat Gain", 0.0, 1) ;
  new Storage.Var ("Q-Loss", "Heat Loss", NaN, 1) ;

  new Storage.Var ("F-Used", "Fuel Used", 0.0, 1) ;
  new Storage.Var ("F-Change", "Fuel Used Change", NaN, 1) ;

  new Integrals.Int ("Q", "Q-Change", 100.0) ;
  new Integrals.Int ("F-Used", "F-Change") ;

  SolveControl.AddOption ("1 Hour", 60.0, 2.0) ;
  SolveControl.AddOption ("2 Hours", 120.0, 2.0) ;

  Menu.Main = "../../ModelMenu/DetailsMenu.HTML" ;
  Menu.LoadMain () ;
  System.Restart() ;
}

Model.Parms = function ()
{
}

Model.Dervs = function ()
{ M['T-K'].Val = 4.5 * M['Q'].Val / M['Vol'].Val ;
  M['T-C'].Val = M['T-K'].Val - 273.0 ;
  M['T-F'].Val = (9/5) * M['T-C'].Val + 32.0 ;

  if (M['T-F'].Val >= M['T-Off'].Val)
  { M['Switch'].Val = false ;
    M['Q-Gain'].Val = 0.0 ;
  }
  else if (M['T-F'].Val <= M['T-On'].Val)
  { M['Switch'].Val = true ;
    M['Q-Gain'].Val = M['Burner'].Val ;
  }

  M['Q-Loss'].Val = M['Leak'].Val * (M['T-F'].Val - M['T-Out'].Val) ;
  M['Q-Change'].Val = M['Q-Gain'].Val - M['Q-Loss'].Val ;
  M['F-Change'].Val = M['Q-Gain'].Val ; 
}

Model.Wrapup = function ()
{ if (M['First'].Val)
  { M['First'].Val = false ;

    M['T-Min'].Val = M['T-F'].Val ;
    M['T-Max'].Val = M['T-F'].Val ;
  }
  else
  { M['T-Min'].Val = Math.min(M['T-Min'].Val, M['T-F'].Val) ;
    M['T-Max'].Val = Math.max(M['T-Max'].Val, M['T-F'].Val) ;
  } 
}

/* End */

