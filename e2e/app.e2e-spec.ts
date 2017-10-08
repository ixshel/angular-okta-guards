import { Ng2AuthPage } from './app.po';

describe('ng2-auth App', () => {
  let page: Ng2AuthPage;

  beforeEach(() => {
    page = new Ng2AuthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
