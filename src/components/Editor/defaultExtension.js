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

export default function defaultExtensions() {
  return [
    new Blockquote(),
    new BulletList(),
    new CodeBlock(),
    new HardBreak(),
    new Heading({ levels: [1, 2, 3] }),
    new ListItem(),
    new OrderedList(),
    new TodoItem(),
    new TodoList(),
    new Link(),
    new Bold(),
    new Code(),
    new Italic(),
    new Strike(),
    new Underline()
  ];
}
