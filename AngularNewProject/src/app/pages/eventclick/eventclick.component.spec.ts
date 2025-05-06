import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventclickComponent } from './eventclick.component';

describe('EventclickComponent', () => {
  let component: EventclickComponent;
  let fixture: ComponentFixture<EventclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventclickComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
