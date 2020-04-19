import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

success(message: string) {
  alertify.success(this.message);
}
error(message: string) {
  alertify.error(this.message);
}
message(message: string) {
  alertify.message(this.message);
}
warning(message: string) {
  alertify.warning(this.message);
}
}
