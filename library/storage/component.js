/**
 * @typedef {{
 *    bold: boolean,
 *    click: {
 *       action: 'open_url' | 'open_file' | 'run_command' | 'suggest_command' | 'change_page' | 'copy_to_clipboard',
 *       value: string
 *    },
 *    extra: textComponentJSON[],
 *    hover: {
 *       action: 'show_text' | 'show_achievement' | 'show_item' | 'show_entity',
 *       value: textComponentJSON[]
 *    },
 *    italic: boolean,
 *    obfuscated: boolean,
 *    strikethrough: boolean,
 *    text: string,
 *    underline: boolean
 * }} textComponentJSON
 */
module.exports = {
   /**
   * convert a text component to JSON
   * @param {*} component the component to convert
   * @returns {textComponentJSON} the JSON
   */
   save: function (component) {
      var output = {
         bold: component.bold,
         italic: component.italic,
         obfuscated: component.obfuscated,
         strikethrough: component.strikethrough,
         text: component.text,
         underline: component.underline
      };
      if (component.clickEvent) {
         output.click = {
            action: component.clickEvent.action.toString().toLowerCase(),
            value: component.clickEvent.value
         };
      }
      if (component.hoverEvent) {
         output.hover = {
            action: component.hoverEvent.action.toString().toLowerCase(),
            value: jx.ar(component.hoverEvent.value).map(jx.storage.component.save)
         };
      }
      if (component.colorRaw) output.color = component.colorRaw.name();
      if (component.extra) output.extra = jx.ar(component.extra).map(jx.storage.component.save);
      return output;
   },
   /**
    * create a text component from previously converted JSON
    * @param {textComponentJSON} json the JSON to parse
    * @returns {*} the text component
    */
   load: function (json) {
      var color = Java.type('net.md_5.bungee.api.ChatColor');
      var click = Java.type('net.md_5.bungee.api.chat.ClickEvent');
      var hover = Java.type('net.md_5.bungee.api.chat.HoverEvent');
      var component = Java.type('net.md_5.bungee.api.chat.TextComponent');
      var clickAction = Java.type('net.md_5.bungee.api.chat.ClickEvent$Action');
      var hoverAction = Java.type('net.md_5.bungee.api.chat.HoverEvent$Action');
      var output = new component(json.text);
      output.bold = json.bold;
      output.italic = json.italic;
      output.obfuscated = json.obfuscated;
      output.strikethrough = json.strikethrough;
      output.underline = json.underline;
      if (json.click) {
         var value = json.click.value;
         output.clickEvent = new click(clickAction[json.click.action.toUpperCase()], value);
      }
      if (json.hover) {
         var value = json.hover.value.map(jx.storage.component.load);
         output.hoverEvent = new hover(hoverAction[json.hover.action.toUpperCase()], value);
      }
      if (json.color) output.color = color[json.color];
      if (json.extra) output.extra = json.extra.map(jx.storage.component.load);
      return output;
   }
};
