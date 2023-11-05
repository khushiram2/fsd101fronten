// import axios from "axios"


// export const AxiosInstance=axios.create()

// AxiosInstance.interceptors.request.use(
//     (config)=>{
//         const data=window.localStorage.getItem("data")
//         const parsedData=JSON.parse(data)
//         if(parsedData.token){
//             config.headers.Authorization=parsedData.token
//         }
//         return config
//     },
//     (error)=>{
//         return Promise.reject(error)
//     }
// )