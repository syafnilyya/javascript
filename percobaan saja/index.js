let todos = [];

function tambahTugas(tugas) {
  todos.push({ teks: tugas, selesai: false });
  console.log(`Tugas ditambahkan: "${tugas}"`);
}

function tampilkanTugas() {
  console.log("\nDaftar Tugas:");
  todos.forEach((tugas, index) => {
    const status = tugas.selesai ? "[✓]" : "[ ]";
    console.log(`${index + 1}. ${status} ${tugas.teks}`);
  });
}

function tandaiSelesai(index) {
  if (todos[index]) {
    todos[index].selesai = true;
    console.log(`Tugas "${todos[index].teks}" ditandai selesai.`);
  } else {
    console.log("Tugas tidak ditemukan.");
  }
}

function hapusTugas(index) {
  if (todos[index]) {
    console.log(`Tugas "${todos[index].teks}" dihapus.`);
    todos.splice(index, 1);
  } else {
    console.log("Tugas tidak ditemukan.");
  }
}

// Contoh penggunaan:
tambahTugas("Belajar JavaScript");
tambahTugas("Bikin To-Do List");
tampilkanTugas();

tandaiSelesai(0);
tampilkanTugas();

hapusTugas(1);
tampilkanTugas();
