//Создаем Переменные для базы данных
let name_alex = 'Alex'.toLocaleLowerCase()
let password = 7777
let balance = 10000
//Начинаем работу в банке
let ask_name = prompt('Выедите имя').trim().toLocaleLowerCase()
if (ask_name == name_alex) {// создаем условия для имени 
    let ask_password = +prompt('введите пинкод')
    if (ask_password == password) {// создаем условия для пароля
        let coin = +prompt('Какую сумму хотите обноличить?')
        if (coin < balance) {// создаем условия для баланса
            alert(`Операция прошла успешна.Ваш остаток равен ${balance - coin}$`)
        } else {// запасные действия
            alert('недостаточно средств')
        }
    } else {// запасные действия
        alert('пароль не верен')
    }
} else {// запасные действия
    alert('В базе данных не найден')
}


