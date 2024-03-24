
import { Articulo } from './articulo';

describe('Articulo', () => {
  it('should create an instance', () => {
    expect( new Articulo ("","",0,0)).toBeTruthy();
  });
});
