import { TelnyxPage } from './app.po';

describe('telnyx App', () => {
  let page: TelnyxPage;

  beforeEach(() => {
    page = new TelnyxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
