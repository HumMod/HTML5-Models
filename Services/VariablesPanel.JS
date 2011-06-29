/* VariablesPanel.JS

   Created : 2011-06-17
   Revised : 2011-06-17
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var VariablesPanel = new Object () ;

VariablesPanel.Show = function ()
{ var Ref = PanelReferences.GetReference () ;

  WriteTools.Open(Ref) ;
  WriteTools.HTML5Begin("Variables") ;

  WriteTools.Title("Variables") ;
  WriteTools.WriteLine("<p>") ;

  WriteTools.WriteLine("Variable Count = " + (Storage.RosterIndex + 1)) ;
  WriteTools.WriteLine("<p>") ;

  WriteTools.BeginBorderTable() ;

  WriteTools.BeginCenteredRow() ;
  WriteTools.WriteLeftHeader("Name") ;
  WriteTools.WriteLeftHeader("Label") ;
  WriteTools.WriteHeader("IC") ;
  WriteTools.WriteHeader("Now") ;
  WriteTools.WriteHeader("Format") ;
  WriteTools.EndRow() ;
  
  for (var i = 0 ; i <= Storage.RosterIndex ; i++)
  { var X = Storage.Roster[i] ;
  
    WriteTools.BeginCenteredRow() ;
    WriteTools.WriteLeftCell(X.Name) ;
    WriteTools.WriteLeftCell(X.Label) ;
    WriteTools.WriteCell(X.IC) ;
    WriteTools.WriteCell(Basics.RoundTo (X.Format, X.Val)) ;
    WriteTools.WriteCell(X.Format) ;
    WriteTools.EndRow() ;
  }  
  
  WriteTools.EndTable() ;

  WriteTools.HTML5End() ;
  WriteTools.Close() ;
}

/* End */
