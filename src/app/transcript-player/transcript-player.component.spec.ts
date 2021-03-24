import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TranscriptPlayerComponent} from './transcript-player.component';

describe('TranscriptPlayerComponent', () => {
  let component: TranscriptPlayerComponent;
  let fixture: ComponentFixture<TranscriptPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TranscriptPlayerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscriptPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
