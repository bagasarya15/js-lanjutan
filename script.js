// Cara membuat object pada javasript
// 1.Object Literal
// Tidak efektif untuk objek yang banyak
// let mahasiswa1 = {
// nama: 'Bagas',
// energi: 10,
// makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
// },
// };

// let mahasiswa2 = {
// nama: 'Afra',
// energi: 20,
// makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
// },
// };

// 2. Function Declaration
const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, Selamat makan!`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, Selamat main!`);
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Selamat tidur ${this.nama}, energi tersisa ${this.energi}`);
  },
};

function Mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  //   mahasiswa.makan = methodMahasiswa.makan;
  //   mahasiswa.main = methodMahasiswa.main;
  //   mahasiswa.tidur = methodMahasiswa.tidur;

  return mahasiswa;
}

let bagas = Mahasiswa('Bagas', 30);
let afra = Mahasiswa('Afra', 20);

// 3.Constructor Function
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, Selamat makan!`);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     // this.energi = energi - jam;
//     console.log(`Halo ${this.nama}, Selamat main!`);
//   };
// }

// let bagas = new Mahasiswa('Bagas', 20);

// const Mahasiswa = (nama, energi) => {
//   return `${nama}, ${energi}`;
// };

// 4.Object
