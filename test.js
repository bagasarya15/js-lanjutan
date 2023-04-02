let tinggi = 5; // tinggi segitiga
for (let i = 1; i <= tinggi; i++) {
  // membuat spasi di sisi kiri segitiga
  let spasi = ' '.repeat(tinggi - i);
  // membuat simbol segitiga
  let simbol = '*'.repeat(i * 2 - 1);
  // menampilkan segitiga pada console
  console.log(spasi + simbol);
}
