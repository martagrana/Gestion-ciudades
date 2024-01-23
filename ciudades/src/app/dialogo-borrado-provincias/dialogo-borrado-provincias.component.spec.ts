import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoBorradoProvinciasComponent } from './dialogo-borrado-provincias.component';

describe('DialogoBorradoProvinciasComponent', () => {
  let component: DialogoBorradoProvinciasComponent;
  let fixture: ComponentFixture<DialogoBorradoProvinciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogoBorradoProvinciasComponent]
    });
    fixture = TestBed.createComponent(DialogoBorradoProvinciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
