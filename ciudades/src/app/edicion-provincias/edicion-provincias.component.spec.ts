import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionProvinciasComponent } from './edicion-provincias.component';

describe('EdicionProvinciasComponent', () => {
  let component: EdicionProvinciasComponent;
  let fixture: ComponentFixture<EdicionProvinciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdicionProvinciasComponent]
    });
    fixture = TestBed.createComponent(EdicionProvinciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
