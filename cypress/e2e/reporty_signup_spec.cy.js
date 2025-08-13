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
  
    cy.visit('https://www.reporty.sa/sign-up');
    cy.get('#a_lang').click();    
    cy.get('#a_langen').click();   
    cy.get('#email').type('ida_test2130@gmail.com');
    cy.get('#password').type('Semut888');
    cy.get('#confirm_password').type('Semut888');
    // Contoh menggunakan Cypress
cy.get('iframe[src*="recaptcha"]').its('0.contentDocument').then(doc => {
  cy.wrap(doc.getElementById('recaptcha-anchor')).click();
});
    cy.get('#sign-up-button').click();   
                  
  });
});
