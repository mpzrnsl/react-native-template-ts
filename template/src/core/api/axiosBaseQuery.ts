/**
 * ProjectName
 *
 * Author: Phia Nasol
 *
 *
 */

import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import type { AxiosError, AxiosRequestConfig } from "axios";
import axios from "axios";

import Logger from "../logger";

const DEFAULT_METHOD = "GET";

const logger = Logger.extend("API");

type AxiosQueryProps = {
  url: string;
  method?: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
};

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<AxiosQueryProps, unknown, unknown> =>
  async ({ url, method = DEFAULT_METHOD, data, params }) => {
    try {
      logger.info(`Started ${method.toUpperCase()} "${url}"`);

      const result = await axios({ url: baseUrl + url, method, data, params });

      return { data: result.data };
    } catch (axiosError) {
      const error = axiosError as AxiosError;

      if (error.response) {
        logger.debug(
          `A request was made and the server responded with: ${JSON.stringify(error.response)}`
        );
      } else if (error.request) {
        logger.debug(
          `A request was made but no response was received: ${JSON.stringify(error.request)}`
        );
      } else {
        logger.debug(
          `Something happened in setting up the request that triggered an error: ${error.toJSON()}`
        );
      }

      logger.error(`Completed ${method.toUpperCase()} "${url}" ${error.response?.status}`);

      return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message
        }
      };
    }
  };

export default axiosBaseQuery;
