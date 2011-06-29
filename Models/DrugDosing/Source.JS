/* DrugDosing.JS

   Created : 2010-06-14
   Revised : 2010-08-03
   Author : Tom Coleman
   Copyright : 2010-2010
   By : University of Mississippi Medical Center
*/

var Source = new Object() ;

Source.Text ;

Source.Clear = function()
{ Source.Text = "" ;
}

Source.AddLine = function(Text)
{ Source.Text += Text + "\n" ;
}

Source.Header = function()
{ Source.Clear() ;
  var $ = Source.AddLine ;

  $("* Drug Dosing")
  $("")
  $("* Created : 2010-06-14")
  $("* Revised : 2010-08-03")
  $("* Author : Tom Coleman")
  $("* Copyright : 2010-2010")
  $("* By : University of Mississippi Medical Center")
  $("")
  $(" modelname : Drug Dosing")
  $("")
  $(" support : Overview")
  $(" support : User's Guide")
  $(" support : Email")
  $("")
  $(" panel : Summary")
  $(" panel : Variables")
  $(" panel : History")
  $(" panel : Export")
  $(" panel : System")
  $("")
  $("* End")

  return (Source.Text) ;
}

Source.Roster = function()
{ Source.Clear() ;
  var $ = Source.AddLine ;

  $("* Roster")
  $("")
  $(" var : X | Time | 0.0 | 2")

  $(" var : K | K | 2.0 | 1")
  $(" var : Dose | Dose | 5.0 | 1")
  $(" var : Repeats | Times A Day | 4.0 | 1")
  $(" var : Last | Last Dose | 0.0| 1")
  $(" var : Peak | Peak Quantity | 0.0 | 1")
  $(" var : Interval | Interval || 2")

  $(" var : Q | Q | 0.0 | 1")
  $(" var : dQ_dX | dQ/dX || 1")
  $("")
  $("* End")

  return (Source.Text) ;
}

Source.Definitions = function()
{ Source.Clear() ;
  var $ = Source.AddLine ;

  $("* Definitions")
  $("")
  $(" integral : Q | dQ_dX")
  $("")
  $("* End")

  return (Source.Text) ;
}

Source.Functions = function()
{ Source.Clear() ;
  var $ = Source.AddLine ;

  $("* Functions")
  $("")

  $(" function : Parms ")
  $(": { 'Interval' = 1.0 / 'Repeats'")
  $(": }")
  $("")

  $(" function : Dervs ")
  $(": { 'dQ_dX' = -'K' * 'Q'")
  $(": }")
  $("")

  $(" function : Wrapup ")
  $(": { if ('X' >= 'Last' + 'Interval')")
  $(":   { 'Last' += 'Interval'")
  $(":     'Q' += 'Dose'")
  $(":   }")

  $(":   if ('Q' >= 'Peak')")
  $(":   { 'Peak' = 'Q'")
  $(":   }")
  $(": }")
  $("")
  $("* End")

  return (Source.Text) ;
}

Source.Control = function()
{ Source.Clear() ;
  var $ = Source.AddLine ;

  $("* Control")
  $("")
  $(" go : 2 Days | 2 | 0.05")
  $("")
  $("* End")

  return (Source.Text) ;
}

Source.Panels = function()
{ Source.Clear() ;
  var $ = Source.AddLine ;

  $("* Panels")
  $("")
  $("panel : Summary")
  $("title : Summary")
  $("space")
  $("number : X ")
  $("space")

  $("number : Q ")
  $("number : dQ_dX | indent ")
  $("space")
  $("number : Dose ")
  $("slider : Dose | 0 | 20 | 1 ")
  $("space")
  $("number : Repeats ")
  $("slider : Repeats | 0 | 10 | 1 ")
  $("number : Interval ")
  $("space")
  $("number : K ")
  $("slider : K | 0 | 10 | 1 ")
  $("space")
  $("number : Peak ")

  $("newcolumn")

  $("graph : XY | 240 | 300 ")
  $("xscale : 0 | Days | 2 ")
  $("yscale : 0 | Q | 15 ")
  $("line : X | Q | red ")
  $("done")

  $("done")
  $("")
  $("* End")

  return (Source.Text) ;
}

Source.Support = function()
{ Source.Clear() ;
  var $ = Source.AddLine ;

  $("* Support")
  $("")
  $("doc : Overview")
  $("title : Overview")
  $("break")
  $("text : This is Drug Dosing. The model ")
  $("text : demonstrates the generation of pulsatile ")
  $("text : arterial pressure in response to pulsatile ")
  $("text : ventricular outflow. ")
  $("paragraph")
  $("bold : The Blood Vessel. ")
  $("text : The model is built around an elastic ")
  $("text : arterial compartment - the Windkessel. ")
  $("text : The compartment has a compliance (C) and ")
  $("text : an unstressed volume (V0). It generates ")
  $("text : pulsatile blood pressure in response to ")
  $("text : blood volume changes. ")
  $("break")
  $("image : ../Pressure-VolumeCurve.BMP ")
  $("break")
  $("text : The term ")
  $("italics : Windkessel ")
  $("text : is German. Its means roughly ")
  $("italics : air container ")
  $("text : . The important concept here is that ")
  $("text : it is the elastic properties of an artery ")
  $("text : that determine how much pressure a given ")
  $("text : volume will generate. ")
  $("paragraph")
  $("bold : Blood Flow. ")
  $("text : The Windkessel receives blood flow from ")
  $("text : the ventricle through an aortic valve and in ")
  $("text : turn delivers blood flow to the periphery ")
  $("text : through a vascular conductance. ")
  $("paragraph")
  $("text : Blood flows at any instant in time are equal to ")
  $("text : the product of the pressure gradient and ")
  $("text : vascular conductance. ")
  $("paragraph")
  $("bold : Blood Volume. ")
  $("text : Blood volume is the integral over time of the ")
  $("text : blood inflow from the ventricle minus the blood ")
  $("text : outflow to the periphery. The blood volume is ")
  $("text : calculated using a differential equation. ")
  $("paragraph")
  $("text : End ")
  $("done")
  $("")
  $("* End")

  return (Source.Text) ;
}

Source.Get = function()
{ Composite.Set("Header", Source.Header()) ;
  Composite.Set("Roster", Source.Roster()) ;
  Composite.Set("Definitions", Source.Definitions()) ;
  Composite.Set("Functions", Source.Functions()) ;
  Composite.Set("Control", Source.Control()) ;
  Composite.Set("Panels", Source.Panels()) ;
  Composite.Set("Support", Source.Support()) ;
}

/* End */
