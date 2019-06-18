import YAML from "yaml";
import { stringifyString } from "yaml/util";

// https://eemeli.org/yaml/#writing-custom-tags

const regexp = {
  identify: value => value instanceof RegExp,
  tag: "!re",
  resolve(doc, cst) {
    const match = cst.strValue.match(/^\/([\s\S]+)\/([gimuy]*)$/);
    return new RegExp(match[1], match[2]);
  }
};

const func = {
  identify: value => typeof value === "function",
  tag: "!fn",
  resolve: (doc, cst) => {
    return new Function(`return ${cst.strValue}`)();
  },
  stringify(item, ctx, onComment, onChompKeep) {
    return stringifyString({ value: item.value }, ctx, onComment, onChompKeep);
  }
};

YAML.defaultOptions.customTags = [regexp, func];

export default YAML;
