<script>
    export let images = [];
    export let widthPer = 100;
    let currentImageIndex = 0;

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }
</script>

<style>
    .image-slider {
        position: relative;
    }

    .image-slider img {
        display: block;
        width: 100%;
        height: auto;
        opacity: 0;
        transition: opacity 0.5s;
        @apply object-contain;
    }

    .image-slider img.active {
        opacity: 1;
    }

    .image-slider img.unactive {
        width: 0;
        height: 0;
    }

    .slider-buttons {
        position: absolute;
        top: 50%;
        transform: translateY(-30%);
        padding-left: 15px;
        padding-right: 15px;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .slider-buttons button {
        background-color: #333;
        color: #fff;
        border: none;
        padding: 10px;
        cursor: pointer;
    }
</style>

<div class="image-slider" style="width:{widthPer}%;">
    {#each images as image, index}
        <img src="{image}" alt="image"
             class:active={index === currentImageIndex}
             class:unactive={index !== currentImageIndex}
        >
    {/each}
    <div class="slider-buttons">
        <button on:click={prevImage} class="text-xl font-bold">&larr;</button>
        <button on:click={nextImage} class="text-xl font-bold">&rarr;</button>
    </div>
</div>
