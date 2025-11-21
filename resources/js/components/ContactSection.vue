<script setup>
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ref } from 'vue'
import axios from 'axios'
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()

const form = ref({
    name: '',
    email: '',
    message: ''
})

const loading = ref(false)

const submitForm = async () => {
    loading.value = true
    try {
        await axios.post('/api/contact', form.value)
        alert(t.value.contact.success)
        form.value = { name: '', email: '', message: '' }
    } catch (error) {
        console.error(error)
        alert(t.value.contact.error)
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <section class="container mx-auto relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <!-- Background Decoration -->
        <!-- <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10"></div> -->

        <div class="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
            <h2 class="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl text-slate-900 dark:text-white">
                {{ t.contact.title }}
            </h2>
            <p class="max-w-[85%] leading-normal text-slate-600 dark:text-slate-400 sm:text-lg sm:leading-7">
                {{ t.contact.subtitle }}
            </p>
        </div>
        <div class="mx-auto max-w-[600px]">
            <Card class="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 shadow-2xl">
                <CardHeader>
                    <CardTitle class="text-slate-900 dark:text-slate-100">{{ t.contact.cardTitle }}</CardTitle>
                    <CardDescription class="text-slate-600 dark:text-slate-400">{{ t.contact.cardDesc }}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form @submit.prevent="submitForm" class="grid gap-4">
                        <div class="grid gap-2">
                            <Label htmlFor="name" class="text-slate-700 dark:text-slate-200">{{ t.contact.name }}</Label>
                            <Input id="name" v-model="form.name" :placeholder="t.contact.namePlaceholder" required class="bg-white dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus-visible:ring-emerald-500" />
                        </div>
                        <div class="grid gap-2">
                            <Label htmlFor="email" class="text-slate-700 dark:text-slate-200">{{ t.contact.email }}</Label>
                            <Input id="email" type="email" v-model="form.email" :placeholder="t.contact.emailPlaceholder" required class="bg-white dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus-visible:ring-emerald-500" />
                        </div>
                        <div class="grid gap-2">
                            <Label htmlFor="message" class="text-slate-700 dark:text-slate-200">{{ t.contact.message }}</Label>
                            <Textarea id="message" v-model="form.message" :placeholder="t.contact.messagePlaceholder" required class="bg-white dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus-visible:ring-emerald-500 min-h-[120px]" />
                        </div>
                        <Button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white" :disabled="loading">
                            <span v-if="loading">{{ t.contact.sending }}</span>
                            <span v-else>{{ t.contact.sendBtn }}</span>
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    </section>
</template>
