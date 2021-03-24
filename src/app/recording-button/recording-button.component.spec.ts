import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RecordingButtonComponent} from './recording-button.component';

describe('RecordingButtonComponent', () => {
  let component: RecordingButtonComponent;
  let fixture: ComponentFixture<RecordingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecordingButtonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
