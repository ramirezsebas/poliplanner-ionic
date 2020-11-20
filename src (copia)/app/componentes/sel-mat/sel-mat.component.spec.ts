import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelMatComponent } from './sel-mat.component';

describe('SelMatComponent', () => {
  let component: SelMatComponent;
  let fixture: ComponentFixture<SelMatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelMatComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
