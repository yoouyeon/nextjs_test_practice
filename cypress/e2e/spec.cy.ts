describe("로그인을 해 보려고 합니다.", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("button").click();
  });
  it("로그인 페이지로 이동하기", () => {
    cy.url().should("include", "/login");
  });
});
