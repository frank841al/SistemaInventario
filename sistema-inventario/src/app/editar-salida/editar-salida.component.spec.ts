import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSalidaComponent } from './editar-salida.component';

describe('EditarSalidaComponent', () => {
  let component: EditarSalidaComponent;
  let fixture: ComponentFixture<EditarSalidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarSalidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
