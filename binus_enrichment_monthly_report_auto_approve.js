const timer = ms => new Promise(res => setTimeout(res, ms))
window.alert = function() {
    console.log.apply(console, arguments);
};

async function approve_all_monthly_reports () { 
    // Iterate through students logbooks
    var students = $('.detailsName')
    for (var i = 0; i < students.length; i++) {
        let stud = students[i];
        stud.click();
        await timer(5000); 

        // Iterate through logbook months
        let approve_buttons = $('button.button.button-primary');
        for (var j = 0; j < approve_buttons.length; j++) {
            let btn = approve_buttons[j];
            btn.click();

            await timer(5000); 
        }
    }
}

approve_all_monthly_reports();
