describe('Buka reporty.sa dalam Bahasa Inggris', () => {
  //masuk ke halaman web uatama
  it('Mengubah bahasa ke Inggris', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
  // Kembali ke `false` untuk mencegah Cypress gagal pada `uncaught:exception`
  // Kita bisa memeriksa pesan error spesifik jika perlu
  if (err.message.includes('$ is not defined')) {
    return false;
  }
  // Atau abaikan semua uncaught exception
  return false;
});
    // 1. Buka website
    cy.visit('https://reporty.sa');

    // 2. Klik tombol bahasa Inggris (dengan ID #a_langen)
    cy.get('#a_lang').click();    
    cy.get('#a_langen').click();                       
  });

  // Masuk ke halaman Login
  it('Login Sukses', () => {
    // Langkah-langkah pengujian di sini
    cy.visit('https://reporty.sa/login');
    cy.get('#a_lang').click();    
    cy.get('#a_langen').click();   
    cy.get('#login_email').type('idacharismaya@gmail.com');
    cy.get('#password').type('Semut123');
    cy.get('#submit').click();
  });
});
