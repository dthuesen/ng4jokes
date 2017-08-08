import { Ng4JokesPage } from './app.po';

describe('ng4-jokes App', () => {
  let page: Ng4JokesPage;

  beforeEach(() => {
    page = new Ng4JokesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
