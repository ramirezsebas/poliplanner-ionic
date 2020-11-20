import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArmarHorarioPage } from './armar-horario.page';

describe('ArmarHorarioPage', () => {
  let component: ArmarHorarioPage;
  let fixture: ComponentFixture<ArmarHorarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmarHorarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArmarHorarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
