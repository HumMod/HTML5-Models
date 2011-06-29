/* Random.JS

   Created : 2011-06-24
   Revised : 2011-06-24
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Random = new Object ;

Random.White = function(Min, Max)
{ var Scale = Max - Min ;
  return Min + Scale * Math.random () ;
}

Random.Normal = function (Mean, StdDev)
{ var Sum = 0.0 ;

  for (var i = 0 ; i <= 6 ; i++)
  { Sum += Math.random() ;
  }

  return Mean + StdDev * (0.7071 * Sum - 2.121) ;
}

/* End */
