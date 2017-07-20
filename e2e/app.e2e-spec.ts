import { FrontEndProtoPage } from './app.po';

describe('front-end-proto App', () => {
  let page: FrontEndProtoPage;

  beforeEach(() => {
    page = new FrontEndProtoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
