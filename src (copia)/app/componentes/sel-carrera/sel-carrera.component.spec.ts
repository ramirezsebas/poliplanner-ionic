import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelCarreraComponent } from './sel-carrera.component';

describe('SelCarreraComponent', () => {
  let component: SelCarreraComponent;
  let fixture: ComponentFixture<SelCarreraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelCarreraComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
