$(function() {

    $('.btn-link[aria-expanded="true"]').closest('.accordion-item').addClass('active');
  $('.collapse').on('show.bs.collapse', function () {
	  $(this).closest('.accordion-item').addClass('active');
	});

  $('.collapse').on('hidden.bs.collapse', function () {
	  $(this).closest('.accordion-item').removeClass('active');
	});

    

});
const username = document.getElementById('username');
const password = document.getElementById('password')
const passwordCheck = document.getElementById('password-check')
const textUserName = document.getElementById('username-text')
const passwordText = document.getElementById('password-text-one')
const passwordCheckText = document.getElementById('password-text-two')
const submit = document.getElementById('submit')
const form = document.getElementById('form')
const passwordShowOne = document.querySelector('.one')
const passwordHideOne = document.querySelector('.eye-one')
const passwordShowTwo = document.querySelector('.two')
const passwordHideTwo = document.querySelector('.eye-two')

form.addEventListener('submit', (e) =>{
	let messages = []
    if (username.value === '' || username.value == null ) {
        messages.push('Please fill in your name')
        console.log('work')
    }
    if (messages.length > 0 ) {
        e.preventDefault()
		textUserName.style.color ='red';

        textUserName.innerText = messages.join(' , ')
        console.log('should work')
    }
    if ( username.value.length > 30) {
        e.preventDefault()
		textUserName.style.color ='red';

        textUserName.innerHTML = 'This username is too long!'

    }
    
    if (password.value.length <= 6) {
        e.preventDefault()
		passwordText.style.color ='red';

        passwordText.innerHTML = 'Password should be longer than 6 characters!'

    
    }


	if (password.value.length != 0) {

		if (password.value == passwordCheck.value ) {
			passwordCheckText.style.color ='green';
			passwordCheckText.innerHTML = 'Passwords match!'
		   console.log('tell me moreee');
		}
		else{
			e.preventDefault()
			passwordCheckText.style.color ='red';
			passwordCheckText.innerHTML = 'Passwords don\'t match';
	
		}
		
	}
   
})


// first password validation
passwordHideOne.addEventListener('click', () =>{
	if (password.getAttribute('type') === 'text') {
		password.setAttribute('type', 'password')
		passwordShowOne.style.display = 'block';
			passwordHideOne.style.display = 'none';
	}
})

	passwordShowOne.addEventListener('click', ()=>{
		console.log('clicked');
		
		if (password.getAttribute('type') === 'password') {
			password.setAttribute('type', 'text')
			console.log('three');
			passwordShowOne.style.display = 'none';
			passwordHideOne.style.display = 'block';
		}
		 else {
			password.setAttribute('type', 'password')
			console.log('four');
			passwordShowOne.style.display = 'block';
			passwordHideOne.style.display = 'none';

		}
	})

// confirm password  validation
	passwordHideTwo.addEventListener('click', () =>{
		if (passwordCheck.getAttribute('type') === 'text') {
			passwordCheck.setAttribute('type', 'password')
			passwordShowTwo.style.display = 'block';
			passwordHideTwo.style.display = 'none';
		}
	})
	
		passwordShowTwo.addEventListener('click', ()=>{
			console.log('clicked');
			
			if (passwordCheck.getAttribute('type') === 'password') {
				passwordCheck.setAttribute('type', 'text')
				console.log('three');
				passwordShowTwo.style.display = 'none';
				passwordHideTwo.style.display = 'block';
			}
			 else {
				passwordCheck.setAttribute('type', 'password')
				console.log('four');
				passwordShowTwo.style.display = 'block';
				passwordHideTwo.style.display = 'none';
	
			}
		})
