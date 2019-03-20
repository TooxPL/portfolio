<template>
    <div class="contact">
        <div>IT's <h1>CONTACT</h1> PAGE</div>
        <div class="headline">IT's <h1>HOME</h1> PAGE</div>
        <div class="headline">IT's <h1>HOME</h1> PAGE</div>
        <div class="headline">IT's <h1>HOME</h1> PAGE</div>
        <div class="headline">IT's <h1>HOME</h1> PAGE</div>
    </div>
</template>

<script>
    import css_projects from '@/scss/components/contact.scss';

    export default {
        name: 'contact',
        data() {
            return {
                title: 'contact',
            }
        },
        beforeCreate() {
            document.body.className = 'contact'
        }
    }
</script>
