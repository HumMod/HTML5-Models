/* Browser.JS

   Created : 2010-07-13
   Revised : 2010-07-13
   Author : Tom Coleman
   Copyright : 2010-2010
   By : University of Mississippi Medical Center
*/

var Browser = new Object ;

Browser.Browser ;

Browser.AppName ;
Browser.AppCodeName ;
Browser.AppVersion ;
Browser.Vendor
Browser.Platform ;
Browser.UserAgent ;
Browser.JavaEnabled ;
Browser.CookieEnabled ;

Browser.Loader = function ()
{ Browser.Install () ;
  Browser.Render () ;
}

Browser.Install = function()
{ Browser.AppName = navigator.appName ;
  Browser.AppCodeName = navigator.appCodeName ;
  Browser.AppVersion = navigator.appVersion ;

  if (navigator.vendor == undefined || navigator.vendor == "")
  { Browser.Vendor = "Not Specified" ;
  }
  else
  { Browser.Vendor = navigator.vendor ;
  }

  Browser.Platform = navigator.platform ;
  Browser.UserAgent = navigator.userAgent ;
  Browser.JavaEnabled = navigator.javaEnabled() ;
  Browser.CookieEnabled = navigator.cookieEnabled ;

  if (In(Browser.UserAgent, "Firefox"))
  { Browser.Browser = "Firefox" ;
  }
  else if (In(Browser.Vendor, "Apple"))
  { Browser.Browser = "Safari" ;
  }
  else if (In(Browser.AppName, "Opera"))
  { Browser.Browser = "Opera" ;
  }
  else if (In(Browser.UserAgent, "Chrome"))
  { Browser.Browser = "Chrome" ;
  }
  else if (In(Browser.UserAgent, "MSIE"))
  { Browser.Browser = "Internet Explorer" ;
  }
  else if (In(Browser.Vendor, "iCab"))
  { Browser.Browser = "iCab" ;
  }
  else if (In(Browser.Vendor, "KDE"))
  { Browser.Browser = "Konqueror" ;
  }
  else if (In(Browser.Vendor, "Camino"))
  { Browser.Browser = "Camino" ;
  }
  else if (In(Browser.UserAgent, "OmniWeb"))
  { Browser.Browser = "OmniWeb" ;
  }
  else if (In(Browser.UserAgent, "Gecko"))
  { Browser.Browser = "Mozilla" ;
  }
  else
  { Browser.Browser = "Can't Be Determined" ;
  }

  function In(Text, Frag)
  { var Index = Text.indexOf(Frag) ;

    if (Index == -1)
    { return (false) ;
    }
    else
    { return (true) ;
    }
  }
}


Browser.Render = function ()
{ var Version = FirstTerm(Browser.AppVersion) ;
  var User = FirstTerm(Browser.UserAgent) ;

  var Java = Browser.JavaEnabled ? "Yes" : "No" ;
  var Cookie = Browser.CookieEnabled ? "Yes" : "No" ;

  document.getElementById ("Browser").innerHTML = Browser.Browser ;
  document.getElementById ("AppName").innerHTML = Browser.AppName ;
  document.getElementById ("AppCodeName").innerHTML = Browser.AppCodeName ;
  document.getElementById ("AppVersion").innerHTML = Version ;
  document.getElementById ("Vendor").innerHTML = Browser.Vendor ;
  document.getElementById ("Platform").innerHTML = Browser.Platform ;
  document.getElementById ("UserAgent").innerHTML = User ;
  document.getElementById ("JavaEnabled").innerHTML = Java ;
  document.getElementById ("CookieEnabled").innerHTML = Cookie ;

  function FirstTerm($)
  { return ($.substring(0, $.indexOf(" "))) ;
  }
}

Browser.NoSliders = function()
{ if (Browser.Browser == "Firefox")
  { return (true) ;
  }

  if (Browser.Platform == "iPad")
  { return (true) ;
  }

  if (Browser.Platform == "iPhone")
  { return (true) ;
  }

  if (Browser.Browser == "Internet Explorer")
  { return (true) ;
  }

  return (false) ;
}

/* End */
