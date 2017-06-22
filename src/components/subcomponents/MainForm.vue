<template>
    <div>
        <mu-row gutter>
            <mu-col width="80" tablet="80" desktop="60" class="MainForm">
                <h1 class="">Convert Online Novel into Epub</h1>
                <mu-row gutter>
                    <mu-col width="100" tablet="45" desktop="45" class="MainForm">
                        <mu-text-field label="book title" v-model="formValues.title" labelFloat fullWidth></mu-text-field>
                        <br>
                        <mu-text-field label="contentPage" v-model="formValues.contentPage" labelFloat fullWidth></mu-text-field>
                        <br>
                        <mu-text-field label="chapterLinkSelector" v-model="formValues.chapterLinkSelector" labelFloat fullWidth></mu-text-field>
                        <br>
                        <mu-text-field label="author" v-model="formValues.author" labelFloat fullWidth></mu-text-field>
                        <br>
                        <mu-text-field label="publisher" v-model="formValues.publisher" labelFloat fullWidth></mu-text-field>
                        <br>
                    </mu-col>
                    <mu-col width="100" tablet="45" desktop="45" class="MainForm">
                        <mu-text-field label="cover" v-model="formValues.cover" labelFloat fullWidth></mu-text-field>
                        <br>
                        <mu-text-field label="chapterTitleSelector" v-model="formValues.chapterTitleSelector" labelFloat fullWidth></mu-text-field>
                        <br>
                        <mu-text-field label="chapterDataSelector" v-model="formValues.chapterDataSelector" labelFloat fullWidth></mu-text-field>
                        <br>
                        <mu-text-field label="receiverEmail" v-model="formValues.receiverEmail" labelFloat fullWidth></mu-text-field>
                        <br>
                        <mu-text-field label="removeString" v-model="formValues.removeString" labelFloat fullWidth multiLine :rows="3"></mu-text-field>
                    </mu-col>
                </mu-row>
                <mu-raised-button label="Submit" primary @click="submitForm"></mu-raised-button>
            </mu-col>
        </mu-row>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'MainForm',
    data() {
        return {
            formValues: {
                title: '斗罗大陆',
                contentPage: 'http://www.hkxs99.net/01/douluodalu/',
                chapterLinkSelector: '#main .book a',
                author: '唐家三少',
                publisher: 'Jacob Goh',
                cover: 'http://i.imgur.com/Qkn9FME.jpg',
                chapterTitleSelector: 'title',
                chapterDataSelector: '#main .book p',
                removeString: ' - 斗罗大陆 - 唐家三少 - 无弹窗小说网\n无弹窗小说网',
                receiverEmail: 'jacobgoh101@gmail.com'
            }
        }
    },
    methods: {
        ...mapActions([
            'toggleLoading', 'showPopupBottom'
        ]),
        submitForm() {
            this.toggleLoading();
            setTimeout(() => {
                this.toggleLoading();
                this.showPopupBottom('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue lorem, tristique vitae vehicula nec, ultrices nec ante. Quisque porta ante est, vel sollicitudin augue vestibulum ut. Sed ligula odio, lacinia euismod tellus a, molestie pharetra urna.');
            }, 1000);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.MainForm {
    margin: 20px auto;
}

.mu-text-field {
    max-width: 100%;
}
</style>
