const timer = ms => new Promise(res => setTimeout(res, ms))
window.alert = function() {
    console.log.apply(console, arguments);
};

function format_date_time(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    const twelveHour = hours % 12 || 12;
    
    return `${year}-${month}-${day} ${twelveHour}:${minutes} ${ampm}`;
}

function get_random_date_in_second_week(monthName, year) {
    const daysInMonth = new Date(year, new Date(Date.parse(monthName + ' 1,' + year)).getMonth() + 1, 0).getDate();
    const startDate = Math.max(8, Math.ceil(daysInMonth / 4));
    const endDate = Math.min(14, Math.ceil(daysInMonth / 2)); 

    const randomDay = Math.floor(Math.random() * (endDate - startDate + 1)) + startDate;

    return new Date(year, new Date(Date.parse(monthName + ' 1,' + year)).getMonth(), randomDay);
}

async function fill_all_logbooks () { 
    // TODO: Modify this as needed
    const FEEDBACK_INPUT = "berjalan dengan baik, good job."

    // Iterate through students logbooks
    var students = $('.detailsName')
    for (var i = 0; i < students.length; i++) {
        let stud = students[i];
        stud.click();
        await timer(5000); 

        // Iterate through logbook months
        let months = $('#monthTab li a:has(span)');
        for (var j = 0; j < months.length; j++) {
            let lis = months[j];
            lis.click();

            await timer(5000); 
            
            // Generate random date of in a second week of each logbook month
            let first_day_of_the_logbook_month = $("#logBookTable > tbody > tr:nth-child(1) > td.dt-center.sorting_1").html();
            first_day_of_the_logbook_month = new Date(first_day_of_the_logbook_month);
            
            let current_logbook_year = first_day_of_the_logbook_month.getFullYear();
            let current_logbook_month = first_day_of_the_logbook_month.toLocaleDateString('en-US', { month: 'long' });
            
            let consultation_date_input = $('#ConsDate');
            let consultation_date = format_date_time(get_random_date_in_second_week(current_logbook_month, current_logbook_year));
            consultation_date_input.val(consultation_date);

            // Fill in the consultation form
            let feedback_input = $('#Feedback');
            feedback_input.val(FEEDBACK_INPUT)

            console.log(`Filling out ${current_logbook_month} tab...`);
            console.log(`Consultation Date: ${consultation_date}`);
            console.log(`Feedback: ${FEEDBACK_INPUT}`);
            
            // Approve all
            let approve_btn = $('#btnapp');
            approve_btn.click();
            
            await timer(5000); 
        }
    }
}

fill_all_logbooks();
