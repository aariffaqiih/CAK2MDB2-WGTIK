const IDENTITY = {
  nama: "'Aarif Rahmaan Jalaluddin Faqiih",
  nim: "103112430182",
  kelas: "PS1IF-12-REG06",
  bio: "Mahasiswa Teknik Informatika semester 4 yang sedang mendalami data science, machine learning, dan analisis data. Blog ini adalah catatan jujur perjalanan belajarku — target, capaian, kegagalan, dan refleksi",
  photo:
    "https://media.licdn.com/dms/image/v2/D5603AQF_6_AR3OXybA/profile-displayphoto-scale_400_400/B56ZlSzn1HH8Ag-/0/1758030924397?e=1775692800&v=beta&t=mGwxVLsPyAj2A7UjrMRNRu1q5Ig5NxDz7zyhNIp7H4A",
};
const JOURNALS = [
  {
    id: "daily-2026-02-23",
    type: "daily",
    date: "23 Februari 2026",
    dateSort: "2026-02-23",
    daily: {
      targets: [
        "Di matkul DKA, memahami teori dasar kecerdasan buatan, mulai dari pengenalan, hingga konsep Searching dan Reasoning",
        "Mengerjakan project based data scientist, memahami keseluruhan data dan melakukan EDA agar paham konteks bisnisnya serta mendapatkan insight awal",
      ],
      activities: [
        {
          time: "10:30 - 12:00",
          activity: "Kuliah DKA",
          output: "Memahami materi pengenalan AI dan konsep searching",
          status: "✓",
        },
        {
          time: "13:00 - 15:00",
          activity: "Eksplorasi dataset Home Credit",
          output:
            "Memahami struktur data, identifikasi missing values, insight awal",
          status: "✓",
        },
        {
          time: "15:30 - 17:00",
          activity: "Membaca dokumentasi pandas dan matplotlib",
          output: "Catatan ringkas",
          status: "Proses",
        },
      ],
      results:
        "Berhasil mengikuti kuliah DKA dan memahami pengenalan AI serta konsep searching. EDA dataset Home Credit selesai dengan pemahaman struktur data dan identifikasi missing values. Pembacaan dokumentasi pandas dan matplotlib masih dalam proses",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions:
        "Tidak ada hambatan berarti. Dokumentasi pandas dan matplotlib akan dilanjutkan di sesi berikutnya",
      reflection: {
        learned:
          "Memahami dasar-dasar kecerdasan buatan dan konsep searching sebagai cara AI menyelesaikan masalah. Dari EDA, mendapat gambaran struktur dataset Home Credit beserta distribusi missing values dan insight awal konteks bisnis kredit",
        improve:
          "Lebih disiplin menyelesaikan sesi baca dokumentasi agar tidak tertunda ke hari berikutnya",
        score: 7,
      },
    },
  },
  {
    id: "daily-2026-02-24",
    type: "daily",
    date: "24 Februari 2026",
    dateSort: "2026-02-24",
    daily: {
      targets: [
        "Di matkul IMK, memahami prinsip dasar dan pengertian IMK",
        "Mengerjakan project based data scientist, melakukan data cleaning",
      ],
      activities: [
        {
          time: "08:00 - 09:30",
          activity: "Kuliah IMK",
          output:
            "Memahami prinsip dasar IMK, konsep usability, dan user-centered design",
          status: "✓",
        },
        {
          time: "10:00 - 12:00",
          activity:
            "Data cleaning: menangani missing values pada dataset aplikasi",
          output: "Imputasi sederhana pada kolom numerik dan kategorik",
          status: "✓",
        },
        {
          time: "13:00 - 15:00",
          activity: "Mengerjakan tugas IMK",
          output: "Membuat makalah singkat tentang prinsip IMK",
          status: "Proses",
        },
      ],
      results:
        "Berhasil memahami prinsip dasar IMK termasuk usability dan user-centered design. Data cleaning dataset Home Credit selesai dengan imputasi pada kolom numerik dan kategorik. Tugas makalah IMK masih dalam proses penyelesaian",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions:
        "Tidak ada hambatan berarti. Makalah IMK akan diselesaikan di sesi berikutnya",
      reflection: {
        learned:
          "Memahami prinsip-prinsip IMK seperti usability, efisiensi, dan user-centered design. Dari data cleaning, belajar cara menangani missing values dengan imputasi sederhana pada berbagai tipe kolom",
        improve:
          "Manajemen waktu lebih baik agar tugas akademik tidak tersisa dan bisa diselesaikan di hari yang sama",
        score: 7,
      },
    },
  },
  {
    id: "daily-2026-02-25",
    type: "daily",
    date: "25 Februari 2026",
    dateSort: "2026-02-25",
    daily: {
      targets: [
        "Bertemu dengan pak Affan (dosen matkul DKA) untuk konsultasi masalah karir. Pak Affan menyarankan maksimalkan EDA dan belajar data analysis dulu sebelum ke data scientist",
        "Mengerjakan project based data scientist, melanjutkan data cleaning untuk penanganan missing values dan feature engineering dasar",
        "Memahami dasar strategi algoritma, mengulas kembali apa itu notasi big O, teta, dan omega",
      ],
      activities: [
        {
          time: "08:00 - 09:30",
          activity: "Kuliah Strategi Algoritma",
          output: "Memahami notasi Big O, Theta, Omega beserta contoh",
          status: "✓",
        },
        {
          time: "10:00 - 11:00",
          activity: "Konsultasi dengan Pak Affan",
          output:
            "Mendapat saran untuk fokus pada EDA dan analisis data terlebih dahulu",
          status: "✓",
        },
        {
          time: "13:00 - 16:00",
          activity:
            "Project: feature engineering dasar (membuat agregat dari tabel lain)",
          output:
            "Berhasil membuat fitur jumlah pengajuan sebelumnya dan rata-rata jumlah hari tunggakan",
          status: "Proses",
        },
      ],
      results:
        "Berhasil memahami notasi kompleksitas Big O, Theta, dan Omega di kuliah Strategi Algoritma. Konsultasi dengan Pak Affan memberikan arah karir yang lebih jelas. Feature engineering dasar berjalan namun masih dalam proses penyelesaian",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions:
        "Tidak ada hambatan berarti. Feature engineering akan dilanjutkan dan diselesaikan di sesi berikutnya",
      reflection: {
        learned:
          "Memahami notasi Big O, Theta, dan Omega sebagai cara mengukur efisiensi algoritma. Dari konsultasi, mendapat insight berharga bahwa fondasi analisis data harus kuat sebelum masuk ke data science yang lebih advanced. Mulai memahami cara membuat fitur agregat dari tabel relasional",
        improve:
          "Pastikan sesi pengerjaan project selesai sesuai target harian agar tidak terus tertunda",
        score: 7,
      },
    },
  },
  {
    id: "daily-2026-02-26",
    type: "daily",
    date: "26 Februari 2026",
    dateSort: "2026-02-26",
    daily: {
      targets: [
        "Mengerjakan project based data scientist, melakukan encoding dan membuat model baseline",
      ],
      activities: [
        {
          time: "09:00 - 11:00",
          activity: "Encoding variabel kategorik pada dataset",
          output: "Menggunakan one-hot encoding untuk beberapa fitur",
          status: "✓",
        },
        {
          time: "13:00 - 16:00",
          activity: "Membangun model baseline dengan Logistic Regression",
          output: "Model selesai dengan ROC-AUC 0,72",
          status: "✓",
        },
        {
          time: "16:30 - 17:30",
          activity: "Evaluasi model dan mencatat hasil",
          output: "Confusion matrix, classification report",
          status: "Proses",
        },
      ],
      results:
        "Berhasil melakukan encoding variabel kategorik dengan one-hot encoding dan membangun model baseline Logistic Regression dengan ROC-AUC 0,72. Evaluasi model masih dalam proses penyelesaian",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions:
        "Tidak ada hambatan berarti. Evaluasi model akan diselesaikan di sesi berikutnya",
      reflection: {
        learned:
          "Memahami cara kerja one-hot encoding untuk variabel kategorik dan dampaknya terhadap dimensi data. Berhasil membangun model baseline Logistic Regression dan memahami metrik ROC-AUC sebagai ukuran performa pada dataset imbalanced",
        improve:
          "Selesaikan evaluasi model di hari yang sama agar analisis confusion matrix dan classification report tidak tertunda",
        score: 8,
      },
    },
  },
  {
    id: "daily-2026-02-27",
    type: "daily",
    date: "27 Februari 2026",
    dateSort: "2026-02-27",
    daily: {
      targets: [
        "Memahami konsep dasar PBO",
        "Mengerjakan project based data scientist, join data subsidiary dari tabel lain ke pipeline, melakukan encoding lagi, dan training ulang",
        "Buka bersama dengan komunitas literasi",
      ],
      activities: [
        {
          time: "10:00 - 12:00",
          activity: "Project: join data subsidiary dan encoding ulang",
          output:
            "Berhasil menambahkan fitur baru dari tabel subsidiary, encoding ulang",
          status: "✓",
        },
        {
          time: "13:00 - 14:00",
          activity: "Training ulang model dengan fitur baru",
          output: "ROC-AUC meningkat menjadi 0,74",
          status: "✓",
        },
        {
          time: "14:30 - 16:30",
          activity: "Kuliah PBO",
          output: "Memahami kelas, objek, inheritance, polymorphism",
          status: "✓",
        },
        {
          time: "18:00 - 20:00",
          activity: "Buka bersama komunitas literasi",
          output: "Diskusi buku dan berbagi pengalaman",
          status: "✓",
        },
      ],
      results:
        "Semua target hari ini tercapai. Model meningkat dari ROC-AUC 0,72 ke 0,74 setelah menambahkan fitur dari tabel subsidiary. Konsep OOP berhasil dipahami di kuliah, dan buka bersama komunitas literasi berjalan menyenangkan",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions: "Tidak ada hambatan. Semua sesi berjalan sesuai rencana",
      reflection: {
        learned:
          "Memahami cara join data dari tabel subsidiary untuk memperkaya fitur model, dan melihat dampak langsung peningkatan ROC-AUC. Dari kuliah PBO, memahami konsep fundamental OOP: kelas, objek, inheritance, dan polymorphism",
        improve:
          "Dokumentasikan setiap perubahan model secara terstruktur — catat fitur apa yang ditambahkan dan seberapa besar dampaknya terhadap performa",
        score: 9,
      },
    },
  },
  {
    id: "weekly-2026-02-23",
    type: "weekly",
    date: "Minggu ke-1 · 23-27 Februari 2026",
    dateSort: "2026-02-23",
    weekly: {
      weekNumber: 1,
      activities: [
        {
          day: "Senin",
          focus: "AI & EDA",
          output: "Memahami AI, eksplorasi dataset",
          duration: "4.5",
        },
        {
          day: "Selasa",
          focus: "IMK & Data Cleaning",
          output: "Memahami IMK, imputasi missing values",
          duration: "5",
        },
        {
          day: "Rabu",
          focus: "Strategi Algoritma & Feature Engineering",
          output: "Konsultasi karir, feature engineering",
          duration: "5",
        },
        {
          day: "Kamis",
          focus: "Encoding & Model Baseline",
          output: "Encoding, Logistic Regression baseline",
          duration: "5",
        },
        {
          day: "Jumat",
          focus: "OOP & Model Improvement",
          output: "Pemahaman OOP, model dengan fitur baru",
          duration: "6",
        },
      ],
      achievements: [
        "Berhasil membangun pipeline data end-to-end dari EDA hingga model baseline Logistic Regression dengan ROC-AUC 0,74 dalam satu minggu",
        "Mendapat arahan karir yang jelas dari Pak Affan: perkuat fondasi EDA dan analisis data sebelum masuk ke data science lebih lanjut",
      ],
      semesterTarget: {
        target:
          "Mencapai IP >= 3,7 dengan memprioritaskan matkul PBO dan DKA sambil mempersiapkan diri sebagai data scientist yang berfokus pada pemahaman seperti over/underfitting, data leakage, teknik imputasi, serta metode evaluasi model yang tepat dan menghasilkan 2-3 portofolio end-to-end yang mencakup tahapan rumusan masalah, data preprocessing, eksplorasi data, pemodelan, evaluasi, hingga interpretasi hasil berbasis insight",
        progress: 0,
        note: "Minggu pertama berjalan baik. Pipeline data dari EDA hingga model baseline berhasil dibangun. Beberapa aktivitas masih berstatus Proses yang perlu diperhatikan ke depan",
      },
      obstacles: {
        akademik: "Belum ada hambatan akademik yang signifikan minggu ini",
        teknis: "Tidak ada",
        pribadi: "Tidak ada",
      },
      evaluation: {
        bestSuccess:
          "Berhasil membangun pipeline data scientist pertama dari EDA hingga model baseline yang meningkat ke ROC-AUC 0,74 dengan penambahan fitur subsidiary",
        biggestMistake:
          "Beberapa aktivitas harian tidak diselesaikan di hari yang sama dan tersisa berstatus Proses, menunjukkan estimasi waktu yang kurang akurat",
        nextStrategy:
          "Tetapkan batas waktu yang lebih realistis per aktivitas dan pastikan setiap sesi berakhir dengan output yang benar-benar selesai sebelum pindah ke hari berikutnya",
      },
      nextWeekPlan: [
        "Menyelesaikan PPT dan mengupload hasil project data scientist ke GitHub",
        "Memahami konsep searching (BFS, DFS) lebih mendalam di matkul DKA",
        "Mengikuti kuliah IMK dan PBO secara penuh dan aktif",
        "Mulai mencatat nilai-nilai quiz untuk memantau progres akademik secara terukur",
      ],
    },
  },
  {
    id: "daily-2026-03-02",
    type: "daily",
    date: "2 Maret 2026",
    dateSort: "2026-03-02",
    daily: {
      targets: [
        "Menyelesaikan project based internship data scientist, membuat PPT penjelasan pengerjaan dan upload hasil pengerjaan ke github",
        "Di matkul DKA, saya ingin memahami konsep pencarian/searching sebagai cara AI menyelesaikan masalah di representasi ruang yang tersedia",
      ],
      activities: [
        {
          time: "10:30 - 12:00",
          activity: "MatKul DKA",
          output: "Memahami konsep searching (BFS, DFS) dan catatan kuliah",
          status: "✓",
        },
        {
          time: "13:00 - 16:00",
          activity:
            "Mengerjakan project data scientist: membuat PPT dan upload ke GitHub",
          output: "PPT selesai, repository GitHub terupdate",
          status: "✓",
        },
      ],
      results:
        "Semua target hari ini tercapai. Memahami konsep BFS dan DFS sebagai metode searching di AI, dan berhasil menyelesaikan PPT project data scientist serta menguploadnya ke GitHub",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions: "Tidak ada hambatan. Semua sesi berjalan sesuai rencana",
      reflection: {
        learned:
          "Memahami BFS (Breadth-First Search) dan DFS (Depth-First Search) sebagai dua pendekatan utama pencarian ruang dalam AI. Belajar cara menyusun presentasi yang merangkum proses data science end-to-end secara komunikatif",
        improve:
          "Pelajari lebih lanjut perbedaan kompleksitas waktu dan ruang antara BFS dan DFS agar bisa memilih metode yang tepat sesuai konteks masalah",
        score: 9,
      },
    },
  },
  {
    id: "daily-2026-03-03",
    type: "daily",
    date: "3 Maret 2026",
    dateSort: "2026-03-03",
    daily: {
      targets: [
        "Di matkul IMK, saya ingin memahami proses desain interface menggunakan metode user-centered design beserta tahapannya",
        "Mengerjakan quiz week 1 matkul IMK",
        "Mengikuti praktikum PBO",
      ],
      activities: [
        {
          time: "08:00 - 09:30",
          activity: "MatKul IMK",
          output: "Memahami konsep user-centered design (UCD) dan tahapannya",
          status: "✓",
        },
        {
          time: "09:30 - 11:00",
          activity: "MatKul PBO. Praktikum install java dan apache netbeans",
          output: "Selesai",
          status: "✓",
        },
        {
          time: "11:00 - 12:00",
          activity: "Mengerjakan quiz week 1 IMK",
          output: "Quiz week 1 IMK selesai dikerjakan",
          status: "✓",
        },
      ],
      results:
        "Semua target hari ini tercapai. Memahami UCD dan tahapannya di kuliah IMK, berhasil menginstal Java dan Apache Netbeans untuk praktikum PBO, serta menyelesaikan quiz week 1 IMK",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions: "Tidak ada hambatan. Semua sesi berjalan sesuai rencana",
      reflection: {
        learned:
          "Memahami tahapan user-centered design: mulai dari riset pengguna, pembuatan persona, prototyping, hingga pengujian iteratif. Dari praktikum PBO, berhasil mengkonfigurasi lingkungan pengembangan Java dengan Apache Netbeans",
        improve:
          "Lebih aktif bertanya saat praktikum agar lebih familiar dengan fitur-fitur IDE Netbeans sejak awal",
        score: 9,
      },
    },
  },
  {
    id: "daily-2026-03-04",
    type: "daily",
    date: "4 Maret 2026",
    dateSort: "2026-03-04",
    daily: {
      targets: [
        "Di matkul strategi algoritma, saya ingin memahami konsep algoritma brute force",
      ],
      activities: [
        {
          time: "08:00 - 09:30",
          activity: "MatKul strategi algoritma",
          output: "Memahami konsep brute force, contoh-contoh algoritma",
          status: "✓",
        },
        {
          time: "10:00 - 12:00",
          activity: "Mengerjakan latihan soal algoritma brute force",
          output: "Latihan soal brute force selesai",
          status: "✓",
        },
      ],
      results:
        "Berhasil memahami konsep algoritma brute force beserta berbagai contohnya, dan menyelesaikan latihan soal terkait",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions: "Tidak ada hambatan. Semua sesi berjalan sesuai rencana",
      reflection: {
        learned:
          "Memahami prinsip brute force sebagai pendekatan exhaustive search yang mencoba semua kemungkinan solusi. Melihat contoh penerapannya seperti sequential search, selection sort, dan string matching",
        improve:
          "Coba kerjakan soal brute force dengan kompleksitas lebih tinggi untuk mengasah kemampuan analisis kompleksitas waktu",
        score: 8,
      },
    },
  },
  {
    id: "daily-2026-03-05",
    type: "daily",
    date: "5 Maret 2026",
    dateSort: "2026-03-05",
    daily: {
      targets: [
        "Mengikuti praktikum JarKom",
        "Mengerjakan quiz 1 matkul JarKom",
      ],
      activities: [
        {
          time: "09:30 - 12:30",
          activity: "Praktikum JarKom",
          output: "Membuat kabel LAN straight dan cross",
          status: "✓",
        },
        {
          time: "13:00 - 15:00",
          activity: "Kelas teori JarKom",
          output: "Memahami materi teori jaringan (OSI layer, TCP/IP)",
          status: "✓",
        },
        {
          time: "15:30 - 16:30",
          activity: "Mengerjakan quiz 1 JarKom",
          output: "Quiz 1 JarKom selesai",
          status: "✓",
        },
      ],
      results:
        "Semua target hari ini tercapai. Berhasil membuat kabel LAN straight dan cross, memahami model OSI layer dan TCP/IP, serta menyelesaikan quiz 1 JarKom",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions: "Tidak ada hambatan. Semua sesi berjalan sesuai rencana",
      reflection: {
        learned:
          "Memahami perbedaan kabel LAN straight-through dan crossover serta kapan masing-masing digunakan. Dari kelas teori, mendapat gambaran komprehensif model OSI 7 layer dan perbandingannya dengan model TCP/IP",
        improve:
          "Pelajari lebih mendalam fungsi dan protokol yang bekerja di setiap layer OSI untuk mempersiapkan ujian",
        score: 9,
      },
    },
  },
  {
    id: "daily-2026-03-06",
    type: "daily",
    date: "6 Maret 2026",
    dateSort: "2026-03-06",
    daily: {
      targets: [
        "Mengikuti 2 matkul",
        "Mengerjakan quiz week 1 matkul PBO",
        "Membuat model AI untuk mendeteksi ekspresi wajah, datasetnya ambil dari hugging face, training menggunakan teachable machine",
      ],
      activities: [
        {
          time: "09:30 - 11:00",
          activity: "MatKul WGTIK",
          output: "Memahami materi WGTIK",
          status: "✓",
        },
        {
          time: "14:30 - 16:00",
          activity: "Kelas teori PBO",
          output: "Memahami materi PBO (konsep class, object)",
          status: "✓",
        },
        {
          time: "16:30 - 19:00",
          activity:
            "Mengerjakan quiz PBO week 1 dan membuat model AI dengan Teachable Machine",
          output: "Quiz PBO selesai, model AI deteksi ekspresi wajah terlatih",
          status: "✓",
        },
      ],
      results:
        "Semua target tercapai. Mengikuti 2 kuliah, menyelesaikan quiz PBO week 1, dan berhasil melatih model AI deteksi ekspresi wajah menggunakan Teachable Machine dengan dataset dari Hugging Face",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions: "Tidak ada hambatan. Semua sesi berjalan sesuai rencana",
      reflection: {
        learned:
          "Mendapat wawasan tentang isu-isu global TIK. Memahami lebih dalam konsep class dan object di PBO. Dari project Teachable Machine, belajar cara menyiapkan dataset gambar dari Hugging Face dan proses training model klasifikasi sederhana tanpa coding",
        improve:
          "Eksplorasi lebih lanjut cara mengekspor model Teachable Machine dan mengintegrasikannya ke dalam proyek yang lebih kompleks",
        score: 9,
      },
    },
  },
  {
    id: "weekly-2026-03-02",
    type: "weekly",
    date: "Minggu ke-2 · 2-6 Maret 2026",
    dateSort: "2026-03-02",
    weekly: {
      weekNumber: 2,
      activities: [
        {
          day: "Senin",
          focus: "Kuliah Dasar AI dan Project Data Scientist",
          output: "Memahami searching, PPT dan GitHub upload",
          duration: "4.5",
        },
        {
          day: "Selasa",
          focus: "Kuliah IMK, Praktikum PBO, Quiz IMK",
          output: "Memahami UCD, instalasi Java, quiz selesai",
          duration: "4",
        },
        {
          day: "Rabu",
          focus: "Strategi Algoritma & Latihan",
          output: "Memahami brute force, latihan soal",
          duration: "3.5",
        },
        {
          day: "Kamis",
          focus: "Praktikum Jaringan, Teori, Quiz",
          output: "Membuat kabel LAN, materi OSI, quiz",
          duration: "6",
        },
        {
          day: "Jumat",
          focus: "Kuliah WGTIK, PBO, Quiz & Project AI",
          output: "Memahami WGTIK, OOP, quiz, model AI",
          duration: "5.5",
        },
      ],
      achievements: [
        "Menyelesaikan dan mempublikasikan project data scientist pertama ke GitHub, lengkap dengan presentasi PPT",
        "Berhasil melatih model AI deteksi ekspresi wajah menggunakan Teachable Machine dengan dataset dari Hugging Face",
      ],
      semesterTarget: {
        target:
          "Mencapai IP >= 3,7 dengan memprioritaskan matkul PBO dan DKA sambil mempersiapkan diri sebagai data scientist yang berfokus pada pemahaman seperti over/underfitting, data leakage, teknik imputasi, serta metode evaluasi model yang tepat dan menghasilkan 2-3 portofolio end-to-end yang mencakup tahapan rumusan masalah, data preprocessing, eksplorasi data, pemodelan, evaluasi, hingga interpretasi hasil berbasis insight",
        progress: 0,
        note: "Minggu kedua berjalan lancar tanpa hambatan signifikan. Semua target harian tercapai dan tidak ada aktivitas yang tertinggal berstatus Proses",
      },
      obstacles: {
        akademik: "Tidak ada hambatan akademik yang signifikan minggu ini",
        teknis: "Tidak ada",
        pribadi: "Tidak ada",
      },
      evaluation: {
        bestSuccess:
          "Berhasil menyelesaikan dan mempublikasikan project internship data scientist ke GitHub, menandai selesainya portofolio pertama",
        biggestMistake:
          "Belum ada pengukuran nilai quiz secara kuantitatif yang tercatat, sehingga sulit memantau progres akademik secara terukur",
        nextStrategy:
          "Mulai mencatat semua nilai quiz dan tugas secara konsisten untuk memantau apakah target IP >= 3,7 masih realistis",
      },
      nextWeekPlan: [
        "Mengikuti semua kelas dan praktikum dengan aktif dan penuh",
        "Mencatat semua nilai quiz yang didapat untuk pemantauan progres IP",
        "Mulai mengerjakan tugas kelompok jika ada penugasan baru",
        "Eksplorasi konsep greedy algorithm di matkul DKA",
      ],
    },
  },
  {
    id: "daily-2026-03-09",
    type: "daily",
    date: "9 Maret 2026",
    dateSort: "2026-03-09",
    daily: {
      targets: ["Mengikuti kelas teori DKA"],
      activities: [
        {
          time: "10:30 - 12:30",
          activity: "Kelas teori DKA",
          output: "Mengetahui algoritma greedy",
          status: "✓",
        },
      ],
      results:
        "Berhasil mengikuti kelas teori DKA dan memahami konsep serta cara kerja algoritma greedy",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions: "Tidak ada hambatan. Sesi berjalan sesuai rencana",
      reflection: {
        learned:
          "Memahami algoritma greedy sebagai pendekatan yang membuat pilihan lokal optimal di setiap langkah dengan harapan menghasilkan solusi global optimal. Belajar bahwa greedy tidak selalu menghasilkan solusi optimal untuk semua jenis masalah",
        improve:
          "Eksplorasi contoh kasus di mana greedy gagal menghasilkan solusi optimal agar memahami batasannya dengan lebih baik",
        score: 7,
      },
    },
  },
  {
    id: "daily-2026-03-10",
    type: "daily",
    date: "10 Maret 2026",
    dateSort: "2026-03-10",
    daily: {
      targets: [
        "Membuat kelompok matkul IMK",
        "Mengikuti praktikum PBO",
        "Mengikuti webinar matkul WGTIK",
      ],
      activities: [
        {
          time: "07:30 - 09:30",
          activity: "MatKul IMK",
          output:
            "Mengetahui proses pembuatan aplikasi dari memahami masalah yang dialami user sampai proses pembuatan dan iterasi",
          status: "✓",
        },
        {
          time: "09:30 - 12:30",
          activity: "Kelas praktikum PBO",
          output:
            "Mengulas kembali syntax dasar seperti if-else, switch case, dan for",
          status: "✓",
        },
        {
          time: "15:00 - 17:30",
          activity:
            "Webinar Integrasi Pengembangan Software dan Big Data dalam Mendorong Transformasi Digital",
          output:
            "Mengetahui rintangan, dampak, dan hasil dari implementasi big data ke aplikasi. Misalnya seperti integritas data, perlindungan terhadap hacking dan spam, serta arsitektur software",
          status: "✓",
        },
      ],
      results:
        "Semua target hari ini tercapai. Memahami proses desain aplikasi berbasis kebutuhan user di IMK, mengulas syntax dasar Java di praktikum PBO, dan mendapat wawasan baru dari webinar tentang big data dan transformasi digital",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions: "Tidak ada hambatan. Semua sesi berjalan sesuai rencana",
      reflection: {
        learned:
          "Memahami proses iteratif desain aplikasi dari identifikasi masalah user hingga pembuatan dan pengujian. Dari webinar, mendapat gambaran nyata tantangan integrasi big data: integritas data, keamanan, dan arsitektur sistem yang skalabel",
        improve:
          "Catat poin-poin webinar secara lebih terstruktur dan buat ringkasan yang bisa dijadikan referensi untuk tugas WGTIK",
        score: 8,
      },
    },
  },
  {
    id: "daily-2026-03-11",
    type: "daily",
    date: "11 Maret 2026",
    dateSort: "2026-03-11",
    daily: {
      targets: [
        "Mengerjakan quiz week 2 IMK",
        "Mengerjakan quiz week 1 brute force strategi algoritma",
      ],
      activities: [
        {
          time: "08:00 - 09:30",
          activity: "MatKul strategi algoritma",
          output:
            "Mempelajari pendekatan brute force dan penerapannya pada berbagai persoalan komputasi",
          status: "✓",
        },
        {
          time: "15:00 - 15:30",
          activity: "Mengerjakan quiz week 2 IMK",
          output: "Mendapat nilai 8",
          status: "✓",
        },
        {
          time: "15:45 - 16:15",
          activity: "Mengerjakan quiz week 1 strategi algoritma",
          output: "Mendapat nilai 85.42",
          status: "✓",
        },
      ],
      results:
        "Berhasil mengikuti kelas strategi algoritma, mendapat nilai quiz IMK week 2 sebesar 8 dan nilai quiz Algoritma week 1 sebesar 85.42",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions: "Tidak ada hambatan. Semua sesi berjalan sesuai rencana",
      reflection: {
        learned:
          "Memperdalam pemahaman tentang brute force dan berbagai penerapannya pada persoalan komputasi nyata. Nilai quiz memberikan gambaran sejauh mana pemahaman materi sudah terserap",
        improve:
          "Tinjau kembali soal-soal yang salah di kedua quiz untuk mengidentifikasi celah pemahaman dan memperbaikinya sebelum ujian",
        score: 8,
      },
    },
  },
  {
    id: "daily-2026-03-12",
    type: "daily",
    date: "12 Maret 2026",
    dateSort: "2026-03-12",
    daily: {
      targets: [
        "Menyelesaikan tugas kelompok DKA week 2 searching",
        "Mengikuti kelas praktikum dan teori JarKom",
      ],
      activities: [
        {
          time: "06:00 - 08:00",
          activity: "Mengerjakan tugas kelompok DKA",
          output: "Hasil pengerjaan dikirim ke teman untuk dilanjutkan",
          status: "✓",
        },
        {
          time: "09:30 - 12:30",
          activity: "Kelas praktikum JarKom",
          output: "Mengikuti meet praktikum modul 1 - 4",
          status: "✓",
        },
        {
          time: "19:15 - 23:00",
          activity: "Merancang web untuk journal WGTIK tahap 1",
          output:
            "Menentukan informasi apa saja yang akan ditampilkan, Mencari ide design, Membuat gambaran kasar untuk layout web",
          status: "✓",
        },
      ],
      results:
        "Berhasil menyelesaikan bagian tugas kelompok DKA dan mengirimkannya ke anggota kelompok. Praktikum JarKom modul 1-4 selesai. Perancangan awal web journal WGTIK berhasil dimulai. Namun melewatkan kelas teori JarKom karena tidur siang",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ikut kelas teori JarKom karena tidur siang",
        manajemenWaktu:
          "Perlu diperbaiki — tidur siang tidak terjadwal menyebabkan kelas terlewat",
      },
      solutions:
        "Jadwalkan waktu istirahat siang secara eksplisit dengan durasi maksimal 20 menit dan pasang alarm. Minta catatan atau materi kelas teori JarKom yang terlewat dari teman",
      reflection: {
        learned:
          "Memahami alur perancangan web: mulai dari menentukan konten, mencari referensi desain, hingga membuat layout kasar. Juga menyadari bahwa tidur siang tanpa batas waktu adalah risiko nyata bagi jadwal kuliah",
        improve:
          "Disiplin dalam manajemen waktu istirahat siang hari. Tetapkan alarm dan batasi durasi tidur siang agar tidak mengganggu jadwal kuliah",
        score: 6,
      },
    },
  },
  {
    id: "daily-2026-03-13",
    type: "daily",
    date: "13 Maret 2026",
    dateSort: "2026-03-13",
    daily: {
      targets: [
        "Merancang skema JSON, sorting, dan filtering, serta pilihan design seperti color palette dan font",
        "Menyelesaikan belajar mandiri PBO dan mengerjakan quiz week 3",
      ],
      activities: [
        {
          time: "13:00 - 14:30",
          activity: "Belajar mandiri PBO, karena kelas teori asynchronous",
          output:
            "Mengetahui diagram UML, relasi, agregasi, komposisi, dan contohnya",
          status: "✓",
        },
        {
          time: "14:30 - 14:50",
          activity: "Mengerjakan quiz PBO week 3",
          output: "Mendapat nilai 100",
          status: "✓",
        },
        {
          time: "19:30 - 23:50",
          activity: "Merancang web untuk journal WGTIK tahap 2",
          output:
            "Skema awal data.js, Wireframe kasar untuk 3 section, List variabel CSS",
          status: "✓",
        },
      ],
      results:
        "Semua target hari ini tercapai. Berhasil memahami diagram UML secara mandiri, mendapat nilai quiz PBO 100, dan menyelesaikan skema data.js serta wireframe untuk web journal WGTIK",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions: "Tidak ada hambatan. Semua sesi berjalan sesuai rencana",
      reflection: {
        learned:
          "Memahami diagram UML beserta jenis relasi: asosiasi, agregasi, dan komposisi. Mendapat nilai sempurna di quiz PBO menunjukkan materi sudah dipahami dengan baik. Belajar cara merancang skema data JSON yang terstruktur dan wireframe sebagai fondasi pengembangan web",
        improve:
          "Mulai menerapkan diagram UML saat merancang struktur kelas di proyek PBO agar terbiasa menggunakannya sebagai alat komunikasi desain",
        score: 9,
      },
    },
  },
  {
    id: "weekly-2026-03-09",
    type: "weekly",
    date: "Minggu ke-3 · 9-13 Maret 2026",
    dateSort: "2026-03-09",
    weekly: {
      weekNumber: 3,
      activities: [
        {
          day: "Senin",
          focus: "Kelas teori DKA — Algoritma Greedy",
          output: "Memahami konsep dan cara kerja algoritma greedy",
          duration: "2",
        },
        {
          day: "Selasa",
          focus: "IMK, Praktikum PBO, Webinar Big Data & Software Development",
          output:
            "User-centered design, review syntax dasar Java, wawasan big data",
          duration: "7",
        },
        {
          day: "Rabu",
          focus: "Kelas Strategi Algoritma, Quiz IMK & Quiz Algoritma",
          output: "Nilai quiz IMK 8, nilai quiz Algoritma 85.42",
          duration: "3.5",
        },
        {
          day: "Kamis",
          focus:
            "Tugas kelompok DKA searching, Praktikum JarKom, Desain web WGTIK tahap 1",
          output:
            "Tugas kelompok diteruskan, praktikum modul 1-4 selesai, layout web dirancang",
          duration: "8",
        },
        {
          day: "Jumat",
          focus:
            "Belajar mandiri PBO, Quiz PBO week 3, Desain web WGTIK tahap 2",
          output: "Nilai quiz PBO 100, skema data.js & wireframe web selesai",
          duration: "6",
        },
      ],
      achievements: [
        "Mendapat nilai sempurna 100 di quiz PBO week 3, menunjukkan pemahaman mendalam terhadap materi UML dan relasi kelas",
        "Berhasil merancang skema data JSON dan wireframe web journal WGTIK sebagai fondasi pengembangan minggu berikutnya",
      ],
      semesterTarget: {
        target:
          "Mencapai IP >= 3,7 dengan memprioritaskan matkul PBO dan DKA sambil mempersiapkan diri sebagai data scientist yang berfokus pada pemahaman seperti over/underfitting, data leakage, teknik imputasi, serta metode evaluasi model yang tepat dan menghasilkan 2-3 portofolio end-to-end yang mencakup tahapan rumusan masalah, data preprocessing, eksplorasi data, pemodelan, evaluasi, hingga interpretasi hasil berbasis insight",
        progress: 0,
        note: "Minggu ketiga aktif dengan quiz dan tugas kelompok. Ada satu insiden kelas terlewat yang harus dijadikan pelajaran. Fondasi web journal WGTIK sudah terbentuk",
      },
      obstacles: {
        akademik:
          "Bagian tugas kelompok DKA diselesaikan namun belum final karena harus diteruskan oleh anggota lain",
        teknis: "Tidak ada hambatan teknis yang signifikan",
        pribadi:
          "Tidur siang tidak terkontrol pada hari Kamis menyebabkan kelas teori JarKom terlewat",
      },
      evaluation: {
        bestSuccess:
          "Mendapat nilai sempurna 100 di quiz PBO week 3 melalui belajar mandiri asynchronous — membuktikan bahwa belajar mandiri bisa efektif jika terstruktur",
        biggestMistake:
          "Melewatkan kelas teori JarKom karena tidur siang yang tidak terjadwal — ini adalah insiden berulang yang harus segera diatasi",
        nextStrategy:
          "Pasang alarm eksplisit untuk setiap jadwal kelas, batasi durasi tidur siang maksimal 20 menit, prioritaskan kelas teori yang tidak bisa diulang",
      },
      nextWeekPlan: [
        "Mengerjakan makalah IMK tentang UCD dan proses desain UI",
        "Menyelesaikan modul praktikum JarKom (modul 1-4)",
        "Melanjutkan pengembangan web journal WGTIK dari wireframe ke code HTML dan CSS",
        "Disiplin mengikuti semua jadwal kelas tanpa terkecuali",
      ],
    },
  },
  {
    id: "daily-2026-03-16",
    type: "daily",
    date: "16 Maret 2026",
    dateSort: "2026-03-16",
    daily: {
      targets: [
        "Menyelesaikan makalah UCD dan proses desain UI matkul IMK",
        "Merancang section hero, about, dan journal untuk HTML, kemudian membuat variabel size, typography, dll. untuk CSS",
      ],
      activities: [
        {
          time: "07:00 - 11:00",
          activity: "Mengerjakan makalah matkul IMK",
          output: "Dokumen makalah UCD dan proses desain UI",
          status: "✓",
        },
        {
          time: "18:30 - 23:00",
          activity: "Merancang web untuk journal WGTIK tahap 3",
          output: "Struktur index.html dan desain global.css",
          status: "✓",
        },
      ],
      results:
        "Berhasil menyelesaikan makalah IMK tentang UCD dan proses desain UI, serta membangun struktur HTML dan sistem variabel CSS sebagai fondasi web journal WGTIK",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions: "Tidak ada hambatan. Semua sesi berjalan sesuai rencana",
      reflection: {
        learned:
          "Mengaplikasikan pemahaman UCD dari kuliah IMK ke dalam tulisan akademik. Dari pengembangan web, belajar pentingnya sistem desain (design system) dengan mendefinisikan variabel CSS untuk ukuran, tipografi, dan warna sejak awal agar konsisten",
        improve:
          "Mulai lebih awal saat mengerjakan makalah agar ada waktu untuk revisi dan iterasi konten sebelum dikumpulkan",
        score: 8,
      },
    },
  },
  {
    id: "daily-2026-03-17",
    type: "daily",
    date: "17 Maret 2026",
    dateSort: "2026-03-17",
    daily: {
      targets: [
        "Menyelesaikan modul 1 & 2 praktikum JarKom",
        "Membuat animasi partikel dan sapaan multi bahasa serta scroll parallax untuk web journal WGTIK",
      ],
      activities: [
        {
          time: "07:15 - 08:00",
          activity: "Mengerjakan modul 1 praktikum JarKom",
          output:
            "PDF laporan hasil praktikum dan sudah dikumpulkan di Classroom",
          status: "✓",
        },
        {
          time: "08:00 - 12:00",
          activity: "Mengerjakan modul 2 praktikum JarKom",
          output:
            "PDF laporan hasil praktikum dan sudah dikumpulkan di Classroom",
          status: "✓",
        },
        {
          time: "18:30 - 22:30",
          activity:
            "Mengembangkan animasi partikel, greeting multi bahasa, dan efek scroll parallax",
          output:
            "Script JS dan CSS untuk animasi partikel di section hero, animasi greeting multi bahasa, dan scroll parallax",
          status: "✓",
        },
      ],
      results:
        "Semua target hari ini tercapai. Laporan modul 1 & 2 praktikum JarKom berhasil diselesaikan dan dikumpulkan, serta fitur animasi interaktif web journal berhasil diimplementasikan",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions: "Tidak ada hambatan. Semua sesi berjalan sesuai rencana",
      reflection: {
        learned:
          "Menyelesaikan laporan praktikum JarKom modul 1 & 2 memperdalam pemahaman tentang konfigurasi jaringan dasar. Dari pengembangan web, belajar teknik animasi partikel berbasis Canvas/JS, implementasi sapaan dinamis multi bahasa, dan efek scroll parallax menggunakan CSS transform",
        improve:
          "Optimalkan performa animasi partikel dengan membatasi jumlah partikel aktif agar tidak membebani CPU pengguna di perangkat lemah",
        score: 9,
      },
    },
  },
  {
    id: "daily-2026-03-18",
    type: "daily",
    date: "18 Maret 2026",
    dateSort: "2026-03-18",
    daily: {
      targets: [
        "Membuat card component untuk journal",
        "Mengisi journal dengan 5–7 data asli",
        "Validasi skema agar field konsisten",
        "Menambahkan sorting tanggal YYYY-MM-DD",
        "Menambahkan filter kategori semua / harian / mingguan",
      ],
      activities: [
        {
          time: "08:00 - 12:30",
          activity: "Membuat card component",
          output: "Grid journal berisi data asli",
          status: "✓",
        },
        {
          time: "15:00 - 17:00",
          activity: "Memberikan validasi/constraint ke field",
          output:
            "Web menampilkan error ketika data tidak sesuai tipe atau tidak konsisten",
          status: "✓",
        },
        {
          time: "19:00 - 21:15",
          activity: "Menambahkan sorting dan filter kategori journal",
          output: "Filter kategori dan date range",
          status: "✓",
        },
      ],
      results:
        "Semua target hari ini tercapai. Card component berhasil dibuat dan diisi dengan data asli, validasi skema berjalan dengan baik, serta fitur sorting dan filter kategori berhasil diimplementasikan",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions: "Tidak ada hambatan. Semua sesi berjalan sesuai rencana",
      reflection: {
        learned:
          "Belajar cara membangun card component dinamis yang me-render data dari skema JSON. Memahami pentingnya validasi data di sisi frontend untuk menjaga konsistensi tampilan. Mengimplementasikan sorting berdasarkan format tanggal YYYY-MM-DD dan filter kategori berbasis tipe entry",
        improve:
          "Tambahkan unit test sederhana untuk memvalidasi fungsi sorting dan filtering agar lebih robust saat ada perubahan data di masa depan",
        score: 9,
      },
    },
  },
  {
    id: "daily-2026-03-19",
    type: "daily",
    date: "19 Maret 2026",
    dateSort: "2026-03-19",
    daily: {
      targets: ["Menyelesaikan modul 3 & 4 praktikum JarKom"],
      activities: [
        {
          time: "06:00 - 07:30",
          activity:
            "Membaca berita perkembangan AI terkini dari blog Hugging Face",
          output:
            "Mengetahui tren AI global, peningkatan developer independen, serta perkembangan robotika",
          status: "✓",
        },
        {
          time: "07:30 - 11:30",
          activity: "Mengerjakan modul 3 praktikum JarKom",
          output: "PDF laporan modul 3 dikumpulkan ke Classroom",
          status: "✓",
        },
        {
          time: "18:30 - 23:30",
          activity: "Mengerjakan modul 4 praktikum JarKom",
          output: "PDF laporan modul 4 dikumpulkan ke Classroom",
          status: "✓",
        },
      ],
      results:
        "Berhasil menyelesaikan modul 3 & 4 praktikum JarKom meskipun manajemen waktu sedikit terganggu oleh tidur siang yang terlalu lama",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Rasa kantuk di siang hari",
        manajemenWaktu: "Sedikit terganggu karena tidur siang terlalu lama",
      },
      solutions:
        "Batasi durasi tidur siang maksimal 20-30 menit dan pasang alarm. Jadwalkan pekerjaan berat di sesi pagi saat energi masih optimal, hindari sesi kerja intensif setelah tidur siang yang panjang",
      reflection: {
        learned:
          "Menyelesaikan laporan modul 3 & 4 JarKom memperdalam pemahaman tentang konfigurasi jaringan lanjutan. Dari membaca blog Hugging Face, mendapat gambaran tren AI global: meningkatnya developer independen yang membangun model sendiri dan perkembangan pesat di bidang robotika",
        improve:
          "Kelola energi harian lebih baik dengan menetapkan batas waktu tidur siang yang ketat agar tidak berulang kali mengganggu jadwal kerja sore",
        score: 7,
      },
    },
  },
  {
    id: "daily-2026-03-20",
    type: "daily",
    date: "20 Maret 2026",
    dateSort: "2026-03-20",
    daily: {
      targets: [
        "Membuat modal/popup untuk detail journal harian",
        "Membuat halaman khusus journal mingguan dengan URL unik",
        "Menambahkan fitur print PDF dan download DOCX",
        "Menambahkan chatbot pada web journal",
        "Tes responsivitas mobile",
        "Deploy web journal WGTIK",
      ],
      activities: [
        {
          time: "07:00 - 10:00",
          activity: "Membuat modal untuk journal harian",
          output: "Modal sesuai template",
          status: "✓",
        },
        {
          time: "13:00 - 16:00",
          activity: "Membuat section journal mingguan",
          output: "Section dengan URL unik",
          status: "✓",
        },
        {
          time: "18:30 - 21:20",
          activity: "Menambahkan fitur export PDF dan DOCX",
          output: "Fitur export berjalan sesuai skema",
          status: "✓",
        },
        {
          time: "21:20 - 21:30",
          activity: "Deploy ke GitHub Pages",
          output: "Web dapat diakses publik",
          status: "✓",
        },
        {
          time: "21:30 - 23:50",
          activity: "Integrasi chatbot ke web",
          output: "Chatbot dapat menjawab pertanyaan dasar journal",
          status: "✓",
        },
      ],
      results:
        "Semua target hari ini tercapai penuh. Web journal WGTIK berhasil diselesaikan secara end-to-end dan dapat diakses publik melalui GitHub Pages, lengkap dengan modal journal harian, section mingguan, fitur export, dan chatbot terintegrasi",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Kelelahan di akhir hari",
        manajemenWaktu: "Sangat baik",
      },
      solutions:
        "Manajemen energi lebih baik ke depannya dengan menyisipkan jeda istirahat singkat 10-15 menit di antara sesi kerja panjang agar kelelahan tidak menumpuk di penghujung hari",
      reflection: {
        learned:
          "Belajar cara membuat modal interaktif yang merender data dinamis, implementasi routing URL unik untuk section mingguan, fitur export ke PDF dan DOCX dari konten web, proses deploy ke GitHub Pages, serta integrasi chatbot berbasis AI ke dalam antarmuka web",
        improve:
          "Tambahkan fitur pencarian teks pada journal dan optimalkan performa loading web di iterasi berikutnya. Dokumentasikan code dengan komentar yang lebih baik",
        score: 10,
      },
    },
  },
  {
    id: "weekly-2026-03-16",
    type: "weekly",
    date: "Minggu ke-4 · 16-20 Maret 2026",
    dateSort: "2026-03-16",
    weekly: {
      weekNumber: 4,
      activities: [
        {
          day: "Senin",
          focus: "Makalah IMK dan struktur web journal",
          output: "Makalah selesai dan desain awal web",
          duration: "8",
        },
        {
          day: "Selasa",
          focus: "Praktikum JarKom & animasi web",
          output: "Modul 1 & 2 + animasi interaktif",
          duration: "9",
        },
        {
          day: "Rabu",
          focus: "Pengembangan fitur journal",
          output: "Card, validasi, filter, sorting",
          duration: "8",
        },
        {
          day: "Kamis",
          focus: "Praktikum JarKom lanjutan",
          output: "Modul 3 & 4 selesai",
          duration: "9",
        },
        {
          day: "Jumat",
          focus: "Finalisasi dan deployment web",
          output: "Web lengkap + deploy + chatbot",
          duration: "10",
        },
      ],
      achievements: [
        "Berhasil membangun dan men-deploy web journal WGTIK secara penuh ke GitHub Pages dengan fitur modal, animasi, export PDF/DOCX, dan chatbot terintegrasi",
        "Menyelesaikan seluruh modul praktikum JarKom (modul 1-4) dan mengumpulkan semua laporan tepat waktu",
      ],
      semesterTarget: {
        target:
          "Mencapai IP >= 3,7 dengan memprioritaskan matkul PBO dan DKA sambil mempersiapkan diri sebagai data scientist yang berfokus pada pemahaman seperti over/underfitting, data leakage, teknik imputasi, serta metode evaluasi model yang tepat dan menghasilkan 2-3 portofolio end-to-end yang mencakup tahapan rumusan masalah, data preprocessing, eksplorasi data, pemodelan, evaluasi, hingga interpretasi hasil berbasis insight",
        progress: 0,
        note: "Minggu keempat adalah minggu paling produktif sejauh ini. Web journal WGTIK selesai end-to-end dalam satu minggu. Momentum ini harus dipertahankan",
      },
      obstacles: {
        akademik: "Tidak ada hambatan akademik yang signifikan minggu ini",
        teknis:
          "Tidak ada hambatan teknis yang signifikan dalam pengembangan web",
        pribadi:
          "Rasa kantuk di siang hari pada hari Kamis sedikit mengganggu manajemen waktu, namun tidak sampai melewatkan kelas",
      },
      evaluation: {
        bestSuccess:
          "Berhasil membangun dan men-deploy web journal lengkap berfitur tinggi dalam satu minggu — dari wireframe hingga chatbot terintegrasi — ini adalah capaian teknis terbesar semester ini sejauh ini",
        biggestMistake:
          "Tidur siang yang tidak terkontrol pada hari Kamis kembali terjadi meski sudah diidentifikasi sebagai masalah minggu lalu, menunjukkan bahwa solusi belum benar-benar diimplementasikan",
        nextStrategy:
          "Implementasikan jadwal tidur siang yang ketat (maksimal 20 menit dengan alarm) sebagai kebiasaan harian. Pertahankan momentum produktivitas tinggi dengan merencanakan target mingguan yang spesifik dan terukur",
      },
      nextWeekPlan: [
        "Mulai mengisi data journal yang lengkap dan konsisten pada web yang sudah di-deploy",
        "Melanjutkan perkuliahan dan praktikum dengan penuh dan aktif",
        "Mulai merencanakan portofolio data science berikutnya setelah project Home Credit",
        "Implementasikan jadwal tidur siang beralarma untuk mengatasi masalah manajemen waktu yang berulang",
      ],
    },
  },
  {
    id: "daily-2026-03-23",
    type: "daily",
    date: "23 Maret 2026",
    dateSort: "2026-03-23",
    daily: {
      targets: [
        "Melanjutkan project GDGoC untuk membangun REST API menggunakan Flask untuk melayani prediksi individu dan batch",
        "Melanjutkan project GDGoC untuk membangun class Predictor untuk mengelola loading model dan logika prediksi",
        "Melanjutkan project GDGoC untuk membangun struktur halaman web dengan desain responsif dan modern",
      ],
      activities: [
        {
          time: "07:00 - 12:00",
          activity:
            "Membuat file app.py yang mencakup endpoint untuk prediksi individu, batch melalui CSV, data acak, dan template CSV",
          output:
            "Flask app dengan 5 endpoint API dan rate limiting untuk keamanan serta validasi input",
          status: "✓",
        },
        {
          time: "13:00 - 17:00",
          activity:
            "Membuat file predictor.py untuk meload model, mengelola konversi dan validasi data, menangani prediksi individu dan batch, menyediakan data acak, serta dilengkapi fungsi analisis faktor, klasifikasi risiko, dan rekomendasi",
          output:
            "Predictor class dengan semua method selesai dan fungsi analisis faktor menghasilkan rekomendasi",
          status: "✓",
        },
        {
          time: "19:00 - 23:30",
          activity:
            "Membuat template dasar base.html, index.html untuk prediksi individu, batch.html untuk prediksi massal, 404.html, dan 500.html untuk error pages, serta main.css",
          output:
            "5 halaman HTML dan CSS serta dan gauge meter untuk visualisasi prediksi",
          status: "✓",
        },
      ],
      results:
        "Berhasil menyelesaikan implementasi backend dan frontend utama project GDGoC, termasuk endpoint Flask, class Predictor, template HTML, CSS, dan visualisasi gauge meter, sehingga fondasi aplikasi siap untuk tahap integrasi dan pengujian",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions:
        "Lanjutkan tahap integrasi dengan frontend, lakukan pengujian alur prediksi individu dan batch, serta perbaiki bug kecil sebelum presentasi",
      reflection: {
        learned:
          "Belajar menyusun arsitektur aplikasi prediksi end-to-end: dari API Flask, class untuk inference, hingga template UI dan visualisasi hasil. Juga memahami pentingnya validasi input, rate limiting, dan pemisahan logika backend-frontend",
        improve:
          "Dokumentasikan struktur endpoint, alur data, dan dependency antar file agar debugging dan presentasi lebih mudah",
        score: 9,
      },
    },
  },
  {
    id: "daily-2026-03-24",
    type: "daily",
    date: "24 Maret 2026",
    dateSort: "2026-03-24",
    daily: {
      targets: ["Melanjutkan project GDGoC untuk implementasi frontend"],
      activities: [
        {
          time: "07:00 - 13:30",
          activity:
            "Membuat file main.js untuk prediksi individu dan file batch.js untuk prediksi massal dengan upload CSV",
          output:
            "Halaman prediksi individu fungsional dengan semua fitur dan batch dengan upload dan export CSV",
          status: "✓",
        },
        {
          time: "14:30 - 17:30",
          activity: "Membuat banner acara halal bihalal tahap 1",
          output: "Banner dengan isi yang lengkap",
          status: "✓",
        },
        {
          time: "18:30 - 20:00",
          activity: "Membuat banner acara halal bihalal tahap 2",
          output: "Revisi minor dan finalisasi banner",
          status: "✓",
        },
      ],
      results:
        "Berhasil menghubungkan frontend prediksi individu dan batch ke alur kerja yang utuh, serta menyelesaikan banner halal bihalal tahap 1 dan finalisasi tahap 2",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions:
        "Lakukan pengecekan ulang integrasi upload CSV, pastikan format output konsisten, dan simpan aset banner final untuk penggunaan berikutnya",
      reflection: {
        learned:
          "Belajar menghubungkan JavaScript frontend dengan alur prediksi massal, serta memahami pentingnya penyesuaian UX saat pengguna mengunggah file. Dari pengerjaan banner, belajar menata elemen visual dan melakukan revisi kecil dengan cepat",
        improve:
          "Periksa ulang edge case pada upload file dan siapkan validasi error yang lebih informatif di frontend",
        score: 8,
      },
    },
  },
  {
    id: "daily-2026-03-25",
    type: "daily",
    date: "25 Maret 2026",
    dateSort: "2026-03-25",
    daily: {
      targets: [
        "Memahami algoritma greedy dari matkul Strategi Algoritma",
        "Belajar mendiri PBO materi week 2 & 3",
        "Memahami modul 5 & 6 praktikum JarKom sebelum praktikum besok",
        "Melanjutkan project GDGoC untuk mengintegrasikan komponen dan melakukan pengujian",
      ],
      activities: [
        {
          time: "08:00 - 09:30",
          activity: "Mata kuliah Strategi Algoritma",
          output:
            "Memahami apa itu algoritma greedy, cara kerjanya, dan contoh kasus, serta keterbatasan",
          status: "✓",
        },
        {
          time: "09:45 - 10:30",
          activity: "Melengkapi journal week 5 WGTIK",
          output: "Journal week 5 WGTIK yang sudah lengkap",
          status: "✓",
        },
        {
          time: "10:30 - 13:30",
          activity:
            "Menghubungkan frontend ke backend API untuk project GDGoC kemudian rate limiting, error handling seperti file kosong atau format salah, serta caching untuk prediksi individu",
          output:
            "Semua endpoint berfungsi dengan baik dan Rate limiting berjalan sesuai konfigurasi",
          status: "✓",
        },
        {
          time: "19:30 - 20:30",
          activity: "Mempelajari modul 5 & 6 JarKom",
          output:
            "Memahami apa perbedaan TCP dan UDP serta cara kerjanya dan karakteristiknya",
          status: "✓",
        },
      ],
      results:
        "Berhasil memahami greedy, menyelesaikan journal week 5, mengintegrasikan frontend-backend project GDGoC hingga rate limiting, error handling, dan caching berjalan, serta mempelajari modul 5 & 6 JarKom tentang TCP/UDP",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu:
          "Tidak jadi belajar PBO karena harus memprioritaskan belajar JarKom dan project GDGoC terlebih dahulu",
      },
      solutions:
        "Tindak lanjuti dengan belajar PBO sesuai rencana, lalu siapkan catatan ringkas perbedaan TCP dan UDP untuk praktikum dan ujian",
      reflection: {
        learned:
          "Memahami greedy beserta keterbatasannya, melihat proses integrasi aplikasi secara lebih lengkap dari sisi performa dan keandalan, dan memahami karakteristik dasar TCP vs UDP",
        improve:
          "Jangan terlalu mudah menggeser prioritas belajar PBO, alokasikan slot waktu yang jelas agar target tidak tertunda terus",
        score: 8,
      },
    },
  },
  {
    id: "daily-2026-03-26",
    type: "daily",
    date: "26 Maret 2026",
    dateSort: "2026-03-26",
    daily: {
      targets: [
        "Aktif dalam praktikum JarKom",
        "Menyelesaikan project GDGoC untuk presentasi di tanggal 28",
        "Input TAK",
      ],
      activities: [
        {
          time: "09:30 - 12:00",
          activity: "Kelas praktikum Jaringan Komputer",
          output:
            "Memahami cara praktikum TCP dan UDP serta mendemonstrasikan program python UDP server dan client",
          status: "✓",
        },
        {
          time: "12:00 - 12:30",
          activity: "Mengerjakan quiz 2 JarKom",
          output: "Mendapat nilai 100",
          status: "✓",
        },
        {
          time: "12:30 - 13:00",
          activity: "Mengerjakan quiz 3 JarKom",
          output: "Mendapat nilai 100",
          status: "✓",
        },
        {
          time: "14:00 - 15:30",
          activity: "Input TAK",
          output: "11 sertifikat sudah diupload",
          status: "✓",
        },
        {
          time: "19:00 - 21:30",
          activity: "Menyelesaikan project GDGoC untuk presentasi di tanggal 2",
          output:
            "Bug loading di batch.js sudah diperbaiki, fitur prediksi di predictor.py sudah dilengkapi, validasi input sudah diperbaiki, dan memperbaiki bug minor lainnya sampai selesai",
          status: "✓",
        },
      ],
      results:
        "Berhasil aktif di praktikum JarKom, memperoleh nilai sempurna di quiz 2 dan 3, menyelesaikan input TAK, serta menuntaskan project GDGoC untuk presentasi dengan perbaikan bug dan validasi final",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu:
          "Sebenarnya aman, tapi tadi pagi perlu pergi ke tempat percetakan banner terlebih dahulu",
      },
      solutions:
        "Lakukan pengecekan akhir terhadap materi presentasi dan siapkan versi cadangan agar demo besok berjalan lancar",
      reflection: {
        learned:
          "Memahami praktik TCP/UDP secara langsung melalui demonstrasi server-client Python, sekaligus belajar bahwa penyelesaian bug minor dan validasi input adalah bagian penting dari finalisasi produk",
        improve:
          "Mulai review materi presentasi lebih awal agar tidak menumpuk di malam hari sebelum presentasi",
        score: 10,
      },
    },
  },
  {
    id: "daily-2026-03-27",
    type: "daily",
    date: "27 Maret 2026",
    dateSort: "2026-03-02",
    daily: {
      targets: [
        "Menyelesaikan PPT untuk presentasi project GDGoC besok",
        "Belajar mendiri PBO materi week 2 & 3",
      ],
      activities: [
        {
          time: "10:30 - 18:00",
          activity:
            "Membuat PPT untuk presentasi besok dan memastikan project bisa dijalankan",
          output: "File PPT yang siap untuk presentasi",
          status: "✓",
        },
        {
          time: "18:30 - 19:00",
          activity:
            "Membuat fitur baru di web journal WGTIK agar bisa melihat detail aktifitas per hari di weekly journal",
          output:
            "Tombol aksi pada setiap row hari di tabel weekly journal dan ketika di-klik maka muncul modal berisi informasi detail di hari tersebut",
          status: "✓",
        },
        {
          time: "19:30 - 21:00",
          activity: "Belajar PBO materi week 2 & 3",
          output:
            "Memahami konsep encapsulation, access modifier (public, private, protected, default), dan modularity untuk materi week 2. kemudian memahami UML, class diagram (atribut dan method), relasi antar kelas (association, aggregation, composition), dan multiplicity (one-to-one dan one-to-many)",
          status: "✓",
        },
      ],
      results:
        "Berhasil menyelesaikan PPT presentasi project GDGoC, menambahkan fitur detail aktivitas pada weekly journal, dan memperdalam PBO week 2 & 3 termasuk encapsulation, access modifier, UML, relasi antar kelas, dan multiplicity",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Masih kurang paham apa itu constructor",
        manajemenWaktu: "Aman",
      },
      solutions:
        "Rapikan alur presentasi, pastikan demo project berjalan stabil, dan lanjutkan pemahaman constructor dengan latihan soal atau contoh code sederhana",
      reflection: {
        learned:
          "Belajar menyusun materi presentasi yang ringkas, memahami interaksi komponen pada web journal melalui modal detail harian, dan memperkuat konsep PBO dasar yang sempat masih kurang paham, terutama constructor",
        improve:
          "Latihan constructor secara langsung dengan code kecil agar konsep tidak berhenti di definisi",
        score: 9,
      },
    },
  },
  {
    id: "weekly-2026-03-23",
    type: "weekly",
    date: "Minggu ke-5 · 23-27 Maret 2026",
    dateSort: "2026-03-23",
    weekly: {
      weekNumber: 5,
      activities: [
        {
          day: "Senin",
          focus: "Project GDGoC backend & frontend",
          output: "Flask API, Predictor class, template HTML/CSS siap",
          duration: "13.5",
        },
        {
          day: "Selasa",
          focus: "Frontend integrasi & banner halal bihalal",
          output: "main.js, batch.js, banner selesai dan final",
          duration: "11",
        },
        {
          day: "Rabu",
          focus: "Greedy, journal WGTIK, integrasi project, JarKom",
          output:
            "Greedy dipahami, journal week 5 lengkap, project terintegrasi, TCP/UDP dipelajari",
          duration: "6.25",
        },
        {
          day: "Kamis",
          focus: "Praktikum JarKom, quiz, TAK, finalisasi project",
          output: "Quiz 2 dan 3 nilai 100, TAK terinput, project GDGoC selesai",
          duration: "7.5",
        },
        {
          day: "Jumat",
          focus: "Presentasi, fitur detail weekly journal, belajar PBO",
          output:
            "PPT siap, fitur modal detail harian ditambahkan, PBO week 2 & 3 dipahami",
          duration: "9.5",
        },
      ],
      achievements: [
        "Project GDGoC selesai sampai tahap siap presentasi, termasuk backend, frontend, integrasi, validasi, caching, dan error handling",
        "Web journal WGTIK ditingkatkan dengan fitur detail aktivitas harian pada weekly journal",
      ],
      semesterTarget: {
        target:
          "Mencapai IP >= 3,7 dengan memprioritaskan matkul PBO dan DKA sambil mempersiapkan diri sebagai data scientist yang berfokus pada pemahaman seperti over/underfitting, data leakage, teknik imputasi, serta metode evaluasi model yang tepat dan menghasilkan 2-3 portofolio end-to-end yang mencakup tahapan rumusan masalah, data preprocessing, eksplorasi data, pemodelan, evaluasi, hingga interpretasi hasil berbasis insight",
        progress: 0,
        note: "Minggu ini sangat produktif. Project GDGoC hampir selesai penuh, pengembangan web journal terus bertambah, dan PBO tetap dipelajari meski ada prioritas lain. Pemahaman constructor masih perlu diperkuat",
      },
      obstacles: {
        akademik:
          "Belajar PBO sempat tertunda karena prioritas project dan JarKom",
        teknis: "Tidak ada hambatan teknis yang signifikan",
        pribadi:
          "Beban tugas cukup padat menjelang presentasi, tetapi masih terkendali",
      },
      evaluation: {
        bestSuccess:
          "Berhasil menyelesaikan project GDGoC hingga siap presentasi dan menambahkan fitur detail harian pada web journal WGTIK",
        biggestMistake:
          "Belajar PBO sempat tertunda dan pemahaman tentang constructor masih belum kuat",
        nextStrategy:
          "Pertahankan ritme penyelesaian tugas, jadwalkan slot khusus untuk PBO, dan fokus pada latihan constructor serta review materi yang masih lemah",
      },
      nextWeekPlan: [
        "Melanjutkan penguatan PBO terutama constructor dan latihan coding",
      ],
    },
  },
];
