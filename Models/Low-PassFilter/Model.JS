/* Model.JS

   Model : Low-PassFilter
   Created : 2011-06-24
   Revised : 2011-06-24
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Model = new Object () ;

Model.Install = function ()
{ Title.Add ("Low-Pass Filter") ;

  Storage.Install () ;

  M['X'].Label = "Time" ;

  new Storage.Var ("Output", "Filter Output", 0.0, 2) ;
  new Storage.Var ("O-Change", "Output Change", NaN, 3) ;

  new Storage.Var ("SigAmp", "Signal Amplitude", 1.0, 2) ;
  new Storage.Var ("SigFreq", "Signal Frequency", 1.0, 2) ;

  new Storage.Var ("NoiseAmp", "Noise Amplitude", 0.5, 2) ;
  new Storage.Var ("NoiseFreq", "Noise Frequency", 5.0, 2) ;

  new Storage.Var ("Cutoff", "Cutoff Frequency", 2.0, 2) ;
  new Storage.Var ("Signal", "Signal", NaN, 2) ;
  new Storage.Var ("Noise", "Noise", NaN, 2) ;
  new Storage.Var ("Input", "Filter Input", NaN, 2) ;

  new Storage.Var ("K", "Rate Constant", NaN, 1) ;

  new Integrals.Int ("Output", "O-Change", 0.01) ;

  SolveControl.AddOption ("2 Seconds", 2.0, 0.02) ;

  Menu.Main = "../../ModelMenu/MoreMenu.HTML" ;
  Menu.LoadMain () ;
  System.Restart() ;
}

Model.Parms = function ()
{ 
}

Model.Dervs = function ()
{ var TwoPi = 2.0 * Math.PI ;

  M['Signal'].Val = M['SigAmp'].Val * Math.sin(TwoPi * M['SigFreq'].Val * M['X'].Val) ;
  M['Noise'].Val = M['NoiseAmp'].Val * Math.sin(TwoPi * M['NoiseFreq'].Val * M['X'].Val) ;

  M['Input'].Val = M['Signal'].Val + M['Noise'].Val ;

  M['K'].Val = TwoPi * M['Cutoff'].Val ;
  M['O-Change'].Val = M['K'].Val * (M['Input'].Val - M['Output'].Val) ;
}

Model.Wrapup = function ()
{ 
}

/* End */

