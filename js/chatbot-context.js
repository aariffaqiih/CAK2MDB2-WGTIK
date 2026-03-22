const CHATBOT_SYSTEM_PROMPT = (() => {
  const truncate = (str, max = 50) =>
    str && str.length > max ? str.slice(0, max) + "…" : str ?? "";
  const serializeDaily = (d) => {
    if (!d) return "";
    const acts = (d.activities ?? [])
      .map((a) => truncate(a.activity, 40))
      .join("; ");
    const score =
      d.reflection?.score != null ? ` Skor:${d.reflection.score}` : "";
    return `${acts}${score}`;
  };
  const serializeWeekly = (w) => {
    if (!w) return "";
    const ach = (w.achievements ?? []).map((a) => truncate(a, 50)).join("; ");
    const prog =
      w.semesterTarget?.progress != null
        ? ` Progress:${w.semesterTarget.progress}%`
        : "";
    return `Minggu ke-${w.weekNumber ?? "?"}. ${ach}${prog}`;
  };
  const journalText = [...JOURNALS]
    .sort((a, b) => a.dateSort.localeCompare(b.dateSort))
    .map((j) => {
      const tipe = j.type === "daily" ? "H" : "M";
      const body =
        j.type === "daily"
          ? serializeDaily(j.daily)
          : serializeWeekly(j.weekly);
      return `[${j.dateSort}][${tipe}] ${body}`;
    })
    .join("\n");
  return `Kamu asisten jurnal 'Aarif Rahmaan, mahasiswa Teknik Informatika sem.4. Jawab singkat bahasa Indonesia. Jika tidak ada di data, katakan tidak tahu. JURNAL: ${journalText}`;
})();
