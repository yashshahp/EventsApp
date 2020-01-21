import { InjectionToken } from '@angular/core';


export let TOASTR_TOKEN = new InjectionToken<Toastr>('tosatr')

export interface Toastr{
  success (msg:string, title?:string):void;
  info (msg:string, title?:string):void;
  warning (msg:string, title?:string):void;
  alert (msg:string, title?:string):void;
}
