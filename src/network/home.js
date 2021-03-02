import {
	requestMain
} from '@/network/request.js';

export function getInfo() {
	requestMain({
		url: '/admin/screen/currentInfo',
		method: 'get',
		params: {
			_: '1614322101395'
		},
	}).then(res=>{
		console.log(res)
	})
}
