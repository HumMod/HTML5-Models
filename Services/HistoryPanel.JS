/* HistoryPanel.JS

   Created : 2011-06-17
   Revised : 2011-06-17
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var HistoryPanel = new Object () ;

HistoryPanel.Show = function ()
{ var Ref = PanelReferences.GetReference () ;

  WriteTools.Open(Ref) ;
  WriteTools.HTML5Begin("History") ;

  WriteTools.Title("History") ;
  WriteTools.WriteLine("<p>") ;

  WriteTools.WriteLine("Stores Index = " + Storage.StoresIndex) ;
  WriteTools.WriteLine("<p>") ;

  WriteTools.BeginBorderTable() ;
  WriteTools.BeginCenteredRow() ;

  for (var i = 0 ; i <= Storage.RosterIndex ; i++)
  { WriteTools.WriteHeader(Storage.Roster[i].Name) ;
  }  

  WriteTools.EndRow() ;

  for (var j = 0 ; j <= Storage.StoresIndex ; j++)
  { WriteTools.BeginCenteredRow() ;
  
    for (var i = 0 ; i <= Storage.RosterIndex ; i++)
    { var X = Storage.Roster[i] ;
      WriteTools.WriteCell(Basics.RoundTo (X.Format, X.Stores[j])) ;
    }  

    WriteTools.EndRow() ;
  }

  WriteTools.EndTable() ;

  WriteTools.HTML5End() ;
  WriteTools.Close() ;
}

/* End */
