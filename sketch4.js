var students = []; //store 'Student' objects

var studentName; //input field for student name
var studentHouse; //input field for studentHouse that student is in

var studentButton; //button to add a new student object to 'students'
var removeButton; //button to pop off most recently added element to 'students'
var saveButton; //button to save a .txt file of all the students in 'students'

var studentCount;
var count = 0;

let i = 0;

function setup()
{
    noCanvas();
    studentName = createInput('First and Last Name (e.g. Harry Potter)')
    studentHouse = createInput("Student's House (e.g. Gryffindor)")

    studentButton = createButton('Add Student')
    removeButton = createButton('Remove Student')
    saveButton = createButton('Save Student Info')

    studentName.size(231)
    studentName.position(20, 20)

    studentHouse.size(200)
    studentHouse.position(20, 50)

    saveButton.size(100)
    saveButton.position(20, 170)
    saveButton.mousePressed(saveInfo)

    studentButton.size(100)
    studentButton.position(20, 80)
    studentButton.mousePressed(addStudent)

    removeButton.size(100)
    removeButton.position(20, 120)
    removeButton.mousePressed(removeStudent)

    studentCount = select('#count')
    studentCount.style('font-family', 'arial')
    studentCount.style('font-size', '18px')
    studentCount.style('color', 'black')
    studentCount.position(1200, 20)
}

function draw()
{
    noLoop()

    for (; i < students.length; i++)
    {
        students[i].display(500, 0+i*20)
    }

    document.getElementById("count").innerHTML = "Student Count: " + count;
    
}

function addStudent()
{
    var name = studentName.value();
    var house = studentHouse.value();

    var student = new Student(name, house);

    students.push(student)
    ++count;

    loop()
}

function removeStudent()
{
    if (i > 0)
    {
        --i;
        students[i].remove()
        students.pop();
        --count;
        document.getElementById("count").innerHTML = "Student Count: " + count;
    }
}

function saveInfo()
{
    let students_sorted = students.slice().sort(); //alphabetically arrange all elements in 'students'
    saveStrings(students_sorted, 'students.txt')
}