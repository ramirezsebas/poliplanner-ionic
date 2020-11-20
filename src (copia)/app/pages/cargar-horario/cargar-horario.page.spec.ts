import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CargarHorarioPage } from './cargar-horario.page';

describe('CargarHorarioPage', () => {
  let component: CargarHorarioPage;
  let fixture: ComponentFixture<CargarHorarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarHorarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CargarHorarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
