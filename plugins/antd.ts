import { Button, Input } from 'ant-design-vue';
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('AButton', Button)
    nuxtApp.vueApp.component('AInput', Input)
})
