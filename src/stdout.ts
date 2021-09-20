export default class StdOut {
  static write(text: string) {
    process.stdout.write(text);
  }

  static writeLine(text?: string) {
    if (text) {
      process.stdout.write(text);
    }
    process.stdout.write('\n');
  }
}
