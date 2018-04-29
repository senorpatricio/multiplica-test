import { MultiplicaPage } from './app.po';

describe('multiplica App', () => {
  let page: MultiplicaPage;

  beforeEach(() => {
    page = new MultiplicaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
