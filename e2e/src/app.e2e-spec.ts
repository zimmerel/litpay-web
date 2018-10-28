import { AppPage } from './app.po';
import { element, by } from 'protractor';

describe('Litpay', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to the Login page', () => {
    page.navigateTo();
    element(by.id('login')).click();
    expect(element(by.css('body')).getText()).toContain('Login');
  });

  it('should navigate to the Register page', () => {
    page.navigateTo();
    element(by.id('register')).click();
    expect(element(by.css('body')).getText()).toContain('Register');
  });

  it('should navigate to the ForgotPassword page', () => {
    page.navigateTo();
    element(by.id('login')).click();
    element(by.id('forgotPassword')).click();
    expect(element(by.css('body')).getText()).toContain('Forgot Password');
  });
});