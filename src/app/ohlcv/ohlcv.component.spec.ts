import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhlcvComponent } from './ohlcv.component';

describe('OhlcvComponent', () => {
  let component: OhlcvComponent;
  let fixture: ComponentFixture<OhlcvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OhlcvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OhlcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
