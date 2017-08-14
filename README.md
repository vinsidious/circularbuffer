# circularbuffer

A small circular/ring buffer implementation in TypeScript.

## Install

```sh
# using npm
npm install --save circularbuffer

# using yarn
yarn add circularbuffer
```

## Usage

```ts
import CircularBuffer from 'circularbuffer';

const queue = new CircularBuffer<string>(5);
queue.enq('foo');
queue.enq('bar', 'baz');
queue.toArray(); // ['foo', 'bar', 'baz']
queue.size; // 3
queue.capacity; // 5
queue.replace(1, 2, 3, 4, 5, 6, 7);
queue.toArray(); // [3, 4, 5, 6, 7]

```

## Development

```sh
# build
yarn run build

# test
yarn run test
```

## License

MIT © [Vince Coppola](https://github.com/vincecoppola)
