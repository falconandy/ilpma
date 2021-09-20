import { Command } from '@oclif/command';
import StdOut from './stdout';

export default abstract class Base extends Command {
  protected println = (text?: string) => StdOut.writeLine(text);
}
