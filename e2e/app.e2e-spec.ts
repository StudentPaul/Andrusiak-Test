import { AndrusiakTestPage } from './app.po';

describe('andrusiak-test App', () => {
  let page: AndrusiakTestPage;

  beforeEach(() => {
    page = new AndrusiakTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
