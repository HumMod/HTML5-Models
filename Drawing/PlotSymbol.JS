/* PlotSymbol.JS

   Created : 2011-06-18
   Revised : 2011-06-19
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var PlotSymbol = new Object ;

PlotSymbol.Draw = function(X, i)
{ var Idx = top.IPC.GetStoresIndex() ;

  var XVals = top.IPC.GetStores(X.XList[i]) ; 
  var YVals = top.IPC.GetStores(X.YList[i]) ; 

  var A = new GraphTools.Carrier() ;

  var H ;
  var V ;

  for (var j = 0 ; j <= Idx ; j++)
  { A.MinVal = X.XMin ;
    A.Val = XVals [j] ;
    A.MaxVal = X.XMax ;

    A.MinPix = X.Left ;
    A.MaxPix = X.Right ;

    GraphTools.Scaler(A) ;

    H = A.Pix ;

    A.MinVal = X.YMin ;
    A.Val = YVals [j] ;
    A.MaxVal = X.YMax ;

    A.MinPix = X.Bottom ;
    A.MaxPix = X.Top ;

    GraphTools.Scaler(A) ;

    V = A.Pix ;

    SymbolDraw.Symbol(X.Canvas, X.SymbolList[i], H, V) ;
  }
}

/* End */
