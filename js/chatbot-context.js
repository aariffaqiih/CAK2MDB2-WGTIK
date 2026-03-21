const CHATBOT_SYSTEM_PROMPT = (() => {
  const serializeDaily = (d) => {
    if (!d) return "";
    const lines = [];
    if (d.targets?.length) lines.push(`  Targets: ${d.targets.join(" | ")}`);
    if (d.activities?.length) {
      const acts = d.activities
        .map((a) => `${a.time} — ${a.activity} → ${a.output} [${a.status}]`)
        .join("; ");
      lines.push(`  Aktivitas: ${acts}`);
    }
    if (d.results) lines.push(`  Hasil: ${d.results}`);
    if (d.obstacles) {
      const obs = Object.entries(d.obstacles)
        .map(([k, v]) => `${k}: ${v}`)
        .join(", ");
      lines.push(`  Kendala: ${obs}`);
    }
    if (d.solutions) lines.push(`  Solusi: ${d.solutions}`);
    if (d.reflection) {
      const r = d.reflection;
      if (r.learned) lines.push(`  Pelajari: ${r.learned}`);
      if (r.improve) lines.push(`  Tingkatkan: ${r.improve}`);
      if (r.score != null) lines.push(`  Skor: ${r.score}/10`);
    }
    return lines.join("\n");
  };
  const serializeWeekly = (w) => {
    if (!w) return "";
    const lines = [];
    if (w.weekNumber != null) lines.push(`  Minggu ke-${w.weekNumber}`);
    if (w.activities?.length) {
      const acts = w.activities
        .map((a) => `${a.day}: ${a.focus} → ${a.output} (${a.duration} jam)`)
        .join("; ");
      lines.push(`  Aktivitas: ${acts}`);
    }
    if (w.achievements?.length)
      lines.push(`  Capaian: ${w.achievements.join(" | ")}`);
    if (w.semesterTarget) {
      const st = w.semesterTarget;
      lines.push(`  Target Semester: ${st.target}`);
      lines.push(`  Progress: ${st.progress}%`);
      if (st.note) lines.push(`  Keterangan: ${st.note}`);
    }
    if (w.obstacles) {
      const obs = Object.entries(w.obstacles)
        .map(([k, v]) => `${k}: ${v}`)
        .join(", ");
      lines.push(`  Kendala: ${obs}`);
    }
    if (w.evaluation) {
      const ev = w.evaluation;
      if (ev.bestSuccess)
        lines.push(`  Keberhasilan terbaik: ${ev.bestSuccess}`);
      if (ev.biggestMistake)
        lines.push(`  Kesalahan terbesar: ${ev.biggestMistake}`);
      if (ev.nextStrategy) lines.push(`  Strategi depan: ${ev.nextStrategy}`);
    }
    if (w.nextWeekPlan?.length)
      lines.push(`  Rencana depan: ${w.nextWeekPlan.join(" | ")}`);
    return lines.join("\n");
  };
  const journalText = [...JOURNALS]
    .sort((a, b) => a.dateSort.localeCompare(b.dateSort))
    .map((j) => {
      const header = `[${j.date || j.dateSort}] (${
        j.type === "daily" ? "Harian" : "Mingguan"
      })`;
      const body =
        j.type === "daily"
          ? serializeDaily(j.daily)
          : serializeWeekly(j.weekly);
      return `${header}\n${body}`;
    })
    .join("\n\n");
  return `Kamu adalah asisten jurnal milik 'Aarif Rahmaan Jalaluddin Faqiih, NIM 103112430182, kelas PS1IF-12-REG06, mahasiswa Teknik Informatika semester 4. Jawab pertanyaan tentang isi jurnal secara singkat dan ramah dalam bahasa Indonesia. Jika tidak ada informasinya di jurnal, katakan tidak tahu — jangan mengarang. DATA JURNAL LENGKAP: ${journalText}`;
})();
