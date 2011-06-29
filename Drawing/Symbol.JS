/* Symbol.JS

   Created : 2011-06-22
   Revised : 2011-06-22
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Symbol = new Object ;

Symbol.Object = function(Name, Type, Size, Color, LineWidth)
{ this.Name = Name ;
  this.Type = Type ;
  this.Size = Size ;
  this.Color = Color ;
  this.LineWidth = LineWidth ;

  Symbol.Add(this) ;
}

Symbol.List = new Array() ;
Symbol.Index = -1 ;

Symbol.Add = function(Object)
{ Symbol.Index++ ;
  Symbol.List[Symbol.Index] = Object ;
}

Symbol.Get = function(Name)
{ for ( var i = 0 ; i <= Symbol.Index ; i++)
  { var X = Symbol.List[i] ;
  
    if (X.Name == Name)
    { return (X) ;
    }
  }
  
  top.Basics.CantFind("Symbol", Name) ;
}

/* End */
