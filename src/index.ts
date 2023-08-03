const isUndef = (v: unknown): boolean => v === undefined || v === null

type classesOptions =
	| Array<Record<string, any> | string>
	| Record<string, any>
	| string
/**
 * 根据条件判断生产class
 * @param options classOptions
 * @returns 返回实际渲染的class
 */
const classes = (options: classesOptions): string | undefined => {
	if (typeof options === 'string') {
		return options
	}

	if (options instanceof Array) {
		return options.map(classes).join(' ')
	}

	const isDef = !isUndef(options)
	if (isDef && typeof options === 'object') {
		return Object.keys(options)
			.filter((key: string) => !!options[key])
			.join(' ')
	}

	return undefined
}

export default classes
