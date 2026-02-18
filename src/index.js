import { Command } from 'commander';
const program = new Command();
program
    .name('CloudSync')
    .version('1.0.0')
    .description('A simple CLI tool');
// program
//   .command('Csync')
//   .description('Sync files to the cloud')
//   .action(() => {
//     console.log('Syncing files to the cloud...');
//     // Add your sync logic here
//   });
program
    .command('hello')
    .description('Print Hello, World!')
    .action(() => {
    console.log('Hello, World!');
});
program.parse();
//# sourceMappingURL=index.js.map