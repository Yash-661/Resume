import './resume.css'

export const Resume = ()  => {

	return (
		<>
			<div className="a4">
				<header>
					<span className="title name">YASWANTH PEYYALA</span> <br />
					<span>Andhra Pradesh, India</span> <br />
					<span><a href="mailto:yaswanthpeyyala661@gmail.com">yaswanthpeyyala661@gmail.com</a></span>,
					<span>&nbsp;7702878016,&nbsp;</span>
					<a href="https://www.linkedin.com/in/yaswanth-peyyala-10101827b/">LinkedIn</a>
				</header>
				<hr />
				{/* education */}
				<div className="education section">
					<h2 className='h1'>EDUCATION</h2>
					<ul className='para'>
						<li style={{marginBottom: "10px"}}>
							<strong>bachelor of technology - Electronics and Communication Engineering, 2023</strong>
							<div>Sri Vasavi Engineering College - Tadepalligudem, India</div>
							<div>2019 - 2023</div>
							<ul>
								<li>7.80 CGPA</li>
								<li>Final Grade: 74.29%</li>
							</ul>
						</li>
						<div className="two-columns">
							<li>
								<strong>Intermediate - MPC</strong>
								<div>Narayana Junior College - Razole, India</div>
								<div>2017 - 2019</div>
								<ul>
									<li>9.73 CGPA</li>
									<li>Final Grade: 92.44%</li>
								</ul>
							</li>
							<li>
								<strong>Secondary School Certificate</strong>
								<div>Narayana E.M. School - Razole, India</div>
								<div>2016 - 2017</div>
								<ul>
									<li>9.80 CGPA</li>
									<li>Final Grade: 93.10%</li>
								</ul>
							</li>
						</div>
					</ul>
				</div>
				<hr />
				{/* summary */}
				<div className="summary section">
					<h2 className='h1'>SUMMARY</h2>
					To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills,
					excellent time management and problem-solving skills.
				</div>
				<hr />
				{/* skills */}
				<div className="skills section">
					<h2 className='h1'>SKILLS</h2>
					<div className="two-columns">
						<div>
							<ul>
								<li>C++</li>
								<li>C</li>
								<li>ARM</li>
								<li>RTOS</li>
								<li>ESP-IDF</li>
							</ul>
						</div>
						<div>
							<ul>
								<li>OOPS in C++</li>
								<li>Protocols</li>
								<li>Python</li>
								<li>DSA</li>
								<li>Arduino-IDE</li>
							</ul>
						</div>
					</div>
				</div>
				<hr />
				{/* project */}
				<div className="Project section">
					<h2 className='h1'>Project</h2>
					<h4 className='h3'>Smart Home</h4>
					<p>Home automation system that makes our lives more convenient and easier. It is based on IoT, so we can
						have the facility to control our home from anywhere in the world.</p>
					<ul>
						<li>Arduino IDE.</li>
						<li>Embedded system.</li>
						<li>ESP32.</li>
					</ul>
				</div>
				<hr />
				{/* two colums for certification and languages */}
				<div className="two-columns">
					{/* certification */}
					<div className="certifications section">
						<h2 className='h1'>CERTIFICATIONS</h2>
						<li><strong>Python</strong> - Coursera on programming for Everybody (python).</li>
						<li><strong>Embedded Software Engineering Boot-Camp Program</strong> - Cranes Varsity, Bangalore.</li>
					</div>
					{/* languages */}
					<div className="languages section">
						<h2 className='h1'>LANGUAGES</h2>
						<ul>
							<li>English</li>
							<li>Telugu</li>
						</ul>
					</div>
				</div>
				<hr />
				{/* achievements */}
				<div className="achievements section">
					<h2 className='h1'>ACHIEVEMENTS</h2>
					<ul>
						<li>I got first place on the hackathon held in Cranes Varsity (Bangalore).</li>
						<li>I got second place at the project expo held in JNTUK.</li>
					</ul>
				</div>
			</div>
		</>
	);
}