# CRUDProject
## Setup database
Create database dengan nama todo di pgAdmin\n
Jalankan query untuk create table yang ada di todo-backend/database.sql di pgAdmin. Querynya seperti di bawah ini:\n
CREATE TABLE todo_table (
  todo_id SERIAL PRIMARY KEY,
  task VARCHAR(255)
)

## Setup frontend
Install semua dependency dengan menjalankan: npm i\n
Jalankan frontend dengan menjalankan command: npm run dev

## Setup backend
Install semua dependency dengan menjalankan: npm i\n
Jalankan server dengan menjalankan command: nodemon index

## Cara menggunakan program
Ketik todo di input di samping button add task\n
Klik button add task untuk menambahkan todo\n
Klik button delete untuk menghapus todo\n
Klik button edit untuk menampilkan modal untuk mengedit. Ketik isi todo yang baru di input yang ada di modal. Klik button save changes
