<template>
  <app-layout>
    <!-- Crea una nueva Idea -->
    <div class="w-full bg-gray-emprend flex justify-center py-8">
      <div class="w-1/2">
        <p class="text-3xl font-bold uppercase">comparte tu idea</p>
        <hr class="block w-2/3 border-5 my-2 border-red-emprend" />
        <form @submit.prevent="submit">
          
          <textarea
            name="description"
            id="description"
            v-model="form.description"
            cols="30"
            rows="10"
            class="w-full border-none rounded-md mt-5"
          >
          </textarea>
          <div class="flex justify-end mt-5">
            <jet-button>
              <p class="mr-2">Share</p>
              <ArrowRightIcon class="h-6 w-6" />
            </jet-button>
          </div>
        </form>
      </div>
    </div>

    <!-- Lista de Ideas -->
    <div class="w-full bg-gray-emprend-dark flex justify-center">
      <div class="w-1/2">
        <!-- Idea en Tarjeta -->
        <div v-for="idea in ideas" class="mt-5 p-5">
          <div class="flex">
            <div>
              <EmojiHappyIcon class="w-24 h-24 mr-5 text-red-emprend" />
            </div>
            <div class="bg-white p-5 w-full">
              <p class="text-justify w-full">{{ idea.description }}</p>
            </div>
          </div>
          <div class="w-full flex justify-end">
            <p class="font-bold text-white pt-2 mr-2">{{ idea.user.name }}</p>
            <p class="font-bold text-white pt-2">{{ idea.created_at }}</p>
          </div>
        </div>
      </div>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import { EmojiHappyIcon, ArrowRightIcon } from "@heroicons/vue/solid";
import JetButton from "@/Jetstream/Button";


export default {
  components: {
    AppLayout,
    EmojiHappyIcon,
    JetButton,
    ArrowRightIcon,
  },

  props: {
    ideas: Array,
    user: Object,
  },

  data() {
    return {
      form: {
        description: "",
        user_id: "1"
      },
    };
  },

  methods: {
    submit() {
      this.$inertia.post(this.route("ideas.store"), this.form);
    },
  },

};
</script>
