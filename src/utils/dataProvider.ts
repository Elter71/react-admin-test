import jsonServerProvider from 'ra-data-json-server';
import {fetchUtils, DataProvider} from "ra-core";
import {stringify} from "querystring";
import {mapCharacterApiModelToCharacter} from "../models/Character";

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
                        data: json.results.map(mapCharacterApiModelToCharacter),
                        total: json.info.count
                    };
                });
            },
})

export default dataProvider;
