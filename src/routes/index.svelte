<script>
import Project from '../components/Project.svelte';
import projects from './_projects.js';


let notice = "";

function contactSend() {
	const data =  new FormData( document.forms.contactForm );

	const res = fetch( "https://getform.io/f/33969f3d-9074-4b35-9b14-9c4e32548c07", {
		method: "POST",
		body: data
	} );

	notice = "Thank you! Your message has been sent.";
}
// TODO: optimize libs and code, finish seo meta
</script>

<style>

</style>

<svelte:head>
	<title>Nikolay Nikolaev - SEO Expert & Web Developer</title>
	<meta name="description" content="Nikolay Nikolaev is an SEO expert and web developer with more than 8 years of experience in the SEO field and 4 years as a web developer." />
	<meta property="og:title" content="SEO and Web Development by Nikolay Nikolaev" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://nikolaynikolaev.com/" />
	<meta property="og:image" content="img/nikolay-nikolaev.webp" />
	<meta property="og:image:width" content="300" />
	<meta property="og:image:height" content="300" />
	<meta property="og:description" content="As an experienced SEO expert and web developer, Nikolay Nikolaev is always looking for new challenges and innovations in both fields." /> 
	<meta property="og:site_name" content="Nikolay Nikolaev" />
	<meta property="og:locale" content="en_US" />
	<meta name="twitter:card" content="summary">
	<meta name="twitter:site" content="@nnikolaev12">
	<meta name="twitter:title" content="Nikolay Nikolaev - SEO Services and Web Dev">
	<meta name="twitter:description" content="Nikolay Nikolaev's skills in SEO and web development are helping businesses and individuals push their online presence.">
	<meta name="twitter:image" content="img/nikolay-nikolaev.webp">
</svelte:head>

<header id="home">
	<div id="particles"></div>
	<div class="background-image" style="background-image:url(img/background.webp)">
		<div class="overlay"></div>
	</div>
	<div class="header-text">
		<h1>Nikolay Nikolaev</h1>
		<h3>
			 <span class="animated-text">
				 <b>Web Developer</b>
                 <b>SEO Specialist</b>
			 </span>
		</h3>
	</div>
	<div class="scroll-down">
		<a href="#about"><i class="fa fa-angle-double-down"></i></a>
	</div>
</header>
<section id="about">
	<div class="container wow fadeIn" data-wow-delay="0.4">
		<div class="row">
			<div class="header-section">
				<p>1</p>
				<h2>About me</h2>
			</div>
			<div class="col-md-6 col-sm-5">
				<div class="about">
					<div class="about-img">
						<img src="img/nikolay-nikolaev.webp" alt="Nikolay Nikolaev Photo">
					</div>
				</div>
			</div>
			<div class="col-md-5 col-sm-7">
				<div class="about">
					<div class="about-text">
						<h4>Hi, my name is <span>Nikolay Nikolaev</span></h4>
						<p>Nikolay Nikolaev is an SEO expert and Web Developer experienced in building and optimizing websites for businesses and individuals. His strong background in SEO and self-taught web development skills have helped him push successful web projects for years now.</p>
					</div>
					<div class="about-link">
						<!--<a href="/blog/" class="outline-btn">Read my Blog</a>-->
						<a href="#contact" class="primary-btn">Contact</a>
					</div>
				</div>
			</div>
			<div id="resume" class="col-md-offset-1 col-md-10 col-sm-12">
                <h2 style="text-align: center;">Projects</h2>
				<div class="col-sm-6">
					<div class="resume">
						<div class="resume-header">
							<h4>Sematigo</h4>
							<p>Digital Marketing Agency</p>
						</div>
						<p>Sematigo is a project mainly engaged in digital marketing, SEO & Web development. The brand is serving small and medium businesses from the USA and the UK. It delivers long-term results by building up a reputation, driving targeted audience, and establishing a lasting online presence for the business.</p>
						<a href="https://sematigo.com" rel="nofollow noopener noreferrer" target="_blank" class="primary-btn">View Project</a>
					</div>
				</div>
				<div class="col-sm-6">
					<div class="resume">
						<div class="resume-header">
							<h4>Ultimate Poker Coaching</h4>
							<p>Online Poker Coaching Service</p>
						</div>
						<p>Ultimate Poker Coaching aims to bring together professional poker players with coaching skills to anyone, who wishes to become proficient in the most popular card game. The coaching sessions are taking place online and focus on improving every student individually.</p>
						<a href="https://ultimatepokercoaching.com" rel="nofollow noopener noreferrer" target="_blank" class="primary-btn">View Project</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section id="service">
	<div class="container wow fadeIn" data-wow-delay="0.4">
		<div class="row">
			<div class="header-section">
				<p>2</p>
				<h2>How Can I Help</h2>
			</div>
			<div class="col-md-6  col-sm-12">
				<div class="service">
					<div class="service-content">
						<div class="service-icon">
							<i class="fa fa-hourglass-o"></i>
						</div>
						<h4>SEO</h4>
						<p>On-site, Off-site, Technical</p>
					</div>
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="service">
					<div class="service-content">
						<div class="service-icon">
							<i class="fa fa-tablet"></i>
						</div>
						<h4>Web Development</h4>
						<p>HTML, CSS, PHP, JavaScript</p>
					</div>
				</div>
			</div>
			<div class="col-md-4 col-sm-12">
				<div class="service">
					<div class="service-content">
						<div class="service-icon">
							<i class="fa fa-paper-plane-o"></i>
						</div>
						<h4>Digital Marketing</h4>
						<p>Email marketing, Advertising</p>
					</div>
				</div>
			</div>
			<div class="col-md-4 col-sm-12">
				<div class="service">
					<div class="service-content">
						<div class="service-icon">
							<i class="fa fa-magic"></i>
						</div>
						<h4>Automation</h4>
						<p>Python, Spreadsheets</p>
					</div>
				</div>
			</div>
			<div class="col-md-4 col-sm-12">
				<div class="service">
					<div class="service-content">
						<div class="service-icon">
							<i class="fa fa-diamond"></i>
						</div>
						<h4>Consultation</h4>
						<p>Long-term strategy, advice</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section id="portfolio">
	<div class="container">
		<div class="row">
			<div class="header-section">
				<p>3</p>
				<h2>My portfolio</h2>
			</div>
			<div id="portfolio-grid" class="col-md-offset-2 col-md-8">
				{#each projects.slice(0, 3) as project, index}
				
				<Project {...project} />
				{/each}
			</div>
			<div class="col-md-12 load-more">
				<a href="/portfolio/" class="outline-btn">See All</a>
			</div>
		</div>
	</div>
</section>
<section id="contact">
	<div class="container wow fadeIn" data-wow-delay="0.4">
		<div class="row">
			<div class="header-section">
				<p>4</p>
				<h2>Contact me</h2>
			</div>
			<div class="col-md-8 col-md-offset-2">
				<form id="contactForm" class="contact-form">
					<div class="contact-input">
						<input id="contact-name" type="text" name="name" placeholder="Your Name" required>
					</div>
					<div class="contact-input">
						<input id="contact-email" type="email" name="email" placeholder="Your Email" required>
					</div>
					<div class="contact-input">
						<textarea id="contact-message" name="message" placeholder="Your message" required></textarea>
					</div>
					<div class="submit-input">
						<button class="outline-btn" on:click|preventDefault={contactSend}>Send</button>
					</div>
				</form>
				<div class="contact-reponse">{notice}</div>
			</div>
		</div>
	</div>
</section>
