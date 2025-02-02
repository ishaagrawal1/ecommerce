import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulfilmentComponent } from './fulfilment.component';

describe('FulfilmentComponent', () => {
  let component: FulfilmentComponent;
  let fixture: ComponentFixture<FulfilmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FulfilmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FulfilmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
