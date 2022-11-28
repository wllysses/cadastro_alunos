import Student from '../js/class.js'

const inputStudentName = document.getElementById('studentName')
const inputStudentRegistration = document.getElementById('studentRegistration')
const inputStudentNote1 = (document.getElementById('studentNote1'))
const inputStudentNote2 = document.getElementById('studentNote2')
const inputStudentNote3 = document.getElementById('studentNote3')
const studentForm = document.querySelector('form')
const tableStudentInfo = document.querySelector('.studentRegistryList')
const btnDeleteAllStudents = document.querySelector('#deleteAllStudents')


function createStudent() {
    let student = new Student(inputStudentName.value, inputStudentRegistration.value, inputStudentNote1.value, inputStudentNote2.value, inputStudentNote3.value)


    const trElement = document.createElement('tr')
    trElement.setAttribute('class', 'listItem')
    tableStudentInfo.appendChild(trElement)

    const tdElementName = document.createElement('td')
    tdElementName.setAttribute('id', 'name')
    tdElementName.innerText = student.getName()
    trElement.appendChild(tdElementName)

    const tdElementRegistration = document.createElement('td')
    tdElementRegistration.setAttribute('id', 'registration')
    tdElementRegistration.innerText = student.getRegistration()
    trElement.appendChild(tdElementRegistration)

    const tdElementNote1 = document.createElement('td')
    tdElementNote1.setAttribute('id', 'note1')
    tdElementNote1.innerText = student.getNote1()
    trElement.appendChild(tdElementNote1)

    const tdElementNote2 = document.createElement('td')
    tdElementNote2.setAttribute('id', 'note2')
    tdElementNote2.innerText = student.getNote2()
    trElement.appendChild(tdElementNote2)

    const tdElementNote3 = document.createElement('td')
    tdElementNote3.setAttribute('id', 'note3')
    tdElementNote3.innerText = student.getNote3()
    trElement.appendChild(tdElementNote3)

    const tdElementAverage = document.createElement('td')
    tdElementAverage.setAttribute('id', 'average')
    tdElementAverage.innerText = student.calculateAverage()
    trElement.appendChild(tdElementAverage)

    const tdElementBtnDeleteStudent = document.createElement('td')
    tdElementBtnDeleteStudent.innerHTML = '<i class="fa-solid fa-trash delete" style="cursor: pointer;" title="Apagar aluno"></i>'
    trElement.appendChild(tdElementBtnDeleteStudent)

    deleteStudent()
}

function deleteStudent() {
    tableStudentInfo.addEventListener('click', (e) => {
        const elementClicked = e.target
        if(elementClicked.classList.contains('delete')) {
            elementClicked.closest('tr').remove()
        }
    })
}

function deleteAllStudent() {
    tableStudentInfo.innerHTML = ''
}

studentForm.onsubmit = function (event) {
    event.preventDefault()

    createStudent()
}

btnDeleteAllStudents.onclick = function() {
    let questionToUser = confirm('Deseja apagar todos os alunos?')
    if(questionToUser) {
        deleteAllStudent()
    }
}