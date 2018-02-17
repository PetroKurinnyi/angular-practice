import { AccountService } from './../account.service';
import { LoggingServise } from './../logging.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingServise]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private LoggingServise: LoggingServise, 
              private accountService: AccountService) {
    this.accountService.statusUpdate.subscribe(
      (status: string) => alert('New Status: ' + status)
    );

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // console.log('A server status changed, new status: ' + accountStatus);
    // this.LoggingServise.logStatusChange(accountStatus);
  }
}
