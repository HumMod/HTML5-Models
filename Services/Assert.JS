/* Assert.JS

   Created : 2011-05-31
   Revised : 2011-05-31
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Assert = new Object ;

Assert.OK = function(OK, Label)
{ if (! OK)
  { window.alert(Label) ;
  }
}

/* End */
