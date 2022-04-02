import https from "https";
import axios from 'axios';
import app from '../main';
const ENDPOINT_PREFIX = '/v1'
const agent = new https.Agent({
    rejectUnauthorized: false
});
const config = {
    headers: {Authorization: `Bearer Test`},
    httpsAgent: agent,
    baseURL: 'http://35.180.86.16:1337'
};
const odinAxiosInstance = axios.create(config);
const endpoints = {
    getAppsListUrl: () => ENDPOINT_PREFIX + '/apps',
    getAppUrl: (id) => ENDPOINT_PREFIX + `/app/${id}`,
    getAppLinksUrl: (id) => ENDPOINT_PREFIX + `/app/${id}/links`,
    getAppCsvesUrl: (id) => ENDPOINT_PREFIX + `/app/${id}/cves`,
    postLoginUrl: () => ENDPOINT_PREFIX + '/login'
}

Object.assign(odinAxiosInstance, {
    getAppsList: async () => {
        try {
            return (await odinAxiosInstance.get(endpoints.getAppsListUrl())).data
        } catch (e) {
            app.emitError(e)
        }
    },
    getApp: async (id) => {
        try {
            return (await odinAxiosInstance.get(endpoints.getAppUrl(id))).data;
        } catch (e) {
            app.emitError(e)
        }
    },
    getAppLinks: async (id) => {
        try {
            return (await odinAxiosInstance.get(endpoints.getAppLinksUrl(id))).data;
        } catch (e) {
            app.emitError(e)
        }
    },
    getAppCsves: async (id) => {
        try {
            return (await odinAxiosInstance.get(endpoints.getAppCsvesUrl(id))).data;
        } catch (e) {
            app.emitError(e)
        }
    },
    postLogin: async (login, password) => {
        return (await odinAxiosInstance.post(endpoints.postLoginUrl(), { login, password })).data;
    }
});

export {
    odinAxiosInstance,
}
