/* PlotLine.JS

   Created : 2011-06-18
   Revised : 2011-06-19
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var PlotLine = new Object () ;

PlotLine.Draw = function(X, i)
{ var Idx = top.IPC.GetStoresIndex() ;

  var XVals = top.IPC.GetStores(X.XList[i]) ; 
  var YVals = top.IPC.GetStores(X.YList[i]) ; 

  var H0 ;
  var H1 ;

  var V0 ;
  var V1 ;

  var A = new GraphTools.Carrier() ;

  for (var j = 1 ; j <= Idx ; j++)
  { A.MinVal = X.XMin ;
    A.MaxVal = X.XMax ;
    A.Val = XVals [j] ;
    A.MinPix = X.Left ;
    A.MaxPix = X.Right ;

    GraphTools.Scaler(A) ;
    H1 = A.Pix

    A.Val = XVals [j-1] ;

    GraphTools.Scaler(A) ;
    H0 = A.Pix ;

    A.MinVal = X.YMin ;
    A.MaxVal = X.YMax ;
    A.Val = YVals [j] ;
    A.MinPix = X.Bottom ;
    A.MaxPix = X.Top ;

    GraphTools.Scaler(A) ;
    V1 = A.Pix

    A.Val = YVals [j-1] ;

    GraphTools.Scaler(A) ;
    V0 = A.Pix ;

    var CS = new GraphTools.CarrySegment() ;

    CS.Canvas = X.Canvas ;
    CS.Color = X.ColorList[i] ;

    CS.H0 = H0 ;
    CS.H1 = H1 ;
    CS.V0 = V0 ;
    CS.V1 = V1 ;

    GraphTools.DrawSegment(CS) ;
  }
}

/* End */
