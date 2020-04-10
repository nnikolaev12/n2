<script>
    import Project from "../components/Project.svelte";
    import projects from './_projects.js';
</script>

<svelte:head>
	<title>Nikolay Nikolaev - Portfolio</title>
	<meta name="description" content="Browse through various web projects in Nikolay's protfolio." />
	<meta property="og:title" content="Portfolio of Nikolay Nikolaev" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://nikolaynikolaev.com/portfolio" />
	<meta property="og:image" content="img/nikolay-nikolaev.webp" />
	<meta property="og:image:width" content="300" />
	<meta property="og:image:height" content="300" />
	<meta property="og:description" content="Get familiar with Nikolay's work by looking through his portfolio." /> 
	<meta property="og:site_name" content="Nikolay Nikolaev" />
	<meta property="og:locale" content="en_US" />
	<meta name="twitter:card" content="summary">
	<meta name="twitter:site" content="@nnikolaev12">
	<meta name="twitter:title" content="Nikolay Nikolaev's Portfolio">
	<meta name="twitter:description" content="Nikolay Nikolaev's portfolio to explore all the projects he took part in.">
	<meta name="twitter:image" content="img/nikolay-nikolaev.webp">
</svelte:head>

<header class="small-header">
    <div class="background-image" style="background-image:url(img/background.jpg)">
        <div class="overlay"></div>
    </div>
    <div class="header-text">
        <h1>Portfolio</h1>
        <ul class="breadcrumb">
            <li class="breadcrumb-item"><a href=".">Home</a></li>
            <li class="breadcrumb-item">Portfolio</li>
        </ul>
    </div>
</header>
<section id="portfolio">
    <div class="container">
        <div class="row">
            <div id="portfolio-grid" class="two-columns">
                {#each projects as project}
                    <Project {...project}/>
                {/each}
            </div>
        </div>
    </div>
</section>