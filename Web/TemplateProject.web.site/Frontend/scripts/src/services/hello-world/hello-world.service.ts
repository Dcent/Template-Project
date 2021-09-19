import { getRequest } from "../../utils/http-service/service.utils";
let baseUrl = "/api/hello/";

export function getHelloWorld() {
    return getRequest(baseUrl + "World");
}

export function postHelloWorld() {
    return getRequest(baseUrl + "Space");
}
