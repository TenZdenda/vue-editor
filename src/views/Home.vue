<template>
  <div class="home">
    <h1 class="text-6xl text-indigo-400 font-bold text-center">
      Vue Editor 🎉
    </h1>
    <p class="text-xl text-gray-500 mt-5 text-center">Zdeněk Pašek</p>

    <hr class="mx-24 my-10" />

    <div class="editor mt-32">
      <editor-menu-bar
        :editor="editor"
        v-slot="{ commands, isActive, focused }"
      >
        <div class="menubar is-hidden" :class="{ 'is-focused': focused }">
          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <title>text-bold</title>
              <path
                d="M17.194,10.962A6.271,6.271,0,0,0,12.844.248H4.3a1.25,1.25,0,0,0,0,2.5H5.313a.25.25,0,0,1,.25.25V21a.25.25,0,0,1-.25.25H4.3a1.25,1.25,0,1,0,0,2.5h9.963a6.742,6.742,0,0,0,2.93-12.786Zm-4.35-8.214a3.762,3.762,0,0,1,0,7.523H8.313a.25.25,0,0,1-.25-.25V3a.25.25,0,0,1,.25-.25Zm1.42,18.5H8.313a.25.25,0,0,1-.25-.25V13.021a.25.25,0,0,1,.25-.25h4.531c.017,0,.033,0,.049,0l.013,0h1.358a4.239,4.239,0,0,1,0,8.477Z"
              />
            </svg>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <title>text-italic</title>
              <path
                d="M22.5.248H14.863a1.25,1.25,0,0,0,0,2.5h1.086a.25.25,0,0,1,.211.384L4.78,21.017a.5.5,0,0,1-.422.231H1.5a1.25,1.25,0,0,0,0,2.5H9.137a1.25,1.25,0,0,0,0-2.5H8.051a.25.25,0,0,1-.211-.384L19.22,2.98a.5.5,0,0,1,.422-.232H22.5a1.25,1.25,0,0,0,0-2.5Z"
              />
            </svg>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.strike() }"
            @click="commands.strike"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <title>text-strike-through</title>
              <path
                d="M23.75,12.952A1.25,1.25,0,0,0,22.5,11.7H13.564a.492.492,0,0,1-.282-.09c-.722-.513-1.482-.981-2.218-1.432-2.8-1.715-4.5-2.9-4.5-4.863,0-2.235,2.207-2.569,3.523-2.569a4.54,4.54,0,0,1,3.081.764A2.662,2.662,0,0,1,13.615,5.5l0,.3a1.25,1.25,0,1,0,2.5,0l0-.268A4.887,4.887,0,0,0,14.95,1.755C13.949.741,12.359.248,10.091.248c-3.658,0-6.023,1.989-6.023,5.069,0,2.773,1.892,4.512,4,5.927a.25.25,0,0,1-.139.458H1.5a1.25,1.25,0,0,0,0,2.5H12.477a.251.251,0,0,1,.159.058,4.339,4.339,0,0,1,1.932,3.466c0,3.268-3.426,3.522-4.477,3.522-1.814,0-3.139-.405-3.834-1.173a3.394,3.394,0,0,1-.65-2.7,1.25,1.25,0,0,0-2.488-.246A5.76,5.76,0,0,0,4.4,21.753c1.2,1.324,3.114,2,5.688,2,4.174,0,6.977-2.42,6.977-6.022a6.059,6.059,0,0,0-.849-3.147.25.25,0,0,1,.216-.377H22.5A1.25,1.25,0,0,0,23.75,12.952Z"
              />
            </svg>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.underline() }"
            @click="commands.underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <title>text-underline</title>
              <path
                d="M22.5,21.248H1.5a1.25,1.25,0,0,0,0,2.5h21a1.25,1.25,0,0,0,0-2.5Z"
              />
              <path
                d="M1.978,2.748H3.341a.25.25,0,0,1,.25.25v8.523a8.409,8.409,0,0,0,16.818,0V3a.25.25,0,0,1,.25-.25h1.363a1.25,1.25,0,0,0,0-2.5H16.3a1.25,1.25,0,0,0,0,2.5h1.363a.25.25,0,0,1,.25.25v8.523a5.909,5.909,0,0,1-11.818,0V3a.25.25,0,0,1,.25-.25H7.7a1.25,1.25,0,1,0,0-2.5H1.978a1.25,1.25,0,0,0,0,2.5Z"
              />
            </svg>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.paragraph() }"
            @click="commands.paragraph"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <title>paragraph</title>
              <path
                d="M22.5.248H7.228a6.977,6.977,0,1,0,0,13.954H9.546a.25.25,0,0,1,.25.25V22.5a1.25,1.25,0,0,0,2.5,0V3a.25.25,0,0,1,.25-.25h3.682a.25.25,0,0,1,.25.25V22.5a1.25,1.25,0,0,0,2.5,0V3a.249.249,0,0,1,.25-.25H22.5a1.25,1.25,0,0,0,0-2.5ZM9.8,11.452a.25.25,0,0,1-.25.25H7.228a4.477,4.477,0,1,1,0-8.954H9.546A.25.25,0,0,1,9.8,3Z"
              />
            </svg>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
            @click="commands.heading({ level: 1 })"
          >
            H1
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
          >
            H2
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
            @click="commands.heading({ level: 3 })"
          >
            H3
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <title>list-bullets</title>
              <circle cx="2.5" cy="3.998" r="2.5" />
              <path d="M8.5,5H23a1,1,0,0,0,0-2H8.5a1,1,0,0,0,0,2Z" />
              <circle cx="2.5" cy="11.998" r="2.5" />
              <path d="M23,11H8.5a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z" />
              <circle cx="2.5" cy="19.998" r="2.5" />
              <path d="M23,19H8.5a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z" />
            </svg>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.ordered_list() }"
            @click="commands.ordered_list"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <title>list-numbers</title>
              <path d="M7.75,4.5h15a1,1,0,0,0,0-2h-15a1,1,0,0,0,0,2Z" />
              <path d="M22.75,11h-15a1,1,0,1,0,0,2h15a1,1,0,0,0,0-2Z" />
              <path d="M22.75,19.5h-15a1,1,0,0,0,0,2h15a1,1,0,0,0,0-2Z" />
              <path
                d="M2.212,17.248A2,2,0,0,0,.279,18.732a.75.75,0,1,0,1.45.386.5.5,0,1,1,.483.63.75.75,0,1,0,0,1.5.5.5,0,1,1-.482.635.75.75,0,1,0-1.445.4,2,2,0,1,0,3.589-1.648.251.251,0,0,1,0-.278,2,2,0,0,0-1.662-3.111Z"
              />
              <path
                d="M4.25,10.748a2,2,0,0,0-4,0,.75.75,0,0,0,1.5,0,.5.5,0,0,1,1,0,1.031,1.031,0,0,1-.227.645L.414,14.029A.75.75,0,0,0,1,15.248H3.5a.75.75,0,0,0,0-1.5H3.081a.249.249,0,0,1-.195-.406L3.7,12.33A2.544,2.544,0,0,0,4.25,10.748Z"
              />
              <path
                d="M4,5.248H3.75A.25.25,0,0,1,3.5,5V1.623A1.377,1.377,0,0,0,2.125.248H1.5a.75.75,0,0,0,0,1.5h.25A.25.25,0,0,1,2,2V5a.25.25,0,0,1-.25.25H1.5a.75.75,0,0,0,0,1.5H4a.75.75,0,0,0,0-1.5Z"
              />
            </svg>
          </button>
        </div>
      </editor-menu-bar>

      <editor-content
        class="editor__content outline-none bg-gray-50 p-5 focus:outline-none"
        :editor="editor"
      />
    </div>

    <div class="mx-auto w-8/12 bg-gray-100 p-10 rounded">
      <h1 class="font-bold text-2xl mb-10">Editor output:</h1>
      <p v-html="editor.getHTML()"></p>

      <hr class="my-10" />

      <p>{{ editor.getJSON() }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import {
  Blockquote,
  BulletList,
  CodeBlock,
  HardBreak,
  Heading,
  ListItem,
  OrderedList,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline
} from "tiptap-extensions";

export default {
  name: "Home",
  components: {
    EditorContent,
    EditorMenuBar
  },
  data() {
    return {
      editorHtml: "",
      keepInBounds: true,
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new ListItem(),
          new OrderedList(),
          new TodoItem({
            nested: true
          }),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline()
        ],
        content: `
          <h2>
            Menu Bubble
          </h2>
          <p>
            Hey, try to select some text here. There will popup a menu for selecting some inline styles. <em>Remember:</em> you have full control about content and styling of this menu.
          </p>

          <ul>
            <li>Testicek </li>
            <li>Moment </li>
          </ul> 
        `
      })
    };
  },
  beforeDestroy() {
    this.editor.destroy();
  }
};
</script>
