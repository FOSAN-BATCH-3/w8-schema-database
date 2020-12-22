# 1. All Relations Case Study

## Learning Competencies

- Mengerti bentuk-bentuk relasi skema database dasar
- Mampu memodelkan relasi skema dasar

## Summary

Setelah mempelajari cara mendesain database, kita akan mencoba untuk memodelkan skema dan relasinya berdasarkan kasus di dunia nyata. Kita akan mencoba menganalisa suatu kasus dan menentukan skema serta relasi yang dibutuhkan.

## Levels

### Level 0 : Implement the Schema

Buatlah desain skema database berdasarkan requirement yang diberikan:

1. Setiap `karyawan` memiliki NIK, nama depan, nama belakang, jenis kelamin, email, phone number
2. Setiap `karyawan` menempati satu `departemen`
3. Setiap `Departemen` memiliki `manager` dan hanya boleh memiliki satu `manager` saja
4. Di `perusahaan` tersebut memiliki beberapa `projek`, setiap `karyawan` dapat mengerjakan lebih dari satu `projek` dan `projek` tersebut setidaknya dikerjakan minimal oleh satu `karyawan`. Desain skema database untuk sistem karyawan yang memenuhi requirement di atas.

Gunakan editor diagram seperti Draw.io, Creately, atau yang lainnya sesukamu untuk membuat tabel dengan menggunakan template yang terkait “Database Design”.

Setelah selesai, gunakan fasilitas “Export” di aplikasi terkait untuk menyimpan file dalam format gambar. Sertakan juga gambarnya ke dalam repo, namakan karyawan_schema.png



# 2. Schema poll db

## Levels

### Level 0 : Implement the Schema

Buatlah desain skema database berdasarkan requirement yang diberikan:

Kamu diminta untuk membuat sistem voting untuk pemilihan pejabat. Lihat spesifikasi berikut:

1. Sistem dapat menyimpan data mengenai kandidat2 pejabat, yaitu : name, partai, location, grade_current
2. Sistem juga harus menyimpan data mengenai orang yang akan ikut dalam voting tsb, di antaranya : first_name, last_name, gender, age
3. Sistem dapat mencatat siapa saja yang vote pejabat. 1 orang dapat melakukan vote lebih dari 1
4. kandidat penjabat bisa di vote oleh banyak orang

Buatlah desain skema database untuk sistem yang memenuhi requirement di atas, pikirkanlah column-column minimum apa saja yang HARUS ada.

Gunakan editor diagram seperti Draw.io, Creately, atau yang lainnya sesukamu untuk membuat tabel dengan menggunakan template yang terkait “Database Design”.

Setelah selesai, gunakan fasilitas “Export” di aplikasi terkait untuk menyimpan file dalam format gambar  Sertakan juga gambarnya ke dalam repo, namakan poll-db-schema.png



# 3. Schema simple e-commerce

## Releases

### Release 0 : Implement the Schema

Buatlah desain skema database berdasarkan requirement yang diberikan:

Seorang client memiliki toko yang menjual berbagai macam tas, dan client tsb ingin membuat website e-commerce untuk menjual produk nya tsb. Untuk tahap awal, client meminta spesifikasi sbb : 

1. Terdapat 2 jenis user yang bisa log in ke sistem, yaitu admin dan customer. 
2. Admin dapat input, edit, dan delete item, sedangkan customer tidak boleh ada akses ini 
3. Customer dapat melakukan transaksi, dalam 1 transaksi, customer dapat membeli lebih dari 1 item. 
4. Terdapat tags seperti : kulit, suede, satin, catoon, small, medium, large. 
5. Setiap item, bisa memiliki lebih dari 1 tag.

Buatlah desain skema database untuk sistem yang memenuhi requirement di atas, pikirkanlah column-column minimum apa saja yang HARUS ada.

Gunakan editor diagram seperti Draw.io, Creately, atau yang lainnya sesukamu untuk membuat tabel dengan menggunakan template yang terkait “Database Design”.

Setelah selesai, gunakan fasilitas “Export” di aplikasi terkait untuk menyimpan file dalam format gambar. Sertakan juga gambarnya ke dalam repo, namakan e-commerce-schema.png



# 4. Address Book Schema/Database Design

## Learning Competencies

- Desain skema database berdasarkan permasalahan data
- Memodelkan hubungan one-to-many dalam database relasional
- Memodelkan hubungan many-to-many dalam database relasional

## Summary

Gimana membuat desain skema untuk address book?

Requirements:

1. Kontak memiliki nama, perusahaan, nomor telepon dan email
2. Grup memiliki nama
3. Sebuah kontak bisa masuk ke dalam banyak grup dan grup memiliki banyak kontak

## Levels

### level 0 : Design schema

Ceritakan secara singkat bagaimana schema kamu mengakomodir requirements di atas. Misalnya, untuk requirements no :

1. Kontak memiliki nama, perusahaan, nomor telepon dan email table Kontak

sertakan juga keterangan relasi antar table nya apabila ada.

Gunakan editor diagram seperti [Draw.io](https://www.draw.io/), [Creately](https://creately.com/), atau lainnya sesukamu untuk membuat tabel dengan menggunakan template yang terkait "Database Design".

Setelah selesai, gunakan fasilitas "Export" di aplikasi terkait untuk menyimpan file dalam format gambar . 

sSertakan juga gambarnya ke dalam repo, namakan `address_book_schema.png`.

