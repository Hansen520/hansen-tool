/*
 * @Date: 2023-04-20 10:51:06
 * @Description: description
 */
import minimist from 'minimist';
import { execa } from 'execa';
import process from 'process';

// minimist 是一个专门用于处理Node.js启动参数的库，可以将 process.argv 中的参数列表转换成更加易于使用的格式
const args = minimist(process.argv.slice(2));
console.log(args, 11);
// 获取执行命令时的参数
const target = args._.length ? args._[0] : 'reactivity';
const formats = args.f || 'global'; // esm global cjs打包的三种方式在这里声明

/* execa 具有shell脚本的一些功能 */
execa(
  'rollup', /* 只要执行了这个文件，rollup就会执行 */
  [
    '-c', // 监听配置文件 --watch --config 监听并且打包，也就是rollup里面的一些命令
    '--environment', // rollup的配置文件里面有一个env的配置，这个配置文件里面可以配置很多环境变量
    [`TARGET:${target}`, `FORMATS:${formats}`].filter(Boolean).join(','), // process.env.TARGET = ${target} process.env.FORMATS = ${formats}
  ],
  {
    stdio: 'inherit', // 这个子进程的输出是在我们当前命令行输出的
  }
);
