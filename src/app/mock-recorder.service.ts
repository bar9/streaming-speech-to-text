import {Injectable} from '@angular/core';
import {ITbdInputType} from "./Types";
import {interval, Observable, Subject} from "rxjs";
import {map, mergeMapTo, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MockRecorderService {

  private started$ = new Subject<boolean>();

  constructor() {
  }

  startClient(audioIn: ITbdInputType): void {
    this.started$.next(true);
  }

  textChunks$(): Observable<string> {
    const chunks = "Hello, world. This is some fake recorded text.".split(' ');
    chunks.push("");
    const chunksInterval = interval(600).pipe(
      take(chunks.length),
      map(i => chunks[i])
    );
    return this.started$
      .pipe(
        mergeMapTo(
          chunksInterval
        )
      );
  }
}
