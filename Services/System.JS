/* System.JS

   Created : 2011-06-18
   Revised : 2011-06-19
   Author : Tom Coleman
   Copyright : 2011-2011
   By : University of Mississippi Medical Center
*/

var System = new Object () ;

// Global Variables ======================================

System.X ;
System.Dx ;
System.DefaultDx ;
System.TruncatedDx ;
System.SolutionInterval ;
System.DisplayInterval ;
System.StopAt ;
System.DisplayAt ;
System.PreviousX ;
System.IntegrationError ;
System.Steps ;
System.Hits ;
System.Retries ;

// Restart ===============================================

System.Restart = function()
{ Storage.Restart() ;

  System.X = M['X'].Val ;
  System.Steps = 0 ;
  System.Hits = 0 ;
  System.Retries = 0 ;

  System.Parms() ;
  System.Dervs() ;
  System.Wrapup() ;

  Storage.Update() ;
}

System.RestartClick = function()
{ System.Restart() ;
  IPC.Restart() ;
}

System.OverlayClick = function()
{ System.Restart() ;
  IPC.Overlay() ;
}

// Solve =============================================

System.Solve = function(Solution, Display)
{ System.SolutionInterval = Solution ;
  System.DisplayInterval = Display ;

  if (System.DefaultDx == undefined)
  { if (System.DisplayInterval == undefined)
    { System.DefaultDx = System.SolutionInterval / 100.0 ;
    }
    else
    { System.DefaultDx = System.DisplayInterval / 2 ;
    }
  }

  System.StopAt = System.X + System.SolutionInterval ;

  while (System.X < System.StopAt)
  { System.DisplayAt = Math.min (System.X + System.DisplayInterval, System.StopAt) ;

    while (System.X < System.DisplayAt)
    { Integrals.Setup() ;
      System.PreviousX = System.X ;

      var Done = false ;

      do
      { System.X = Math.min (System.PreviousX + System.DefaultDx, System.DisplayAt)
        System.Dx = System.X - System.PreviousX ;

        M['X'].Val = System.X ;

        if (System.Dx < System.DefaultDx)
        { System.TruncatedDx = true ;
        }
        else
        { System.TruncatedDx = false ;
        }

        System.Steps++ ;
      
        Integrals.Update() ;   
        System.Dervs() ;

        System.IntegrationError = Integrals.GetError() ;

        if (System.IntegrationError == undefined)
        { Done = true ;
          System.Hits++ ;
        }
        else
        { if (System.IntegrationError <= 1.5)
          { Done = true ;
            System.Hits++ ;
          }
          else
          { System.Retries++;
          }

          if (System.IntegrationError >= 1.5)
          { System.DefaultDx *= 0.5 ;
          }

          if ((System.IntegrationError <= 0.5) & (! System.TruncatedDx))
          { System.DefaultDx *= 1.2 ;
          }
        }
      }
      while (! Done)

      System.Wrapup() ;
    }  
    Storage.Update() ;
  }
  IPC.Paint() ;
}

// Parm Changed =========================================

System.ParmChanged = function(Name, Value)
{ Storage.PutVal (Name, Value)

  System.Parms() ;
  System.Dervs() ;
  System.Wrapup() ;

  Storage.Update() ;
  IPC.Paint() ;
}

// Math =================================================

System.Parms = function()
{ try
  { Model.Parms() ;
  }
  catch (e)
  { var Msg = "Model.Parms() function failed." ;
    Basics.MessageBox(Msg) ;
  }
}

System.Dervs = function()
{ try
  { Model.Dervs() ;
  }
  catch (e)
  { var Msg = "Model.Dervs() function failed." ;
    Basics.MessageBox(Msg) ;
  }
}

System.Wrapup = function()
{ try
  { Model.Wrapup() ;
  }
  catch (e)
  { var Msg = "Model.Wrapup() function failed." ;
    Basics.MessageBox(Msg) ;
  }
}

/* End */
