const CHATBOT_SYSTEM_PROMPT = (() => {
  const truncate = (str, max = 60) =>
    str && str.length > max ? str.slice(0, max) + "…" : str ?? "";
  const serializeDaily = (d) => {
    if (!d) return "";
    const parts = [];
    if (d.targets?.length)
      parts.push(`Target: ${d.targets.map((t) => truncate(t)).join("; ")}`);
    if (d.activities?.length)
      parts.push(
        `Aktivitas: ${d.activities
          .map((a) => `${a.activity} (${a.status})`)
          .join("; ")}`
      );
    if (d.reflection?.score != null)
      parts.push(`Skor: ${d.reflection.score}/10`);
    return parts.join(" | ");
  };
  const serializeWeekly = (w) => {
    if (!w) return "";
    const parts = [];
    if (w.weekNumber != null) parts.push(`Minggu ke-${w.weekNumber}`);
    if (w.achievements?.length)
      parts.push(
        `Capaian: ${w.achievements.map((a) => truncate(a)).join("; ")}`
      );
    if (w.semesterTarget?.progress != null)
      parts.push(`Progress: ${w.semesterTarget.progress}%`);
    if (w.nextWeekPlan?.length)
      parts.push(
        `Rencana: ${w.nextWeekPlan.map((p) => truncate(p)).join("; ")}`
      );
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
  return `Kamu asisten jurnal 'Aarif Rahmaan, mahasiswa Teknik Informatika semester 4. Jawab singkat dan ramah dalam bahasa Indonesia. Jika tidak ada di data, katakan tidak tahu. JURNAL: ${journalText}`;
})();
