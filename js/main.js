(()=> {

    // make an AJAX request using FETCH API

fetch('./data/classData.json')
.then(res => res.json())
.then(data => {

    debugger;
    
    console.log(data);

    // handle data
    // here's whwre you would call the function that puts the pieces on the page
    handleData(data);
})

    function handleData(data) {

        let courseName = document.querySelector('.profPanelText .text-muted'),
            profname = document.querySelector('.profPanelText .prof-name'),
            time = document.querySelector('.profPanelText .list-inline');


            courseName.innerHTML = data.coursename + "-" +'<span class="text-primary">' + data.coursecode +"</span>";
            profname.innerHTML = "Professor - "+data.profname;
            time.innerHTML = "<li>" + "&#128338" + data.classtime[0] + "</li>"  + "<li>" + "&#128338" + data.classtime[1] + "</li>"

            // added clock emoji that is different from the reference

    }

// .catch((err) => {
//     console.log(err);
// })

})();