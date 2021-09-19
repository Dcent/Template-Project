import { CustomResponse } from "../../models/shared/custom-response";

export function addQueryParams(obj: { [key: string]: any }): string {
    if (obj) {
        const entries = Object.entries(obj);
        // If a parameter is set to null or undefined. Don't include it.
        // Intentional shallow comparison to check for undefined and null
        const filteredEntries = entries.filter((e) => e[1] != null); // eslint-disable-line
        if (filteredEntries.length) {
            return filteredEntries
                .slice(1)
                .reduce((prev, curr) => `${prev}&${curr[0]}=${curr[1]}`, `?${filteredEntries[0][0]}=${filteredEntries[0][1]}`);
        }
    }
    return "";
}

export function createCommonFilterOptions<T extends { [query: string]: any }>(options?: T) {
    const queryOptions: { [key: string]: string } = {};
    if (options && options.query) {
        queryOptions["Query"] = options.query;
    }
    return queryOptions;
}

const sharedOptions: RequestInit = {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
};

export function getCommonFetchOptions(abortController?: AbortController): RequestInit {
    const fetchOptions: RequestInit = {};
    if (abortController) {
        fetchOptions.signal = abortController.signal;
    }
    return fetchOptions;
}

async function customFetch<T>(url: string, options: RequestInit): Promise<CustomResponse<T>> {
    try {
        const response = await fetch(`${url}`, options);
        let data = null;
        if (!response.ok) {
            console.log("ERROR log:", response);
            return { response: response, data: data };
        }
        data = await response.text();
        if (data.length) {
            data = JSON.parse(data);
        }
        return { response: response, data: data };
    } catch (err) {
        throw err;
    }
}

export async function getRequest<T = any>(url: string, options?: RequestInit): Promise<CustomResponse<T>> {
    const getRequestOptions = {
        ...sharedOptions,
        method: "GET",
        ...options
    };
    return customFetch(`${url}`, getRequestOptions);
}

export async function deleteRequest<T = any>(url: string, data?: {}, options?: RequestInit): Promise<CustomResponse<T>> {
    const deleteRequestOptions = {
        ...sharedOptions,
        method: "DELETE",
        ...options,
        body: JSON.stringify(data)
    };
    return customFetch(`${url}`, deleteRequestOptions);
}

export async function postRequest<T = any>(url: string, data: {}, options?: RequestInit): Promise<CustomResponse<T>> {
    const postRequestOptions = {
        ...sharedOptions,
        method: "POST",
        ...options,
        body: JSON.stringify(data)
    };

    return customFetch(`${url}`, postRequestOptions);
}

export async function patchRequest<T = any>(url: string, data: {}, options?: RequestInit): Promise<CustomResponse<T>> {
    const patchRequestOptions = {
        ...sharedOptions,
        method: "PATCH",
        ...options,
        body: JSON.stringify(data)
    };
    return customFetch(`${url}`, patchRequestOptions);
}
