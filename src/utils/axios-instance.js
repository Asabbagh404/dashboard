import https from "https";
import axios from 'axios';
const agent = new https.Agent({
    rejectUnauthorized: false
});
const config = {
    headers: { Authorization: `Bearer Test` },
    httpsAgent: agent,
    baseURL: 'http://35.180.86.16:1337'
};
const odinAxiosInstance = axios.create(config);
const endpoints = {
    getAppsListUrl: () => '/v1/apps',
    getAppUrl: (id) => `/v1/app/${id}`,
    getAppLinksUrl: (id) => `/v1/app/${id}/links`,
    getAppCsvesUrl: (id) => `/v1/app/${id}/csves`,
}

Object.assign(odinAxiosInstance, {
    getAppsList: async () => (await odinAxiosInstance.get(endpoints.getAppsListUrl())).data,
    getApp: async (id) => (await odinAxiosInstance.get(endpoints.getAppUrl(id))).data,
    getAppLinks: async (id) => (await odinAxiosInstance.get(endpoints.getAppLinksUrl(id))).data,
    getAppCsves: async (id) => (await odinAxiosInstance.get(endpoints.getAppCsvesUrl(id))).data,
});

export {
    odinAxiosInstance,
}
