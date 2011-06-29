/* Info.JS

   Created : 2011-06-22
   Revised : 2011-06-22
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Info = new Object ;

Info.Object = function(Name)
{ this.Name = Name ;
  this.Text = "" ;

  Info.Add(this) ;
}

Info.List = new Array() ;
Info.Index = -1 ;

Info.Add = function(Object)
{ Info.Index++ ;
  Info.List[Info.Index] = Object ;
}

Info.Object.prototype.Add = function(Line)
{ this.Text += Line + "\n" ;
}

Info.Show = function(Name)
{ for ( var i = 0 ; i <= Info.Index ; i++)
  { var Obj = Info.List[i] ;
  
    if (Obj.Name == Name)
    { top.Basics.MessageBox(Obj.Text) ;
      return ;
    }
  }
  
  top.Basics.CantFind("Info", Name) ;
}

/* End */
