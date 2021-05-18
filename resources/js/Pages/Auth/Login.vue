<template>
  <jet-authentication-card>
    <template #logo>
      <jet-authentication-card-logo />
    </template>

    <jet-validation-errors class="mb-4 bg-white p-5" />

    <div v-if="status" class="mb-4 font-medium text-sm text-green-600 bg-white p-5">
      {{ status }}
    </div>

    <form @submit.prevent="submit">
      <div>
        <div class="w-full flex justify-end">
          <jet-label for="email" value="Usuario" />
        </div>
        <jet-input
          id="email"
          type="email"
          class="mt-1 block w-full"
          v-model="form.email"
          required
          autofocus
        />
      </div>

      <div class="mt-4">
        <div class="w-full flex justify-end">
          <jet-label for="password" value="Contraseña" />
        </div>
        <jet-input
          id="password"
          type="password"
          class="mt-1 block w-full"
          v-model="form.password"
          required
          autocomplete="current-password"
        />
      </div>
      <div class="flex justify-end w-full my-5">
        <jet-button
          class="w-1/2"
          :class="{ '': form.processing }"
          :disabled="form.processing"
        >
          <p class="mr-1">Enviar</p>
          <ArrowRightIcon class="h-6 w-6"/>
        </jet-button>
      </div>
      <div class="flex justify-between">
        <div class="block">
          <label class="flex items-center">
            <jet-checkbox name="remember" v-model:checked="form.remember" />
            <span class="ml-2 text-sm text-white">Conservar esta cuenta</span>
          </label>
        </div>

        <div class="flex items-center justify-end">
          <inertia-link
            v-if="canResetPassword"
            :href="route('password.request')"
            class="text-sm text-white hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </inertia-link>
        </div>
      </div>
    </form>
  </jet-authentication-card>
</template>

<script>
import JetAuthenticationCard from "@/Jetstream/AuthenticationCard";
import JetAuthenticationCardLogo from "@/Jetstream/AuthenticationCardLogo";
import JetButton from "@/Jetstream/Button";
import JetInput from "@/Jetstream/Input";
import JetCheckbox from "@/Jetstream/Checkbox";
import JetLabel from "@/Jetstream/Label";
import JetValidationErrors from "@/Jetstream/ValidationErrors";
import { ArrowRightIcon } from "@heroicons/vue/solid";

export default {
  components: {
    JetAuthenticationCard,
    JetAuthenticationCardLogo,
    JetButton,
    JetInput,
    JetCheckbox,
    JetLabel,
    JetValidationErrors,
    ArrowRightIcon,
  },

  props: {
    canResetPassword: Boolean,
    status: String,
  },

  data() {
    return {
      form: this.$inertia.form({
        email: "",
        password: "",
        remember: false,
      }),
    };
  },

  methods: {
    submit() {
      this.form
        .transform((data) => ({
          ...data,
          remember: this.form.remember ? "on" : "",
        }))
        .post(this.route("login"), {
          onFinish: () => this.form.reset("password"),
        });
    },
  },
};
</script>
