import { defineConfig } from 'tsup'

export default defineConfig({
	//   打包格式
	format: ['esm'],
	// 代码拆分
	splitting: false,
	//   打包前清空
	clean: true,
	sourcemap: false,
	// 生成d.ts
	dts: './src/index.ts',
	//   入口文件
	entry: ['./src/index.ts'],
	outDir: 'dist',
})
