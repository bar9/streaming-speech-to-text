// @ts-ignore
import {Types} from "./IVoiceToTextRecorder";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ITbdInputType} from "./Types";

// @ts-ignore
declare var stream = require('vintage-streams');

@Injectable({
  providedIn: 'root'
})
export class RevAiService {

  private client: any;

  constructor() {
    // @ts-ignore
    const revai = require('revai-node-sdk');

    const token = "your_access_token"

    const audioConfig = new revai.AudioConfig(
      /* contentType */ "audio/x-raw",
      /* layout */      "interleaved",
      /* sample rate */ 16000,
      /* format */      "S16LE",
      /* channels */    1
    );

    this.client = new revai.RevAiStreamingClient(token, audioConfig);

    this.client.on('close', (code, reason) => {
      console.log(`Connection closed, ${code}: ${reason}`);
    });
    this.client.on('httpResponse', code => {
      console.log(`Streaming client received http response with code: ${code}`);
    })
    this.client.on('connectFailed', error => {
      console.log(`Connection failed with error: ${error}`);
    })
    this.client.on('connect', connectionMessage => {
      console.log(`Connected with message: ${connectionMessage}`);
    })
  }

  textChunks$(): Observable<string> {
    throw new Error("Method not implemented.");
  }

  startClient(audioIn: ITbdInputType) {
    let stream = this.client.start();
    (audioIn as Observable<any>).pipe(stream);

    stream.on('data', data => {
      console.log(data);
    });
    stream.on('end', function () {
      console.log("End of Stream");
    });

  }
}

