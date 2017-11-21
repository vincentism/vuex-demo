<template>
  <div class="pb-owner-ct-seed">
    <counter></counter>
  </div>
</template>

<script>
    import store from './store';
    import Counter from './components/Counter.vue';

    export default {
        data() {
            return {
            };
        },
        store,
        computed: {

        },
        methods: {

        },
        components: {
            Counter
        }
    }
</script>


