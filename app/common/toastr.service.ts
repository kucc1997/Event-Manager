import { OpaqueToken } from '@angular/core'

export let TOASTE_TOKEN = new OpaqueToken('toastr')

export interface Toastr {
    success(message: string, title?: string): void
    info ( msg: string, title?:string): void
    warning(message: string, title?: string): void
    error ( msg: string, title?:string): void
}
// declare let toastr:any
// @Injectable()
// export class ToastrService{
//   success(message: string, title?: string) {
//       toastr.success(message, title)
//   }
//   info(message: string, title?: string) {
//       toastr.info(message, title)
//   }
//   warning(message: string, title?: string) {
//       toastr.warning(message, title)
//   }
//     error(message: string, title?: string) {
//       toastr.error(message, title)
//   }
  

// }