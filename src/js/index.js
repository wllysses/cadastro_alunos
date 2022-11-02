import { Student } from '../js/class.js'

const inputStudentName = document.getElementById('studentName')
const inputStudentRegistration = document.getElementById('studentRegistration')
const inputStudentNote1 = (document.getElementById('studentNote1'))
const inputStudentNote2 = document.getElementById('studentNote2')
const inputStudentNote3 = document.getElementById('studentNote3')
const studentForm = document.querySelector('form')
const tableStudentInfo = document.querySelector('table')
const btnDeleteAll = document.querySelector('.deleteAll')

//instanciando o Objeto student da classe Student
let student = new Student()

//funções para cada ação
function createStudent(objStudent) {
    objStudent.setName(inputStudentName.value)
    objStudent.setRegistration(inputStudentRegistration.value)
    objStudent.setNote1(Number(inputStudentNote1.value))
    objStudent.setNote2(Number(inputStudentNote2.value))
    objStudent.setNote3(Number(inputStudentNote3.value))

    if (objStudent.getName() == '' || objStudent.getRegistration() == '' || objStudent.getNote1() == '' || objStudent.getNote2() == '' || objStudent.getNote3() == '') {
        alert('Preencha todos os campos.')
        return
    }

    tableStudentInfo.innerHTML += `
                                        <tr class='listItem'>
                                            <td id="name">${objStudent.getName()}</td>
                                            <td id="registration">${objStudent.getRegistration()}</td>
                                            <td id="note1">${objStudent.getNote1()}</td>
                                            <td id="note2">${objStudent.getNote2()}</td>
                                            <td id="note3">${objStudent.getNote3()}</td>
                                            <td id="average">${objStudent.calculateAverage()}</td>
                                            <td><i class="fa-solid fa-trash delete" style="cursor: pointer;" title="Apagar aluno"></i></td>
                                        </tr>
                                    `
    deleteStudent()
}

function deleteStudent() {
    const deleteButtons = document.querySelectorAll('i.delete')
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const elementToRemove = button.closest('tr')
            elementToRemove.remove()
        })
    })
}

function deleteAllStudent() {
    document.querySelectorAll('table .listItem').forEach(item => {
        item.remove()
    })
}

//evento para adicionar aluno
studentForm.onsubmit = function (e) {
    e.preventDefault()

    createStudent(student)
}

//evento para remover todos os alunos
btnDeleteAll.onclick = function() {
    if(confirm('Deseja realmente apagar todos os alunos?')) {
        deleteAllStudent()
    }
}