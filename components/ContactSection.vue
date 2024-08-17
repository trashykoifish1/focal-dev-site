<template>
  <div class="container mx-auto px-4 py-12 bg-cream">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div class="mockup-phone">
        <div class="camera"></div>
        <div class="display">
          <div class="artboard artboard-demo phone-1">
            <form @submit.prevent="submitForm" class="p-4 space-y-4">
              <h3 class="text-lg font-bold mb-4">Contact Me</h3>
              <div>
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  v-model="name"
                  type="text"
                  placeholder="Your name"
                  class="input input-bordered w-full"
                />
              </div>
              <div>
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  v-model="email"
                  type="email"
                  placeholder="Your email"
                  class="input input-bordered w-full"
                />
              </div>
              <div>
                <label class="label">
                  <span class="label-text">Message</span>
                </label>
                <textarea
                  v-model="message"
                  placeholder="Form not implemented send email instead 😅"
                  class="textarea textarea-bordered w-full"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-accent w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="space-y-4">
        <h3 class="text-2xl font-serif text-sepia">Let's Connect</h3>
        <p>Feel free to shoot me an email and say hello!</p>
        <div class="flex items-center space-x-2">
          <EnvelopeIcon class="h-6 w-6 text-sepia" />
          <span>khoitr1508@gmail.com</span>
        </div>
        <div class="flex items-center space-x-2">
          <MapPinIcon class="h-6 w-6 text-sepia" />
          <span>Phoenix, AZ</span>
        </div>
        <div class="flex space-x-4 mt-4">
          <a
            href="https://github.com/trashykoifish1"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-circle btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/YourLinkedInUsername"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-circle btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/vue/24/solid";

const name = ref("");
const email = ref("");
const message = ref("");

function submitForm() {
  // Form submission not implemented
  console.log("Form submitted:", {
    name: name.value,
    email: email.value,
    message: message.value,
  });
  // Reset form fields
  name.value = "";
  email.value = "";
  message.value = "";
}
</script>
