import { Empleado } from './empleado';

describe('Empleado', () => {
  it('should create an instance', () => {
    expect( new Empleado ("","",0,0,"","")).toBeTruthy();
  });
});