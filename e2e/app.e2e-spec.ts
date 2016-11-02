import { AngularJS2HTTPPage } from './app.po';

describe('angular-js2-http App', function() {
  let page: AngularJS2HTTPPage;

  beforeEach(() => {
    page = new AngularJS2HTTPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
