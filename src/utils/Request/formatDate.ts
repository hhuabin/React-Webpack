const formatDate = (value: string | Date | number, fmt: string): string => {
	let date: Date;
	if (typeof value === "string" && value.constructor === String) {
		// ios 不支持 - 连接故而需要使用 / 
		date = new Date(value.replace(/T/g, ' ').replace(/-/g, '/'));
	} else if (value instanceof Object && value.constructor === Date) {
		date = value;
	} else if (typeof value === "number" && value.constructor === Number) {
		date = new Date(value);
	} else {
		console.warn("日期格式化失败，请传入正确的格式");
		return value.toString();
	}

	fmt = fmt || "YYYY/MM/DD hh:mm:ss";
	const weekList = ['日', '一', '二', '三', '四', '五', '六'];
	const fmtobj: Record<string, number | string> = {
		'M+': date.getMonth() + 1,
		'D+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds(),
		'w+': weekList[date.getDay()]
	};
	if (/(Y+)/.test(fmt)) {
		const yearLength = (fmt.match(/(Y+)/) as RegExpMatchArray)[0].length;
		fmt = fmt.replace(/(Y+)/, (date.getFullYear() + '').substring(4 - yearLength));
	}
	for (const key in fmtobj) {
		const reg = new RegExp(`(${key})`)
		if (reg.test(fmt)) {
			const str = fmtobj[key] + '', eleLength = (fmt.match(reg) as RegExpMatchArray)[0].length;
			fmt = fmt.replace(reg, (eleLength === 1 ? str : addLeftZero(str)));
		}
	}
	return fmt;
}

// 给左边加 0
const addLeftZero = (str: string): string => {
	return ("00" + str).substring(str.length);
}

export default formatDate
