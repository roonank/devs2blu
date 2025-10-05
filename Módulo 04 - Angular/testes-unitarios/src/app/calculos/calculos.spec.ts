import { TestBed } from "@angular/core/testing";
import { Calculos } from "./calculos"

// Descrição (Informalões sobre o teste)
describe('Componente Calculos', () => {
  //Objeto componente
  let componente : Calculos;


  beforeEach(() => {
    TestBed.configureTestingModule({});

    componente = new Calculos();
  })

  it('Testar o método responsável pela soma', () => {
    expect(componente.somar(2, 3)).toBe(5);
  });

  it('Testar o método ao quadrado', () => {
    expect(componente.aoQuadrado())
  })
})