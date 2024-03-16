import './resume.css'

export const Resume = () => {

	return (
		<div className='paper'>
			{/* Header */}
			<div className='header block'>
				<div className='title'>Yaswanth Peyyala</div>
				<div><span>Andhra Pradesh, India</span></div>
				<div>
					<a className='link' href="mailto:yaswanthpeyyala661@gmail.com">yaswanthpeyyala661@gmail.com</a>,&nbsp;
					<a className='link' href="tel:+917702878016">7702878016</a>,&nbsp;
					<a className='link' href="http://">LinkedIn</a>&nbsp;
				</div>

			</div>
			{/* Education */}
			<div className='education block2'>
				<div className='h1'>Education</div>
				<ul>
					<li style={{ marginBottom: "10px" }}>
						<div className='h2'>bachelor of technology - Electronics and Communication Engineering, 2023</div>
						<div>Sri Vasavi Engineering College - Tadepalligudem, India</div>
						<div>2019 - 2023</div>
						<ul>
							<li>7.80 CGPA</li>
							<li>Final Grade: 74.29%</li>
						</ul>
					</li>
					<div className="two-columns">
						<li>
							<div>Intermediate - MPC</div>
							<div>Narayana Junior College - Razole, India</div>
							<div>2017 - 2019</div>
							<ul>
								<li>9.73 CGPA</li>
								<li>Final Grade: 92.44%</li>
							</ul>
						</li>
						<li>
							<div>Secondary School Certificate</div>
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

		</div>
	);
}