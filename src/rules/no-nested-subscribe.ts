import { TSESTree as es } from "@typescript-eslint/experimental-utils";
import { getParent, getTypeServices } from "eslint-etc";
import { ruleCreator } from "../utils";

const rule = ruleCreator({
  defaultOptions: [],
  meta: {
    docs: {
      description:
        "Forbids the calling of `subscribe` within a `subscribe` callback.",
      recommended: "error",
    },
    fixable: undefined,
    hasSuggestions: false,
    messages: {
      forbidden: "Nested subscribe calls are forbidden.",
    },
    schema: [],
    type: "problem",
  },
  name: "no-nested-subscribe",
  create: (context) => {
    const { couldBeObservable, couldBeType } = getTypeServices(context);
    const argumentsMap = new WeakMap<es.Node, void>();
    return {
      [`CallExpression > MemberExpression[property.name='subscribe']`]: (
        node: es.MemberExpression
      ) => {
        if (
          !couldBeObservable(node.object) &&
          !couldBeType(node.object, "Subscribable")
        ) {
          return;
        }
        const callExpression = getParent(node) as es.CallExpression;
        let parent = getParent(callExpression);
        while (parent) {
          if (argumentsMap.has(parent)) {
            context.report({
              messageId: "forbidden",
              node: node.property,
            });
            return;
          }
          parent = getParent(parent);
        }
        for (const arg of callExpression.arguments) {
          argumentsMap.set(arg);
        }
      },
    };
  },
});

export = rule;
