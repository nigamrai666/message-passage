(function () {

    const form = document.querySelector('#Mssg')
    form.addEventListener('submit', function (e) {
        e.preventDefault()


        const message = document.querySelector('#mssg-input')
        const feedback = document.querySelector('.feedback')
        const feedback2 = document.querySelector('.feedback2')
        const fdbck = document.querySelector('.fdbck')
        const message2 = document.querySelector('.mssgcontent')

        if(message.value === '' ){
            feedback.classList.add('show')
            setTimeout(function(){
                feedback.classList.remove('show')
                
            }, 4000)
        }
        else{
            message2.textContent = message.value
            message.value+=''
        }

        if(message.value === '' ){
            feedback2.classList.add('show')
            fdbck.classList.add('feedback2')
            setTimeout(function(){
                feedback2.classList.remove('show')
                fdbck.classList.remove('feedback2')
            }, 4000)
        }
       
    })



})()