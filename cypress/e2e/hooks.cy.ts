describe("hooks", () => {
  before(() => {
    // 이 블록의 전체 테스트의 시작 전에 한번 실행된다.
    cy.log("before");
  });
  beforeEach(() => {
    // 매 테스트의 시작 전에 실행된다.
    cy.log("beforeEach");
  });
  afterEach(() => {
    // 매 테스트의 종료 후에 실행된다.
    cy.log("afterEach");
  });
  after(() => {
    // 이 블록의 전체 테스트의 종료 후에 실행된다.
    cy.log("after");
  });
  it("test 1", () => {
    cy.log("this is test 1");
  });
  it("test 2", () => {
    cy.log("this is test 2");
  });
});
