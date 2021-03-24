import {Component, OnDestroy, OnInit} from '@angular/core';
import {MockRecorderService} from "../mock-recorder.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-transcript-player',
  templateUrl: './transcript-player.component.html',
  styleUrls: ['./transcript-player.component.css']
})
export class TranscriptPlayerComponent implements OnInit, OnDestroy {

  private recorderTranscript$;
  private recorderTranscriptSubscription: Subscription;

  head = "";
  tail = "";

  constructor(private recorder: MockRecorderService) {
    this.recorderTranscript$ = recorder.textChunks$();
  }

  ngOnInit(): void {
    this.recorderTranscriptSubscription = this.recorderTranscript$.subscribe((chunk: string) => {
      this.head = this.head + " " + this.tail;
      this.tail = chunk;
    })
  }


  ngOnDestroy(): void {
    this.recorderTranscriptSubscription.unsubscribe();
  }
}
