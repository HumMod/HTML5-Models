/* Model.JS

   Model : Nerve
   Created : 2011-06-27
   Revised : 2011-06-27
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Model = new Object () ;

Model.Install = function ()
{ Title.Add ("Nerve") ;

  Storage.Install () ;

  M['X'].Label = "Time" ;

  new Storage.Var ("C", "Capacitance", 1.0, 1) ;

  new Storage.Var ("Switch-1", "Switch", 1, 1) ;
  new Storage.Var ("Time-1", "Start Time (mS)", 4.0, 1) ;
  new Storage.Var ("Tau-1", "Duration (mS)", 0.3, 1) ;
  new Storage.Var ("Amp-1", "Current)", -300.0, 1) ;
  new Storage.Var ("Out-1", "Output)", 0.0, 1) ;

  new Storage.Var ("Switch-2", "Switch", 0, 1) ;
  new Storage.Var ("Time-2", "Start Time (mS)", 8.0, 1) ;
  new Storage.Var ("Tau-2", "Duration (mS)", 0.3, 1) ;
  new Storage.Var ("Amp-2", "Current", -300.0, 1) ;
  new Storage.Var ("Out-2", "Output", 0.0, 1) ;

  new Storage.Var ("V-Na", "Na+ Equilibrium Potential", 50.0, 1) ;
  new Storage.Var ("V-K", "K+ Equilibrium Potential", -75.0, 1) ;

  new Storage.Var ("G-Leak", "Leak Conductance", 0.3, 1) ;
  new Storage.Var ("V-Leak", "Leak Equilibrium Potential", -50.0, 1) ;

  new Storage.Var ("V", "Membrane Potential", NaN, 1) ;

  new Storage.Var ("Na-Total", "Total Na+ Channels", 120.0, 0) ;
  new Storage.Var ("Na-Active", "Na+ Active Channels", 90.0, 0) ;
  new Storage.Var ("Na-Active-Change", "Na+ Active Channels Change", NaN, 1) ;
  new Storage.Var ("Na-Fract-Active-SS", "Na+ Fraction Active (Steady State)", NaN, 1) ;
  new Storage.Var ("Na-Active-SS", "Na+ Active Channels (Steady State)", NaN, 1) ;
  new Storage.Var ("Na-Inactive", "Na+ Inactive Channels", NaN, 0) ;
  new Storage.Var ("Na-Active-Tau", "Na+ Active Channel Tau", NaN, 1) ;

  new Storage.Var ("Na-Fract-Open", "Na+ Fraction Open", 0.0, 1) ;
  new Storage.Var ("Na-Fract-Open-Change", "Na+ Fraction Open Change", NaN, 1) ;
  new Storage.Var ("Na-Fract-Open-SS", "Na+ Fraction Open (Steady State)", NaN, 1) ;
  new Storage.Var ("Na-Open", "Na+ Channels Open", NaN, 0) ;
  new Storage.Var ("Na-Closed", "Na+ Channels Closed", NaN, 0) ;
  new Storage.Var ("Na-Fract-Open-Tau", "Na+ Fraction Open Tau", NaN, 1) ;

  new Storage.Var ("G-Na", "Na+ Conductance", NaN, 1) ;

  new Storage.Var ("G-K", "K+ Conductance", 7.2, 1) ;
  new Storage.Var ("G-K-Change", "K+ Conductance Change", NaN, 1) ;
  new Storage.Var ("G-K-SS", "K+ Conductance (Steady State)", NaN, 1) ;
  new Storage.Var ("G-K-Tau", "K+ Conductance Tau", NaN, 1) ;

  new Storage.Var ("I-Na", "Na+ Current", NaN, 1) ;
  new Storage.Var ("I-K", "K+ Current", NaN, 1) ;
  new Storage.Var ("I-Leak", "Leak Current", NaN, 1) ;

  new Storage.Var ("Q", "Charge", 75.0, 1) ;
  new Storage.Var ("Q-Change", "Charge Change (Current)", NaN, 1) ;

  new Integrals.Int ("Q", "Q-Change", 1.0) ;
  new Integrals.Int ("Na-Active", "Na-Active-Change", 0.5) ;
  new Integrals.Int ("Na-Fract-Open", "Na-Fract-Open-Change", 0.01) ;
  new Integrals.Int ("G-K", "G-K-Change", 0.1) ;

  var Obj ;

  Obj = new Curve.Object('Na-Active-Tau') ;
  Obj.Point(-100,  2, 0.1) ;
  Obj.Point( -50, 10, 0) ;
  Obj.Point(  30,  2, 0) ;
  Obj.Fit() ;

  Obj = new Curve.Object('Na-Fract-Active-SS') ;
  Obj.Point(-90, 1, 0) ;
  Obj.Point(-30, 0, 0) ;
  Obj.Fit() ;

  Obj = new Curve.Object('Na-Fract-Open-SS') ;
  Obj.Point(-60, 0, 0) ;
  Obj.Point( 25, 1, 0) ;
  Obj.Fit() ;

  Obj = new Curve.Object('Na-Fract-Open-Tau') ;
  Obj.Point(-100, 0.15, 0.004) ;
  Obj.Point( -40, 0.40, 0) ;
  Obj.Point(  50, 0.10, 0) ;
  Obj.Fit() ;

  Obj = new Curve.Object('G-K-SS') ;
  Obj.Point(-100,  3.6, 0) ;
  Obj.Point(  25, 36.0, 0) ;
  Obj.Fit() ;

  Obj = new Curve.Object('G-K-Tau') ;
  Obj.Point(-100, 4, 0.02) ;
  Obj.Point( -50, 6, 0) ;
  Obj.Point(  30, 1, 0) ;
  Obj.Fit() ;

  SolveControl.AddOption ("1 mS", 1.0, 0.1) ;
  SolveControl.AddOption ("5 mS", 5.0, 0.1) ;
  SolveControl.AddOption ("10 mS", 10.0, 0.1) ;

  Menu.Main = "NerveMenu.HTML" ;
  Menu.LoadMain () ;
  System.Restart() ;
}

Model.Parms = function ()
{ 
}

Model.Dervs = function ()
{ var X = M['X'].Val ; 
  var StartAt ;
  var StopAt ;

  M['Out-1'].Val = 0.0 ;

  if (M['Switch-1'].Val == 1.0)
  { StartAt = M['Time-1'].Val ;
    StopAt = StartAt + M['Tau-1'].Val ;

    if (X >= StartAt && X <= StopAt)
    { M['Out-1'].Val = M['Amp-1'].Val ;
    }
  }

  M['Out-2'].Val = 0.0 ;

  if (M['Switch-2'].Val == 1.0)
  { StartAt = M['Time-2'].Val ;
    StopAt = StartAt + M['Tau-2'].Val ;

    if (X >= StartAt && X <= StopAt)
    { M['Out-2'].Val = M['Amp-2'].Val ;
    }
  }

  M['V'].Val = (-1.0 / M['C'].Val) * M['Q'].Val ;

  M['Na-Inactive'].Val = M['Na-Total'].Val - M['Na-Active'].Val ;
  M['Na-Fract-Active-SS'].Val = Curve.Value('Na-Fract-Active-SS', M['V'].Val) ;
  M['Na-Active-SS'].Val = M['Na-Total'].Val * M['Na-Fract-Active-SS'].Val
  M['Na-Active-Tau'].Val = Curve.Value('Na-Active-Tau', M['V'].Val) ;
  M['Na-Active-Change'].Val = (1.0 / M['Na-Active-Tau'].Val)
    * (M['Na-Active-SS'].Val - M['Na-Active'].Val) ;

  M['Na-Fract-Open-SS'].Val = Curve.Value('Na-Fract-Open-SS', M['V'].Val) ;
  M['Na-Open'].Val = M['Na-Fract-Open'].Val * M['Na-Active'].Val ;
  M['Na-Closed'].Val = M['Na-Total'].Val - M['Na-Open'].Val ;

  M['Na-Fract-Open-Tau'].Val = Curve.Value('Na-Fract-Open-Tau', M['V'].Val) ;
  M['Na-Fract-Open-Change'].Val = (1.0 / M['Na-Fract-Open-Tau'].Val)
    * (M['Na-Fract-Open-SS'].Val - M['Na-Fract-Open'].Val) ;

  M['G-Na'].Val = M['Na-Open'].Val ;

  M['G-K-SS'].Val = Curve.Value('G-K-SS', M['V'].Val) ;
  M['G-K-Tau'].Val = Curve.Value('G-K-Tau', M['V'].Val) ;
  M['G-K-Change'].Val = (1.0 / M['G-K-Tau'].Val) * (M['G-K-SS'].Val - M['G-K'].Val) ;

  M['I-Na'].Val = M['G-Na'].Val * (M['V'].Val - M['V-Na'].Val) ;
  M['I-K'].Val = M['G-K'].Val * (M['V'].Val - M['V-K'].Val) ;
  M['I-Leak'].Val = M['G-Leak'].Val * (M['V'].Val - M['V-Leak'].Val) ;

  M['Q-Change'].Val = M['I-Na'].Val + M['I-K'].Val + M['I-Leak'].Val + M['Out-1'].Val + M['Out-2'].Val ;

}

Model.Wrapup = function ()
{ 
}

/* End */
