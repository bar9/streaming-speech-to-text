import {Component, OnInit} from '@angular/core';
import {MockRecorderService} from "../mock-recorder.service";

@Component({
  selector: 'app-recording-button',
  templateUrl: './recording-button.component.html',
  styleUrls: ['./recording-button.component.css']
})
export class RecordingButtonComponent implements OnInit {

  private recording = false;


  constructor(private recorder: MockRecorderService) {
  }

  ngOnInit(): void {
  }

  toggleRecording() {
    if (this.recording) {
      this.recording = false;
    } else {
      this.recorder.startClient(null);
    }
  }
}
