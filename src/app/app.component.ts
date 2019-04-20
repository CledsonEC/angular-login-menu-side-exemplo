import { Component } from '@angular/core';
import { CommunicationService } from './shared/services/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    public communicationService: CommunicationService,
    ) {
  }
}
