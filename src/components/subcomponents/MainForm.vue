<template>
    <div>
        <mu-row gutter>
            <mu-col width="80" tablet="80" desktop="60" class="MainForm">
                <h1 class="">Convert Online Novel into Epub</h1>
                <mu-row gutter>
                    <mu-col width="100" tablet="45" desktop="45" class="input">
                        <mu-text-field label="book title" v-model="formValues.title" fullWidth></mu-text-field>
                    </mu-col>
                    <mu-col width="100" tablet="45" desktop="45" class="input">
                        <mu-text-field label="contentPage" v-model="formValues.contentPage" fullWidth></mu-text-field>
                    </mu-col>
                </mu-row>
                <mu-row gutter>
                    <mu-col width="100" tablet="45" desktop="45" class="input">
                        <mu-text-field label="chapterLinkSelector" v-model="formValues.chapterLinkSelector" fullWidth></mu-text-field>
                    </mu-col>
                    <mu-col width="100" tablet="45" desktop="45" class="input">
                        <mu-text-field label="author" v-model="formValues.author" fullWidth></mu-text-field>
                    </mu-col>
                </mu-row>
                <mu-row gutter>
                    <mu-col width="100" tablet="45" desktop="45" class="input">
                        <mu-text-field label="publisher" v-model="formValues.publisher" fullWidth></mu-text-field>
                    </mu-col>
                    <mu-col width="100" tablet="45" desktop="45" class="input">
                        <mu-text-field label="cover" v-model="formValues.cover" hintText="Leave blank for default cover" fullWidth></mu-text-field>
                    </mu-col>
                </mu-row>
                <mu-row gutter>
                    <mu-col width="100" tablet="45" desktop="45" class="input">
                        <mu-text-field label="chapterTitleSelector" v-model="formValues.chapterTitleSelector" hintText="Leave blank to parse automatically" fullWidth></mu-text-field>
                    </mu-col>
                    <mu-col width="100" tablet="45" desktop="45" class="input">
                        <mu-text-field label="chapterDataSelector" v-model="formValues.chapterDataSelector" hintText="Leave blank to parse automatically" fullWidth></mu-text-field>
                    </mu-col>
                </mu-row>
                <mu-row gutter>
                    <mu-col width="100" tablet="45" desktop="45" class="input">
                        <mu-text-field label="receiverEmail" v-model="formValues.receiverEmail" fullWidth></mu-text-field>
                    </mu-col>
                    <mu-col width="100" tablet="45" desktop="45" class="input">
                        <mu-text-field label="encoding" v-model="formValues.encoding" hintText="Leave blank to parse automatically" fullWidth></mu-text-field>
                    </mu-col>
                </mu-row>
                <mu-row gutter>
                    <mu-col width="100" tablet="45" desktop="45" class="input">
                        <mu-text-field label="removeString" v-model="formValues.removeString" fullWidth multiLine :rows="3" hintText="String added here will be removed from the title and content of the epub. Separated by new line."></mu-text-field>
                    </mu-col>
                    <mu-col width="100" tablet="45" desktop="45" class="input">
                        <mu-text-field label="ignoredUrlString" v-model="formValues.ignoredUrlString" fullWidth multiLine :rows="3" hintText="Url containing string added here will not be added to the epub result. Separated by new line."></mu-text-field>
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
                title: '破碎虚空',
                contentPage: 'http://www.kanunu8.com/wuxia/201103/2338.html',
                chapterLinkSelector: 'a:contains("第"):contains("章")',
                author: '黄易',
                publisher: 'Jacob Goh',
                cover: '',
                chapterTitleSelector: '',
                chapterDataSelector: 'p',
                removeString: '',
                receiverEmail: 'jacobgoh101@gmail.com',
                encoding: '',
                ignoredUrlString: ''
            }
        }
    },
    methods: {
        ...mapActions([
            'toggleLoading', 'showPopupBottom'
        ]),
        submitForm() {
            const localApi = 'http://localhost:3000/generate';
            const herokuApi = 'http://zai-xian-xiao-shuo--to--epub.herokuapp.com/generate';
            let apiUrl = herokuApi;
            if (process.env.NODE_ENV === 'development') {
                apiUrl = localApi;
            }
            this.toggleLoading();
            this.axios.post(apiUrl, this.formValues).then(result => {
                console.log(result);
                this.toggleLoading();
                this.showPopupBottom(result.data.results.message);
            }).catch(err => {
                console.log(err);
                this.toggleLoading();
                this.showPopupBottom(err);
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.mu-text-field {
    &.multi-line {
        .mu-text-field-hint {
            font-size: 14px;
        }
    }
}
</style>
<style scoped lang="scss">
.MainForm {
    margin: 20px auto;
}

.mu-text-field {
    max-width: 100%;
}
</style>
