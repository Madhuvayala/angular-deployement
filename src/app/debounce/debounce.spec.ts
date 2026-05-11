import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Debounce } from './debounce';

describe('Debounce', () => {
  let component: Debounce;
  let fixture: ComponentFixture<Debounce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Debounce]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Debounce);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
