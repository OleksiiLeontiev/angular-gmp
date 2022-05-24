import { TimePipe } from './time.pipe';

describe('TimePipe', () => {
  it('create an instance', () => {
    const pipe = new TimePipe();
    expect(pipe).toBeTruthy();
  });

  it('transform works with hours and minutes', () => {
    const pipe = new TimePipe();
    expect(pipe.transform(88)).toEqual('1h 28min');
  });

  it('transform works with only hours', () => {
    const pipe = new TimePipe();
    expect(pipe.transform(120)).toEqual('2h ');
  });

  it('transform works with only minutes', () => {
    const pipe = new TimePipe();
    expect(pipe.transform(59)).toEqual('59min');
  });
});
