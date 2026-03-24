const IDENTITY = {
  nama: "'Aarif Rahmaan Jalaluddin Faqiih",
  nim: "103112430182",
  kelas: "PS1IF-12-REG06",
  bio: "Mahasiswa Teknik Informatika semester 4 yang sedang mendalami data science, machine learning, dan analisis data. Blog ini adalah catatan jujur perjalanan belajarku — target, capaian, kegagalan, dan refleksi.",
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
        "Di mata kuliah Dasar Kecerdasan Artifisial, memahami teori dasar kecerdasan buatan, mulai dari pengenalan, hingga konsep Searching dan Reasoning.",
        "Mengerjakan project based data scientist, memahami keseluruhan data dan melakukan EDA agar paham konteks bisnisnya serta mendapatkan insight awal.",
      ],
      activities: [
        {
          time: "10:30 - 12:00",
          activity: "Kuliah Dasar Kecerdasan Artifisial",
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
        "Hari ini berhasil mengikuti kuliah Dasar AI dengan pemahaman yang baik. Pada project, saya mulai mengeksplorasi dataset Home Credit, memahami kolom-kolom utama, dan mengidentifikasi banyak missing values. Saya juga membaca dokumentasi untuk persiapan visualisasi besok.",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions:
        "Besok fokus pada visualisasi EDA dan menyusun laporan insight awal.",
      reflection: {
        learned:
          "Konsep searching dalam AI (uninformed search) dan pentingnya EDA sebelum membangun model.",
        improve:
          "Manajemen waktu antara kuliah dan project perlu disesuaikan agar tidak kelelahan.",
        score: 8,
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
        "Di mata kuliah interaksi manusia dan komputer, memahami prinsip dasar dan pengertian interaksi manusia dan komputer.",
        "Mengerjakan project based data scientist, melakukan data cleaning.",
      ],
      activities: [
        {
          time: "08:00 - 09:30",
          activity: "Kuliah Interaksi Manusia dan Komputer",
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
        "Kuliah IMK memberikan pemahaman baru tentang interaksi manusia dan komputer. Pada project, saya melakukan data cleaning dasar pada dataset aplikasi, termasuk imputasi missing values. Tugas IMK masih setengah jadi.",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions:
        "Besok lanjutkan tugas IMK dan fokus pada feature engineering di project.",
      reflection: {
        learned:
          "Prinsip desain antarmuka yang baik dan pentingnya konsistensi data.",
        improve:
          "Konsentrasi setelah makan siang menurun, perlu istirahat cukup.",
        score: 6,
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
        "Bertemu dengan pak Affan (dosen mata kuliah dasar kecerdasan artifisial) untuk konsultasi masalah karir. Pak Affan menyarankan maksimalkan EDA dan belajar data analysis dulu sebelum ke data scientist.",
        "Mengerjakan project based data scientist, melanjutkan data cleaning untuk penanganan missing values dan feature engineering dasar.",
        "Memahami dasar strategi algoritma, mengulas kembali apa itu notasi big O, teta, dan omega.",
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
        "Konsultasi dengan Pak Affan sangat bermanfaat, memberikan arahan karir. Kuliah strategi algoritma memperdalam pemahaman kompleksitas. Pada project, saya mulai melakukan feature engineering dengan menggabungkan data dari tabel pendukung. Masih perlu penyempurnaan.",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions:
        "Besok lanjutkan feature engineering dan evaluasi fitur yang sudah dibuat.",
      reflection: {
        learned:
          "Pentingnya menguasai analisis data sebelum machine learning, dan cara menghitung kompleksitas algoritma.",
        improve: "Lebih disiplin dalam mencatat hasil konsultasi.",
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
        "Mengerjakan project based data scientist, melakukan encoding dan membuat model baseline.",
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
        "Berhasil melakukan encoding dan membuat model baseline menggunakan Logistic Regression. ROC-AUC mencapai 0,72, cukup baik untuk baseline. Namun masih perlu tuning dan handling imbalance class.",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions:
        "Besok lakukan handling imbalance (SMOTE) dan coba model lain.",
      reflection: {
        learned:
          "Proses encoding dan evaluasi model baseline dengan Logistic Regression.",
        improve: "Perlu memahami lebih dalam tentang imbalance class.",
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
        "Memahami konsep dasar pemrograman berorientasi objek.",
        "Mengerjakan project based data scientist, join data subsidiary dari tabel lain ke pipeline, melakukan encoding lagi, dan training ulang.",
        "Buka bersama dengan komunitas literasi.",
      ],
      activities: [
        {
          time: "14:30 - 16:30",
          activity: "Kuliah Pemrograman Berorientasi Objek",
          output: "Memahami kelas, objek, inheritance, polymorphism",
          status: "✓",
        },
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
          time: "18:00 - 20:00",
          activity: "Buka bersama komunitas literasi",
          output: "Diskusi buku dan berbagi pengalaman",
          status: "✓",
        },
      ],
      results:
        "Hari ini produktif: memahami OOP, meningkatkan performa model dengan fitur baru, dan mengikuti acara sosial. Model sekarang mencapai ROC-AUC 0,74, lebih baik dari baseline.",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions:
        "Minggu depan fokus pada tuning hyperparameter dan dokumentasi proyek.",
      reflection: {
        learned:
          "Konsep OOP dan pentingnya feature engineering dalam meningkatkan model.",
        improve:
          "Manajemen waktu antara kegiatan akademik dan sosial sudah baik.",
        score: 8,
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
        "Memahami konsep searching AI dan EDA pada dataset Home Credit",
        "Berhasil membuat model baseline Logistic Regression dengan ROC-AUC 0,72",
        "Mendapat arahan karir dari Pak Affan untuk fokus pada analisis data",
        "Mengimplementasikan feature engineering dan meningkatkan model menjadi 0,74",
        "Memahami dasar OOP dan strategi algoritma",
      ],
      semesterTarget: {
        target:
          "Menyelesaikan project-based internship Home Credit dengan model yang optimal dan laporan insight bisnis.",
        progress: 40,
        note: "Tahap EDA, cleaning, feature engineering, dan model baseline sudah selesai. Selanjutnya tuning dan dokumentasi.",
      },
      obstacles: {
        akademik:
          "Materi AI cukup banyak, perlu waktu lebih untuk memahami heuristic search.",
        teknis: "Tidak ada",
        pribadi: "Tidak ada",
      },
      evaluation: {
        bestSuccess:
          "Berhasil meningkatkan performa model dari 0,72 ke 0,74 setelah menambahkan fitur dari tabel subsidiary.",
        biggestMistake:
          "Kurang mendokumentasikan proses EDA secara rinci sejak awal.",
        nextStrategy:
          "Alokasikan waktu lebih untuk memahami heuristic search dan lanjutkan tuning model.",
      },
      nextWeekPlan: [
        "Menyelesaikan tuning hyperparameter model (Random Forest, XGBoost)",
        "Dokumentasi proyek dan menyusun laporan insight bisnis",
        "Belajar konsep heuristic search di AI",
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
        "Menyelesaikan project based internship data scientist, membuat PPT penjelasan pengerjaan dan upload hasil pengerjaan ke github.",
        "Di mata kuliah dasar kecerdasan artifisial, saya ingin memahami konsep pencarian/searching sebagai cara AI menyelesaikan masalah di representasi ruang yang tersedia.",
      ],
      activities: [
        {
          time: "10:30 - 12:00",
          activity: "Mata kuliah dasar kecerdasan artifisial",
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
        "Hari ini saya berhasil memahami konsep searching dalam AI melalui kuliah, serta menyelesaikan project internship dengan membuat PPT presentasi dan menguploadnya ke GitHub.",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions:
        "Besok saya akan mempersiapkan materi untuk kuliah interaksi manusia dan komputer, serta memastikan instalasi Java dan Netbeans untuk praktikum.",
      reflection: {
        learned:
          "Saya mempelajari konsep searching dalam AI, seperti BFS dan DFS, serta bagaimana representasi ruang masalah. Juga belajar membuat presentasi yang baik untuk project.",
        improve:
          "Saya bisa meningkatkan manajemen waktu agar lebih fokus, dan mungkin membaca materi sebelum kuliah.",
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
        "Di mata kuliah interaksi manusia dan komputer, saya ingin memahami proses desain interface menggunakan metode user-centered design beserta tahapannya.",
        "Mengerjakan quiz week 1 mata kuliah interaksi manusia komputer.",
        "Mengikuti praktikum pemrograman berorientasi objek.",
      ],
      activities: [
        {
          time: "08:00 - 09:30",
          activity: "Mata kuliah interaksi manusia dan komputer.",
          output: "Memahami konsep user-centered design (UCD) dan tahapannya",
          status: "✓",
        },
        {
          time: "09:30 - 11:00",
          activity:
            "Mata kuliah pemrograman berorientasi objek. Praktikum install java dan apache netbeans.",
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
        "Hari ini saya mengikuti kuliah IMK dan memahami user-centered design, menyelesaikan quiz week 1, serta mengikuti praktikum PBO dan berhasil menginstal Java dan Netbeans.",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions:
        "Besok saya akan mempersiapkan materi strategi algoritma dan mengulang kembali konsep brute force.",
      reflection: {
        learned:
          "Saya belajar tentang user-centered design, tahapan empathize, define, ideate, prototype, test. Juga belajar instalasi Java dan Netbeans untuk praktikum.",
        improve:
          "Lebih cepat dalam mengerjakan quiz agar ada waktu untuk review.",
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
        "Di mata kuliah strategi algoritma, saya ingin memahami konsep algoritma brute force.",
      ],
      activities: [
        {
          time: "08:00 - 09:30",
          activity: "Mata kuliah strategi algoritma.",
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
        "Hari ini saya memahami konsep brute force dalam strategi algoritma, dan mengerjakan latihan soal untuk memperdalam pemahaman.",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions:
        "Besok saya akan mempersiapkan praktikum jaringan komputer dan mengerjakan quiz.",
      reflection: {
        learned:
          "Saya belajar tentang algoritma brute force, kelebihan dan kekurangannya, serta contoh seperti linear search dan bubble sort.",
        improve:
          "Saya perlu lebih banyak berlatih soal agar bisa mengimplementasikan.",
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
        "Mengikuti praktikum jaringan komputer",
        "Mengerjakan quiz 1 mata kuliah jaringan komputer.",
      ],
      activities: [
        {
          time: "09:30 - 12:30",
          activity: "Praktikum jaringan kompuer",
          output: "Membuat kabel LAN straight dan cross.",
          status: "✓",
        },
        {
          time: "13:00 - 15:00",
          activity: "Kelas teori jaringan komputer.",
          output: "Memahami materi teori jaringan (OSI layer, TCP/IP)",
          status: "✓",
        },
        {
          time: "15:30 - 16:30",
          activity: "Mengerjakan quiz 1 jaringan komputer",
          output: "Quiz 1 jaringan komputer selesai",
          status: "✓",
        },
      ],
      results:
        "Hari ini saya mengikuti praktikum jaringan komputer dan berhasil membuat kabel LAN straight dan cross, kemudian mengikuti kelas teori dan mengerjakan quiz 1 dengan baik.",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions:
        "Besok saya akan mempersiapkan kuliah wawasan global TIK dan PBO, serta melanjutkan project AI.",
      reflection: {
        learned:
          "Saya belajar cara membuat kabel UTP straight dan cross, serta memahami teori jaringan seperti OSI layer dan TCP/IP.",
        improve:
          "Saya bisa lebih teliti dalam praktikum agar kabel yang dibuat berfungsi dengan baik.",
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
        "Mengikuti 2 mata kuliah.",
        "Mengerjakan quiz minggu 1 mata kuliah pemrograman berorientasi objek.",
        "Membuat model AI untuk mendeteksi ekspresi wajah, datasetnya ambil dari hugging face, training menggunakan teachable machine.",
      ],
      activities: [
        {
          time: "09:30 - 11:00",
          activity: "Mata kuliah wawasan global TIK",
          output: "Memahami materi wawasan global TIK",
          status: "✓",
        },
        {
          time: "14:30 - 16:00",
          activity: "Kelas teori pemrograman berorientasi objek.",
          output: "Memahami materi PBO (konsep class, object)",
          status: "✓",
        },
        {
          time: "16:30 - 19:00",
          activity:
            "Mengerjakan quiz PBO minggu 1 dan membuat model AI dengan Teachable Machine",
          output: "Quiz PBO selesai, model AI deteksi ekspresi wajah terlatih",
          status: "✓",
        },
      ],
      results:
        "Hari ini saya mengikuti dua mata kuliah, yaitu wawasan global TIK dan PBO, menyelesaikan quiz PBO minggu 1, serta berhasil membuat model AI untuk deteksi ekspresi wajah menggunakan Teachable Machine dengan dataset dari Hugging Face.",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions:
        "Besok saya akan merapikan jurnal mingguan dan mempersiapkan materi minggu depan.",
      reflection: {
        learned:
          "Saya belajar tentang wawasan global TIK, konsep OOP lebih dalam, dan cara membuat model AI sederhana dengan transfer learning.",
        improve:
          "Saya perlu mengatur waktu agar bisa mengerjakan project lebih awal.",
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
          focus: "Kuliah Wawasan Global, PBO, Quiz & Project AI",
          output: "Memahami wawasan global, OOP, quiz, model AI",
          duration: "5.5",
        },
      ],
      achievements: [
        "Memahami konsep searching dalam AI dan menyelesaikan project internship (PPT + GitHub).",
        "Mengikuti praktikum PBO dan jaringan komputer, serta mengerjakan quiz IMK, PBO, dan jaringan.",
        "Membuat model AI deteksi ekspresi wajah menggunakan Teachable Machine dengan dataset Hugging Face.",
      ],
      semesterTarget: {
        target:
          "Menyelesaikan semua tugas dan proyek mata kuliah dengan baik, serta mengembangkan portofolio data science.",
        progress: 10,
        note: "Minggu pertama berjalan lancar, semua target tercapai.",
      },
      obstacles: {
        akademik: "Tidak ada kendala berarti, materi masih dapat dipahami.",
        teknis: "Tidak ada",
        pribadi: "Tidak ada",
      },
      evaluation: {
        bestSuccess:
          "Berhasil menyelesaikan project internship dan membuat model AI dalam satu minggu.",
        biggestMistake:
          "Kurang mempersiapkan materi sebelum kuliah sehingga perlu waktu ekstra untuk memahami.",
        nextStrategy:
          "Membaca materi sebelum kuliah, mengatur jadwal lebih terstruktur, dan mulai mengerjakan tugas lebih awal.",
      },
      nextWeekPlan: [
        "Memahami konsep algoritma greedy di strategi algoritma.",
        "Mempersiapkan praktikum jaringan komputer selanjutnya.",
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
          activity: "Kelas teori Dasar Kecerdasan Artifisial",
          output: "Mengetahui algoritma greedy",
          status: "✓",
        },
      ],
      results:
        "Target terpenuhi. Mengikuti kelas DKA dan memahami konsep dasar algoritma greedy.",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions: "Tidak ada hambatan berarti, tidak diperlukan solusi khusus.",
      reflection: {
        learned:
          "Algoritma greedy membuat keputusan optimal lokal di setiap langkah dengan harapan menghasilkan solusi optimal global.",
        improve:
          "Perlu mencari contoh kasus nyata penerapan greedy agar pemahaman lebih konkret.",
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
          activity: "Mata kuliah Interaksi Manusia Komputer",
          output:
            "Mengetahui proses pembuatan aplikasi dari memahami masalah yang dialami user sampai proses pembuatan dan iterasi",
          status: "✓",
        },
        {
          time: "09:30 - 12:30",
          activity: "Kelas praktikum Pemrograman Berorientasi Objek",
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
        "Semua target tercapai. Hari yang padat namun produktif dengan tiga kegiatan akademik berbeda.",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions: "Tidak ada hambatan berarti, tidak diperlukan solusi khusus.",
      reflection: {
        learned:
          "Proses desain aplikasi berpusat pada pengguna (user-centered design) dan pentingnya iterasi. Big data membawa peluang sekaligus tantangan keamanan dan integritas data.",
        improve:
          "Perlu mencatat poin-poin webinar lebih terstruktur agar mudah direview ulang.",
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
        "Mengerjakan quiz week 2 interaksi manusia dan komputer",
        "Mengerjakan quiz week 1 brute force strategi algoritma",
      ],
      activities: [
        {
          time: "08:00 - 09:30",
          activity: "Mata kuliah strategi algoritma",
          output:
            "Mempelajari pendekatan brute force dan penerapannya pada berbagai persoalan komputasi",
          status: "✓",
        },
        {
          time: "15:00 - 15:30",
          activity: "Mengerjakan quiz week 2 interaksi manusia dan komputer",
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
        "Kedua quiz berhasil diselesaikan dengan hasil memuaskan. Nilai IMK 8/10 dan Strategi Algoritma 85.42.",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions: "Tidak ada hambatan berarti, tidak diperlukan solusi khusus.",
      reflection: {
        learned:
          "Brute force menjamin solusi dengan mencoba semua kemungkinan, namun tidak efisien untuk input besar. Perlu memahami kapan brute force cukup dan kapan harus diganti pendekatan lain.",
        improve:
          "Perlu belajar lebih teliti untuk soal IMK agar nilai bisa mencapai 10.",
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
        "Menyelesaikan tugas kelompok Dasar Kecerdasan Artifisial week 2 searching",
        "Mengikuti kelas praktikum dan teori Jaringan Komputer",
      ],
      activities: [
        {
          time: "06:00 - 08:00",
          activity: "Mengerjakan tugas kelompok Dasar Kecerdasan Artifisial",
          output: "Hasil pengerjaan dikirim ke teman untuk dilanjutkan",
          status: "✓",
        },
        {
          time: "09:30 - 12:30",
          activity: "Kelas praktikum Jaringan Komputer",
          output: "Mengikuti meet praktikum modul 1 - 4",
          status: "✓",
        },
        {
          time: "19:15 - 23:00",
          activity: "Merancang web untuk jurnal WGTIK tahap 1",
          output:
            "Menentukan informasi apa saja yang akan ditampilkan, Mencari ide design, Membuat gambaran kasar untuk layout web",
          status: "✓",
        },
      ],
      results:
        "Target sebagian tercapai. Praktikum Jaringan Komputer diikuti namun kelas teori terlewat karena tidur siang.",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis:
          "Tidak ikut kelas teori Jaringan Komputer karena tidur siang",
        manajemenWaktu:
          "Perlu diperbaiki — tidur siang tidak terjadwal menyebabkan kelas terlewat",
      },
      solutions: "Jangan begadang agar siang tidak ngantuk",
      reflection: {
        learned:
          "Merancang web memerlukan perencanaan informasi sebelum coding. Konsistensi jadwal tidur sangat mempengaruhi produktivitas siang hari.",
        improve:
          "Harus lebih disiplin manajemen waktu istirahat dan menghindari begadang tanpa keperluan jelas.",
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
          activity:
            "Belajar mandiri Pemrograman Berorientasi Objek, karena kelas teori asynchronous",
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
          activity: "Merancang web untuk jurnal WGTIK tahap 2",
          output:
            "Skema awal data.js, Wireframe kasar untuk 3 section, List variabel CSS",
          status: "✓",
        },
      ],
      results:
        "Hari yang sangat produktif. Quiz PBO mendapat nilai sempurna dan rancangan web tahap 2 berhasil diselesaikan.",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions: "Tidak ada hambatan berarti, tidak diperlukan solusi khusus.",
      reflection: {
        learned:
          "Diagram UML membantu memvisualisasikan relasi antar kelas sebelum implementasi. Perencanaan skema data di awal membuat proses coding lebih terarah.",
        improve:
          "Sesi malam terlalu panjang (>4 jam). Perlu dibatasi agar tidak berdampak ke hari berikutnya.",
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
          focus: "Kelas teori Dasar Kecerdasan Artifisial — Algoritma Greedy",
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
            "Tugas kelompok DKA searching, Praktikum Jarkom, Desain web WGTIK tahap 1",
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
        "Mendapat nilai sempurna 100 di quiz PBO week 3",
        "Berhasil memulai dan menyelesaikan rancangan awal web jurnal WGTIK hingga tahap 2 dalam 2 hari",
      ],
      semesterTarget: {
        target:
          "Menguasai materi inti 6 mata kuliah dan menyelesaikan proyek web WGTIK tepat waktu",
        progress: 30,
        note: "Progress baik di PBO dan DKA, namun perlu perhatian lebih pada Jaringan Komputer karena satu kelas teori terlewat",
      },
      obstacles: {
        akademik:
          "Materi searching DKA cukup kompleks, pengerjaan tugas kelompok belum selesai penuh",
        teknis: "Tidak ada hambatan teknis berarti selama minggu ini",
        pribadi:
          "Kebiasaan begadang menyebabkan ngantuk siang dan kelas teori Jarkom terlewat",
      },
      evaluation: {
        bestSuccess:
          "Quiz PBO nilai 100 dan penyelesaian rancangan web WGTIK tahap 2 dalam satu sesi malam yang fokus",
        biggestMistake:
          "Melewatkan kelas teori Jaringan Komputer karena tidak menjaga pola tidur",
        nextStrategy:
          "Tetapkan jam tidur maksimal pukul 23.00 dan buat checklist harian malam sebelumnya agar tidak ada kelas yang terlewat",
      },
      nextWeekPlan: [
        "Menyelesaikan implementasi web jurnal WGTIK dan memastikan fitur sorting & filtering berjalan",
        "Mengulang materi Jaringan Komputer yang terlewat dan memperdalam konsep searching untuk DKA",
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
        "Menyelesaikan makalah UCD dan proses desain UI mata kuliah IMK",
        "Merancang section hero, about, dan jurnal untuk HTML, kemudian membuat variabel size, typography, dll. untuk CSS",
      ],
      activities: [
        {
          time: "07:00 - 11:00",
          activity: "Mengerjakan makalah mata kuliah IMK",
          output: "Dokumen makalah UCD dan proses desain UI",
          status: "✓",
        },
        {
          time: "18:30 - 23:00",
          activity: "Merancang web untuk jurnal WGTIK tahap 3",
          output: "Struktur index.html dan desain global.css",
          status: "✓",
        },
      ],
      results:
        "Target harian tercapai dengan menyelesaikan makalah IMK dan merancang struktur awal web jurnal WGTIK.",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions:
        "Mempertahankan fokus kerja dan membagi waktu antara akademik dan pengembangan web.",
      reflection: {
        learned:
          "Memahami alur UCD serta pentingnya konsistensi desain dari HTML ke CSS.",
        improve:
          "Meningkatkan kecepatan dalam implementasi desain agar lebih efisien.",
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
        "Menyelesaikan modul 1 & 2 praktikum Jaringan Komputer",
        "Membuat animasi partikel dan sapaan multi bahasa serta scroll parallax untuk web jurnal WGTIK",
      ],
      activities: [
        {
          time: "07:15 - 08:00",
          activity: "Mengerjakan modul 1 praktikum Jaringan Komputer",
          output:
            "PDF laporan hasil praktikum dan sudah dikumpulkan di Classroom",
          status: "✓",
        },
        {
          time: "08:00 - 12:00",
          activity: "Mengerjakan modul 2 praktikum Jaringan Komputer",
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
        "Seluruh target tercapai, baik praktikum Jaringan Komputer maupun pengembangan fitur interaktif pada web jurnal.",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions:
        "Menggunakan pembagian waktu yang jelas antara praktikum dan pengembangan web.",
      reflection: {
        learned:
          "Memahami implementasi animasi berbasis JavaScript dan CSS serta pengelolaan waktu yang efektif.",
        improve:
          "Merapikan struktur kode agar lebih modular dan mudah dikembangkan.",
        score: 8,
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
        "Membuat card component untuk jurnal",
        "Mengisi jurnal dengan 5–7 data asli",
        "Validasi skema agar field konsisten",
        "Menambahkan sorting tanggal YYYY-MM-DD",
        "Menambahkan filter kategori semua / harian / mingguan",
      ],
      activities: [
        {
          time: "08:00 - 12:30",
          activity: "Membuat card component",
          output: "Grid jurnal berisi data asli",
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
          activity: "Menambahkan sorting dan filter kategori jurnal",
          output: "Filter kategori dan date range",
          status: "✓",
        },
      ],
      results:
        "Fitur utama jurnal seperti card, validasi data, sorting, dan filter berhasil diimplementasikan.",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Tidak ada",
        manajemenWaktu: "Aman",
      },
      solutions:
        "Menjaga konsistensi skema data dan melakukan pengujian setiap fitur setelah dibuat.",
      reflection: {
        learned:
          "Pentingnya validasi data dan struktur yang konsisten dalam pengembangan aplikasi.",
        improve:
          "Mengoptimalkan performa saat filtering dan sorting data dalam jumlah besar.",
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
      targets: ["Menyelesaikan modul 3 & 4 praktikum Jaringan Komputer"],
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
          activity: "Mengerjakan modul 3 praktikum Jaringan Komputer",
          output: "PDF laporan modul 3 dikumpulkan ke Classroom",
          status: "✓",
        },
        {
          time: "18:30 - 23:30",
          activity: "Mengerjakan modul 4 praktikum Jaringan Komputer",
          output: "PDF laporan modul 4 dikumpulkan ke Classroom",
          status: "✓",
        },
      ],
      results:
        "Modul 3 dan 4 selesai tepat waktu serta mendapatkan wawasan tambahan tentang perkembangan AI.",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Rasa kantuk di siang hari",
        manajemenWaktu: "Sedikit terganggu karena tidur siang terlalu lama",
      },
      solutions:
        "Mengatur durasi tidur siang dengan alarm agar tidak mengganggu produktivitas.",
      reflection: {
        learned:
          "Memahami penggunaan Wireshark untuk analisis protokol serta tren perkembangan AI.",
        improve: "Mengurangi perfeksionisme agar pengerjaan lebih efisien.",
        score: 8,
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
        "Membuat modal/popup untuk detail jurnal harian",
        "Membuat halaman khusus jurnal mingguan dengan URL unik",
        "Menambahkan fitur print PDF dan download DOCX",
        "Menambahkan chatbot pada web jurnal",
        "Tes responsivitas mobile",
        "Deploy web jurnal WGTIK",
      ],
      activities: [
        {
          time: "07:00 - 10:00",
          activity: "Membuat modal untuk jurnal harian",
          output: "Modal sesuai template",
          status: "✓",
        },
        {
          time: "13:00 - 16:00",
          activity: "Membuat section jurnal mingguan",
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
          output: "Chatbot dapat menjawab pertanyaan dasar jurnal",
          status: "✓",
        },
      ],
      results:
        "Seluruh fitur utama web jurnal berhasil diselesaikan dan aplikasi berhasil di-deploy.",
      obstacles: {
        teknis: "Tidak ada",
        nonTeknis: "Kelelahan di akhir hari",
        manajemenWaktu: "Sangat baik",
      },
      solutions: "Istirahat sejenak di sela pekerjaan untuk menjaga stamina.",
      reflection: {
        learned:
          "Memahami integrasi fitur kompleks seperti export file dan chatbot dalam web.",
        improve: "Mengoptimalkan performa chatbot dan UX agar lebih responsif.",
        score: 9,
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
          focus: "Makalah IMK dan struktur web jurnal",
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
          focus: "Pengembangan fitur jurnal",
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
        "Web jurnal WGTIK berhasil dibuat end-to-end hingga deployment",
        "Seluruh modul praktikum Jaringan Komputer selesai tepat waktu",
      ],
      semesterTarget: {
        target:
          "Menyelesaikan seluruh tugas mata kuliah dengan kualitas tinggi dan membangun portofolio web",
        progress: 65,
        note: "Progres signifikan pada pengembangan web dan penyelesaian praktikum",
      },
      obstacles: {
        akademik: "Beban tugas cukup padat",
        teknis: "Tidak ada kendala signifikan",
        pribadi: "Kelelahan dan manajemen energi",
      },
      evaluation: {
        bestSuccess:
          "Berhasil menyelesaikan dan deploy web jurnal lengkap dengan fitur lanjutan",
        biggestMistake:
          "Kurang mengatur waktu istirahat sehingga sempat kelelahan",
        nextStrategy:
          "Menjaga keseimbangan kerja dan istirahat serta meningkatkan efisiensi coding",
      },
      nextWeekPlan: [
        "Refactor kode dan optimasi performa web",
        "Menambahkan fitur tambahan atau UI improvement",
      ],
    },
  },
];
