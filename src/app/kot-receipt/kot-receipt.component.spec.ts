import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KotReceiptComponent } from './kot-receipt.component';

describe('KotReceiptComponent', () => {
  let component: KotReceiptComponent;
  let fixture: ComponentFixture<KotReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KotReceiptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KotReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
