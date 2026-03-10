// Sekarang kode kamu BERSIH. Tidak ada password tertulis di sini.
const db_config = {
    host: "localhost",
    user: "admin",
    // Kita panggil dari Environment Variable (Rahasia)
    password: process.env.DB_PASSWORD, 
    api_key: process.env.API_KEY_SENDGRID 
};

console.log("Mencoba koneksi ke database dengan cara yang AMAN...");
