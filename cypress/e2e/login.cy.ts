describe("로그인 기능을 테스트합니다.", () => {
  beforeEach(() => {
    // 매 테스트의 시작 전에 실행
    // 홈 페이지로 이동
    cy.visit("http://localhost:3000");
    // 로그인 버튼 눌러 로그인 페이지로 이동
    cy.get("button").contains("Login").click();
  });
  it("일반 유저 로그인", () => {
    // 로그인 페이지에서 ID, PW 입력
    cy.get('input[name="ID"]').type("compose");
    cy.get('input[name="Password"]').type("qwe123!@#");
    // 로그인 버튼 누르기
    cy.get("button").contains("로그인").click();
    // 로그인 성공 후 홈 페이지로 이동
    cy.url().should("eq", "http://localhost:3000/");
  });
  it("로그인 실패", () => {
    cy.get('input[name="ID"]').type("compose");
    cy.get('input[name="Password"]').type("badpassword");
    cy.get("button").contains("로그인").click();
    // 로그인 실패 후 로그인 페이지에 머무르기
    cy.url().should("eq", "http://localhost:3000/login");
  });
});
