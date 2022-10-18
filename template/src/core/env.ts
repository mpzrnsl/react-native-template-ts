/**
 * ProjectName
 *
 * Author: Phia Nasol
 *
 *
 */

import config from "react-native-config";

interface IEnv {
  keys(): string[];

  hasKey(key: string): boolean;

  get(key: string, fallback?: string): string;

  tryGet(key: string, fallback: string): string;
}

const Env: IEnv = {
  keys: function () {
    return Object.keys(config);
  },

  hasKey: function (key) {
    return this.keys().includes(key);
  },

  get: function (key, fallback) {
    if (!this.hasKey(key)) {
      throw new Error(`The environment variables does not contain key: ${key}`);
    }

    const value = config[key];

    if (!value) {
      if (!fallback) {
        throw new Error(`The environment variable fallback for key: ${key} is not defined.`);
      }

      return fallback;
    }

    return value;
  },

  tryGet: function (key, fallback) {
    if (!fallback) {
      throw new Error(`The environment variable fallback for key: ${key} is not defined.`);
    }

    if (!this.hasKey(key)) {
      return fallback;
    }

    const value = config[key];

    if (!value) {
      return fallback;
    }

    return value;
  }
};

export default Env;
