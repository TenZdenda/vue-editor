<template>
  <div class="home">
    <h1 class="text-6xl text-indigo-400 font-bold text-center">
      Vue Editor 🎉
    </h1>
    <p class="text-xl text-gray-500 mt-5 text-center">Zdeněk Pašek</p>

    <hr class="mx-24 my-10" />

    <div class="editor mt-32">
      <Editor
        :value="value"
        :users="contacts"
        :hashtags="hashtags"
        v-on:input="doSomething"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Editor from "../components/Editor/Editor";

export default {
  name: "Home",
  components: {
    Editor
  },
  data() {
    return {
      value: "<h1>Hello World 🥰 </h1><p>How are ya?</p>",
      contacts: [
        {
          id: 1,
          name: "Zdeněk Pašek"
        },
        {
          id: 2,
          name: "David Vete"
        },
        {
          id: 3,
          name: "Lukáš Eret"
        }
      ],
      hashtags: [
        { id: 1, name: "Advisela" },
        { id: 2, name: "Alpateam" },
        { id: 3, name: "CoffeeProjekt" }
      ]
    };
  },
  methods: {
    doSomething(content) {
      console.log(content);
    }
  }
};
</script>
