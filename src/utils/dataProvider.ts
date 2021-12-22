import jsonServerProvider from 'ra-data-json-server';
import {fetchUtils, DataProvider} from "ra-core";
import {stringify} from "querystring";
import {mapCharacter} from "../models/Character";

const resourceMapper = (resource: string) => (model: any) => {
    switch (resource) {
        case 'character':
            return mapCharacter(model);
        default:
            return model;
    }
}

const dataProvider = (apiUrl: any, httpClient = fetchUtils.fetchJson): DataProvider =>  ({
        ...jsonServerProvider(apiUrl, httpClient),
            getList: (resource, params) => {
                const { page, perPage } = params.pagination;
                const { field, order } = params.sort;
                const query = {
                    ...fetchUtils.flattenObject(params.filter),
                    page
                };
                const url = `${apiUrl}/${resource}?${stringify(query)}`;
                return httpClient(url).then(({ json }) => {
                    if (!json.info) {
                        throw new Error(
                            'Missing info in the HTTP Response.'
                        );
                    }

                    if(!json.results){
                        throw new Error(
                            'Missing results in the HTTP Response.'
                        );
                    }
                    return {
                        data: json.results.map(resourceMapper(resource)),
                        total: json.info.count
                    };
                });
            },
    getMany: (resource, params) => {
            const idsAsStrings = params.ids.join(',')
        const url = `${apiUrl}/${resource}/${idsAsStrings}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },
})

export default dataProvider;
