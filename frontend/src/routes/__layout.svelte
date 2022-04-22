<script context="module">
    // Global use css / javascript file
    import 'bootstrap/dist/css/bootstrap.min.css';

    // Components
    import Footer from '$lib/components/Footer/Footer.svelte';

    // Libraries
    import {loadTranslations, t} from '$lib/translations';
    import {browser} from '$app/env';

    /** @type {import('@sveltejs/kit').Load} */
    export const load = async ({url}) => {
        const {pathname} = url;
        const lang = `${pathname.match(/\w+?(?=\/|$)/) || ''}`;
        const route = pathname.replace(new RegExp(`^/${lang}`), '');

        await loadTranslations(lang, route);
        return {stuff: {route, lang}};
    }
</script>
<script>
    import { onMount } from 'svelte';
import Navbar from '../lib/components/Navbar/Navbar.svelte';
    onMount(async () => {
        await import('bootstrap/dist/js/bootstrap.bundle.min');
        await import('@fortawesome/fontawesome-free/js/all.min');
    });
</script>

{#if browser}
    <Navbar/>
    <div class="colinher p-0"> 
    <slot/></div>
    <br>
    <div style="height:10em; z-index: -100; background: inherit;"></div>
    <Footer/>
{/if}

<style>
    .colinher {
     background-color: inherit;
    }
</style>

