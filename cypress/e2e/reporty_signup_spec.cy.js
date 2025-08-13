describe('Buka reporty.sa dalam Bahasa Inggris', () => {

    
  //masuk ke halaman web uatama
  it('Sign Up Sucssess', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
  // Kembali ke `false` untuk mencegah Cypress gagal pada `uncaught:exception`
  // Kita bisa memeriksa pesan error spesifik jika perlu
  if (err.message.includes('$ is not defined')) {
    return false;
  }
  // Atau abaikan semua uncaught exception
  return false;
});
// Pastikan URL API sesuai dengan yang digunakan di aplikasi
cy.intercept('POST', '/api/verify-recaptcha', (req) => {
  req.reply({
    statusCode: 200,
    body: { success: true }
  });
}).as('recaptchaBypass');
    cy.visit('https://www.reporty.sa/sign-up');
    cy.get('#a_lang').click();    
    cy.get('#a_langen').click();   
    cy.get('#email').type('ida_test2130@gmail.com');
    cy.get('#password').type('Semut888');
    cy.get('#confirm_password').type('Semut888');
    cy.get('#sign-up-button').click();   
    cy.wait('@recaptchaBypass');                  
  });
});
