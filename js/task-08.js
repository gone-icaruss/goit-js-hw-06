
// form class="login-form">
//       <label>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Login</button>
//     </form>

const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()
    const formElements = event.currentTarget.elements;
    // console.log(formElements)

    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (mail === '' || password === '') {
        alert('Заполните все поля')
    } else {
        const formData = {
        mail,
        password,
        };
        
    console.log(formData)
    }

    form.reset()


    

    // const formData = new FormData(event.currentTarget);
    // console.log(formData);

    // formData.forEach((value, name) => {
    //     console.log('onFormSubmit -> name', name);
    //     console.log('onFormSubmit -> value', value);
    // });
}