import Args from "./args";

export default function toArgs(...args) {
  if (args.length === 1 && args[0] instanceof Args) {
    return new Args(args[0].args);
  }
  return new Args(args);
}
