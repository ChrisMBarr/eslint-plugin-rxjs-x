import { TSESTree as es } from "@typescript-eslint/experimental-utils";
import { getParent } from "eslint-etc";
import { ruleCreator } from "../utils";

const rule = ruleCreator({
  defaultOptions: [],
  meta: {
    docs: {
      description:
        "Forbids using `ReplaySubject`, `publishReplay` or `shareReplay` without specifying the buffer size.",
      recommended: "error",
    },
    fixable: undefined,
    hasSuggestions: false,
    messages: {
      forbidden: "Ignoring the buffer size is forbidden.",
    },
    schema: [],
    type: "problem",
  },
  name: "no-ignored-replay-buffer",
  create: (context) => {
    function checkNode(
      node: es.Node,
      { arguments: args }: { arguments: es.Node[] }
    ) {
      if (!args || args.length === 0) {
        context.report({
          messageId: "forbidden",
          node,
        });
      }
    }

    return {
      "NewExpression > Identifier[name='ReplaySubject']": (
        node: es.Identifier
      ) => {
        const newExpression = getParent(node) as es.NewExpression;
        checkNode(node, newExpression);
      },
      "NewExpression > MemberExpression > Identifier[name='ReplaySubject']": (
        node: es.Identifier
      ) => {
        const memberExpression = getParent(node) as es.MemberExpression;
        const newExpression = getParent(memberExpression) as es.NewExpression;
        checkNode(node, newExpression);
      },
      "CallExpression > Identifier[name=/^(publishReplay|shareReplay)$/]": (
        node: es.Identifier
      ) => {
        const callExpression = getParent(node) as es.CallExpression;
        checkNode(node, callExpression);
      },
    };
  },
});

export = rule;
