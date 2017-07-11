import { DropdownPage } from './app.po';

describe('dropdown App', () => {
  let page: DropdownPage;

  beforeEach(() => {
    page = new DropdownPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
