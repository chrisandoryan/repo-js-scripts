const timer = ms => new Promise(res => setTimeout(res, ms))
window.alert = function() {
    console.log.apply(console, arguments);
};

function is_still_loading(refresh_rate=1000) {
    const interval_id = setInterval(() => {
      if (!document.getElementById('bubble-loading')) {
          clearInterval(interval_id);
          console.log("Loading is gone...")
          return true
      } else {
          console.log("Still loading...")
      }
    }, refresh_rate);
}

async function approve_all_assignments() { 
    // Iterate through students logbooks
    var students = $('.showStudentAssignmentBtn')
    for (var i = 0; i < students.length; i++) {
        let stud = students[i];
        stud.click();
        is_still_loading(500);
        await timer(1000); 

        // Iterate through logbook months
        let approve_buttons = $('button.button.button-primary');
        for (var j = 0; j < approve_buttons.length; j++) {
            let btn = approve_buttons[j];
            btn.click();

            is_still_loading(500);
            await timer(1000); 
        }
    }
}

approve_all_assignments();
