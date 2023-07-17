<script></script>

{#each Array(4) as _}
<div class="judges-block flex items-end">
    <div class="judges-img-wrapper relative bg-midnight-blue">
        <img src="/images/yet-to-be-confirmed.jpg" alt="judge" class="judges-picture bg-img">
    </div>
    <div class="side-blue bg-whitish-blue dark:bg-dark-highlight"></div>
</div>
{/each}


<style>
    .judges-img-wrapper {
        width: calc(100% - 30px );
        padding-top: 100%;
    }
    .side-blue {
        border-top: 1px solid var(--color-greyish-blue);
        border-right: 1px solid var(--color-greyish-blue);
        width: 30px;
        height: calc(100% - 2px);
    }
</style>