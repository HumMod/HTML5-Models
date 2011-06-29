/* MinMax.JS

   Created : 2011-06-18
   Revised : 2011-06-18
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var MinMax = new Object () ;

MinMax.GetMin = function(Names, PlotsIndex, StoresIndex)
{ var Stores ;
  var Min ;

  Stores = top.IPC.GetStores(Names[0]) ;
  Min = Stores[0] ;

  for (var i = 0 ; i <= PlotsIndex ; i++)
  { Stores = top.IPC.GetStores(Names[i]) ;

    for (var j = 0 ; j <= StoresIndex ; j++)
    { if (Stores[j] < Min)
      { Min = Stores[j] ;
      }
    }
  }

  return (Min) ;
}

MinMax.GetMax = function(Names, PlotsIndex, StoresIndex)
{ var Stores ;
  var Max ;

  Stores = top.IPC.GetStores(Names[0]) ;
  Max = Stores[0] ;

  for (var i = 0 ; i <= PlotsIndex ; i++)
  { Stores = top.IPC.GetStores(Names[i]) ;

    for (var j = 0 ; j <= StoresIndex ; j++)
    { if (Stores[j] > Max)
      { Max = Stores[j] ;
      }
    }
  }

  return (Max) ;
}

/* End */
