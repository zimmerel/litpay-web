import { HomeLayoutModule } from './home-layout.module';

describe('HomeLayoutModule', () => {
  let homeLayoutModule: HomeLayoutModule;

  beforeEach(() => {
    homeLayoutModule = new HomeLayoutModule();
  });

  it('should create an instance', () => {
    expect(homeLayoutModule).toBeTruthy();
  });
});
