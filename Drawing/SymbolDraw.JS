/* SymbolDraw.JS

   Created : 2011-06-22
   Revised : 2011-06-22
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var SymbolDraw = new Object ;

SymbolDraw.Symbol = function(Canvas, Name, H, V)
{ var Obj = Symbol.Get(Name) ;
  var Type = Obj.Type.toUpperCase() ;

  switch(Type)
  { case "BOX" : SymbolDraw.Box(Canvas, Obj, H, V) ; break ;
    case "CIRCLE" : SymbolDraw.Circle(Canvas, Obj, H, V) ; break ;
    case "X" : SymbolDraw.X(Canvas, Obj, H, V) ; break ;
    default : top.Basics.MessageBox("Unknown symbol type : " + Type) ;
  }
}

SymbolDraw.Box = function(Canvas, Obj, H, V)
{ var Ref = Reference.Get(Canvas) ;
  var C = Ref.getContext('2d') ;

  var Del = Obj.Size ;

  C.strokeStyle = Obj.Color ;
  C.lineWidth = Obj.LineWidth ;

  C.beginPath() ;
  
  C.moveTo(H-Del, V-Del) ;
  C.lineTo(H+Del, V-Del) ;
  C.lineTo(H+Del, V+Del) ;
  C.lineTo(H-Del, V+Del) ;
  C.lineTo(H-Del, V-Del) ;

  C.stroke() ;
}

SymbolDraw.Circle = function(Canvas, Obj, H, V)
{ var Ref = Reference.Get(Canvas) ;
  var C = Ref.getContext('2d') ;

  var Del = Obj.Size ;

  C.strokeStyle = Obj.Color ;
  C.lineWidth = Obj.LineWidth ;

  C.beginPath() ;
  C.arc(H, V, Del, 0, Math.PI * 2, true) ;
  C.stroke() ;
}

SymbolDraw.X = function(Canvas, Obj, H, V)
{ var Ref = Reference.Get(Canvas) ;
  var C = Ref.getContext('2d') ;

  var Del = Obj.Size ;

  C.strokeStyle = Obj.Color ;
  C.lineWidth = Obj.LineWidth ;

  C.beginPath() ;
  
  C.moveTo(H-Del, V-Del) ;
  C.lineTo(H+Del, V+Del) ;
  C.moveTo(H+Del, V-Del) ;
  C.lineTo(H-Del, V+Del) ;

  C.stroke() ;
}

/* End */
