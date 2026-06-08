import re
import random

file_path = r"d:\FAQIIH\1 KULIAH\1 MATA KULIAH\SEMESTER 4\6 CAK2MDB2_GLOBAL ICT INSIGHT [MDI]\ASSIGNMENT\CAK2MDB2-WGTIK\js\data.js"

with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

new_lines = []
target_counter = 0

targets_pool = [
    '"Memahami materi perkuliahan dengan baik"',
    '"Menyelesaikan tugas praktikum tepat waktu"',
    '"Mengerjakan project akhir mata kuliah"'
]

for i, line in enumerate(lines):
    # Skip modifying the Identity and early lines if no X's
    if "X" not in line:
        new_lines.append(line)
        continue

    # Replacements based on key
    if 'time: "XXXXXXXXXX"' in line:
        line = line.replace('time: "XXXXXXXXXX"', 'time: "19:00 - 21:00"')
    elif 'activity: "XXXXXXXXXX"' in line:
        line = line.replace('activity: "XXXXXXXXXX"', 'activity: "Belajar mandiri dan mengerjakan tugas"')
    elif 'output: "XXXXXXXXXX"' in line:
        if "Kelas" in lines[i-1]:
            line = line.replace('output: "XXXXXXXXXX"', 'output: "Memahami materi yang disampaikan"')
        else:
            line = line.replace('output: "XXXXXXXXXX"', 'output: "Progress tugas bertambah"')
    elif 'results: "XXXXXXXXXX"' in line or 'results: "XXXXXXXXXXXXXXXXXXXX"' in line:
        line = re.sub(r'results:\s*"X+"', 'results: "Kegiatan berjalan lancar dan target hari ini tercapai dengan baik"', line)
    elif 'solutions: "XXXXXXXXXX"' in line:
        line = line.replace('solutions: "XXXXXXXXXX"', 'solutions: "Meningkatkan fokus dan mengurangi distraksi"')
    elif 'learned: "XXXXXXXXXX"' in line:
        line = line.replace('learned: "XXXXXXXXXX"', 'learned: "Konsistensi dan manajemen waktu sangat penting untuk produktivitas"')
    elif 'improve: "XXXXXXXXXX"' in line:
        line = line.replace('improve: "XXXXXXXXXX"', 'improve: "Harus lebih disiplin dalam mengikuti jadwal yang telah dibuat"')
    elif '"XXXXXXXXXXXXXXXXXXXXXXX"' in line:
        line = line.replace('"XXXXXXXXXXXXXXXXXXXXXXX"', targets_pool[target_counter % 3])
        target_counter += 1
    elif 'focus: "XXXXXXXXXX"' in line:
        line = line.replace('focus: "XXXXXXXXXX"', 'focus: "Mengerjakan tugas dan review materi"')
    elif 'duration: "XXXXXXXXXX"' in line:
        line = line.replace('duration: "XXXXXXXXXX"', 'duration: "2 Jam"')
    elif 'achievements: ["XXXXXXXXXX", "XXXXXXXXXX"]' in line:
        line = line.replace('achievements: ["XXXXXXXXXX", "XXXXXXXXXX"]', 'achievements: ["Menyelesaikan tugas mingguan", "Memahami konsep materi baru"]')
    elif 'note: "XXXXXXXXXX"' in line:
        line = line.replace('note: "XXXXXXXXXX"', 'note: "Tetap semangat dan jaga kesehatan"')
    elif 'akademik: "XXXXXXXXXX"' in line:
        line = line.replace('akademik: "XXXXXXXXXX"', 'akademik: "Tugas cukup banyak dan menumpuk"')
    elif 'teknis: "XXXXXXXXXX"' in line:
        line = line.replace('teknis: "XXXXXXXXXX"', 'teknis: "Koneksi internet sesekali tidak stabil"')
    elif 'pribadi: "XXXXXXXXXX"' in line:
        line = line.replace('pribadi: "XXXXXXXXXX"', 'pribadi: "Kurang istirahat di akhir pekan"')
    elif 'bestSuccess: "XXXXXXXXXX"' in line:
        line = line.replace('bestSuccess: "XXXXXXXXXX"', 'bestSuccess: "Semua tugas selesai tepat waktu"')
    elif 'biggestMistake: "XXXXXXXXXX"' in line:
        line = line.replace('biggestMistake: "XXXXXXXXXX"', 'biggestMistake: "Menunda pekerjaan di awal minggu"')
    elif 'nextStrategy: "XXXXXXXXXX"' in line:
        line = line.replace('nextStrategy: "XXXXXXXXXX"', 'nextStrategy: "Mencicil tugas lebih awal dan lebih fokus"')
    elif 'nextWeekPlan: ["XXXXXXXXXX", "XXXXXXXXXX"]' in line:
        line = line.replace('nextWeekPlan: ["XXXXXXXXXX", "XXXXXXXXXX"]', 'nextWeekPlan: ["Belajar materi baru", "Mengerjakan tugas sebelum deadline"]')
    
    # Specific edge cases for weekly formatting
    if 'id: "XXXXXXXXXX"' in line:
        line = line.replace('id: "XXXXXXXXXX"', 'id: "weekly-2026-05-25"')
    elif 'date: "XXXXXXXXXX"' in line:
        line = line.replace('date: "XXXXXXXXXX"', 'date: "Minggu ke-12 · 25-29 Mei 2026"')
    elif 'dateSort: "XXXXXXXXXX"' in line:
        line = line.replace('dateSort: "XXXXXXXXXX"', 'dateSort: "2026-05-25"')
    elif 'date: "Minggu ke XXXXXX"' in line:
        line = line.replace('date: "Minggu ke XXXXXX"', 'date: "Minggu ke-12 · 25-29 Mei 2026"')
    elif 'dateSort: "XXXXXX"' in line:
        line = line.replace('dateSort: "XXXXXX"', 'dateSort: "2026-05-25"')
    elif 'weekNumber: "XXXXXX"' in line:
        line = line.replace('weekNumber: "XXXXXX"', 'weekNumber: 12')
    
    # Also catch any residual "XXXXXXXXXX" just in case
    if 'output: "XXXXXXXXXXXXXXXXXXXX"' in line:
        line = line.replace('output: "XXXXXXXXXXXXXXXXXXXX"', 'output: "Tugas selesai dengan baik"')
    if 'results: "XXXXXXXXXXXXXXXXXXXX"' in line:
        line = line.replace('results: "XXXXXXXXXXXXXXXXXXXX"', 'results: "Target hari ini tercapai"')
    
    line = re.sub(r'"XX+"', '"Sudah diselesaikan"', line)
    
    new_lines.append(line)

with open(file_path, "w", encoding="utf-8") as f:
    f.writelines(new_lines)

print("Replacement complete.")
