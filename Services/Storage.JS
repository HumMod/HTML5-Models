/* Storage.JS

   Created : 2011-06-17
   Revised : 2011-06-17
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var Storage = new Object () ;

Storage.Var = function(Name, Label, IC, Format)
{ this.Name = Name ;
  Storage.VerifyUnique(Name) ;

  this.Label = Label ;
  this.Val ;
  this.IC = IC ;
  this.Format = Format ;

  this.Stores = new Array (Storage.StoresSize) ;

  M[Name] = this ;  
  Storage.AddVar(this) ;
}

Storage.Roster = new Array() ;
Storage.RosterIndex = -1 ;
Storage.StoresSize = 1000 ;
Storage.StoresIndex = -1 ;

Storage.Reset = function()
{ Storage.Roster = new Array() ;
  Storage.RosterIndex = -1 ;
  Storage.StoresIndex = -1 ;
}

Storage.AddVar = function(ThisArg)
{ Storage.RosterIndex++ ;
  Storage.Roster [Storage.RosterIndex] = ThisArg ;
}

Storage.Restart = function()
{ Storage.StoresIndex = -1 ;

  for (var i = 0 ; i <= Storage.RosterIndex ; i++)
  { var X = Storage.Roster[i] ;
    X.Val = X.IC ;
  }
}

Storage.Update = function()
{ Storage.StoresIndex++ ;
  Storage.Redo() ;
}

Storage.Redo = function()
{ for (var i = 0 ; i <= Storage.RosterIndex ; i++)
  { var X = Storage.Roster[i] ;
    X.Stores[Storage.StoresIndex] = X.Val ;
  }
}

Storage.GetVar = function(Name)
{ for (var i = 0 ; i <= Storage.RosterIndex ; i++)
  { var X = Storage.Roster[i] ;

    if (X.Name == Name)
    { return (X) ;
    }
  }

  Storage.Missing(Name) ;
}

Storage.GetVal = function(Name)
{ return Storage.GetVar(Name).Val ;
}

Storage.PutVal = function(Name, Value)
{ Storage.GetVar(Name).Val = Value ;
} 

Storage.GetLabel = function(Name)
{ return Storage.GetVar(Name).Label ;
} 

Storage.GetFormat = function(Name)
{ return Storage.GetVar(Name).Format ;
} 

Storage.GetStores = function(Name)
{ return Storage.GetVar(Name).Stores ;
} 

Storage.VerifyUnique = function(Name)
{ for (var i = 0 ; i <= Storage.RosterIndex ; i++)
  { var O = Storage.Roster[i] ;

    if (O.Name == Name)
    { Storage.DuplicateName(Name) ;
    }
  }
}

Storage.DuplicateName = function(Name)
{ var Msg = "Duplicate variable name in roster : " ;
  Basics.MessageBox(Msg + Name) ;
}

Storage.Missing = function(Name)
{ Basics.CantFind("Storage", Name) ;
}

Storage.Install = function ()
{ new Storage.Var ("X", "X", 0.0, 1) ;
}

/* End */
