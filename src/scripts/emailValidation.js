const emailValidation = () => {
	const emailInput = document.querySelector('.banner_email .wrapper-email')
	const sendEmailBtn = document.querySelector(
		'.banner_email .wrapper-email span'
	)

	console.log(sendEmailBtn)

	sendEmailBtn.addEventListener('click', () => {
		emailInput.classList.add('done')
	})
}
export default emailValidation
