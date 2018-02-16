import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'Test content in first step of databinding'},
  {type: 'server', name: 'TestServer2', content: 'Test content in second step of databinding'}];
  
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(BlueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: BlueprintData.serverName,
      content: BlueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
