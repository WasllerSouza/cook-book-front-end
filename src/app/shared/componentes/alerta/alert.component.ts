import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {tap} from "rxjs";
import {Alert} from "./models/alert.model";
import {ErrorService} from "./services/error.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService]
})
export class AlertComponent implements OnInit {
  constructor(private errorService: ErrorService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.errorService.errors$.subscribe(
      (messages: string[]) => {
        this.messageService.add({severity: 'warn', summary: 'warn', detail: messages.join(', ')})
      }
    );
    this.errorService.errorsAlert$.subscribe(
      (alert: Alert) => {
        this.messageService.add({
          severity: alert.messageType,
          summary: alert.messageType,
          detail: alert.message.join(', \n')
        })
      }
    );
  }
}
