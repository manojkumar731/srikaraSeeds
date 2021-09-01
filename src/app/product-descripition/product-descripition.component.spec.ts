import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescripitionComponent } from '@src/app/product-descripition/product-descripition.component';

describe('ProductDescripitionComponent', () => {
  let component: ProductDescripitionComponent;
  let fixture: ComponentFixture<ProductDescripitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDescripitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDescripitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
