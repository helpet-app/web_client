<template>
    <div>
       <datepicker 
            v-model="selected" 
            class="picker form-control select" 
            :editable="true"
            :clearable="false" />
    </div>
</template>


<script>

export default {
    setup() {
        const selected = new Date()

        return {
            selected
        }
    },
}
</script>
