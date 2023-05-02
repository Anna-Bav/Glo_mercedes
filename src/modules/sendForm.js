    const serdFormFunc = (formClass) => {
        const form = document.querySelector(formClass)
    //https://jsonplaceholder.typicode.com

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        // alert('submit')

        let data = {}

        for (let { name, value } of form.elements) {
            if(name) {    //условие для отбрасывания кнопки из списка
                data[name] = value
            }
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => {
            if(response.status === 200 || response.status === 201) {
                return response.json()
            } else {
                throw new Error(response.status)
            }
            })
            .then(data => {
                alert('Данные успешно сохранены!') //В этом месте оповещаем или редирект на другую страницу
                form.reset()
            })
            .catch(error => {
            alert('Произошла ошибка, статус ' + error.message)
            })
    })
    }

    export default serdFormFunc;
    