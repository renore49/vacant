var NewComponent = React.createClass({
	render: function () {
		return (
			<div>
				<header role='banner'>
					<div id='cd-logo'>
						<a href='#0'>
							<img
								src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-logo_1.svg'
								alt='Logo'
							/>
						</a>
					</div>
					<nav className='main-nav'>
						<ul>
							<li>
								<a className='cd-signin' href='#0'>
									Sign in
								</a>
							</li>
							<li>
								<a className='cd-signup' href='#0'>
									Sign up
								</a>
							</li>
						</ul>
					</nav>
				</header>
				<div className='cd-user-modal'>
					{' '}
					<div className='cd-user-modal-container'>
						{' '}
						<ul className='cd-switcher'>
							<li>
								<a href='#0'>Sign in</a>
							</li>
							<li>
								<a href='#0'>New account</a>
							</li>
						</ul>
						<div id='cd-login'>
							{' '}
							<form className='cd-form'>
								<p className='fieldset'>
									<label
										className='image-replace cd-email'
										htmlFor='signin-email'
									>
										E-mail
									</label>
									<input
										className='full-width has-padding has-border'
										id='signin-email'
										type='email'
										placeholder='E-mail'
									/>
									<span className='cd-error-message'>Error message here!</span>
								</p>
								<p className='fieldset'>
									<label
										className='image-replace cd-password'
										htmlFor='signin-password'
									>
										Password
									</label>
									<input
										className='full-width has-padding has-border'
										id='signin-password'
										type='text'
										placeholder='Password'
									/>
									<a href='#0' className='hide-password'>
										Hide
									</a>
									<span className='cd-error-message'>Error message here!</span>
								</p>
								<p className='fieldset'>
									<input type='checkbox' id='remember-me' defaultChecked />
									<label htmlFor='remember-me'>Remember me</label>
								</p>
								<p className='fieldset'>
									<input
										className='full-width'
										type='submit'
										defaultValue='Login'
									/>
								</p>
							</form>
							<p className='cd-form-bottom-message'>
								<a href='#0'>Forgot your password?</a>
							</p>
						</div>
						<div id='cd-signup'>
							<form className='cd-form'>
								<p className='fieldset'>
									<label
										className='image-replace cd-username'
										htmlFor='signup-username'
									>
										Username
									</label>
									<input
										className='full-width has-padding has-border'
										id='signup-username'
										type='text'
										placeholder='Username'
									/>
									<span className='cd-error-message'>Error message here!</span>
								</p>
								<p className='fieldset'>
									<label
										className='image-replace cd-email'
										htmlFor='signup-email'
									>
										E-mail
									</label>
									<input
										className='full-width has-padding has-border'
										id='signup-email'
										type='email'
										placeholder='E-mail'
									/>
									<span className='cd-error-message'>Error message here!</span>
								</p>
								<p className='fieldset'>
									<label
										className='image-replace cd-password'
										htmlFor='signup-password'
									>
										Password
									</label>
									<input
										className='full-width has-padding has-border'
										id='signup-password'
										type='text'
										placeholder='Password'
									/>
									<a href='#0' className='hide-password'>
										Hide
									</a>
									<span className='cd-error-message'>Error message here!</span>
								</p>
								<p className='fieldset'>
									<input type='checkbox' id='accept-terms' />
									<label htmlFor='accept-terms'>
										I agree to the <a href='#0'>Terms</a>
									</label>
								</p>
								<p className='fieldset'>
									<input
										className='full-width has-padding'
										type='submit'
										defaultValue='Create account'
									/>
								</p>
							</form>
						</div>
						<div id='cd-reset-password'>
							<p className='cd-form-message'>
								Lost your password? Please enter your email address. You will
								receive a link to create a new password.
							</p>
							<form className='cd-form'>
								<p className='fieldset'>
									<label
										className='image-replace cd-email'
										htmlFor='reset-email'
									>
										E-mail
									</label>
									<input
										className='full-width has-padding has-border'
										id='reset-email'
										type='email'
										placeholder='E-mail'
									/>
									<span className='cd-error-message'>Error message here!</span>
								</p>
								<p className='fieldset'>
									<input
										className='full-width has-padding'
										type='submit'
										defaultValue='Reset password'
									/>
								</p>
							</form>
							<p className='cd-form-bottom-message'>
								<a href='#0'>Back to log-in</a>
							</p>
						</div>{' '}
						<a href='#0' className='cd-close-form'>
							Close
						</a>
					</div>{' '}
				</div>{' '}
			</div>
		)
	},
})
