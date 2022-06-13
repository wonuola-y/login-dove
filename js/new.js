$(function() {

    $('.btn-link[aria-expanded="true"]').closest('.accordion-item').addClass('active');
  $('.collapse').on('show.bs.collapse', function () {
	  $(this).closest('.accordion-item').addClass('active');
	});

  $('.collapse').on('hidden.bs.collapse', function () {
	  $(this).closest('.accordion-item').removeClass('active');
	});

    

});

const username = document.getElementById('username')
const textUserName = document.getElementById('username-text')
const passwordShowThree = document.querySelector('.three')
const passwordHideThree = document.querySelector('.eye-three')
const passworded = document.getElementById('passworded')
const passwordCheckText = document.getElementById('password-text')
const submit = document.getElementById('submit')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
	let messages = []
    if (username.value === '' || username.value === null ) {
        messages.push('Please fill in your name')
        console.log('work')
    }
    if (messages.length > 0) {
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
    if (username.value.length < 4  ) {
        e.preventDefault()
		textUserName.style.color ='red';
        textUserName.innerHTML = 'This username is too short!';
    }
		if (passwordCheckText.value === '' || passwordCheckText.value === null) {
			e.preventDefault()
			passwordCheckText.style.color = 'red';
			passwordCheckText.innerHTML = 'Password required!';
	}
		
 })

     

    // password validation for index.html

		passwordHideThree.addEventListener('click', () =>{
		console.log('hello');
	if (passworded.getAttribute('type') === 'text') {
		passworded.setAttribute('type', 'password')
		passwordShowThree.style.display = 'block';
			passwordHideThree.style.display = 'none';
	}
})

	    passwordShowThree.addEventListener('click', ()=>{
		console.log('clicked');
		
		if (passworded.getAttribute('type') === 'password') {
			passworded.setAttribute('type', 'text')
			console.log('three');
			passwordShowThree.style.display = 'none';
			passwordHideThree.style.display = 'block';
		}
		 else {
			passworded.setAttribute('type', 'password')
			console.log('four');
			passwordShowThree.style.display = 'block';
			passwordHideThree.style.display = 'none';

		}
	})
