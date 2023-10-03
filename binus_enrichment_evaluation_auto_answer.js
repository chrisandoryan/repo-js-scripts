var a = $('.evaluationArea')
var answers = [
    'Memiliki kemampuan yang cukup baik untuk melakukan tugas-tugas selama proses internship.',
    'Memilliki kemampuan komunikasi yang cukup baik untuk mendukung kolaborasi dan kerjasama tim',
    'Pencapaian pada internship sesuai dengan standar dan target yang diberikan',
    'Komunikasi berjalan dengan baik',
    'Komunikasi berjalan dengan baik'
]

answers.map((ans, idx) => {
    console.log(ans)
    console.log(a)
    a[idx].value = ans;
})