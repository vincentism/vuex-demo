<template>
    <div>
        count: {{ count }} <button @click="add">increment</button><br>
        doneTodos: {{ doneTodos[0].id }} <br>
        getTodoById: {{ getTodoById.id }} <br>

    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapState([
                'count'
            ]),
            ...mapState({
                number: state => state.count
            }),
            ...mapGetters([
                'doneTodos'
            ]),
            getTodoById () {
                return this.$store.getters.getTodoById(2);
            }
        },
        methods: {
            ...mapMutations([
                'increment', 'incrementBy'
            ]),
            ...mapMutations({
                add: 'increment'
            }),
            increment() {
                this.$store.commit('increment');
            },
            ...mapActions([
                'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

                // `mapActions` 也支持载荷：
                'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
            ]),
            ...mapActions({
                add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
            })
        }
    }
</script>