/* Painter.JS

   Created : 2011-06-18
   Revised : 2011-06-19
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Painter = new Object() ;

Painter.List = new Array () ;

Painter.Add = function (Object)
{ Painter.List[Painter.List.length] = Object ;
}

Painter.Paint = function ()
{ var MaxIndex = Painter.List.length - 1 ;

  for (var i = 0 ; i <= MaxIndex ; i++)
  { var Obj = Painter.List[i] ;
    Obj.Paint() ;
  }
}

/* End */
