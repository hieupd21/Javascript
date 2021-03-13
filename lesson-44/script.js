function start() {
    getCourse(renderCourse);
}

start();

// api
var api = 'http://localhost:3000/course';

// Read
function getCourse(callback) {
    fetch(api)
        .then(function(res) {
            return res.json();
        })
        .then(callback);
}

function renderCourse(course) {
    var courses = document.querySelector('#list-course');
    var htmls = courses.map(function(course) {
        return `<li>
                    <h4>${course.name}</h4>
                    <h4>${course.description}</h4>
                </li>`
    })
}

// Create
function create() {
    var btn = document.querySelector("#create")

    btn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        console.log(name);
        console.log(description);
    }
}

// Create Course
function createCourse(data, callback) {
    var options = {
        method: 'POST',
        body: JSON.stringify(data)
    }
    fetch(api, options)
        .then(function(res) {
            return res.json();
        })
        .then(callback);
}