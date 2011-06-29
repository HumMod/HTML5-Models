/* Results.JS

   Model : PStewartpH
   Panel : Results
   Created : 2011-06-26
   Revised : 2011-06-27
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Results = new Object ;

Results.NewPanel = function ()
{ new Value.Object("X") ;

  new Value.Object("pH") ;
  new Value.Object("H-Ion") ;
  new Value.Object("OH-Ion") ;
  new Value.Object("ATot-mEq") ;
  new Value.Object("A-mEq") ;
  new Value.Object("HA-mEq") ;
  new Value.Object("SID-mEq") ;
  new Value.Object("pCO2") ;
  new Value.Object("CO2-mMol") ;
  new Value.Object("H2CO3-uMol") ;
  new Value.Object("HCO3-uMol") ;
  new Value.Object("CO3-uMol") ;

  top.IPC.NewPanel() ;
}

/* End */

