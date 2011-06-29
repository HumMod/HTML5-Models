/* Drawing.JS

   Created : 2011-06-19
   Revised : 2011-06-19
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Drawing = new Object ;

Drawing.IsOverlay = false ;

Drawing.Restart = function ()
{ Drawing.IsOverlay = false ;
  Painter.Paint() ;
}

Drawing.Overlay = function ()
{ Drawing.IsOverlay = true ; ;
  Painter.Paint() ;
}

Drawing.Paint = function ()
{ Painter.Paint() ;
}

/* End */

