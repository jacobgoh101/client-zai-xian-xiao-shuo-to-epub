<template>
    <div class="LoadingOverlay" v-show="loading">
        <mu-linear-progress />
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'MainForm',
    computed: mapState([
        'loading'
    ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.LoadingOverlay {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparentize(#fff, 0.1);
    .mu-linear-progress {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
    }
}
</style>
