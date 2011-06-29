/* GraphTools.JS

   Created : 2011-06-18
   Revised : 2011-06-18
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var GraphTools = new Object () ;

GraphTools.Carrier = function()
{ this.MinVal ;
  this.Val ;
  this.MaxVal ;

  this.MinPix ;
  this.Pix ;
  this.MaxPix ;
}

GraphTools.Scaler = function(A)
{ var K = (A.MaxPix - A.MinPix) / (A.MaxVal - A.MinVal) ;
  A.Pix = K * (A.Val - A.MinVal) + A.MinPix ;
}

GraphTools.CarrySegment = function()
{ this.Context ;
  this.H0 ;
  this.H1 ;
  this.V0 ;
  this.V1 ;
  this.Color = "black" ;
}

GraphTools.DrawSegment = function(A)
{ var Ref = Reference.Get(A.Canvas) ;
  var C = Ref.getContext('2d') ;

  C.strokeStyle = A.Color ;
  C.beginPath() ;
  C.moveTo(A.H0, A.V0)
  C.lineTo(A.H1, A.V1)
  C.stroke() ;
}

/* End */
