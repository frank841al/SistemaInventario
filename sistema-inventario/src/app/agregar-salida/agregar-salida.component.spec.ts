import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSalidaComponent } from './agregar-salida.component';

describe('AgregarSalidaComponent', () => {
  let component: AgregarSalidaComponent;
  let fixture: ComponentFixture<AgregarSalidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarSalidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
