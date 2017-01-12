import { MPJDPage } from './app.po';

describe('mpjd App', function() {
  let page: MPJDPage;

  beforeEach(() => {
    page = new MPJDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
