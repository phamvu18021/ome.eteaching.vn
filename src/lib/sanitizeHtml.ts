import sanitizeHtml from "sanitize-html";

export const clean = (dirty: string) =>
  sanitizeHtml(dirty, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "span"]),
    allowedAttributes: {
      a: ["href", "name", "target"],
      img: ["src", "srcset", "alt", "title", "width", "height", "loading"],
      "*": ["class", "id", "style"] // ✅ giữ lại inline style
    },
    allowedSchemes: ["http", "https", "ftp", "mailto", "tel"],

    // ✅ (tuỳ chọn) kiểm soát style để tránh code độc hại
    allowedStyles: {
      "*": {
        color: [/^#(0x)?[0-9a-f]+$/i, /^rgb\((\d+),\s?(\d+),\s?(\d+)\)$/i],
        "background-color": [/^#(0x)?[0-9a-f]+$/i],
        "text-align": [/^left$|^right$|^center$/],
        "font-weight": [/^bold$|^normal$/],
        "font-size": [/^\d+(px|em|rem|%)$/]
      }
    },

    selfClosing: [
      "img",
      "br",
      "hr",
      "area",
      "base",
      "basefont",
      "input",
      "link",
      "meta"
    ]
  });
