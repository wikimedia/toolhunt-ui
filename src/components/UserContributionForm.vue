<script setup>
import { ref, computed } from "vue";
import { useField, useForm } from "vee-validate";
import { defineProps } from "vue";

const data = defineProps({
  description: String,
  inputOptions: Object,
  missingFieldName: String,
  toolName: String,
  taskId: Number,
  isError: Boolean,
});

const inputOptionsArray = computed(() => {
  return data?.inputOptions
    ? Object.entries(data.inputOptions).map(([key, value]) => ({ key, value }))
    : [];
});

const validationSchema = {
  name(value) {
    if (value?.length >= 2) return true;

    return "Name needs to be at least 2 characters.";
  },
  // phone (value) {
  //   if (value?.length > 9 && /[0-9-]+/.test(value)) return true

  //   return 'Phone number needs to be at least 9 digits.'
  // },
  // email (value) {
  //   if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

  //   return 'Must be a valid e-mail.'
  // },
  select(value) {
    if (value) return true;

    return "Select an item.";
  },
};

const { handleSubmit, handleReset } = useForm({ validationSchema });

const name = useField("name");
const select = useField("select");

const submit = handleSubmit((values) => {
  console.log("whaat");
  alert(JSON.stringify(values, null, 2));
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <form @submit.prevent="submit">
          <v-text-field
            v-if="!data?.inputOptions"
            v-model="name.value.value"
            :label="this.missingFieldName"
            :error-messages="name.errorMessage.value"
            key="text-field"
          ></v-text-field>

          <v-select
            v-if="
              inputOptionsArray?.length > 0 && missingFieldName === 'tool_type'
            "
            v-model="select.value.value"
            :error-messages="select.errorMessage.value"
            item-title="value"
            item-value="key"
            :items="inputOptionsArray"
            :label="this.missingFieldName"
            key="single-select"
          ></v-select>

          <v-select
            v-if="
              inputOptionsArray?.length > 0 && missingFieldName !== 'tool_type'
            "
            v-model="select.value.value"
            :error-messages="select.errorMessage.value"
            item-title="value"
            item-value="key"
            :items="inputOptionsArray"
            :label="this.missingFieldName"
            multiple
            key="multiple-select"
          ></v-select>

          <v-btn class="me-4" type="submit">submit</v-btn>
          <v-btn @click="handleReset">clear</v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>
