import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

/* ESLint 9 flat config: lint only src/; ignore dist, node_modules, and config files. */
export default [
  { ignores: ['dist/**', 'node_modules/**', '*.config.js'] },
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        fetch: 'readonly',
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        Buffer: 'readonly',
        global: 'readonly',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      /* Allow Three.js / R3F props on JSX elements (e.g. attach, args, position on mesh). */
      'react/no-unknown-property': ['error', { ignore: ['attach', 'args', 'intensity', 'position', 'dispose', 'rotation', 'material', 'geometry', 'castShadow', 'receiveShadow', 'toneMapped', 'aoMap', 'normalMap', 'roughnessMap', 'metalnessMap', 'envMapIntensity', 'material-envMapIntensity'] }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
    settings: {
      react: { version: 'detect' },
    },
  },
];
