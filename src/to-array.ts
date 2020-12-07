export default function toArray(...args) {
  switch (args.length) {
    case 0:
      return [];

    case 1:
      const arg = args[0];
      if (Array.isArray(arg)) {
        return [...arg];
      }
      return [arg];

    default:
      return args;
  }
}
