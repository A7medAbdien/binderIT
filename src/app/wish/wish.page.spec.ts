import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { WishPage } from './wish.page';

describe('WishPage', () => {
  let component: WishPage;
  let fixture: ComponentFixture<WishPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WishPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(WishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
