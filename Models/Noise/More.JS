/* Results.JS

   Model : Low-PassFilter
   Panel : More
   Created : 2011-06-24
   Revised : 2011-06-24
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("SigAmp") ;
  new Value.Object("SigFreq") ;
  new Value.Object("NoiseAmp") ;

  new Value.Object("Cutoff") ;
  new Value.Object("K") ;

  top.IPC.NewPanel() ;
}

/* End */

