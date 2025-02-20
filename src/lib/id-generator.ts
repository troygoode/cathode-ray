export default function createIdGenerator() {
  let i = 10000;
  return () => {
    return `id_${i++}`;
  };
}
