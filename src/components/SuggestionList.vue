<template>
  <ul v-show="showSuggestions" class="suggestion-list">
    <li
      v-for="(item, index) in filteredItems"
      :key="item.id"
      class="suggestion-list__item"
      :class="{ is_selected: navigatedItemIndex === index }"
      @click="selectItem(item)"
    >
      {{ createItemLabel(item) | truncate(50) }}
    </li>
    <template v-if="isHashtag">
      <li v-if="!query" class="suggestion-list__item hint">
        {{ $t("editor.hashtag.addLetter") }}
      </li>
      <template v-else-if="!filteredItems.find(el => el.id === query)">
        <li class="suggestion-list__item hint">
          {{ $t("editor.hashtag.addHashtag") }}
        </li>
        <li class="suggestion-list__item" @click="selectItem({ id: query })">
          #{{ query | truncate(50) }}
        </li>
      </template>
    </template>
    <template v-else-if="isMention">
      <li v-if="!hasResults" class="suggestion-list__item hint">
        {{ $t("editor.mention.noUsersFound") }}
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  props: {
    suggestionType: String,
    filteredItems: Array,
    query: String,
    navigatedItemIndex: Number,
    selectItem: Function
  },
  computed: {
    hasResults() {
      return this.filteredItems.length > 0;
    },
    isMention() {
      return this.suggestionType === "mention";
    },
    isHashtag() {
      return this.suggestionType === "hashtag";
    },
    showSuggestions() {
      return this.query || this.hasResults;
    }
  },
  methods: {
    createItemLabel(item) {
      if (this.isMention) {
        return `@${item.slug}`;
      } else {
        return `#${item.id}`;
      }
    }
  }
};
</script>

<style></style>
