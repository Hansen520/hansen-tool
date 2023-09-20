/*
 * @Date: 2023-04-20 10:51:06
 * @Description: description
 */
const minimist = require('minimist');
const execa = require('execa');
// minimist 是一个专门用于处理Node.js启动参数的库，可以将 process.argv 中的参数列表转换成更加易于使用的格式
const args = minimist(process.argv.slice(2));

// 获取执行命令时的参数
const target = args._.length ? args._[0] : 'reactivity';
const formats = args.f || 'global'; // esm-bndler global cjs打包的三种方式在这里声明
const sourcemap = args.s || false;

/* execa 具有shell脚本的一些功能 */
execa(
  'rollup', /* 只要执行了这个文件，rollup就会执行 */
  [
    '-wc', // 监听配置文件 --watch --config 监听并且打包，也就是rollup里面的一些命令
    '--environment',
    [`TARGET:${target}`, `FORMATS:${formats}`].filter(Boolean).join(','), // Boolean是把false都过滤掉了，新增的一些env的环境参数
  ],
  {
    stdio: 'inherit', // 这个子进程的输出是在我们当前命令行输出的
    timeout: 0, // 无超时时间
  }
);
// console.log(args, target, formats, sourcemap, process.argv, process.argv.slice(2), 28);
