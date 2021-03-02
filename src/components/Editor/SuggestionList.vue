<template>
  <ul v-show="showSuggestions" class="suggestion-list">
    <li
      v-for="(item, index) in filteredItems"
      :key="item.id"
      class="suggestion-list__item"
      :class="{ 'is-selected': navigatedItemIndex === index }"
      @click="selectItem(item)"
    >
      {{ createItemLabel(item) }}
    </li>
    <template v-if="isHashtag">
      <li v-if="!query" class="suggestion-list__item hint">
        Add letter
      </li>
      <template v-else-if="!filteredItems.find(el => el.id === query)">
        <li class="suggestion-list__item hint">
          add Hashtag
        </li>
        <li class="suggestion-list__item" @click="selectItem({ id: query })">
          #{{ query }}
        </li>
      </template>
    </template>
    <template v-else-if="isMention">
      <li v-if="!hasResults" class="suggestion-list__item hint">
        User not found
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
        return `@${item.name}`;
      } else {
        return `#${item.name}`;
      }
    }
  }
};
</script>

<style>
.suggestion-list {
  list-style-type: none;
  padding: 0.2rem;
  border-radius: 5px;
  border: 2px solid blue;
  font-size: 0.8rem;
  font-weight: bold;
}

.suggestion-list__item {
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  margin-bottom: 0.2rem;
  cursor: pointer;
}
.suggestion-list__item:last-child {
  margin-bottom: 0;
}
.suggestion-list__item.is-selected,
.suggestion-list__item:hover {
  background-color: rgba(128, 128, 128, 0.3);
}
.suggestion-list__item.hint {
  opacity: 0.2;
  pointer-events: none;
}
</style>
