import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeleccionarMateriasAprobadasComponent } from './seleccionar-materias-aprobadas.component';

describe('SeleccionarMateriasAprobadasComponent', () => {
  let component: SeleccionarMateriasAprobadasComponent;
  let fixture: ComponentFixture<SeleccionarMateriasAprobadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionarMateriasAprobadasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeleccionarMateriasAprobadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
