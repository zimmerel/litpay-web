import { AppPage } from './app.po';
import { element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to the Login component', () => {
    page.navigateTo();
    element(by.id("login-link")).click();
    expect(element(by.css("body")).getText()).toContain("Login");
  });

  it('should navigate to the Register component', () => {
    page.navigateTo();
    element(by.id("register-link")).click();
    expect(element(by.css("body")).getText()).toContain("Register");
  });
});
