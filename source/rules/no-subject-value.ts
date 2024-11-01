import { TSESTree as es } from "@typescript-eslint/experimental-utils";
import { getParent, getTypeServices } from "eslint-etc";
import { ruleCreator } from "../utils";

const rule = ruleCreator({
  defaultOptions: [],
  meta: {
    docs: {
      description:
        "Forbids accessing the `value` property of a `BehaviorSubject` instance.",
      recommended: "error",
    },
    fixable: undefined,
    hasSuggestions: false,
    messages: {
      forbidden:
        "Accessing the value property of a BehaviorSubject is forbidden.",
    },
    schema: [],
    type: "problem",
  },
  name: "no-subject-value",
  create: (context) => {
    const { couldBeBehaviorSubject } = getTypeServices(context);

    return {
      "Identifier[name=/^(value|getValue)$/]": (node: es.Identifier) => {
        const parent = getParent(node);

        if (!parent || !("object" in parent)) {
          return;
        }

        if (couldBeBehaviorSubject(parent.object)) {
          context.report({
            messageId: "forbidden",
            node,
          });
        }
      },
    };
  },
});

export = rule;
