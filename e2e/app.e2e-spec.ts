import { PostblogPage } from './app.po';

describe('postblog App', function() {
  let page: PostblogPage;

  beforeEach(() => {
    page = new PostblogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
