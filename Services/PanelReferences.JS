/* PanelReferences.JS

   Created : 2011-05-30
   Revised : 2011-06-01
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var PanelReferences = new Object () ;

PanelReferences.GetReference = function ()
{ var Ref = document.getElementById ("Panels") ;
  var Msg = "Panels reference is undefined." ;
  Assert.OK (Ref != undefined, Msg) ;
  return Ref ;
}

PanelReferences.GetElement = function (ID)
{ var Ref = window.frames[1].document.getElementById(ID) ;
  var Msg = "Panels element is undefined." ;
  Assert.OK (Ref != undefined, Msg) ;
  return Ref ;
}

PanelReferences.WriteImage = function (ID, Image)
{ var Ref = PanelReferences.GetElement (ID) ;
  Ref.innerHTML = Image ;
}

/* End */
