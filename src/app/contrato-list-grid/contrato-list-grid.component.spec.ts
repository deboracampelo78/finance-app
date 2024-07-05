import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoListGridComponent } from './contrato-list-grid.component';

describe('ContratoListGridComponent', () => {
  let component: ContratoListGridComponent;
  let fixture: ComponentFixture<ContratoListGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContratoListGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratoListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
