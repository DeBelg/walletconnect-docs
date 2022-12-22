// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

module.exports = {
  mainSidebar: [
    {
      type: "category",
      label: "Introduction",
      className: "menu_outer_list",
      collapsible: false,
      items: ["readme"],
    },
    {
      type: "category",
      label: "Products",
      collapsible: false,
      className: "menu_outer_list",
      items: [
        {
          type: "category",
          label: "SDKs",
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: "link",
              label: "Web3Modal SDK",
              href: "/2.0/web3modal/about",
            },
            "web3wallet/about",
            "web3inbox/about",
          ],
        },
        {
          type: "category",
          label: "Cloud",
          collapsed: true,
          collapsible: true,
          items: ["cloud/explorer", "cloud/relay"],
        },
      ],
    },
    {
      type: "category",
      label: "Advanced",
      collapsible: false,
      className: "menu_outer_list",
      items: [
        {
          type: "category",
          label: "APIs",
          collapsed: true,
          collapsible: true,
          items: ["api/sign", "api/auth", "api/chat", "api/push"],
        },
        "advanced/chain-ecosystem-onboarding",
      ],
    },
    {
      type: "category",
      label: "Technical Reference",
      collapsible: false,
      className: "menu_outer_list",
      items: [
        "advanced/faq",
        "advanced/glossary",
        "advanced/migrating-from-v1.0",
        {
          type: "category",
          label: "RPC Reference",
          items: [
            "advanced/rpc-reference/ethereum-rpc",
            "advanced/rpc-reference/cosmos-rpc",
            "advanced/rpc-reference/solana-rpc",
            "advanced/rpc-reference/stellar-rpc",
          ],
        },
        {
          type: "category",
          label: "Specs",
          collapsed: true,
          collapsible: true,
          items: [
            "specs/readme",
            {
              type: "category",
              label: "Client APIs",
              items: [
                {
                  type: "category",
                  label: "Sign API",
                  items: [
                    {
                      type: "autogenerated",
                      dirName: "specs/clients/sign",
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Auth API",
                  items: [
                    {
                      type: "autogenerated",
                      dirName: "specs/clients/auth",
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Chat API",
                  items: [
                    {
                      type: "autogenerated",
                      dirName: "specs/clients/chat",
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Push API",
                  items: [
                    {
                      type: "autogenerated",
                      dirName: "specs/clients/push",
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Core API",
                  items: [
                    {
                      type: "autogenerated",
                      dirName: "specs/clients/core",
                    },
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Meta-Clients API",
              items: [
                {
                  type: "category",
                  label: "Web3Inbox",
                  items: [
                    {
                      type: "autogenerated",
                      dirName: "specs/meta-clients/web3inbox",
                    }
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Server APIs",
              items: [
                {
                  type: "category",
                  label: "Relay Server",
                  items: [
                    {
                      type: "autogenerated",
                      dirName: "specs/servers/relay",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  javascript: [
    {
      type: "category",
      label: "Products",
      className: "menu_outer_list",
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Web3Modal SDK",
          collapsible: true,
          collapsed: true,
          items: [
            "web3modal/about",
            {
              type: "category",
              label: "React Usage",
              collapsed: true,
              collapsible: true,
              items: [
                "web3modal/react/installation",
                "web3modal/react/hooks",
                "web3modal/react/components",
              ],
            },
            {
              type: "category",
              label: "HTML Usage",
              collapsed: true,
              collapsible: true,
              items: [
                "web3modal/html-js/installation",
                "web3modal/html-js/actions",
                "web3modal/html-js/components",
              ],
            },
            {
              type: "category",
              label: "Standalone Usage",
              collapsed: true,
              collapsible: true,
              items: [
                "web3modal/standalone/installation",
                "web3modal/standalone/actions",
              ],
            },
            "web3modal/configuration",
            "web3modal/for-wallets",
          ],
        },
        {
          type: "category",
          label: "Web3Inbox SDK",
          collapsible: true,
          collapsed: true,
          items: [
            "javascript/web3inbox/installation",
            "javascript/web3inbox/dapp-usage",
            "javascript/web3inbox/wallet-usage",
          ],
        },
        {
          type: "category",
          label: "Web3Wallet SDK",
          collapsible: true,
          collapsed: true,
          items: [
            "javascript/web3wallet/installation",
            "javascript/web3wallet/wallet-usage",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Advanced",
      className: "menu_outer_list",
      collapsible: false,
      items: [
        {
          type: "category",
          label: "APIs",
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: "category",
              label: "Sign",
              collapsible: true,
              collapsed: true,
              items: [
                "javascript/sign/installation",
                "javascript/sign/dapp-usage",
                "javascript/sign/wallet-usage",
              ],
            },
            {
              type: "category",
              label: "Auth",
              collapsible: true,
              collapsed: true,
              items: [
                "javascript/auth/installation",
                "javascript/auth/dapp-usage",
                "javascript/auth/wallet-usage",
              ],
            },
            {
              type: "category",
              label: "Push",
              collapsible: true,
              collapsed: true,
              items: ["javascript/push/installation"],
            },
            {
              type: "category",
              label: "Chat",
              collapsible: true,
              collapsed: true,
              items: ["javascript/chat/installation", "javascript/chat/usage"],
            },
            {
              type: "category",
              label: "Core",
              collapsible: true,
              collapsed: true,
              items: ["javascript/core/pairing-api"],
            },
          ],
        },

        {
          type: "category",
          label: "Providers",
          collapsible: true,
          collapsed: true,
          items: [
            "javascript/providers/cosmos",
            "javascript/providers/ethereum",
            "javascript/providers/solana",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Guides",
      className: "menu_outer_list",
      collapsible: false,
      items: [
        "javascript/guides/examples-and-resources",
        "javascript/guides/nodejs",
        "javascript/guides/react-native",
        "javascript/guides/shared-core",
        "javascript/guides/typescript",
      ],
    },
  ],
  kotlin: [
    {
      type: "category",
      label: "Products",
      className: "menu_outer_list",
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Web3Wallet SDK",
          collapsible: true,
          collapsed: true,
          items: [
            "kotlin/web3wallet/installation",
            "kotlin/web3wallet/wallet-usage",
          ],
        },
        {
          type: "category",
          label: "Web3Inbox SDK",
          collapsible: true,
          collapsed: true,
          items: [
            "kotlin/web3inbox/installation",
            "kotlin/web3inbox/dapp-usage",
            "kotlin/web3inbox/wallet-usage",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Advanced",
      className: "menu_outer_list",
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Sign",
          collapsible: true,
          collapsed: true,
          items: [
            "kotlin/sign/installation",
            "kotlin/sign/dapp-usage",
            "kotlin/sign/wallet-usage",
          ],
        },
        {
          type: "category",
          label: "Auth",
          collapsible: true,
          collapsed: true,
          items: [
            "kotlin/auth/installation",
            "kotlin/auth/dapp-or-requester-usage",
            "kotlin/auth/wallet-or-responder-usage",
          ],
        },
        {
          type: "category",
          label: "Push",
          collapsible: true,
          collapsed: true,
          items: ["kotlin/push/installation"],
        },
        {
          type: "category",
          label: "Chat",
          collapsible: true,
          collapsed: true,
          items: ["kotlin/chat/installation", "kotlin/chat/usage"],
        },
        {
          type: "category",
          label: "Core",
          collapsible: true,
          collapsed: true,
          items: [
            "kotlin/core/installation",
            "kotlin/core/pairing",
            "kotlin/core/relay",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Guides",
      className: "menu_outer_list",
      collapsible: false,
      items: [
        "kotlin/guides/examples-and-resources",
        "kotlin/guides/mobile-linking",
      ],
    },
  ],
  swift: [
    {
      type: "category",
      label: "Products",
      className: "menu_outer_list",
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Web3Wallet SDK",
          collapsible: true,
          collapsed: true,
          items: [
            "swift/web3wallet/installation",
            "swift/web3wallet/wallet-usage",
          ],
        },
        {
          type: "category",
          label: "Web3Inbox SDK",
          collapsible: true,
          collapsed: true,
          items: [
            "swift/web3inbox/installation",
            "swift/web3inbox/dapp-usage",
            "swift/web3inbox/wallet-usage",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Advanced",
      className: "menu_outer_list",
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Sign",
          collapsible: true,
          collapsed: true,
          items: [
            "swift/sign/installation",
            "swift/sign/dapp-usage",
            "swift/sign/wallet-usage",
          ],
        },
        {
          type: "category",
          label: "Auth",
          collapsible: true,
          collapsed: true,
          items: [
            "swift/auth/installation",
            "swift/auth/dapp-usage",
            "swift/auth/wallet-usage",
          ],
        },
        {
          type: "category",
          label: "Push",
          collapsible: true,
          collapsed: true,
          items: ["swift/push/installation"],
        },
        {
          type: "category",
          label: "Chat",
          collapsible: true,
          collapsed: true,
          items: ["swift/chat/installation", "swift/chat/usage"],
        },
        {
          type: "category",
          label: "Core",
          collapsible: true,
          collapsed: true,
          items: [
            "swift/core/installation",
            "swift/core/pairing-usage",
            "swift/core/networking-configuration",
          ],
        },
        {
          type: "category",
          label: "Router",
          collapsible: true,
          collapsed: true,
          items: ["swift/router/installation"],
        },
      ],
    },
    {
      type: "category",
      label: "Guides",
      className: "menu_outer_list",
      collapsible: false,
      items: [
        "swift/guides/examples-and-resources",
        "swift/guides/mobile-linking",
      ],
    },
  ],
};
