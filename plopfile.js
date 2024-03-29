const screenPlopGeneratorObject = {
  description: "Create a screen",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What is this screen's name?",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/app/{{name}}/page.tsx",
      templateFile: "templates/Screen.tsx.hbs",
    },
    {
      type: "add",
      path: "src/app/{{name}}/page.module.scss",
      templateFile: "templates/Styles.scss.hbs",
    },
  ],
}

const componentPlopGeneratorObject = {
  description: "Create a component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What is this component's name?",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/components/{{capitallizeComponentName name}}/index.tsx",
      templateFile: "templates/Component.tsx.hbs",
    },
    {
      type: "add",
      path: "src/components/{{capitallizeComponentName name}}/styles.module.scss",
      templateFile: "templates/Styles.scss.hbs",
    },
    {
      type: "add",
      path: "src/components/{{capitallizeComponentName name}}/types.ts",
      templateFile: "templates/Types.ts.hbs",
    },
    {
      type: "add",
      path: "src/components/{{capitallizeComponentName name}}/index.test.tsx",
      templateFile: "templates/Test.tsx.hbs",
    },
    {
      type: "add",
      path: "src/components/{{capitallizeComponentName name}}/index.stories.tsx",
      templateFile: "templates/ReactStory.tsx.hbs",
    },
  ],
}

const createI18nKey = {
  description: "Create a traslation in i18n folder",
  prompts: [
    {
      type: "input",
      name: "key",
      message: "What is the translation key?",
    },
    {
      type: "input",
      name: "en",
      message: "What is the english value?",
    },
    {
      type: "input",
      name: "ar",
      message: "What is the arabic value?",
    },
  ],
  actions: [
    {
      type: 'modify',
      path: 'src/i18n/en.json',
      pattern: `"\n}`,
      templateFile: "templates/i18n.en.json.hbs",
    },
    {
      type: 'modify',
      path: 'src/i18n/ar.json',
      pattern: `"\n}`,
      templateFile: "templates/i18n.ar.json.hbs",
    },
  ],
}

const toCapitalize = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = function (plop) {
  plop.setGenerator("component", componentPlopGeneratorObject);
  plop.setGenerator("c", componentPlopGeneratorObject);

  plop.setGenerator("screen", screenPlopGeneratorObject);
  plop.setGenerator("s", screenPlopGeneratorObject);

  plop.setGenerator("i18n", createI18nKey)

  plop.setHelper('extractName', (fullName) => {
    const parts = fullName.split('/')
    const lastPart = parts[parts.length - 1]

    return toCapitalize(lastPart) || toCapitalize(fullName)
  });

  plop.setHelper('capitallizeComponentName', (fullPath) => {
    const parts = fullPath.split('/')
    if (parts?.length > 0) {
      const lastPart = parts[parts.length - 1]
      const remainingParts = parts.slice(0, parts.length - 1)
      const resultName = [...remainingParts, toCapitalize(lastPart)].join('/')
      return resultName
    } else {
      return toCapitalize(fullPath)
    }
  });

  plop.setHelper('extractStoryPath', (fullPath) => {
    const parts = fullPath.split('/')
    if (parts?.length > 0) {
      const manipulatedParts = parts.map(item => toCapitalize(item))
      return manipulatedParts?.join("/")
    } else {
      return toCapitalize(fullPath)
    }
  })

  plop.setHelper('preCurly', t => `{${t}}`);
};
