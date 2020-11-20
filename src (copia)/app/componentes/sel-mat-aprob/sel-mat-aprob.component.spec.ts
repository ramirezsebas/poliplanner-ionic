import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelMatAprobComponent } from './sel-mat-aprob.component';

describe('SelMatAprobComponent', () => {
  let component: SelMatAprobComponent;
  let fixture: ComponentFixture<SelMatAprobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelMatAprobComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelMatAprobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
