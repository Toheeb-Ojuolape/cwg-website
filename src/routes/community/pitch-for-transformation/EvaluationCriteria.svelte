<script>
	import ArrowRightSolidIcon from "$lib/components/Svgs/ArrowRightSolidIcon.svelte";
</script>

<div>
    <div class="p-4 bg-whitish-blue dark:bg-dark-highlight flex flex-col industry-block">
        <h4 class="text-headline-5 mb-3 industry-block-title">Impact (30%)</h4>
        <div class="text-body-m industry-block-desc">
            <p class="py-2">
                Demonstrates a positive change that addresses social, economic, technological and/or
                environmental challenge(s) and has proven to make the world a better place by improving
                the well-being of humanity.
            </p>
            <p class="py-2">
                The impact criterion requires business to demonstrate that:
            </p>
            <ul class="py-2">
                <li class="flex gap-3 py-[5px]">
                    <div class="arrow-right">
                        <ArrowRightSolidIcon className="fill-blue" />
                    </div>
                    <div>
                        their solution already has had a positive impact on the quality of peoples’ lives
                    </div>
                </li>
                <li class="flex gap-3 py-[5px]">
                    <div class="arrow-right">
                        <ArrowRightSolidIcon className="fill-blue" />
                    </div>
                    <div>
                        they are resilient to potential social, economic, technological, and environmental challenges
                    </div>
                </li>
                <li class="flex gap-3 py-[5px]">
                    <div class="arrow-right">
                        <ArrowRightSolidIcon className="fill-blue" />
                    </div>
                    <div>
                        they have good governance by employing skilled people and establishing fair policies
                    </div>
                </li>
                <li class="flex gap-3 py-[5px]">
                    <div class="arrow-right">
                        <ArrowRightSolidIcon className="fill-blue" />
                    </div>
                    <div>
                        they have a detailed plan of how the Prize money would be used to further increase their impact
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>

<div>
    <div class="p-4 bg-whitish-blue dark:bg-dark-highlight flex flex-col industry-block">
        <h4 class="text-headline-5 mb-3 industry-block-title">Innovation (30%)</h4>
        <div class="text-body-m industry-block-desc">
            <p class="py-2">
                Innovation refers to a new technology solution or a transformation of an existing solution
                that solves a challenge or a need, generates value and brings significant positive impact.
            </p>
            <p class="py-2">
                The innovation criterion requires SMEs to demonstrate that their solution:
            </p>
            <ul class="py-2">
                <li class="flex gap-3 py-[5px]">
                    <div class="arrow-right">
                        <ArrowRightSolidIcon className="fill-blue" />
                    </div>
                    <div>
                        has a unique value proposition
                    </div>
                </li>
                <li class="flex gap-3 py-[5px]">
                    <div class="arrow-right">
                        <ArrowRightSolidIcon className="fill-blue" />
                    </div>
                    <div>
                        is disruptive or transformative
                    </div>
                </li>
                <li class="flex gap-3 py-[5px]">
                    <div class="arrow-right">
                        <ArrowRightSolidIcon className="fill-blue" />
                    </div>
                    <div>
                        is technically and commercially viable
                    </div>
                </li>
                <li class="flex gap-3 py-[5px]">
                    <div class="arrow-right">
                        <ArrowRightSolidIcon className="fill-blue" />
                    </div>
                    <div>
                        is adopted by the market
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>

<div>
    <div class="p-4 bg-whitish-blue dark:bg-dark-highlight flex flex-col industry-block">
        <h4 class="text-headline-5 mb-3 industry-block-title">Prototype (20%)</h4>
        <div class="text-body-m industry-block-desc">
            <p class="py-2">
                The prototype criterion requires business to demonstrate that
            </p>
            <ul class="py-2">
                <li class="flex gap-3 py-[5px]">
                    <div class="arrow-right">
                        <ArrowRightSolidIcon className="fill-blue" />
                    </div>
                    <div>
                        their solution is easy to use
                    </div>
                </li>
                <li class="flex gap-3 py-[5px]">
                    <div class="arrow-right">
                        <ArrowRightSolidIcon className="fill-blue" />
                    </div>
                    <div>
                        has an engaging user experience and design
                    </div>
                </li>
                <li class="flex gap-3 py-[5px]">
                    <div class="arrow-right">
                        <ArrowRightSolidIcon className="fill-blue" />
                    </div>
                    <div>
                        has a functional and well implemented prototype demo
                    </div>
                </li>
                <li class="flex gap-3 py-[5px]">
                    <div class="arrow-right">
                        <ArrowRightSolidIcon className="fill-blue" />
                    </div>
                    <div>
                        their solution is scalable and adaptable
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>

<div>
    <div class="p-4 bg-whitish-blue dark:bg-dark-highlight flex flex-col industry-block">
        <h4 class="text-headline-5 mb-3 industry-block-title">Judges Bonus Point (20%)</h4>
        <div class="text-body-m industry-block-desc">
            <p class="py-2">
                This is a bonus point which Judges ascribe to businesses based on their expertise
            </p>
        </div>
    </div>
</div>

<style>
    div:nth-child(4n) .industry-block::before {
        background-color: var(--color-vivid-burgundy);
    }
    div:nth-child(4n+1) .industry-block::before {
        background-color: var(--color-naples-yellow);
    }
    div:nth-child(4n+2) .industry-block::before {
        background-color: var(--color-burlywood);
    }
    div:nth-child(4n+3) .industry-block::before {
        background-color: var(--color-pewter-blue);
    }
    div:nth-child(4n+4) .industry-block::before {
        background-color: var(--color-light-green);
    }
</style>