/* WriteTools.JS

   Created : 2011-06-17
   Revised : 2011-06-17
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var WriteTools = new Object () ;

WriteTools.PR ;

// Open ==================================================

WriteTools.Open = function(PanelReference)
{ WriteTools.PR = PanelReference.contentWindow ;
  WriteTools.PR.document.open();
}

// Close =================================================

WriteTools.Close = function()
{ WriteTools.PR.document.close() ;
}

// HTML5 Begin ===========================================

WriteTools.HTML5Begin = function(Title)
{ WriteTools.WriteLine("<!DOCTYPE html>") ;
  WriteTools.WriteLine("<html>") ;
  WriteTools.WriteLine("<head>") ;
  WriteTools.WriteLine("<title>" + Title + "</title>") ;

  WriteTools.WriteLine("<style>") ;
  WriteTools.WriteLine("body") ;
  WriteTools.WriteLine("{ font-family: Arial, Helvetica, sans-serif ;") ;
  WriteTools.WriteLine("  font-size: 10pt ;") ;
  WriteTools.WriteLine("}") ;
  WriteTools.WriteLine("ul") ;
  WriteTools.WriteLine("{ margin-left:-20px ;") ;
  WriteTools.WriteLine("}") ;
  WriteTools.WriteLine("li") ;
  WriteTools.WriteLine("{ margin-left:0px ;") ;
  WriteTools.WriteLine("}") ;
  WriteTools.WriteLine(".Titles") ;
  WriteTools.WriteLine("{ font-family: 'Comic Sans MS', 'Lucida Casual', sans-serif ;") ;
  WriteTools.WriteLine("  font-size: 12pt ;") ;
  WriteTools.WriteLine("  font-weight:bold ;") ;
  WriteTools.WriteLine("  color:red ;") ;
  WriteTools.WriteLine("}") ;
  WriteTools.WriteLine(".Indented") ;
  WriteTools.WriteLine("{ margin-left:16px; ") ;
  WriteTools.WriteLine("}") ;
  WriteTools.WriteLine(".Links") ;
  WriteTools.WriteLine("{ font-family: 'Comic Sans MS', 'Lucida Casual', sans-serif ;") ;
  WriteTools.WriteLine("  font-size: 12pt ;") ;
  WriteTools.WriteLine("  font-weight:bold ;") ;
  WriteTools.WriteLine("  color:blue ;") ;
  WriteTools.WriteLine("}") ;
  WriteTools.WriteLine("</style") ;

  WriteTools.WriteLine("</head>") ;
  WriteTools.WriteLine("<body>") ;
}

// HTML5 End =============================================

WriteTools.HTML5End = function()
{ WriteTools.WriteLine("</body>") ;
  WriteTools.WriteLine("</html>") ;
}

// Write =================================================

WriteTools.Write = function(Content)
{ WriteTools.PR.document.write(Content) ;
}

// Write Line ============================================

WriteTools.WriteLine = function(Line)
{ WriteTools.PR.document.writeln(Line) ;
}

// Table =================================================

WriteTools.BeginTable = function()
{ WriteTools.WriteLine("<table>") ;
}

WriteTools.BeginBorderTable = function()
{ WriteTools.WriteLine("<table border='1' cellspacing='0'>") ;
}

WriteTools.EndTable = function()
{ WriteTools.WriteLine("</table>") ;
}

// Row ===================================================

WriteTools.BeginRow = function()
{ WriteTools.WriteLine("<tr>") ;
}

WriteTools.BeginCenteredRow = function()
{ WriteTools.WriteLine("<tr align='CENTER'>") ;
}

WriteTools.EndRow = function()
{ WriteTools.WriteLine("</tr>") ;
}

// Cell ==================================================

WriteTools.WriteCell = function(Content)
{ WriteTools.WriteLine("<td>" + Content + "</td>") ;
}

WriteTools.WriteLeftCell = function(Content)
{ WriteTools.WriteLine("<td align='LEFT'>" + Content + "</td>") ;
}

WriteTools.WriteRightCell = function(Content)
{ WriteTools.WriteLine("<td align='RIGHT'>" + Content + "</td>") ;
}

// Header ================================================

WriteTools.WriteHeader = function(Content)
{ WriteTools.WriteLine("<th>" + Content + "</th>") ;
}

WriteTools.WriteLeftHeader = function(Content)
{ WriteTools.WriteLine("<th align='LEFT'>" + Content + "</th>") ;
}

WriteTools.WriteRightHeader = function(Content)
{ WriteTools.WriteLine("<th align='RIGHT'>" + Content + "</th>") ;
}

// Support ===============================================

WriteTools.Support = function(Text)
{ WriteTools.Open(Frames.GetSupport()) ;
  WriteTools.HTML5Begin("Support") ;
  WriteTools.Write(Text) ;
  WriteTools.HTML5End() ;
  WriteTools.Close() ;
}

// Panel ==================================================

WriteTools.Panel = function(Text)
{ WriteTools.Open(Frames.GetPanel()) ;
  WriteTools.HTML5Begin("Panel") ;
  WriteTools.Write(Text) ;
  WriteTools.HTML5End() ;
  WriteTools.Close() ;
}

// Code ===================================================

WriteTools.Code = function(Code)
{ WriteTools.Open(Frames.GetPanel()) ;
  WriteTools.HTML5Begin("Code") ;
  WriteTools.Write("<pre>") ;
  WriteTools.Write(Code) ;
  WriteTools.Write("</pre>") ;
  WriteTools.HTML5End() ;
  WriteTools.Close() ;
}

// Title ==================================================

WriteTools.Title = function(Text)
{ var OpenSpan = "<span class=\'Titles\'>" ;
  var CloseSpan = "</span>" ;

  WriteTools.WriteLine(OpenSpan + Text + CloseSpan) ;
}

/* End */
