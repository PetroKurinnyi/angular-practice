import { AccountService } from './../account.service';
import { LoggingServise } from './../logging.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingServise]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private LoggingServise: LoggingServise, private accountService: AccountService) { }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status);
    // this.LoggingServise.logStatusChange(status);
    this.accountService.statusUpdate.emit(status);
  }
}
