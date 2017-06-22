export default {
    state : {
        loading: false,
        PopupBottom: {
            show: false,
            message: ''
        }
    },
    mutations : {
        toggleLoading(state) {
            state.loading = !state.loading
        },
        showPopupBottom(state, message) {
            state.PopupBottom.show = true;
            state.PopupBottom.message = message;
        },
        hidePopupBottom(state) {
            state.PopupBottom.show = false;
        }
    },
    actions : {
        toggleLoading({commit}) {
            commit('toggleLoading')
        },
        showPopupBottom({
            commit
        }, message) {
            commit('showPopupBottom', message)
        },
        hidePopupBottom({
            commit
        }, message) {
            commit('hidePopupBottom')
        }
    }
}