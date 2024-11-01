import { TSESTree as es } from "@typescript-eslint/experimental-utils";
import { getTypeServices } from "eslint-etc";
import { ruleCreator } from "../utils";

const rule = ruleCreator({
  defaultOptions: [],
  meta: {
    docs: {
      description:
        "Forbids the calling of `subscribe` without specifying arguments.",
      recommended: false,
    },
    fixable: undefined,
    hasSuggestions: false,
    messages: {
      forbidden: "Calling subscribe without arguments is forbidden.",
    },
    schema: [],
    type: "problem",
  },
  name: "no-ignored-subscribe",
  create: (context) => {
    const { couldBeObservable, couldBeType } = getTypeServices(context);

    return {
      "CallExpression[arguments.length = 0][callee.property.name='subscribe']":
        (node: es.CallExpression) => {
          const callee = node.callee as es.MemberExpression;
          if (
            couldBeObservable(callee.object) ||
            couldBeType(callee.object, "Subscribable")
          ) {
            context.report({
              messageId: "forbidden",
              node: callee.property,
            });
          }
        },
    };
  },
});

export = rule;
