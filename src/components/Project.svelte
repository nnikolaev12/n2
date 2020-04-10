<script>
    export let image_name;
    export let image_alt;
    export let title;
    export let link;
</script>

<div class="work">
    <div class="work-col">
        <div class="work-img">
            <img src="img/projects/{image_name}" alt="{image_alt}">
            <div class="overlay"></div>
        </div>
        <div class="work-text">
            <h3>{title}</h3>
        </div>
        <div class="work-link">
            <a class="icon-btn" rel="nofollow noopener noreferrer" target="_blank" href="{link}"><i class="fa fa-link"></i></a>
        </div>
    </div>
</div>