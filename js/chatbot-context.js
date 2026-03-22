const CHATBOT_SYSTEM_PROMPT = (() => {
  const serializeDaily = (d) => {
    if (!d) return "";
    const parts = [];
    if (d.targets?.length)
      parts.push(
        `Target: ${d.targets.map((t, i) => `${i + 1}) ${t}`).join(" | ")}`
      );
    if (d.activities?.length)
      parts.push(
        `Aktivitas: ${d.activities
          .map((a) => `[${a.time}] ${a.activity} (${a.status})`)
          .join("; ")}`
      );
    if (d.results) parts.push(`Hasil: ${d.results}`);
    if (d.reflection?.score != null)
      parts.push(`Skor: ${d.reflection.score}/10`);
    return parts.join(" | ");
  };
  const serializeWeekly = (w) => {
    if (!w) return "";
    const parts = [];
    if (w.weekNumber != null) parts.push(`Minggu ke-${w.weekNumber}`);
    if (w.achievements?.length)
      parts.push(`Capaian: ${w.achievements.join("; ")}`);
    if (w.semesterTarget?.progress != null)
      parts.push(`Progress semester: ${w.semesterTarget.progress}%`);
    if (w.evaluation?.bestSuccess)
      parts.push(`Keberhasilan: ${w.evaluation.bestSuccess}`);
    if (w.nextWeekPlan?.length)
      parts.push(`Rencana: ${w.nextWeekPlan.join("; ")}`);
    return parts.join(" | ");
  };
  const journalText = [...JOURNALS]
    .sort((a, b) => a.dateSort.localeCompare(b.dateSort))
    .map((j) => {
      const label = `[${j.date || j.dateSort}][${
        j.type === "daily" ? "H" : "M"
      }]`;
      const body =
        j.type === "daily"
          ? serializeDaily(j.daily)
          : serializeWeekly(j.weekly);
      return `${label} ${body}`;
    })
    .join("\n");
  return `Kamu adalah asisten jurnal milik 'Aarif Rahmaan, NIM 103112430182, mahasiswa Teknik Informatika semester 4. Jawab singkat, ramah, bahasa Indonesia. Jika tidak ada di jurnal, katakan tidak tahu. Jangan gunakan markdown bold. JURNAL: ${journalText}`;
})();
