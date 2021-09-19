---
to: ./services/<%=folder%>/<%= h.inflection.dasherize(h.inflection.underscore(name, true)) %>.service.ts
---
import { getRequest, postRequest } from "../../utils/http-service/service.utils";
let baseUrl = "/api<%=name%>/";

export function get<%=name%>() {
   return getRequest(baseUrl + "dummyCall")
}

export function post<%=name%>(x: string, y: number) {
    let addQuery = {
        x: x,
        y: y
    };

    return postRequest(baseUrl + "dummyCall", addQuery);
}