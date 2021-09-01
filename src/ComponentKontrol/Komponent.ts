export function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key)
{return obj[key];}