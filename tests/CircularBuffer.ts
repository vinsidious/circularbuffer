import CircularBuffer from '../src/CircularBuffer';

describe(`CircularBuffer`, () => {
  let capacity, buffer;
  beforeEach(() => {
    capacity = 10;
    buffer = new CircularBuffer<any>(capacity);
  });

  it(`creates a buffer with the specified capacity`, () => {
    expect(buffer.capacity).toBe(capacity);
  });

  it(`lets you add items to the buffer`, () => {
    expect(buffer.size).toBe(0);
    buffer.enq('foo');
    expect(buffer.size).toBe(1);
  });

  it(`if the buffer is full, it will remove the oldest item as you add new items`, () => {
    buffer.capacity = 2;
    buffer.enq('foo1');
    buffer.enq('foo2');
    buffer.enq('foo3');
    buffer.enq('foo4');
    expect(buffer.deq()).toBe('foo3');
    expect(buffer.deq()).toBe('foo4');
  });

  it(`lets you entirely replace the items in the buffer`, () => {
    buffer.capacity = 5;
    const arr = ['1', '2', '3', '4', '5'];
    buffer.enq('foo', 'foo', 'bar');
    buffer.replace(...arr);
    expect(buffer.toArray()).toMatchObject(arr);
  });

  it(`it lets you get the current size via the 'length' getter`, () => {
    buffer.enq('foo');
    expect(buffer.length).toBe(1);
  });

  it(`it lets you get the current size via the 'size' getter`, () => {
    buffer.enq('foo');
    expect(buffer.size).toBe(1);
  });
});
