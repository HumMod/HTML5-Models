/* SystemPanel.JS

   Created : 2011-06-18
   Revised : 2011-06-18
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var SystemPanel = new Object () ;

SystemPanel.Show = function ()
{ var Ref = PanelReferences.GetReference () ;

  WriteTools.Open(Ref) ;
  WriteTools.HTML5Begin("System") ;

  WriteTools.Title("System") ;
  WriteTools.WriteLine("<p>") ;

  WriteTools.BeginBorderTable() ;

  WriteTools.BeginCenteredRow() ;
  WriteTools.WriteCell("X") ;
  WriteTools.WriteCell(System.X) ;
  WriteTools.EndRow() ;

  WriteTools.BeginCenteredRow() ;
  WriteTools.WriteCell("Dx") ;
  WriteTools.WriteCell(System.Dx) ;
  WriteTools.EndRow() ;

  WriteTools.BeginCenteredRow() ;
  WriteTools.WriteCell("Default Dx") ;
  WriteTools.WriteCell(System.DefaultDx) ;
  WriteTools.EndRow() ;

  WriteTools.BeginCenteredRow() ;
  WriteTools.WriteCell("Truncated Dx") ;
  WriteTools.WriteCell(System.TruncatedDx) ;
  WriteTools.EndRow() ;

  WriteTools.BeginCenteredRow() ;
  WriteTools.WriteCell("Solution Interval") ;
  WriteTools.WriteCell(System.SolutionInterval) ;
  WriteTools.EndRow() ;

  WriteTools.BeginCenteredRow() ;
  WriteTools.WriteCell("Display Interval") ;
  WriteTools.WriteCell(System.DisplayInterval) ;
  WriteTools.EndRow() ;

  WriteTools.BeginCenteredRow() ;
  WriteTools.WriteCell("Stop At") ;
  WriteTools.WriteCell(System.StopAt) ;
  WriteTools.EndRow() ;

  WriteTools.BeginCenteredRow() ;
  WriteTools.WriteCell("Display At") ;
  WriteTools.WriteCell(System.DisplayAt) ;
  WriteTools.EndRow() ;

  WriteTools.BeginCenteredRow() ;
  WriteTools.WriteCell("Previous X") ;
  WriteTools.WriteCell(System.PreviousX) ;
  WriteTools.EndRow() ;

  WriteTools.BeginCenteredRow() ;
  WriteTools.WriteCell("Integration Error") ;
  WriteTools.WriteCell(System.IntegrationError) ;
  WriteTools.EndRow() ;

  WriteTools.BeginCenteredRow() ;
  WriteTools.WriteCell("Steps") ;
  WriteTools.WriteCell(System.Steps) ;
  WriteTools.EndRow() ;

  WriteTools.BeginCenteredRow() ;
  WriteTools.WriteCell("Hits") ;
  WriteTools.WriteCell(System.Hits) ;
  WriteTools.EndRow() ;

  WriteTools.BeginCenteredRow() ;
  WriteTools.WriteCell("Retries") ;
  WriteTools.WriteCell(System.Retries) ;
  WriteTools.EndRow() ;

  WriteTools.EndTable() ;
  WriteTools.HTML5End() ;
  WriteTools.Close() ;
}

/* End */
