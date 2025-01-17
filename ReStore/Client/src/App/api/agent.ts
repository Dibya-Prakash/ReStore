import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { Router } from "../Router/Routes";

const sleep=()=> new Promise(resolve=>setTimeout(resolve,300));

axios.defaults.baseURL="http://localhost:5295/api/";

const responseBody=(response: AxiosResponse)=>response.data;

axios.interceptors.response.use( async response=>{
    await sleep();
    return response;
}, (error:AxiosError)=>{
    const{data,status}=error.response as AxiosResponse
    switch(status){
        case 400: 
        if(data.errors){
            const modelStateErrors:string[]=[];
            for(const key in data.errors){
                if(data.errors[key]){
                    modelStateErrors.push(data.errors[key]);
                }
            }
            throw modelStateErrors.flat();
        }
        toast.error(data.title);
        break;
        case 401: toast.error(data.title);
        break;
        case 500:
            Router.navigate('/server-error',{state: {error: data}});
        break;
        default:
            break;
    }
    return Promise.reject(error.response);
})

const requests={
    get:(url: string) => axios.get(url).then(responseBody),
    post:(url: string, body:object) => axios.post(url,body).then(responseBody),
    put:(url: string, body:object) => axios.put(url,body).then(responseBody),
    delete:(url: string) => axios.delete(url).then(responseBody)
}

const Catalog={
    list:() =>requests.get('product'),
    details: (id:number) => requests.get(`product/${id}`)
}

const TestErrors={

    get400Error: () =>requests.get('Buggy/bad-request'),
    get401Error: () =>requests.get('Buggy/unauthorized'),
    get404Error: () =>requests.get('Buggy/not-found'),
    get500Error: () =>requests.get('Buggy/server-error'),
    getValidationError: () =>requests.get('Buggy/validation-error')
}

const agent ={
    Catalog,
    TestErrors
}

export default agent;