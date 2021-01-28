import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreflightPage } from './preflight.page';

describe('PreflightPage', () => {
  let component: PreflightPage;
  let fixture: ComponentFixture<PreflightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreflightPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreflightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
