import {NgModule} from "@angular/core";
import {AlertComponent} from "./alert.component";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, BrowserAnimationsModule, ToastModule ],
  exports: [AlertComponent]
})
export class AlertModule{}
