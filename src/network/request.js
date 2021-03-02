import axios from 'axios'
import { Loading } from 'element-ui'

const REQUEST_MAIN = axios.create({
	baseURL: WEBCONFIG.request_url_main,
	timeout: 10000,
});

let loading = null;

export function requestMain(config) {
	// 添加请求拦截器
	REQUEST_MAIN.interceptors.request.use(function(config) {
		// 在发送请求之前做些什么
		console.log(config)
		loading = Loading.service({
			lock: true,
			text: 'Loading',
			spinner: 'el-icon-loading',
			background: 'rgba(0, 0, 0, 0.7)'
		});
		return config;
	}, function(error) {
		// 对请求错误做些什么
		return Promise.reject(error);
	});

	// 添加响应拦截器
	REQUEST_MAIN.interceptors.response.use(function(response) {
		// 对响应数据做点什么
		console.log(response)
		loading.close()
		return response;
	}, function(error) {
		// 对响应错误做点什么
		loading.close()
		return Promise.reject(error);
	});

	return REQUEST_MAIN.request(config);
}
