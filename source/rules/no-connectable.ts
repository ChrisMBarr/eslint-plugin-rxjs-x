import { TSESTree as es } from "@typescript-eslint/experimental-utils";
import { getTypeServices } from "eslint-etc";
import { ruleCreator } from "../utils";

const rule = ruleCreator({
  defaultOptions: [],
  meta: {
    docs: {
      description: "Forbids operators that return connectable observables.",
      recommended: false,
    },
    fixable: undefined,
    hasSuggestions: false,
    messages: {
      forbidden: "Connectable observables are forbidden.",
    },
    schema: [],
    type: "problem",
  },
  name: "no-connectable",
  create: (context) => {
    const { couldBeFunction } = getTypeServices(context);
    return {
      "CallExpression[callee.name='multicast']": (node: es.CallExpression) => {
        if (node.arguments.length === 1) {
          context.report({
            messageId: "forbidden",
            node: node.callee,
          });
        }
      },
      "CallExpression[callee.name=/^(publish|publishBehavior|publishLast|publishReplay)$/]":
        (node: es.CallExpression) => {
          if (!node.arguments.some((arg) => couldBeFunction(arg))) {
            context.report({
              messageId: "forbidden",
              node: node.callee,
            });
          }
        },
    };
  },
});

export = rule;
