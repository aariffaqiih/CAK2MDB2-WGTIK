const IDENTITY = {
  nama: "'Aarif Rahmaan Jalaluddin Faqiih",
  nim: "103112430182",
  kelas: "IF-4A",
  bio: "Mahasiswa Teknik Informatika semester 4 yang sedang mendalami data science, machine learning, dan analisis data. Blog ini adalah catatan jujur perjalanan belajarku — target, capaian, kegagalan, dan refleksi.",
  photo: "",
};
const JOURNALS = [
  {
    id: "daily-2026-02-23",
    type: "daily",
    date: "23 Februari 2026",
    dateSort: "2026-02-23",
    daily: {
      targets: [
        "Di mata kuliah Dasar Kecerdasan Artificial, memahami teori dasar kecerdasan buatan, mulai dari pengenalan, hingga konsep Searching dan Reasoning.",
        "Mengerjakan project based data scientist, memahami keseluruhan data dan melakukan EDA agar paham konteks bisnisnya serta mendapatkan insight awal.",
      ],
      activities: [
        {
          time: "10:30–12:00",
          activity: "Kuliah Dasar Kecerdasan Artificial",
          output: "Memahami materi pengenalan AI dan konsep searching",
          status: "✓",
        },
        {
          time: "13:00–15:00",
          activity: "Eksplorasi dataset Home Credit",
          output:
            "Memahami struktur data, identifikasi missing values, insight awal",
          status: "✓",
        },
        {
          time: "15:30–17:00",
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
          time: "08:00–09:30",
          activity: "Kuliah Interaksi Manusia dan Komputer",
          output:
            "Memahami prinsip dasar IMK, konsep usability, dan user-centered design",
          status: "✓",
        },
        {
          time: "10:00–12:00",
          activity:
            "Data cleaning: menangani missing values pada dataset aplikasi",
          output: "Imputasi sederhana pada kolom numerik dan kategorik",
          status: "✓",
        },
        {
          time: "13:00–15:00",
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
        "Bertemu dengan pak Affan (dosen mata kuliah dasar kecerdasan artificial) untuk konsultasi masalah karir. Pak Affan menyarankan maksimalkan EDA dan belajar data analysis dulu sebelum ke data scientist.",
        "Mengerjakan project based data scientist, melanjutkan data cleaning untuk penanganan missing values dan feature engineering dasar.",
        "Memahami dasar strategi algoritma, mengulas kembali apa itu notasi big O, teta, dan omega.",
      ],
      activities: [
        {
          time: "08:00–09:30",
          activity: "Kuliah Strategi Algoritma",
          output: "Memahami notasi Big O, Theta, Omega beserta contoh",
          status: "✓",
        },
        {
          time: "10:00–11:00",
          activity: "Konsultasi dengan Pak Affan",
          output:
            "Mendapat saran untuk fokus pada EDA dan analisis data terlebih dahulu",
          status: "✓",
        },
        {
          time: "13:00–16:00",
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
          time: "09:00–11:00",
          activity: "Encoding variabel kategorik pada dataset",
          output: "Menggunakan one-hot encoding untuk beberapa fitur",
          status: "✓",
        },
        {
          time: "13:00–16:00",
          activity: "Membangun model baseline dengan Logistic Regression",
          output: "Model selesai dengan ROC-AUC 0,72",
          status: "✓",
        },
        {
          time: "16:30–17:30",
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
          time: "14:30–16:30",
          activity: "Kuliah Pemrograman Berorientasi Objek",
          output: "Memahami kelas, objek, inheritance, polymorphism",
          status: "✓",
        },
        {
          time: "10:00–12:00",
          activity: "Project: join data subsidiary dan encoding ulang",
          output:
            "Berhasil menambahkan fitur baru dari tabel subsidiary, encoding ulang",
          status: "✓",
        },
        {
          time: "13:00–14:00",
          activity: "Training ulang model dengan fitur baru",
          output: "ROC-AUC meningkat menjadi 0,74",
          status: "✓",
        },
        {
          time: "18:00–20:00",
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
    id: "weekly-2026-02-27",
    type: "weekly",
    date: "Minggu ke-1 · 23–27 Februari 2026",
    dateSort: "2026-02-27",
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
];
