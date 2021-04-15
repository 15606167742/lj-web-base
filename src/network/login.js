import {
	requestMain
} from '@/network/request.js';

export function login(params) {
	return requestMain({
		url: '/admin/user/login',
		method: 'post',
		params,
	})
}
