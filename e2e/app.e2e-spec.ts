import { AuthorsAppPage } from './app.po';

describe('authors-app App', () => {
  let page: AuthorsAppPage;

  beforeEach(() => {
    page = new AuthorsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
