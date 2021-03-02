<script>
import tippy, { sticky } from "tippy.js";
export default {
  props: {
    content: Object,
    node: Object
  },
  methods: {
    displayContextMenu(target, content) {
      this.menu = tippy(target, {
        arrow: true,
        content: content,
        duration: [400, 200],
        inertia: true,
        interactive: true,
        sticky: true, // make sure position of tippy is updated when content changes
        plugins: [sticky],
        placement: "top-start",
        showOnCreate: true,
        theme: "dark",
        trigger: "mouseenter",
        onMount(instance) {
          const input = instance.popper.querySelector("input");
          if (input) {
            input.focus({ preventScroll: true });
          }
        }
      });
      // we have to update tippy whenever the DOM is updated
      if (MutationObserver) {
        this.observer = new MutationObserver(() => {
          this.menu.popperInstance.scheduleUpdate();
        });
        this.observer.observe(content, {
          childList: true,
          subtree: true,
          characterData: true
        });
      }
    },
    hideContextMenu() {
      if (this.menu) {
        this.menu[0].destroy();
        this.menu = null;
      }
    }
  },
  beforeDestroy() {
    this.hideContextMenu();
  },
  render() {
    return null;
  }
};
</script>

<style></style>
