<template>
    <div>
        <!--<mu-raised-button label="下面弹出" @click="open('bottom')" />-->
        <mu-popup position="bottom" popupClass="popup-bottom" :open="PopupBottom.show" @close="close('bottom')">
            <mu-appbar title="弹出">
                <mu-flat-button slot="right" label="关闭" color="white" @click="close('bottom')" />
            </mu-appbar>
            <mu-content-block>
                <p>
                    {{PopupBottom.message}}
                </p>
            </mu-content-block>
        </mu-popup>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    methods: {
        /*open(position) {
            this.showPopupBottom('yes');
        },*/
        close(position) {
            this.hidePopupBottom();
        },
        ...mapActions([
            'showPopupBottom', 'hidePopupBottom'
        ])
    },
    computed: mapState([
        'PopupBottom'
    ])
}
</script>

<style scoped lang="scss">
.popup-bottom {
    width: 100%;
    max-width: 375px;
}
</style>