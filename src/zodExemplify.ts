import { ZodType, ZodTypeAny, ZodTypeDef } from 'zod';

declare module 'zod' {
  interface ZodType<
    Output = any,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Def extends ZodTypeDef = ZodTypeDef,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Input = Output
  > {
    exemplify(example: any): ZodTypeAny;
  }
}

ZodType.prototype.exemplify = function (example: any) {
  // eslint-disable-next-line no-underscore-dangle
  if (!this._def.examples) {
    // eslint-disable-next-line no-underscore-dangle
    this._def.examples = [];
  }
  // eslint-disable-next-line no-underscore-dangle
  this._def.examples.push(this.parse(example));

  return this;
};
