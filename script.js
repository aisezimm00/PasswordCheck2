// Дз 1
// У вас на странице есть два поля для заполнения(input):
// 1) нужен для записи имени пользователя
// 2) для пароли. Пароль обязательно должен содержать сочетание букв и цифр
// Добавьте кнопку "сохранить" после которой на странице должно выходить сообщение:
// Если всё хорошо, то "Ваши данные записаны" иначе должно выйти сообщение "пароль должен содержать сочетание букв и цифр"
// Доп задание: первый инпут должен принимать только латинские буквы.
//  Для решения воспользуйтесь этим - str.replace(/[A-Za-z]/, '')

// const str = '1,2  ,3    ,4 ,  5,  6, 7  '
// const regexp = /\s*,\s*/
// const res = str.split(regexp)
// console.log(res)

// const name = document.getElementById('input1').value
// const password = document.getElementById('input2').value

// function passwordCheck() {
//     let regex = /^\d/

//     if (regex.test(password)) {
//         alert("Password is correct")
//     } else {
//         alert("Password is incorrect")
//     }
// }

function passwordCheck() {
    const user = document.getElementById('username')
    const password1 = document.getElementById('password')

    const username = user.value
    const password = password1.value


    let regex = /^(?=.*[A-Za-z])(?=.*\d)/

    if (regex.test(password)) {
        alert("Ваши данные записаны")
    } else {
        alert("пароль должен содержать сочетание букв и цифр")
    }
}
