import Command from '../base';

export default class Info extends Command {
  static id = 'info';

  static description = 'display information about the environment';

  static flags = { };

  static args = [];

  async run() {
    this.println('Info works 7');
  }
}
