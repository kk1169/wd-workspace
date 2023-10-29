import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WduiComponent } from './wdui.component';

describe('WduiComponent', () => {
  let component: WduiComponent;
  let fixture: ComponentFixture<WduiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WduiComponent]
    });
    fixture = TestBed.createComponent(WduiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
