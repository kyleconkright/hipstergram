import { HipstergramPage } from './app.po';

describe('hipstergram App', () => {
  let page: HipstergramPage;

  beforeEach(() => {
    page = new HipstergramPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
