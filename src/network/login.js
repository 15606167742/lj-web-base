import {
	requestMain
} from '@/network/request.js';

export function checkLogin(params) {
	requestMain({
		url: '/admin/user/login',
		method: 'post',
		params,
	}).then(res=>{
		console.log(res)
	})
}
