import { StealAIWebPage } from './app.po';

describe('steal-aiweb App', () => {
  let page: StealAIWebPage;

  beforeEach(() => {
    page = new StealAIWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
